/**
 * Vider sa tête le soir : quand l'invite se présente, et une seule fois par soirée.
 *
 * Écrire cinq minutes une liste précise de ce qu'on fera les jours suivants fait
 * s'endormir plus vite qu'écrire ce qu'on a déjà fait (Scullin et al., 2018). Déposer
 * ne libère la mémoire que si l'on fait confiance au dépôt (Storm & Stone, 2015) :
 * c'est la confirmation « écrit d'abord, confirmé ensuite » de la capture ordinaire.
 *
 * Ce module ne décide que du moment. Il est pur — l'heure lui est donnée — pour que la
 * soirée qui passe minuit se vérifie sans attendre minuit.
 */

import { aujourdhui } from './pipeline.ts';
import type { Reglages } from '../stockage/depot.ts';

/** L'heure proposée pour le début de la soirée. */
export const HEURE_SOIREE_PAR_DEFAUT = '21:00';

/** La soirée s'achève à 3 h 59 : à 4 h 00, un autre jour commence. */
const FIN_DE_SOIREE_MINUTES = 4 * 60;

/** Ce que l'invite lit des réglages, et rien de plus. */
export type ReglagesDelestage = Pick<Reglages, 'delestageSoir' | 'delestageHeure' | 'delestageVuLe'>;

/** `HH:MM` en minutes depuis minuit ; une valeur illisible retombe sur l'heure proposée. */
function minutesDe(heure: string): number {
  const lue = /^(\d{1,2}):(\d{2})$/.exec(heure.trim());
  const [h, m] = lue ? [Number(lue[1]), Number(lue[2])] : [21, 0];
  return h < 24 && m < 60 ? h * 60 + m : 21 * 60;
}

/**
 * Le jour de référence de la soirée en cours : le jour où elle a commencé.
 *
 * Passé minuit c'est toujours la même soirée — donc la même invite, et « Pas ce soir »
 * vaut jusqu'au matin. Sans cette règle, écarter l'invite à 23 h 50 la ferait revenir à
 * minuit cinq.
 *
 * Rend `null` hors soirée : de 4 h 00 à l'heure de début.
 */
export function jourDeSoiree(maintenant: Date, heureDebut: string): string | null {
  const debut = minutesDe(heureDebut);
  const courant = maintenant.getHours() * 60 + maintenant.getMinutes();

  // Une heure de début avant quatre heures ne passe pas minuit : la soirée court de
  // cette heure à 3 h 59, le même jour.
  if (debut < FIN_DE_SOIREE_MINUTES) {
    return courant >= debut && courant < FIN_DE_SOIREE_MINUTES ? aujourdhui(maintenant) : null;
  }
  if (courant >= debut) return aujourdhui(maintenant);
  if (courant < FIN_DE_SOIREE_MINUTES) {
    const veille = new Date(maintenant);
    veille.setDate(veille.getDate() - 1);
    return aujourdhui(veille);
  }
  return null;
}

/**
 * L'invite du soir : le jour de référence de la soirée si elle doit se présenter,
 * `null` sinon.
 *
 * Spec `delestage-du-soir` — « Invite du soir facultative ». Éteinte par défaut, hors
 * soirée, ou déjà utilisée ou écartée pour cette soirée : rien ne se présente. Le
 * retour porte le jour parce que c'est lui qu'on écrit ensuite dans `delestageVuLe`.
 */
export function inviteDuSoir(maintenant: Date, reglages: ReglagesDelestage): string | null {
  if (!reglages.delestageSoir) return null;
  const jour = jourDeSoiree(maintenant, reglages.delestageHeure);
  if (jour === null) return null;
  if (reglages.delestageVuLe !== null && reglages.delestageVuLe >= jour) return null;
  return jour;
}

/** La consigne de l'invite : la précision — quoi, pour qui, quand — porte l'effet mesuré. */
export const CONSIGNE_DU_SOIR =
  'Dictez ou écrivez ce qui vous attend demain, le plus précisément possible : ' +
  'quoi, pour qui, quand. Une fois écrit, vous pouvez le lâcher.';

/** La confirmation d'une capture faite depuis l'invite : écrite, donc lâchable. */
export const CONFIRMATION_DU_SOIR = "Écrit. Vous pouvez le lâcher jusqu'à demain.";
