/**
 * Les renvois à un échange passé.
 *
 * Spec `memoire` — « Référence à un échange passé ». Une note de quatre secondes
 * renvoie souvent à autre chose qu'elle-même. « Le truc dont on a parlé avec Sophie
 * mardi » est parfaitement capturé, transcrit, rangé — et ne veut plus rien dire
 * trois jours plus tard. La note est perdue sans qu'aucune étape n'ait échoué.
 *
 * Le danger est de l'autre côté : rattacher à la mauvaise conversation fabrique un
 * souvenir faux, que plus rien ne vient corriger. Ces tests vérifient donc autant ce
 * qui est proposé que ce qui ne l'est pas.
 */

import { describe, expect, it } from 'vitest';
import { echosDe, renvoieAUnEchange } from '../src/services/echos.ts';
import type { CaptureJson, ElementJson } from '../src/core/regles.ts';

const AUJOURDHUI = '2026-09-25';

function capture(id: string, texte: string, jour: string): CaptureJson {
  return { id, texte, creeLe: `${jour}T10:00:00.000Z`, jour };
}

function element(id: string, captureId: string, texte: string): ElementJson {
  return {
    id,
    captureId,
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
  };
}

describe('reconnaître un renvoi', () => {
  it('reconnaît les tournures qui annoncent un ailleurs', () => {
    for (const texte of [
      'reprendre le truc dont on a parlé avec Sophie mardi',
      'relancer sur ce truc de la semaine dernière',
      'faire comme on l’a dit',
      'suite à notre échange, envoyer le devis',
      'ce dont je t’ai parlé hier',
    ]) {
      expect(renvoieAUnEchange(texte), texte).toBe(true);
    }
  });

  it('ne voit pas de renvoi dans une note ordinaire', () => {
    // Une liste large proposerait un rattachement là où il n'y a rien à rattacher,
    // et la proposition finirait par ne plus être lue.
    for (const texte of [
      'rappeler le couvreur pour le devis du toit',
      'envoyer le planning à Karim avant jeudi',
      'acheter du pain',
    ]) {
      expect(renvoieAUnEchange(texte), texte).toBe(false);
    }
  });
});

describe('proposer des pistes', () => {
  const captures = [
    capture('c-1', 'point avec Sophie sur le chiffrage du chantier', '2026-09-22'),
    capture('c-2', 'rappeler le couvreur pour le devis du toit', '2026-09-23'),
    capture('c-3', 'reprendre le truc dont on a parlé avec Sophie mardi', '2026-09-25'),
  ];
  const elements = [
    element('e-1', 'c-1', 'point avec Sophie sur le chiffrage du chantier'),
    element('e-2', 'c-2', 'rappeler le couvreur pour le devis du toit'),
  ];

  it('retrouve la conversation dont il s’agit', () => {
    const pistes = echosDe(
      'reprendre le truc dont on a parlé avec Sophie mardi',
      'c-3',
      captures,
      elements,
      AUJOURDHUI,
    );

    expect(pistes.length).toBeGreaterThan(0);
    expect(pistes[0].captureId).toBe('c-1');
    // Et dit pourquoi : sans raison affichée, on accepte la première piste venue.
    expect(pistes[0].pourquoi.length).toBeGreaterThan(0);
  });

  it('ne se propose jamais elle-même', () => {
    const pistes = echosDe(
      'reprendre le truc dont on a parlé avec Sophie mardi',
      'c-3',
      captures,
      elements,
      AUJOURDHUI,
    );
    expect(pistes.every((p) => p.captureId !== 'c-3')).toBe(true);
  });

  it('ne propose rien pour une note qui ne renvoie à rien', () => {
    expect(
      echosDe('rappeler le couvreur', 'c-2', captures, elements, AUJOURDHUI),
    ).toEqual([]);
  });

  it('ne propose rien quand il n’y a rien d’autre en mémoire', () => {
    expect(
      echosDe(
        'le truc dont on a parlé mardi',
        'c-3',
        [captures[2]],
        [],
        AUJOURDHUI,
      ),
    ).toEqual([]);
  });

  it('n’en propose jamais plus de trois : au-delà ce n’est plus une proposition', () => {
    const beaucoup = Array.from({ length: 8 }, (_, i) =>
      capture(`c-${i}`, `point avec Sophie sur le sujet ${i}`, '2026-09-22'),
    );
    const pistes = echosDe(
      'le truc dont on a parlé avec Sophie mardi',
      'c-x',
      beaucoup,
      [],
      AUJOURDHUI,
    );
    expect(pistes.length).toBeLessThanOrEqual(3);
  });

  it('ne propose pas deux fois la même capture', () => {
    const pistes = echosDe(
      'le truc dont on a parlé avec Sophie mardi',
      'c-3',
      captures,
      [...elements, element('e-3', 'c-1', 'Sophie doit rendre le chiffrage')],
      AUJOURDHUI,
    );
    const vues = pistes.map((p) => p.captureId);
    expect(new Set(vues).size).toBe(vues.length);
  });
});
