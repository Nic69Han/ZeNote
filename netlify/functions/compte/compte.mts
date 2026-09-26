/**
 * `/api/compte/*` — les comptes ZeNote.
 *
 * Change `comptes-utilisateurs`. Tout le comportement est dans `traitement.ts`,
 * vérifié avec des magasins et un authentificateur simulés ; ce fichier branche les
 * magasins Netlify Blobs et `@simplewebauthn/server`.
 *
 * Sans `ZENOTE_CODE_FONDATEUR`, aucun premier compte ne peut naître : l'application
 * se comporte alors exactement comme sans comptes.
 */

import { magasinsBlobs } from '../partage/magasin-blobs.ts';
import { originesAttendues } from '../partage/origines.ts';
import { traiterCompte } from './traitement.ts';
import { webauthnReel } from './webauthn.ts';

export default (requete: Request): Promise<Response> =>
  traiterCompte(requete, {
    magasins: magasinsBlobs(),
    webauthn: webauthnReel,
    origines: originesAttendues(),
    codeFondateur: process.env.ZENOTE_CODE_FONDATEUR?.trim() || null,
    journal: (evenement) => console.info(JSON.stringify(evenement)),
  });
