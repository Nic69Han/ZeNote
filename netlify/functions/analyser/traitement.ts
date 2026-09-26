/**
 * Le service d'analyse distante : ce qu'il reçoit, ce qu'il demande, ce qu'il rend.
 *
 * Spec `analyse-distante` (change `analyse-typesafe`), décisions 2 et 3 de
 * `design.md`. Ce module ne dépend pas du SDK TypeSafe : le client lui est fourni,
 * ce qui permet de le vérifier avec un client simulé et de garder le SDK hors de
 * tout ce que l'application construit.
 *
 * Il ne juge que deux choses par passage, le type et la sphère. Il ne produit aucun
 * texte : les passages sont découpés sur l'appareil, et l'ancrage reste l'affaire du
 * cœur. Il ne journalise jamais un passage, seulement des nombres.
 */

/** Les types d'élément, tels que le cœur les nomme (`TypeElement`). */
export const TYPES = ['TACHE', 'ENGAGEMENT', 'ATTENTE', 'INFORMATION', 'DECISION', 'IDEE'] as const;
/** Les sphères, plus le refus explicite de trancher. */
export const SPHERES = ['PROFESSIONNEL', 'PERSONNEL', 'INDECIDABLE'] as const;

export type Type = (typeof TYPES)[number];
export type SphereJugee = (typeof SPHERES)[number];

export interface ReponsePassage {
  type: Type;
  typeConfiance: number;
  sphere: SphereJugee;
  sphereConfiance: number;
}

export interface ReponseAnalyse {
  modele: string;
  reponses: ReponsePassage[];
}

/** Au-delà, une capture est anormale : mieux vaut la garder sur l'appareil. */
export const PASSAGES_MAX = 40;
export const LONGUEUR_PASSAGE_MAX = 2000;
/** Sous le délai de 4 s du client : la fonction abandonne avant lui, sans relance. */
export const DELAI_FOURNISSEUR_MS = 3500;

// ------------------------------------------------------------ les questions

/**
 * Chaque option dit ce qu'elle est **et ce qu'elle n'est pas** : Jev lit les
 * critères à la lettre. Les définitions reprennent `TypeElement` (`Derive.kt`).
 */
export const CRITERES_TYPE: Record<Type, string> = {
  TACHE:
    'L’auteur de la note doit faire quelque chose lui-même. Ce n’est pas une promesse ' +
    'faite à une personne (engagement), ni une chose attendue de quelqu’un d’autre (attente).',
  ENGAGEMENT:
    'L’auteur a promis quelque chose à quelqu’un : il y a un destinataire, nommé ou désigné. ' +
    'Sans destinataire, c’est une tâche.',
  ATTENTE:
    'Quelqu’un d’autre doit quelque chose à l’auteur : un retour, une réponse, une livraison. ' +
    'L’auteur n’a rien à faire, sauf relancer.',
  INFORMATION:
    'Un fait à retenir. Ni action à faire, ni promesse, ni chose attendue, ni choix arrêté.',
  DECISION:
    'Un choix arrêté, avec ou sans sa raison. Ce n’est pas une action à faire, même si le ' +
    'choix en entraîne une.',
  IDEE:
    'Une piste à explorer un jour, sans engagement ni échéance. Ce n’est pas une tâche décidée.',
};

export const CRITERES_SPHERE: Record<SphereJugee, string> = {
  PROFESSIONNEL: 'Le travail : clients, collègues, projets, réunions, budget, employeur.',
  PERSONNEL: 'La vie privée : famille, enfants, santé, maison, amis, loisirs.',
  INDECIDABLE:
    'Le passage ne permet pas de trancher entre travail et vie privée. À choisir plutôt ' +
    'que de deviner.',
};

/**
 * Les mêmes critères, rédigés en anglais : Jev est entraîné d'abord en anglais. Le
 * contenu jugé reste en français. Change `analyse-typesafe`, tâche 5.2 : l'évaluation
 * compare les deux rédactions avant d'en retenir une.
 */
export const CRITERES_TYPE_EN: Record<Type, string> = {
  TACHE:
    'The author of the note must do something themselves. Not a promise made to a person ' +
    '(commitment), nor something expected from someone else (waiting).',
  ENGAGEMENT:
    'The author promised something to someone: there is a recipient, named or designated. ' +
    'Without a recipient, it is a task.',
  ATTENTE:
    'Someone else owes the author something: a reply, an answer, a delivery. The author has ' +
    'nothing to do except follow up.',
  INFORMATION: 'A fact to remember. No action to take, no promise, nothing expected, no settled choice.',
  DECISION:
    'A settled choice, with or without its reason. Not an action to take, even if the choice ' +
    'leads to one.',
  IDEE: 'An idea to explore someday, with no commitment and no deadline. Not a decided task.',
};

export const CRITERES_SPHERE_EN: Record<SphereJugee, string> = {
  PROFESSIONNEL: 'Work: clients, colleagues, projects, meetings, budget, employer.',
  PERSONNEL: 'Private life: family, children, health, home, friends, leisure.',
  INDECIDABLE: 'The passage does not allow deciding between work and private life. Prefer this to guessing.',
};

export type Langue = 'fr' | 'en';

const CONTEXTE: Record<Langue, string> = {
  fr:
    'Notes dictées ou tapées en français par une seule personne, l’auteur, pour elle-même. ' +
    'Chaque élément de `passages` est un passage d’une même note, jugé séparément.',
  en:
    'Notes dictated or typed in French by a single person, the author, for themselves. ' +
    'Each item of `passages` is a passage of the same note, judged separately.',
};

export interface QuestionChoix {
  type: 'choice';
  instructions?: unknown;
  criteria: Record<string, unknown>;
}

/** La forme de `choice()` du SDK, fournie par l'appelant. */
export type FabriqueChoix = (instructions: string, criteres: Record<string, string>) => QuestionChoix;

/** Deux questions par passage, dans une seule requête : `type_i` et `sphere_i`. */
export function construireQuestions(
  nombre: number,
  choix: FabriqueChoix,
  langue: Langue = 'fr',
): Record<string, QuestionChoix> {
  const questions: Record<string, QuestionChoix> = {};
  for (let i = 0; i < nombre; i++) {
    // Le passage est désigné par son chemin dans l'état, jamais recopié ici.
    const chemin = `\`passages[${i}]\``;
    questions[`type_${i}`] =
      langue === 'en'
        ? choix(`What kind of item is the passage ${chemin}?`, CRITERES_TYPE_EN)
        : choix(`Quel est le type du passage ${chemin} ?`, CRITERES_TYPE);
    questions[`sphere_${i}`] =
      langue === 'en'
        ? choix(`Which sphere of the author’s life does the passage ${chemin} belong to?`, CRITERES_SPHERE_EN)
        : choix(`À quelle sphère de la vie de l’auteur le passage ${chemin} appartient-il ?`, CRITERES_SPHERE);
  }
  return questions;
}

// ---------------------------------------------------------------- le client

export interface ReponseFournisseur {
  model: string;
  usage: { input_tokens: number; output_tokens: number };
  answers: Record<string, { choice: string; confidence: number } | undefined>;
}

/** Ce que la fonction attend d'un client TypeSafe : un seul appel. */
export interface ClientTypeSafe {
  systemOne(
    requete: { state: unknown; questions: Record<string, QuestionChoix> },
    options?: { timeout?: number },
  ): PromiseLike<ReponseFournisseur>;
}

/** Une ligne de journal : des nombres et des motifs, jamais un passage. */
export type Journal = (evenement: Record<string, string | number>) => void;

/**
 * L'utilisateur connecté à l'origine de la requête, ou `null`.
 *
 * Obligatoire : sans compte identifié, la fonction refuse avant de créer le client et
 * avant de lire le corps. Rien ne part vers le fournisseur pour un appelant anonyme.
 */
export type Identification = (requete: Request) => string | null | Promise<string | null>;

/**
 * La limite d'appels du compte : `null` pour accepter (et compter), sinon le refus.
 * Change `comptes-utilisateurs`, décision 8.
 */
export type ControleQuota = (compteId: string) => Promise<{ portee: 'jour' | 'mois'; reessayerDans: number } | null>;

export interface Dependances {
  identifier: Identification;
  quota: ControleQuota;
  /** `null` quand aucune clé n'est configurée. */
  creerClient: () => ClientTypeSafe | null;
  choix: FabriqueChoix;
  journal: Journal;
  maintenant?: () => number;
  /** La langue des consignes ; le contenu jugé reste celui des passages. */
  langue?: Langue;
}

// ---------------------------------------------------------------- la requête

function repondre(statut: number, corps: unknown, entetes: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(corps), {
    status: statut,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Une analyse ne se met jamais en cache : ni chez l'hébergeur, ni en route.
      'Cache-Control': 'no-store',
      ...entetes,
    },
  });
}

/** `{ passages: string[] }` et rien d'autre, ou `null`. */
function lirePassages(corps: unknown): string[] | null {
  if (typeof corps !== 'object' || corps === null || Array.isArray(corps)) return null;
  const cles = Object.keys(corps);
  if (cles.length !== 1 || cles[0] !== 'passages') return null;
  const passages = (corps as { passages: unknown }).passages;
  if (!Array.isArray(passages) || passages.length === 0 || passages.length > PASSAGES_MAX) return null;
  const valides = passages.every(
    (p) => typeof p === 'string' && p.trim() !== '' && p.length <= LONGUEUR_PASSAGE_MAX,
  );
  return valides ? (passages as string[]) : null;
}

function estDans<T extends string>(liste: readonly T[], valeur: string): valeur is T {
  return (liste as readonly string[]).includes(valeur);
}

function confianceValide(c: unknown): c is number {
  return typeof c === 'number' && Number.isFinite(c) && c >= 0 && c <= 1;
}

/**
 * Traduit la réponse du fournisseur, ou `null` si elle ne couvre pas tout.
 *
 * Même règle que côté appareil (décision 3) : une réponse partielle mélangerait deux
 * analyseurs dans une capture sans que rien ne le dise. Elle est rejetée en entier.
 */
export function traduire(reponse: ReponseFournisseur, nombre: number): ReponsePassage[] | null {
  const reponses: ReponsePassage[] = [];
  for (let i = 0; i < nombre; i++) {
    const type = reponse.answers[`type_${i}`];
    const sphere = reponse.answers[`sphere_${i}`];
    if (!type || !sphere) return null;
    if (!estDans(TYPES, type.choice) || !estDans(SPHERES, sphere.choice)) return null;
    if (!confianceValide(type.confidence) || !confianceValide(sphere.confidence)) return null;
    reponses.push({
      type: type.choice,
      typeConfiance: type.confidence,
      sphere: sphere.choice,
      sphereConfiance: sphere.confidence,
    });
  }
  return reponses;
}

export async function traiter(requete: Request, dependances: Dependances): Promise<Response> {
  const { journal } = dependances;
  const maintenant = dependances.maintenant ?? Date.now;
  const langue = dependances.langue ?? 'fr';

  if (requete.method !== 'POST') {
    return repondre(405, { motif: 'methode-refusee' });
  }

  // Le compte d'abord : un appelant anonyme ne coûte rien, pas même la lecture de
  // son corps, et ne découvre pas si une clé est configurée.
  let utilisateur: string | null;
  try {
    utilisateur = await dependances.identifier(requete);
  } catch {
    utilisateur = null;
  }
  if (!utilisateur) {
    journal({ evenement: 'analyse-refusee', motif: 'authentification-requise' });
    return repondre(401, { motif: 'authentification-requise' }, { 'WWW-Authenticate': 'Bearer realm="zenote"' });
  }

  const client = dependances.creerClient();
  if (!client) {
    journal({ evenement: 'analyse-refusee', motif: 'non-configure' });
    return repondre(503, { motif: 'non-configure' });
  }

  // Compté avant l'appel, qui est facturé même quand sa réponse est rejetée. Le corps
  // n'est toujours pas lu : un refus pour quota ne coûte rien.
  const refusQuota = await dependances.quota(utilisateur);
  if (refusQuota) {
    journal({ evenement: 'analyse-refusee', motif: 'quota-atteint', portee: refusQuota.portee });
    return repondre(
      429,
      { motif: 'quota-atteint', portee: refusQuota.portee },
      { 'Retry-After': String(refusQuota.reessayerDans) },
    );
  }

  let corps: unknown;
  try {
    corps = await requete.json();
  } catch {
    return repondre(400, { motif: 'requete-invalide' });
  }
  const passages = lirePassages(corps);
  if (!passages) {
    journal({ evenement: 'analyse-refusee', motif: 'requete-invalide' });
    return repondre(400, { motif: 'requete-invalide' });
  }

  const debut = maintenant();
  let reponse: ReponseFournisseur;
  try {
    reponse = await client.systemOne(
      {
        state: { contexte: CONTEXTE[langue], passages },
        questions: construireQuestions(passages.length, dependances.choix, langue),
      },
      { timeout: DELAI_FOURNISSEUR_MS },
    );
  } catch (erreur) {
    // Le nom de la classe d'erreur suffit à diagnostiquer ; son message pourrait
    // citer la requête, il n'est donc pas journalisé.
    journal({
      evenement: 'analyse-echouee',
      motif: 'fournisseur-indisponible',
      erreur: erreur instanceof Error ? erreur.name : 'inconnue',
      passages: passages.length,
      dureeMs: maintenant() - debut,
    });
    return repondre(502, { motif: 'fournisseur-indisponible' });
  }

  const reponses = traduire(reponse, passages.length);
  journal({
    evenement: reponses ? 'analyse' : 'analyse-incomplete',
    modele: reponse.model,
    passages: passages.length,
    jetonsEntree: reponse.usage.input_tokens,
    jetonsSortie: reponse.usage.output_tokens,
    dureeMs: maintenant() - debut,
  });
  if (!reponses) return repondre(502, { motif: 'reponse-incomplete' });

  const resultat: ReponseAnalyse = { modele: reponse.model, reponses };
  return repondre(200, resultat);
}
