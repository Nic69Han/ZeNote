/**
 * Le script d'évaluation, sur dix étiquettes de synthèse et un service simulé.
 *
 * Change `analyse-typesafe`, tâches 5.1 et 5.2. Les chiffres attendus sont
 * calculés à la main à partir des réponses simulées ci-dessous : si le script les
 * retrouve, ses calculs sont justes, et le vrai lot pourra lui être confié.
 */

import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import type { ClientTypeSafe, FabriqueChoix, ReponseFournisseur } from '../../netlify/functions/analyser/traitement.ts';
import {
  lireEtiquettes,
  mesurer,
  predireDistant,
  predireLocal,
  rapport,
} from './evaluation-typesafe.mjs';

const etiquettes = lireEtiquettes(
  await readFile(new URL('./fixtures/etiquettes-synthese.tsv', import.meta.url), 'utf8'),
);

const choix: FabriqueChoix = (instructions, criteres) => ({ type: 'choice', instructions, criteria: criteres });

/** Réponses simulées, passage par passage : deux types faux, une sphère fausse. */
const SIMULEES: [string, number, string][] = [
  ['TACHE', 0.95, 'PROFESSIONNEL'],
  ['ATTENTE', 0.9, 'PROFESSIONNEL'],
  ['DECISION', 0.85, 'PROFESSIONNEL'],
  ['TACHE', 0.55, 'PROFESSIONNEL'], // attendu ENGAGEMENT
  ['IDEE', 0.7, 'PROFESSIONNEL'], // attendu PERSONNEL
  ['INFORMATION', 0.8, 'PROFESSIONNEL'],
  ['TACHE', 0.9, 'PERSONNEL'],
  ['DECISION', 0.6, 'INDECIDABLE'], // attendu INFORMATION
  ['ENGAGEMENT', 0.75, 'PROFESSIONNEL'],
  ['TACHE', 0.65, 'INDECIDABLE'],
];

/** Un client qui rend `SIMULEES` en français, et des réponses parfaites en anglais. */
function client(appels: string[]): ClientTypeSafe {
  return {
    systemOne: async ({ questions }) => {
      const anglais = JSON.stringify(questions.type_0.instructions).startsWith('"What');
      appels.push(anglais ? 'en' : 'fr');
      const answers: ReponseFournisseur['answers'] = {};
      const n = Object.keys(questions).length / 2;
      for (let i = 0; i < n; i++) {
        const [type, confiance, sphere] = anglais
          ? [etiquettes[i].type, 0.9, etiquettes[i].sphere]
          : SIMULEES[i];
        answers[`type_${i}`] = { choice: type, confidence: confiance };
        answers[`sphere_${i}`] = { choice: sphere, confidence: 0.8 };
      }
      return { model: 'jev-simulation', usage: { input_tokens: 1, output_tokens: 1 }, answers };
    },
  };
}

describe('lecture des étiquettes', () => {
  it('lit dix passages, en-tête et commentaire ignorés', () => {
    expect(etiquettes).toHaveLength(10);
    expect(etiquettes[0]).toEqual({ passage: 'Appeler le client pour le devis', type: 'TACHE', sphere: 'PROFESSIONNEL' });
  });

  it('refuse une ligne dont une valeur n’est pas reconnue, en disant laquelle', () => {
    expect(() => lireEtiquettes('passage\ttype\tsphère\nAppeler Marc\tRAPPEL\tPERSONNEL')).toThrow(/Ligne 2/);
  });
});

describe('les chiffres de l’analyseur local', () => {
  it('retrouve le type des dix passages, et la sphère de cinq', () => {
    const m = mesurer(etiquettes, predireLocal(etiquettes));
    expect(m.exactitudeType).toBe(1);
    expect(m.exactitudeSphere).toBe(0.5);
  });
});

describe('les chiffres du service, consignes en français', async () => {
  const appels: string[] = [];
  const predictions = await predireDistant(etiquettes, {
    identifier: () => 'evaluation', quota: async () => null,
    creerClient: () => client(appels),
    choix,
    journal: () => {},
  });
  const m = mesurer(etiquettes, predictions);

  it('interroge la fonction réelle, en un lot pour dix passages', () => {
    expect(appels).toEqual(['fr']);
    expect(predictions.every((p) => p.modele === 'jev-simulation')).toBe(true);
  });

  it('compte huit types justes et neuf sphères justes', () => {
    expect(m.exactitudeType).toBe(0.8);
    expect(m.exactitudeSphere).toBe(0.9);
  });

  it('donne précision et rappel par type', () => {
    expect(m.parType.TACHE).toEqual({ precision: 0.75, rappel: 1, attendus: 3 });
    expect(m.parType.ENGAGEMENT).toEqual({ precision: 1, rappel: 0.5, attendus: 2 });
    expect(m.parType.DECISION).toEqual({ precision: 0.5, rappel: 1, attendus: 1 });
    expect(m.parType.INFORMATION).toEqual({ precision: 1, rappel: 0.5, attendus: 2 });
  });

  it('range chaque erreur dans la matrice de confusion', () => {
    expect(m.confusion.ENGAGEMENT).toMatchObject({ ENGAGEMENT: 1, TACHE: 1 });
    expect(m.confusion.INFORMATION).toMatchObject({ INFORMATION: 1, DECISION: 1 });
    const total = Object.values(m.confusion).reduce(
      (s, ligne) => s + Object.values(ligne).reduce((a, b) => a + b, 0),
      0,
    );
    expect(total).toBe(10);
  });

  it('chiffre chaque seuil : précision au-dessus, questions posées en Revue', () => {
    const arrondi = (x: number | null) => (x === null ? null : Math.round(x * 1000) / 1000);
    expect(m.seuils.map((s) => [s.seuil, arrondi(s.precisionAuDessus), arrondi(s.questionsEnRevue)])).toEqual([
      [0.5, 0.8, 0],
      [0.6, 0.889, 0.1],
      [0.7, 1, 0.3],
      [0.8, 1, 0.5],
      [0.9, 1, 0.7],
    ]);
  });
});

describe('la variante anglaise, côte à côte', async () => {
  const appels: string[] = [];
  const deps = { identifier: () => 'evaluation', quota: async () => null, creerClient: () => client(appels), choix, journal: () => {} };
  const fr = mesurer(etiquettes, await predireDistant(etiquettes, { ...deps, langue: 'fr' }));
  const en = mesurer(etiquettes, await predireDistant(etiquettes, { ...deps, langue: 'en' }));
  const texte = rapport({
    local: mesurer(etiquettes, predireLocal(etiquettes)),
    'typesafe (consignes fr)': fr,
    'typesafe (consignes en)': en,
  });

  it('pose bien les consignes en anglais', () => {
    expect(appels).toEqual(['fr', 'en']);
    expect(en.exactitudeType).toBe(1);
  });

  it('met les trois moteurs dans les mêmes tableaux', () => {
    expect(texte).toContain('| Type juste | 100 % | 80 % | 100 % |');
    expect(texte).toContain('| Sphère juste | 50 % | 90 % | 100 % |');
    expect(texte).toContain('## Confusion — typesafe (consignes en)');
    expect(texte).toMatch(/\| 0\.6 \| 89 % \/ 10 % \| 100 % \/ 0 % \|/);
  });

  it('ne cite aucun passage évalué', () => {
    for (const e of etiquettes) expect(texte).not.toContain(e.passage);
  });
});
