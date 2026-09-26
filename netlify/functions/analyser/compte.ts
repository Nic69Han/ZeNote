/**
 * Qui appelle `POST /api/analyser`.
 *
 * L'analyse distante est réservée à un utilisateur connecté avec un compte ZeNote.
 * Change `comptes-utilisateurs` : la session est vérifiée ici, côté serveur, par le
 * cookie `HttpOnly` que seule la connexion pose (`partage/session.ts`). Un en-tête
 * ou un jeton fourni par le client, sans session émise par le serveur, n'identifie
 * personne.
 */

import type { Magasins } from '../partage/magasin.ts';
import { verifierSession } from '../partage/session.ts';
import type { Identification } from './traitement.ts';

export function creerIdentification(
  magasins: () => Pick<Magasins, 'sessions' | 'comptes'>,
  maintenant: () => number = Date.now,
): Identification {
  return async (requete) => (await verifierSession(requete, magasins(), maintenant()))?.compteId ?? null;
}
