/**
 * La frontière du cœur. Ces tests décrivent le contrat que le module Kotlin devra
 * satisfaire : ils doivent rester verts après le remplacement de l'implémentation
 * provisoire par le vrai cœur.
 */

import { describe, expect, it } from 'vitest';
import {
  filtrerAncrageObjets,
  maintenantObjets,
  revueObjets,
  type ElementJson,
} from '../src/core/regles.ts';

const JOUR = '2026-09-12';

function element(partiel: Partial<ElementJson> & { id: string }): ElementJson {
  return {
    captureId: 'cap-1',
    type: 'TACHE',
    texte: 'Faire quelque chose',
    debutCar: 0,
    finCar: 10,
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
    ...partiel,
  };
}

describe('maintenant', () => {
  it('ne propose jamais plus de trois éléments', () => {
    const elements = Array.from({ length: 8 }, (_, i) =>
      element({ id: `el-${i}`, poids: 'FORT', poidsIndice: 'engage un client' }),
    );
    expect(maintenantObjets(elements, JOUR)).toHaveLength(3);
  });

  it('ne propose que les éléments acceptés et actionnables', () => {
    const elements = [
      element({ id: 'a', verdict: 'EN_ATTENTE' }),
      element({ id: 'b', verdict: 'UN_JOUR' }),
      element({ id: 'c', verdict: 'REJETE' }),
      element({ id: 'd', type: 'INFORMATION' }),
      element({ id: 'e', type: 'IDEE' }),
      element({ id: 'f', type: 'ENGAGEMENT' }),
    ];
    expect(maintenantObjets(elements, JOUR).map((p) => p.elementId)).toEqual(['f']);
  });

  it('ne laisse pas un urgent léger passer devant un important', () => {
    const leger = element({
      id: 'leger',
      poids: 'FAIBLE',
      poidsIndice: 'sans contrainte annoncée',
      echeance: JOUR,
    });
    const important = element({
      id: 'important',
      poids: 'FORT',
      poidsIndice: 'engage un client',
      echeance: '2026-09-13',
    });
    const ordre = maintenantObjets([leger, important], JOUR).map((p) => p.elementId);
    expect(ordre).toEqual(['important', 'leger']);
  });

  it("monte d'un cran un élément dont l'échéance est dépassée ou du jour", () => {
    const [proposition] = maintenantObjets(
      [element({ id: 'a', poids: 'MOYEN', poidsIndice: 'enjeu financier', echeance: '2026-09-01' })],
      JOUR,
    );
    expect(proposition.poidsEffectif).toBe('FORT');
    expect(proposition.urgence).toBe('DEPASSEE');
  });

  it('justifie par la conséquence, jamais par un score', () => {
    const [proposition] = maintenantObjets(
      [element({ id: 'a', poids: 'FORT', poidsIndice: 'bloque quelqu’un d’autre' })],
      JOUR,
    );
    expect(proposition.raison).toBe('bloque quelqu’un d’autre — sans échéance');
    expect(proposition.raison).not.toMatch(/\d+([.,]\d+)?\s*(pts?|points?|score)/i);
  });

  it('donne le même ordre à deux appels identiques', () => {
    const elements = [
      element({ id: 'z', poids: 'MOYEN', poidsIndice: 'x' }),
      element({ id: 'a', poids: 'MOYEN', poidsIndice: 'x' }),
    ];
    expect(maintenantObjets(elements, JOUR)).toEqual(maintenantObjets(elements, JOUR));
  });
});

describe('revue', () => {
  it("ne présente que ce qui attend une décision", () => {
    const file = revueObjets(
      [
        element({ id: 'a', verdict: 'EN_ATTENTE' }),
        element({ id: 'b', verdict: 'ACCEPTE' }),
      ],
      JOUR,
    );
    expect(file.total).toBe(1);
    expect(file.groupes[0].entrees[0].element.id).toBe('a');
  });

  it('groupe les éléments par capture source', () => {
    const file = revueObjets(
      [
        element({ id: 'a', captureId: 'cap-1', verdict: 'EN_ATTENTE' }),
        element({ id: 'b', captureId: 'cap-2', verdict: 'EN_ATTENTE' }),
        element({ id: 'c', captureId: 'cap-1', verdict: 'EN_ATTENTE' }),
      ],
      JOUR,
    );
    expect(file.groupes).toHaveLength(2);
    const premier = file.groupes.find((g) => g.captureId === 'cap-1');
    expect(premier?.entrees.map((e) => e.element.id)).toEqual(['a', 'c']);
  });

  it("présente d'abord l'urgent", () => {
    const file = revueObjets(
      [
        element({ id: 'sans', captureId: 'cap-1', verdict: 'EN_ATTENTE' }),
        element({ id: 'demain', captureId: 'cap-1', verdict: 'EN_ATTENTE', echeance: '2026-09-13' }),
      ],
      JOUR,
    );
    expect(file.groupes[0].entrees.map((e) => e.element.id)).toEqual(['demain', 'sans']);
  });

  it('marque « à confirmer » toute déduction sous le seuil de confiance', () => {
    const file = revueObjets(
      [
        element({ id: 'sur', verdict: 'EN_ATTENTE', poids: 'FORT', poidsConfiance: 0.9 }),
        element({ id: 'doute', verdict: 'EN_ATTENTE', poids: 'FORT', poidsConfiance: 0.4 }),
      ],
      JOUR,
    );
    const parId = Object.fromEntries(
      file.groupes.flatMap((g) => g.entrees).map((e) => [e.element.id, e.aConfirmer]),
    );
    expect(parId).toEqual({ sur: false, doute: true });
  });
});

describe('filtrerAncrage', () => {
  const source = 'appeler Marc avant vendredi';

  it('retient un élément dont le passage se relit dans la source', () => {
    const resultat = filtrerAncrageObjets(source, [
      element({ id: 'a', texte: 'Appeler Marc', debutCar: 0, finCar: 12 }),
    ]);
    expect(resultat.retenus.map((e) => e.id)).toEqual(['a']);
    expect(resultat.ecartes).toEqual([]);
  });

  it('écarte, avec sa raison, tout élément sans passage source valide', () => {
    const resultat = filtrerAncrageObjets(source, [
      element({ id: 'hors', texte: 'Inventé', debutCar: 0, finCar: 900 }),
      element({ id: 'vide', texte: '   ', debutCar: 0, finCar: 5 }),
      element({ id: 'incoherent', texte: 'Bizarre', debutCar: 8, finCar: 3 }),
    ]);
    expect(resultat.retenus).toEqual([]);
    expect(resultat.ecartes.map((e) => e.raison)).toEqual([
      'passage source absent du texte de la capture',
      'élément sans texte',
      'passage source vide ou incohérent',
    ]);
  });
});
