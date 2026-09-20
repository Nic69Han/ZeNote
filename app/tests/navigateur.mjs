/**
 * Où trouver le navigateur des tests de bout en bout.
 *
 * Playwright cherche par défaut un binaire qu'il a lui-même téléchargé, sous un
 * numéro de version qui change à chaque mise à jour de la bibliothèque. Dans un
 * environnement où les navigateurs sont fournis à part, ce chemin n'existe pas, et
 * l'échec arrive au lancement — après la construction, loin de sa cause.
 *
 * Ce module donne le chemin explicitement, ou `undefined` pour laisser Playwright
 * décider. Passer par `CHROME_BIN` reste possible et l'emporte.
 */

import { existsSync } from 'node:fs';

/** Les navigateurs fournis par l'environnement, du plus explicite au plus général. */
const CANDIDATS = ['/opt/pw-browsers/chromium'];

/**
 * Le chemin du navigateur, ou `undefined` si aucun n'est fourni — auquel cas
 * Playwright utilisera le sien, ce qui est le comportement attendu en local.
 */
export function cheminNavigateur() {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  return CANDIDATS.find((chemin) => existsSync(chemin));
}
