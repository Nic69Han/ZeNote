/**
 * Les échecs d'écriture, et ce qu'on en fait.
 *
 * Spec `capture` : un échec doit se signaler autrement qu'un succès, et proposer une
 * issue. Deux pannes, deux issues différentes — et les confondre enverrait
 * l'utilisateur chercher au mauvais endroit :
 *
 *  - **le micro refusé** : rien n'a été enregistré, la capture écrite prend le relais ;
 *  - **la place qui manque** : ce sont les enregistrements qui remplissent ZeNote, et
 *    ceux des captures déjà transcrites ne portent plus la note. L'application peut
 *    donc rendre de la place elle-même, au lieu de renvoyer aux réglages du système.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { espaceLiberable, estManqueDePlace, libererEspace } from '../src/services/espace.ts';
import { audioDisponible } from '../src/audio/enregistreur.ts';
import { capturer } from '../src/services/pipeline.ts';
import { listerCaptures, lireCapture, majCapture, toutEffacer } from '../src/stockage/depot.ts';

beforeEach(async () => {
  await toutEffacer();
});

/** Une capture dictée, avec son enregistrement, dans l'état qu'on lui demande. */
async function dictee(
  texte: string,
  octets: number,
  analysee: boolean,
): Promise<string> {
  const capture = await capturer({
    texte,
    source: 'VOCALE',
    etatTranscription: texte ? 'OK' : 'ABSENTE',
    audio: new Blob([new Uint8Array(octets)], { type: 'audio/webm' }),
  });
  if (analysee) await majCapture(capture.id, { analysee: true });
  return capture.id;
}

describe('reconnaître le manque de place', () => {
  it('reconnaît le refus de quota, sous ses deux noms', () => {
    const normalise = new Error('plein');
    normalise.name = 'QuotaExceededError';
    expect(estManqueDePlace(normalise)).toBe(true);

    const firefox = new Error('plein');
    firefox.name = 'NS_ERROR_DOM_QUOTA_REACHED';
    expect(estManqueDePlace(firefox)).toBe(true);
  });

  it('ne prend pas une autre panne pour un manque de place', () => {
    // Confondre les deux ferait proposer de supprimer des enregistrements pour
    // réparer un coffre fermé : une perte irréversible pour rien.
    expect(estManqueDePlace(new Error('coffre verrouillé'))).toBe(false);
    expect(estManqueDePlace(null)).toBe(false);
    expect(estManqueDePlace('plein')).toBe(false);
  });
});

describe('ce qu’on peut rendre', () => {
  it('compte les enregistrements des captures déjà transcrites', async () => {
    const analysee = await dictee('rappeler le couvreur', 2048, true);

    const liberable = await espaceLiberable();

    expect(liberable.captureIds).toEqual([analysee]);
    expect(liberable.octets).toBe(2048);
  });

  it('épargne une capture pas encore transcrite : son audio est tout ce qu’elle a', async () => {
    await dictee('', 4096, false);
    // S'en défaire la ferait disparaître entièrement.
    expect(await espaceLiberable()).toEqual({ captureIds: [], octets: 0 });
  });

  it('épargne une capture analysée dont le texte est vide', async () => {
    const id = await dictee('', 4096, false);
    await majCapture(id, { analysee: true });
    expect((await espaceLiberable()).captureIds).toEqual([]);
  });

  it('ne compte pas une capture écrite : elle n’a pas d’enregistrement', async () => {
    await capturer({ texte: 'note tapée', source: 'ECRITE', etatTranscription: 'OK' });
    expect((await espaceLiberable()).captureIds).toEqual([]);
  });
});

describe('libérer', () => {
  it('retire l’enregistrement et garde tout le reste', async () => {
    const id = await dictee('rappeler le couvreur', 2048, true);

    expect(await libererEspace([id])).toBe(1);

    const capture = await lireCapture(id);
    expect(capture?.aAudio).toBe(false);
    expect(capture?.audio).toBeNull();
    expect(capture?.audioOctets).toBeNull();
    // La note, elle, est intacte : c'est ce qui rend l'échange acceptable.
    expect(capture?.texte).toBe('rappeler le couvreur');
    expect(capture?.analysee).toBe(true);
    expect(capture?.creeLe).toBeTruthy();
  });

  it('n’a plus rien à rendre une fois passé', async () => {
    const id = await dictee('rappeler le couvreur', 2048, true);
    await libererEspace([id]);
    expect((await espaceLiberable()).captureIds).toEqual([]);
  });

  it('ne touche pas aux autres captures', async () => {
    const vide = await dictee('rappeler le couvreur', 2048, true);
    const garde = await dictee('', 4096, false);

    await libererEspace([vide]);

    expect((await lireCapture(garde))?.aAudio).toBe(true);
    expect(await listerCaptures()).toHaveLength(2);
  });

  it('ne se plaint pas d’une capture disparue entre-temps', async () => {
    await expect(libererEspace(['fantome'])).resolves.toBe(1);
  });
});

describe('le micro refusé', () => {
  it('se constate sans lever d’erreur, pour que l’écran propose l’écrit', () => {
    // `audioDisponible` est le seul point où le produit décide s'il peut enregistrer.
    // Dans cet environnement sans micro, il doit répondre non — pas planter.
    expect(() => audioDisponible()).not.toThrow();
    expect(typeof audioDisponible()).toBe('boolean');
  });
});
