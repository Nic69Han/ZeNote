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
import type { PassageIncertain } from '../core/regles.ts';

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
 * En dessous de quoi un mot est tenu pour mal entendu.
 *
 * Le moteur rend une confiance par mot, entre 0 et 1, et met 1 sur la plupart des
 * mots qu'il reconnaît franchement. Le seuil est donc haut : ce qu'on cherche à
 * attraper n'est pas le mot moyennement sûr, c'est celui que le moteur a proposé
 * faute de mieux. Trop bas, plus rien ne serait signalé ; trop haut, tout le
 * serait, et le marquage ne voudrait plus rien dire.
 */
const SEUIL_MOT_SUR = 0.8;

/** Ce qu'une transcription rend : le texte, et ce que le moteur a mal entendu. */
export interface Transcription {
  texte: string;
  /** Positions de caractères dans [texte], fusionnées quand elles se touchent. */
  passagesIncertains: PassageIncertain[];
}

/**
 * Transcrit un enregistrement. Rend un texte vide quand rien n'a été reconnu.
 *
 * Le Worker traite les messages dans l'ordre et répond à chacun — un résultat ou un
 * partiel par morceau, puis un résultat final. Attendre exactement autant de
 * réponses que de messages envoyés est ce qui dit, sans ambiguïté, que tout a été
 * entendu. Les résultats intermédiaires tombent aux pauses de la parole ; le texte
 * est leur concaténation.
 *
 * Le texte est reconstruit mot à mot plutôt que repris du champ `text` du moteur :
 * c'est ce qui permet de savoir où chaque mot commence, donc de désigner exactement
 * les passages mal entendus. Les deux formes coïncident — le moteur joint ses mots
 * par une espace — mais reconstruire est la seule façon de ne pas le supposer.
 */
export async function transcrireAudio(
  blob: Blob,
  surPartiel?: (texte: string) => void,
): Promise<Transcription> {
  if (!transcriptionLocaleDisponible()) throw new MoteurIndisponible();
  const [modele, signal] = await Promise.all([chargerModele(), decoderEnSignal(blob)]);
  const reconnaisseur = new modele.KaldiRecognizer(FREQUENCE);
  try {
    // Sans ça, le moteur ne rend que le texte : ni découpe en mots, ni confiance.
    reconnaisseur.setWords(true);

    const morceaux = Math.ceil(signal.length / TAILLE_MORCEAU);
    const attendus = morceaux + 1;
    let recus = 0;
    const phrases: string[] = [];
    /** Les mots reconnus, dans l'ordre, avec ce que le moteur pensait d'eux. */
    const mots: { mot: string; confiance: number }[] = [];

    const termine = new Promise<void>((resoudre, rejeter) => {
      const compter = () => {
        recus += 1;
        if (recus >= attendus) resoudre();
      };
      reconnaisseur.on('result', (message) => {
        const rendu = (message as {
          result?: { text?: string; result?: { word: string; conf: number }[] };
        }).result;
        const texte = rendu?.text?.trim();
        if (texte) {
          phrases.push(texte);
          for (const { word, conf } of rendu?.result ?? []) {
            mots.push({ mot: word, confiance: conf });
          }
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

    // Le moteur peut rendre du texte sans découpe en mots (selon le modèle) : on
    // rend alors le texte tel quel, sans prétendre savoir où était le doute.
    if (mots.length === 0) {
      return { texte: phrases.join(' ').replace(/\s+/g, ' ').trim(), passagesIncertains: [] };
    }
    return assembler(mots);
  } finally {
    reconnaisseur.remove();
    programmerDechargement();
  }
}

/**
 * Reconstruit le texte à partir des mots, en notant au passage ce qui était douteux.
 *
 * Les passages qui se touchent sont fusionnés : trois mots mal entendus d'affilée
 * forment un passage, pas trois. C'est ce qui permet à la règle d'ancrage du cœur de
 * reconnaître un élément qui ne vient que de là, et à l'écran de souligner une
 * portion de phrase plutôt qu'un mot sur deux.
 */
function assembler(mots: { mot: string; confiance: number }[]): Transcription {
  let texte = '';
  const passagesIncertains: PassageIncertain[] = [];

  for (const { mot, confiance } of mots) {
    if (texte !== '') texte += ' ';
    const debutCar = texte.length;
    texte += mot;
    if (confiance >= SEUIL_MOT_SUR) continue;

    const dernier = passagesIncertains[passagesIncertains.length - 1];
    // `debutCar - 1` est l'espace qui sépare deux mots : deux mots douteux
    // consécutifs ne doivent pas rendre deux passages.
    if (dernier && dernier.finCar >= debutCar - 1) {
      dernier.finCar = texte.length;
    } else {
      passagesIncertains.push({ debutCar, finCar: texte.length });
    }
  }

  return { texte, passagesIncertains };
}
