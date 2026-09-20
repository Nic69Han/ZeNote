/**
 * L'import d'un compte rendu de réunion.
 *
 * Spec `reunions` — « Traitement d'un compte rendu externe » et « Confirmation avant
 * engagement ».
 *
 * Un compte rendu fait dix écrans et contient le mélange habituel : ce qu'on a
 * promis, ce que les autres ont promis, et le reste. Relu deux jours plus tard, on
 * n'y retrouve pas ses propres engagements — qui sont pourtant la seule raison de
 * l'ouvrir.
 *
 * La distinction n'est pas de vocabulaire : ce qu'on doit faire se fait, ce que les
 * autres doivent faire se surveille, et les mélanger donne une liste qu'on ne peut
 * pas terminer. Se tromper de côté est pire que de ne rien extraire.
 */

import { describe, expect, it } from 'vitest';
import { importerCompteRendu } from '../src/services/reunion.ts';

const JOUR = '2026-09-22';

const COMPTE_RENDU = [
  'Réunion chantier du 22 septembre',
  '',
  '- Nicolas : envoyer le planning révisé avant vendredi',
  '- Sophie : relancer le fournisseur sur le chiffrage',
  '- Marc Lefevre — valider le budget de la phase 2',
  'Le permis a été accordé la semaine dernière.',
  "Je m'occupe de reprendre le dossier Atlas.",
].join('\n');

function importer(monNom = 'Nicolas') {
  return importerCompteRendu(COMPTE_RENDU, monNom, 'c-1', JOUR);
}

describe('ce que l’utilisateur doit faire', () => {
  it('ses lignes deviennent des engagements', () => {
    const { elements } = importer();
    const miens = elements.filter((e) => e.type === 'ENGAGEMENT');

    expect(miens.map((e) => e.texte).join(' | ')).toContain('envoyer le planning révisé');
    expect(miens.map((e) => e.texte).join(' | ')).toContain("Je m'occupe de reprendre le dossier");
  });

  it('la première personne est reconnue sans qu’on ait à se nommer', () => {
    const { elements } = importer('');
    const miens = elements.filter((e) => e.type === 'ENGAGEMENT');
    expect(miens.map((e) => e.texte).join(' ')).toContain("Je m'occupe");
  });
});

describe('ce que les autres doivent faire', () => {
  it('leurs lignes deviennent des attentes, portées par eux', () => {
    const { elements } = importer();
    const attentes = elements.filter((e) => e.type === 'ATTENTE');

    const parQui = new Map(attentes.map((e) => [e.interlocuteur, e.texte]));
    expect(parQui.get('Sophie')).toContain('relancer le fournisseur');
    expect(parQui.get('Marc Lefevre')).toContain('valider le budget');
  });

  it('et ne sont jamais rangées parmi les choses à faire', () => {
    const { elements } = importer();
    const aFaire = elements.filter((e) => e.type === 'ENGAGEMENT' || e.type === 'TACHE');
    expect(aFaire.map((e) => e.texte).join(' ')).not.toContain('relancer le fournisseur');
  });

  it('changer de nom change de côté', () => {
    // Le même compte rendu, lu par Sophie : ses lignes deviennent ses engagements.
    const { elements } = importerCompteRendu(COMPTE_RENDU, 'Sophie', 'c-1', JOUR);
    const miens = elements.filter((e) => e.type === 'ENGAGEMENT');
    expect(miens.map((e) => e.texte).join(' ')).toContain('relancer le fournisseur');
    const attentes = elements.filter((e) => e.type === 'ATTENTE');
    expect(attentes.map((e) => e.interlocuteur)).toContain('Nicolas');
  });
});

describe('chaque élément renvoie à son passage', () => {
  it('les bornes citent exactement le compte rendu', () => {
    for (const element of importer().elements) {
      expect(COMPTE_RENDU.slice(element.debutCar, element.finCar).toLowerCase()).toContain(
        element.texte.toLowerCase().slice(0, 20),
      );
    }
  });

  it('aucun élément ne sort d’un passage absent', () => {
    // C'est le même filet que pour une capture vocale : le cœur écarte ce qui ne se
    // rattache pas, et rien n'atteint l'écran sans passage vérifié.
    for (const element of importer().elements) {
      expect(element.debutCar).toBeGreaterThanOrEqual(0);
      expect(element.finCar).toBeLessThanOrEqual(COMPTE_RENDU.length);
      expect(element.finCar).toBeGreaterThan(element.debutCar);
    }
  });
});

describe('confirmation avant engagement', () => {
  it('tout ce qui sort d’un compte rendu est marqué comme en venant', () => {
    // Un engagement tiré d'un compte rendu n'a pas été dit par celui qui le porte :
    // il a été écrit par quelqu'un d'autre, parfois en son absence.
    const { elements } = importer();
    expect(elements.length).toBeGreaterThan(0);
    expect(elements.every((e) => e.issuDeReunion)).toBe(true);
  });

  it('et n’arrive avec aucun plan, donc aucun rappel', () => {
    // Un rappel ne se pose que sur un plan, et un plan ne se pose qu'en Revue.
    for (const element of importer().elements) {
      expect(element.planDeclencheur ?? null).toBeNull();
      expect(element.verdict).toBe('EN_ATTENTE');
    }
  });
});

describe('les mêmes règles qu’une capture dictée', () => {
  it('le poids et son indice sont déduits, comme partout ailleurs', () => {
    const { elements } = importerCompteRendu(
      '- Nicolas : envoyer le planning, sinon le chantier est bloqué',
      'Nicolas',
      'c-1',
      JOUR,
    );
    // Sans poids, un engagement importé tomberait au fond de la Revue, c'est-à-dire
    // nulle part.
    expect(elements[0].poids).toBe('FORT');
    expect(elements[0].poidsIndice).toBeTruthy();
  });

  it('l’échéance aussi, avec l’expression qui l’a produite', () => {
    const { elements } = importerCompteRendu(
      '- Sophie : rendre le chiffrage avant vendredi',
      'Nicolas',
      'c-1',
      JOUR,
    );
    expect(elements[0].echeance).toBe('2026-09-25');
    expect(elements[0].echeanceIndice).toContain('avant vendredi');
  });
});

describe('ce qui n’est pas extrait', () => {
  it('une ligne trop courte ne produit rien', () => {
    const { elements } = importerCompteRendu('ok\n-\n42', 'Nicolas', 'c-1', JOUR);
    expect(elements).toEqual([]);
  });

  it('un compte rendu vide ne produit rien', () => {
    expect(importerCompteRendu('', 'Nicolas', 'c-1', JOUR).elements).toEqual([]);
  });

  it('le titre de la réunion ne devient pas une tâche', () => {
    const { elements } = importer();
    const titre = elements.find((e) => e.texte.startsWith('Réunion chantier'));
    expect(titre?.type ?? 'INFORMATION').toBe('INFORMATION');
  });
});
