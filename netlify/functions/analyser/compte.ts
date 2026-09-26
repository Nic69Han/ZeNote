/**
 * Qui appelle `POST /api/analyser`.
 *
 * L'analyse distante est réservée à un utilisateur connecté avec un compte ZeNote.
 * ZeNote n'a pas encore de comptes : personne n'est identifié, et la fonction refuse
 * donc toute requête avant de toucher au fournisseur, clé configurée ou non.
 *
 * Le jour où les comptes existent, c'est ici — et seulement ici — que la session est
 * vérifiée côté serveur. Un en-tête posé par le client ne suffira jamais seul.
 */

import type { Identification } from './traitement.ts';

export const identifierUtilisateur: Identification = () => null;
