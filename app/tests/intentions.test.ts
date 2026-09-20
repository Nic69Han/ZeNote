/**
 * Le découpage d'une capture et le typage des intentions.
 *
 * Spec `extraction` — « Classification de l'intention ». On ne parle pas en
 * paragraphes : on enchaîne. « Rappeler Sophie pour le devis, et j'ai dit à Karim
 * que je lui envoie le planning, et au fait on a tranché » est une seule phrase et
 * trois choses différentes, dont une dette envers quelqu'un et une décision.
 *
 * Sans découpage, les trois deviennent un seul élément, typé au hasard de ce qui
 * vient en dernier — et les deux autres n'existent nulle part. Avec un découpage trop
 * zélé, une énumération se brise en morceaux dont aucun ne veut rien dire. Les deux
 * échecs sont vérifiés ici.
 */

import { describe, expect, it } from 'vitest';
import { analyser, typerPassage } from '../src/analyse/index.ts';
import { decouper } from '../src/analyse/segments.ts';

const JOUR = '2026-09-22';

describe('capture multi-intentions', () => {
  const PHRASE =
    'faut que je rappelle Sophie pour le devis, et j’ai dit à Karim que je lui ' +
    'envoie le planning avant jeudi, et au fait on a tranché : on part sur le prestataire B';

  it('produit trois éléments distincts', () => {
    expect(analyser(PHRASE, 'c-1', JOUR).elements).toHaveLength(3);
  });

  it('typés tâche, engagement et décision, dans cet ordre', () => {
    const { elements } = analyser(PHRASE, 'c-1', JOUR);
    expect(elements.map((e) => e.type)).toEqual(['TACHE', 'ENGAGEMENT', 'DECISION']);
  });

  it('tous rattachés à la même capture, chacun à son passage', () => {
    const { elements } = analyser(PHRASE, 'c-1', JOUR);
    expect(elements.every((e) => e.captureId === 'c-1')).toBe(true);
    // Les passages ne se chevauchent pas et citent bien le texte d'origine.
    for (const element of elements) {
      expect(PHRASE.slice(element.debutCar, element.finCar).toLowerCase()).toBe(
        element.texte.toLowerCase(),
      );
    }
    const bornes = elements.map((e) => e.debutCar);
    expect([...bornes].sort((a, b) => a - b)).toEqual(bornes);
  });

  it('et la décision garde sa raison, que les deux points introduisent', () => {
    const decision = analyser(PHRASE, 'c-1', JOUR).elements[2];
    expect(decision.texte).toContain('prestataire B');
  });
});

describe('découper sans casser', () => {
  it('une énumération reste d’un seul tenant', () => {
    // « le devis, et le planning » n'est pas deux idées : c'est une liste. La
    // coupure ne vaut que devant un début de proposition.
    expect(decouper('envoyer le devis, et le planning avant jeudi')).toHaveLength(1);
  });

  it('coupe sur la ponctuation forte', () => {
    expect(decouper('rappeler le couvreur. Envoyer le devis.')).toHaveLength(2);
  });

  it('coupe sur les charnières orales', () => {
    expect(decouper('rappeler le couvreur puis envoyer le devis')).toHaveLength(2);
  });

  it('ne rend aucun fragment vide de sens', () => {
    for (const passage of decouper('euh. bon. rappeler le couvreur ; et voilà.')) {
      expect(passage.texte.trim().length).toBeGreaterThan(2);
    }
  });
});

describe('les six types', () => {
  const exemples: [string, string][] = [
    ['rappeler le couvreur pour le devis', 'TACHE'],
    ["j'ai promis à Sophie de relire le contrat", 'ENGAGEMENT'],
    ['Karim doit me renvoyer les chiffres', 'ATTENTE'],
    ['le nouveau bureau ouvre en mars', 'INFORMATION'],
    ['on a tranché : on part sur le prestataire B', 'DECISION'],
    ['une idée : proposer un atelier aux équipes un jour', 'IDEE'],
  ];

  it('se reconnaissent chacun', () => {
    for (const [phrase, type] of exemples) {
      expect(typerPassage(phrase), phrase).toBe(type);
    }
  });
});

describe('information sans action', () => {
  it('sans verbe d’action ni destinataire, rien n’est à faire', () => {
    const { elements } = analyser('le nouveau bureau ouvre en mars', 'c-1', JOUR);
    expect(elements).toHaveLength(1);
    expect(elements[0].type).toBe('INFORMATION');
  });

  it('et aucune tâche n’est créée dans la foulée', () => {
    const { elements } = analyser(
      'le budget a été voté la semaine dernière. Le nouveau bureau ouvre en mars.',
      'c-1',
      JOUR,
    );
    expect(elements.every((e) => e.type === 'INFORMATION')).toBe(true);
  });
});
