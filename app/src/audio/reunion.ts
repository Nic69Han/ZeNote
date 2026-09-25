/**
 * L'enregistrement de réunion, qui n'appartient à aucun écran.
 *
 * Une réunion dure une heure. Pendant cette heure on consulte la Revue, on cherche
 * une note, on revient — et l'enregistreur doit être le même au retour. Tenu dans
 * l'écran de capture, il était recréé à chaque montage : le micro continuait, et le
 * bouton d'arrêt redevenait un bouton de départ. On ne pouvait plus l'arrêter.
 *
 * C'est la raison d'être de ce module : l'enregistrement de réunion vit au-dessus
 * des écrans, comme le voyant qui le signale.
 */

import { Enregistreur, type CaptureAudio } from './enregistreur.ts';

let enregistreur: Enregistreur | null = null;

/** Vrai quand une réunion est en cours d'enregistrement. */
export function reunionEnCours(): boolean {
  return enregistreur !== null;
}

/** Démarre l'enregistrement. Rend `false` si le micro est indisponible. */
export async function demarrerReunion(): Promise<boolean> {
  if (enregistreur) return true;
  const neuf = new Enregistreur();
  if (!(await neuf.demarrer())) return false;
  enregistreur = neuf;
  return true;
}

/** Arrête l'enregistrement et rend l'audio, ou `null` s'il n'y en avait pas. */
export async function arreterReunion(): Promise<CaptureAudio | null> {
  if (!enregistreur) return null;
  const encours = enregistreur;
  enregistreur = null;
  return encours.arreter();
}
