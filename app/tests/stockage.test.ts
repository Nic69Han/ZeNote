/**
 * Le stockage local : la promesse « rien ne se perd ».
 *
 * IndexedDB est simulé par `fake-indexeddb`, qui respecte la sémantique des
 * transactions — c'est précisément ce que ces tests vérifient.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import type { ElementJson } from '../src/core/regles.ts';
import {
  capturesAAnalyser,
  capturesEnSouffrance,
  elementsDeCapture,
  lireCapture,
  lireReglages,
  listerCaptures,
  listerElements,
  listerElementsActifs,
  ecrireReglage,
  majCapture,
  majElement,
  remplacerElements,
  supprimerCapture,
  toutEffacer,
  type Capture,
} from '../src/stockage/depot.ts';
import { analyserCapture, capturer, traiterFileAnalyse } from '../src/services/pipeline.ts';

const JOUR = '2026-09-12';

function elementDe(partiel: Partial<ElementJson> & { id: string }): ElementJson {
  return {
    captureId: 'cap-1',
    type: 'TACHE',
    texte: 'Appeler Marc',
    debutCar: 0,
    finCar: 12,
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
    ...partiel,
  };
}

beforeEach(async () => {
  await toutEffacer();
});

describe('captures', () => {
  it('rend la main seulement une fois la capture écrite et relisible', async () => {
    const capture = await capturer({
      texte: 'appeler Marc avant vendredi',
      source: 'VOCALE',
      etatTranscription: 'OK',
      dureeMs: 4200,
    });
    // À la résolution de `capturer`, la donnée doit déjà être relisible : c'est
    // cette garantie qui autorise à émettre le retour de confirmation.
    const relue = await lireCapture(capture.id);
    expect(relue?.texte).toBe('appeler Marc avant vendredi');
    expect(relue?.source).toBe('VOCALE');
    expect(relue?.analysee).toBe(false);
  });

  it('survit à une réouverture de la base', async () => {
    await capturer({ texte: 'note un', source: 'ECRITE', etatTranscription: 'OK' });
    await capturer({ texte: 'note deux', source: 'ECRITE', etatTranscription: 'OK' });
    const captures = await listerCaptures();
    expect(captures.map((c) => c.texte)).toContain('note un');
    expect(captures).toHaveLength(2);
  });

  it('conserve une capture non transcrite au lieu de la perdre', async () => {
    const capture = await capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'INDISPONIBLE',
      dureeMs: 9000,
    });
    const relue = await lireCapture(capture.id);
    expect(relue?.etatTranscription).toBe('INDISPONIBLE');
    // Sans texte, rien à analyser : elle reste en file, intacte.
    expect(await capturesAAnalyser()).toEqual([]);
  });

  it("marque une capture interrompue comme potentiellement incomplète", async () => {
    const capture = await capturer({
      texte: 'début de phrase',
      source: 'VOCALE',
      etatTranscription: 'OK',
      incomplete: true,
    });
    expect((await lireCapture(capture.id))?.incomplete).toBe(true);
  });
});

describe('file d’analyse', () => {
  it('analyse les captures en attente et produit des éléments ancrés', async () => {
    await capturer({
      texte: 'Voir avec Marc pour le budget avant vendredi, c’est urgent.',
      source: 'VOCALE',
      etatTranscription: 'OK',
    });
    const produits = await traiterFileAnalyse(JOUR);
    expect(produits).toBeGreaterThan(0);
    expect(await capturesAAnalyser()).toEqual([]);

    const elements = await listerElements();
    expect(elements[0].interlocuteur).toBe('Marc');
    expect(elements[0].poidsIndice).toBeTruthy();
  });

  it('rejouer l’analyse ne crée pas de doublon', async () => {
    const capture = await capturer({
      texte: 'Appeler Marc. Relire le budget.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await analyserCapture(capture, JOUR);
    const premierPassage = await elementsDeCapture(capture.id);
    await analyserCapture({ ...capture, analysee: false }, JOUR);
    const secondPassage = await elementsDeCapture(capture.id);
    expect(secondPassage).toHaveLength(premierPassage.length);
  });

  it('ne touche ni à la source ni aux décisions humaines lors d’une ré-analyse', async () => {
    const capture = await capturer({
      texte: 'Appeler Marc. Relire le budget.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await analyserCapture(capture, JOUR);
    const [premier] = await elementsDeCapture(capture.id);
    await majElement(premier.id, { verdict: 'ACCEPTE', planDeclencheur: 'ce soir' });

    await analyserCapture({ ...capture, analysee: false }, JOUR);

    const survivant = (await elementsDeCapture(capture.id)).find((e) => e.id === premier.id);
    expect(survivant?.verdict).toBe('ACCEPTE');
    expect(survivant?.planDeclencheur).toBe('ce soir');
    expect((await lireCapture(capture.id))?.texte).toBe('Appeler Marc. Relire le budget.');
  });
});

describe('éléments', () => {
  it('remplace la couche dérivée mais garde ce que l’humain a décidé', async () => {
    await remplacerElements('cap-1', [
      elementDe({ id: 'a' }),
      elementDe({ id: 'b', verdict: 'ACCEPTE' }),
    ]);
    await remplacerElements('cap-1', [elementDe({ id: 'c' })]);
    const restants = (await elementsDeCapture('cap-1')).map((e) => e.id).sort();
    expect(restants).toEqual(['b', 'c']);
  });

  it('applique une décision humaine qui prime sur la déduction', async () => {
    await remplacerElements('cap-1', [elementDe({ id: 'a', poids: 'FAIBLE' })]);
    const corrige = await majElement('a', {
      poids: 'FORT',
      poidsIndice: 'poids fixé à la main',
      corrigeParHumain: true,
    });
    expect(corrige.poids).toBe('FORT');
    expect(corrige.corrigeParHumain).toBe(true);
  });

  it('sort des éléments actifs ce qui a été marqué fait, sans rien supprimer', async () => {
    await remplacerElements('cap-1', [
      elementDe({ id: 'a', verdict: 'ACCEPTE' }),
      elementDe({ id: 'b', verdict: 'ACCEPTE' }),
    ]);
    await majElement('a', { faitLe: '2026-09-12T10:00:00.000Z' });
    expect((await listerElementsActifs()).map((e) => e.id)).toEqual(['b']);
    expect(await listerElements()).toHaveLength(2);
  });

  it('refuse de modifier un élément inexistant plutôt que d’en créer un', async () => {
    await expect(majElement('fantome', { verdict: 'ACCEPTE' })).rejects.toThrow();
  });
});

describe('réglages', () => {
  it('part de valeurs par défaut et retient un choix', async () => {
    expect((await lireReglages()).theme).toBe('auto');
    await ecrireReglage('theme', 'sombre');
    expect((await lireReglages()).theme).toBe('sombre');
  });
});

describe('aucune décision demandée à la capture', () => {
  it('n’exige que le texte et sa provenance', async () => {
    const capture: Capture | undefined = await lireCapture(
      (await capturer({ texte: 'juste une idée', source: 'ECRITE', etatTranscription: 'OK' })).id,
    );
    // Ni titre, ni dossier, ni projet, ni priorité : aucun de ces champs n'existe.
    // Ce qui figure ici est soit la note elle-même, soit un fait constaté sur elle —
    // jamais un rangement demandé à celui qui l'a déposée.
    expect(Object.keys(capture ?? {}).sort()).toEqual([
      'aAudio',
      'analysee',
      'audio',
      'audioOctets',
      'audioType',
      'creeLe',
      'dureeMs',
      'etatTranscription',
      'id',
      'incomplete',
      'source',
      'texte',
    ]);
  });
});

describe('captures en souffrance', () => {
  it('relève une dictée que le moteur a tentée sans rien reconnaître', async () => {
    const perdue = await capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'ECHEC',
      audio: new Blob(['son']),
    });
    await majCapture(perdue.id, { essaisTranscription: 1 });

    const enSouffrance = await capturesEnSouffrance();
    expect(enSouffrance.map((c) => c.id)).toEqual([perdue.id]);
    // Et elle n'est bien pas analysable : c'est tout le problème.
    expect(await capturesAAnalyser()).toEqual([]);
  });

  it('ne compte pas comme perdue une capture que l’analyse peut encore prendre', async () => {
    await capturer({ texte: 'Rappeler Karim', source: 'VOCALE', etatTranscription: 'OK' });
    expect(await capturesEnSouffrance()).toEqual([]);
  });

  it('ne compte pas comme perdue une dictée que le moteur n’a pas encore tentée', async () => {
    // Elle a son audio et personne ne l'a lue : elle est en file, pas en souffrance.
    await capturer({ texte: '', source: 'VOCALE', etatTranscription: 'ABSENTE', audio: new Blob(['son']) });
    expect(await capturesEnSouffrance()).toEqual([]);
  });

  it('compte comme perdue une dictée sans audio : il n’y a rien à transcrire', async () => {
    const perdue = await capturer({ texte: '', source: 'VOCALE', etatTranscription: 'ECHEC', audio: null });
    expect((await capturesEnSouffrance()).map((c) => c.id)).toEqual([perdue.id]);
  });

  it('cesse de la relever une fois reprise à la main et analysée', async () => {
    const perdue = await capturer({ texte: '', source: 'VOCALE', etatTranscription: 'ECHEC' });
    await majCapture(perdue.id, { essaisTranscription: 1 });

    await majCapture(perdue.id, {
      texte: 'Rappeler le couvreur',
      etatTranscription: 'OK',
      analysee: false,
    });
    // Reprise : elle redevient analysable, et sort des captures en souffrance.
    expect(await capturesEnSouffrance()).toEqual([]);
    expect((await capturesAAnalyser()).map((c) => c.id)).toEqual([perdue.id]);
  });

  it('rend les plus récentes d’abord : on reprend ce qu’on vient de dire', async () => {
    const vieille = await capturer({ texte: '', source: 'VOCALE', etatTranscription: 'ECHEC' });
    await majCapture(vieille.id, { creeLe: '2026-01-01T09:00:00.000Z', essaisTranscription: 1 });
    const recente = await capturer({ texte: '', source: 'VOCALE', etatTranscription: 'ECHEC' });
    await majCapture(recente.id, { essaisTranscription: 1 });

    const enSouffrance = await capturesEnSouffrance();
    expect(enSouffrance.map((c) => c.id)).toEqual([recente.id, vieille.id]);
  });
});

describe('suppression d’une capture', () => {
  it('emporte la capture et tout ce qui en découle', async () => {
    const capture = await capturer({
      texte: 'Rappeler Karim',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await remplacerElements(capture.id, [
      {
        id: 'el-1',
        captureId: capture.id,
        type: 'TACHE',
        texte: 'Rappeler Karim',
        debutCar: 0,
        finCar: 14,
        verdict: 'EN_ATTENTE',
        corrigeParHumain: false,
      } as ElementJson,
    ]);

    await supprimerCapture(capture.id);

    expect(await lireCapture(capture.id)).toBeUndefined();
    expect(await elementsDeCapture(capture.id)).toEqual([]);
  });

  it('ne touche pas aux autres captures', async () => {
    const gardee = await capturer({ texte: 'Garder', source: 'ECRITE', etatTranscription: 'OK' });
    const jetee = await capturer({ texte: 'Jeter', source: 'ECRITE', etatTranscription: 'OK' });

    await supprimerCapture(jetee.id);

    expect((await listerCaptures()).map((c) => c.id)).toEqual([gardee.id]);
  });
});
