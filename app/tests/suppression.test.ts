/**
 * Supprimer, avec le droit de se raviser.
 *
 * Spec `donnees` — « Suppression d'une capture » et « Fenêtre d'annulation ».
 *
 * La suppression doit être réelle : la capture, son audio, et tout ce qui en
 * découle. C'est la contrepartie de tout garder en local — si rien ne part, alors
 * effacer doit vraiment effacer. Une suppression qui laisse des traces dans la base
 * est un mensonge sur la seule promesse que ce produit fait à la place de la
 * confidentialité d'un serveur.
 *
 * Et elle doit être reprenable, parce qu'un geste irréversible à un doigt d'un
 * bouton ordinaire finit toujours par être fait par erreur.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { capturer, traiterFileAnalyse } from '../src/services/pipeline.ts';
import { supprimerAvecAnnulation } from '../src/services/suppression.ts';
import {
  elementsDeCapture,
  lireCapture,
  listerCaptures,
  listerElements,
  toutEffacer,
} from '../src/stockage/depot.ts';

const JOUR = '2026-09-22';

beforeEach(async () => {
  await toutEffacer();
});

async function capturePeuplee() {
  const capture = await capturer({
    texte: 'rappeler le couvreur pour le devis du toit avant vendredi',
    source: 'ECRITE',
    etatTranscription: 'OK',
    audio: new Blob([new Uint8Array(512)], { type: 'audio/webm' }),
  });
  await traiterFileAnalyse(JOUR);
  expect((await elementsDeCapture(capture.id)).length).toBeGreaterThan(0);
  return capture;
}

describe('supprimer', () => {
  it('emporte la capture, son audio et ses éléments', async () => {
    const capture = await capturePeuplee();

    await supprimerAvecAnnulation(capture.id);

    expect(await lireCapture(capture.id)).toBeUndefined();
    expect(await elementsDeCapture(capture.id)).toEqual([]);
    expect(await listerCaptures()).toEqual([]);
  });

  it('ne touche à rien d’autre', async () => {
    const partir = await capturePeuplee();
    const rester = await capturer({
      texte: 'acheter du pain',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });

    await supprimerAvecAnnulation(partir.id);

    expect((await listerCaptures()).map((c) => c.id)).toEqual([rester.id]);
  });

  it('ne propose rien à annuler pour une capture qui n’existe pas', async () => {
    // Proposer l'annulation ferait croire à une suppression qui n'a pas eu lieu.
    expect(await supprimerAvecAnnulation('fantome')).toBeNull();
  });

  it('dit ce qui est parti, et combien en venait', async () => {
    const capture = await capturePeuplee();
    const annulation = await supprimerAvecAnnulation(capture.id);
    expect(annulation?.resume).toContain('couvreur');
    expect(annulation?.resume).toMatch(/élément/);
  });
});

describe('se raviser', () => {
  it('remet la capture, son audio et ses éléments', async () => {
    const capture = await capturePeuplee();
    const avant = await elementsDeCapture(capture.id);
    const annulation = await supprimerAvecAnnulation(capture.id);

    expect(await annulation!.annuler()).toBe(true);

    const remise = await lireCapture(capture.id);
    expect(remise?.texte).toBe(capture.texte);
    expect(remise?.aAudio).toBe(true);
    expect((await elementsDeCapture(capture.id)).map((e) => e.id).sort()).toEqual(
      avant.map((e) => e.id).sort(),
    );
  });

  it('remet exactement ce qui était là, sans rien inventer', async () => {
    const capture = await capturePeuplee();
    const elementsAvant = await listerElements();
    const annulation = await supprimerAvecAnnulation(capture.id);
    await annulation!.annuler();

    const elementsApres = await listerElements();
    expect(elementsApres).toHaveLength(elementsAvant.length);
    for (const element of elementsApres) {
      const jumeau = elementsAvant.find((e) => e.id === element.id);
      expect(jumeau?.texte).toBe(element.texte);
      expect(jumeau?.verdict).toBe(element.verdict);
    }
  });

  it('ne s’annule qu’une fois', async () => {
    const capture = await capturePeuplee();
    const annulation = await supprimerAvecAnnulation(capture.id);

    expect(await annulation!.annuler()).toBe(true);
    // Un second appel ne doit pas réécrire par-dessus ce qui est revenu, ni faire
    // croire à une seconde remise.
    expect(await annulation!.annuler()).toBe(false);
    expect(await listerCaptures()).toHaveLength(1);
  });
});
