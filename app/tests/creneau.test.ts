/**
 * Le créneau protégé, vu depuis la surface.
 *
 * La règle de sélection appartient au cœur, et `CreneauProtegeTest` s'en charge. Ce
 * qui se vérifie ici est ce qui l'entoure : l'heure qui ouvre le créneau, et le
 * compte des renoncements — deux choses simples dont l'erreur ne se verrait pas.
 *
 * Un créneau qui s'ouvre toute la journée ne protège plus rien, et un renoncement
 * compté deux fois le même jour ferait signaler en Revue un problème qui n'existe
 * pas. Dans les deux cas le produit paraîtrait fonctionner.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { creneauProtege, signalCreneau, type ElementJson } from '../src/core/regles.ts';
import {
  ecrireReglage,
  lireReglages,
  toutEffacer,
  REGLAGES_PAR_DEFAUT,
} from '../src/stockage/depot.ts';

const JOUR = '2026-09-22';

beforeEach(async () => {
  await toutEffacer();
});

function element(id: string, extra: Partial<ElementJson> = {}): ElementJson {
  const texte = 'préparer la reprise du dossier';
  return {
    id,
    captureId: 'c-1',
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    poids: 'FORT',
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
    ...extra,
  };
}

describe('ce que le créneau retient', () => {
  it('un élément lourd sans échéance', () => {
    expect(creneauProtege([element('e-1')], JOUR)).toBe('e-1');
  });

  it('jamais un urgent de poids faible, même s’il tombe aujourd’hui', () => {
    const urgent = element('e-1', { poids: 'FAIBLE', echeance: JOUR });
    const important = element('e-2');
    expect(creneauProtege([urgent, important], JOUR)).toBe('e-2');
  });

  it('rien, quand rien ne le mérite', () => {
    // Le remplir avec ce qui traîne le viderait de son sens en une semaine.
    expect(creneauProtege([element('e-1', { poids: 'MOYEN' })], JOUR)).toBeNull();
    expect(creneauProtege([], JOUR)).toBeNull();
  });
});

describe('le signal de renoncement', () => {
  it('ne dit rien avant la troisième fois', () => {
    expect(signalCreneau(0)).toBeNull();
    expect(signalCreneau(2)).toBeNull();
  });

  it('à la troisième, met en cause le créneau et non la personne', () => {
    const phrase = signalCreneau(3);
    expect(phrase).toBeTruthy();
    expect(phrase).toContain('pas au bon moment');
    for (const reproche of ['vous avez', 'auriez', 'devriez']) {
      expect(phrase!.toLowerCase()).not.toContain(reproche);
    }
  });
});

describe('le réglage', () => {
  it('le créneau est ouvert par défaut, à une heure raisonnable', async () => {
    expect(REGLAGES_PAR_DEFAUT.creneauProtegeDebut).toBe('09:00');
    expect((await lireReglages()).creneauProtegeDebut).toBe('09:00');
  });

  it('il s’éteint, et le compte se retient', async () => {
    await ecrireReglage('creneauProtegeDebut', null);
    await ecrireReglage('creneauRenoncements', 2);

    const reglages = await lireReglages();
    expect(reglages.creneauProtegeDebut).toBeNull();
    expect(reglages.creneauRenoncements).toBe(2);
  });

  it('prendre le créneau remet le compte à zéro', async () => {
    // Trois renoncements puis une prise : le créneau n'est plus en cause.
    await ecrireReglage('creneauRenoncements', 3);
    await ecrireReglage('creneauRenoncements', 0);
    expect(signalCreneau((await lireReglages()).creneauRenoncements)).toBeNull();
  });
});
