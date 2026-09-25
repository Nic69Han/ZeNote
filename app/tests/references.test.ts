/**
 * Les références implicites, vues depuis la surface.
 *
 * Le classement et le refus de trancher appartiennent au cœur, et `ResolutionTest`
 * s'en charge. Ce qui se vérifie ici est le branchement, qui est la moitié qu'un
 * test de cœur ne voit pas : que la mémoire se reconstruit bien depuis ce que la
 * surface détient, et qu'une ambiguïté remonte jusqu'à l'écran.
 *
 * La mémoire n'est stockée nulle part. C'est un choix, pas un oubli : elle est
 * dérivée des captures et des éléments, donc reconstructible, donc sans migration ni
 * réparation — et elle ne peut pas se mettre à contredire les notes dont elle sort.
 */

import { describe, expect, it } from 'vitest';
import { referencesAResoudre, type CaptureJson, type ElementJson } from '../src/core/regles.ts';

const MAINTENANT = '2026-09-22T09:00:00Z';

function capture(id: string, texte: string, ilYaJours: number): CaptureJson {
  const quand = new Date(Date.parse(MAINTENANT) - ilYaJours * 86_400_000);
  return { id, texte, creeLe: quand.toISOString() };
}

function element(
  id: string,
  captureId: string,
  texte: string,
  interlocuteur: string,
): ElementJson {
  return {
    id,
    captureId,
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    interlocuteur,
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
  };
}

describe('la mémoire se reconstruit depuis les notes', () => {
  it('un prénom connu d’une seule personne ne pose aucune question', () => {
    const captures = [capture('c-1', 'envoyer le chiffrage à Sophie', 2)];
    const elements = [element('e-1', 'c-1', 'envoyer le chiffrage à Sophie', 'Sophie')];

    expect(referencesAResoudre(captures, elements, MAINTENANT)).toEqual([]);
  });

  it('sans interlocuteur, il n’y a rien à résoudre', () => {
    const captures = [capture('c-1', 'relire le budget', 1)];
    const elements = [
      { ...element('e-1', 'c-1', 'relire le budget', 'Marc'), interlocuteur: null },
    ];
    expect(referencesAResoudre(captures, elements, MAINTENANT)).toEqual([]);
  });
});

describe('ambiguïté non résolue', () => {
  /**
   * Le cas réel : une correction a donné son nom complet à un Marc. La mémoire en
   * connaît donc deux formes, et « Marc » tout seul peut désigner l'une ou l'autre.
   */
  const captures = [
    capture('c-1', 'voir le budget Atlas avec Marc Dupuis', 2),
    capture('c-2', 'organiser le déménagement avec Marc Lefevre', 3),
    capture('c-3', 'rappeler Marc', 0),
  ];
  const elements = [
    element('e-1', 'c-1', 'voir le budget Atlas avec Marc Dupuis', 'Marc Dupuis'),
    element('e-2', 'c-2', 'organiser le déménagement avec Marc Lefevre', 'Marc Lefevre'),
    element('e-3', 'c-3', 'rappeler Marc', 'Marc'),
  ];

  it('pose la question plutôt que de choisir', () => {
    const resolutions = referencesAResoudre(captures, elements, MAINTENANT);
    const question = resolutions.find((r) => r.elementId === 'e-3');

    expect(question, 'la référence ambiguë remonte').toBeTruthy();
    expect(question!.aQuestionner).toBe(true);
    expect(question!.retenu ?? null).toBeNull();
  });

  it('rend les candidats classés, chacun avec ce qui le place là', () => {
    const question = referencesAResoudre(captures, elements, MAINTENANT).find(
      (r) => r.elementId === 'e-3',
    )!;

    expect(question.candidats.length).toBeGreaterThan(1);
    for (const candidat of question.candidats) {
      expect(candidat.nom).toBeTruthy();
      // Sans cette phrase, on accepte le premier — ce qui revient à laisser le
      // système choisir silencieusement.
      expect(candidat.appui.length).toBeGreaterThan(0);
    }
  });

  it('ne remonte que ce qui apprend quelque chose', () => {
    // Les deux Marc nommés en entier ne posent aucune question : ils se désignent
    // eux-mêmes. Seule la référence nue en pose une.
    const resolutions = referencesAResoudre(captures, elements, MAINTENANT);
    expect(resolutions.map((r) => r.elementId)).toEqual(['e-3']);
  });
});

describe('prénom résolu par le contexte', () => {
  it('le sujet départage deux homonymes, et la résolution le dit', () => {
    const captures = [
      capture('c-1', 'le budget Atlas est à revoir avec Marc Dupuis', 1),
      capture('c-2', 'le déménagement des bureaux avec Marc Lefevre', 60),
      capture('c-3', 'voir avec Marc pour le budget Atlas', 0),
    ];
    const elements = [
      element('e-1', 'c-1', 'le budget Atlas est à revoir avec Marc Dupuis', 'Marc Dupuis'),
      element('e-2', 'c-2', 'le déménagement des bureaux avec Marc Lefevre', 'Marc Lefevre'),
      element('e-3', 'c-3', 'voir avec Marc pour le budget Atlas', 'Marc'),
    ];

    const resolution = referencesAResoudre(captures, elements, MAINTENANT).find(
      (r) => r.elementId === 'e-3',
    )!;

    // Qu'elle tranche ou qu'elle demande, le bon candidat est en tête et son appui
    // cite le sujet qui l'a placé là.
    expect(resolution.candidats[0].nom).toBe('Marc Dupuis');
    expect(resolution.candidats[0].appui).toContain('budget');
  });
});
