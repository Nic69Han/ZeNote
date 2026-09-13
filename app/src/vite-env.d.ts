/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

// Déclarations de types fournies par Vite et par le greffon PWA. Sans cette
// référence, `virtual:pwa-register` — le module virtuel qui enregistre le service
// worker — est inconnu du compilateur TypeScript.

/** Empreinte de construction, injectée par Vite (voir `define` dans vite.config.ts). */
declare const __VERSION_ZENOTE__: string;
