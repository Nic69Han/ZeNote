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
import { controleOrigine, type SiteNetlify } from '../partage/origines.ts';
import { traiterCompte } from './traitement.ts';
import { webauthnReel } from './webauthn.ts';

export default (requete: Request, contexte?: { site?: SiteNetlify }): Promise<Response> =>
  traiterCompte(requete, {
    magasins: magasinsBlobs(),
    webauthn: webauthnReel,
    origineAutorisee: controleOrigine(process.env, contexte?.site),
    codeFondateur: process.env.ZENOTE_CODE_FONDATEUR?.trim() || null,
    journal: (evenement) => console.info(JSON.stringify(evenement)),
  });
