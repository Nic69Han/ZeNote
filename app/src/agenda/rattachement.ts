/**
 * Rattacher une capture à une réunion de l'agenda.
 *
 * Change `agenda-local`, décision 7 ; spec `agenda` — « Moments de réunion ». Deux
 * chemins :
 * - **proposé** : Maintenant ouvre la capture pour une dépose ou un vidage, déjà
 *   rattachée ; le rattachement attend la prochaine capture et s'y pose ;
 * - **d'office** : une capture faite pendant une réunion, ou dans le quart d'heure qui
 *   suit sa fin, porte cette réunion. Il se pose après l'écriture, jamais avant : la
 *   capture ne doit pas attendre l'agenda pour être confirmée.
 */

import { lireEvenements } from '../stockage/agenda.ts';
import { majCapture, type AgendaDeCapture, type Capture } from '../stockage/depot.ts';

/** Après la fin d'une réunion, ce temps pendant lequel une capture s'y rattache encore. */
export const RATTACHEMENT_APRES_MINUTES = 15;

let enAttente: AgendaDeCapture | null = null;

/** Prépare le rattachement de la prochaine capture. */
export function preparerRattachement(agenda: AgendaDeCapture): void {
  enAttente = agenda;
}

/** Le rattachement qui attend la prochaine capture, s'il y en a un. */
export function rattachementEnAttente(): AgendaDeCapture | null {
  return enAttente;
}

/** Renonce au rattachement préparé. */
export function oublierRattachement(): void {
  enAttente = null;
}

/** Prend le rattachement préparé : il ne sert qu'une fois. */
export function consommerRattachement(): AgendaDeCapture | null {
  const pris = enAttente;
  enAttente = null;
  return pris;
}

/** Heure locale `AAAA-MM-JJTHH:MM` d'un instant. */
function enLocal(instant: Date): string {
  return new Date(instant.getTime() - instant.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
}

/**
 * La réunion à laquelle une capture faite à cet instant se rattache d'office, ou
 * `null`. Une réunion en cours l'emporte sur une réunion qui vient de finir ; un
 * événement « toute la journée » n'est pas une réunion.
 */
export async function reunionDuMoment(instant: Date): Promise<AgendaDeCapture | null> {
  const local = enLocal(instant);
  const depuis = enLocal(new Date(instant.getTime() - 24 * 3600_000));
  const reunions = (await lireEvenements(depuis, local)).filter((e) => !e.journeeEntiere);
  const limite = enLocal(new Date(instant.getTime() - RATTACHEMENT_APRES_MINUTES * 60_000));

  const enCours = reunions.filter((e) => e.debut <= local && local < e.fin);
  const finie = reunions.filter((e) => e.fin <= local && e.fin >= limite).sort((a, b) => b.fin.localeCompare(a.fin));
  const choisie = enCours.at(-1) ?? finie[0];
  if (!choisie) return null;
  return { evenementId: choisie.id, titre: choisie.titre, participants: choisie.participants ?? [] };
}

/**
 * Pose le rattachement d'office sur une capture déjà écrite. Ne lève jamais : sans
 * agenda lisible — coffre fermé compris — la capture reste simplement sans réunion.
 */
export async function rattacherDOffice(capture: Capture): Promise<void> {
  try {
    const agenda = await reunionDuMoment(new Date(capture.creeLe));
    if (agenda) await majCapture(capture.id, { agenda });
  } catch {
    // Le rattachement est un plus ; il ne doit rien casser.
  }
}
