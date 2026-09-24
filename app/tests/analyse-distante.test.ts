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
  majCapture,
  toutEffacer,
} from '../src/stockage/depot.ts';
import { capturer } from '../src/services/pipeline.ts';
import { peutTransmettre } from '../src/analyse/transmission.ts';

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
