/**
 * Fusionner deux fiches de « Les gens » — change `fusion-personnes`, tâche 1.1.
 *
 * Spec `memoire` — « Fusion de doublons », et l'exigence ajoutée par la change :
 * réunies, annulables, tenues à la ré-analyse, jamais en clair.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { fiches } from '../src/core/regles.ts';
import { activerChiffrement } from '../src/securite/activation.ts';
import { chargerCoffre, reinitialiserCoffre } from '../src/securite/coffre.ts';
import { analyserCapture, capturer } from '../src/services/pipeline.ts';
import { fusionner, nomsFusionnes, separer } from '../src/services/personnes.ts';
import { MAGASIN_ELEMENTS, demander, transaction } from '../src/stockage/base.ts';
import { elementsDeCapture, listerCaptures, listerElements, majElement, toutEffacer } from '../src/stockage/depot.ts';

const JOUR = '2026-09-26';

async function note(texte: string, qui: string): Promise<string> {
  const c = await capturer({ texte, source: 'ECRITE', etatTranscription: 'OK', agenda: null });
  await analyserCapture(c, JOUR);
  const [e] = await elementsDeCapture(c.id);
  await majElement(e.id, { interlocuteur: qui });
  return c.id;
}

async function lesFiches() {
  const captures = await listerCaptures();
  return fiches(
    captures.map((c) => ({ id: c.id, texte: c.texte, creeLe: c.creeLe })),
    await listerElements(),
  );
}

beforeEach(async () => {
  reinitialiserCoffre();
  await toutEffacer();
  await chargerCoffre();
});

describe('fusion de fiches', () => {
  it('scénario « Deux fiches réunies »', async () => {
    await note('Envoyer le devis à Marc.', 'Marc');
    await note('Rappeler Marc Dupont pour le budget.', 'Marc Dupont');
    expect((await lesFiches()).map((f) => f.nom).sort()).toEqual(['Marc', 'Marc Dupont']);

    expect(await fusionner('Marc', 'Marc Dupont')).toBe(1);
    const apres = await lesFiches();
    expect(apres.map((f) => f.nom)).toEqual(['Marc Dupont']);
    expect(apres[0].ouverts.map((l) => l.texte).sort()).toEqual(
      expect.arrayContaining([expect.stringMatching(/devis/), expect.stringMatching(/budget/)]),
    );
    expect(await nomsFusionnes('Marc Dupont')).toEqual(['Marc']);
  });

  it('scénario « Fusion annulée » — seul ce que la fusion a changé revient', async () => {
    await note('Envoyer le devis à Marc.', 'Marc');
    await note('Rappeler Marc Dupont pour le budget.', 'Marc Dupont');
    await fusionner('Marc', 'Marc Dupont');

    expect(await separer('Marc Dupont', 'Marc')).toBe(1);
    const noms = (await listerElements()).map((e) => [e.interlocuteur, e.interlocuteurAvantFusion ?? null]);
    expect(noms).toHaveLength(2);
    expect(noms).toEqual(expect.arrayContaining([['Marc', null], ['Marc Dupont', null]]));
    expect((await lesFiches()).map((f) => f.nom).sort()).toEqual(['Marc', 'Marc Dupont']);
    expect(await nomsFusionnes('Marc Dupont')).toEqual([]);
  });

  it('casse et accents : la fiche « andré » et l’élément « André » ne font qu’un', async () => {
    await note('Relancer André pour la facture.', 'André');
    await note('Voir Andre Morel demain.', 'André Morel');
    expect(await fusionner('andre', 'André Morel')).toBe(1);
    expect((await lesFiches()).map((f) => f.nom)).toEqual(['André Morel']);
  });

  it('scénario « Fusion tenue à la ré-analyse »', async () => {
    const id = await note('Envoyer le devis à Marc.', 'Marc');
    await note('Rappeler Marc Dupont pour le budget.', 'Marc Dupont');
    await fusionner('Marc', 'Marc Dupont');

    const capture = (await listerCaptures()).find((c) => c.id === id)!;
    await analyserCapture({ ...capture, analysee: false }, JOUR);
    const elements = await elementsDeCapture(id);
    expect(elements.some((e) => e.interlocuteur === 'Marc Dupont' && e.corrigeParHumain)).toBe(true);
    expect((await lesFiches()).map((f) => f.nom)).toEqual(['Marc Dupont']);
  });

  it('scénario « Fusion protégée par le coffre » — aucun des deux noms en clair', async () => {
    await note('Envoyer le devis à Marc.', 'Marcelin');
    await note('Rappeler Marc Dupont pour le budget.', 'Marcelin Dupontel');
    await activerChiffrement('PHRASE', 'un cheval traverse le jardin sans bruit');
    await fusionner('Marcelin', 'Marcelin Dupontel');

    const brut = JSON.stringify(
      await transaction([MAGASIN_ELEMENTS], 'readonly', ([m]) => demander<unknown[]>(m.getAll())),
      (_c, v: unknown) => (ArrayBuffer.isView(v) ? new TextDecoder().decode(v.buffer as ArrayBuffer) : v instanceof ArrayBuffer ? new TextDecoder().decode(v) : v),
    );
    expect(brut).not.toMatch(/Marcelin/);
    expect((await lesFiches()).map((f) => f.nom)).toEqual(['Marcelin Dupontel']);
  });
});
