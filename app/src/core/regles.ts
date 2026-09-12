/**
 * Frontière unique entre l'application et le cœur métier.
 *
 * Les règles du produit (classement de Maintenant, ordre de la Revue, ancrage dans le
 * texte source) vivent dans le module Kotlin `core/`, compilé en JS. Cette frontière
 * expose exactement les trois fonctions du pont `ZeNoteRegles` : entrée JSON, sortie
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

export interface RevueJson {
  groupes: { captureId: string; entrees: EntreeRevueJson[] }[];
  total: number;
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
  filtrerAncrage(texteSource: string, elementsJson: string): string;
  rechercherParMots(
    requete: string,
    elementsJson: string,
    capturesJson: string,
    reseau: boolean,
  ): string;
  rechercherParPersonne(personne: string, elementsJson: string, reseau: boolean): string;
  readonly version: string;
};

/** Version du contrat portée par le cœur : elle doit valoir celle attendue ici. */
export const VERSION_CONTRAT_ATTENDUE = '2';

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

/** Ancrage : texte source + `ElementJson[]` → `AncrageJson`. */
export function filtrerAncrage(texteSource: string, elementsJson: string): string {
  return Regles.filtrerAncrage(texteSource, elementsJson);
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

export function rechercherParPersonneObjets(
  personne: string,
  elements: ElementJson[],
  reseau: boolean,
): ReponseJson {
  return JSON.parse(
    rechercherParPersonne(personne, JSON.stringify(elements), reseau),
  ) as ReponseJson;
}
