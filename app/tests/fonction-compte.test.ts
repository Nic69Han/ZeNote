/**
 * La fonction `/api/compte/*`, avec des magasins en mémoire et un authentificateur
 * simulé — change `comptes-utilisateurs`, groupes 1 et 2.
 *
 * Spec `comptes` : création sur invitation, code fondateur, clé distincte de celle du
 * coffre, connexion et session vérifiées côté serveur, contrefaçon, déconnexion,
 * suppression, invitations, et rien de secret en clair dans les magasins.
 */

import { describe, expect, it } from 'vitest';
import { base64url, magasinsEnMemoire } from '../../netlify/functions/partage/magasin.ts';
import { controleOrigine, originesAttendues } from '../../netlify/functions/partage/origines.ts';
import { COOKIE_SESSION, DUREE_SESSION_MS, verifierSession } from '../../netlify/functions/partage/session.ts';
import {
  DUREE_INVITATION_MS,
  USER_ID_COFFRE,
  traiterCompte,
  type DependancesCompte,
  type VerificateurWebAuthn,
} from '../../netlify/functions/compte/traitement.ts';

const ORIGINE = 'https://zenote.example';
const FONDATEUR = 'code-fondateur-de-test';
const T0 = Date.UTC(2026, 8, 26, 8, 0);

/** Un authentificateur simulé : il signe le défi avec « sa » clé, et c'est tout. */
function authentificateur() {
  const optionsVues: Record<string, unknown>[] = [];
  let n = 0;
  const webauthn: VerificateurWebAuthn = {
    async optionsInscription(p) {
      const o = { challenge: `defi-${++n}-${Math.random().toString(36).slice(2)}`, userId: base64url(p.userId), p };
      optionsVues.push(o);
      return o;
    },
    async verifierInscription({ reponse, defi, origine }) {
      const r = reponse as { id: string; defi: string; origine: string };
      if (r.defi !== defi || r.origine !== origine) return null;
      return { id: r.id, clePublique: base64url(new TextEncoder().encode(`pub-${r.id}`)), compteur: 0 };
    },
    async optionsConnexion() {
      return { challenge: `defi-${++n}-${Math.random().toString(36).slice(2)}` };
    },
    async verifierConnexion({ reponse, defi, cle }) {
      const r = reponse as { id: string; defi: string; compteur: number };
      if (r.defi !== defi || r.id !== cle.id || r.compteur <= cle.compteur) return null;
      return { compteur: r.compteur };
    },
  };
  return { webauthn, optionsVues };
}

/** Ce que l'appareil renverrait : `clientDataJSON` porte le défi signé. */
function reponseCle(id: string, defi: string, extra: Record<string, unknown> = {}) {
  const clientDataJSON = base64url(new TextEncoder().encode(JSON.stringify({ challenge: defi })));
  return { id, defi, origine: ORIGINE, response: { clientDataJSON }, ...extra };
}

function banc(ajout: Partial<DependancesCompte> = {}) {
  const magasins = magasinsEnMemoire();
  const { webauthn, optionsVues } = authentificateur();
  const journal: Record<string, string | number>[] = [];
  let horloge = T0;
  const d: DependancesCompte = {
    magasins,
    webauthn,
    origineAutorisee: controleOrigine({ URL: ORIGINE }),
    codeFondateur: FONDATEUR,
    journal: (l) => journal.push(l),
    maintenant: () => horloge,
    ...ajout,
  };
  const appel = async (chemin: string, corps?: unknown, cookie?: string, entetes: Record<string, string> = {}) => {
    const requete = new Request(`${ORIGINE}/api/compte/${chemin}`, {
      method: corps === undefined ? 'GET' : 'POST',
      headers: {
        ...(corps === undefined ? {} : { 'Content-Type': 'application/json', Origin: ORIGINE }),
        ...(cookie ? { Cookie: cookie } : {}),
        ...entetes,
      },
      body: corps === undefined ? undefined : JSON.stringify(corps),
    });
    const reponse = await traiterCompte(requete, d);
    const setCookie = reponse.headers.get('set-cookie') ?? '';
    const jeton = setCookie.match(new RegExp(`${COOKIE_SESSION}=([^;]*)`))?.[1] ?? '';
    return { statut: reponse.status, corps: (await reponse.json()) as Record<string, unknown>, setCookie, cookie: jeton ? `${COOKIE_SESSION}=${jeton}` : '' };
  };
  /** Inscription complète : options, puis réponse de la clé. */
  const inscrire = async (code: string, idCle: string) => {
    const options = await appel('inscription/options', { invitation: code });
    if (options.statut !== 200) return options;
    return appel('inscription', { reponse: reponseCle(idCle, options.corps.challenge as string) });
  };
  const connecter = async (idCle: string, compteur: number) => {
    const options = await appel('connexion/options', {});
    return appel('connexion', { reponse: reponseCle(idCle, options.corps.challenge as string, { compteur }) });
  };
  return { d, magasins, journal, optionsVues, appel, inscrire, connecter, avancer: (ms: number) => (horloge += ms) };
}

describe('premier compte avec le code fondateur', () => {
  it('crée un administrateur connecté, puis le code est refusé', async () => {
    const b = banc();
    const cree = await b.inscrire(FONDATEUR, 'cle-admin');
    expect(cree.statut).toBe(201);
    expect(cree.corps).toEqual({ connecte: true, role: 'ADMINISTRATEUR' });
    expect(cree.setCookie).toMatch(/HttpOnly; Secure; SameSite=Strict; Path=\/api; Max-Age=2592000/);
    expect((await b.appel('session', undefined, cree.cookie)).corps).toEqual({ connecte: true, role: 'ADMINISTRATEUR' });

    const encore = await b.appel('inscription/options', { invitation: FONDATEUR });
    expect(encore).toMatchObject({ statut: 400, corps: { motif: 'invitation-invalide' } });
  });

  it('sans code fondateur posé, aucun premier compte ne naît', async () => {
    const b = banc({ codeFondateur: null });
    expect((await b.inscrire(FONDATEUR, 'x')).statut).toBe(400);
  });

  it('options d’inscription : identifiant tiré au hasard, jamais celui du coffre, et nom distinct', async () => {
    const b = banc();
    await b.appel('inscription/options', { invitation: FONDATEUR });
    await b.appel('inscription/options', { invitation: FONDATEUR });
    const [a, c] = b.optionsVues as { userId: string; p: { userName: string; userDisplayName: string } }[];
    expect(a.userId).not.toBe(c.userId);
    expect(a.userId).not.toBe(base64url(new TextEncoder().encode(USER_ID_COFFRE)));
    expect(a.userId.length).toBeGreaterThanOrEqual(42);
    expect(a.p).toMatchObject({ userName: 'compte-zenote', userDisplayName: 'Compte ZeNote' });
  });
});

describe('invitations', () => {
  async function adminEtInvitation() {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    const inv = await b.appel('invitation', {}, admin.cookie);
    return { b, admin, code: inv.corps.code as string, inv };
  }

  it('scénario « Invitation créée » — valable sept jours, rendue une fois', async () => {
    const { inv } = await adminEtInvitation();
    expect(inv.statut).toBe(201);
    expect(new Date(inv.corps.expire as string).getTime()).toBe(T0 + DUREE_INVITATION_MS);
  });

  it('scénario « Compte créé avec une invitation » — puis elle ne sert plus', async () => {
    const { b, code } = await adminEtInvitation();
    const membre = await b.inscrire(code, 'cle-membre');
    expect(membre).toMatchObject({ statut: 201, corps: { connecte: true, role: 'MEMBRE' } });
    expect((await b.inscrire(code, 'cle-autre')).statut).toBe(400);
  });

  it('scénario « Invitation invalide » — même réponse pour inconnue, utilisée et expirée', async () => {
    const { b, code } = await adminEtInvitation();
    const inconnue = await b.appel('inscription/options', { invitation: 'rien-de-tout-cela' });
    await b.inscrire(code, 'cle-membre');
    const utilisee = await b.appel('inscription/options', { invitation: code });
    const { b: b2, code: code2 } = await adminEtInvitation();
    b2.avancer(DUREE_INVITATION_MS + 1);
    const expiree = await b2.appel('inscription/options', { invitation: code2 });
    for (const r of [inconnue, utilisee, expiree]) expect(r).toMatchObject({ statut: 400, corps: { motif: 'invitation-invalide' } });
  });

  it('une inscription abandonnée ne brûle pas le code', async () => {
    const { b, code } = await adminEtInvitation();
    await b.appel('inscription/options', { invitation: code });
    expect((await b.inscrire(code, 'cle-membre')).statut).toBe(201);
  });

  it('scénario « Invitation refusée à un compte ordinaire »', async () => {
    const { b, code } = await adminEtInvitation();
    const membre = await b.inscrire(code, 'cle-membre');
    expect(await b.appel('invitation', {}, membre.cookie)).toMatchObject({ statut: 403, corps: { motif: 'administrateur-requis' } });
    expect((await b.appel('invitation', {})).statut).toBe(401);
  });
});

describe('connexion et session', () => {
  it('scénario « Connexion sur un nouvel appareil »', async () => {
    const b = banc();
    await b.inscrire(FONDATEUR, 'cle-admin');
    const r = await b.connecter('cle-admin', 1);
    expect(r).toMatchObject({ statut: 200, corps: { connecte: true, role: 'ADMINISTRATEUR' } });
    expect(r.cookie).not.toBe('');
  });

  it('scénario « Clé d’accès inconnue » — celle du coffre, par exemple', async () => {
    const b = banc();
    await b.inscrire(FONDATEUR, 'cle-admin');
    expect(await b.connecter('cle-du-coffre', 1)).toMatchObject({ statut: 401, corps: { motif: 'cle-inconnue' } });
  });

  it('scénario « Défi rejoué » — une réponse acceptée ne sert pas deux fois', async () => {
    const b = banc();
    await b.inscrire(FONDATEUR, 'cle-admin');
    const options = await b.appel('connexion/options', {});
    const reponse = reponseCle('cle-admin', options.corps.challenge as string, { compteur: 1 });
    expect((await b.appel('connexion', { reponse })).statut).toBe(200);
    expect(await b.appel('connexion', { reponse })).toMatchObject({ statut: 400, corps: { motif: 'defi-invalide' } });
  });

  it('un défi expiré ne vaut plus', async () => {
    const b = banc();
    await b.inscrire(FONDATEUR, 'cle-admin');
    const options = await b.appel('connexion/options', {});
    b.avancer(5 * 60 * 1000 + 1);
    const r = await b.appel('connexion', { reponse: reponseCle('cle-admin', options.corps.challenge as string, { compteur: 1 }) });
    expect(r.statut).toBe(400);
  });

  it('scénario « Session fabriquée » — un jeton non émis n’identifie personne', async () => {
    const b = banc();
    await b.inscrire(FONDATEUR, 'cle-admin');
    for (const cookie of [`${COOKIE_SESSION}=${'A'.repeat(43)}`, `${COOKIE_SESSION}=court`, 'autre=1', '']) {
      expect((await b.appel('session', undefined, cookie)).corps).toEqual({ connecte: false });
    }
  });

  it('scénario « Session expirée » — trente jours, puis plus rien', async () => {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    b.avancer(DUREE_SESSION_MS - 1);
    expect((await b.appel('session', undefined, admin.cookie)).corps.connecte).toBe(true);
    b.avancer(2);
    expect((await b.appel('session', undefined, admin.cookie)).corps).toEqual({ connecte: false });
  });
});

describe('contrefaçon', () => {
  it('scénario « Requête venue d’un autre site » — refusée, rien ne change', async () => {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    const ailleurs = await b.appel('suppression', {}, admin.cookie, { Origin: 'https://ailleurs.example' });
    expect(ailleurs).toMatchObject({ statut: 403, corps: { motif: 'origine-refusee' } });
    const sansOrigine = await traiterCompte(
      new Request(`${ORIGINE}/api/compte/deconnexion`, { method: 'POST', headers: { 'Content-Type': 'application/json', Cookie: admin.cookie }, body: '{}' }),
      b.d,
    );
    expect(sansOrigine.status).toBe(403);
    const texte = await b.appel('deconnexion', {}, admin.cookie, { 'Content-Type': 'text/plain' });
    expect(texte.statut).toBe(415);
    expect((await b.appel('session', undefined, admin.cookie)).corps.connecte).toBe(true);
  });

  it('une origine admise est celle de la requête et du site : production, aperçus, local', () => {
    const admise = controleOrigine({ ZENOTE_ORIGINES: 'http://localhost:4178' }, { url: 'https://zenote-app.netlify.app', name: 'zenote-app' });
    const vers = (url: string) => new Request(`${url}/api/compte/deconnexion`);
    expect(admise('https://zenote-app.netlify.app', vers('https://zenote-app.netlify.app'))).toBe(true);
    expect(admise('https://deploy-preview-6--zenote-app.netlify.app', vers('https://deploy-preview-6--zenote-app.netlify.app'))).toBe(true);
    expect(admise('http://localhost:4178', vers('http://localhost:4178'))).toBe(true);
    // Une origine du site, mais pas celle de la requête : contrefaçon.
    expect(admise('https://deploy-preview-6--zenote-app.netlify.app', vers('https://zenote-app.netlify.app'))).toBe(false);
    // Un autre site, même hébergé chez Netlify.
    expect(admise('https://x--autre-site.netlify.app', vers('https://x--autre-site.netlify.app'))).toBe(false);
    expect(admise('https://zenote-app.netlify.app.evil.example', vers('https://zenote-app.netlify.app.evil.example'))).toBe(false);
  });

  it('les origines viennent de l’environnement, pas de la requête', () => {
    expect(
      originesAttendues({ URL: 'https://zenote-app.netlify.app', DEPLOY_PRIME_URL: 'https://deploy-preview-6--zenote-app.netlify.app/', ZENOTE_ORIGINES: 'http://localhost:4178, pas une url' }),
    ).toEqual(['https://zenote-app.netlify.app', 'https://deploy-preview-6--zenote-app.netlify.app', 'http://localhost:4178']);
  });
});

describe('déconnexion et suppression', () => {
  it('scénario « Déconnexion » — le cookie est effacé et la session ne vaut plus', async () => {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    const r = await b.appel('deconnexion', {}, admin.cookie);
    expect(r.setCookie).toMatch(/Max-Age=0/);
    expect((await b.appel('session', undefined, admin.cookie)).corps).toEqual({ connecte: false });
  });

  it('scénario « Suppression confirmée » — plus rien du compte, et la clé ne connecte plus', async () => {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    await b.connecter('cle-admin', 1);
    await b.magasins.usage.ecrire(`jour/${[...b.magasins.comptes.brut.keys()][0]}/2026-09-26`, 3);
    expect((await b.appel('suppression', {}, admin.cookie)).statut).toBe(200);

    for (const nom of ['comptes', 'cles', 'sessions', 'meta'] as const) expect(b.magasins[nom].brut.size).toBe(0);
    expect([...b.magasins.usage.brut.keys()].filter((k) => k.startsWith('jour/'))).toEqual([]);
    expect(await b.connecter('cle-admin', 2)).toMatchObject({ statut: 401 });
    // Plus d'administrateur : le code fondateur resservirait, s'il est encore posé.
    expect((await b.appel('inscription/options', { invitation: FONDATEUR })).statut).toBe(200);
  });
});

describe('ce que le serveur garde', () => {
  it('aucun défi, jeton ni code en clair, et un journal sans contenu', async () => {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    const inv = await b.appel('invitation', {}, admin.cookie);
    const options = await b.appel('connexion/options', {});
    const jeton = admin.cookie.split('=')[1];
    const tout = JSON.stringify(Object.fromEntries(Object.entries(b.magasins).map(([n, m]) => [n, [...m.brut.entries()]])));
    for (const secret of [jeton, inv.corps.code as string, options.corps.challenge as string, FONDATEUR]) {
      expect(tout).not.toContain(secret);
    }
    const compte = [...b.magasins.comptes.brut.values()][0];
    expect(Object.keys(JSON.parse(compte)).sort()).toEqual(['cles', 'creeLe', 'id', 'role']);
    for (const ligne of b.journal) for (const v of Object.values(ligne)) expect(String(v)).toMatch(/^[a-z-]+$|^[A-Z]+$|^\d+$/);
  });

  it('verifierSession : un compte supprimé n’a plus de session', async () => {
    const b = banc();
    const admin = await b.inscrire(FONDATEUR, 'cle-admin');
    b.magasins.comptes.brut.clear();
    const requete = new Request(ORIGINE, { headers: { Cookie: admin.cookie } });
    expect(await verifierSession(requete, b.magasins, T0)).toBeNull();
  });
});
