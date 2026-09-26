/**
 * Le compte utilisateur, côté appareil.
 *
 * Change `comptes-utilisateurs`, décision 10. L'analyse distante est réservée à un
 * utilisateur connecté avec un compte ZeNote : sans compte, aucune note ne part,
 * quel que soit le réglage enregistré.
 *
 * L'appareil ne voit jamais la preuve de session : c'est un cookie `HttpOnly` que le
 * serveur pose et vérifie. Il garde seulement, en mémoire, ce que `GET
 * /api/compte/session` lui dit — connecté ou non, et le rôle. Cette garde n'est
 * qu'une commodité, qui évite d'envoyer un texte qui serait refusé ; la protection
 * est celle du serveur.
 *
 * Rien de ce qui part d'ici ne porte de contenu de note : un code d'invitation, des
 * réponses de clé d'accès, et c'est tout.
 */

import { startAuthentication, startRegistration } from '@simplewebauthn/browser';
import { ecrireReglage } from '../stockage/depot.ts';

export type Role = 'ADMINISTRATEUR' | 'MEMBRE';

export interface EtatCompte {
  connecte: boolean;
  role: Role | null;
}

const BASE = '/api/compte';
let etat: EtatCompte = { connecte: false, role: null };
let envoyer: typeof fetch = (...args) => fetch(...args);

/** Pour les tests : remplacer le réseau. */
export function utiliserReseau(f: typeof fetch): void {
  envoyer = f;
}

export function etatCompte(): EtatCompte {
  return etat;
}

export function compteConnecte(): boolean {
  return etat.connecte;
}

export function estAdministrateur(): boolean {
  return etat.connecte && etat.role === 'ADMINISTRATEUR';
}

/**
 * Un 401 de `/api/analyser` : le serveur ne reconnaît plus la session. L'appareil se
 * montre déconnecté, et l'analyse distante s'éteint avec lui.
 */
export async function marquerDeconnecte(): Promise<void> {
  const etait = etat.connecte;
  etat = { connecte: false, role: null };
  if (etait) await ecrireReglage('analyseDistante', false);
}

/**
 * Relit l'état auprès du serveur : au démarrage, au retour sur l'onglet, après
 * chaque geste. Hors ligne ou en erreur, l'état est inconnu — traité comme
 * déconnecté : rien ne part, ce qui est de toute façon le cas hors ligne.
 */
export async function rafraichirCompte(): Promise<EtatCompte> {
  try {
    const r = await envoyer(`${BASE}/session`, { credentials: 'same-origin', cache: 'no-store' });
    const corps = r.ok ? ((await r.json()) as { connecte?: unknown; role?: unknown }) : null;
    if (corps?.connecte === true && (corps.role === 'ADMINISTRATEUR' || corps.role === 'MEMBRE')) {
      etat = { connecte: true, role: corps.role };
    } else {
      await marquerDeconnecte();
    }
  } catch {
    etat = { connecte: false, role: null };
  }
  return etat;
}

export class RefusCompte extends Error {
  constructor(
    readonly motif: string,
    message: string,
  ) {
    super(message);
    this.name = 'RefusCompte';
  }
}

const MESSAGES: Record<string, string> = {
  'invitation-invalide': 'Cette invitation n’est pas valable.',
  'cle-inconnue': 'Cette clé n’est pas celle d’un compte ZeNote.',
  'cle-refusee': 'La clé d’accès n’a pas été reconnue.',
  'defi-invalide': 'La demande a expiré. Recommencez.',
  'origine-refusee': 'Demande refusée.',
  'authentification-requise': 'Vous n’êtes plus connecté.',
  'administrateur-requis': 'Seul un administrateur peut inviter.',
};

async function poster<T>(chemin: string, corps: unknown): Promise<T> {
  let r: Response;
  try {
    r = await envoyer(`${BASE}/${chemin}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(corps),
      credentials: 'same-origin',
      cache: 'no-store',
    });
  } catch {
    throw new RefusCompte('hors-ligne', 'Le service des comptes n’est pas joignable.');
  }
  const lu = (await r.json().catch(() => ({}))) as Record<string, unknown>;
  if (!r.ok) {
    const motif = typeof lu.motif === 'string' ? lu.motif : 'indisponible';
    throw new RefusCompte(motif, MESSAGES[motif] ?? 'Le service des comptes n’a pas pu répondre.');
  }
  return lu as T;
}

/** Une clé d'accès refusée ou annulée par l'utilisateur : dit, jamais levé plus haut. */
function refusCle(erreur: unknown): RefusCompte {
  if (erreur instanceof RefusCompte) return erreur;
  return new RefusCompte('cle-annulee', 'La clé d’accès n’a pas été utilisée.');
}

/**
 * Se connecter, ou se déconnecter, éteint l'analyse distante : l'allumer demande la
 * confirmation d'un utilisateur connecté (spec `analyse-distante` — « Consentement
 * redemandé après connexion »).
 */
async function apresChangement(): Promise<EtatCompte> {
  await ecrireReglage('analyseDistante', false);
  return rafraichirCompte();
}

/** Crée un compte depuis une invitation (ou le code fondateur), avec une clé d'accès neuve. */
export async function creerCompte(invitation: string): Promise<EtatCompte> {
  const options = await poster<Record<string, unknown>>('inscription/options', { invitation });
  let reponse: unknown;
  try {
    reponse = await startRegistration({ optionsJSON: options as never });
  } catch (e) {
    throw refusCle(e);
  }
  await poster('inscription', { reponse });
  return apresChangement();
}

export async function seConnecter(): Promise<EtatCompte> {
  const options = await poster<Record<string, unknown>>('connexion/options', {});
  let reponse: unknown;
  try {
    reponse = await startAuthentication({ optionsJSON: options as never });
  } catch (e) {
    throw refusCle(e);
  }
  await poster('connexion', { reponse });
  return apresChangement();
}

export async function seDeconnecter(): Promise<EtatCompte> {
  await poster('deconnexion', {}).catch(() => {});
  etat = { connecte: false, role: null };
  await ecrireReglage('analyseDistante', false);
  return etat;
}

export async function supprimerCompte(): Promise<EtatCompte> {
  await poster('suppression', {});
  etat = { connecte: false, role: null };
  await ecrireReglage('analyseDistante', false);
  return etat;
}

/** Une invitation, sous forme de lien : le code voyage dans le fragment, jamais jusqu'au serveur. */
export async function inviter(origine: string = location.origin): Promise<{ lien: string; expire: string }> {
  const { code, expire } = await poster<{ code: string; expire: string }>('invitation', {});
  return { lien: `${origine}/#invitation=${code}`, expire };
}

// --------------------------------------------------- l'invitation reçue

let invitationRecue: string | null = null;

/**
 * Lit `#invitation=…` dans l'adresse, le garde en mémoire, et l'efface de l'adresse :
 * le code ne reste ni dans l'historique ni dans un signet.
 *
 * @return `true` si une invitation a été lue
 */
export function lireInvitationDeLAdresse(
  loc: Pick<Location, 'hash' | 'pathname' | 'search'> = location,
  remplacer: (adresse: string) => void = (adresse) => history.replaceState(null, '', adresse),
): boolean {
  const m = loc.hash.match(/^#invitation=([A-Za-z0-9_-]{8,200})$/);
  if (!m) return false;
  invitationRecue = m[1];
  remplacer(`${loc.pathname}${loc.search}#reglages`);
  return true;
}

export function invitationEnAttente(): string | null {
  return invitationRecue;
}

export function oublierInvitation(): void {
  invitationRecue = null;
}
