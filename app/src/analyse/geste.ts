/**
 * Une tâche floue a-t-elle besoin qu'on lui demande par quoi commencer ?
 *
 * Découper en microtâches allonge un peu le temps total mais améliore le résultat et
 * résiste mieux aux interruptions (Cheng, Teevan, Iqbal & Bernstein, 2015). La Revue
 * demande déjà « quand, ou à quel signal ? » ; ce module décide seulement s'il faut
 * aussi demander le premier geste. Il ne rédige jamais le geste : spec `premier-geste`
 * — « Le système NE DOIT jamais rédiger le geste à la place de l'utilisateur ».
 *
 * ## Une liste fermée, et pourquoi
 *
 * Le verbe principal est-il un verbe flou — gérer, avancer sur, préparer… — sans qu'un
 * verbe d'action concret ne le précède ? Mieux vaut ne pas demander que demander à
 * tort : une question posée sur « appeler Karim pour le devis » apprend à l'ignorer.
 * Une formulation floue qui échappe à la liste n'est pas perdue — la zone de plan offre
 * toujours le lien « Préciser un premier geste ».
 */

import { normaliser } from './dates.ts';
import { VERBES_ACTION } from './lexique.ts';

interface ExpressionFloue {
  /** Sur le texte normalisé : minuscules, sans accents. */
  motif: RegExp;
  /**
   * Vrai pour une tournure qui annonce plus qu'elle ne dit (« penser à », « voir
   * pour ») : si un verbe concret suit de près, c'est lui le verbe principal.
   */
  introduit?: boolean;
}

/**
 * Un verbe sous deux formes : l'infinitif, et la première personne du présent précédée
 * de « je » — celle d'un « je dois… » ou d'un « il faut que je… ». Le présent seul, sans
 * pronom, ne compte pas : « la règle », « une traite » ne sont pas des tâches.
 *
 * @param suite ce qui doit suivre pour que la tournure soit floue (« avancer *sur* »).
 */
function verbe(infinitif: string, present: string | null, suite = '\\b'): RegExp {
  const conjugue = present === null ? '' : `|(?:je|j')\\s*${present}`;
  return new RegExp(`\\b(?:${infinitif}${conjugue})${suite}`);
}

/** Les formulations qui laissent la tâche sans prise, à chercher sur le texte normalisé. */
const EXPRESSIONS_FLOUES: ExpressionFloue[] = [
  { motif: verbe('gerer', 'gere') },
  { motif: verbe('occuper', "m'occupe", "\\s+(?:de|du|des|d')") },
  { motif: verbe('avancer', 'avance', '\\s+(?:sur|dans|avec)\\b') },
  { motif: verbe('preparer', 'prepare') },
  { motif: verbe('finaliser', 'finalise') },
  { motif: verbe('organiser', 'organise') },
  { motif: verbe('traiter', 'traite') },
  { motif: verbe('regler', 'regle') },
  { motif: verbe('suivre', null) },
  { motif: verbe('boucler', 'boucle') },
  { motif: verbe('voir', 'vois', '\\s+pour\\b'), introduit: true },
  { motif: verbe('reflechir', 'reflechis') },
  { motif: verbe('faire', 'fais', '\\s+le\\s+point\\b') },
  { motif: verbe('travailler', 'travaille', '\\s+sur\\b') },
  { motif: verbe('penser', 'pense', '\\s+a\\b'), introduit: true },
];

/** Les verbes d'action du lexique, sous la forme où on les compare. */
const MOTIF_CONCRET = new RegExp(`\\b(?:${VERBES_ACTION.map(normaliser).join('|')})\\b`);

/** Combien de mots après une tournure d'introduction on cherche encore le verbe concret. */
const PORTEE_INTRODUCTION_MOTS = 4;

/**
 * Faut-il demander un premier geste pour cette tâche ?
 *
 * Vrai quand le verbe principal est un verbe flou et qu'aucun verbe d'action concret
 * ne le précède. À égalité de position (« préparer » figure aux deux listes), le verbe
 * flou l'emporte : c'est justement lui qu'on cherche à préciser.
 */
export function demandeUnPremierGeste(texte: string): boolean {
  const t = normaliser(texte);

  let floue: { debut: number; fin: number; introduit: boolean } | null = null;
  for (const { motif, introduit } of EXPRESSIONS_FLOUES) {
    const trouve = motif.exec(t);
    if (trouve && (floue === null || trouve.index < floue.debut)) {
      floue = { debut: trouve.index, fin: trouve.index + trouve[0].length, introduit: Boolean(introduit) };
    }
  }
  if (floue === null) return false;

  const concret = MOTIF_CONCRET.exec(t);
  if (concret && concret.index < floue.debut) return false;

  if (floue.introduit) {
    // « penser à appeler Karim » : la tournure annonce, le verbe concret dit.
    const suite = t.slice(floue.fin).trim().split(/\s+/).slice(0, PORTEE_INTRODUCTION_MOTS).join(' ');
    if (MOTIF_CONCRET.test(suite)) return false;
  }
  return true;
}
