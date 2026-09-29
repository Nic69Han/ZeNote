/**
 * Plage de silence et rappels critiques — change `rappels-silence-critique`.
 *
 * Tâches 1.3 (l'entrée du cœur appelée depuis le JS vendu) et 2.1 (les plages
 * concrètes calculées autour d'un instant, et passées au cœur par le service).
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { rappelsObjets, type ElementJson } from '../src/core/regles.ts';
import { enSilence, plagesSilence, rappelsDuPointDeRupture } from '../src/services/rappels.ts';
import { ecrireReglage, lireReglages, toutEffacer } from '../src/stockage/depot.ts';

const NUIT = { debut: '22:00', fin: '07:00' };

function plan(id: string, texte: string, ajout: Partial<ElementJson> = {}): ElementJson {
  return {
    id,
    captureId: 'c-1',
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    planDeclencheur: 'quand je reprends',
    planAction: texte,
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
    ...ajout,
  };
}

const suivis = (...ids: string[]) => ids.map((elementId) => ({ elementId, planPoseLe: '2026-09-21T08:00', foisIgnore: 0 }));

describe('plages concrètes', () => {
  it('une plage qui passe minuit : celle de la veille et celle du jour', () => {
    expect(plagesSilence(NUIT, '2026-09-22T03:00')).toEqual([
      { debut: '2026-09-21T22:00', fin: '2026-09-22T07:00' },
      { debut: '2026-09-22T22:00', fin: '2026-09-23T07:00' },
    ]);
    expect(enSilence(NUIT, '2026-09-22T03:00')).toBe(true);
    expect(enSilence(NUIT, '2026-09-22T23:30')).toBe(true);
    expect(enSilence(NUIT, '2026-09-22T07:00')).toBe(false);
    expect(enSilence(NUIT, '2026-09-22T12:00')).toBe(false);
  });

  it('une plage dans la journée, et le passage d’un mois à l’autre', () => {
    expect(plagesSilence({ debut: '12:30', fin: '14:00' }, '2026-09-22T13:00')).toEqual([
      { debut: '2026-09-22T12:30', fin: '2026-09-22T14:00' },
    ]);
    expect(plagesSilence(NUIT, '2026-09-30T23:00')[1]).toEqual({ debut: '2026-09-30T22:00', fin: '2026-10-01T07:00' });
  });

  it('scénario « Plage éteinte » : aucune plage, ni pour un début égal à la fin', () => {
    expect(plagesSilence(null, '2026-09-22T03:00')).toEqual([]);
    expect(plagesSilence({ debut: '08:00', fin: '08:00' }, '2026-09-22T08:00')).toEqual([]);
  });
});

describe('le cœur, depuis le JS vendu', () => {
  it('retient la nuit et laisse passer le critique', () => {
    const elements = [plan('livre', 'Rendre le livre'), plan('four', 'Couper le four', { critique: true })];
    const r = rappelsObjets(elements, '2026-09-21T23:30', suivis('livre', 'four'), [], plagesSilence(NUIT, '2026-09-21T23:30'));
    expect(r.rappels.map((x) => [x.elementId, x.critique])).toEqual([['four', true]]);
    expect(r.retenus).toBe(1);
    expect(r.silenceJusqua).toBe('2026-09-22T07:00');
  });

  it('sans plage ni agenda, la sortie de toujours', () => {
    const r = rappelsObjets([plan('livre', 'Rendre le livre')], '2026-09-21T23:30', suivis('livre'));
    expect(r.rappels.map((x) => x.elementId)).toEqual(['livre']);
    expect(r.rappels[0].critique).toBe(false);
  });
});

describe('le réglage, lu par le service', () => {
  beforeEach(async () => {
    await toutEffacer();
  });

  it('éteint par défaut, et retenu une fois posé', async () => {
    expect((await lireReglages()).silence).toBeNull();
    await ecrireReglage('silence', NUIT);
    expect((await lireReglages()).silence).toEqual(NUIT);
    // Aucun élément : rien à présenter, mais l'appel passe bien par les plages.
    const r = await rappelsDuPointDeRupture('2026-09-21T23:30');
    expect(r.rappels).toEqual([]);
  });
});
