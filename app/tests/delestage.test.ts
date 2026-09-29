/**
 * Vider sa tête le soir : quand l'invite se présente, et une seule fois par soirée.
 *
 * Ce qui casserait la promesse : une invite qui apparaît sans qu'on l'ait demandée, qui
 * revient après qu'on l'a écartée parce que minuit est passé, ou qui s'accroche à un
 * mauvais jour de référence. La fonction est pure — l'heure lui est donnée — donc la
 * soirée qui passe minuit se vérifie ici sans attendre minuit. Les scénarios de la spec
 * `delestage-du-soir` sont nommés dans les tests.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CONFIRMATION_DU_SOIR,
  CONSIGNE_DU_SOIR,
  inviteDuSoir,
  jourDeSoiree,
  type ReglagesDelestage,
} from '../src/services/delestage.ts';
import { analyserCapture, capturer } from '../src/services/pipeline.ts';
import {
  REGLAGES_PAR_DEFAUT,
  ecrireReglage,
  elementsDeCapture,
  lireCapture,
  lireReglages,
  toutEffacer,
} from '../src/stockage/depot.ts';

beforeEach(async () => {
  await toutEffacer();
});

/** Un instant en heure locale : la soirée se dit en heure vécue, pas en temps universel. */
const a = (jour: number, heures: number, minutes = 0) => new Date(2026, 8, jour, heures, minutes);

const ALLUME: ReglagesDelestage = { delestageSoir: true, delestageHeure: '21:00', delestageVuLe: null };

describe('Réglage éteint par défaut', () => {
  it('propose des réglages où l’invite est éteinte, à 21 h 00, jamais vue', () => {
    expect(REGLAGES_PAR_DEFAUT.delestageSoir).toBe(false);
    expect(REGLAGES_PAR_DEFAUT.delestageHeure).toBe('21:00');
    expect(REGLAGES_PAR_DEFAUT.delestageVuLe).toBeNull();
  });

  it('n’invite jamais, quelle que soit l’heure, tant que le réglage n’est pas allumé', () => {
    for (let heure = 0; heure < 24; heure += 1) {
      expect(inviteDuSoir(a(29, heure, 30), REGLAGES_PAR_DEFAUT)).toBeNull();
    }
  });

  it('relit ces défauts sur une installation neuve, sans rien avoir écrit', async () => {
    const lus = await lireReglages();
    expect(lus.delestageSoir).toBe(false);
    expect(lus.delestageHeure).toBe('21:00');
    expect(lus.delestageVuLe).toBeNull();
  });
});

describe('Invite dans la soirée', () => {
  it('invite à 22 h 10 quand le réglage est allumé pour 21 h 00, avec le jour de la soirée', () => {
    expect(inviteDuSoir(a(29, 22, 10), ALLUME)).toBe('2026-09-29');
  });

  it('commence à l’heure réglée, pas avant', () => {
    expect(inviteDuSoir(a(29, 20, 59), ALLUME)).toBeNull();
    expect(inviteDuSoir(a(29, 21, 0), ALLUME)).toBe('2026-09-29');
  });

  it('suit une autre heure de début', () => {
    const tot: ReglagesDelestage = { ...ALLUME, delestageHeure: '18:30' };
    expect(inviteDuSoir(a(29, 18, 29), tot)).toBeNull();
    expect(inviteDuSoir(a(29, 18, 30), tot)).toBe('2026-09-29');
  });

  it('ne propose rien pendant la journée', () => {
    for (const heure of [4, 9, 12, 17, 20]) {
      expect(inviteDuSoir(a(29, heure), ALLUME)).toBeNull();
    }
  });

  it('retombe sur 21 h 00 quand l’heure réglée est illisible', () => {
    const bancale: ReglagesDelestage = { ...ALLUME, delestageHeure: 'tard' };
    expect(inviteDuSoir(a(29, 20, 59), bancale)).toBeNull();
    expect(inviteDuSoir(a(29, 21, 0), bancale)).toBe('2026-09-29');
  });

  it('donne la consigne de précision : quoi, pour qui, quand', () => {
    expect(CONSIGNE_DU_SOIR).toMatch(/quoi, pour qui, quand/);
    // Ni reproche ni compte : rien de tel dans la consigne.
    expect(CONSIGNE_DU_SOIR).not.toMatch(/manqu|oubli|retard|\d+ soir/i);
  });
});

describe('la soirée qui passe minuit', () => {
  it('a pour jour de référence celui où elle a commencé', () => {
    expect(jourDeSoiree(a(29, 23, 50), '21:00')).toBe('2026-09-29');
    expect(jourDeSoiree(a(30, 0, 5), '21:00')).toBe('2026-09-29');
    expect(jourDeSoiree(a(30, 3, 59), '21:00')).toBe('2026-09-29');
  });

  it('s’achève à 4 h 00', () => {
    expect(jourDeSoiree(a(30, 4, 0), '21:00')).toBeNull();
    expect(inviteDuSoir(a(30, 4, 0), ALLUME)).toBeNull();
  });

  it('propose encore l’invite après minuit si elle n’a pas été vue, au nom de la même soirée', () => {
    expect(inviteDuSoir(a(30, 0, 40), ALLUME)).toBe('2026-09-29');
  });

  it('passe d’un mois à l’autre sans se tromper de jour', () => {
    expect(jourDeSoiree(new Date(2026, 9, 1, 0, 30), '21:00')).toBe('2026-09-30');
  });

  it('ne fait pas passer minuit à une soirée qui commence avant quatre heures du matin', () => {
    expect(jourDeSoiree(a(29, 2, 30), '02:00')).toBe('2026-09-29');
    expect(jourDeSoiree(a(29, 3, 59), '02:00')).toBe('2026-09-29');
    expect(jourDeSoiree(a(29, 4, 0), '02:00')).toBeNull();
    expect(jourDeSoiree(a(29, 1, 59), '02:00')).toBeNull();
  });
});

describe('Pas ce soir', () => {
  const vu: ReglagesDelestage = { ...ALLUME, delestageVuLe: '2026-09-29' };

  it('ne réapparaît pas de la soirée', () => {
    expect(inviteDuSoir(a(29, 22, 10), vu)).toBeNull();
    expect(inviteDuSoir(a(29, 23, 59), vu)).toBeNull();
  });

  it('reste vrai après minuit, pour la même soirée', () => {
    expect(inviteDuSoir(a(30, 0, 5), vu)).toBeNull();
    expect(inviteDuSoir(a(30, 3, 59), vu)).toBeNull();
  });

  it('revient à la soirée suivante, sans rien avoir compté', () => {
    expect(inviteDuSoir(a(30, 21, 0), vu)).toBe('2026-09-30');
  });

  it('revient même après plusieurs soirées passées sans invite : aucun compte', () => {
    expect(inviteDuSoir(a(29, 22, 0), { ...ALLUME, delestageVuLe: '2026-09-20' })).toBe('2026-09-29');
  });
});

describe('des réglages sans note dedans', () => {
  it('écrit et relit l’interrupteur, l’heure et le jour vu — trois valeurs, aucun texte de note', async () => {
    await ecrireReglage('delestageSoir', true);
    await ecrireReglage('delestageHeure', '20:30');
    await ecrireReglage('delestageVuLe', '2026-09-29');
    const lus = await lireReglages();
    expect(lus.delestageSoir).toBe(true);
    expect(lus.delestageHeure).toBe('20:30');
    expect(lus.delestageVuLe).toBe('2026-09-29');
    expect(inviteDuSoir(a(29, 21, 0), lus)).toBeNull();
    expect(inviteDuSoir(a(30, 20, 30), lus)).toBe('2026-09-30');
  });
});

describe('Liste du lendemain déposée', () => {
  it('dit « Écrit. Vous pouvez le lâcher jusqu’à demain. »', () => {
    expect(CONFIRMATION_DU_SOIR).toBe("Écrit. Vous pouvez le lâcher jusqu'à demain.");
  });

  it('est une capture ordinaire : ses éléments vont en Revue, comme ceux de toute capture', async () => {
    const liste = await capturer({
      texte:
        'Demain : appeler Karim pour le devis avant dix heures. ' +
        'Relire le budget avec Sophie avant midi, sinon le chantier est bloqué.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    expect((await lireCapture(liste.id))?.reprise).toBeUndefined();

    const produits = await analyserCapture(liste, '2026-09-29');

    expect(produits).toBeGreaterThan(0);
    expect((await elementsDeCapture(liste.id)).length).toBe(produits);
    expect((await lireCapture(liste.id))?.analysee).toBe(true);
  });
});
