/**
 * Les rappels, vus depuis la surface.
 *
 * Le groupement, l'ordre et le seuil d'escalade appartiennent au cœur, et
 * `EcheancierTest.kt` s'en charge. Ce qui se vérifie ici est ce que la surface en
 * fait : ce qu'elle retient entre deux ouvertures, ce qu'elle compte comme ignoré, et
 * ce que deviennent les trois sorties d'un rappel qui ne passe plus.
 *
 * C'est la moitié qui casse en silence : un compteur d'ignorés qui ne s'écrit pas
 * rendrait l'escalade impossible, et le produit répéterait le même rappel
 * indéfiniment sans que rien ne le signale.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import type { ElementJson } from '../src/core/regles.ts';
import {
  abandonner,
  deleguer,
  marquerIgnores,
  rappelsDuPointDeRupture,
  replanifier,
} from '../src/services/rappels.ts';
import {
  enregistrerElement,
  listerElements,
  majElement,
  toutEffacer,
  type ElementStocke,
} from '../src/stockage/depot.ts';

beforeEach(async () => {
  await toutEffacer();
});

const MATIN = '2026-09-21T09:00';
const SOIR = '2026-09-21T19:00';

/** Un élément accepté avec son plan, tel que la Revue le laisse. */
async function planifie(
  id: string,
  texte: string,
  declencheur: string,
  extra: Partial<ElementStocke> = {},
): Promise<void> {
  await enregistrerElement({
    id,
    captureId: 'c-1',
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    planDeclencheur: declencheur,
    planAction: texte,
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
  } as ElementJson);
  await majElement(id, { planPoseLe: MATIN, ...extra });
}

async function relire(id: string): Promise<ElementStocke> {
  const trouve = (await listerElements()).find((e) => e.id === id);
  if (!trouve) throw new Error(`Élément introuvable : ${id}`);
  return trouve;
}

describe('ce qu’un point de rupture présente', () => {
  it('rend le plan quand son signal est arrivé', async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir');

    const moment = await rappelsDuPointDeRupture(SOIR);

    expect(moment.rappels.map((r) => r.elementId)).toEqual(['e-1']);
    expect(moment.titre).toBe('envoyer le devis');
    expect(moment.rappels[0].declencheur).toBe('ce soir');
  });

  it('ne rend rien tant que le signal n’est pas arrivé', async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir');
    expect((await rappelsDuPointDeRupture('2026-09-21T12:00')).rappels).toEqual([]);
  });

  it('ne rappelle jamais quelque chose de fait', async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir', {
      faitLe: '2026-09-21T10:00:00.000Z',
    });
    // Un rappel pour une chose terminée est la façon la plus sûre de faire
    // désinstaller un produit.
    expect((await rappelsDuPointDeRupture(SOIR)).rappels).toEqual([]);
  });

  it('dit quand le signal n’est pas observable, au lieu de faire comme si', async () => {
    await planifie('e-1', 'rappeler le couvreur', 'quand je vois Karim');

    const [rappel] = (await rappelsDuPointDeRupture(SOIR)).rappels;

    expect(rappel.declencheur).toBe('quand je vois Karim');
    expect(rappel.substitution).toContain('agenda');
  });

  it('groupe tout ce qui arrive au même point de rupture', async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir');
    await planifie('e-2', 'relire le budget', 'au prochain créneau libre');

    const moment = await rappelsDuPointDeRupture(SOIR);

    expect(moment.rappels).toHaveLength(2);
    expect(moment.titre).toBe('2 choses à voir maintenant');
  });

  it('ne rappelle pas un élément sans plan', async () => {
    await enregistrerElement({
      id: 'e-1',
      captureId: 'c-1',
      type: 'TACHE',
      texte: 'une note sans plan',
      debutCar: 0,
      finCar: 18,
      verdict: 'ACCEPTE',
      corrigeParHumain: false,
    } as ElementJson);

    expect((await rappelsDuPointDeRupture(SOIR)).rappels).toEqual([]);
  });
});

describe('écarter un rappel', () => {
  it('compte l’écart, et l’écrit', async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir');

    await marquerIgnores(['e-1']);

    expect((await relire('e-1')).rappelIgnoreFois).toBe(1);
  });

  it('au troisième, le rappel cesse de revenir et passe en escalade', async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir');

    await marquerIgnores(['e-1']);
    await marquerIgnores(['e-1']);
    expect((await rappelsDuPointDeRupture(SOIR)).rappels).toHaveLength(1);

    await marquerIgnores(['e-1']);
    const moment = await rappelsDuPointDeRupture(SOIR);
    expect(moment.rappels).toEqual([]);
    expect(moment.escalades.map((e) => e.elementId)).toEqual(['e-1']);
    expect(moment.escalades[0].options).toEqual(['REPLANIFIER', 'DELEGUER', 'ABANDONNER']);
  });

  it('n’écarte pas ce qui n’existe plus, sans se plaindre', async () => {
    await expect(marquerIgnores(['fantome'])).resolves.toBeUndefined();
  });
});

describe('les trois sorties d’un rappel qui ne passe plus', () => {
  beforeEach(async () => {
    await planifie('e-1', 'envoyer le devis', 'ce soir', { rappelIgnoreFois: 3 });
  });

  it('replanifier repose le plan et rend au rappel une chance neuve', async () => {
    await replanifier('e-1', 'demain matin, au premier créneau');

    const element = await relire('e-1');
    expect(element.planDeclencheur).toBe('demain matin, au premier créneau');
    expect(element.rappelIgnoreFois).toBe(0);
    // Le plan a été reposé maintenant : « demain matin » part de maintenant.
    expect(element.planPoseLe).not.toBe(MATIN);

    // Et il n'est plus escaladé.
    expect((await rappelsDuPointDeRupture(SOIR)).escalades).toEqual([]);
  });

  it('déléguer en fait une attente, que les relances savent déjà suivre', async () => {
    await deleguer('e-1', 'Karim');

    const element = await relire('e-1');
    expect(element.type).toBe('ATTENTE');
    expect(element.interlocuteur).toBe('Karim');
    expect(element.relanceLe).toBeTruthy();
    expect(element.rappelIgnoreFois).toBe(0);
  });

  it('abandonner le sort des rappels, et du reste', async () => {
    await abandonner('e-1');

    const element = await relire('e-1');
    expect(element.faitLe).toBeTruthy();
    expect(element.verdict).toBe('REJETE');
    const moment = await rappelsDuPointDeRupture(SOIR);
    expect(moment.rappels).toEqual([]);
    expect(moment.escalades).toEqual([]);
  });
});
