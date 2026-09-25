/**
 * Aucun secret de l'analyse distante dans ce qui est servi à l'appareil.
 *
 * Spec `analyse-distante` — « Paquet de l'application inspecté ». Lancé après chaque
 * construction (`npm run build`), donc aussi chez l'hébergeur, là où la clé existe
 * vraiment : si elle entrait un jour dans `dist/`, la publication échouerait.
 *
 *   node tests/verifier-paquet.mjs [dossier]
 *
 * TypeSafe ne publie pas de préfixe pour ses clés : la vérification la plus sûre est
 * donc de chercher la valeur même de `TYPESAFE_API_KEY` quand elle est connue, en
 * plus des noms qui trahiraient une intégration faite du mauvais côté.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Ce qui n'a rien à faire dans le paquet : les variables d'environnement du
 * fournisseur (`TYPESAFE_API_KEY` et ses voisines), le SDK, et l'adresse du
 * fournisseur — que l'appareil ne contacte jamais directement.
 *
 * `TYPESAFE_` et non `TYPESAFE` : `origineAnalyse.moteur` vaut légitimement
 * `'TYPESAFE'` dans l'application (décision 5), et le paquet doit le connaître.
 */
export const MOTIFS_INTERDITS = ['TYPESAFE_', '@typesafe-ai/sdk', 'api.typesafe.ai'];

async function* fichiers(dossier) {
  for (const entree of await readdir(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) yield* fichiers(chemin);
    else if (entree.isFile()) yield chemin;
  }
}

/**
 * Les fuites trouvées dans `dossier`, fichier par fichier.
 *
 * @param {string} dossier
 * @param {{ cle?: string }} [options] la clé réelle, si elle est connue ici
 * @returns {Promise<{ fichier: string, motif: string }[]>}
 */
export async function chercherFuites(dossier, { cle } = {}) {
  const motifs = [...MOTIFS_INTERDITS];
  // Une clé vide ou trop courte trouverait n'importe quoi, n'importe où.
  const secret = cle?.trim();
  if (secret && secret.length >= 8) motifs.push(secret);

  const fuites = [];
  for await (const chemin of fichiers(dossier)) {
    const contenu = await readFile(chemin);
    for (const motif of motifs) {
      if (contenu.includes(motif)) {
        // Le secret n'est jamais recopié dans le rapport.
        fuites.push({ fichier: relative(dossier, chemin), motif: motif === secret ? 'la clé TYPESAFE_API_KEY' : motif });
      }
    }
  }
  return fuites;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dossier = process.argv[2] ?? fileURLToPath(new URL('../dist/', import.meta.url));
  const fuites = await chercherFuites(dossier, { cle: process.env.TYPESAFE_API_KEY });
  if (fuites.length > 0) {
    console.error('Le paquet de l’application contient ce qui doit rester sur le serveur :');
    for (const { fichier, motif } of fuites) console.error(`  ${fichier} : ${motif}`);
    process.exit(1);
  }
  console.log('Paquet vérifié : aucun secret ni SDK de l’analyse distante.');
}
