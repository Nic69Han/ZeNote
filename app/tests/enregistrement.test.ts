/**
 * Ce qu'un arrêt brutal laisse, et ce qu'on en récupère.
 *
 * « Aucune capture perdue » est l'une des trois promesses mesurables du produit.
 * Elle ne tenait que tant que rien de brutal n'arrivait : `MediaRecorder` garde ses
 * morceaux en mémoire jusqu'à l'arrêt, et une application tuée en pleine phrase les
 * emportait tous, sans laisser trace de leur existence.
 *
 * Ces tests vérifient l'autre moitié : les morceaux écrits pendant qu'on parle, et
 * ce qu'ils deviennent au démarrage suivant. Tuer un processus n'étant pas à la
 * portée d'un test unitaire, l'arrêt brutal est simulé par ce qu'il laisse — des
 * morceaux qu'aucun arrêt n'a effacés. C'est exactement l'état que le vrai cas
 * produit, et `bout-en-bout.mjs` le reproduit, lui, en fermant vraiment la page.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { recupererEnregistrements } from '../src/services/pipeline.ts';
import {
  assemblerEnregistrement,
  ecrireMorceau,
  enregistrementsInacheves,
  listerCaptures,
  lireCapture,
  supprimerMorceaux,
  toutEffacer,
} from '../src/stockage/depot.ts';
import { activerChiffrement } from '../src/securite/activation.ts';
import { chargerCoffre, reinitialiserCoffre, verrouiller } from '../src/securite/coffre.ts';

beforeEach(async () => {
  reinitialiserCoffre();
  await toutEffacer();
  await chargerCoffre();
});

/** Ce que l'enregistreur écrit, seconde par seconde, pendant qu'on parle. */
async function morceauxDe(enregistrementId: string, contenus: string[]): Promise<void> {
  for (const [rang, contenu] of contenus.entries()) {
    await ecrireMorceau({
      id: `${enregistrementId}-${String(rang).padStart(4, '0')}`,
      enregistrementId,
      rang,
      aMs: (rang + 1) * 1000,
      blob: new Blob([contenu], { type: 'audio/webm' }),
      typeMime: 'audio/webm',
    });
  }
}

describe('les morceaux écrits pendant qu’on parle', () => {
  it('se relèvent, et se rassemblent dans l’ordre', async () => {
    await morceauxDe('enr-1', ['un', 'deux', 'trois']);

    expect(await enregistrementsInacheves()).toEqual(['enr-1']);
    const assemble = await assemblerEnregistrement('enr-1');
    expect(await assemble!.audio.text()).toBe('undeuxtrois');
    expect(assemble!.dureeMs).toBe(3000);
    expect(assemble!.audio.type).toBe('audio/webm');
  });

  it('se rassemblent dans l’ordre même écrits en désordre', async () => {
    // L'écriture d'un morceau n'est pas attendue pendant l'enregistrement : rien ne
    // garantit qu'elles aboutissent dans l'ordre où elles sont parties.
    await ecrireMorceau({
      id: 'enr-1-0002', enregistrementId: 'enr-1', rang: 2, aMs: 3000,
      blob: new Blob(['trois']), typeMime: 'audio/webm',
    });
    await ecrireMorceau({
      id: 'enr-1-0000', enregistrementId: 'enr-1', rang: 0, aMs: 1000,
      blob: new Blob(['un']), typeMime: 'audio/webm',
    });
    await ecrireMorceau({
      id: 'enr-1-0001', enregistrementId: 'enr-1', rang: 1, aMs: 2000,
      blob: new Blob(['deux']), typeMime: 'audio/webm',
    });

    expect(await (await assemblerEnregistrement('enr-1'))!.audio.text()).toBe('undeuxtrois');
  });

  it('ne rend rien pour un enregistrement qui n’a rien laissé', async () => {
    expect(await assemblerEnregistrement('enr-inconnu')).toBeNull();
  });

  it('s’effacent quand l’enregistrement s’est arrêté normalement', async () => {
    await morceauxDe('enr-1', ['un', 'deux']);
    await supprimerMorceaux('enr-1');
    expect(await enregistrementsInacheves()).toEqual([]);
  });
});

describe('la récupération au démarrage', () => {
  it('fait une capture de ce qui restait, marquée incomplète', async () => {
    await morceauxDe('enr-1', ['un', 'deux', 'trois']);

    expect(await recupererEnregistrements()).toBe(1);

    const [capture] = await listerCaptures();
    expect(capture.source).toBe('VOCALE');
    expect(capture.incomplete).toBe(true);
    expect(capture.dureeMs).toBe(3000);
    expect(capture.aAudio).toBe(true);
    // La portion enregistrée est bien là, entière.
    expect(await (await lireCapture(capture.id))!.audio!.text()).toBe('undeuxtrois');
  });

  it('nettoie derrière elle : la capture n’est pas créée deux fois', async () => {
    await morceauxDe('enr-1', ['un']);

    await recupererEnregistrements();
    expect(await recupererEnregistrements()).toBe(0);
    expect(await listerCaptures()).toHaveLength(1);
  });

  it('récupère chaque enregistrement interrompu séparément', async () => {
    await morceauxDe('enr-1', ['un']);
    await morceauxDe('enr-2', ['deux']);

    expect(await recupererEnregistrements()).toBe(2);
    expect(await listerCaptures()).toHaveLength(2);
  });

  it('ne fait rien quand il n’y a rien à récupérer', async () => {
    expect(await recupererEnregistrements()).toBe(0);
    expect(await listerCaptures()).toEqual([]);
  });
});

describe('avec le chiffrement', () => {
  it('scelle les morceaux, et les rend intacts', async () => {
    await activerChiffrement('PHRASE', 'un cheval traverse le jardin sans bruit');
    await morceauxDe('enr-1', ['un', 'deux']);

    await recupererEnregistrements();

    const [capture] = await listerCaptures();
    expect(capture.incomplete).toBe(true);
    expect(await (await lireCapture(capture.id))!.audio!.text()).toBe('undeux');
  });

  it('laisse les morceaux en place plutôt que de les perdre, coffre fermé', async () => {
    await activerChiffrement('PHRASE', 'un cheval traverse le jardin sans bruit');
    await morceauxDe('enr-1', ['un', 'deux']);
    verrouiller();

    // Rien n'est récupéré — on ne sait pas ouvrir ces morceaux — mais rien n'est
    // perdu non plus : ils attendent le déverrouillage.
    expect(await recupererEnregistrements()).toBe(0);
    expect(await enregistrementsInacheves()).toEqual(['enr-1']);
  });
});
