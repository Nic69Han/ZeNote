/**
 * La latence de capture, mesurée à chaque version, avec un seuil qui bloque.
 *
 *   npm run build && node tests/latence.mjs
 *
 * La spec `capture` chiffre la promesse : l'enregistrement démarre en moins de
 * 300 ms après l'action. C'est la seule des trois promesses mesurables qui se
 * dégrade sans bruit — rien ne casse, rien ne s'affiche, le produit devient
 * simplement un peu moins sûr à chaque version, jusqu'au jour où l'on hésite à
 * appuyer. Une mesure qu'on lit dans un rapport ne l'empêche pas ; une mesure qui
 * fait échouer la publication, si. Ce script rend donc un code de sortie.
 *
 * ## Ce qui est mesuré, exactement
 *
 * De l'action physique au démarrage effectif de l'enregistrement :
 *
 *  - **l'action** est relevée par un écouteur en phase de capture, posé avant
 *    l'application : c'est l'instant de l'appui, pas celui où le produit s'en
 *    occupe ;
 *  - **le démarrage effectif** est l'appel à `MediaRecorder.start()`, après quoi
 *    la voix est captée. Ni l'affichage « Enregistrement… », ni la vibration de
 *    début — qui précèdent l'ouverture du micro et flatteraient la mesure.
 *
 * Le 95e centile est retenu, comme la tâche 1.1 le demande : une capture sur vingt
 * qui traîne est une capture qu'on a ratée.
 *
 * ## Pourquoi le chiffre est si bas, et ce qu'il ne dit pas
 *
 * Quelques millisecondes, là où l'on attendrait des dizaines : c'est que
 * l'application ouvre le micro dès que l'écran de capture s'affiche, pas à l'appui.
 * Ce qui reste à payer quand le doigt touche le bouton est la création de
 * l'enregistreur, et rien d'autre. Ce n'est pas un artifice de mesure, c'est la
 * décision qui rend la promesse tenable — mais elle déplace le coût sans le
 * supprimer, et ici le micro simulé rend cette ouverture gratuite. Ce que ce script
 * garde donc, version après version, c'est le travail que le produit s'autorise sur
 * le chemin de l'appui. Le coût de l'appareil lui-même se mesure sur l'appareil,
 * avec la tâche 1.1.
 *
 * ## Ce qui n'est pas mesuré, et pourquoi
 *
 * L'autonomie. Une page web n'a pas accès à la consommation de l'appareil : la
 * seule interface qui s'en approche, `getBattery`, rend un niveau de charge que
 * rien ne rattache à ZeNote plutôt qu'à l'écran resté allumé. Mesurer ça et
 * l'appeler « autonomie » serait pire que ne rien mesurer, parce qu'on y croirait.
 * Cette moitié attend les surfaces natives, avec la tâche 1.1.
 *
 * ## Dégrader volontairement, pour vérifier que le seuil sait échouer
 *
 *   ZENOTE_DEGRADER_CAPTURE=400 node tests/latence.mjs
 *
 * Bloque le fil principal de ce nombre de millisecondes à l'appui, avant que
 * l'application y réponde — exactement la régression que le seuil existe pour
 * attraper : quelque chose qui travaille sur le chemin de capture. La mesure,
 * elle, n'est pas touchée.
 */

import { chromium } from 'playwright';
import { cheminNavigateur } from './navigateur.mjs';
import { servir } from './servir.mjs';

const PORT = 4180;
const SEUIL_MS = 300;
const ESSAIS = 20;
const MAINTIEN_MS = 400;

/** Millisecondes de travail parasite injectées à l'appui, pour éprouver le seuil. */
const DEGRADER_MS = Number(process.env.ZENOTE_DEGRADER_CAPTURE ?? 0);

function centile(valeurs, rang) {
  const triees = [...valeurs].sort((a, b) => a - b);
  // Méthode du plus proche rang : avec vingt mesures, le 95e centile est la 19e.
  const index = Math.ceil((rang / 100) * triees.length) - 1;
  return triees[Math.min(Math.max(index, 0), triees.length - 1)];
}

const serveur = await servir(PORT);
const adresse = `http://localhost:${PORT}`;
console.log(`Latence de capture sur ${adresse} — seuil ${SEUIL_MS} ms au 95e centile`);
if (DEGRADER_MS > 0) console.log(`Chemin de capture volontairement dégradé de ${DEGRADER_MS} ms`);

const navigateur = await chromium.launch({
  executablePath: cheminNavigateur(),
  args: [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--use-fake-device-for-media-stream',
    '--use-fake-ui-for-media-stream',
  ],
});
const contexte = await navigateur.newContext({
  viewport: { width: 420, height: 900 },
  permissions: ['microphone'],
});

await contexte.addInitScript((degraderMs) => {
  window.__latences = [];
  let appui = 0;

  // Posé en phase de capture, et avant tout ce que l'application installera : cet
  // écouteur voit l'appui au moment où il a lieu.
  const relever = () => {
    appui = performance.now();
  };
  window.addEventListener('keydown', relever, { capture: true });
  window.addEventListener('pointerdown', relever, { capture: true });

  if (degraderMs > 0) {
    const bloquer = () => {
      const fin = performance.now() + degraderMs;
      while (performance.now() < fin) {
        /* le fil principal occupé, comme le ferait un vrai travail de trop */
      }
    };
    window.addEventListener('keydown', bloquer, { capture: true });
    window.addEventListener('pointerdown', bloquer, { capture: true });
  }

  const demarrer = MediaRecorder.prototype.start;
  MediaRecorder.prototype.start = function (...args) {
    if (appui > 0) {
      window.__latences.push(performance.now() - appui);
      appui = 0;
    }
    return demarrer.apply(this, args);
  };
}, DEGRADER_MS);

const latences = [];
const page = await contexte.newPage();

// Chaque mesure part d'une application fraîchement ouverte, et l'appui se fait au
// doigt sur le bouton, sans navigation préalable : c'est le scénario que la spec
// chiffre. Mesurer vingt appuis d'affilée donnerait une latence flatteuse — le
// navigateur garde le micro ouvert après la première capture, et le coût qui compte,
// celui du premier appui, ne serait jamais payé qu'une fois puis jeté.
for (let essai = 0; essai < ESSAIS; essai += 1) {
  await page.goto(adresse, { waitUntil: 'networkidle' });
  const bouton = page.locator('.bouton-capture');
  await bouton.waitFor({ state: 'visible' });
  const cadre = await bouton.boundingBox();
  await page.mouse.move(cadre.x + cadre.width / 2, cadre.y + cadre.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(MAINTIEN_MS);
  await page.mouse.up();
  await page.waitForTimeout(700);
  const releve = await page.evaluate(() => window.__latences);
  latences.push(...releve);
}

await page.close();
await contexte.close();
await navigateur.close();
serveur.close();

if (latences.length < ESSAIS) {
  console.error(
    `\nMesure incomplète : ${latences.length} démarrage(s) relevé(s) sur ${ESSAIS} appuis. ` +
      `Le chemin de capture n'a pas répondu — c'est au moins aussi grave qu'un dépassement.`,
  );
  process.exit(1);
}

const p95 = centile(latences, 95);
const median = centile(latences, 50);
const pire = Math.max(...latences);
const arrondi = (v) => `${Math.round(v)} ms`;
console.log(
  `\n${latences.length} mesures — médiane ${arrondi(median)}, ` +
    `95e centile ${arrondi(p95)}, pire ${arrondi(pire)}`,
);

if (p95 > SEUIL_MS) {
  console.error(
    `\nÉCHEC : ${arrondi(p95)} au 95e centile, au-dessus du seuil de ${SEUIL_MS} ms.\n` +
      `La capture est la promesse du produit ; la publication est bloquée.`,
  );
  process.exit(1);
}

console.log(`\nSeuil tenu : ${arrondi(p95)} ≤ ${SEUIL_MS} ms.`);
