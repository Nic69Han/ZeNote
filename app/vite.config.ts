import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * Application installable, fonctionnant hors ligne.
 *
 * Le service worker précharge la coquille : une fois installée, l'application
 * s'ouvre et capture sans réseau. Les données ne passent jamais par lui — elles
 * vivent dans IndexedDB, sur l'appareil.
 */
export default defineConfig({
  // L'empreinte de construction, affichée dans « Vos données ». Sans elle, impossible
  // de savoir si l'appareil qui rapporte une panne exécute déjà le correctif : une
  // application installée garde sa version en cache jusqu'à la prochaine ouverture.
  define: {
    __VERSION_ZENOTE__: JSON.stringify(
      new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC',
    ),
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
