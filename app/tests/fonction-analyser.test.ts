/**
 * La fonction `POST /api/analyser`, avec un client TypeSafe simulé.
 *
 * Spec `analyse-distante` — « Passages multiples, une requête », « Service non
 * configuré ». La fonction vit hors de l'application (`netlify/functions/`) ; son
 * comportement est vérifié ici, sans le SDK ni le réseau.
 */

import { describe, expect, it, vi } from 'vitest';
import {
  CRITERES_SPHERE,
  CRITERES_TYPE,
  traiter,
  type ClientTypeSafe,
  type FabriqueChoix,
  type ReponseFournisseur,
} from '../../netlify/functions/analyser/traitement.ts';

const PASSAGES = [
  'Rappeler le carreleur pour le devis',
  'Promis à Claire de lui envoyer le planning',
  'Prendre rendez-vous chez le dentiste pour Léa',
];

const choix: FabriqueChoix = (instructions, criteres) => ({ type: 'choice', instructions, criteria: criteres });

function requete(corps: unknown, methode = 'POST'): Request {
  return new Request('https://zenote.example/api/analyser', {
    method: methode,
    headers: { 'Content-Type': 'application/json' },
    body: methode === 'POST' ? JSON.stringify(corps) : undefined,
  });
}

/** Un fournisseur qui répond à toutes les questions reçues, et note chaque appel. */
function fournisseur(
  reponses: ReponseFournisseur['answers'] | ((questions: string[]) => ReponseFournisseur['answers']),
) {
  const appels: { state: unknown; questions: Record<string, unknown> }[] = [];
  const client: ClientTypeSafe = {
    systemOne: async (req) => {
      appels.push(req);
      const answers = typeof reponses === 'function' ? reponses(Object.keys(req.questions)) : reponses;
      return { model: 'jev-1.13', usage: { input_tokens: 420, output_tokens: 12 }, answers };
    },
  };
  return { client, appels };
}

function toutRepondre(questions: string[]): ReponseFournisseur['answers'] {
  return Object.fromEntries(
    questions.map((q) => [
      q,
      q.startsWith('type_')
        ? { choice: ['TACHE', 'ENGAGEMENT', 'TACHE'][Number(q.slice(5))], confidence: 0.9 }
        : { choice: ['PROFESSIONNEL', 'PROFESSIONNEL', 'PERSONNEL'][Number(q.slice(7))], confidence: 0.8 },
    ]),
  );
}

function dependances(client: ClientTypeSafe | null) {
  const lignes: Record<string, string | number>[] = [];
  return {
    lignes,
    deps: { creerClient: () => client, choix, journal: (l: Record<string, string | number>) => lignes.push(l) },
  };
}

describe('une capture, une requête', () => {
  it('interroge le fournisseur une seule fois pour trois passages, et rend trois réponses', async () => {
    const { client, appels } = fournisseur(toutRepondre);
    const { deps } = dependances(client);

    const reponse = await traiter(requete({ passages: PASSAGES }), deps);

    expect(reponse.status).toBe(200);
    expect(appels).toHaveLength(1);
    expect(Object.keys(appels[0].questions).sort()).toEqual(
      ['sphere_0', 'sphere_1', 'sphere_2', 'type_0', 'type_1', 'type_2'],
    );
    expect(await reponse.json()).toEqual({
      modele: 'jev-1.13',
      reponses: [
        { type: 'TACHE', typeConfiance: 0.9, sphere: 'PROFESSIONNEL', sphereConfiance: 0.8 },
        { type: 'ENGAGEMENT', typeConfiance: 0.9, sphere: 'PROFESSIONNEL', sphereConfiance: 0.8 },
        { type: 'TACHE', typeConfiance: 0.9, sphere: 'PERSONNEL', sphereConfiance: 0.8 },
      ],
    });
  });

  it('désigne chaque passage par son chemin dans l’état, sans le recopier dans la question', async () => {
    const { client, appels } = fournisseur(toutRepondre);
    await traiter(requete({ passages: PASSAGES }), dependances(client).deps);

    expect(appels[0].state).toMatchObject({ passages: PASSAGES });
    const questions = JSON.stringify(appels[0].questions);
    for (const p of PASSAGES) expect(questions).not.toContain(p);
    expect(questions).toContain('`passages[2]`');
  });

  it('pose les six types et les trois sphères, INDECIDABLE compris', async () => {
    const { client, appels } = fournisseur(toutRepondre);
    await traiter(requete({ passages: PASSAGES.slice(0, 1) }), dependances(client).deps);

    const q = appels[0].questions as Record<string, { criteria: Record<string, string> }>;
    expect(Object.keys(q.type_0.criteria)).toEqual(Object.keys(CRITERES_TYPE));
    expect(Object.keys(q.sphere_0.criteria)).toEqual(Object.keys(CRITERES_SPHERE));
    expect(q.sphere_0.criteria).toHaveProperty('INDECIDABLE');
  });
});

describe('sans clé', () => {
  it('répond 503 non-configure, sans rien demander à personne', async () => {
    const creerClient = vi.fn(() => null);
    const reponse = await traiter(requete({ passages: PASSAGES }), {
      creerClient,
      choix,
      journal: () => {},
    });
    expect(reponse.status).toBe(503);
    expect(await reponse.json()).toEqual({ motif: 'non-configure' });
  });
});

describe('ce que la fonction refuse', () => {
  it.each([
    ['un corps sans passages', {}],
    ['une liste vide', { passages: [] }],
    ['un passage qui n’est pas du texte', { passages: ['ok', 3] }],
    ['un passage vide', { passages: ['  '] }],
    ['un champ de plus que les passages', { passages: ['ok'], captureId: 'cap-1' }],
    ['une date glissée à côté', { passages: ['ok'], creeLe: '2026-09-12T08:00:00Z' }],
  ])('refuse %s', async (_nom, corps) => {
    const { client, appels } = fournisseur(toutRepondre);
    const reponse = await traiter(requete(corps), dependances(client).deps);
    expect(reponse.status).toBe(400);
    expect(appels).toHaveLength(0);
  });

  it('refuse toute autre méthode que POST', async () => {
    const { client } = fournisseur(toutRepondre);
    expect((await traiter(requete(null, 'GET'), dependances(client).deps)).status).toBe(405);
  });

  it('rejette en entier une réponse qui oublie un passage', async () => {
    const { client } = fournisseur((qs) => {
      const r = toutRepondre(qs);
      delete r.sphere_1;
      return r;
    });
    const reponse = await traiter(requete({ passages: PASSAGES }), dependances(client).deps);
    expect(reponse.status).toBe(502);
    expect(await reponse.json()).toEqual({ motif: 'reponse-incomplete' });
  });

  it('rejette en entier une réponse hors des listes attendues', async () => {
    const { client } = fournisseur((qs) => ({ ...toutRepondre(qs), type_0: { choice: 'RAPPEL', confidence: 0.9 } }));
    const reponse = await traiter(requete({ passages: PASSAGES }), dependances(client).deps);
    expect(reponse.status).toBe(502);
  });

  it('répond 502 quand le fournisseur échoue', async () => {
    const client: ClientTypeSafe = {
      systemOne: async () => {
        throw new Error('timeout');
      },
    };
    const reponse = await traiter(requete({ passages: PASSAGES }), dependances(client).deps);
    expect(reponse.status).toBe(502);
    expect(await reponse.json()).toEqual({ motif: 'fournisseur-indisponible' });
  });
});

describe('le journal', () => {
  it('compte les jetons et ne cite jamais un passage', async () => {
    const { client } = fournisseur(toutRepondre);
    const { deps, lignes } = dependances(client);
    await traiter(requete({ passages: PASSAGES }), deps);

    expect(lignes).toContainEqual(
      expect.objectContaining({ evenement: 'analyse', passages: 3, jetonsEntree: 420, jetonsSortie: 12 }),
    );
    const journal = JSON.stringify(lignes);
    for (const p of PASSAGES) expect(journal).not.toContain(p);
  });

  it('ne recopie pas le message d’une erreur, qui pourrait citer la requête', async () => {
    const client: ClientTypeSafe = {
      systemOne: async () => {
        throw new Error(`requête refusée : ${PASSAGES[2]}`);
      },
    };
    const { deps, lignes } = dependances(client);
    await traiter(requete({ passages: PASSAGES }), deps);

    expect(lignes).toContainEqual(expect.objectContaining({ evenement: 'analyse-echouee', erreur: 'Error' }));
    expect(JSON.stringify(lignes)).not.toContain('dentiste');
  });
});
