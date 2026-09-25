/**
 * Le client d'analyse distante : chaque issue, et ce qu'elle réécrit.
 *
 * Spec `analyse-distante` — « Service indisponible », « Hors ligne », « Réponse
 * incohérente écartée ». Seul un succès complet change les éléments.
 */

import { describe, expect, it } from 'vitest';
import {
  POINT_ANALYSE,
  analyserADistance,
  reecrire,
  type IssueAnalyseDistante,
  type JugementPassage,
} from '../src/analyse/distante.ts';
import { analyser } from '../src/analyse/index.ts';

const TEXTE = 'Rappeler le carreleur pour le devis. Prendre rendez-vous chez le dentiste pour Léa.';
const JOUR = '2026-09-12';
const PASSAGES = ['Rappeler le carreleur pour le devis.', 'Prendre rendez-vous chez le dentiste pour Léa.'];

const REPONSE_OK: { modele: string; reponses: JugementPassage[] } = {
  modele: 'jev-1.13',
  reponses: [
    { type: 'TACHE', typeConfiance: 0.92, sphere: 'INDECIDABLE', sphereConfiance: 0.4 },
    { type: 'TACHE', typeConfiance: 0.88, sphere: 'PERSONNEL', sphereConfiance: 0.97 },
  ],
};

function json(statut: number, corps: unknown): Response {
  return new Response(JSON.stringify(corps), { status: statut, headers: { 'Content-Type': 'application/json' } });
}

/** Un `fetch` simulé qui note ce qu'on lui envoie. */
function reseau(repondre: (init: RequestInit) => Promise<Response>) {
  const envois: { url: string; init: RequestInit }[] = [];
  const f = (async (url: RequestInfo | URL, init?: RequestInit) => {
    envois.push({ url: String(url), init: init ?? {} });
    return repondre(init ?? {});
  }) as typeof fetch;
  return { f, envois };
}

const enLigne = () => true;

describe('chaque issue de l’appel', () => {
  it('succès : rend les jugements, et n’a envoyé que les passages à la même origine', async () => {
    const { f, envois } = reseau(async () => json(200, REPONSE_OK));
    const issue = await analyserADistance(PASSAGES, { fetch: f, enLigne });

    expect(issue).toEqual({ issue: 'OK', modele: 'jev-1.13', jugements: REPONSE_OK.reponses });
    expect(envois).toHaveLength(1);
    expect(envois[0].url).toBe(POINT_ANALYSE);
    expect(JSON.parse(String(envois[0].init.body))).toEqual({ passages: PASSAGES });
    expect(envois[0].init.credentials).toBe('omit');
  });

  it('hors ligne : ne tente rien', async () => {
    const { f, envois } = reseau(async () => json(200, REPONSE_OK));
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne: () => false })).toEqual({ issue: 'HORS_LIGNE' });
    expect(envois).toHaveLength(0);
  });

  it('réseau coupé en route : repli', async () => {
    const { f } = reseau(async () => {
      throw new TypeError('Failed to fetch');
    });
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne })).toEqual({ issue: 'HORS_LIGNE' });
  });

  it('délai dépassé : abandonne la requête au terme imparti', async () => {
    const { f } = reseau(
      (init) =>
        new Promise((_, rejeter) => {
          init.signal?.addEventListener('abort', () => rejeter(new DOMException('abandon', 'AbortError')));
        }),
    );
    const debut = Date.now();
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne, delaiMs: 50 })).toEqual({
      issue: 'DELAI_DEPASSE',
    });
    expect(Date.now() - debut).toBeLessThan(1000);
  });

  it('503 : service non configuré', async () => {
    const { f } = reseau(async () => json(503, { motif: 'non-configure' }));
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne })).toEqual({ issue: 'NON_CONFIGURE' });
  });

  it('autre échec : indisponible, avec le statut', async () => {
    const { f } = reseau(async () => json(502, { motif: 'fournisseur-indisponible' }));
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne })).toEqual({ issue: 'INDISPONIBLE', statut: 502 });
  });

  it('réponse incomplète : rejetée en entier', async () => {
    const { f } = reseau(async () => json(200, { ...REPONSE_OK, reponses: REPONSE_OK.reponses.slice(0, 1) }));
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne })).toEqual({ issue: 'REPONSE_INVALIDE' });
  });

  it.each([
    ['un type inconnu', { type: 'RAPPEL' }],
    ['une sphère inconnue', { sphere: 'FAMILLE' }],
    ['une confiance hors de [0, 1]', { typeConfiance: 1.4 }],
    ['une confiance absente', { sphereConfiance: undefined }],
  ])('valeur hors des listes (%s) : rejetée en entier', async (_nom, defaut) => {
    const reponses = [{ ...REPONSE_OK.reponses[0], ...defaut }, REPONSE_OK.reponses[1]];
    const { f } = reseau(async () => json(200, { ...REPONSE_OK, reponses }));
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne })).toEqual({ issue: 'REPONSE_INVALIDE' });
  });

  it('corps illisible : rejeté', async () => {
    const { f } = reseau(async () => new Response('<html>', { status: 200 }));
    expect(await analyserADistance(PASSAGES, { fetch: f, enLigne })).toEqual({ issue: 'REPONSE_INVALIDE' });
  });
});

describe('seul un succès réécrit', () => {
  const locaux = analyser(TEXTE, 'cap-1', JOUR).elements;

  it('succès : type, sphère, confiances et origine changent ; texte et bornes non', () => {
    const issue: IssueAnalyseDistante = { issue: 'OK', modele: 'jev-1.13', jugements: REPONSE_OK.reponses };
    const reecrits = reecrire(locaux, issue);

    expect(reecrits).toHaveLength(locaux.length);
    reecrits.forEach((r, i) => {
      expect(r.origineAnalyse).toEqual({ moteur: 'TYPESAFE', modele: 'jev-1.13' });
      expect(r.typeConfiance).toBe(REPONSE_OK.reponses[i].typeConfiance);
      expect(r.sphereConfiance).toBe(REPONSE_OK.reponses[i].sphereConfiance);
      expect([r.texte, r.debutCar, r.finCar, r.id]).toEqual([
        locaux[i].texte,
        locaux[i].debutCar,
        locaux[i].finCar,
        locaux[i].id,
      ]);
    });
    // INDECIDABLE ne se rattache à aucune sphère.
    expect(reecrits[0].sphere).toBeNull();
    expect(reecrits[1].sphere).toBe('PERSONNEL');
  });

  it.each<IssueAnalyseDistante>([
    { issue: 'HORS_LIGNE' },
    { issue: 'DELAI_DEPASSE' },
    { issue: 'NON_CONFIGURE' },
    { issue: 'INDISPONIBLE', statut: 502 },
    { issue: 'REPONSE_INVALIDE' },
  ])('$issue : les éléments locaux restent tels quels', (issue) => {
    expect(reecrire(locaux, issue)).toEqual(locaux);
  });
});
