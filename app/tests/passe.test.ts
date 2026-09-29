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
import {
  LONGUEUR_EXTRAIT_PASSE,
  endormie,
  ligneDePasse,
  passePertinent,
} from '../src/services/echos.ts';
import {
  doitPresenter,
  noterIgnoree,
  noterUtilisee,
  retenueInitiale,
  rythme,
} from '../src/services/retenue.ts';
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

describe('Passé pertinent expliqué', () => {
  const NOTE = 'relancer le fournisseur sur le chiffrage du chantier de Bron';

  it('la ligne porte l’extrait de la note passée et la raison du rapprochement', () => {
    const echo = passePertinent(NOTE, 'c-3', PASSE, ELEMENTS, JOUR);
    expect(echo).not.toBeNull();
    const ligne = ligneDePasse(echo as NonNullable<typeof echo>);
    expect(ligne.extrait).toContain('chiffrage');
    // La raison vient de la recherche, telle quelle : non vide, et sans score.
    expect(ligne.raison.length).toBeGreaterThan(0);
    expect(ligne.raison).toBe(echo?.pourquoi.trim());
    expect(ligne.raison).not.toMatch(/\d+\s*%|score/i);
  });

  it('un extrait trop long est coupé, la raison jamais', () => {
    const longue = 'chantier '.repeat(30);
    const ligne = ligneDePasse({ captureId: 'c-1', extrait: longue, pourquoi: 'mots partagés' });
    expect(ligne.extrait.length).toBeLessThanOrEqual(LONGUEUR_EXTRAIT_PASSE + 1);
    expect(ligne.extrait.endsWith('…')).toBe(true);
    expect(ligne.raison).toBe('mots partagés');
  });

  it('un extrait court reste entier', () => {
    const ligne = ligneDePasse({ captureId: 'c-1', extrait: 'revoir le chiffrage', pourquoi: 'x' });
    expect(ligne.extrait).toBe('revoir le chiffrage');
  });
});

describe('Trois fois ignoré, le passé pertinent se fait plus rare', () => {
  const NOTE = 'relancer le fournisseur sur le chiffrage du chantier de Bron';

  it('le rappel n’est présenté qu’une fois sur deux occasions, puis rétabli par un « Voir »', () => {
    // Le passé est trouvé à chaque occasion : c'est la retenue qui décide de le montrer.
    let etat = retenueInitiale();
    for (let i = 0; i < 3; i += 1) {
      expect(passePertinent(NOTE, 'c-3', PASSE, ELEMENTS, JOUR)).not.toBeNull();
      const decision = doitPresenter(etat, 'PASSE_PERTINENT');
      expect(decision.presenter).toBe(true);
      etat = noterIgnoree(decision.etat, 'PASSE_PERTINENT');
    }

    const suivantes = [];
    for (let i = 0; i < 4; i += 1) {
      const decision = doitPresenter(etat, 'PASSE_PERTINENT');
      suivantes.push(decision.presenter);
      etat = decision.etat;
    }
    expect(suivantes).toEqual([false, true, false, true]);

    // Utilisé (« Voir » touché) : chaque occasion se présente de nouveau.
    etat = noterUtilisee(etat, 'PASSE_PERTINENT');
    expect(doitPresenter(etat, 'PASSE_PERTINENT').presenter).toBe(true);
    expect(rythme(etat, 'PASSE_PERTINENT').espacee).toBe(false);
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
