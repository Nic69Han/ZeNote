/**
 * La vérification WebAuthn réelle, confiée à `@simplewebauthn/server`.
 *
 * Change `comptes-utilisateurs`, décision 1. Réécrire la vérification d'attestation et
 * d'assertion à la main serait la source d'erreur de sécurité la plus probable ; ce
 * fichier ne fait qu'adapter la bibliothèque au contrat de `traitement.ts`. Il sert
 * aussi au bout-en-bout, face à l'authentificateur virtuel de Chromium.
 */

import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
  type AuthenticationResponseJSON,
  type RegistrationResponseJSON,
} from '@simplewebauthn/server';
import { base64url, depuisBase64url } from '../partage/magasin.ts';
import type { VerificateurWebAuthn } from './traitement.ts';

export const webauthnReel: VerificateurWebAuthn = {
  async optionsInscription({ rpID, userId, userName, userDisplayName }) {
    return (await generateRegistrationOptions({
      rpName: 'ZeNote',
      rpID,
      userID: userId as never,
      userName,
      userDisplayName,
      attestationType: 'none',
      authenticatorSelection: { residentKey: 'required', userVerification: 'required' },
    })) as unknown as { challenge: string } & Record<string, unknown>;
  },

  async verifierInscription({ reponse, defi, origine, rpID }) {
    const verifie = await verifyRegistrationResponse({
      response: reponse as RegistrationResponseJSON,
      expectedChallenge: defi,
      expectedOrigin: origine,
      expectedRPID: rpID,
      requireUserVerification: true,
    });
    if (!verifie.verified) return null;
    const { credential } = verifie.registrationInfo;
    return {
      id: credential.id,
      clePublique: base64url(credential.publicKey),
      compteur: credential.counter,
      transports: credential.transports,
    };
  },

  async optionsConnexion({ rpID }) {
    return (await generateAuthenticationOptions({ rpID, userVerification: 'required' })) as unknown as {
      challenge: string;
    } & Record<string, unknown>;
  },

  async verifierConnexion({ reponse, defi, origine, rpID, cle }) {
    const verifie = await verifyAuthenticationResponse({
      response: reponse as AuthenticationResponseJSON,
      expectedChallenge: defi,
      expectedOrigin: origine,
      expectedRPID: rpID,
      requireUserVerification: true,
      credential: {
        id: cle.id,
        publicKey: depuisBase64url(cle.clePublique) as never,
        counter: cle.compteur,
        transports: cle.transports as never,
      },
    });
    return verifie.verified ? { compteur: verifie.authenticationInfo.newCounter } : null;
  },
};
