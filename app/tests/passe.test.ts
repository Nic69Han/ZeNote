/**
 * Le rappel proactif du passé pertinent.
 *
 * Spec `recherche` — « Élément passé pertinent proposé » et « Suggestion ignorable ».
 *
 * Une note dictée sur un sujet déjà traité arrive sans son passé : on redemande ce
 * qu'on sait déjà, on repromet ce qu'on a promis, on refait une décision qu'on avait
 * prise. Le produit a ce passé sous la main et ne le montrait jamais.
 *
 * Le danger est de l'autre côté, et c'est lui que ces tests surveillent : un rappel
 * qui se déclenche à chaque capture devient un décor, et l'on cesse de le lire le
 * jour où il aurait servi. Se taire est donc le comportement par défaut.
 */

import { describe, expect, it } from 'vitest';
import { endormie, passePertinent } from '../src/services/echos.ts';
import type { CaptureJson, ElementJson } from '../src/core/regles.ts';

const JOUR = '2026-09-25';

function capture(id: string, texte: string): CaptureJson {
  return { id, texte, creeLe: '2026-09-22T10:00:00.000Z', jour: '2026-09-22' };
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

const PASSE = [
  capture('c-1', 'revoir le chiffrage du chantier de Bron avec le fournisseur'),
  capture('c-2', 'acheter du pain et des tomates'),
];
const ELEMENTS = [
  element('e-1', 'c-1', 'revoir le chiffrage du chantier de Bron avec le fournisseur'),
  element('e-2', 'c-2', 'acheter du pain et des tomates'),
];

describe('quand il parle', () => {
  it('retrouve ce qui a déjà été dit sur le même sujet', () => {
    const echo = passePertinent(
      'relancer le fournisseur sur le chiffrage du chantier de Bron',
      'c-3',
      PASSE,
      ELEMENTS,
      JOUR,
    );
    expect(echo?.captureId).toBe('c-1');
  });

  it('et dit pourquoi, sans proposer d’action', () => {
    const echo = passePertinent(
      'relancer le fournisseur sur le chiffrage du chantier de Bron',
      'c-3',
      PASSE,
      ELEMENTS,
      JOUR,
    );
    expect(echo?.pourquoi.length).toBeGreaterThan(0);
    expect(echo?.extrait).toContain('chiffrage');
  });
});

describe('quand il se tait', () => {
  it('sur un sujet neuf', () => {
    expect(
      passePertinent('prendre rendez-vous chez le dentiste', 'c-3', PASSE, ELEMENTS, JOUR),
    ).toBeNull();
  });

  it('sur une note trop courte pour être un sujet', () => {
    // « rappeler Marc » ressemble à tout, et ne dit rien de ce dont il s'agit.
    expect(passePertinent('rappeler Marc', 'c-3', PASSE, ELEMENTS, JOUR)).toBeNull();
  });

  it('quand il n’y a pas de passé', () => {
    expect(
      passePertinent('revoir le chiffrage du chantier de Bron', 'c-1', [PASSE[0]], [], JOUR),
    ).toBeNull();
  });

  it('et il ne se propose jamais lui-même', () => {
    const echo = passePertinent(
      'revoir le chiffrage du chantier de Bron avec le fournisseur',
      'c-1',
      PASSE,
      ELEMENTS,
      JOUR,
    );
    expect(echo?.captureId ?? null).not.toBe('c-1');
  });

  it('sur une ressemblance de surface, il ne dit rien', () => {
    // Deux mots courants en commun ne font pas un même sujet.
    expect(
      passePertinent('acheter un nouveau téléphone pour le bureau', 'c-3', PASSE, ELEMENTS, JOUR),
    ).toBeNull();
  });
});

describe('la décroissance : ce qui cesse de se proposer', () => {
  const vieille: CaptureJson = {
    id: 'c-vieux',
    texte: 'revoir le chiffrage du chantier de Bron avec le fournisseur',
    creeLe: '2026-01-05T10:00:00.000Z',
    jour: '2026-01-05',
  };

  it('une note de l’an dernier ne remonte plus d’elle-même', () => {
    // Elle donnerait l'impression d'un outil qui ressasse, et l'on cesserait de
    // lire ses suggestions — y compris le jour où l'une aurait servi.
    expect(endormie(vieille, JOUR)).toBe(true);
    expect(
      passePertinent(
        'relancer le fournisseur sur le chiffrage du chantier de Bron',
        'c-3',
        [vieille],
        [],
        JOUR,
      ),
    ).toBeNull();
  });

  it('mais elle remonte encore si elle porte quelque chose d’ouvert', () => {
    // Un dossier en cours n'est pas du passé, quel que soit son âge.
    const ouvert = element('e-vieux', 'c-vieux', 'revoir le chiffrage du chantier de Bron');
    const echo = passePertinent(
      'relancer le fournisseur sur le chiffrage du chantier de Bron',
      'c-3',
      [vieille],
      [ouvert],
      JOUR,
    );
    expect(echo?.captureId).toBe('c-vieux');
  });

  it('et rien n’est supprimé : la capture est toujours là', () => {
    // La décroissance ne touche qu'à la mise en avant. C'est la différence entre
    // ranger et jeter.
    expect(vieille.texte).toContain('chiffrage');
    expect(endormie({ ...vieille, creeLe: '2026-09-20T10:00:00.000Z' }, JOUR)).toBe(false);
  });
});
