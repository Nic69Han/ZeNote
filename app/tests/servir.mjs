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

/** Ouvre le paquet construit sur ce port, et rend le serveur pour le refermer. */
export function servir(port) {
  const serveur = createServer(async (requete, reponse) => {
    const chemin = decodeURIComponent(new URL(requete.url, 'http://x').pathname);
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
