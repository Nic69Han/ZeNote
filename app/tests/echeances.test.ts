/**
 * Les échéances : ce qu'on ose dater, et ce qu'on refuse d'inventer.
 *
 * Spec `extraction` — « Extraction des échéances », deux scénarios qui tirent dans
 * des directions opposées et doivent tenir ensemble.
 *
 * Dater ce qui est datable rend le produit utile : « avant vendredi », dit un mardi,
 * est une vraie échéance et la traiter comme telle évite d'y repenser. Inventer une
 * date sur « dans les prochaines semaines » est l'erreur inverse, et elle est plus
 * grave : la date devient une promesse que personne n'a faite, le produit la dit en
 * retard, et on se retrouve avec un reproche fondé sur rien.
 *
 * L'expression d'origine reste attachée à l'élément dans les deux cas : c'est elle
 * qui permet de voir d'un coup d'œil qu'une déduction est juste.
 */

import { describe, expect, it } from 'vitest';
import { analyser } from '../src/analyse/index.ts';
import { repererEcheance } from '../src/analyse/dates.ts';

/** Le mardi 22 septembre 2026. Toutes les déductions relatives partent de là. */
const MARDI = '2026-09-22';

describe('expression relative', () => {
  it('« avant vendredi », dit un mardi, tombe le vendredi de la même semaine', () => {
    const echeance = repererEcheance('envoyer le devis avant vendredi', MARDI);
    expect(echeance?.date).toBe('2026-09-25');
  });

  it('et l’expression reste attachée, mot pour mot', () => {
    const { elements } = analyser('envoyer le devis avant vendredi', 'c-1', MARDI);
    const avecDate = elements.find((e) => e.echeance);
    expect(avecDate?.echeance).toBe('2026-09-25');
    expect(avecDate?.echeanceIndice).toContain('avant vendredi');
    expect(avecDate?.horizon).toBeNull();
  });

  it('un jour déjà passé dans la semaine désigne la semaine suivante', () => {
    // Dit un mardi, « lundi » ne peut pas être la veille.
    expect(repererEcheance('voir Marc lundi', MARDI)?.date).toBe('2026-09-28');
  });

  it('les autres repères relatifs tiennent aussi', () => {
    expect(repererEcheance('rappeler demain', MARDI)?.date).toBe('2026-09-23');
    expect(repererEcheance('voir ça après-demain', MARDI)?.date).toBe('2026-09-24');
    expect(repererEcheance('dans trois jours', MARDI)?.date).toBe('2026-09-25');
    expect(repererEcheance('le 12 mars', MARDI)?.date).toBe('2027-03-12');
  });
});

describe('expression floue', () => {
  const flouesEtHorizons = [
    ['relancer dans les prochaines semaines', 'SEMAINES'],
    ['relancer dans les prochains jours', 'JOURS'],
    ['revoir ça dans les prochains mois', 'MOIS'],
    ['relancer dans quelques semaines', 'SEMAINES'],
    ['reprendre ça ces prochains jours', 'JOURS'],
    ['y revenir bientôt', 'SEMAINES'],
    ['voir ça quand j’aurai le temps', 'SEMAINES'],
  ] as const;

  it('n’invente aucune date, et rend l’ordre de grandeur', () => {
    for (const [phrase, horizon] of flouesEtHorizons) {
      const echeance = repererEcheance(phrase, MARDI);
      expect(echeance, phrase).not.toBeNull();
      expect(echeance?.date, phrase).toBeNull();
      expect(echeance?.horizon, phrase).toBe(horizon);
    }
  });

  it('l’élément est sans échéance, avec son horizon et son expression', () => {
    const { elements } = analyser('relancer Karim dans les prochaines semaines', 'c-1', MARDI);
    const element = elements.find((e) => e.horizon);
    expect(element?.echeance).toBeNull();
    expect(element?.horizon).toBe('SEMAINES');
    expect(element?.echeanceIndice).toContain('prochaines semaines');
  });

  it('« dans les prochaines semaines » ne se fait pas dater par la règle des durées', () => {
    // Le piège : la phrase contient « semaines », et une règle de durée relative en
    // tirerait une date au jour près — exactement ce que le scénario interdit.
    expect(repererEcheance('dans les prochaines semaines', MARDI)?.date).toBeNull();
    // Alors que « dans deux semaines » est une vraie durée, et se date.
    expect(repererEcheance('dans deux semaines', MARDI)?.date).toBe('2026-10-06');
  });

  it('une confiance basse, parce que c’est une lecture et non une mesure', () => {
    const flou = repererEcheance('relancer dans les prochaines semaines', MARDI);
    const ferme = repererEcheance('relancer avant vendredi', MARDI);
    expect(flou!.confiance).toBeLessThan(ferme!.confiance);
  });
});

describe('ni l’un ni l’autre', () => {
  it('une phrase sans repère de temps ne porte ni date ni horizon', () => {
    const echeance = repererEcheance('rappeler le couvreur pour le devis', MARDI);
    expect(echeance).toBeNull();
  });
});
