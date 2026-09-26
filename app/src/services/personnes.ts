/**
 * Fusionner deux fiches de « Les gens », et les séparer de nouveau.
 *
 * Change `fusion-personnes`, décisions 1 à 3. Les fiches ne sont pas stockées : le
 * cœur les reconstruit en regroupant les éléments par interlocuteur. La fusion
 * s'écrit donc sur les éléments eux-mêmes — scellés par le coffre comme le reste —,
 * avec l'ancien nom en marque pour pouvoir la défaire, et `corrigeParHumain` pour
 * qu'une nouvelle analyse ne la défasse pas à notre place.
 */

import { listerElements, majElement } from '../stockage/depot.ts';
import { plier } from './lexique.ts';

/** Même nom une fois la casse et les accents pliés : la clé des fiches du cœur. */
function memeNom(a: string | null | undefined, b: string): boolean {
  return !!a && plier(a.trim()) === plier(b.trim());
}

/**
 * Déclare `absorbee` même personne que `gardee`.
 *
 * @return le nombre d'éléments réécrits
 */
export async function fusionner(absorbee: string, gardee: string): Promise<number> {
  if (memeNom(absorbee, gardee)) return 0;
  let n = 0;
  for (const e of await listerElements()) {
    if (!memeNom(e.interlocuteur, absorbee)) continue;
    await majElement(e.id, {
      interlocuteur: gardee.trim(),
      interlocuteurAvantFusion: e.interlocuteurAvantFusion ?? e.interlocuteur,
      corrigeParHumain: true,
    });
    n++;
  }
  return n;
}

/**
 * Défait la fusion de `ancienNom` dans `gardee` : seuls les éléments qui en portent la
 * marque reprennent leur nom ; ceux qui désignaient déjà `gardee` ne bougent pas.
 *
 * @return le nombre d'éléments rendus
 */
export async function separer(gardee: string, ancienNom: string): Promise<number> {
  let n = 0;
  for (const e of await listerElements()) {
    if (!memeNom(e.interlocuteur, gardee) || !memeNom(e.interlocuteurAvantFusion, ancienNom)) continue;
    await majElement(e.id, { interlocuteur: e.interlocuteurAvantFusion, interlocuteurAvantFusion: null });
    n++;
  }
  return n;
}

/** Les anciens noms fusionnés dans `gardee`, qu'on peut encore séparer. */
export async function nomsFusionnes(gardee: string): Promise<string[]> {
  const noms = new Map<string, string>();
  for (const e of await listerElements()) {
    if (!memeNom(e.interlocuteur, gardee) || !e.interlocuteurAvantFusion) continue;
    noms.set(plier(e.interlocuteurAvantFusion.trim()), e.interlocuteurAvantFusion.trim());
  }
  return [...noms.values()].sort((a, b) => a.localeCompare(b, 'fr'));
}
