/**
 * Le serveur des vérifications : `dist/`, tel qu'il sera publié.
 *
 * Les trois scripts de vérification ont besoin de la même chose — servir le paquet
 * construit, avec les bons types de contenu — et en avaient chacun une copie. Un
 * type manquant dans l'une des copies (le modèle de reconnaissance vocale sert en
 * `.gz`) ne se voit qu'au moment où le script concerné tombe, loin de la cause.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const RACINE = new URL('../dist/', import.meta.url).pathname;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.map': 'application/json',
  '.gz': 'application/gzip',
  '.wav': 'audio/wav',
};

/** Lit le corps d'une requête en JSON, ou `null`. */
async function lireJson(requete) {
  const morceaux = [];
  for await (const morceau of requete) morceaux.push(morceau);
  try {
    return JSON.parse(Buffer.concat(morceaux).toString('utf8'));
  } catch {
    return null;
  }
}

/** Passe une requête Node à une fonction au format des fonctions Netlify, et rend sa réponse. */
async function repondreAvec(fonction, requete, reponse, port) {
  const morceaux = [];
  for await (const morceau of requete) morceaux.push(morceau);
  const entetes = new Headers();
  for (const [nom, valeur] of Object.entries(requete.headers)) {
    if (valeur !== undefined) entetes.set(nom, Array.isArray(valeur) ? valeur.join(', ') : valeur);
  }
  const corps = morceaux.length > 0 ? Buffer.concat(morceaux) : undefined;
  const r = await fonction(
    new Request(`http://localhost:${port}${requete.url}`, {
      method: requete.method,
      headers: entetes,
      body: requete.method === 'GET' || requete.method === 'HEAD' ? undefined : corps,
    }),
  );
  const sortie = {};
  r.headers.forEach((valeur, nom) => {
    sortie[nom] = valeur;
  });
  reponse.writeHead(r.status, sortie);
  reponse.end(Buffer.from(await r.arrayBuffer()));
}

/**
 * Ouvre le paquet construit sur ce port, et rend le serveur pour le refermer.
 *
 * @param simulation facultative : `analyser(corps)` rend `{ statut, corps }` et tient
 *   lieu de `POST /api/analyser`, la fonction Netlify (change `analyse-typesafe`).
 *   Sans elle, ce point répond comme la vraie fonction à un appelant sans compte : 401.
 *   `fonctions.compte` et `fonctions.analyser`, quand ils sont donnés, sont les vraies
 *   fonctions (change `comptes-utilisateurs`) : elles répondent à leur place.
 */
export function servir(port, simulation = {}) {
  const serveur = createServer(async (requete, reponse) => {
    const chemin = decodeURIComponent(new URL(requete.url, 'http://x').pathname);
    // Change `comptes-utilisateurs` : les vraies fonctions, quand on les fournit — une
    // `Request` en entrée, une `Response` en sortie, comme chez l'hébergeur.
    const fonction = chemin.startsWith('/api/compte/')
      ? simulation.fonctions?.compte
      : chemin === '/api/analyser'
        ? simulation.fonctions?.analyser
        : undefined;
    if (fonction) {
      await repondreAvec(fonction, requete, reponse, port);
      return;
    }
    if (chemin === '/api/analyser') {
      const { statut, corps } =
        requete.method !== 'POST'
          ? { statut: 405, corps: { motif: 'methode-refusee' } }
          : simulation.analyser
            ? simulation.analyser(await lireJson(requete))
            : { statut: 401, corps: { motif: 'authentification-requise' } };
      reponse.writeHead(statut, { 'content-type': 'application/json; charset=utf-8' });
      reponse.end(JSON.stringify(corps));
      return;
    }
    // Un `..` dans l'adresse ne doit pas sortir de `dist/`.
    const relatif = normalize(chemin === '/' ? '/index.html' : chemin).replace(/^(\.\.[/\\])+/, '');
    try {
      const contenu = await readFile(join(RACINE, relatif));
      reponse.writeHead(200, {
        'content-type': TYPES[extname(relatif)] ?? 'application/octet-stream',
      });
      reponse.end(contenu);
    } catch {
      reponse.writeHead(404).end('introuvable');
    }
  });
  return new Promise((resoudre) => serveur.listen(port, () => resoudre(serveur)));
}
