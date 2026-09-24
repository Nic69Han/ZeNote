/**
 * L'évaluation de l'analyse distante contre l'analyse locale, sur un étiquetage humain.
 *
 * Change `analyse-typesafe`, décision 7 et tâches 5.1–5.2. Le code évalué est le
 * code réel : `analyser()` pour l'appareil, la fonction `/api/analyser` (son
 * `traiter`, avec le vrai SDK) pour le service. Rien n'est réimplémenté ici.
 *
 *   TYPESAFE_API_KEY=… node tests/evaluation-typesafe.mjs etiquettes.local.tsv
 *
 * Le fichier d'étiquettes est local et **jamais versionné** : il contient des
 * passages de vraies notes. Nommé `*.local.tsv`, Git l'ignore. Une ligne par
 * passage, séparée par des tabulations :
 *
 *   passage <TAB> type attendu <TAB> sphère attendue
 *
 * type : TACHE, ENGAGEMENT, ATTENTE, INFORMATION, DECISION ou IDEE ;
 * sphère : PROFESSIONNEL, PERSONNEL ou INDECIDABLE. Une première ligne d'en-tête
 * commençant par « passage » est ignorée, comme les lignes vides et celles qui
 * commencent par « # ».
 *
 * Sans clé, seul l'analyseur local est mesuré. Le rapport ne cite aucun passage :
 * il peut être consigné tel quel dans `evaluation.md`.
 */

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { analyser } from '../src/analyse/index.ts';
import { traiter } from '../../netlify/functions/analyser/traitement.ts';

export const TYPES = ['TACHE', 'ENGAGEMENT', 'ATTENTE', 'INFORMATION', 'DECISION', 'IDEE'];
export const SPHERES = ['PROFESSIONNEL', 'PERSONNEL', 'INDECIDABLE'];
export const SEUILS = [0.5, 0.6, 0.7, 0.8, 0.9];
/** Autant de passages par requête qu'une capture ordinaire en porte, pas plus. */
const PAR_REQUETE = 10;
const JOUR = '2026-01-15';

// ---------------------------------------------------------------- lecture

/** Les étiquettes du fichier, ou une erreur qui dit quelle ligne est fautive. */
export function lireEtiquettes(texte) {
  const etiquettes = [];
  texte.split(/\r?\n/).forEach((ligne, i) => {
    if (ligne.trim() === '' || ligne.startsWith('#') || (i === 0 && /^passage\t/i.test(ligne))) return;
    const [passage, type, sphere] = ligne.split('\t').map((c) => c?.trim());
    if (!passage || !TYPES.includes(type) || !SPHERES.includes(sphere)) {
      throw new Error(`Ligne ${i + 1} : attendu « passage <TAB> type <TAB> sphère », valeurs reconnues seulement.`);
    }
    etiquettes.push({ passage, type, sphere });
  });
  return etiquettes;
}

// ---------------------------------------------------------------- prédictions

/**
 * Ce que l'appareil en dit, par `analyser()`. Un passage que l'analyse redécoupe
 * est jugé sur son premier élément ; un passage dont elle ne tire rien compte comme
 * une erreur (type `AUCUN`), pas comme une abstention.
 */
export function predireLocal(etiquettes) {
  return etiquettes.map(({ passage }) => {
    const [premier] = analyser(passage, 'evaluation', JOUR).elements;
    if (!premier) return { type: 'AUCUN', typeConfiance: 0, sphere: 'INDECIDABLE' };
    return {
      type: premier.type,
      typeConfiance: premier.typeConfiance ?? 0,
      sphere: premier.sphere ?? 'INDECIDABLE',
    };
  });
}

/**
 * Ce que le service en dit, par la fonction elle-même : même requête, même
 * validation que depuis l'appareil. Un lot rejeté compte ses passages en `AUCUN`.
 *
 * @param dependances celles de `traiter` (client, `choix`, journal), et la langue
 * @param delais reçoit la durée de chaque requête, en millisecondes
 */
export async function predireDistant(etiquettes, dependances, delais = []) {
  const predictions = [];
  for (let debut = 0; debut < etiquettes.length; debut += PAR_REQUETE) {
    const lot = etiquettes.slice(debut, debut + PAR_REQUETE);
    const depart = Date.now();
    const reponse = await traiter(
      new Request('https://evaluation.local/api/analyser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passages: lot.map((e) => e.passage) }),
      }),
      dependances,
    );
    delais.push(Date.now() - depart);
    if (reponse.status !== 200) {
      for (const _ of lot) predictions.push({ type: 'AUCUN', typeConfiance: 0, sphere: 'INDECIDABLE' });
      continue;
    }
    const { modele, reponses } = await reponse.json();
    for (const r of reponses) predictions.push({ ...r, modele });
  }
  return predictions;
}

// ---------------------------------------------------------------- mesures

function part(n, total) {
  return total === 0 ? null : n / total;
}

/**
 * Les chiffres d'un moteur : exactitude du type et de la sphère, précision et
 * rappel par type, matrice de confusion, et — pour un moteur à confiance
 * calibrée — ce que chaque seuil coûte en questions et rapporte en précision.
 */
export function mesurer(etiquettes, predictions) {
  const n = etiquettes.length;
  const justes = etiquettes.filter((e, i) => predictions[i].type === e.type).length;
  const spheresJustes = etiquettes.filter((e, i) => predictions[i].sphere === e.sphere).length;

  const colonnes = [...TYPES, 'AUCUN'];
  const confusion = Object.fromEntries(TYPES.map((t) => [t, Object.fromEntries(colonnes.map((c) => [c, 0]))]));
  etiquettes.forEach((e, i) => {
    confusion[e.type][predictions[i].type] += 1;
  });

  const parType = Object.fromEntries(
    TYPES.map((t) => {
      const predits = predictions.filter((p) => p.type === t).length;
      const attendus = etiquettes.filter((e) => e.type === t).length;
      const vrais = confusion[t][t];
      return [t, { precision: part(vrais, predits), rappel: part(vrais, attendus), attendus }];
    }),
  );

  const seuils = SEUILS.map((seuil) => {
    const sures = etiquettes
      .map((e, i) => ({ e, p: predictions[i] }))
      .filter(({ p }) => p.typeConfiance >= seuil);
    return {
      seuil,
      precisionAuDessus: part(sures.filter(({ e, p }) => p.type === e.type).length, sures.length),
      questionsEnRevue: part(n - sures.length, n),
    };
  });

  return { passages: n, exactitudeType: part(justes, n), exactitudeSphere: part(spheresJustes, n), parType, confusion, seuils };
}

// ---------------------------------------------------------------- rapport

function pourcent(x) {
  return x === null ? '—' : `${Math.round(x * 100)} %`;
}

function tableau(entetes, lignes) {
  const lignesTexte = [entetes, entetes.map(() => '---'), ...lignes].map((l) => `| ${l.join(' | ')} |`);
  return lignesTexte.join('\n');
}

/**
 * Le rapport, en Markdown, moteurs côte à côte. Il ne contient que des nombres et
 * des noms de types : pas un mot des notes évaluées.
 *
 * @param moteurs `{ nom: mesures }`, dans l'ordre d'affichage
 */
export function rapport(moteurs) {
  const noms = Object.keys(moteurs);
  const m = Object.values(moteurs);
  const parties = [
    `## Vue d'ensemble (${m[0].passages} passages)`,
    tableau(
      ['', ...noms],
      [
        ['Type juste', ...m.map((x) => pourcent(x.exactitudeType))],
        ['Sphère juste', ...m.map((x) => pourcent(x.exactitudeSphere))],
      ],
    ),
    '## Par type (précision / rappel)',
    tableau(
      ['Type', 'Attendus', ...noms],
      TYPES.map((t) => [
        t,
        String(m[0].parType[t].attendus),
        ...m.map((x) => `${pourcent(x.parType[t].precision)} / ${pourcent(x.parType[t].rappel)}`),
      ]),
    ),
  ];
  for (const nom of noms) {
    const x = moteurs[nom];
    parties.push(
      `## Confusion — ${nom} (lignes : attendu ; colonnes : rendu)`,
      tableau(
        ['', ...TYPES, 'AUCUN'],
        TYPES.map((t) => [t, ...[...TYPES, 'AUCUN'].map((c) => String(x.confusion[t][c]))]),
      ),
    );
  }
  const distants = noms.filter((nom) => nom !== 'local');
  if (distants.length > 0) {
    parties.push(
      '## Seuil de confirmation du type (précision au-dessus du seuil / questions en Revue)',
      tableau(
        ['Seuil', ...distants],
        SEUILS.map((s, i) => [
          s.toFixed(1),
          ...distants.map((nom) => {
            const ligne = moteurs[nom].seuils[i];
            return `${pourcent(ligne.precisionAuDessus)} / ${pourcent(ligne.questionsEnRevue)}`;
          }),
        ]),
      ),
    );
  }
  return `${parties.join('\n\n')}\n`;
}

// ---------------------------------------------------------------- lancement

async function clientReel() {
  // Le SDK n'est dépendance que des fonctions : on le prend là où il est installé.
  const sdk = await import('../../netlify/node_modules/@typesafe-ai/sdk/dist/index.mjs');
  const silencieux = { debug() {}, info() {}, warn() {}, error() {} };
  return {
    client: new sdk.TypeSafeClient({ logger: silencieux, timeout: 30_000 }),
    choix: sdk.choice,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const chemin = process.argv[2];
  if (!chemin) {
    console.error('Usage : node tests/evaluation-typesafe.mjs etiquettes.tsv');
    process.exit(2);
  }
  const etiquettes = lireEtiquettes(await readFile(chemin, 'utf8'));
  const moteurs = { local: mesurer(etiquettes, predireLocal(etiquettes)) };

  if (process.env.TYPESAFE_API_KEY?.trim()) {
    const { client, choix } = await clientReel();
    const delais = [];
    let modele = '';
    for (const langue of ['fr', 'en']) {
      const predictions = await predireDistant(
        etiquettes,
        { creerClient: () => client, choix, journal: () => {}, langue },
        delais,
      );
      modele ||= predictions.find((p) => p.modele)?.modele ?? '';
      moteurs[`typesafe (consignes ${langue})`] = mesurer(etiquettes, predictions);
    }
    const tries = [...delais].sort((a, b) => a - b);
    const mediane = tries[Math.floor(tries.length / 2)];
    process.stdout.write(rapport(moteurs));
    process.stdout.write(
      `\n## Service\n\nModèle : ${modele || 'inconnu'}. Délai par requête de ${PAR_REQUETE} passages au plus : ` +
        `médiane ${mediane} ms, maximum ${tries.at(-1)} ms, sur ${tries.length} requêtes.\n`,
    );
  } else {
    console.error('Pas de TYPESAFE_API_KEY : seul l’analyseur local est mesuré.');
    process.stdout.write(rapport(moteurs));
  }
}
