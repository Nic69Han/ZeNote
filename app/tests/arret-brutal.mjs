/**
 * Tuer l'application en pleine phrase, pour de bon.
 *
 *   npm run build && node tests/arret-brutal.mjs
 *
 * Ce constat vit à part du parcours principal parce qu'il lui faut ce qu'aucun autre
 * ne demande : un navigateur qu'on tue au signal, et un profil sur disque pour que la
 * base survive à sa mort. `Page.crash` ne convient pas — il emporte tout le
 * navigateur et ne rend jamais la main ; fermer l'onglet non plus — c'est une
 * fermeture propre, que le produit sait déjà gérer.
 *
 * Ici le processus reçoit un SIGKILL pendant qu'on parle : ni `pagehide`, ni arrêt du
 * `MediaRecorder`, ni nettoyage. Exactement une batterie à plat.
 */
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { cheminNavigateur } from './navigateur.mjs';
import { servir } from './servir.mjs';

const PORT = 4179;
const serveur = await servir(PORT);

const constats = [];
function verifier(intitule, condition, detail = '') {
  constats.push({ intitule, ok: Boolean(condition), detail });
  console.log(`${condition ? '  ok  ' : ' ÉCHEC'} ${intitule}${detail ? ` — ${detail}` : ''}`);
}

/** Un profil sur disque : c'est lui qui fait survivre IndexedDB à la mort du processus. */
const profil = await mkdtemp(join(tmpdir(), 'zenote-profil-'));
const ARGS = [
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--use-fake-device-for-media-stream',
  '--use-fake-ui-for-media-stream',
];

function lancer() {
  return chromium.launchPersistentContext(profil, {
    executablePath: cheminNavigateur(),
    args: ARGS,
    permissions: ['microphone'],
  });
}

/**
 * Tue le navigateur au signal.
 *
 * Playwright n'expose pas le processus d'un contexte persistant. Le chemin du profil,
 * lui, ne désigne que celui-ci : il suffit à le retrouver, et c'est plus honnête
 * qu'une fermeture propre déguisée en plantage.
 */
function tuerLeNavigateur() {
  try {
    // Le motif ne commence pas par un tiret : `pkill` le prendrait pour une option.
    execFileSync('pkill', ['-9', '-f', `user-data-dir=${profil}`]);
    return true;
  } catch {
    return false;
  }
}

/**
 * Retire les verrous que le processus tué n'a pas eu le temps de rendre.
 *
 * Chromium refuse de rouvrir un profil dont le verrou traîne. Un vrai redémarrage
 * de machine les nettoie ; ici c'est à nous de le faire, et cela ne touche rien
 * d'autre que ces trois fichiers — la base, elle, reste intacte.
 */
async function libererLeProfil() {
  for (const verrou of ['SingletonLock', 'SingletonSocket', 'SingletonCookie']) {
    await rm(join(profil, verrou), { force: true }).catch(() => {});
  }
}

/** Les captures réellement en base, lues sans passer par l'application. */
const captures = (page) =>
  page.evaluate(async () => {
    const base = await new Promise((ok, ko) => {
      const r = indexedDB.open('zenote');
      r.onsuccess = () => ok(r.result);
      r.onerror = () => ko(r.error);
    });
    const lire = (magasin) =>
      new Promise((ok, ko) => {
        const d = base.transaction(magasin, 'readonly').objectStore(magasin).getAll();
        d.onsuccess = () => ok(d.result);
        d.onerror = () => ko(d.error);
      });
    return { captures: await lire('captures'), morceaux: (await lire('morceaux')).length };
  });

console.log(`Arrêt brutal sur http://localhost:${PORT}`);
let navigateur;
try {
  // --- On parle, puis le processus meurt --------------------------------------
  navigateur = await lancer();
  const page = await navigateur.newPage();
  await page.goto(`http://localhost:${PORT}/#capturer`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  const avant = (await captures(page)).captures.length;

  await page.locator('.bouton-capture').focus();
  await page.keyboard.down(' ');
  // Assez longtemps pour que plusieurs morceaux d'une seconde soient écrits.
  await page.waitForTimeout(3500);

  verifier('le navigateur est tué au signal, sans arrêt propre', tuerLeNavigateur());
  await new Promise((ok) => setTimeout(ok, 2000));
  navigateur = undefined;
  await libererLeProfil();

  // --- On rouvre, et rien n'a été perdu ---------------------------------------
  navigateur = await lancer();
  const rescapee = await navigateur.newPage();
  await rescapee.goto(`http://localhost:${PORT}/#capturer`, { waitUntil: 'networkidle' });
  await rescapee.waitForTimeout(3000);

  const apres = await captures(rescapee);
  const recuperee = apres.captures.find((c) => c.incomplete === true);

  verifier(
    'une application tuée en pleine phrase ne perd pas ce qui a été dit',
    apres.captures.length === avant + 1 && Boolean(recuperee),
    `${avant} capture(s) avant, ${apres.captures.length} après`,
  );
  verifier(
    'la portion enregistrée est présente et marquée incomplète',
    Boolean(recuperee) && recuperee.dureeMs > 0 && Boolean(recuperee.audio),
    recuperee ? `${recuperee.dureeMs} ms, incomplete=${recuperee.incomplete}` : 'aucune capture incomplète',
  );
  verifier(
    'les morceaux sont effacés : pas de capture en double au démarrage suivant',
    apres.morceaux === 0,
    `${apres.morceaux} morceau(x) restant(s)`,
  );
} finally {
  await navigateur?.close().catch(() => {});
  serveur.close();
  await rm(profil, { recursive: true, force: true }).catch(() => {});
}

const echecs = constats.filter((c) => !c.ok);
console.log(`\n${constats.length - echecs.length}/${constats.length} vérifications passées`);
process.exit(echecs.length === 0 ? 0 : 1);
