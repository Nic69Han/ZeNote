/**
 * Frontière unique entre l'application et le cœur métier.
 *
 * Les règles du produit (classement de Maintenant, ordre de la Revue, ancrage dans le
 * texte source) vivent dans le module Kotlin `core/`, compilé en JS. Cette frontière
 * expose exactement les fonctions du pont `ZeNoteRegles` : entrée JSON, sortie
 * JSON, aucun état. Aucun autre fichier de l'application ne doit réimplémenter ces
 * règles ni contourner ce module.
 */

export interface ElementJson {
  id: string;
  captureId: string;
  type: 'TACHE' | 'ENGAGEMENT' | 'ATTENTE' | 'INFORMATION' | 'DECISION' | 'IDEE';
  texte: string;
  debutCar: number;
  finCar: number;
  debutMs?: number | null;
  finMs?: number | null;
  echeance?: string | null;
  echeanceConfiance?: number | null;
  echeanceIndice?: string | null;
  poids?: 'FAIBLE' | 'MOYEN' | 'FORT' | null;
  poidsConfiance?: number | null;
  poidsIndice?: string | null;
  interlocuteur?: string | null;
  interlocuteurConfiance?: number | null;
  sphere?: 'PROFESSIONNEL' | 'PERSONNEL' | null;
  planDeclencheur?: string | null;
  planAction?: string | null;
  verdict: 'EN_ATTENTE' | 'ACCEPTE' | 'UN_JOUR' | 'REJETE';
  corrigeParHumain: boolean;
}

export interface PropositionJson {
  elementId: string;
  texte: string;
  raison: string;
  poidsEffectif: string;
  urgence: string;
}

export interface EntreeRevueJson {
  element: ElementJson;
  aConfirmer: boolean;
  planManquant: boolean;
  urgence: string;
}

/** Une relance proposée en Revue : le produit se souvient à votre place. */
export interface RelanceJson {
  elementId: string;
  texte: string;
  /** ENGAGEMENT ou ATTENTE. */
  type: string;
  interlocuteur: string | null;
  echeance: string | null;
  /** Pourquoi elle remonte maintenant. Jamais un reproche. */
  motif: string;
  /** RELANCER, PROLONGER, CLORE. */
  options: string[];
}

/** La dernière nouvelle connue sur une attente. */
export interface SuiviJson {
  elementId: string;
  derniereNouvelle: string;
}

export interface RevueJson {
  groupes: { captureId: string; entrees: EntreeRevueJson[] }[];
  /** La file entière, y compris ce qui n'est pas présenté aujourd'hui. */
  total: number;
  /**
   * `true` quand la file dépassait ce qu'une Revue absorbe. Les groupes ne portent
   * alors que les entrées retenues : le reste demeure en file, intact.
   */
  reduite: boolean;
  /** La phrase du cœur expliquant la réduction. L'écran ne la réécrit pas. */
  motifReduction: string;
  /** Combien d'entrées demeurent en file. Un reste, jamais un retard. */
  demeurentEnFile: number;
}

export interface AncrageJson {
  retenus: ElementJson[];
  ecartes: { texte: string; raison: string }[];
}

/** Une capture telle qu'on la passe à la recherche : ce qu'elle lit, rien de plus. */
export interface CaptureJson {
  id: string;
  texte: string;
  creeLe: string;
  /**
   * Le jour de la capture vu par son auteur, en ISO (`AAAA-MM-JJ`).
   *
   * Distinct de `creeLe`, qui est en temps universel : une capture de 23 h 30 y tombe
   * le lendemain. Seule l'application sait dans quel fuseau son porteur vit. Absent,
   * la capture reste hors de portée des questions à repère temporel — elle n'est
   * jamais rattachée à une période au hasard.
   */
  jour?: string | null;
}

/** Ce que la surface retient d'un rappel entre deux ouvertures de l'application. */
export interface SuiviRappelJson {
  elementId: string;
  /** Le moment où le plan a été attaché, en heure locale (`AAAA-MM-JJTHH:MM`). */
  planPoseLe: string;
  /** Combien de fois ce rappel a déjà été présenté puis écarté sans être traité. */
  foisIgnore: number;
}

/** Un rappel présenté à un point de rupture. */
export interface RappelLivreJson {
  elementId: string;
  texte: string;
  /** Le signal tel que l'utilisateur l'a formulé. */
  declencheur: string;
  /**
   * Non vide quand ZeNote ne sait pas observer ce signal et l'a ramené à la reprise
   * de l'appareil. L'écran l'affiche : un rappel qui arrive au mauvais moment sans le
   * dire est pire qu'un rappel absent.
   */
  substitution: string;
  /** `true` si le signal s'était produit avant ce point de rupture. Un constat. */
  enRetard: boolean;
}

/** Un rappel qui ne se représente plus à l'identique, et que la Revue reprend. */
export interface EscaladeJson {
  elementId: string;
  texte: string;
  motif: string;
  /** REPLANIFIER, DELEGUER, ABANDONNER. */
  options: string[];
}

/**
 * Ce qu'un point de rupture livre. `titre` est vide quand il n'y a rien à présenter —
 * et il n'y a alors rien à afficher : une notification vide est une interruption sans
 * contenu.
 */
export interface RappelsDuMomentJson {
  titre: string;
  rappels: RappelLivreJson[];
  escalades: EscaladeJson[];
}

/** Ce dont une réponse de recherche se réclame. Jamais un score. */
export interface CitationJson {
  captureId: string;
  extrait: string;
  pourquoi: string;
  elementId: string | null;
}

/**
 * Une réponse de recherche. `fondee` vaut `false` quand rien ne correspond : l'énoncé
 * le dit alors, et `citations` est vide. C'est ce qui rend impossible d'afficher une
 * affirmation que rien ne porte.
 */
export interface ReponseJson {
  question: string;
  enonce: string;
  fondee: boolean;
  citations: CitationJson[];
  indisponibleHorsLigne: string[];
  /**
   * Ce que la question demandait et que le produit ne sait pas faire — par
   * construction, pas par panne. L'écran l'affiche : répondre à moitié sans le dire
   * laisserait croire que la question entière a été honorée.
   */
  nonPrisEnCompte: string[];
}

// ----------------------------------------------------------- le vrai cœur ---
// Les règles ci-dessous ne sont PAS écrites ici : elles viennent du module
// Kotlin `core/`, compilé en JavaScript et déposé dans `vendor/zenote-core/`
// par `scripts/sync-core-js.sh`.
//
// C'est délibéré et c'est le point d'architecture qui tient tout : la PWA
// d'aujourd'hui et les applications natives de demain appellent exactement le
// même classement. Réécrire ces règles en TypeScript les ferait diverger — ce
// que toute la conception cherche à empêcher.

import coeur from '../../vendor/zenote-core/zenote-core.js';

const Regles = (coeur as any).app.zenote.core.js.ZeNoteRegles as {
  maintenant(elementsJson: string, aujourdhui: string): string;
  revue(elementsJson: string, aujourdhui: string): string;
  transcriptionLisible(brut: string): string;
  filtrerAncrage(texteSource: string, elementsJson: string): string;
  relances(
    elementsJson: string,
    aujourdhui: string,
    suivisJson: string,
    delaisJson: string,
  ): string;
  rechercherParMots(
    requete: string,
    elementsJson: string,
    capturesJson: string,
    reseau: boolean,
  ): string;
  rechercherParQuestion(
    requete: string,
    elementsJson: string,
    capturesJson: string,
    aujourdhui: string,
    reseau: boolean,
  ): string;
  rappels(elementsJson: string, maintenant: string, suivisJson: string): string;
  rechercherParPersonne(personne: string, elementsJson: string, reseau: boolean): string;
  readonly version: string;
};

/** Version du contrat portée par le cœur : elle doit valoir celle attendue ici. */
export const VERSION_CONTRAT_ATTENDUE = '6';

if (Regles.version !== VERSION_CONTRAT_ATTENDUE) {
  throw new Error(
    `Cœur incompatible : contrat ${Regles.version} alors que l'application attend ` +
      `${VERSION_CONTRAT_ATTENDUE}. Relancez scripts/sync-core-js.sh.`,
  );
}

/** Seuil sous lequel une déduction devient une question posée en Revue. */
export const SEUIL_CONFIANCE = 0.75;

/** La vue Maintenant ne montre jamais plus de trois choses à la fois. */
export const MAX_PROPOSITIONS = 3;

/** Vue Maintenant : `ElementJson[]` + date ISO → `PropositionJson[]`. */
export function maintenant(elementsJson: string, aujourdhui: string): string {
  return Regles.maintenant(elementsJson, aujourdhui);
}

/** File de Revue : `ElementJson[]` + date ISO → `RevueJson`. */
export function revue(elementsJson: string, aujourdhui: string): string {
  return Regles.revue(elementsJson, aujourdhui);
}

/**
 * La version lisible d'une transcription : hésitations et répétitions immédiates en
 * moins, le sens intact.
 *
 * Rend le texte inchangé quand il n'y a rien à retirer : l'appelant sait alors qu'il
 * n'a pas deux versions à proposer. Le brut reste la couche source — c'est lui que
 * l'extraction lit, les ancrages étant des positions dans ce texte-là.
 */
export function transcriptionLisible(brut: string): string {
  return Regles.transcriptionLisible(brut);
}

/** Ancrage : texte source + `ElementJson[]` → `AncrageJson`. */
export function filtrerAncrage(texteSource: string, elementsJson: string): string {
  return Regles.filtrerAncrage(texteSource, elementsJson);
}

/** Relances du jour : `ElementJson[]` + `SuiviJson[]` + délais → `RelanceJson[]`. */
export function relances(
  elementsJson: string,
  aujourdhui: string,
  suivisJson: string,
  delaisJson: string,
): string {
  return Regles.relances(elementsJson, aujourdhui, suivisJson, delaisJson);
}

/** Recherche par mots : `ElementJson[]` + `CaptureJson[]` → `ReponseJson`. */
export function rechercherParMots(
  requete: string,
  elementsJson: string,
  capturesJson: string,
  reseau: boolean,
): string {
  return Regles.rechercherParMots(requete, elementsJson, capturesJson, reseau);
}

/**
 * Recherche par question : les mots, plus le repère temporel qu'elle porte —
 * « la semaine dernière », « avant-hier », « il y a trois jours ».
 */
export function rechercherParQuestion(
  requete: string,
  elementsJson: string,
  capturesJson: string,
  aujourdhui: string,
  reseau: boolean,
): string {
  return Regles.rechercherParQuestion(requete, elementsJson, capturesJson, aujourdhui, reseau);
}

/**
 * Rappels d'un point de rupture : `ElementJson[]` + date-heure locale +
 * `SuiviRappelJson[]` → `RappelsDuMomentJson`.
 */
export function rappels(
  elementsJson: string,
  maintenant: string,
  suivisJson: string,
): string {
  return Regles.rappels(elementsJson, maintenant, suivisJson);
}

/** Recherche par personne : nom + `ElementJson[]` → `ReponseJson`. */
export function rechercherParPersonne(
  personne: string,
  elementsJson: string,
  reseau: boolean,
): string {
  return Regles.rechercherParPersonne(personne, elementsJson, reseau);
}

// ------------------------------------------------------- confort d'appel ----
// Enveloppes typées : elles ne contiennent aucune règle, seulement le (dé)codage
// JSON du contrat ci-dessus. Elles restent valables après le branchement Kotlin.

export function maintenantObjets(elements: ElementJson[], aujourdhui: string): PropositionJson[] {
  return JSON.parse(maintenant(JSON.stringify(elements), aujourdhui)) as PropositionJson[];
}

export function revueObjets(elements: ElementJson[], aujourdhui: string): RevueJson {
  return JSON.parse(revue(JSON.stringify(elements), aujourdhui)) as RevueJson;
}

export function filtrerAncrageObjets(texteSource: string, elements: ElementJson[]): AncrageJson {
  return JSON.parse(filtrerAncrage(texteSource, JSON.stringify(elements))) as AncrageJson;
}

export function rechercherParMotsObjets(
  requete: string,
  elements: ElementJson[],
  captures: CaptureJson[],
  reseau: boolean,
): ReponseJson {
  return JSON.parse(
    rechercherParMots(requete, JSON.stringify(elements), JSON.stringify(captures), reseau),
  ) as ReponseJson;
}

export function rechercherParQuestionObjets(
  requete: string,
  elements: ElementJson[],
  captures: CaptureJson[],
  aujourdhui: string,
  reseau: boolean,
): ReponseJson {
  return JSON.parse(
    rechercherParQuestion(
      requete,
      JSON.stringify(elements),
      JSON.stringify(captures),
      aujourdhui,
      reseau,
    ),
  ) as ReponseJson;
}

export function rappelsObjets(
  elements: ElementJson[],
  maintenant: string,
  suivis: SuiviRappelJson[],
): RappelsDuMomentJson {
  return JSON.parse(
    rappels(JSON.stringify(elements), maintenant, JSON.stringify(suivis)),
  ) as RappelsDuMomentJson;
}

export function rechercherParPersonneObjets(
  personne: string,
  elements: ElementJson[],
  reseau: boolean,
): ReponseJson {
  return JSON.parse(
    rechercherParPersonne(personne, JSON.stringify(elements), reseau),
  ) as ReponseJson;
}

export function relancesObjets(
  elements: ElementJson[],
  aujourdhui: string,
  suivis: SuiviJson[] = [],
  delais: Record<string, number> = {},
): RelanceJson[] {
  return JSON.parse(
    relances(JSON.stringify(elements), aujourdhui, JSON.stringify(suivis), JSON.stringify(delais)),
  ) as RelanceJson[];
}
