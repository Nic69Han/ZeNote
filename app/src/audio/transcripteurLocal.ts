/**
 * Transcription embarquée : Vosk (Kaldi compilé en WebAssembly), modèle français,
 * entièrement sur l'appareil, sans réseau une fois le modèle en cache.
 *
 * Pourquoi ce moteur plutôt que celui du navigateur. La reconnaissance vocale de
 * Chrome (`webkitSpeechRecognition`) n'écoute que le micro en direct, ne sait rien
 * transcrire après coup, et sur Android passe par un service tiers qui veut le micro
 * pour lui seul — pendant qu'on enregistre, il n'entend rien. Résultat mesuré chez
 * l'utilisateur : un bouton qui ne fait rien, aucune transcription, rien en Revue.
 *
 * Ici la chaîne est différente et ne dépend plus de personne : on enregistre l'audio,
 * on l'écrit en base — la capture est déjà en sécurité — puis on le transcrit à
 * partir du fichier, en arrière-plan, dans un Worker. La qualité du petit modèle est
 * moindre que celle du service de Chrome ; sa fiabilité est totale, et l'audio reste
 * là pour corriger.
 */

import type { Model } from 'vosk-browser';

/** Le modèle français, servi avec l'application et mis en cache au premier usage. */
export const ADRESSE_MODELE = '/modeles/vosk-fr-0.22.tar.gz';

/** La fréquence d'échantillonnage attendue par le modèle. */
const FREQUENCE = 16_000;

/** Un quart de seconde d'audio par message au Worker : assez pour l'efficacité, assez peu pour suivre. */
const TAILLE_MORCEAU = 4_000;

/**
 * Après ce délai sans transcription, le modèle est déchargé : il tient une part
 * notable de la mémoire d'un téléphone, et le recharger depuis le cache coûte deux
 * secondes, pas quarante mégaoctets.
 */
const REPOS_AVANT_DECHARGEMENT_MS = 90_000;

/** Ce que le navigateur doit offrir pour que le moteur puisse tourner. */
export function transcriptionLocaleDisponible(): boolean {
  return (
    typeof WebAssembly !== 'undefined' &&
    typeof Worker !== 'undefined' &&
    typeof OfflineAudioContext !== 'undefined'
  );
}

/**
 * Levée quand le navigateur ne peut pas faire tourner le moteur du tout. Distincte
 * d'une panne passagère (modèle injoignable) : celle-ci ne se réessaie pas.
 */
export class MoteurIndisponible extends Error {
  constructor() {
    super("Ce navigateur ne peut pas faire tourner la transcription embarquée.");
    this.name = 'MoteurIndisponible';
  }
}

let modeleEnCours: Promise<Model> | null = null;
let minuterieDechargement: ReturnType<typeof setTimeout> | undefined;

/**
 * Charge le modèle, une fois. Un échec — modèle injoignable, mémoire refusée —
 * n'est pas mémorisé : le prochain appel réessaie.
 */
export function chargerModele(): Promise<Model> {
  clearTimeout(minuterieDechargement);
  modeleEnCours ??= import('vosk-browser')
    // Niveau -1 : avertissements et erreurs seulement. Les journaux d'information du
    // moteur sont bavards et n'apprennent rien à l'utilisateur.
    .then(({ createModel }) => createModel(ADRESSE_MODELE, -1))
    .catch((erreur: unknown) => {
      modeleEnCours = null;
      throw erreur;
    });
  return modeleEnCours;
}

/** Programme le déchargement du modèle après la période de repos. */
function programmerDechargement(): void {
  clearTimeout(minuterieDechargement);
  minuterieDechargement = setTimeout(() => {
    void modeleEnCours?.then((modele) => modele.terminate()).catch(() => {});
    modeleEnCours = null;
  }, REPOS_AVANT_DECHARGEMENT_MS);
}

/**
 * Décode un enregistrement (webm/opus, ogg, wav…) en un signal mono à 16 kHz.
 *
 * Le décodage passe par un `OfflineAudioContext` calé sur 16 kHz : il rééchantillonne
 * lui-même. Le second contexte ne sert que si le navigateur a rendu autre chose que
 * demandé, ce qui arrive.
 */
export async function decoderEnSignal(blob: Blob): Promise<Float32Array> {
  const tampon = await blob.arrayBuffer();
  const contexte = new OfflineAudioContext(1, 1, FREQUENCE);
  const decode = await contexte.decodeAudioData(tampon);
  if (decode.sampleRate === FREQUENCE && decode.numberOfChannels === 1) {
    return decode.getChannelData(0);
  }
  const longueur = Math.max(1, Math.ceil(decode.duration * FREQUENCE));
  const reechantillonneur = new OfflineAudioContext(1, longueur, FREQUENCE);
  const source = reechantillonneur.createBufferSource();
  source.buffer = decode;
  source.connect(reechantillonneur.destination);
  source.start();
  return (await reechantillonneur.startRendering()).getChannelData(0);
}

/**
 * Transcrit un enregistrement. Rend une chaîne vide quand rien n'a été reconnu.
 *
 * Le Worker traite les messages dans l'ordre et répond à chacun — un résultat ou un
 * partiel par morceau, puis un résultat final. Attendre exactement autant de
 * réponses que de messages envoyés est ce qui dit, sans ambiguïté, que tout a été
 * entendu. Les résultats intermédiaires tombent aux pauses de la parole ; le texte
 * est leur concaténation.
 */
export async function transcrireAudio(
  blob: Blob,
  surPartiel?: (texte: string) => void,
): Promise<string> {
  if (!transcriptionLocaleDisponible()) throw new MoteurIndisponible();
  const [modele, signal] = await Promise.all([chargerModele(), decoderEnSignal(blob)]);
  const reconnaisseur = new modele.KaldiRecognizer(FREQUENCE);
  try {
    const morceaux = Math.ceil(signal.length / TAILLE_MORCEAU);
    const attendus = morceaux + 1;
    let recus = 0;
    const phrases: string[] = [];

    const termine = new Promise<void>((resoudre, rejeter) => {
      const compter = () => {
        recus += 1;
        if (recus >= attendus) resoudre();
      };
      reconnaisseur.on('result', (message) => {
        const texte = (message as { result?: { text?: string } }).result?.text?.trim();
        if (texte) {
          phrases.push(texte);
          surPartiel?.(phrases.join(' '));
        }
        compter();
      });
      reconnaisseur.on('partialresult', (message) => {
        const partiel = (message as { result?: { partial?: string } }).result?.partial?.trim();
        if (partiel) surPartiel?.([...phrases, partiel].join(' '));
        compter();
      });
      reconnaisseur.on('error', (message) => {
        rejeter(new Error((message as { error?: string }).error ?? 'erreur du moteur'));
      });
    });

    for (let debut = 0; debut < signal.length; debut += TAILLE_MORCEAU) {
      // `slice` copie : le tampon d'origine reste lisible après le transfert au Worker.
      reconnaisseur.acceptWaveformFloat(signal.slice(debut, debut + TAILLE_MORCEAU), FREQUENCE);
    }
    reconnaisseur.retrieveFinalResult();
    await termine;

    return phrases.join(' ').replace(/\s+/g, ' ').trim();
  } finally {
    reconnaisseur.remove();
    programmerDechargement();
  }
}
