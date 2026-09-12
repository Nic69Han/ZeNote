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

// ---------------------------------------------------------------------------
// PROVISOIRE — remplacé par le module Kotlin
//
// Tout ce qui suit jusqu'au marqueur « FIN PROVISOIRE » est une implémentation
// temporaire, écrite pour reproduire à l'identique le comportement de
// `core/src/commonMain/kotlin/app/zenote/core/api/Regles.kt`. Elle disparaît dès
// que le module Kotlin compilé en JS est branché : il suffira de remplacer les
// trois fonctions exportées en bas de ce fichier par des appels à `ZeNoteRegles`.
// ---------------------------------------------------------------------------

/** Seuil en dessous duquel une déduction devient une question posée en Revue. */
export const SEUIL_CONFIANCE = 0.75;

/** La vue Maintenant ne montre jamais plus de trois choses à la fois. */
export const MAX_PROPOSITIONS = 3;

/** L'ordre des constantes est l'ordre d'urgence. */
const URGENCES = [
  'DEPASSEE',
  'AUJOURD_HUI',
  'DEMAIN',
  'CETTE_SEMAINE',
  'PLUS_TARD',
  'AUCUNE',
] as const;
type Urgence = (typeof URGENCES)[number];

const LIBELLE_URGENCE: Record<Urgence, string> = {
  DEPASSEE: 'échéance dépassée',
  AUJOURD_HUI: "échéance aujourd'hui",
  DEMAIN: 'échéance demain',
  CETTE_SEMAINE: 'échéance cette semaine',
  PLUS_TARD: 'échéance plus tard',
  AUCUNE: 'sans échéance',
};

const POIDS = ['FAIBLE', 'MOYEN', 'FORT'] as const;
type Poids = (typeof POIDS)[number];

const TYPES = ['TACHE', 'ENGAGEMENT', 'ATTENTE', 'INFORMATION', 'DECISION', 'IDEE'];

/** Seuls ces deux types peuvent apparaître dans la vue Maintenant. */
function actionnable(type: string): boolean {
  return type === 'TACHE' || type === 'ENGAGEMENT';
}

/** Nombre de jours calendaires entre deux dates ISO `AAAA-MM-JJ`. */
function joursEntre(depuis: string, jusqua: string): number {
  const a = Date.parse(`${depuis}T00:00:00Z`);
  const b = Date.parse(`${jusqua}T00:00:00Z`);
  return Math.round((b - a) / 86_400_000);
}

function urgenceDe(echeance: string | null | undefined, aujourdhui: string): Urgence {
  if (!echeance) return 'AUCUNE';
  const jours = joursEntre(aujourdhui, echeance);
  if (jours < 0) return 'DEPASSEE';
  if (jours === 0) return 'AUJOURD_HUI';
  if (jours === 1) return 'DEMAIN';
  if (jours <= 7) return 'CETTE_SEMAINE';
  return 'PLUS_TARD';
}

/** Les deux seuls cas qui font monter un élément d'un cran. */
function presse(u: Urgence): boolean {
  return u === 'DEPASSEE' || u === 'AUJOURD_HUI';
}

function dUnCranPlusHaut(p: Poids): Poids {
  return p === 'FAIBLE' ? 'MOYEN' : 'FORT';
}

/** Une déduction sous le seuil se pose en question, pas en fait. */
function aConfirmer(e: ElementJson): boolean {
  return [e.echeanceConfiance, e.poidsConfiance, e.interlocuteurConfiance]
    .filter((c): c is number => typeof c === 'number')
    .some((c) => c < SEUIL_CONFIANCE);
}

/** Ce sur quoi le poids se fonde : c'est ce texte qui sert de justification. */
function indicePoids(e: ElementJson): string | null {
  if (e.corrigeParHumain && e.poids) return 'poids fixé à la main';
  return e.poidsIndice ?? null;
}

function decoder(elementsJson: string): ElementJson[] {
  const brut: unknown = JSON.parse(elementsJson);
  if (!Array.isArray(brut)) throw new Error('Les éléments doivent être un tableau JSON.');
  return brut as ElementJson[];
}

function maintenantProvisoire(elementsJson: string, aujourdhui: string): string {
  const propositions = decoder(elementsJson)
    .filter((e) => e.verdict === 'ACCEPTE' && actionnable(e.type))
    .map((e) => {
      const urgence = urgenceDe(e.echeance, aujourdhui);
      // Poids retenu quand le modèle n'a pas su en déduire un.
      const poids: Poids = (e.poids as Poids | null | undefined) ?? 'MOYEN';
      const effectif = presse(urgence) ? dUnCranPlusHaut(poids) : poids;
      const consequence = indicePoids(e) ?? 'poids non déterminé, à confirmer en Revue';
      return {
        elementId: e.id,
        texte: e.texte,
        raison: `${consequence} — ${LIBELLE_URGENCE[urgence]}`,
        poidsEffectif: effectif,
        urgence,
      };
    })
    // On classe par poids, jamais par échéance seule : trier par date reproduirait
    // l'effet de simple urgence au lieu de le corriger.
    .sort(
      (a, b) =>
        POIDS.indexOf(b.poidsEffectif as Poids) - POIDS.indexOf(a.poidsEffectif as Poids) ||
        URGENCES.indexOf(a.urgence) - URGENCES.indexOf(b.urgence) ||
        // Départage stable, pour que deux appels donnent le même ordre.
        (a.elementId < b.elementId ? -1 : a.elementId > b.elementId ? 1 : 0),
    )
    .slice(0, MAX_PROPOSITIONS);
  return JSON.stringify(propositions);
}

function revueProvisoire(elementsJson: string, aujourdhui: string): string {
  const entrees: EntreeRevueJson[] = decoder(elementsJson)
    .filter((e) => e.verdict === 'EN_ATTENTE')
    .map((e) => ({
      element: e,
      aConfirmer: aConfirmer(e),
      // Un élément accepté sans plan ni classement « un jour » est incomplet.
      planManquant: e.verdict === 'ACCEPTE' && actionnable(e.type) && !e.planDeclencheur,
      urgence: urgenceDe(e.echeance, aujourdhui),
    }));

  const parCapture = new Map<string, EntreeRevueJson[]>();
  for (const entree of entrees) {
    const cle = entree.element.captureId;
    const groupe = parCapture.get(cle);
    if (groupe) groupe.push(entree);
    else parCapture.set(cle, [entree]);
  }

  const ordre = (u: string) => {
    const i = URGENCES.indexOf(u as Urgence);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };

  // Les captures sont présentées dans l'ordre de leur entrée la plus pressante ;
  // à l'intérieur d'un groupe, l'urgent puis l'incertain d'abord.
  const groupes = [...parCapture.entries()]
    .map(([captureId, dansLeGroupe]) => ({
      captureId,
      entrees: [...dansLeGroupe].sort(
        (a, b) =>
          ordre(a.urgence) - ordre(b.urgence) ||
          Number(b.aConfirmer) - Number(a.aConfirmer) ||
          (a.element.id < b.element.id ? -1 : a.element.id > b.element.id ? 1 : 0),
      ),
    }))
    .sort(
      (a, b) =>
        Math.min(...a.entrees.map((e) => ordre(e.urgence))) -
          Math.min(...b.entrees.map((e) => ordre(e.urgence))) ||
        (a.captureId < b.captureId ? -1 : a.captureId > b.captureId ? 1 : 0),
    );

  return JSON.stringify({ groupes, total: entrees.length } satisfies RevueJson);
}

function ancrageProvisoire(texteSource: string, elementsJson: string): string {
  const retenus: ElementJson[] = [];
  const ecartes: { texte: string; raison: string }[] = [];

  for (const e of decoder(elementsJson)) {
    const raison = raisonDeRejet(e, texteSource);
    if (raison === null) retenus.push(e);
    else ecartes.push({ texte: e.texte, raison });
  }

  return JSON.stringify({ retenus, ecartes } satisfies AncrageJson);
}

function raisonDeRejet(e: ElementJson, texteSource: string): string | null {
  if (!e.texte || e.texte.trim() === '') return 'élément sans texte';
  if (e.debutCar < 0 || e.finCar <= e.debutCar) return 'passage source vide ou incohérent';
  if (e.finCar > texteSource.length) return 'passage source absent du texte de la capture';
  if (!TYPES.includes(e.type)) return `type inconnu : ${e.type}`;
  return null;
}

// --------------------------------------------------------- FIN PROVISOIRE ---

/** Vue Maintenant : `ElementJson[]` + date ISO → `PropositionJson[]`. */
export function maintenant(elementsJson: string, aujourdhui: string): string {
  return maintenantProvisoire(elementsJson, aujourdhui);
}

/** File de Revue : `ElementJson[]` + date ISO → `RevueJson`. */
export function revue(elementsJson: string, aujourdhui: string): string {
  return revueProvisoire(elementsJson, aujourdhui);
}

/** Ancrage : texte source + `ElementJson[]` → `AncrageJson`. */
export function filtrerAncrage(texteSource: string, elementsJson: string): string {
  return ancrageProvisoire(texteSource, elementsJson);
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
