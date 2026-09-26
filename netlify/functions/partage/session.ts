/**
 * La session d'un compte : un jeton opaque en cookie `HttpOnly`, vérifié côté serveur.
 *
 * Change `comptes-utilisateurs`, décision 4. Le jeton n'est jamais stocké : seule son
 * empreinte l'est, avec le compte et l'expiration. Le code de la page ne le lit pas,
 * ne peut donc ni le fuiter ni le fabriquer ; se déconnecter supprime l'empreinte.
 */

import { alea, empreinte, type Magasins } from './magasin.ts';

export const COOKIE_SESSION = 'zenote_session';
export const DUREE_SESSION_MS = 30 * 24 * 3600 * 1000;

export type Role = 'ADMINISTRATEUR' | 'MEMBRE';

export interface CleCompte {
  /** Identifiant de la clé d'accès, en base64url. */
  id: string;
  /** Clé publique COSE, en base64url. */
  clePublique: string;
  compteur: number;
  transports?: string[];
}

export interface Compte {
  id: string;
  role: Role;
  creeLe: string;
  cles: CleCompte[];
}

export interface SessionStockee {
  compteId: string;
  expire: number;
}

export interface SessionVerifiee {
  compteId: string;
  role: Role;
}

/** La valeur d'un cookie de la requête, ou `null`. */
export function lireCookie(requete: Request, nom: string): string | null {
  const entete = requete.headers.get('cookie');
  if (!entete) return null;
  for (const morceau of entete.split(';')) {
    const egal = morceau.indexOf('=');
    if (egal < 0) continue;
    if (morceau.slice(0, egal).trim() === nom) return morceau.slice(egal + 1).trim() || null;
  }
  return null;
}

/**
 * Le compte de la session portée par la requête, ou `null`.
 *
 * Absente, malformée, inconnue, expirée, ou d'un compte supprimé : `null`, sans
 * distinction. Une session expirée est effacée au passage.
 */
export async function verifierSession(
  requete: Request,
  magasins: Pick<Magasins, 'sessions' | 'comptes'>,
  maintenant: number = Date.now(),
): Promise<SessionVerifiee | null> {
  const jeton = lireCookie(requete, COOKIE_SESSION);
  if (!jeton || !/^[A-Za-z0-9_-]{40,64}$/.test(jeton)) return null;
  const cle = await empreinte(jeton);
  const session = await magasins.sessions.lire<SessionStockee>(cle);
  if (!session) return null;
  if (session.valeur.expire <= maintenant) {
    await magasins.sessions.supprimer(cle);
    return null;
  }
  const compte = await magasins.comptes.lire<Compte>(session.valeur.compteId);
  if (!compte) return null;
  return { compteId: compte.valeur.id, role: compte.valeur.role };
}

/** Ouvre une session et rend l'en-tête `Set-Cookie` qui la pose. */
export async function ouvrirSession(
  compteId: string,
  magasins: Pick<Magasins, 'sessions'>,
  maintenant: number = Date.now(),
): Promise<string> {
  const jeton = alea(32);
  await magasins.sessions.ecrire(await empreinte(jeton), {
    compteId,
    expire: maintenant + DUREE_SESSION_MS,
  } satisfies SessionStockee);
  return cookieSession(jeton, DUREE_SESSION_MS / 1000);
}

/** Révoque la session de la requête, et rend l'en-tête qui efface le cookie. */
export async function fermerSession(requete: Request, magasins: Pick<Magasins, 'sessions'>): Promise<string> {
  const jeton = lireCookie(requete, COOKIE_SESSION);
  if (jeton) await magasins.sessions.supprimer(await empreinte(jeton));
  return cookieSession('', 0);
}

export function cookieSession(valeur: string, maxAge: number): string {
  return `${COOKIE_SESSION}=${valeur}; HttpOnly; Secure; SameSite=Strict; Path=/api; Max-Age=${maxAge}`;
}
