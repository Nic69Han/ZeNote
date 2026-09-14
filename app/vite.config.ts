import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { VitePWA } from 'vite-plugin-pwa';

/** Ce que git donne du commit courant : son empreinte courte et sa date. */
const COMMANDE_COMMIT = 'git log -1 --format=%h\\ %cd --date=format:%Y-%m-%d\\ %H:%M';

/**
 * Le commit servi.
 *
 * Trois sources, dans cet ordre : la variable `VITE_VERSION_ZENOTE` ; le fichier
 * `.version` que `scripts/deployer.sh` dépose à côté de cette configuration ; git.
 *
 * Le fichier existe parce que le déploiement envoie une copie exportée du dépôt,
 * donc sans `.git` : sans lui, la construction chez l'hébergeur ne saurait pas quel
 * commit elle sert. Les trois sources donnent la même chaîne pour un même commit,
 * ce qui est toute la question : deux constructions du même code doivent produire
 * les mêmes octets, sinon vérifier que ce qui est en ligne est bien le paquet
 * qu'on a testé devient impossible.
 */
function empreinte(): string {
  const fourni = process.env.VITE_VERSION_ZENOTE;
  if (fourni) return fourni.trim();
  try {
    return readFileSync(new URL('.version', import.meta.url), 'utf8').trim();
  } catch {
    // Pas de copie exportée : on construit depuis le dépôt lui-même.
  }
  try {
    return execSync(COMMANDE_COMMIT, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return 'développement';
  }
}

/**
 * Application installable, fonctionnant hors ligne.
 *
 * Le service worker précharge la coquille : une fois installée, l'application
 * s'ouvre et capture sans réseau. Les données ne passent jamais par lui — elles
 * vivent dans IndexedDB, sur l'appareil.
 */
export default defineConfig({
  // L'empreinte de la version, affichée dans « Vos données ». Sans elle, impossible
  // de savoir si l'appareil qui rapporte une panne exécute déjà le correctif : une
  // application installée garde sa version en cache jusqu'à la prochaine ouverture.
  //
  // Elle vient du commit, jamais de l'heure de construction. Un horodatage rendrait
  // deux constructions du même code différentes — ce qui interdit de vérifier que ce
  // qui est en ligne est bien le paquet qu'on a testé. Le commit, lui, désigne le
  // code exactement.
  define: {
    __VERSION_ZENOTE__: JSON.stringify(empreinte()),
  },
  build: {
    target: 'es2022',
    sourcemap: true,
    commonjsOptions: {
      // Le cœur Kotlin est publié en CommonJS. Par défaut Rollup ne convertit
      // que `node_modules/` : sans cette ligne, `vendor/zenote-core` n'exposerait
      // pas d'export par défaut et la construction échouerait, alors même que les
      // tests passent (Vite est plus permissif en développement).
      include: [/vendor\/zenote-core/, /node_modules/],
    },
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icone.svg', 'icone-192.png', 'icone-512.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        navigateFallback: 'index.html',
      },
      manifest: {
        name: 'ZeNote',
        short_name: 'ZeNote',
        description:
          'Capturer en un geste, ranger une fois par jour, savoir quoi faire maintenant.',
        lang: 'fr',
        dir: 'ltr',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#16181a',
        theme_color: '#16181a',
        categories: ['productivity'],
        icons: [
          { src: 'icone-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icone-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icone-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        shortcuts: [
          { name: 'Capturer', url: '/#capturer' },
          { name: 'La Revue', url: '/#revue' },
          { name: 'Maintenant', url: '/#maintenant' },
        ],
      },
    }),
  ],
});
