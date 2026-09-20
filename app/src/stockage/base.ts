/**
 * Accès bas niveau à IndexedDB.
 *
 * Tout est local : aucun serveur, aucune donnée qui quitte l'appareil. Les promesses
 * rendues ici se résolvent sur l'événement `complete` de la transaction, jamais sur
 * la seule requête — c'est ce qui permet de ne confirmer une capture qu'une fois
 * l'écriture réellement durable.
 */

export const NOM_BASE = 'zenote';

/**
 * Version 2 : le magasin des morceaux d'enregistrement.
 *
 * Un `MediaRecorder` garde ses morceaux en mémoire jusqu'à l'arrêt. Une application
 * tuée pendant qu'on parle — onglet fermé, téléphone à court de batterie, système qui
 * récupère la mémoire — les emportait tous. « Aucune capture perdue » ne tenait donc
 * que tant que rien de brutal n'arrivait. Les morceaux sont désormais écrits au fur
 * et à mesure ; ce qui reste orphelin au démarrage suivant est une capture
 * interrompue, et se récupère.
 */
/**
 * Version 3 : le lexique personnel.
 *
 * Ce que la reconnaissance vocale entend mal une fois, elle l'entendra mal toujours :
 * un nom de client, un acronyme métier, un prénom peu courant. Corriger la même chose
 * chaque semaine est ce qui fait abandonner un outil. Les corrections sont donc
 * retenues, et appliquées aux transcriptions suivantes.
 *
 * Un seul enregistrement, scellé en entier. Ces mots sont des noms de personnes et de
 * dossiers : les laisser en clair — même comme simples clés d'un magasin — ouvrirait
 * dans la base le trou que le chiffrement ferme partout ailleurs.
 */
export const VERSION_BASE = 3;

export const MAGASIN_CAPTURES = 'captures';
export const MAGASIN_ELEMENTS = 'elements';
export const MAGASIN_REGLAGES = 'reglages';
export const MAGASIN_MORCEAUX = 'morceaux';
export const MAGASIN_LEXIQUE = 'lexique';

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
        if (!base.objectStoreNames.contains(MAGASIN_LEXIQUE)) {
          // Une seule ligne, dont la valeur est scellée : voir [VERSION_BASE].
          base.createObjectStore(MAGASIN_LEXIQUE, { keyPath: 'id' });
        }
        if (!base.objectStoreNames.contains(MAGASIN_MORCEAUX)) {
          const morceaux = base.createObjectStore(MAGASIN_MORCEAUX, { keyPath: 'id' });
          // Les morceaux d'un même enregistrement se retrouvent par là, et par rien
          // d'autre : c'est ce qui permet de les rassembler après un arrêt brutal.
          morceaux.createIndex('enregistrementId', 'enregistrementId');
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
    let resultat: Awaited<T> | undefined;
    let echec: unknown;

    const abandonner = (erreur: unknown) => {
      echec = erreur;
      try {
        tx.abort();
      } catch {
        /* la transaction s'est peut-être déjà terminée */
      }
      rejeter(erreur);
    };

    let valeur: T | void;
    try {
      valeur = travail(noms.map((n) => tx.objectStore(n)));
    } catch (erreur) {
      abandonner(erreur);
      return;
    }

    // Un travail asynchrone (lectures chaînées) est attendu ici, jamais laissé
    // pendre : une erreur interrompt la transaction au lieu de fuir.
    if (valeur !== null && typeof (valeur as { then?: unknown })?.then === 'function') {
      void (valeur as Promise<Awaited<T>>).then(
        (v) => {
          resultat = v;
        },
        abandonner,
      );
    } else {
      resultat = valeur as Awaited<T>;
    }

    tx.oncomplete = () => {
      if (echec === undefined) resoudre(resultat as Awaited<T>);
    };
    tx.onerror = () => abandonner(tx.error ?? new Error('Écriture refusée'));
    tx.onabort = () => {
      if (echec === undefined) rejeter(tx.error ?? new Error('Transaction interrompue'));
    };
  });
}

/** Enveloppe une requête IndexedDB dans une promesse. */
export function demander<T>(requete: IDBRequest<T>): Promise<T> {
  return new Promise<T>((resoudre, rejeter) => {
    requete.onsuccess = () => resoudre(requete.result);
    requete.onerror = () => rejeter(requete.error ?? new Error('Requête refusée'));
  });
}
