/**
 * Les comptes ZeNote, côté serveur : inscription sur invitation, connexion par clé
 * d'accès, session, déconnexion, suppression, invitations.
 *
 * Change `comptes-utilisateurs`, décisions 2 à 9, et spec `comptes`. Comme pour
 * `analyser`, tout le comportement est ici, avec ses dépendances injectées : les
 * magasins, la vérification WebAuthn, l'horloge. `compte.mts` ne fait que brancher
 * les vrais.
 *
 * Rien de ce qui passe ici ne touche aux notes. Les réponses d'erreur ne portent
 * qu'un `motif`, et le journal que des motifs et des nombres.
 */

import { alea, base64url, empreinte, type Magasins } from '../partage/magasin.ts';
import {
  fermerSession,
  ouvrirSession,
  verifierSession,
  type CleCompte,
  type Compte,
  type Role,
  type SessionStockee,
} from '../partage/session.ts';

export const DUREE_DEFI_MS = 5 * 60 * 1000;
export const DUREE_INVITATION_MS = 7 * 24 * 3600 * 1000;
/** L'identifiant utilisateur du coffre : celui du compte ne doit jamais l'égaler (décision 2). */
export const USER_ID_COFFRE = 'zenote';
const CORPS_MAX = 64 * 1024;

/** Ce que la fonction demande à WebAuthn. `compte.mts` le branche sur `@simplewebauthn/server`. */
export interface VerificateurWebAuthn {
  optionsInscription(p: {
    rpID: string;
    userId: Uint8Array;
    userName: string;
    userDisplayName: string;
  }): Promise<{ challenge: string } & Record<string, unknown>>;
  verifierInscription(p: {
    reponse: unknown;
    defi: string;
    origine: string;
    rpID: string;
  }): Promise<CleCompte | null>;
  optionsConnexion(p: { rpID: string }): Promise<{ challenge: string } & Record<string, unknown>>;
  verifierConnexion(p: {
    reponse: unknown;
    defi: string;
    origine: string;
    rpID: string;
    cle: CleCompte;
  }): Promise<{ compteur: number } | null>;
}

export type Journal = (evenement: Record<string, string | number>) => void;

export interface DependancesCompte {
  magasins: Magasins;
  webauthn: VerificateurWebAuthn;
  /** L'origine est-elle admise pour cette requête ? Voir `partage/origines.ts`. */
  origineAutorisee: (origine: string, requete: Request) => boolean;
  /** `ZENOTE_CODE_FONDATEUR`, ou `null` quand il n'est pas posé. */
  codeFondateur: string | null;
  journal: Journal;
  maintenant?: () => number;
}

interface DefiStocke {
  usage: 'INSCRIPTION' | 'CONNEXION';
  expire: number;
  /** Inscription : le compte à créer et ce qui l'autorise. */
  compteId?: string;
  invitation?: string;
}

interface InvitationStockee {
  expire: number;
  utilisee: boolean;
  creePar: string;
}

// ---------------------------------------------------------------- réponses

function repondre(statut: number, corps: unknown, entetes: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(corps), {
    status: statut,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...entetes },
  });
}

const refus = (statut: number, motif: string) => repondre(statut, { motif });

async function lireCorps(requete: Request): Promise<Record<string, unknown> | null> {
  const texte = await requete.text();
  if (texte.length > CORPS_MAX) return null;
  try {
    const corps = JSON.parse(texte) as unknown;
    return typeof corps === 'object' && corps !== null && !Array.isArray(corps) ? (corps as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** Le défi signé par l'appareil, lu dans `clientDataJSON` — il sert de clé pour retrouver le défi émis. */
function defiDeLaReponse(reponse: unknown): string | null {
  try {
    const donnees = (reponse as { response?: { clientDataJSON?: unknown } }).response?.clientDataJSON;
    if (typeof donnees !== 'string') return null;
    const b64 = donnees.replace(/-/g, '+').replace(/_/g, '/');
    const client = JSON.parse(atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4))) as { challenge?: unknown };
    return typeof client.challenge === 'string' ? client.challenge : null;
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------ le tri

export async function traiterCompte(requete: Request, d: DependancesCompte): Promise<Response> {
  const maintenant = d.maintenant ?? Date.now;
  const route = new URL(requete.url).pathname.match(/\/compte\/(.+?)\/?$/)?.[1] ?? '';

  if (route === 'session') {
    if (requete.method !== 'GET') return refus(405, 'methode-refusee');
    const session = await verifierSession(requete, d.magasins, maintenant());
    return repondre(200, session ? { connecte: true, role: session.role } : { connecte: false });
  }

  // Tout le reste modifie un état : POST, de l'origine de l'application, en JSON (décision 5).
  if (requete.method !== 'POST') return refus(405, 'methode-refusee');
  const origine = requete.headers.get('origin');
  if (!origine || !d.origineAutorisee(origine, requete)) {
    d.journal({ evenement: 'compte-refuse', motif: 'origine-refusee' });
    return refus(403, 'origine-refusee');
  }
  if (!(requete.headers.get('content-type') ?? '').toLowerCase().startsWith('application/json')) {
    return refus(415, 'json-attendu');
  }
  const rpID = new URL(origine).hostname;
  const corps = await lireCorps(requete);
  if (!corps) return refus(400, 'requete-invalide');

  switch (route) {
    case 'inscription/options':
      return optionsInscription(corps, rpID, d, maintenant());
    case 'inscription':
      return inscription(corps, origine, rpID, d, maintenant());
    case 'connexion/options':
      return optionsConnexion(rpID, d, maintenant());
    case 'connexion':
      return connexion(corps, origine, rpID, d, maintenant());
    case 'deconnexion': {
      const cookie = await fermerSession(requete, d.magasins);
      return repondre(200, { connecte: false }, { 'Set-Cookie': cookie });
    }
    case 'suppression':
      return suppression(requete, d, maintenant());
    case 'invitation':
      return invitation(requete, d, maintenant());
    default:
      return refus(404, 'inconnu');
  }
}

// ------------------------------------------------------------ inscription

/**
 * Ce qui autorise une inscription : le code fondateur tant qu'aucun administrateur
 * n'existe, ou une invitation valide. Même réponse pour toute autre chose (spec
 * « Invitation invalide ») : on ne dit pas laquelle des raisons s'applique.
 */
async function autorisation(code: unknown, d: DependancesCompte, maintenant: number): Promise<string | null> {
  if (typeof code !== 'string' || code.length < 8 || code.length > 200) return null;
  if (d.codeFondateur && code === d.codeFondateur) {
    return (await d.magasins.meta.lire('administrateur')) ? null : 'FONDATEUR';
  }
  const cle = await empreinte(code);
  const inv = await d.magasins.invitations.lire<InvitationStockee>(cle);
  if (!inv || inv.valeur.utilisee || inv.valeur.expire <= maintenant) return null;
  return cle;
}

async function optionsInscription(
  corps: Record<string, unknown>,
  rpID: string,
  d: DependancesCompte,
  maintenant: number,
): Promise<Response> {
  const invitation = await autorisation(corps.invitation, d, maintenant);
  if (!invitation) {
    d.journal({ evenement: 'inscription-refusee', motif: 'invitation-invalide' });
    return refus(400, 'invitation-invalide');
  }
  // Décision 2 : un identifiant tiré au hasard, jamais celui du coffre.
  const userId = crypto.getRandomValues(new Uint8Array(32));
  const options = await d.webauthn.optionsInscription({
    rpID,
    userId,
    userName: 'compte-zenote',
    userDisplayName: 'Compte ZeNote',
  });
  await d.magasins.defis.ecrire(await empreinte(options.challenge), {
    usage: 'INSCRIPTION',
    expire: maintenant + DUREE_DEFI_MS,
    compteId: base64url(userId),
    invitation,
  } satisfies DefiStocke);
  return repondre(200, options);
}

/** Retire le défi dès sa présentation : réussie ou non, une réponse ne sert qu'une fois. */
async function consommerDefi(
  reponse: unknown,
  usage: DefiStocke['usage'],
  d: DependancesCompte,
  maintenant: number,
): Promise<{ defi: string; stocke: DefiStocke } | null> {
  const defi = defiDeLaReponse(reponse);
  if (!defi) return null;
  const cle = await empreinte(defi);
  const lu = await d.magasins.defis.lire<DefiStocke>(cle);
  if (!lu) return null;
  await d.magasins.defis.supprimer(cle);
  if (lu.valeur.usage !== usage || lu.valeur.expire <= maintenant) return null;
  return { defi, stocke: lu.valeur };
}

async function inscription(
  corps: Record<string, unknown>,
  origine: string,
  rpID: string,
  d: DependancesCompte,
  maintenant: number,
): Promise<Response> {
  const defi = await consommerDefi(corps.reponse, 'INSCRIPTION', d, maintenant);
  if (!defi || !defi.stocke.compteId || !defi.stocke.invitation) return refus(400, 'defi-invalide');

  let cle: CleCompte | null = null;
  try {
    cle = await d.webauthn.verifierInscription({ reponse: corps.reponse, defi: defi.defi, origine, rpID });
  } catch {
    cle = null;
  }
  if (!cle) {
    d.journal({ evenement: 'inscription-refusee', motif: 'cle-refusee' });
    return refus(400, 'cle-refusee');
  }

  // L'invitation n'est consommée qu'ici : une inscription abandonnée ne brûle pas le code.
  const compteId = defi.stocke.compteId;
  let role: Role = 'MEMBRE';
  if (defi.stocke.invitation === 'FONDATEUR') {
    const premier = await d.magasins.meta.ecrire('administrateur', { compteId }, { siNouvelle: true });
    if (!premier) return refus(400, 'invitation-invalide');
    role = 'ADMINISTRATEUR';
  } else {
    const inv = await d.magasins.invitations.lire<InvitationStockee>(defi.stocke.invitation);
    if (!inv || inv.valeur.utilisee || inv.valeur.expire <= maintenant) return refus(400, 'invitation-invalide');
    const prise = await d.magasins.invitations.ecrire(
      defi.stocke.invitation,
      { ...inv.valeur, utilisee: true },
      { siVersion: inv.version },
    );
    if (!prise) return refus(400, 'invitation-invalide');
  }

  const compte: Compte = { id: compteId, role, creeLe: new Date(maintenant).toISOString(), cles: [cle] };
  await d.magasins.comptes.ecrire(compteId, compte, { siNouvelle: true });
  await d.magasins.cles.ecrire(cle.id, { compteId });
  const cookie = await ouvrirSession(compteId, d.magasins, maintenant);
  d.journal({ evenement: 'compte-cree', role });
  return repondre(201, { connecte: true, role }, { 'Set-Cookie': cookie });
}

// --------------------------------------------------------------- connexion

async function optionsConnexion(rpID: string, d: DependancesCompte, maintenant: number): Promise<Response> {
  const options = await d.webauthn.optionsConnexion({ rpID });
  await d.magasins.defis.ecrire(await empreinte(options.challenge), {
    usage: 'CONNEXION',
    expire: maintenant + DUREE_DEFI_MS,
  } satisfies DefiStocke);
  return repondre(200, options);
}

async function connexion(
  corps: Record<string, unknown>,
  origine: string,
  rpID: string,
  d: DependancesCompte,
  maintenant: number,
): Promise<Response> {
  const defi = await consommerDefi(corps.reponse, 'CONNEXION', d, maintenant);
  if (!defi) return refus(400, 'defi-invalide');

  const idCle = (corps.reponse as { id?: unknown } | undefined)?.id;
  const index = typeof idCle === 'string' ? await d.magasins.cles.lire<{ compteId: string }>(idCle) : null;
  const compte = index ? await d.magasins.comptes.lire<Compte>(index.valeur.compteId) : null;
  const cle = compte?.valeur.cles.find((c) => c.id === idCle);
  // Spec « Clé d'accès inconnue » : celle du coffre, par exemple.
  if (!compte || !cle) {
    d.journal({ evenement: 'connexion-refusee', motif: 'cle-inconnue' });
    return refus(401, 'cle-inconnue');
  }

  let verifie: { compteur: number } | null = null;
  try {
    verifie = await d.webauthn.verifierConnexion({ reponse: corps.reponse, defi: defi.defi, origine, rpID, cle });
  } catch {
    verifie = null;
  }
  if (!verifie) {
    d.journal({ evenement: 'connexion-refusee', motif: 'cle-refusee' });
    return refus(401, 'cle-refusee');
  }

  const cles = compte.valeur.cles.map((c) => (c.id === cle.id ? { ...c, compteur: verifie.compteur } : c));
  await d.magasins.comptes.ecrire(compte.valeur.id, { ...compte.valeur, cles });
  const cookie = await ouvrirSession(compte.valeur.id, d.magasins, maintenant);
  d.journal({ evenement: 'connexion' });
  return repondre(200, { connecte: true, role: compte.valeur.role }, { 'Set-Cookie': cookie });
}

// ------------------------------------------------ suppression, invitation

async function suppression(requete: Request, d: DependancesCompte, maintenant: number): Promise<Response> {
  const session = await verifierSession(requete, d.magasins, maintenant);
  if (!session) return refus(401, 'authentification-requise');
  const compte = await d.magasins.comptes.lire<Compte>(session.compteId);

  for (const cle of compte?.valeur.cles ?? []) await d.magasins.cles.supprimer(cle.id);
  for (const cle of await d.magasins.sessions.lister('')) {
    const s = await d.magasins.sessions.lire<SessionStockee>(cle);
    if (s?.valeur.compteId === session.compteId) await d.magasins.sessions.supprimer(cle);
  }
  for (const cle of await d.magasins.usage.lister(`jour/${session.compteId}/`)) await d.magasins.usage.supprimer(cle);
  const admin = await d.magasins.meta.lire<{ compteId: string }>('administrateur');
  if (admin?.valeur.compteId === session.compteId) await d.magasins.meta.supprimer('administrateur');
  await d.magasins.comptes.supprimer(session.compteId);

  d.journal({ evenement: 'compte-supprime' });
  const cookie = await fermerSession(requete, d.magasins);
  return repondre(200, { connecte: false }, { 'Set-Cookie': cookie });
}

async function invitation(requete: Request, d: DependancesCompte, maintenant: number): Promise<Response> {
  const session = await verifierSession(requete, d.magasins, maintenant);
  if (!session) return refus(401, 'authentification-requise');
  if (session.role !== 'ADMINISTRATEUR') return refus(403, 'administrateur-requis');
  const code = alea(16);
  const expire = maintenant + DUREE_INVITATION_MS;
  await d.magasins.invitations.ecrire(await empreinte(code), {
    expire,
    utilisee: false,
    creePar: session.compteId,
  } satisfies InvitationStockee);
  d.journal({ evenement: 'invitation-creee' });
  return repondre(201, { code, expire: new Date(expire).toISOString() });
}
