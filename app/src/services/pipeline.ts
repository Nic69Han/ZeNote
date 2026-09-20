/**
 * Le chemin d'une capture : écriture d'abord, analyse ensuite.
 *
 * L'analyse n'est jamais sur le chemin critique de la capture (`design.md` — décision 1) :
 * elle est rejouée en arrière-plan, et son échec ne coûte rien à l'utilisateur, la
 * capture restant lisible et réanalysable.
 */

import { analyser } from '../analyse/index.ts';
import { identifiant } from '../analyse/index.ts';
import { transcrireAudio } from '../audio/transcripteurLocal.ts';
import { assurerCoffreCharge } from '../securite/coffre.ts';
import type {
  Capture,
  CaptureAEcrire,
  EtatTranscription,
  SourceCapture,
} from '../stockage/depot.ts';
import { enregistrementEnCours } from '../audio/enregistreur.ts';
import {
  assemblerEnregistrement,
  capturesAAnalyser,
  capturesATranscrire,
  enregistrementsInacheves,
  enregistrerCapture,
  majCapture,
  remplacerElements,
  supprimerMorceaux,
} from '../stockage/depot.ts';

/** Date du jour au format ISO `AAAA-MM-JJ`, en heure locale. */
export function aujourdhui(maintenant: Date = new Date()): string {
  const decale = new Date(maintenant.getTime() - maintenant.getTimezoneOffset() * 60_000);
  return decale.toISOString().slice(0, 10);
}

/**
 * Date et heure locales, `AAAA-MM-JJTHH:MM`.
 *
 * Les rappels raisonnent sur l'heure vécue — « ce soir » veut dire dix-huit heures
 * chez soi, pas en temps universel. Le cœur ne connaît aucun fuseau : c'est ici que
 * l'heure du porteur est établie, une fois.
 */
export function maintenantLocal(instant: Date = new Date()): string {
  const decale = new Date(instant.getTime() - instant.getTimezoneOffset() * 60_000);
  return decale.toISOString().slice(0, 16);
}

export interface NouvelleCapture {
  texte: string;
  source: SourceCapture;
  etatTranscription: EtatTranscription;
  audio?: Blob | null;
  dureeMs?: number | null;
  incomplete?: boolean;
}

/**
 * Écrit une capture et ne rend la main qu'une fois l'écriture durable confirmée.
 *
 * Aucun champ n'est demandé : ni titre, ni dossier, ni date, ni priorité.
 */
export async function capturer(entree: NouvelleCapture): Promise<Capture> {
  const capture: CaptureAEcrire = {
    id: identifiant('cap'),
    creeLe: new Date().toISOString(),
    source: entree.source,
    texte: entree.texte.trim(),
    etatTranscription: entree.etatTranscription,
    dureeMs: entree.dureeMs ?? null,
    audio: entree.audio ?? null,
    incomplete: entree.incomplete ?? false,
    analysee: false,
  };
  return enregistrerCapture(capture);
}

/**
 * Analyse une capture et remplace sa couche dérivée.
 *
 * Idempotent : rejouer l'analyse ne crée pas de doublon et ne touche ni à la source
 * ni aux décisions déjà prises par l'utilisateur.
 */
export async function analyserCapture(capture: Capture, jour = aujourdhui()): Promise<number> {
  const { elements } = analyser(capture.texte, capture.id, jour, capture.dureeMs);
  await remplacerElements(capture.id, elements);
  await majCapture(capture.id, { analysee: true });
  return elements.length;
}

/**
 * Récupère ce qu'un arrêt brutal a laissé en chemin.
 *
 * Des morceaux d'enregistrement qui traînent au démarrage ne peuvent venir que d'un
 * enregistrement que personne n'a arrêté : onglet fermé en parlant, batterie à plat,
 * système qui a repris la mémoire. La portion enregistrée existe — elle a été écrite
 * seconde par seconde — et devient une capture comme les autres, à ceci près qu'elle
 * est marquée **incomplète** : on ne sait pas ce qui a été dit après.
 *
 * L'enregistrement en cours, s'il y en a un, est laissé tranquille : ses morceaux ne
 * sont pas des restes, ils sont en train d'être écrits.
 *
 * @returns le nombre de captures récupérées.
 */
export async function recupererEnregistrements(): Promise<number> {
  const actif = enregistrementEnCours();
  let recuperees = 0;

  for (const id of await enregistrementsInacheves()) {
    if (id === actif) continue;
    try {
      const assemble = await assemblerEnregistrement(id);
      if (!assemble) continue;
      await capturer({
        texte: '',
        source: 'VOCALE',
        etatTranscription: 'ABSENTE',
        audio: assemble.audio,
        dureeMs: assemble.dureeMs,
        incomplete: true,
      });
      await supprimerMorceaux(id);
      recuperees += 1;
    } catch {
      // Coffre fermé, morceau illisible : on laisse les morceaux en place plutôt
      // que de les perdre. Le prochain démarrage réessaiera.
    }
  }
  return recuperees;
}

/** Le moteur de transcription, tel que la file l'appelle. Remplaçable dans les tests. */
export type Transcrire = (audio: Blob, surPartiel?: (texte: string) => void) => Promise<string>;

/**
 * Transcrit une capture vocale à partir de son audio, et l'écrit.
 *
 * Trois issues, et chacune laisse une trace juste :
 *  - du texte : la capture passe à `OK` et rejoint la file d'analyse ;
 *  - rien de reconnu : `ECHEC`, l'essai est compté, la Revue la présentera à
 *    reprendre — avec l'audio ;
 *  - le moteur n'a pas pu tourner (modèle injoignable, mémoire) : rien n'est compté,
 *    la file réessaiera à la prochaine occasion. Un audio indéchiffrable, lui, est
 *    compté comme un échec : le réessayer ne changerait rien.
 *
 * @returns `true` si du texte a été obtenu.
 */
export async function transcrireCapture(
  capture: Capture,
  transcrire: Transcrire = transcrireAudio,
): Promise<boolean> {
  if (!capture.audio) return false;

  let texte: string;
  try {
    texte = await transcrire(capture.audio);
  } catch (erreur) {
    const nom = erreur instanceof Error ? erreur.name : '';
    // `MoteurIndisponible` : ce navigateur ne peut pas, et ne pourra pas demain.
    // `EncodingError` : cet audio-là est indéchiffrable, le réessayer ne changerait
    // rien. Tout le reste est passager, et la file reviendra.
    if (nom === 'MoteurIndisponible' || nom === 'EncodingError') {
      await majCapture(capture.id, {
        etatTranscription: nom === 'MoteurIndisponible' ? 'INDISPONIBLE' : 'ECHEC',
        essaisTranscription: (capture.essaisTranscription ?? 0) + 1,
      });
    }
    return false;
  }

  await majCapture(capture.id, {
    texte,
    etatTranscription: texte ? 'OK' : 'ECHEC',
    essaisTranscription: (capture.essaisTranscription ?? 0) + 1,
  });
  return texte !== '';
}

/** Une seule file à la fois : deux passages simultanés transcriraient le même audio deux fois. */
let fileEnCours: Promise<number> | null = null;

/**
 * Transcrit ce qui attend, plus ancien d'abord, puis analyse ce qui a du texte.
 *
 * C'est le chemin normal d'une capture vocale depuis que la transcription se fait
 * sur l'appareil : l'appui écrit l'audio, cette file fait le reste. Sûr à rappeler
 * à tout moment — à l'ouverture, après chaque capture, quand le réseau revient.
 *
 * @param surAvancement appelé avec l'identifiant de la capture en cours et le texte
 *   reconnu jusque-là, pour que l'écran montre le travail sans l'attendre.
 * @returns le nombre de captures qui ont obtenu du texte.
 */
export function traiterFileTranscription(
  transcrire: Transcrire = transcrireAudio,
  surAvancement?: (captureId: string, partiel: string) => void,
): Promise<number> {
  if (fileEnCours) return fileEnCours;
  fileEnCours = (async () => {
    let transcrites = 0;
    try {
      // Coffre fermé : l'audio déposé est illisible, y compris par nous. On ne
      // touche à rien — surtout pas au compteur d'essais, qui ferait passer ces
      // captures pour des échecs de reconnaissance et les enverrait à réécrire.
      if ((await assurerCoffreCharge()) === 'VERROUILLE') return 0;
      for (const capture of await capturesATranscrire()) {
        const reussi = await transcrireCapture(capture, (audio) =>
          transcrire(audio, (partiel) => surAvancement?.(capture.id, partiel)),
        );
        if (reussi) transcrites += 1;
      }
      if (transcrites > 0) await traiterFileAnalyse();
    } finally {
      fileEnCours = null;
    }
    return transcrites;
  })();
  return fileEnCours;
}

/** Vide la file d'analyse, dans l'ordre de capture. Sûr à rappeler à tout moment. */
export async function traiterFileAnalyse(jour = aujourdhui()): Promise<number> {
  if ((await assurerCoffreCharge()) === 'VERROUILLE') return 0;
  const enAttente = await capturesAAnalyser();
  let produits = 0;
  for (const capture of enAttente) {
    try {
      produits += await analyserCapture(capture, jour);
    } catch {
      // Un échec d'analyse ne perd rien : la capture reste lisible et réanalysable.
    }
  }
  return produits;
}
