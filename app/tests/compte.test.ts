/**
 * Le compte, côté appareil — change `comptes-utilisateurs`, tâches 4.1 à 4.3.
 *
 * L'état vient du serveur, jamais d'une supposition ; hors ligne, il vaut
 * déconnecté. Se connecter ou se déconnecter éteint l'analyse distante (spec
 * `analyse-distante` — « Consentement redemandé après connexion »).
 */

import 'fake-indexeddb/auto';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  compteConnecte,
  estAdministrateur,
  invitationEnAttente,
  lireInvitationDeLAdresse,
  marquerDeconnecte,
  oublierInvitation,
  rafraichirCompte,
  seDeconnecter,
  utiliserReseau,
} from '../src/compte/compte.ts';
import { analyserCapture, capturer } from '../src/services/pipeline.ts';
import { ecrireReglage, lireReglages, toutEffacer } from '../src/stockage/depot.ts';

const envois: { url: string; init?: RequestInit }[] = [];
function serveur(reponse: (url: string) => Response | Promise<Response>) {
  utiliserReseau((async (url: RequestInfo | URL, init?: RequestInit) => {
    envois.push({ url: String(url), init });
    return reponse(String(url));
  }) as typeof fetch);
}
const json = (statut: number, corps: unknown) =>
  new Response(JSON.stringify(corps), { status: statut, headers: { 'Content-Type': 'application/json' } });

beforeEach(async () => {
  envois.length = 0;
  await toutEffacer();
});
afterEach(async () => {
  serveur(() => json(200, { connecte: false }));
  await rafraichirCompte();
  oublierInvitation();
});

describe('l’état du compte', () => {
  it('connecté, avec son rôle, tel que le serveur le dit', async () => {
    serveur(() => json(200, { connecte: true, role: 'ADMINISTRATEUR' }));
    expect(await rafraichirCompte()).toEqual({ connecte: true, role: 'ADMINISTRATEUR' });
    expect(compteConnecte()).toBe(true);
    expect(estAdministrateur()).toBe(true);
    expect(envois[0]).toMatchObject({ url: '/api/compte/session', init: { credentials: 'same-origin' } });
  });

  it('déconnecté, réponse illisible ou hors ligne : rien ne part', async () => {
    serveur(() => json(200, { connecte: false }));
    expect((await rafraichirCompte()).connecte).toBe(false);
    serveur(() => json(200, { connecte: true, role: 'ROI' }));
    expect((await rafraichirCompte()).connecte).toBe(false);
    utiliserReseau((async () => {
      throw new TypeError('hors ligne');
    }) as typeof fetch);
    expect((await rafraichirCompte()).connecte).toBe(false);
  });

  it('un 401 d’analyse déconnecte, et éteint l’analyse distante', async () => {
    serveur(() => json(200, { connecte: true, role: 'MEMBRE' }));
    await rafraichirCompte();
    await ecrireReglage('analyseDistante', true);
    await marquerDeconnecte();
    expect(compteConnecte()).toBe(false);
    expect((await lireReglages()).analyseDistante).toBe(false);
  });

  it('le pipeline, sur un 401 du service, se tient pour déconnecté', async () => {
    serveur(() => json(200, { connecte: true, role: 'MEMBRE' }));
    await rafraichirCompte();
    await ecrireReglage('analyseDistante', true);
    const c = await capturer({ texte: 'Préparer le budget du client.', source: 'ECRITE', etatTranscription: 'OK' });
    await analyserCapture(c, '2026-09-26', async () => ({ issue: 'COMPTE_REQUIS' }));
    expect(compteConnecte()).toBe(false);
    expect((await lireReglages()).analyseDistante).toBe(false);
  });

  it('scénario « Déconnexion » — l’analyse distante s’éteint', async () => {
    serveur(() => json(200, { connecte: true, role: 'MEMBRE' }));
    await rafraichirCompte();
    await ecrireReglage('analyseDistante', true);
    serveur(() => json(200, { connecte: false }));
    await seDeconnecter();
    expect((await lireReglages()).analyseDistante).toBe(false);
    const deco = envois.find((e) => e.url.endsWith('/deconnexion'));
    expect(deco?.init).toMatchObject({ method: 'POST', credentials: 'same-origin', body: '{}' });
  });
});

describe('le lien d’invitation', () => {
  it('lit le code dans le fragment, puis l’efface de l’adresse', () => {
    let remplacee = '';
    const lu = lireInvitationDeLAdresse(
      { hash: '#invitation=AbC123_-xyz789', pathname: '/', search: '' },
      (a) => (remplacee = a),
    );
    expect(lu).toBe(true);
    expect(invitationEnAttente()).toBe('AbC123_-xyz789');
    expect(remplacee).toBe('/#reglages');
  });

  it('ignore tout autre fragment', () => {
    let remplacee = '';
    expect(lireInvitationDeLAdresse({ hash: '#revue', pathname: '/', search: '' }, (a) => (remplacee = a))).toBe(false);
    expect(lireInvitationDeLAdresse({ hash: '#invitation=<script>', pathname: '/', search: '' }, (a) => (remplacee = a))).toBe(false);
    expect(remplacee).toBe('');
    expect(invitationEnAttente()).toBeNull();
  });
});
