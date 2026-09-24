/**
 * L'analyse distante : ce qui peut sortir, et ce qui ne sort jamais.
 *
 * Spec `analyse-distante` (change `analyse-typesafe`). Ces tests portent le
 * consentement avant tout le reste : aucune transmission n'a de sens tant qu'on ne
 * sait pas dire non.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { reinitialiserOuverture } from '../src/stockage/base.ts';
import {
  REGLAGES_PAR_DEFAUT,
  ecrireReglage,
  lireCapture,
  lireReglages,
  listerElements,
  majCapture,
  remplacerElements,
  toutEffacer,
} from '../src/stockage/depot.ts';
import { capturer } from '../src/services/pipeline.ts';
import { peutTransmettre } from '../src/analyse/transmission.ts';
import { completerRevue, typeAConfirmer } from '../src/analyse/origine.ts';
import { revueObjets, type ElementJson } from '../src/core/regles.ts';

const ALLUMEE = { analyseDistante: true, spheresExclues: [] as ('PROFESSIONNEL' | 'PERSONNEL')[] };

beforeEach(async () => {
  await toutEffacer();
});

describe('consentement stocké', () => {
  it('relit une capture ancienne, sans marquage, comme transmissible par défaut', async () => {
    const capture = await capturer({ texte: 'rappeler Marc', source: 'ECRITE', etatTranscription: 'OK' });
    const relue = await lireCapture(capture.id);
    expect(relue?.texte).toBe('rappeler Marc');
    // Absent : l'utilisateur n'a rien refusé. C'est le réglage, éteint par défaut,
    // qui décide si quoi que ce soit sort.
    expect(relue?.transmissible).toBeUndefined();
  });

  it('garde le refus de transmettre une capture à travers une réouverture de la base', async () => {
    const capture = await capturer({ texte: 'rendez-vous chez le médecin', source: 'ECRITE', etatTranscription: 'OK' });
    await majCapture(capture.id, { transmissible: false });

    reinitialiserOuverture();

    const relue = await lireCapture(capture.id);
    expect(relue?.transmissible).toBe(false);
    expect(relue?.texte).toBe('rendez-vous chez le médecin');
  });

  it('part d’une analyse distante éteinte et d’aucune sphère exclue', async () => {
    const reglages = await lireReglages();
    expect(reglages.analyseDistante).toBe(false);
    expect(reglages.spheresExclues).toEqual([]);
    expect(REGLAGES_PAR_DEFAUT.analyseDistante).toBe(false);
  });

  it('retient les sphères exclues à travers une réouverture de la base', async () => {
    await ecrireReglage('spheresExclues', ['PERSONNEL']);
    reinitialiserOuverture();
    expect((await lireReglages()).spheresExclues).toEqual(['PERSONNEL']);
  });
});

describe('décision de transmettre', () => {
  it('ne transmet rien quand le réglage est éteint, même une capture sans refus', () => {
    expect(
      peutTransmettre({ texte: 'préparer le budget du client', transmissible: undefined }, {
        ...ALLUMEE,
        analyseDistante: false,
      }),
    ).toEqual({ transmettre: false, raison: 'ANALYSE_DISTANTE_ETEINTE' });
  });

  it('ne transmet pas une capture marquée non transmissible', () => {
    expect(peutTransmettre({ texte: 'préparer le budget du client', transmissible: false }, ALLUMEE)).toEqual({
      transmettre: false,
      raison: 'CAPTURE_NON_TRANSMISSIBLE',
    });
  });

  it('ne transmet pas une capture dont la sphère locale est exclue', () => {
    expect(
      peutTransmettre({ texte: 'prendre rendez-vous chez le dentiste pour les enfants' }, {
        ...ALLUMEE,
        spheresExclues: ['PERSONNEL'],
      }),
    ).toEqual({ transmettre: false, raison: 'SPHERE_EXCLUE' });
  });

  it('tranche le doute vers l’appareil : sphère indécidable et exclusion active, rien ne part', () => {
    expect(
      peutTransmettre({ texte: 'rappeler Paul jeudi' }, { ...ALLUMEE, spheresExclues: ['PERSONNEL'] }),
    ).toEqual({ transmettre: false, raison: 'SPHERE_INDECIDABLE' });
  });

  it('transmet sinon : réglage allumé, aucun refus, sphère non exclue', () => {
    expect(
      peutTransmettre({ texte: 'préparer le budget du client' }, { ...ALLUMEE, spheresExclues: ['PERSONNEL'] }),
    ).toEqual({ transmettre: true });
    // Sans exclusion, une sphère indécidable n'est pas un motif de garder la capture.
    expect(peutTransmettre({ texte: 'rappeler Paul jeudi' }, ALLUMEE)).toEqual({ transmettre: true });
  });
});

/** Un élément sans aucun autre doute : seul son type peut le faire confirmer. */
function elementSur(ajout: Partial<ElementJson> = {}): ElementJson {
  return {
    id: 'el-1',
    captureId: 'cap-1',
    type: 'TACHE',
    texte: 'Préparer le budget du client',
    debutCar: 0,
    finCar: 28,
    poids: 'FORT',
    poidsConfiance: 0.9,
    poidsIndice: 'client',
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
    ...ajout,
  };
}

const JOUR = '2026-09-12';
const DISTANT = { moteur: 'TYPESAFE' as const, modele: 'jev-system-one' };

function entreeDe(e: ElementJson) {
  return completerRevue(revueObjets([e], JOUR), [e]).groupes[0].entrees[0];
}

describe('type rendu sous le seuil de confiance', () => {
  it('fait d’un type distant incertain une question à confirmer, hors acceptation groupée', () => {
    const e = elementSur({ typeConfiance: 0.6, origineAnalyse: DISTANT });
    const entree = entreeDe(e);
    expect(entree.aConfirmer).toBe(true);
    // L'origine traverse la file, pour que la Revue puisse la montrer.
    expect(entree.element.origineAnalyse).toEqual(DISTANT);
    expect(entree.element.typeConfiance).toBe(0.6);
    // Un rappel naît d'un plan posé à l'acceptation, et le cœur n'en tire que des
    // éléments acceptés : une entrée à confirmer sort de l'acceptation groupée
    // (`toutesSures` en Revue), donc aucun rappel sans décision une à une.
    expect(entree.element.verdict).toBe('EN_ATTENTE');
    expect(entree.element.planDeclencheur ?? null).toBeNull();
  });

  it('laisse un type distant sûr, ou un type local, hors des questions', () => {
    expect(entreeDe(elementSur({ typeConfiance: 0.9, origineAnalyse: DISTANT })).aConfirmer).toBe(false);
    // Les confiances locales ne sont pas calibrées : elles ne posent pas de question.
    expect(
      entreeDe(elementSur({ typeConfiance: 0.5, origineAnalyse: { moteur: 'LOCAL', modele: null } })).aConfirmer,
    ).toBe(false);
    // Un élément ancien, sans origine, se relit comme avant.
    expect(entreeDe(elementSur()).aConfirmer).toBe(false);
  });

  it('place l’incertain devant le sûr dans un même groupe', () => {
    const sur = elementSur({ id: 'el-a', typeConfiance: 0.9, origineAnalyse: DISTANT });
    const doute = elementSur({ id: 'el-b', typeConfiance: 0.6, origineAnalyse: DISTANT });
    const file = completerRevue(revueObjets([sur, doute], JOUR), [sur, doute]);
    expect(file.groupes[0].entrees.map((x) => x.element.id)).toEqual(['el-b', 'el-a']);
  });
});

describe('correction humaine face à l’analyse distante', () => {
  it('garde le type corrigé quand la capture est ré-analysée', async () => {
    const corrige = elementSur({
      id: 'el-corrige',
      type: 'DECISION',
      typeConfiance: 1,
      corrigeParHumain: true,
      origineAnalyse: DISTANT,
    });
    expect(typeAConfirmer(corrige)).toBe(false);
    await remplacerElements('cap-1', [corrige]);

    // Nouvelle passe du service : il retype le même passage, sans le savoir corrigé.
    await remplacerElements('cap-1', [
      elementSur({ id: 'el-nouveau', type: 'TACHE', typeConfiance: 0.95, origineAnalyse: DISTANT }),
    ]);

    const relu = (await listerElements()).find((x) => x.id === 'el-corrige');
    expect(relu?.type).toBe('DECISION');
    expect(relu?.corrigeParHumain).toBe(true);
  });
});
