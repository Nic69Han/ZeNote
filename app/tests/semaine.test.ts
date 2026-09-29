/**
 * La semaine : trois groupes de constats, rien qui ressemble à une note.
 *
 * Spec `retour-semaine` — « Semaine ordinaire », « Groupe vide », « Aucun chiffre de
 * performance » et « Signal hebdomadaire ».
 *
 * Le piège que ces tests surveillent : un élément abandonné porte `faitLe`, comme un
 * élément fait. Sans le verdict, l'abandon serait compté comme un progrès — le
 * contraire de ce que dit l'écran, et une semaine flattée n'est pas un retour.
 */

import { describe, expect, it } from 'vitest';
import {
  bilan,
  invitationDisponible,
  joursEntre,
  jourDe,
} from '../src/services/semaine.ts';
import type { ElementStocke } from '../src/stockage/depot.ts';

const JOUR = '2026-09-29';

function element(id: string, extra: Partial<ElementStocke> = {}): ElementStocke {
  const texte = `élément ${id}`;
  return {
    id,
    captureId: 'c-1',
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    poids: 'MOYEN',
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
    ...extra,
  };
}

/** Le jour `n` jours avant `JOUR`. */
function ilYa(n: number): string {
  const d = new Date(`${JOUR}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

describe('Semaine ordinaire', () => {
  const elements = [
    element('fait-1', { faitLe: ilYa(1) }),
    element('fait-2', { faitLe: JOUR }),
    element('abandonne', { faitLe: `${ilYa(2)}T10:30:00.000Z`, verdict: 'REJETE' }),
    element('ecarte', { ecarteFois: 3, vuLe: ilYa(1) }),
  ];

  it('range chaque élément dans son groupe', () => {
    const semaine = bilan(elements, JOUR);
    expect(semaine.avance.map((l) => l.elementId).sort()).toEqual(['fait-1', 'fait-2']);
    expect(semaine.lache.map((l) => l.elementId)).toEqual(['abandonne']);
    expect(semaine.bloque.map((l) => l.elementId)).toEqual(['ecarte']);
  });

  it('cite l’élément, et le constat du cœur pour ce qui n’avance plus', () => {
    const semaine = bilan(elements, JOUR);
    expect(semaine.avance[0].texte).toMatch(/^élément fait-/);
    expect(semaine.bloque[0].motif).toMatch(/écarté 3 fois/);
  });

  it('un élément abandonné n’est pas compté comme avancé', () => {
    const semaine = bilan(elements, JOUR);
    expect(semaine.avance.map((l) => l.elementId)).not.toContain('abandonne');
  });

  it('seuls comptent les sept derniers jours', () => {
    const semaine = bilan(
      [
        element('limite', { faitLe: ilYa(6) }),
        element('trop-ancien', { faitLe: ilYa(7) }),
        element('futur', { faitLe: '2026-10-05' }),
      ],
      JOUR,
    );
    expect(semaine.avance.map((l) => l.elementId)).toEqual(['limite']);
  });
});

describe('ce qui est lâché', () => {
  it('compte aussi un élément classé « un jour » quand on sait quand', () => {
    const semaine = bilan(
      [
        element('un-jour', { verdict: 'UN_JOUR', vuLe: ilYa(3) }),
        element('un-jour-ancien', { verdict: 'UN_JOUR', vuLe: ilYa(30) }),
        // Date inconnue : on s'abstient plutôt que d'en inventer une.
        element('un-jour-sans-date', { verdict: 'UN_JOUR' }),
      ],
      JOUR,
    );
    expect(semaine.lache.map((l) => l.elementId)).toEqual(['un-jour']);
  });

  it('retient planPoseLe quand vuLe manque', () => {
    const semaine = bilan(
      [element('plan', { verdict: 'UN_JOUR', planPoseLe: `${ilYa(2)}T09:15` })],
      JOUR,
    );
    expect(semaine.lache.map((l) => l.elementId)).toEqual(['plan']);
  });

  it('un abandon d’il y a plus d’une semaine n’en est pas', () => {
    const semaine = bilan([element('vieux', { faitLe: ilYa(12), verdict: 'REJETE' })], JOUR);
    expect(semaine.lache).toEqual([]);
  });
});

describe('Groupe vide', () => {
  it('rien n’a été lâché : le groupe est vide, sans autre commentaire', () => {
    const semaine = bilan([element('fait', { faitLe: JOUR })], JOUR);
    expect(semaine.lache).toEqual([]);
    expect(semaine.bloque).toEqual([]);
  });

  it('sans aucun élément, les trois groupes sont vides', () => {
    expect(bilan([], JOUR)).toEqual({ avance: [], lache: [], bloque: [] });
  });
});

describe('Aucun chiffre de performance', () => {
  it('le bilan ne porte que des lignes citées : ni taux, ni pourcentage, ni série', () => {
    const semaine = bilan(
      [
        element('a', { faitLe: JOUR }),
        element('b', { faitLe: JOUR, verdict: 'REJETE' }),
        element('c', { ecarteFois: 4 }),
      ],
      JOUR,
    );
    expect(Object.keys(semaine).sort()).toEqual(['avance', 'bloque', 'lache']);
    const serialise = JSON.stringify(semaine);
    expect(serialise).not.toContain('%');
    for (const groupe of Object.values(semaine)) {
      for (const ligne of groupe) {
        expect(Object.keys(ligne).sort()).toEqual(
          expect.arrayContaining(['elementId', 'texte']),
        );
        expect(Object.values(ligne).every((v) => typeof v === 'string')).toBe(true);
      }
    }
  });
});

describe('Signal hebdomadaire', () => {
  it('l’écran n’a pas été ouvert depuis sept jours : la Revue le signale', () => {
    expect(invitationDisponible(ilYa(7), ilYa(30), JOUR)).toBe(true);
    expect(invitationDisponible(ilYa(20), ilYa(30), JOUR)).toBe(true);
  });

  it('et moins de sept jours après une ouverture, elle se tait', () => {
    expect(invitationDisponible(JOUR, ilYa(30), JOUR)).toBe(false);
    expect(invitationDisponible(ilYa(6), ilYa(30), JOUR)).toBe(false);
  });

  it('jamais ouvert : elle attend qu’une semaine d’usage existe', () => {
    expect(invitationDisponible(null, ilYa(2), JOUR)).toBe(false);
    expect(invitationDisponible(null, null, JOUR)).toBe(false);
    expect(invitationDisponible(null, `${ilYa(8)}T08:00:00.000Z`, JOUR)).toBe(true);
  });
});

describe('les dates', () => {
  it('un jour tel quel reste tel quel, un instant est ramené au jour vécu', () => {
    expect(jourDe('2026-09-22')).toBe('2026-09-22');
    expect(jourDe('2026-09-22T12:00:00')).toBe('2026-09-22');
    expect(jourDe(null)).toBeNull();
    expect(jourDe('n’importe quoi')).toBeNull();
  });

  it('compte les jours entre deux dates', () => {
    expect(joursEntre('2026-09-22', '2026-09-29')).toBe(7);
    expect(joursEntre('2026-09-29', '2026-09-29')).toBe(0);
  });
});
