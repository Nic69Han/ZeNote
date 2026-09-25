/** L'analyseur local : ce qu'il comprend, et surtout ce qu'il refuse d'inventer. */

import { describe, expect, it } from 'vitest';
import {
  analyser,
  evaluerPoids,
  repererInterlocuteur,
  typerPassage,
  typerPassageAvecConfiance,
} from '../src/analyse/index.ts';
import { filtrerAncrageObjets, type ElementJson } from '../src/core/regles.ts';
import { decaler, prochainJour, repererEcheance } from '../src/analyse/dates.ts';
import { decouper } from '../src/analyse/segments.ts';

// Samedi 12 septembre 2026.
const JOUR = '2026-09-12';

describe('découpage', () => {
  it('coupe sur la ponctuation en gardant les bornes exactes', () => {
    const texte = 'Appeler Marc. Relire le budget.';
    const passages = decouper(texte);
    expect(passages.map((p) => p.texte)).toEqual(['Appeler Marc.', 'Relire le budget.']);
    for (const p of passages) {
      expect(texte.slice(p.debutCar, p.finCar)).toBe(p.texte);
    }
  });

  it('coupe sur les charnières orales, la dictée étant sans ponctuation', () => {
    const texte = 'appeler Marc ensuite relire le budget';
    expect(decouper(texte).map((p) => p.texte)).toEqual(['appeler Marc', 'relire le budget']);
  });

  it('ignore les fragments qui ne portent rien', () => {
    expect(decouper('... ! ?')).toEqual([]);
  });
});

describe('dates relatives', () => {
  it('résout « demain » et « après-demain »', () => {
    expect(repererEcheance('appeler demain', JOUR)?.date).toBe(decaler(JOUR, 1));
    expect(repererEcheance('voir après-demain', JOUR)?.date).toBe(decaler(JOUR, 2));
  });

  it('résout « avant vendredi » avec une confiance élevée', () => {
    const trouve = repererEcheance('rendre le dossier avant vendredi', JOUR);
    expect(trouve?.date).toBe(prochainJour(JOUR, 5));
    expect(trouve?.confiance).toBeGreaterThanOrEqual(0.75);
    expect(trouve?.indice).toContain('vendredi');
  });

  it('doute davantage sur un jour cité sans préposition', () => {
    const trouve = repererEcheance('on se voit mardi', JOUR);
    expect(trouve?.date).toBe(prochainJour(JOUR, 2));
    expect(trouve?.confiance).toBeLessThan(0.75);
  });

  it('résout « la semaine prochaine » au lundi suivant, sans faire semblant d’être sûr', () => {
    const trouve = repererEcheance('on verra la semaine prochaine', JOUR);
    expect(trouve?.date).toBe(prochainJour(JOUR, 1));
    expect(trouve?.confiance).toBeLessThan(0.75);
  });

  it('résout une durée relative et une date explicite', () => {
    expect(repererEcheance('dans trois jours', JOUR)?.date).toBe(decaler(JOUR, 3));
    expect(repererEcheance('le 3 novembre', JOUR)?.date).toBe('2026-11-03');
  });

  it("reporte à l'année suivante une date déjà passée", () => {
    expect(repererEcheance('le 3 mars', JOUR)?.date).toBe('2027-03-03');
  });

  it('ne rend rien quand aucune date n’est énoncée', () => {
    expect(repererEcheance('relire la présentation', JOUR)).toBeNull();
  });
});

describe('typage des passages', () => {
  it.each([
    ['appeler le client', 'TACHE'],
    ["j'attends le retour de Sophie", 'ATTENTE'],
    ["on a décidé de reporter le lancement", 'DECISION'],
    ["j'ai promis le budget à Marc", 'ENGAGEMENT'],
    ['et si on refaisait le process un jour', 'IDEE'],
    ['le taux de marge est à douze pour cent', 'INFORMATION'],
  ])('« %s » est un %s', (passage, attendu) => {
    expect(typerPassage(passage)).toBe(attendu);
  });
});

describe('poids', () => {
  it('déduit un poids fort avec l’indice qui le justifie', () => {
    const fort = evaluerPoids('c’est urgent, le client attend');
    expect(fort.poids).toBe('FORT');
    expect(fort.indice).not.toBe('');
    expect(fort.confiance).toBeGreaterThanOrEqual(0.75);
  });

  it('déduit un poids faible quand rien ne presse', () => {
    expect(evaluerPoids('ranger le bureau quand j’aurai le temps').poids).toBe('FAIBLE');
  });

  it('n’invente pas : sans indice, le poids reste moyen et sous le seuil de confiance', () => {
    const neutre = evaluerPoids('relire la note');
    expect(neutre.poids).toBe('MOYEN');
    expect(neutre.confiance).toBeLessThan(0.75);
    expect(neutre.indice).toContain('aucun indice');
  });
});

describe('interlocuteur', () => {
  it('repère un prénom après « avec », « pour », « à »', () => {
    expect(repererInterlocuteur('voir avec Marc le budget')?.nom).toBe('Marc');
    expect(repererInterlocuteur('préparer la note pour Sophie')?.nom).toBe('Sophie');
    expect(repererInterlocuteur('répondre à Claire')?.nom).toBe('Claire');
  });

  it('ne prend pas un jour ni un mois pour quelqu’un', () => {
    expect(repererInterlocuteur('rendre avant Vendredi')).toBeNull();
  });
});

describe('analyse complète', () => {
  const texte =
    'Voir avec Marc pour le budget avant vendredi, c’est urgent. ' +
    'Ensuite relire la présentation quand j’aurai le temps. ' +
    'J’attends le retour de Sophie sur le contrat.';

  it('produit un élément par sujet, tous rattachés à la même capture', () => {
    const { elements } = analyser(texte, 'cap-1', JOUR);
    expect(elements.length).toBe(3);
    expect(new Set(elements.map((e) => e.captureId))).toEqual(new Set(['cap-1']));
  });

  it('cite un passage réellement présent dans le texte source', () => {
    const { elements } = analyser(texte, 'cap-1', JOUR);
    for (const e of elements) {
      expect(e.finCar).toBeGreaterThan(e.debutCar);
      expect(e.finCar).toBeLessThanOrEqual(texte.length);
      const passage = texte.slice(e.debutCar, e.finCar);
      expect(passage.trim().length).toBeGreaterThan(0);
      // Le texte présenté est bien tiré du passage, pas inventé à côté.
      expect(passage.toLowerCase()).toContain(
        e.texte.toLowerCase().slice(0, 12).replace(/^./, (c) => c.toLowerCase()),
      );
    }
  });

  it('déduit échéance, poids justifié et interlocuteur sur le premier sujet', () => {
    const { elements } = analyser(texte, 'cap-1', JOUR);
    const premier = elements[0];
    expect(premier.type).toBe('TACHE');
    expect(premier.echeance).toBe(prochainJour(JOUR, 5));
    expect(premier.poids).toBe('FORT');
    expect(premier.poidsIndice).toBeTruthy();
    expect(premier.interlocuteur).toBe('Marc');
    expect(premier.verdict).toBe('EN_ATTENTE');
  });

  it('laisse chaque élément en attente de décision humaine', () => {
    const { elements } = analyser(texte, 'cap-1', JOUR);
    expect(elements.every((e) => e.verdict === 'EN_ATTENTE')).toBe(true);
    expect(elements.every((e) => e.corrigeParHumain === false)).toBe(true);
  });

  it('ne produit rien à partir d’un texte vide', () => {
    expect(analyser('', 'cap-1', JOUR).elements).toEqual([]);
  });
});

describe('origine et confiance du type', () => {
  it('rend la confiance de la règle qui a tranché', () => {
    expect(typerPassageAvecConfiance("j'attends le retour de Sophie")).toEqual({ type: 'ATTENTE', confiance: 0.8 });
    expect(typerPassageAvecConfiance('appeler le client')).toEqual({ type: 'TACHE', confiance: 0.6 });
    expect(typerPassageAvecConfiance('le taux de marge est à douze pour cent')).toEqual({
      type: 'INFORMATION',
      confiance: 0.5,
    });
  });

  it('marque chaque élément local de son origine, à travers l’ancrage du cœur', () => {
    const { elements } = analyser(
      'Appeler Marc avant vendredi. On a décidé de reporter le lancement. Le taux est bas.',
      'cap-1',
      JOUR,
    );
    expect(elements.length).toBeGreaterThan(0);
    for (const e of elements) {
      expect(e.origineAnalyse).toEqual({ moteur: 'LOCAL', modele: null });
      expect(e.typeConfiance).toBe(typerPassageAvecConfiance(e.texte).confiance);
      expect(e.sphereConfiance).toBeNull();
    }
  });

  it('laisse un élément ancien, sans ces champs, se relire tel quel', () => {
    const { elements } = analyser('Appeler Marc avant vendredi.', 'cap-1', JOUR);
    const { typeConfiance: _t, sphereConfiance: _s, origineAnalyse: _o, ...ancien } = elements[0];
    const relu: ElementJson = JSON.parse(JSON.stringify(ancien));
    expect(relu.origineAnalyse).toBeUndefined();
    expect(relu.typeConfiance).toBeUndefined();
    // Le cœur l'accepte toujours : les champs sont facultatifs de bout en bout.
    expect(filtrerAncrageObjets('Appeler Marc avant vendredi.', [relu], []).retenus).toHaveLength(1);
  });
});
