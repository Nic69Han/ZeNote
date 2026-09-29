/**
 * Les magasins de production : Netlify Blobs, à l'échelle du site, en cohérence forte.
 *
 * Change `comptes-utilisateurs`, décision 3. Un défi ou une invitation consommés
 * doivent l'être tout de suite et partout ; les écritures conditionnelles par
 * version (ETag) rendent sûres les consommations et les compteurs.
 */

import { getStore } from '@netlify/blobs';
import { NOMS_MAGASINS, type Condition, type Magasin, type Magasins } from './magasin.ts';

function magasinBlobs(nom: string): Magasin {
  const store = getStore({ name: `zenote-${nom}`, consistency: 'strong' });
  return {
    async lire<T>(cle: string) {
      const lu = await store.getWithMetadata(cle, { type: 'json' });
      if (!lu) return null;
      return { valeur: lu.data as T, version: lu.etag ?? '' };
    },
    async ecrire(cle: string, valeur: unknown, condition?: Condition) {
      const options =
        condition && 'siNouvelle' in condition
          ? { onlyIfNew: true as const }
          : condition && 'siVersion' in condition
            ? { onlyIfMatch: condition.siVersion }
            : {};
      const resultat = await store.setJSON(cle, valeur, options);
      return resultat.modified;
    },
    async supprimer(cle: string) {
      await store.delete(cle);
    },
    async lister(prefixe: string) {
      const { blobs } = await store.list({ prefix: prefixe });
      return blobs.map((b) => b.key).sort();
    },
  };
}

let memo: Magasins | undefined;

export function magasinsBlobs(): Magasins {
  memo ??= Object.fromEntries(NOMS_MAGASINS.map((n) => [n, magasinBlobs(n)])) as Magasins;
  return memo;
}
