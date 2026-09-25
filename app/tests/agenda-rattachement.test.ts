/**
 * Une capture et sa réunion — change `agenda-local`, tâche 3.3.
 *
 * Spec `agenda` — « Moments de réunion » : une capture faite pendant une réunion, ou
 * dans la foulée de sa fin, porte le rattachement ; spec « Agenda effacé » : il
 * survit à l'effacement de l'agenda.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ResultatLecture } from '../src/agenda/ics.ts';
import { preparerRattachement, reunionDuMoment } from '../src/agenda/rattachement.ts';
import type { EvenementJson } from '../src/core/regles.ts';
import { capturer } from '../src/services/pipeline.ts';
import { effacerAgenda, importerAgenda } from '../src/stockage/agenda.ts';
import { lireCapture, toutEffacer } from '../src/stockage/depot.ts';

/** Heure locale `AAAA-MM-JJTHH:MM`, décalée de `minutes` par rapport à maintenant. */
function local(minutes: number): string {
  const t = new Date(Date.now() + minutes * 60_000);
  return new Date(t.getTime() - t.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
}

function reunion(id: string, titre: string, debut: number, fin: number): EvenementJson {
  return { id, titre, debut: local(debut), fin: local(fin), participants: ['Marc Dupont'] };
}

async function agenda(...evenements: EvenementJson[]): Promise<void> {
  const lecture: ResultatLecture = {
    evenements,
    lus: evenements.length,
    ecartes: [],
    recurrencesNonComprises: 0,
    couvreDepuis: local(-3 * 24 * 60),
    couvreJusqua: local(30 * 24 * 60),
  };
  await importerAgenda(lecture);
}

beforeEach(async () => {
  await toutEffacer();
});

describe('rattachement d’office', () => {
  it('une capture faite pendant une réunion la porte', async () => {
    await agenda(reunion('comite', 'Comité', -20, 40));
    const capture = await capturer({ texte: 'Marc veut le budget', source: 'ECRITE', etatTranscription: 'OK' });

    await vi.waitFor(async () => {
      expect((await lireCapture(capture.id))?.agenda).toEqual({
        evenementId: 'comite',
        titre: 'Comité',
        participants: ['Marc Dupont'],
      });
    });
  });

  it('dans le quart d’heure qui suit la fin aussi, mais pas au-delà', async () => {
    await agenda(reunion('juste', 'Point', -40, -10), reunion('ancienne', 'Revue', -120, -60));
    expect((await reunionDuMoment(new Date()))?.evenementId).toBe('juste');

    await effacerAgenda();
    await agenda(reunion('ancienne', 'Revue', -120, -60));
    expect(await reunionDuMoment(new Date())).toBeNull();
  });

  it('un événement « toute la journée » n’est pas une réunion', async () => {
    await agenda({ ...reunion('salon', 'Salon', -60, 600), journeeEntiere: true });
    expect(await reunionDuMoment(new Date())).toBeNull();
  });

  it('sans agenda, la capture reste sans réunion', async () => {
    const capture = await capturer({ texte: 'une idée', source: 'ECRITE', etatTranscription: 'OK' });
    await new Promise((r) => setTimeout(r, 30));
    expect((await lireCapture(capture.id))?.agenda ?? null).toBeNull();
  });
});

describe('rattachement proposé', () => {
  it('une dépose préparée par Maintenant se pose sur la capture suivante, et une seule', async () => {
    await agenda(reunion('client', 'Client', 2, 60));
    preparerRattachement({ evenementId: 'client', titre: 'Client', participants: [], depose: true });

    const depose = await capturer({ texte: 'Je reprends le devis ligne 12', source: 'ECRITE', etatTranscription: 'OK' });
    expect(depose.agenda).toEqual({ evenementId: 'client', titre: 'Client', participants: [], depose: true });

    const suivante = await capturer({ texte: 'autre chose', source: 'ECRITE', etatTranscription: 'OK', agenda: null });
    expect(suivante.agenda ?? null).toBeNull();
  });

  it('scénario « Agenda effacé » — la capture garde son rattachement', async () => {
    await agenda(reunion('comite', 'Comité', -20, 40));
    const capture = await capturer({ texte: 'Marc veut le budget', source: 'ECRITE', etatTranscription: 'OK' });
    await vi.waitFor(async () => expect((await lireCapture(capture.id))?.agenda?.evenementId).toBe('comite'));

    await effacerAgenda();
    expect((await lireCapture(capture.id))?.agenda?.titre).toBe('Comité');
  });
});

describe('durée corrigée', () => {
  it('scénario « Durée corrigée » — conservée à travers une ré-analyse de la capture', async () => {
    const { analyserCapture } = await import('../src/services/pipeline.ts');
    const { elementsDeCapture, majElement } = await import('../src/stockage/depot.ts');
    const capture = await capturer({ texte: 'Envoyer le devis à Durand.', source: 'ECRITE', etatTranscription: 'OK', agenda: null });
    await analyserCapture(capture);
    const [element] = await elementsDeCapture(capture.id);
    expect(element.duree).toBe('COURTE');

    await majElement(element.id, { duree: 'LONGUE', dureeConfiance: 1, dureeIndice: 'fixée à la main', corrigeParHumain: true });
    await analyserCapture({ ...capture, analysee: false });

    const corrige = (await elementsDeCapture(capture.id)).find((e) => e.id === element.id);
    expect(corrige).toMatchObject({ duree: 'LONGUE', dureeConfiance: 1, corrigeParHumain: true });
  });
});
