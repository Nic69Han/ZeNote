/**
 * Où j'en étais : la note posée avant un décrochage, et ce qu'on en fait au retour.
 *
 * Se préparer pendant les secondes qui précèdent une interruption fait reprendre plus
 * vite ensuite (Trafton, Altmann et al., 2003). Ce module ne fait que trois choses,
 * sur des captures déjà écrites : choisir la note à montrer, la marquer reprise, ou la
 * renvoyer à l'analyse si l'utilisateur veut qu'elle serve la Revue. L'écriture de la
 * note, elle, est celle de toute capture (`capturer`, `reprise: true`).
 *
 * Aucun texte de note ne passe par les réglages : ce magasin n'est pas scellé.
 */

import { ABSENCE_AVANT_REPRISE_MS } from './rappels.ts';
import { majCapture, type Capture } from '../stockage/depot.ts';

/**
 * La note de reprise à montrer : la plus récente, si elle n'a pas été reprise.
 *
 * Spec `reprise` — « Une seule note à la fois ». Une nouvelle note remplace
 * l'affichage de l'ancienne, qui reste une capture ordinaire retrouvable : on n'affiche
 * pas deux fois le même marque-page, jamais la pile de ceux qu'on a laissés en route,
 * et « C'est reparti » ne fait pas ressortir une note plus ancienne.
 */
export function noteDeReprise(captures: Capture[]): Capture | undefined {
  let derniere: Capture | undefined;
  for (const capture of captures) {
    if (!capture.reprise) continue;
    if (!derniere || capture.reprise.poseeLe > (derniere.reprise?.poseeLe ?? '')) derniere = capture;
  }
  return derniere?.reprise?.reprisLe ? undefined : derniere;
}

/**
 * Faut-il montrer la note maintenant ?
 *
 * Spec `reprise` — « Retour après une réunion ». La note se montre si l'on est
 * *revenu* : la voir juste après l'avoir dictée n'a aucun sens. Deux façons de l'être :
 *  - la pose date d'au moins `ABSENCE_AVANT_REPRISE_MS` ;
 *  - ou l'application a observé un retour après une absence (`derniereReprise`)
 *    depuis la pose.
 *
 * @param poseeLe l'instant de pose, ISO.
 * @param maintenant l'instant présent, en millisecondes.
 * @param derniereReprise le dernier retour observé après une absence, en
 *   millisecondes, ou `null` s'il n'y en a pas eu depuis l'ouverture.
 */
export function estRevenu(
  poseeLe: string,
  maintenant: number,
  derniereReprise: number | null,
): boolean {
  const pose = Date.parse(poseeLe);
  if (Number.isNaN(pose)) return true;
  if (maintenant - pose >= ABSENCE_AVANT_REPRISE_MS) return true;
  return derniereReprise !== null && derniereReprise > pose;
}

/**
 * « posée à 10 h 02 », dite comme on la lirait, en heure locale.
 *
 * Le jour n'est dit que s'il n'est pas celui d'aujourd'hui : une note d'hier lue
 * « posée à 10 h 02 » laisserait croire qu'elle date de ce matin.
 */
export function quandPosee(poseeLe: string, maintenant: Date = new Date()): string {
  const instant = new Date(poseeLe);
  const heure = `${instant.getHours()} h ${String(instant.getMinutes()).padStart(2, '0')}`;
  const jours = Math.round(
    (new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate()).getTime() -
      new Date(instant.getFullYear(), instant.getMonth(), instant.getDate()).getTime()) /
      86_400_000,
  );
  if (jours <= 0) return `posée à ${heure}`;
  if (jours === 1) return `posée hier à ${heure}`;
  const date = instant.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  return `posée le ${date} à ${heure}`;
}

let derniereReprise: number | null = null;

/**
 * Retient que l'application vient d'être rouverte, ou retrouvée après une absence.
 *
 * C'est le point de rupture que `main.ts` observe déjà (ouverture, et retour après
 * `ABSENCE_AVANT_REPRISE_MS`) : on le note ici plutôt que d'en inventer un autre. Une
 * note posée avant ce retour est une note qu'il est temps de rendre.
 */
export function observerReprise(instant: number = Date.now()): void {
  derniereReprise = instant;
}

/** Le dernier retour observé, en millisecondes, ou `null` avant tout retour. */
export function derniereRepriseObservee(): number | null {
  return derniereReprise;
}

/**
 * « C'est reparti » : la note ne s'affiche plus, mais reste une capture.
 *
 * Le marquage est conservé avec son horodatage plutôt qu'effacé : la note reste
 * retrouvable par la recherche, et l'export dit quand on l'a reprise.
 */
export async function marquerReprise(
  capture: Capture,
  instant: string = new Date().toISOString(),
): Promise<void> {
  if (!capture.reprise) return;
  await majCapture(capture.id, { reprise: { ...capture.reprise, reprisLe: instant } });
}

/**
 * « Garder pour la Revue » : la note redevient une capture ordinaire.
 *
 * Le marquage est effacé et la capture remise dans la file d'analyse, qui en tirera
 * ses éléments comme pour toute autre. L'utilisateur l'a demandé : la spec n'interdit
 * de les produire que tant qu'il ne l'a pas fait.
 */
export async function garderPourRevue(capture: Capture): Promise<void> {
  await majCapture(capture.id, { reprise: undefined, analysee: false });
}
