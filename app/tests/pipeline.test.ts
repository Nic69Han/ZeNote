/**
 * La file de transcription.
 *
 * Le moteur lui-même (Vosk en WebAssembly) ne tourne pas ici — il se vérifie dans un
 * vrai navigateur, sur une vraie phrase, par `bout-en-bout.mjs`. Ce qui se vérifie
 * ici est ce que la file fait de ses réponses : où va le texte, ce qui est compté
 * comme essayé, ce qui est réessayé, et ce qui ne l'est jamais. C'est là que se
 * décide si une capture finit en Revue ou dans le vide.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { MoteurIndisponible } from '../src/audio/transcripteurLocal.ts';
import {
  analyserCapture,
  capturer,
  traiterFileTranscription,
  transcrireCapture,
  type AnalyseDistante,
} from '../src/services/pipeline.ts';
import { analyser } from '../src/analyse/index.ts';
import type { IssueAnalyseDistante, JugementPassage } from '../src/analyse/distante.ts';
import {
  capturesATranscrire,
  capturesEnSouffrance,
  ecrireReglage,
  elementsDeCapture,
  lireCapture,
  majCapture,
  retenirCorrections,
  toutEffacer,
} from '../src/stockage/depot.ts';

beforeEach(async () => {
  await toutEffacer();
});

/**
 * Ce que le moteur rend : du texte, et ce qu'il a mal entendu.
 *
 * Presque tous les cas d'ici ne s'intéressent pas au second, mais il fait partie de
 * la réponse depuis que les passages de faible confiance sont signalés — et un faux
 * moteur qui rendrait autre chose que le vrai ne vérifierait plus grand-chose.
 */
function dit(texte: string, passagesIncertains: { debutCar: number; finCar: number }[] = []) {
  return { texte, passagesIncertains };
}

/**
 * Une capture vocale telle que l'appui la laisse : de l'audio, pas de texte. Le
 * contenu de l'audio porte l'étiquette : c'est le seul moyen, pour un faux moteur
 * qui ne reçoit que l'audio, de savoir quelle capture il transcrit.
 */
function dictee(etiquette = 'son', creeLe?: string) {
  return capturer({
    texte: '',
    source: 'VOCALE',
    etatTranscription: 'ABSENTE',
    audio: new Blob([etiquette], { type: 'audio/webm' }),
  }).then(async (capture) => {
    if (creeLe) await majCapture(capture.id, { creeLe });
    return capture;
  });
}

describe('une capture vocale attend sa transcription', () => {
  it('est en file, pas en souffrance, tant que le moteur ne l’a pas tentée', async () => {
    const capture = await dictee();
    expect((await capturesATranscrire()).map((c) => c.id)).toEqual([capture.id]);
    expect(await capturesEnSouffrance()).toEqual([]);
  });

  it('ne met pas en file une capture écrite, ni une capture sans audio', async () => {
    await capturer({ texte: 'Rappeler Karim', source: 'ECRITE', etatTranscription: 'OK' });
    await capturer({ texte: '', source: 'VOCALE', etatTranscription: 'ECHEC', audio: null });
    expect(await capturesATranscrire()).toEqual([]);
  });
});

describe('transcrire une capture', () => {
  it('écrit le texte reconnu et compte l’essai', async () => {
    const capture = await dictee();

    const reussi = await transcrireCapture(capture, async () => dit('rappeler le couvreur'));

    expect(reussi).toBe(true);
    const relue = await lireCapture(capture.id);
    expect(relue?.texte).toBe('rappeler le couvreur');
    expect(relue?.etatTranscription).toBe('OK');
    expect(relue?.essaisTranscription).toBe(1);
    expect(await capturesATranscrire()).toEqual([]);
  });

  it('quand rien n’est reconnu, marque l’échec et met la capture en souffrance', async () => {
    const capture = await dictee();

    const reussi = await transcrireCapture(capture, async () => dit(''));

    expect(reussi).toBe(false);
    const relue = await lireCapture(capture.id);
    expect(relue?.etatTranscription).toBe('ECHEC');
    expect(relue?.essaisTranscription).toBe(1);
    // Elle sort de la file — la retenter ne changerait rien — et entre en souffrance,
    // où la Revue la présentera avec son audio, à écrire.
    expect(await capturesATranscrire()).toEqual([]);
    expect((await capturesEnSouffrance()).map((c) => c.id)).toEqual([capture.id]);
  });

  it('ne compte pas une panne passagère : la file réessaiera', async () => {
    const capture = await dictee();

    const reussi = await transcrireCapture(capture, async () => {
      throw new Error('modèle injoignable');
    });

    expect(reussi).toBe(false);
    const relue = await lireCapture(capture.id);
    expect(relue?.essaisTranscription ?? 0).toBe(0);
    expect(relue?.etatTranscription).toBe('ABSENTE');
    expect((await capturesATranscrire()).map((c) => c.id)).toEqual([capture.id]);
  });

  it('compte un navigateur qui ne peut pas : ce n’est pas passager', async () => {
    const capture = await dictee();

    await transcrireCapture(capture, async () => {
      throw new MoteurIndisponible();
    });

    const relue = await lireCapture(capture.id);
    expect(relue?.etatTranscription).toBe('INDISPONIBLE');
    expect(relue?.essaisTranscription).toBe(1);
    expect(await capturesATranscrire()).toEqual([]);
    expect((await capturesEnSouffrance()).map((c) => c.id)).toEqual([capture.id]);
  });

  it('compte un audio indéchiffrable : le réessayer ne changerait rien', async () => {
    const capture = await dictee();

    await transcrireCapture(capture, async () => {
      const erreur = new Error('audio illisible');
      erreur.name = 'EncodingError';
      throw erreur;
    });

    const relue = await lireCapture(capture.id);
    expect(relue?.etatTranscription).toBe('ECHEC');
    expect(relue?.essaisTranscription).toBe(1);
  });
});

describe('la file', () => {
  it('transcrit dans l’ordre de capture, puis analyse ce qui a du texte', async () => {
    // Semées dans le désordre, pour que l'ordre observé soit celui de la file et non
    // celui de l'insertion.
    const seconde = await dictee('seconde', '2026-09-17T09:01:00.000Z');
    const premiere = await dictee('premiere', '2026-09-17T09:00:00.000Z');
    const ordre: string[] = [];

    const transcrites = await traiterFileTranscription(async (audio) => {
      const etiquette = await audio.text();
      ordre.push(etiquette);
      return dit(etiquette === 'premiere' ? 'rappeler le couvreur pour le devis' : '');
    });

    expect(transcrites).toBe(1);
    expect(ordre).toEqual(['premiere', 'seconde']);
    // La première est passée dans l'analyse : elle a des éléments, et n'est plus à
    // transcrire. La seconde est en souffrance.
    expect((await elementsDeCapture(premiere.id)).length).toBeGreaterThan(0);
    expect((await lireCapture(premiere.id))?.analysee).toBe(true);
    expect((await capturesEnSouffrance()).map((c) => c.id)).toEqual([seconde.id]);
  });

  it('rapporte l’avancement à qui veut le montrer', async () => {
    const capture = await dictee();
    const vus: string[] = [];

    await traiterFileTranscription(
      async (_audio, surPartiel) => {
        surPartiel?.('rappeler');
        surPartiel?.('rappeler le couvreur');
        return dit('rappeler le couvreur');
      },
      (captureId, partiel) => vus.push(`${captureId}:${partiel}`),
    );

    expect(vus).toEqual([`${capture.id}:rappeler`, `${capture.id}:rappeler le couvreur`]);
  });

  it('ne tourne pas en double : deux appels simultanés partagent le même passage', async () => {
    await dictee();
    let appels = 0;
    const moteur = async () => {
      appels += 1;
      await new Promise((resoudre) => setTimeout(resoudre, 20));
      return dit('texte');
    };

    const [a, b] = await Promise.all([
      traiterFileTranscription(moteur),
      traiterFileTranscription(moteur),
    ]);

    expect(appels).toBe(1);
    expect(a).toBe(1);
    expect(b).toBe(1);
  });

  it('un élément né d’un passage mal entendu arrive marqué, prêt à être confirmé', async () => {
    // Spec `transcription` — « Passage inaudible ». Le moteur dit avoir mal entendu
    // toute la phrase ; l'élément qui en sort existe, mais ne doit pas se présenter
    // comme acquis. C'est le chemin complet qui est vérifié ici : le moteur, la
    // capture, l'analyse, puis la règle du cœur.
    const capture = await dictee();
    const phrase = 'rappeler le couvreur';

    await traiterFileTranscription(async () =>
      dit(phrase, [{ debutCar: 0, finCar: phrase.length }]),
    );

    expect((await lireCapture(capture.id))?.passagesIncertains).toEqual([
      { debutCar: 0, finCar: phrase.length },
    ]);
    const elements = await elementsDeCapture(capture.id);
    expect(elements.length).toBeGreaterThan(0);
    expect(elements.every((e) => e.transcriptionIncertaine)).toBe(true);
  });

  it('ce qui a été bien entendu n’est pas marqué', async () => {
    // L'autre moitié, et elle compte autant : une confirmation demandée sur des
    // éléments dont on est sûr s'use jusqu'à ne plus rien vouloir dire.
    const capture = await dictee();

    await traiterFileTranscription(async () => dit('rappeler le couvreur'));

    const elements = await elementsDeCapture(capture.id);
    expect(elements.length).toBeGreaterThan(0);
    expect(elements.some((e) => e.transcriptionIncertaine)).toBe(false);
  });

  it('donne au moteur le vocabulaire déjà corrigé', async () => {
    // Le lexique ne sert à rien s'il n'arrive pas jusqu'au moteur. Ce qu'il en fait
    // se vérifie dans `lexique.test.ts` ; ce qui se vérifie ici est le branchement,
    // qui est précisément ce qu'un test du moteur seul ne voit pas.
    await dictee();
    await retenirCorrections([{ malEntendu: 'carreleur', correction: 'couvreur', fois: 1 }]);
    let recu: unknown;

    await traiterFileTranscription(async (_audio, _surPartiel, lexique) => {
      recu = lexique;
      return dit('rappeler le couvreur');
    });

    expect(recu).toEqual([{ malEntendu: 'carreleur', correction: 'couvreur', fois: 1 }]);
  });

  it('laisse la file propre après une panne, pour le passage suivant', async () => {
    const capture = await dictee();

    await traiterFileTranscription(async () => {
      throw new Error('panne');
    });
    const transcrites = await traiterFileTranscription(async () => dit('rappeler le couvreur'));

    expect(transcrites).toBe(1);
    expect((await lireCapture(capture.id))?.texte).toBe('rappeler le couvreur');
  });
});

describe('analyse hybride : locale d’abord, distante pour le type et la sphère', () => {
  const JOUR_ANALYSE = '2026-09-12';
  const TEXTE = 'Promis à Claire le planning pour jeudi. Prendre rendez-vous chez le dentiste pour Léa.';

  /** Un service simulé qui note ce qu'il reçoit et rend l'issue voulue. */
  function service(issue: (passages: string[]) => IssueAnalyseDistante) {
    const recus: string[][] = [];
    const appel: AnalyseDistante = async (passages) => {
      recus.push(passages);
      return issue(passages);
    };
    return { appel, recus };
  }

  const jugeTout = (passages: string[]): IssueAnalyseDistante => ({
    issue: 'OK',
    modele: 'jev-1.13',
    jugements: passages.map(
      (_, i): JugementPassage => ({
        type: i === 0 ? 'ENGAGEMENT' : 'TACHE',
        typeConfiance: 0.9,
        sphere: i === 0 ? 'INDECIDABLE' : 'PERSONNEL',
        sphereConfiance: 0.85,
      }),
    ),
  });

  /** Ce qui ne dépend pas de l'identifiant tiré au hasard. */
  const sansId = (els: { id: string }[]) =>
    els.map(({ id: _id, ...reste }) => reste).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));

  async function capture(texte = TEXTE) {
    return capturer({ texte, source: 'ECRITE', etatTranscription: 'OK' });
  }

  it('n’appelle rien quand le réglage est éteint', async () => {
    const { appel, recus } = service(jugeTout);
    const c = await capture();
    await analyserCapture(c, JOUR_ANALYSE, appel);
    expect(recus).toHaveLength(0);
    expect((await lireCapture(c.id))?.repliAnalyse).toBeUndefined();
  });

  it('n’appelle rien pour une capture non transmissible, et l’analyse localement', async () => {
    await ecrireReglage('analyseDistante', true);
    const { appel, recus } = service(jugeTout);
    const c = await capture();
    await majCapture(c.id, { transmissible: false });

    await analyserCapture({ ...c, transmissible: false }, JOUR_ANALYSE, appel);

    expect(recus).toHaveLength(0);
    const elements = await elementsDeCapture(c.id);
    expect(elements.length).toBeGreaterThan(0);
    expect(elements.every((e) => e.origineAnalyse?.moteur === 'LOCAL')).toBe(true);
  });

  it('n’envoie que le texte exact des passages, et réécrit type, sphère et origine', async () => {
    await ecrireReglage('analyseDistante', true);
    const { appel, recus } = service(jugeTout);
    const c = await capture();

    await analyserCapture(c, JOUR_ANALYSE, appel);

    expect(recus).toHaveLength(1);
    for (const p of recus[0]) expect(TEXTE).toContain(p);
    const elements = (await elementsDeCapture(c.id)).sort((a, b) => a.debutCar - b.debutCar);
    expect(elements.map((e) => [e.type, e.sphere])).toEqual([
      ['ENGAGEMENT', null],
      ['TACHE', 'PERSONNEL'],
    ]);
    expect(elements.every((e) => e.origineAnalyse?.moteur === 'TYPESAFE' && e.origineAnalyse.modele === 'jev-1.13')).toBe(
      true,
    );
    expect((await lireCapture(c.id))?.repliAnalyse).toBe(false);
  });

  it('laisse texte et bornes de chaque élément tels que l’analyse locale les a posés', async () => {
    await ecrireReglage('analyseDistante', true);
    const c = await capture();
    await analyserCapture(c, JOUR_ANALYSE, service(jugeTout).appel);

    const locaux = analyser(TEXTE, c.id, JOUR_ANALYSE).elements;
    const distants = await elementsDeCapture(c.id);
    const bornes = (els: { texte: string; debutCar: number; finCar: number }[]) =>
      els.map((e) => [e.texte, e.debutCar, e.finCar]).sort();
    expect(bornes(distants)).toEqual(bornes(locaux));
    // Aucun texte inventé : chaque élément cite un passage présent dans la source.
    for (const e of distants) expect(TEXTE.slice(e.debutCar, e.finCar).length).toBeGreaterThan(0);
  });

  it.each<IssueAnalyseDistante>([
    { issue: 'HORS_LIGNE' },
    { issue: 'DELAI_DEPASSE' },
    { issue: 'NON_CONFIGURE' },
    { issue: 'REPONSE_INVALIDE' },
  ])('repli ($issue) : résultat identique à l’analyse locale seule, et repli noté', async (issue) => {
    await ecrireReglage('analyseDistante', true);
    const c = await capture();
    await analyserCapture(c, JOUR_ANALYSE, service(() => issue).appel);

    const locaux = analyser(TEXTE, c.id, JOUR_ANALYSE).elements;
    const stockes = await elementsDeCapture(c.id);
    expect(sansId(stockes)).toEqual(sansId(locaux));
    expect((await lireCapture(c.id))?.repliAnalyse).toBe(true);
  });

  it('garde sur l’appareil une capture de sphère exclue', async () => {
    await ecrireReglage('analyseDistante', true);
    await ecrireReglage('spheresExclues', ['PERSONNEL']);
    const { appel, recus } = service(jugeTout);
    await analyserCapture(await capture('Prendre rendez-vous chez le dentiste pour les enfants.'), JOUR_ANALYSE, appel);
    expect(recus).toHaveLength(0);
  });
});
