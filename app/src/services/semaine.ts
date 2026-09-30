/**
 * La semaine, calculée et jamais stockée.
 *
 * Spec `retour-semaine` — « Retour sur la semaine ». ZeNote a tout ce qu'il faut pour
 * dire ce qui s'est passé depuis sept jours — ce qui a été fait, ce qui a été
 * abandonné, ce qui n'avance plus — et ne le montre jamais d'un seul tenant. Le recul
 * est l'étape que les outils personnels font le plus souvent sauter.
 *
 * ## Des constats, pas une note
 *
 * Ce module range des éléments en trois groupes et s'arrête là. Il ne produit ni
 * pourcentage, ni taux de réalisation, ni série de jours, ni comparaison avec une
 * autre semaine : ce sont des mesures qui transforment un moment de recul en
 * tableau de bord de sa propre culpabilité. Un groupe vide reste vide, sans
 * commentaire.
 *
 * Rien n'est écrit en base : le bilan se recalcule depuis les éléments, il ne peut
 * donc pas contredire les notes, et il n'y a rien à migrer.
 */

import { aRevoirObjets } from '../core/regles.ts';
import { suivisElementDe, type ElementStocke } from '../stockage/depot.ts';

/** Une ligne du bilan : toujours l'élément concerné, cité par son texte. */
export interface LigneSemaine {
  elementId: string;
  texte: string;
  /** Pour « ce qui n'avance plus » : le constat du cœur, affichable tel quel. */
  motif?: string;
}

export interface BilanSemaine {
  /** Fait pendant la période (et non abandonné). */
  avance: LigneSemaine[];
  /** Abandonné pendant la période, ou classé « un jour ». */
  lache: LigneSemaine[];
  /** Ce qui n'avance plus aujourd'hui, selon le cœur. */
  bloque: LigneSemaine[];
}

/** La durée du retour, en jours. Une semaine : c'est ce que dit l'écran. */
export const JOURS_DE_LA_SEMAINE = 7;

/** Le jour local d'un instant : `AAAA-MM-JJ` tel quel, ou date-heure ramenée au jour vécu. */
export function jourDe(instant: string | null | undefined): string | null {
  if (!instant) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(instant)) return instant;
  const date = new Date(instant);
  if (Number.isNaN(date.getTime())) return null;
  const p = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

/** Combien de jours entre deux jours `AAAA-MM-JJ` (positif si `apres` vient après). */
export function joursEntre(avant: string, apres: string): number {
  const ms = (jour: string) => {
    const [a, m, j] = jour.split('-').map(Number);
    return Date.UTC(a, m - 1, j);
  };
  return Math.round((ms(apres) - ms(avant)) / 86_400_000);
}

/** Le premier jour de la période, `jours` jours en comptant `jusquA`. */
function debutDePeriode(jusquA: string, jours: number): string {
  const fin = new Date(`${jusquA}T00:00:00Z`);
  fin.setUTCDate(fin.getUTCDate() - (jours - 1));
  return fin.toISOString().slice(0, 10);
}

/**
 * Les sept derniers jours (aujourd'hui compris), en trois groupes.
 *
 *  - **avancé** : `faitLe` dans la période, sans verdict `REJETE` — un élément
 *    abandonné porte lui aussi `faitLe`, et le compter comme avancé serait faux ;
 *  - **lâché** : abandonné (`REJETE` + `faitLe`) dans la période, ou classé « un
 *    jour ». On ne connaît pas la date du passage à « un jour » : on retient `vuLe`
 *    ou `planPoseLe` quand ils tombent dans la période, et sinon on s'abstient —
 *    mieux vaut un oubli qu'une date inventée ;
 *  - **bloqué** : ce qu'`aRevoirObjets` rend aujourd'hui (écarté trois fois, dormant),
 *    avec le motif du cœur.
 *
 * @param jusquA le jour vécu, `AAAA-MM-JJ`
 */
export function bilan(
  elements: ElementStocke[],
  jusquA: string,
  jours: number = JOURS_DE_LA_SEMAINE,
): BilanSemaine {
  const debut = debutDePeriode(jusquA, jours);
  const dans = (instant: string | null | undefined): boolean => {
    const jour = jourDe(instant);
    return jour !== null && jour >= debut && jour <= jusquA;
  };

  const avance: LigneSemaine[] = [];
  const lache: LigneSemaine[] = [];
  for (const e of elements) {
    if (e.faitLe && e.verdict !== 'REJETE' && dans(e.faitLe)) {
      avance.push({ elementId: e.id, texte: e.texte });
    } else if (e.faitLe && e.verdict === 'REJETE' && dans(e.faitLe)) {
      lache.push({ elementId: e.id, texte: e.texte });
    } else if (e.verdict === 'UN_JOUR' && !e.faitLe && (dans(e.vuLe) || dans(e.planPoseLe))) {
      lache.push({ elementId: e.id, texte: e.texte });
    }
  }

  // Comme la Revue : ce qui est fait ne remonte pas, et ce qui vient d'être lâché non plus.
  const dejaRange = new Set(lache.map((l) => l.elementId));
  const encoreEnJeu = elements.filter((e) => !e.faitLe && !dejaRange.has(e.id));
  const bloque = aRevoirObjets(encoreEnJeu, suivisElementDe(encoreEnJeu), jusquA).map((r) => ({
    elementId: r.elementId,
    texte: r.texte,
    motif: r.explication,
  }));

  return { avance, lache, bloque };
}

/**
 * Faut-il signaler en Revue que la semaine est disponible ?
 *
 * Spec `retour-semaine` — « Signal hebdomadaire » : au plus une fois par semaine. Si
 * l'écran a déjà été ouvert, sept jours doivent avoir passé depuis. S'il ne l'a jamais
 * été, la ligne attend qu'une semaine d'usage existe (la plus ancienne capture a sept
 * jours) : proposer un recul sur une semaine vide serait proposer de regarder rien.
 *
 * @param semaineVueLe le dernier jour où l'écran a été ouvert, ou `null`
 * @param plusAncienneCapture la plus ancienne capture (`creeLe`), ou `null` s'il n'y en a pas
 */
export function invitationDisponible(
  semaineVueLe: string | null,
  plusAncienneCapture: string | null,
  jour: string,
): boolean {
  const vue = jourDe(semaineVueLe);
  if (vue) return joursEntre(vue, jour) >= JOURS_DE_LA_SEMAINE;
  const premiere = jourDe(plusAncienneCapture);
  return premiere !== null && joursEntre(premiere, jour) >= JOURS_DE_LA_SEMAINE;
}
