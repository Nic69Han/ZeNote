/**
 * La ligne de la Revue qui mène à « La semaine ».
 *
 * Spec `retour-semaine` — « Invitation hebdomadaire discrète ». Une seule ligne, au
 * plus une fois par semaine, sans compteur ni délai affiché : elle ne dit pas « vous
 * n'avez pas regardé depuis huit jours », seulement que le retour est là. Elle
 * disparaît d'elle-même une fois l'écran ouvert, puisque c'est l'ouverture qui pose
 * `semaineVueLe`.
 */

import { invitationDisponible } from '../services/semaine.ts';
import { lireReglages, type Capture } from '../stockage/depot.ts';
import { el } from './dom.ts';

export async function ligneInvitationSemaine(
  captures: Capture[],
  jour: string,
): Promise<HTMLElement | null> {
  const { semaineVueLe } = await lireReglages();
  const plusAncienne = captures.reduce<string | null>(
    (ancienne, c) => (ancienne === null || c.creeLe < ancienne ? c.creeLe : ancienne),
    null,
  );
  if (!invitationDisponible(semaineVueLe, plusAncienne, jour)) return null;

  return el(
    'p',
    { class: 'invitation-semaine', role: 'status' },
    el('span', { class: 'invitation-semaine__texte', texte: 'Votre semaine, en deux minutes' }),
    el('a', {
      class: 'bouton bouton--discret',
      href: '#semaine',
      texte: 'Ouvrir',
    }),
  );
}
