/**
 * Accès bas niveau à IndexedDB.
 *
 * Tout est local : aucun serveur, aucune donnée qui quitte l'appareil. Les promesses
 * rendues ici se résolvent sur l'événement `complete` de la transaction, jamais sur
 * la seule requête — c'est ce qui permet de ne confirmer une capture qu'une fois
 * l'écriture réellement durable.
 */

export const NOM_BASE = 'zenote';
export const VERSION_BASE = 1;

export const MAGASIN_CAPTURES = 'captures';
export const MAGASIN_ELEMENTS = 'elements';
export const MAGASIN_REGLAGES = 'reglages';

let ouverture: Promise<IDBDatabase> | null = null;

/** Ouvre (et crée au besoin) la base. L'ouverture n'a lieu qu'une fois. */
export function ouvrir(): Promise<IDBDatabase> {
  if (!ouverture) {
    ouverture = new Promise<IDBDatabase>((resoudre, rejeter) => {
      const requete = indexedDB.open(NOM_BASE, VERSION_BASE);
      requete.onupgradeneeded = () => {
        const base = requete.result;
        if (!base.objectStoreNames.contains(MAGASIN_CAPTURES)) {
          const captures = base.createObjectStore(MAGASIN_CAPTURES, { keyPath: 'id' });
          captures.createIndex('creeLe', 'creeLe');
          captures.createIndex('analysee', 'analysee');
        }
        if (!base.objectStoreNames.contains(MAGASIN_ELEMENTS)) {
          const elements = base.createObjectStore(MAGASIN_ELEMENTS, { keyPath: 'id' });
          elements.createIndex('captureId', 'captureId');
          elements.createIndex('verdict', 'verdict');
        }
        if (!base.objectStoreNames.contains(MAGASIN_REGLAGES)) {
          base.createObjectStore(MAGASIN_REGLAGES, { keyPath: 'cle' });
        }
      };
      requete.onsuccess = () => resoudre(requete.result);
      requete.onerror = () => rejeter(requete.error ?? new Error('Ouverture de la base refusée'));
      requete.onblocked = () => rejeter(new Error('Base bloquée par un autre onglet'));
    });
  }
  return ouverture;
}

/** Referme et oublie la base ouverte. Réservé aux tests. */
export function reinitialiserOuverture(): void {
  ouverture = null;
}

type Travail<T> = (magasins: IDBObjectStore[]) => T | void;

/**
 * Exécute un travail dans une transaction et ne résout qu'à `complete`.
 *
 * En écriture, la promesse résolue vaut donc garantie de durabilité : c'est le seul
 * signal autorisé à déclencher la confirmation de capture.
 */
export async function transaction<T>(
  noms: string[],
  mode: IDBTransactionMode,
  travail: Travail<T>,
): Promise<Awaited<T>> {
  const base = await ouvrir();
  return new Promise<Awaited<T>>((resoudre, rejeter) => {
    const tx = base.transaction(noms, mode);
    let resultat: T | undefined;
    try {
      resultat = travail(noms.map((n) => tx.objectStore(n))) as T;
    } catch (erreur) {
      tx.abort();
      rejeter(erreur);
      return;
    }
    tx.oncomplete = () => resoudre(resultat as Awaited<T>);
    tx.onerror = () => rejeter(tx.error ?? new Error('Écriture refusée'));
    tx.onabort = () => rejeter(tx.error ?? new Error('Transaction interrompue'));
  });
}

/** Enveloppe une requête IndexedDB dans une promesse. */
export function demander<T>(requete: IDBRequest<T>): Promise<T> {
  return new Promise<T>((resoudre, rejeter) => {
    requete.onsuccess = () => resoudre(requete.result);
    requete.onerror = () => rejeter(requete.error ?? new Error('Requête refusée'));
  });
}
