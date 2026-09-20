/**
 * Les rappels, vus depuis la surface : quand les présenter, et ce qu'on retient.
 *
 * Le classement, le groupement et l'escalade ne sont pas décidés ici — ils viennent
 * du cœur (`rappelsObjets`), qui porte la file d'opportunité et ses règles. Ce module
 * ne fait que trois choses : dire quand un point de rupture a lieu, fournir au cœur
 * ce que la surface a retenu, et écrire le résultat.
 *
 * ## Le seul point de rupture qu'un navigateur observe
 *
 * La spec en reconnaît trois : fin de réunion, fin de créneau d'agenda, reprise de
 * l'appareil. Les deux premiers demandent l'agenda, qui n'est pas branché. Reste la
 * reprise — le retour dans l'application après une absence — et c'est celui-là qui
 * est implémenté.
 *
 * ## Ce qu'une application web ne peut pas faire, et qu'il faut dire
 *
 * ZeNote ne vous notifiera pas quand elle est fermée. Une page web ne se réveille
 * pas seule : il lui faudrait un serveur qui lui pousse un message, et il n'y a pas
 * de serveur ZeNote. Les rappels arrivent donc à votre retour, pas avant. C'est une
 * limite de la forme choisie, pas un oubli, et l'écran « Vos données » l'écrit.
 */

import {
  rappelsObjets,
  type RappelsDuMomentJson,
} from '../core/regles.ts';
import {
  listerElements,
  majElement,
  suivisRappelDe,
  type ElementStocke,
} from '../stockage/depot.ts';
import { maintenantLocal } from './pipeline.ts';

/**
 * L'absence au-delà de laquelle revenir est une reprise.
 *
 * En deçà, on n'est pas revenu : on n'était pas parti. Présenter des rappels parce
 * que quelqu'un a répondu à un message pendant vingt secondes ferait de la reprise un
 * événement permanent, donc du rappel un bruit de fond.
 */
export const ABSENCE_AVANT_REPRISE_MS = 30 * 60_000;

/** Ce que le point de rupture a livré, et de quoi le traiter. */
export type RappelsDuMoment = RappelsDuMomentJson;

/** Rien à présenter : ni notification, ni escalade. */
export function riens(): RappelsDuMoment {
  return { titre: '', rappels: [], escalades: [] };
}

export function aQuelqueChose(moment: RappelsDuMoment): boolean {
  return moment.rappels.length > 0 || moment.escalades.length > 0;
}

/**
 * Ce que ce point de rupture présente.
 *
 * Les éléments faits sont écartés d'abord : un rappel pour quelque chose de terminé
 * est la façon la plus sûre de faire désinstaller un produit.
 */
export async function rappelsDuPointDeRupture(
  instant: string = maintenantLocal(),
): Promise<RappelsDuMoment> {
  const elements = await listerElements();
  const enJeu = elements.filter((e) => !e.faitLe);
  return rappelsObjets(enJeu, instant, suivisRappelDe(enJeu));
}

/**
 * Enregistre qu'un rappel a été présenté sans être traité.
 *
 * Au troisième, le cœur le sortira de la file de lui-même et le remontera en Revue.
 * Ce compteur est la seule mémoire que la surface en garde.
 */
export async function marquerIgnores(elementIds: string[]): Promise<void> {
  const parId = new Map((await listerElements()).map((e) => [e.id, e]));
  for (const id of elementIds) {
    const element = parId.get(id);
    if (!element) continue;
    await majElement(id, { rappelIgnoreFois: (element.rappelIgnoreFois ?? 0) + 1 });
  }
}

/**
 * Repose le plan d'un élément escaladé : il repart avec un compteur neuf.
 *
 * Replanifier n'est pas recommencer à zéro par indulgence — c'est que le rappel
 * change, donc que l'ancien compte d'ignorés ne dit plus rien de celui-ci.
 */
export async function replanifier(elementId: string, declencheur: string): Promise<void> {
  await majElement(elementId, {
    planDeclencheur: declencheur,
    planPoseLe: maintenantLocal(),
    rappelIgnoreFois: 0,
  });
}

/** Abandonne un élément escaladé : il quitte les rappels, et le reste avec lui. */
export async function abandonner(elementId: string): Promise<ElementStocke> {
  return majElement(elementId, { faitLe: new Date().toISOString(), verdict: 'REJETE' });
}

/**
 * Délègue : l'élément devient une attente envers quelqu'un.
 *
 * Il quitte les rappels et rejoint les relances, qui savent déjà suivre ce qu'on
 * attend d'un tiers. Rien de neuf n'est inventé pour ça.
 */
export async function deleguer(elementId: string, aQui: string): Promise<ElementStocke> {
  return majElement(elementId, {
    type: 'ATTENTE',
    interlocuteur: aQui,
    relanceLe: new Date().toISOString().slice(0, 10),
    rappelIgnoreFois: 0,
  });
}
