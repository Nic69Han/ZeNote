/**
 * Le client de l'analyse distante, côté appareil.
 *
 * Spec `analyse-distante` — « Repli sur l'analyse locale », « Réponse incohérente
 * écartée ». Voir `design.md` de la change `analyse-typesafe`, décisions 3 et 6.
 *
 * Il n'envoie que le texte des passages, à `/api/analyser` de la même origine, et
 * n'attend jamais plus de 4 s. Toute autre issue qu'une réponse complète et valide
 * laisse l'analyse locale intacte : `reecrire` ne touche aux éléments que sur un
 * succès. Ce module ne décide pas s'il faut envoyer : c'est `peutTransmettre`.
 */

import type { ElementJson } from '../core/regles.ts';

export const POINT_ANALYSE = '/api/analyser';
export const DELAI_ANALYSE_MS = 4000;

const TYPES = ['TACHE', 'ENGAGEMENT', 'ATTENTE', 'INFORMATION', 'DECISION', 'IDEE'] as const;
const SPHERES = ['PROFESSIONNEL', 'PERSONNEL', 'INDECIDABLE'] as const;

export interface JugementPassage {
  type: ElementJson['type'];
  typeConfiance: number;
  sphere: (typeof SPHERES)[number];
  sphereConfiance: number;
}

export type IssueAnalyseDistante =
  | { issue: 'OK'; modele: string; jugements: JugementPassage[] }
  /** Sans réseau : rien n'est tenté. */
  | { issue: 'HORS_LIGNE' }
  /** Le délai imparti est dépassé : la requête est abandonnée. */
  | { issue: 'DELAI_DEPASSE' }
  /** Le service refuse un appelant sans compte connecté (401 ou 403). */
  | { issue: 'COMPTE_REQUIS' }
  /** Le service répond qu'il n'a pas de clé. */
  | { issue: 'NON_CONFIGURE' }
  /** Toute autre réponse d'échec du service. */
  | { issue: 'INDISPONIBLE'; statut: number }
  /** Une réponse qui ne couvre pas tout, ou sort des listes attendues. */
  | { issue: 'REPONSE_INVALIDE' };

export interface OptionsAnalyseDistante {
  fetch?: typeof fetch;
  delaiMs?: number;
  /** `false` quand l'appareil se sait hors ligne. */
  enLigne?: () => boolean;
}

function dans<T extends string>(liste: readonly T[], valeur: unknown): valeur is T {
  return typeof valeur === 'string' && (liste as readonly string[]).includes(valeur);
}

function confiance(c: unknown): c is number {
  return typeof c === 'number' && Number.isFinite(c) && c >= 0 && c <= 1;
}

/**
 * La réponse, si elle couvre exactement les passages envoyés ; sinon `null`.
 *
 * Rejet en entier (décision 3) : une réponse partielle mélangerait deux analyseurs
 * dans une même capture sans que rien ne le dise.
 */
export function valider(corps: unknown, nombre: number): { modele: string; jugements: JugementPassage[] } | null {
  if (typeof corps !== 'object' || corps === null) return null;
  const { modele, reponses } = corps as { modele?: unknown; reponses?: unknown };
  if (typeof modele !== 'string' || modele.trim() === '') return null;
  if (!Array.isArray(reponses) || reponses.length !== nombre) return null;

  const jugements: JugementPassage[] = [];
  for (const r of reponses as unknown[]) {
    if (typeof r !== 'object' || r === null) return null;
    const { type, typeConfiance, sphere, sphereConfiance } = r as Record<string, unknown>;
    if (!dans(TYPES, type) || !dans(SPHERES, sphere)) return null;
    if (!confiance(typeConfiance) || !confiance(sphereConfiance)) return null;
    jugements.push({ type, typeConfiance, sphere, sphereConfiance });
  }
  return { modele, jugements };
}

/** Demande au service de juger ces passages. Ne lève jamais : toute issue est rendue. */
export async function analyserADistance(
  passages: string[],
  options: OptionsAnalyseDistante = {},
): Promise<IssueAnalyseDistante> {
  const enLigne = options.enLigne ?? (() => typeof navigator === 'undefined' || navigator.onLine !== false);
  // Hors ligne, une tentative ne ferait que retarder la Revue jusqu'au délai.
  if (!enLigne()) return { issue: 'HORS_LIGNE' };

  const envoyer = options.fetch ?? fetch;
  const abandon = new AbortController();
  const minuterie = setTimeout(() => abandon.abort(), options.delaiMs ?? DELAI_ANALYSE_MS);

  try {
    const reponse = await envoyer(POINT_ANALYSE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Rien d'autre que les passages : ni identifiant, ni date, ni cookie, ni page
      // d'origine.
      body: JSON.stringify({ passages }),
      credentials: 'omit',
      cache: 'no-store',
      referrerPolicy: 'no-referrer',
      signal: abandon.signal,
    });
    if (reponse.status === 401 || reponse.status === 403) return { issue: 'COMPTE_REQUIS' };
    if (reponse.status === 503) return { issue: 'NON_CONFIGURE' };
    if (!reponse.ok) return { issue: 'INDISPONIBLE', statut: reponse.status };

    let corps: unknown;
    try {
      corps = await reponse.json();
    } catch {
      if (abandon.signal.aborted) return { issue: 'DELAI_DEPASSE' };
      return { issue: 'REPONSE_INVALIDE' };
    }
    const valide = valider(corps, passages.length);
    return valide ? { issue: 'OK', ...valide } : { issue: 'REPONSE_INVALIDE' };
  } catch {
    if (abandon.signal.aborted) return { issue: 'DELAI_DEPASSE' };
    // `fetch` ne lève que lorsque la requête n'a pas pu aboutir.
    return { issue: 'HORS_LIGNE' };
  } finally {
    clearTimeout(minuterie);
  }
}

/**
 * Les éléments, réécrits par le jugement distant sur un succès, intacts sinon.
 *
 * Seuls le type, la sphère, leurs confiances et l'origine changent : le texte et les
 * bornes restent ceux de l'analyse locale, puisque le service ne juge que des
 * passages découpés sur l'appareil. `INDECIDABLE` ne se rattache à aucune sphère.
 *
 * @param elements les candidats de l'analyse locale, dans l'ordre des passages envoyés
 */
export function reecrire(elements: ElementJson[], issue: IssueAnalyseDistante): ElementJson[] {
  if (issue.issue !== 'OK' || issue.jugements.length !== elements.length) return elements;
  return elements.map((e, i) => {
    const j = issue.jugements[i];
    return {
      ...e,
      type: j.type,
      typeConfiance: j.typeConfiance,
      sphere: j.sphere === 'INDECIDABLE' ? null : j.sphere,
      sphereConfiance: j.sphereConfiance,
      origineAnalyse: { moteur: 'TYPESAFE', modele: issue.modele },
    };
  });
}
