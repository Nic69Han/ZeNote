/**
 * Les engagements pris, et les attentes envers les autres.
 *
 * Spec `extraction` — « Détection des engagements pris ». Ce sont les deux types
 * qu'une liste de tâches ordinaire ne sait pas porter, et ce sont ceux qui coûtent
 * le plus cher quand ils tombent :
 *
 *  - un **engagement** est une dette envers quelqu'un. L'oublier ne se paie pas en
 *    retard mais en confiance, et personne ne vient le rappeler.
 *  - une **attente** n'est pas à faire : elle est à surveiller. La ranger parmi les
 *    tâches donnerait une liste qu'on ne peut pas terminer, ce qui est la meilleure
 *    façon de cesser de la regarder.
 *
 * Une attente sans responsable ne se relance pas — donc ne sert à rien. C'est la
 * moitié qui manquait, et elle ne se voyait pas : le type était juste.
 */

import { describe, expect, it } from 'vitest';
import { analyser, repererInterlocuteur, typerPassage } from '../src/analyse/index.ts';
import { maintenantObjets } from '../src/core/regles.ts';

const JOUR = '2026-09-22';

function seul(phrase: string) {
  const { elements } = analyser(phrase, 'c-1', JOUR);
  expect(elements.length, phrase).toBeGreaterThan(0);
  return elements[0];
}

describe('engagement envers un tiers', () => {
  it('« j’ai dit à Karim que je lui envoie le planning » est un engagement envers Karim', () => {
    const element = seul("j'ai dit à Karim que je lui envoie le planning");
    expect(element.type).toBe('ENGAGEMENT');
    expect(element.interlocuteur).toBe('Karim');
  });

  it('reconnaît les autres façons de s’engager auprès de quelqu’un', () => {
    for (const phrase of [
      "j'ai promis à Sophie de relire le contrat",
      "je me suis engagé auprès de Thomas à envoyer le devis",
      "j'ai confirmé à Camille que je passe lundi",
      "je lui ai dit que je m'en occupe",
    ]) {
      expect(typerPassage(phrase), phrase).toBe('ENGAGEMENT');
    }
  });

  it('ne prend pas une tâche ordinaire pour un engagement', () => {
    // Sans destinataire, une action reste une tâche : promettre suppose quelqu'un.
    expect(typerPassage('envoyer le planning avant vendredi')).toBe('TACHE');
    expect(typerPassage('relire le contrat')).toBe('TACHE');
  });

  it('se distingue d’une tâche jusque dans ce qui est stocké', () => {
    // C'est ce qui permet à l'écran de les montrer différemment : le type voyage
    // avec l'élément, il n'est pas déduit à l'affichage.
    expect(seul("j'ai promis à Sophie de relire le contrat").type).toBe('ENGAGEMENT');
    expect(seul('relire le contrat avant jeudi').type).toBe('TACHE');
  });
});

describe('attente envers un tiers', () => {
  it('« Sophie doit me renvoyer le chiffrage » est une attente, portée par Sophie', () => {
    const element = seul('Sophie doit me renvoyer le chiffrage');
    expect(element.type).toBe('ATTENTE');
    expect(element.interlocuteur).toBe('Sophie');
  });

  it('trouve le responsable quelle que soit la tournure', () => {
    expect(repererInterlocuteur('Thomas doit me rappeler')?.nom).toBe('Thomas');
    expect(repererInterlocuteur('Camille va me confirmer la date')?.nom).toBe('Camille');
    expect(repererInterlocuteur('j’attends le retour de Marc')?.nom).toBe('Marc');
  });

  it('ne prend pas un mot courant en tête de phrase pour un prénom', () => {
    expect(repererInterlocuteur('Demain doit me servir à finir le dossier')).toBeNull();
  });

  it('une attente porte son responsable jusqu’à l’élément', () => {
    const element = seul('Karim doit me renvoyer les chiffres avant vendredi');
    expect(element.type).toBe('ATTENTE');
    expect(element.interlocuteur).toBe('Karim');
    // Et son échéance est bien lue : une attente se relance à une date.
    expect(element.echeance).toBe('2026-09-25');
  });
});

describe('une attente ne se range pas parmi les choses à faire', () => {
  it('elle ne remonte jamais dans Maintenant, même acceptée', () => {
    // Une liste de tâches qu'on ne peut pas terminer est une liste qu'on cesse de
    // regarder. Ce qui dépend de quelqu'un d'autre se surveille, il ne se fait pas.
    const attente = {
      ...seul('Sophie doit me renvoyer le chiffrage avant vendredi'),
      verdict: 'ACCEPTE' as const,
    };
    const engagement = {
      ...seul("j'ai promis à Sophie de relire le contrat avant vendredi"),
      id: 'e-2',
      verdict: 'ACCEPTE' as const,
      planDeclencheur: 'demain matin',
      planAction: 'relire le contrat',
    };

    const propositions = maintenantObjets([attente, engagement], JOUR);

    expect(propositions.map((p) => p.elementId)).toEqual(['e-2']);
  });
});

describe('la distinction tient dans les deux sens', () => {
  it('une capture qui mêle les trois produit trois types différents', () => {
    const { elements } = analyser(
      "relire le budget. J'ai dit à Karim que je lui envoie le planning. " +
        'Sophie doit me renvoyer le chiffrage.',
      'c-1',
      JOUR,
    );
    const types = elements.map((e) => e.type);
    expect(types).toContain('TACHE');
    expect(types).toContain('ENGAGEMENT');
    expect(types).toContain('ATTENTE');
  });
});
