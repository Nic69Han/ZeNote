/**
 * Les repères personnels : situer un résultat sans jamais rien inventer.
 *
 * Deux choses se vérifient, et la seconde compte autant que la première. D'un côté,
 * que les moments dont on se souvient — une réunion, une décision, une rencontre —
 * servent bien de repères. De l'autre, qu'aucun repère n'apparaît quand rien ne le
 * justifie : une citation « deux jours après » un événement qui n'a pas eu lieu ferait
 * reconnaître un faux souvenir.
 *
 * Les horodatages sont écrits en heure locale (sans suffixe Z) : le jour vécu est
 * celui que l'utilisateur a connu, et ne doit pas dépendre du fuseau de la machine.
 */

import { describe, expect, it } from 'vitest';
import {
  PORTEE_JOURS,
  friseDe,
  repereProche,
  reperesDepuis,
  situer,
  type CapturePourRepere,
  type ElementPourRepere,
  type Repere,
} from '../src/services/reperes.ts';

function capture(id: string, jour: string, texte = '', reunion = false): CapturePourRepere {
  return { id, creeLe: `${jour}T10:00:00`, texte, ...(reunion ? { reunion } : {}) };
}

function element(partiel: Partial<ElementPourRepere> & { captureId: string }): ElementPourRepere {
  return {
    type: 'TACHE',
    verdict: 'EN_ATTENTE',
    texte: 'Appeler Marc',
    ...partiel,
  };
}

const reunionDu12: Repere = {
  jour: '2026-09-12',
  libelle: 'réunion “point budget”',
  sorte: 'REUNION',
};

describe('Décision comme repère', () => {
  it('donne au 12 le repère de la décision acceptée', () => {
    const reperes = reperesDepuis(
      [capture('c1', '2026-09-12', 'On passe au fournisseur B.')],
      [
        element({
          captureId: 'c1',
          type: 'DECISION',
          verdict: 'ACCEPTE',
          texte: 'on passe au fournisseur B',
        }),
      ],
    );

    expect(reperes).toEqual([
      { jour: '2026-09-12', libelle: 'décision “on passe au fournisseur B”', sorte: 'DECISION' },
    ]);
  });

  it('ne retient pas une décision qui n’est pas acceptée', () => {
    const decision = (verdict: ElementPourRepere['verdict']) =>
      element({ captureId: 'c1', type: 'DECISION', verdict, texte: 'on arrête le lot 3' });

    for (const verdict of ['EN_ATTENTE', 'UN_JOUR', 'REJETE'] as const) {
      expect(reperesDepuis([capture('c1', '2026-09-12')], [decision(verdict)])).toEqual([]);
    }
  });

  it('ne fait pas repère d’une tâche acceptée : seule la décision marque un moment', () => {
    expect(
      reperesDepuis(
        [capture('c1', '2026-09-12')],
        [element({ captureId: 'c1', type: 'TACHE', verdict: 'ACCEPTE' })],
      ),
    ).toEqual([]);
  });

  it('tronque un libellé long à 50 caractères', () => {
    const longue = 'on renégocie entièrement le contrat de maintenance avec le fournisseur historique';
    const [repere] = reperesDepuis(
      [capture('c1', '2026-09-12')],
      [element({ captureId: 'c1', type: 'DECISION', verdict: 'ACCEPTE', texte: longue })],
    );
    const cite = repere.libelle.replace(/^décision “/, '').replace(/”$/, '');
    expect(cite.length).toBeLessThanOrEqual(50);
    expect(cite.endsWith('…')).toBe(true);
    expect(longue.startsWith(cite.slice(0, -1))).toBe(true);
  });
});

describe('les autres repères', () => {
  it('fait d’une réunion enregistrée un repère, cité par sa première ligne', () => {
    const reperes = reperesDepuis(
      [capture('c1', '2026-09-12', 'point budget\nOn a parlé du lot 3.', true)],
      [],
    );
    expect(reperes).toEqual([reunionDu12]);
  });

  it('reconnaît un compte rendu importé à ses éléments, même sans marque sur la capture', () => {
    // Les comptes rendus importés avant que la capture porte sa marque existent déjà.
    const reperes = reperesDepuis(
      [capture('c1', '2026-09-12', 'Réunion chantier')],
      [element({ captureId: 'c1', issuDeReunion: true })],
    );
    expect(reperes).toEqual([
      { jour: '2026-09-12', libelle: 'réunion “Réunion chantier”', sorte: 'REUNION' },
    ]);
  });

  it('ne cite rien d’une réunion pas encore transcrite, et le dit sans inventer de titre', () => {
    const [repere] = reperesDepuis([capture('c1', '2026-09-12', '', true)], []);
    expect(repere.libelle).toBe('réunion');
  });

  it('prend pour première mention le premier jour où une personne apparaît', () => {
    const reperes = reperesDepuis(
      [capture('c1', '2026-09-08'), capture('c2', '2026-09-03'), capture('c3', '2026-09-20')],
      [
        element({ captureId: 'c1', interlocuteur: 'Karim' }),
        element({ captureId: 'c2', interlocuteur: 'karim' }),
        element({ captureId: 'c3', interlocuteur: 'Karim' }),
      ],
    );
    expect(reperes).toEqual([
      { jour: '2026-09-03', libelle: 'première mention de karim', sorte: 'PREMIERE_MENTION' },
    ]);
  });

  it('ne compte pas une mention rejetée : c’est une erreur d’analyse, pas une rencontre', () => {
    expect(
      reperesDepuis(
        [capture('c1', '2026-09-08')],
        [element({ captureId: 'c1', interlocuteur: 'Karim', verdict: 'REJETE' })],
      ),
    ).toEqual([]);
  });

  it('ne tire rien d’ailleurs que des notes : sans note, aucun repère', () => {
    expect(reperesDepuis([], [])).toEqual([]);
    expect(reperesDepuis([capture('c1', '2026-09-08', 'penser aux pneus')], [])).toEqual([]);
  });

  it('range les repères du plus ancien au plus récent', () => {
    const reperes = reperesDepuis(
      [capture('c2', '2026-09-14', 'revue', true), capture('c1', '2026-09-02', 'lancement', true)],
      [],
    );
    expect(reperes.map((r) => r.jour)).toEqual(['2026-09-02', '2026-09-14']);
  });

  it('écarte une capture dont la date est illisible plutôt que de planter', () => {
    expect(
      reperesDepuis([{ id: 'c1', creeLe: 'hier soir', texte: 'x', reunion: true }], []),
    ).toEqual([]);
  });
});

describe('Citation proche d’une réunion', () => {
  it('situe une citation du 14 deux jours après la réunion du 12', () => {
    expect(situer('2026-09-14', [reunionDu12])).toBe('deux jours après la réunion “point budget”');
  });

  it('le dit en toutes lettres, de la veille au lendemain', () => {
    expect(situer('2026-09-11', [reunionDu12])).toBe('la veille de la réunion “point budget”');
    expect(situer('2026-09-12', [reunionDu12])).toBe('le jour de la réunion “point budget”');
    expect(situer('2026-09-13', [reunionDu12])).toBe('le lendemain de la réunion “point budget”');
    expect(situer('2026-09-15', [reunionDu12])).toBe('trois jours après la réunion “point budget”');
    expect(situer('2026-09-10', [reunionDu12])).toBe('deux jours avant la réunion “point budget”');
    expect(situer('2026-09-09', [reunionDu12])).toBe('trois jours avant la réunion “point budget”');
  });

  it('passe d’un mois à l’autre sans se tromper de jour', () => {
    const findeMois: Repere = { jour: '2026-09-30', libelle: 'décision “on signe”', sorte: 'DECISION' };
    expect(situer('2026-10-02', [findeMois])).toBe('deux jours après la décision “on signe”');
  });
});

describe('Aucun repère proche', () => {
  it('ne porte aucune mention quand aucun repère n’est à trois jours', () => {
    expect(PORTEE_JOURS).toBe(3);
    expect(situer('2026-09-16', [reunionDu12])).toBeNull();
    expect(situer('2026-09-08', [reunionDu12])).toBeNull();
  });

  it('ne porte aucune mention sans repère du tout', () => {
    expect(situer('2026-09-14', [])).toBeNull();
    expect(repereProche('2026-09-14', [])).toBeNull();
  });
});

describe('le repère le plus proche', () => {
  const decision: Repere = { jour: '2026-09-13', libelle: 'décision “on signe”', sorte: 'DECISION' };

  it('préfère le repère le plus proche', () => {
    expect(situer('2026-09-14', [reunionDu12, decision])).toBe('le lendemain de la décision “on signe”');
  });

  it('à égalité de distance, préfère le plus ancien', () => {
    // Le 14 est à deux jours de la réunion du 12, et à deux jours de ce repère du 16.
    const plusTard: Repere = { jour: '2026-09-16', libelle: 'décision “on relance”', sorte: 'DECISION' };
    expect(situer('2026-09-14', [plusTard, reunionDu12])).toBe(
      'deux jours après la réunion “point budget”',
    );
    // Dans n'importe quel ordre d'entrée.
    expect(situer('2026-09-14', [reunionDu12, plusTard])).toBe(
      'deux jours après la réunion “point budget”',
    );
  });

  it('le même jour, préfère la réunion à la décision et la décision à la rencontre', () => {
    const memeJour = (sorte: Repere['sorte'], libelle: string): Repere => ({
      jour: '2026-09-12',
      libelle,
      sorte,
    });
    const mention = memeJour('PREMIERE_MENTION', 'première mention de Karim');
    const decisionDuJour = memeJour('DECISION', 'décision “on signe”');
    const reunion = memeJour('REUNION', 'réunion “point budget”');
    expect(repereProche('2026-09-12', [mention, decisionDuJour, reunion])).toBe(reunion);
    expect(repereProche('2026-09-12', [mention, decisionDuJour])).toBe(decisionDuJour);
  });
});

describe('la frise', () => {
  const decision: Repere = { jour: '2026-09-13', libelle: 'décision “on signe”', sorte: 'DECISION' };
  const horsPeriode: Repere = { jour: '2026-08-01', libelle: 'réunion “lancement”', sorte: 'REUNION' };

  it('montre les jours cités, avec les repères qui les situent', () => {
    const frise = friseDe(['2026-09-14', '2026-09-14', '2026-09-16'], [reunionDu12, decision]);
    expect(frise.map((p) => p.jour)).toEqual(['2026-09-13', '2026-09-14', '2026-09-16']);
    expect(frise.find((p) => p.jour === '2026-09-14')?.citations).toBe(2);
    expect(frise.find((p) => p.jour === '2026-09-13')?.reperes).toEqual([decision]);
  });

  it('garde les repères sur lesquels une citation s’appuie, même hors de la période citée', () => {
    const frise = friseDe(['2026-09-14'], [reunionDu12]);
    expect(frise.map((p) => p.jour)).toEqual(['2026-09-12', '2026-09-14']);
  });

  it('ignore les repères qui ne situent aucune citation et tombent hors de la période', () => {
    const frise = friseDe(['2026-09-14'], [reunionDu12, horsPeriode]);
    expect(frise.flatMap((p) => p.reperes)).toEqual([reunionDu12]);
  });

  it('reste vide quand aucun repère n’est utile : une frise de dates seules n’aide personne', () => {
    expect(friseDe(['2026-09-14'], [horsPeriode])).toEqual([]);
    expect(friseDe(['2026-09-14'], [])).toEqual([]);
    expect(friseDe([], [reunionDu12])).toEqual([]);
  });
});
