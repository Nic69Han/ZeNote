/**
 * Le contrat d'agenda du cœur, appelé depuis le JS vendu — change `agenda-local`,
 * tâche 1.6. Les règles se vérifient dans les tests Kotlin ; ici, que chaque entrée
 * répond depuis la PWA avec les types attendus.
 */

import { describe, expect, it } from 'vitest';
import {
  VERSION_CONTRAT_ATTENDUE,
  filtrerAncrageObjets,
  maintenantAvecContexteObjets,
  maintenantObjets,
  momentsDeReunion,
  rappelsObjets,
  type ElementJson,
  type EvenementJson,
} from '../src/core/regles.ts';

const TEXTE = 'Envoyer le devis. Préparer le budget.';

function tache(id: string, extrait: string, duree: ElementJson['duree']): ElementJson {
  const debutCar = TEXTE.indexOf(extrait);
  return {
    id,
    captureId: 'c-1',
    type: 'TACHE',
    texte: extrait,
    debutCar,
    finCar: debutCar + extrait.length,
    poids: 'FORT',
    poidsConfiance: 0.9,
    poidsIndice: 'engage un client',
    duree,
    dureeConfiance: duree ? 0.9 : null,
    dureeIndice: duree ? 'verbe' : null,
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
  };
}

const courte = tache('courte', 'Envoyer le devis', 'COURTE');
const longue = tache('longue', 'Préparer le budget', 'LONGUE');
const comite: EvenementJson = {
  id: 'comite',
  titre: 'Comité',
  debut: '2026-09-21T11:00',
  fin: '2026-09-21T12:00',
  participants: ['Marc Dupont'],
};

describe('contrat d’agenda du cœur', () => {
  it('parle la version 14', () => {
    expect(VERSION_CONTRAT_ATTENDUE).toBe('14');
  });

  it('garde la durée à travers l’ancrage', () => {
    const { retenus } = filtrerAncrageObjets(TEXTE, [longue], []);
    expect(retenus[0]).toMatchObject({ duree: 'LONGUE', dureeConfiance: 0.9, dureeIndice: 'verbe' });
  });

  it('maintenantAvecContexte : à sept minutes du comité, seul le court', () => {
    const m = maintenantAvecContexteObjets([courte, longue], '2026-09-21T10:53', [comite]);
    expect(m.propositions.map((p) => p.elementId)).toEqual(['courte']);
    expect(m.ecartes).toBe(1);
    expect(m.minutesAvantReunion).toBe(7);
    expect(m.raison).toContain('« Comité »');
  });

  it('maintenantAvecContexte sans agenda : les propositions de maintenant', () => {
    const m = maintenantAvecContexteObjets([courte, longue], '2026-09-21T10:53', []);
    expect(m.propositions).toEqual(maintenantObjets([courte, longue], '2026-09-21'));
    expect(m.raison).toBe('');
  });

  it('rappels avec l’agenda : retenus pendant la réunion, livrés à sa fin', () => {
    const plan: ElementJson = { ...courte, planDeclencheur: 'ce soir', planAction: 'Envoyer le devis' };
    const suivis = [{ elementId: 'courte', planPoseLe: '2026-09-21T08:00', foisIgnore: 0 }];
    const soiree: EvenementJson = { id: 's', titre: 'Dîner client', debut: '2026-09-21T17:30', fin: '2026-09-21T19:00' };

    const pendant = rappelsObjets([plan], '2026-09-21T18:10', suivis, [soiree]);
    expect(pendant.rappels).toEqual([]);
    expect(pendant.reunionEnCours).toBe('Dîner client');
    expect(pendant.retenus).toBe(1);

    const apres = rappelsObjets([plan], '2026-09-21T19:05', suivis, [soiree]);
    expect(apres.point).toBe('FIN_DE_REUNION');
    expect(apres.rappels[0]).toMatchObject({ elementId: 'courte', enRetard: true });
  });

  it('momentsDeReunion : à deux minutes, une dépose proposée', () => {
    const moments = momentsDeReunion([comite], '2026-09-21T10:58', [], [], []);
    expect(moments).toHaveLength(1);
    expect(moments[0]).toMatchObject({ type: 'AVANT', evenementId: 'comite', minutes: 2, proposerDepose: true });
  });
});
