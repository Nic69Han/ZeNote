/**
 * L'export intégral : les données de l'utilisateur, lisibles sans ZeNote.
 *
 * Le critère de réussite n'est pas « l'application sait se relire » mais « quelqu'un
 * qui ouvre ce fichier sans ZeNote comprend ce qu'il lit ». Le document produit porte
 * donc, avant les données : sa version de format, sa date, un mode d'emploi en clair
 * et un dictionnaire de ses propres champs.
 *
 * Ce module ne fait que composer : il lit par le dépôt, n'écrit rien, et ne décide
 * d'aucune règle métier.
 */

import { aujourdhui } from './pipeline.ts';
import {
  lireReglages,
  listerCaptures,
  listerElements,
  type Capture,
  type ElementStocke,
  type Reglages,
} from '../stockage/depot.ts';

/** Nom du format, écrit dans le fichier : de quoi le reconnaître sans contexte. */
export const FORMAT_EXPORT = 'zenote-export';

/**
 * Version du format d'export. À incrémenter dès qu'un champ change de sens ou
 * disparaît : un export vieux de deux ans doit rester interprétable.
 */
export const VERSION_FORMAT_EXPORT = 1;

/**
 * L'audio n'est PAS placé dans ce fichier, et le fichier le dit lui-même.
 *
 * Le seul autre choix serait le base64. Il gonfle les octets d'un tiers, et quelques
 * minutes dictées suffisent à produire un fichier de plusieurs mégaoctets qu'aucun
 * éditeur de texte n'ouvre confortablement : illisible, donc contraire au seul critère
 * qui compte ici. Pire, le repli « afficher le JSON et le copier » — celui qui sauve
 * l'export quand le téléchargement est bloqué — deviendrait inutilisable au moment
 * précis où on en a besoin.
 *
 * Le son reste donc sur l'appareil. En contrepartie, l'export garde la trace exacte de
 * ce qu'il n'emporte pas (présence, taille, type) pour que personne ne croie tenir un
 * export complet. Une archive qui embarque vraiment les fichiers audio est un autre
 * format — un ZIP, un fichier par capture — et reste à faire.
 */
export interface AudioNonInclus {
  /** Toujours faux : le son n'est jamais placé dans ce fichier. */
  inclus: false;
  /** Vrai si un enregistrement existe bien, sur l'appareil, pour cette capture. */
  presentSurLAppareil: boolean;
  octets: number | null;
  typeMime: string | null;
}

/** Ce que l'export dit de l'audio, tout en haut, avant les données. */
export interface ResumeAudio {
  inclus: false;
  capturesAvecAudio: number;
  octetsNonInclus: number;
  explication: string;
}

/** Une capture telle qu'exportée : la capture stockée, moins le son, plus sa trace. */
export interface CaptureExportee {
  id: string;
  creeLe: string;
  source: Capture['source'];
  texte: string;
  etatTranscription: Capture['etatTranscription'];
  dureeMs: number | null;
  incomplete: boolean;
  analysee: boolean;
  essaisTranscription: number;
  audio: AudioNonInclus;
}

export interface ExportZeNote {
  format: typeof FORMAT_EXPORT;
  versionFormat: number;
  /** Horodatage ISO de l'export lui-même. */
  exporteLe: string;
  lisezMoi: string[];
  totaux: { captures: number; elements: number };
  audio: ResumeAudio;
  champs: { captures: Record<string, string>; elements: Record<string, string> };
  reglages: Reglages;
  captures: CaptureExportee[];
  elements: ElementStocke[];
}

/** Le mode d'emploi, en français, dans le fichier. Il ne suppose rien de connu. */
const LISEZ_MOI: string[] = [
  'Ceci est un export de ZeNote, une application de capture et de revue de notes.',
  'Le fichier est du JSON : n’importe quel éditeur de texte, tableur ou script le lit.',
  'Deux listes portent les données. « captures » contient les notes telles qu’elles ont ' +
    'été dictées ou écrites : c’est la source, elle n’est jamais modifiée. « elements » ' +
    'contient ce que l’analyse en a tiré — tâches, engagements, informations.',
  'Le lien entre les deux est la traçabilité, et c’est le cœur de cet export : chaque ' +
    'élément porte « captureId », l’identifiant de la capture dont il vient, ainsi que ' +
    '« debutCar » et « finCar », les positions du passage exact dans le texte de cette ' +
    'capture. Pour retrouver la phrase d’origine d’un élément : prendre la capture dont ' +
    'l’« id » vaut son « captureId », puis en découper le « texte » entre ces deux ' +
    'positions (indices de caractères, début inclus, fin exclue).',
  'L’objet « champs » ci-dessous décrit chaque champ des deux listes, un par un.',
  'L’audio des captures dictées n’est PAS dans ce fichier ; l’objet « audio » dit ' +
    'précisément ce qui manque et pourquoi.',
  'Toutes les dates sont au format ISO 8601. Les horodatages sont en temps universel ' +
    '(UTC, suffixe Z) ; les échéances sont des jours, sans heure.',
];

const CHAMPS_CAPTURES: Record<string, string> = {
  id: 'Identifiant de la capture. C’est lui que les éléments citent dans « captureId ».',
  creeLe: 'Date et heure de la capture (ISO 8601, UTC).',
  source: 'VOCALE si la note a été dictée, ECRITE si elle a été tapée.',
  texte:
    'La transcription ou la saisie, brute, non reformulée. Les positions « debutCar » et ' +
    '« finCar » des éléments s’y réfèrent.',
  etatTranscription:
    'OK : texte obtenu. ABSENTE : audio en attente de transcription. EN_COURS : transcription ' +
    'en cours au moment de l’export. INDISPONIBLE : ce navigateur ne pouvait pas faire tourner ' +
    'le moteur embarqué. ECHEC : le moteur n’a rien reconnu — l’audio a malgré tout été conservé.',
  dureeMs: 'Durée de l’enregistrement en millisecondes, ou null si la note a été écrite.',
  incomplete: 'Vrai si l’application s’est arrêtée pendant l’enregistrement.',
  analysee: 'Vrai si l’analyse a déjà produit les éléments de cette capture.',
  essaisTranscription:
    'Combien de fois le moteur embarqué a été mené à son terme sur cet audio. Zéro : pas ' +
    'encore tenté, la file s’en charge.',
  audio:
    'Ce que devient le son : « inclus » vaut toujours faux dans ce format. ' +
    '« presentSurLAppareil » dit si un enregistrement existe bien, « octets » sa taille et ' +
    '« typeMime » son format.',
};

const CHAMPS_ELEMENTS: Record<string, string> = {
  id: 'Identifiant de l’élément.',
  captureId: 'Identifiant de la capture d’origine — le lien de traçabilité.',
  type:
    'TACHE, ENGAGEMENT (pris envers quelqu’un), ATTENTE (attendu de quelqu’un), ' +
    'INFORMATION, DECISION ou IDEE.',
  texte: 'L’énoncé de l’élément, tel qu’il est présenté à l’utilisateur.',
  debutCar: 'Position du premier caractère du passage source dans « captures[].texte ».',
  finCar: 'Position de fin du passage source (exclue).',
  debutMs: 'Début du passage dans l’audio, en millisecondes, si connu.',
  finMs: 'Fin du passage dans l’audio, en millisecondes, si connue.',
  echeance: 'Jour d’échéance déduit ou corrigé (AAAA-MM-JJ), ou null.',
  echeanceConfiance: 'Confiance de la déduction d’échéance, de 0 à 1. 1 = fixée à la main.',
  echeanceIndice: 'En clair, ce qui a fait déduire cette échéance.',
  poids: 'FAIBLE, MOYEN ou FORT : ce que coûte de ne pas le faire.',
  poidsConfiance: 'Confiance de la déduction de poids, de 0 à 1. 1 = fixé à la main.',
  poidsIndice: 'En clair, ce qui a fait déduire ce poids.',
  interlocuteur: 'La personne concernée, si elle a été reconnue.',
  interlocuteurConfiance: 'Confiance de la reconnaissance de l’interlocuteur, de 0 à 1.',
  sphere: 'PROFESSIONNEL ou PERSONNEL, si la distinction a été faite.',
  planDeclencheur: 'Le déclencheur choisi : « quand X », plutôt qu’une heure.',
  planAction: 'L’action à faire à ce déclencheur.',
  verdict:
    'EN_ATTENTE : pas encore passé en Revue. ACCEPTE : retenu. UN_JOUR : gardé sans date. ' +
    'REJETE : écarté par l’utilisateur.',
  corrigeParHumain: 'Vrai si l’utilisateur a corrigé cet élément à la main.',
  faitLe: 'Date et heure auxquelles l’élément a été marqué fait, ou absent s’il ne l’est pas.',
};

/** Ce que l'export dit du son qu'il n'emporte pas. */
function resumerAudio(captures: Capture[]): ResumeAudio {
  const avecAudio = captures.filter((c) => c.audio instanceof Blob);
  return {
    inclus: false,
    capturesAvecAudio: avecAudio.length,
    octetsNonInclus: avecAudio.reduce((total, c) => total + (c.audio?.size ?? 0), 0),
    explication:
      'Les enregistrements audio ne sont pas dans ce fichier : encodés en texte, ils le ' +
      'rendraient illisible pour un humain, ce qui est justement ce que cet export cherche ' +
      'à éviter. Ils restent sur l’appareil, dans l’application. Chaque capture indique ' +
      'ci-dessous si un enregistrement existe et quelle taille il fait.',
  };
}

function exporterCapture(capture: Capture): CaptureExportee {
  return {
    id: capture.id,
    creeLe: capture.creeLe,
    source: capture.source,
    texte: capture.texte,
    etatTranscription: capture.etatTranscription,
    dureeMs: capture.dureeMs,
    incomplete: capture.incomplete,
    analysee: capture.analysee,
    essaisTranscription: capture.essaisTranscription ?? 0,
    audio: {
      inclus: false,
      presentSurLAppareil: capture.audio instanceof Blob,
      octets: capture.audio?.size ?? null,
      typeMime: capture.audio?.type || null,
    },
  };
}

/**
 * Construit le document d'export à partir de tout ce que contient le dépôt.
 *
 * Un export vide reste un document complet : en-tête, mode d'emploi et dictionnaire
 * sont toujours là, seules les listes sont vides. C'est ce qui permet de relire le
 * format sans avoir besoin de données.
 */
export async function construireExport(maintenant: Date = new Date()): Promise<ExportZeNote> {
  const [captures, elements, reglages] = await Promise.all([
    listerCaptures(),
    listerElements(),
    lireReglages(),
  ]);

  // Les éléments sont regroupés par capture puis remis dans l'ordre du texte source :
  // l'export se lit alors dans l'ordre où les choses ont été dites.
  const ordonnes = [...elements].sort(
    (a, b) => a.captureId.localeCompare(b.captureId) || a.debutCar - b.debutCar,
  );

  return {
    format: FORMAT_EXPORT,
    versionFormat: VERSION_FORMAT_EXPORT,
    exporteLe: maintenant.toISOString(),
    lisezMoi: LISEZ_MOI,
    totaux: { captures: captures.length, elements: ordonnes.length },
    audio: resumerAudio(captures),
    champs: { captures: CHAMPS_CAPTURES, elements: CHAMPS_ELEMENTS },
    reglages,
    captures: captures.map(exporterCapture),
    elements: ordonnes,
  };
}

/** Met le document en JSON indenté : il est fait pour être lu à l'œil, pas seulement parsé. */
export function serialiser(documentExport: ExportZeNote): string {
  return `${JSON.stringify(documentExport, null, 2)}\n`;
}

/** Raccourci : construit puis sérialise. */
export async function exporterJson(maintenant: Date = new Date()): Promise<string> {
  return serialiser(await construireExport(maintenant));
}

export function nomFichierExport(maintenant: Date = new Date()): string {
  return `zenote-export-${aujourdhui(maintenant)}.json`;
}

/**
 * Propose le fichier au téléchargement par `<a download>`.
 *
 * Rend `false` quand l'environnement ne permet même pas de l'essayer. Attention : un
 * `true` ne prouve PAS que le fichier est arrivé — certains contextes d'affichage
 * bloquent le téléchargement sans rien dire, et rien dans la page ne permet de le
 * savoir. C'est exactement pour cela que l'écran affiche toujours le repli copiable,
 * sans attendre de savoir si le téléchargement a marché.
 */
export function proposerTelechargement(contenu: string, nomFichier: string): boolean {
  if (typeof document === 'undefined' || typeof URL.createObjectURL !== 'function') return false;
  let adresse: string | null = null;
  try {
    adresse = URL.createObjectURL(new Blob([contenu], { type: 'application/json;charset=utf-8' }));
    const lien = document.createElement('a');
    lien.href = adresse;
    lien.download = nomFichier;
    lien.rel = 'noopener';
    lien.hidden = true;
    document.body.append(lien);
    lien.click();
    lien.remove();
    return true;
  } catch {
    return false;
  } finally {
    // L'URL doit survivre au clic ; on la rend ensuite plutôt que de fuir la mémoire.
    const aLiberer = adresse;
    if (aLiberer) setTimeout(() => URL.revokeObjectURL(aLiberer), 30_000);
  }
}

/**
 * Copie dans le presse-papiers. Rend `false` si le navigateur ne le permet pas — et
 * l'écran dit alors de sélectionner le texte à la main, ce qui marche toujours.
 */
export async function copierDansPressePapier(
  texte: string,
  presse: { writeText(t: string): Promise<void> } | undefined = globalThis.navigator?.clipboard,
): Promise<boolean> {
  if (!presse || typeof presse.writeText !== 'function') return false;
  try {
    await presse.writeText(texte);
    return true;
  } catch {
    return false;
  }
}
