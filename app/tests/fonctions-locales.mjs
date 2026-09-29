/**
 * Les vraies fonctions Netlify, construites pour tourner ici, avec des magasins en
 * mémoire — change `comptes-utilisateurs`, décision 11.
 *
 * esbuild (déjà là par Vite) les assemble depuis `netlify/functions/`, avec les
 * dépendances de `netlify/node_modules` : `@simplewebauthn/server` vérifie vraiment les
 * clés d'accès de l'authentificateur virtuel. Seul le fournisseur TypeSafe est simulé.
 */

import { build } from 'esbuild';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const FONCTIONS = new URL('../../netlify/functions/', import.meta.url).pathname;

export async function fonctionsLocales({ origine, codeFondateur, fournisseur }) {
  const resultat = await build({
    stdin: {
      contents: [
        "export { traiterCompte } from './compte/traitement.ts';",
        "export { webauthnReel } from './compte/webauthn.ts';",
        "export { magasinsEnMemoire } from './partage/magasin.ts';",
        "export { traiter } from './analyser/traitement.ts';",
        "export { creerIdentification } from './analyser/compte.ts';",
        "export { creerQuota } from './analyser/quota.ts';",
      ].join('\n'),
      resolveDir: FONCTIONS,
      loader: 'ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
    logLevel: 'error',
  });
  const dossier = await mkdtemp(join(tmpdir(), 'zenote-fonctions-'));
  const fichier = join(dossier, 'fonctions.mjs');
  await writeFile(fichier, resultat.outputFiles[0].text);
  const f = await import(pathToFileURL(fichier).href);

  const magasins = f.magasinsEnMemoire();
  const journal = [];
  return {
    magasins,
    journal,
    compte: (requete) =>
      f.traiterCompte(requete, {
        magasins,
        webauthn: f.webauthnReel,
        origineAutorisee: (o) => o === origine,
        codeFondateur,
        journal: (l) => journal.push(l),
      }),
    analyser: (requete) =>
      f.traiter(requete, {
        identifier: f.creerIdentification(() => magasins),
        quota: f.creerQuota(() => magasins.usage, {}),
        creerClient: () => fournisseur(),
        choix: (instructions, criteria) => ({ type: 'choice', instructions, criteria }),
        journal: (l) => journal.push(l),
      }),
  };
}
