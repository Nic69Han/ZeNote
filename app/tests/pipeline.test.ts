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
  capturer,
  traiterFileTranscription,
  transcrireCapture,
} from '../src/services/pipeline.ts';
import {
  capturesATranscrire,
  capturesEnSouffrance,
  elementsDeCapture,
  lireCapture,
  majCapture,
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
