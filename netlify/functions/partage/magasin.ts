/**
 * Les magasins du serveur de ZeNote, derrière une interface qu'on peut simuler.
 *
 * Change `comptes-utilisateurs`, décision 3. En production, chaque magasin est un
 * magasin Netlify Blobs lu en cohérence forte (`magasin-blobs.ts`) ; en test, une
 * `Map`. Les écritures conditionnelles (clé neuve, ou version attendue) sont ce qui
 * rend sûrs la consommation d'un défi ou d'une invitation et les compteurs.
 *
 * Aucun secret n'y entre en clair : défis, jetons et codes n'y sont que leur empreinte.
 */

export interface Lu<T> {
  valeur: T;
  /** La version de l'entrée, à rendre pour une écriture conditionnelle. */
  version: string;
}

export type Condition = { siNouvelle: true } | { siVersion: string };

export interface Magasin {
  lire<T>(cle: string): Promise<Lu<T> | null>;
  /** Rend `false` si la condition n'est pas tenue : rien n'est alors écrit. */
  ecrire(cle: string, valeur: unknown, condition?: Condition): Promise<boolean>;
  supprimer(cle: string): Promise<void>;
  lister(prefixe: string): Promise<string[]>;
}

export const NOMS_MAGASINS = ['comptes', 'cles', 'defis', 'sessions', 'invitations', 'usage', 'meta'] as const;
export type NomMagasin = (typeof NOMS_MAGASINS)[number];
export type Magasins = Record<NomMagasin, Magasin>;

/** Un magasin en mémoire, au même contrat que Netlify Blobs. */
export function magasinEnMemoire(): Magasin & { brut: Map<string, string> } {
  const brut = new Map<string, string>();
  const versions = new Map<string, number>();
  let horloge = 0;
  return {
    brut,
    async lire<T>(cle: string) {
      const texte = brut.get(cle);
      if (texte === undefined) return null;
      return { valeur: JSON.parse(texte) as T, version: String(versions.get(cle)) };
    },
    async ecrire(cle, valeur, condition) {
      if (condition && 'siNouvelle' in condition && brut.has(cle)) return false;
      if (condition && 'siVersion' in condition && String(versions.get(cle)) !== condition.siVersion) return false;
      brut.set(cle, JSON.stringify(valeur));
      versions.set(cle, ++horloge);
      return true;
    },
    async supprimer(cle) {
      brut.delete(cle);
      versions.delete(cle);
    },
    async lister(prefixe) {
      return [...brut.keys()].filter((c) => c.startsWith(prefixe)).sort();
    },
  };
}

export function magasinsEnMemoire(): Record<NomMagasin, ReturnType<typeof magasinEnMemoire>> {
  return Object.fromEntries(NOMS_MAGASINS.map((n) => [n, magasinEnMemoire()])) as Record<
    NomMagasin,
    ReturnType<typeof magasinEnMemoire>
  >;
}

// ------------------------------------------------------------ petits outils

export function base64url(octets: Uint8Array): string {
  let binaire = '';
  for (const o of octets) binaire += String.fromCharCode(o);
  return btoa(binaire).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function depuisBase64url(texte: string): Uint8Array {
  const b64 = texte.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (texte.length % 4)) % 4);
  const binaire = atob(b64);
  return Uint8Array.from(binaire, (c) => c.charCodeAt(0));
}

/** `n` octets tirés au hasard, en base64url. */
export function alea(n: number): string {
  return base64url(crypto.getRandomValues(new Uint8Array(n)));
}

/** L'empreinte SHA-256 d'un secret, en base64url : ce qui sert de clé à la place du secret. */
export async function empreinte(secret: string): Promise<string> {
  return base64url(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(secret))));
}
