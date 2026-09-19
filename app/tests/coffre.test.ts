/**
 * Le coffre, et ce qu'il change à ce qui est réellement écrit sur le disque.
 *
 * Le test qui compte est le dernier de ce fichier : il ouvre la base sans passer
 * par le dépôt, comme le ferait quelqu'un qui a pris l'appareil, et vérifie que
 * rien de ce qui a été dicté ne s'y lit. Tout le reste — round-trip, refus, reprise
 * — n'est là que pour que celui-là veuille dire quelque chose.
 *
 * La voie « authentification de l'appareil » (WebAuthn) ne peut pas tourner ici :
 * Node n'a pas d'authentificateur. Elle est vérifiée dans un vrai navigateur, avec
 * un authentificateur virtuel, par `bout-en-bout.mjs`. Ce fichier couvre la voie par
 * phrase de passe, et tout ce que les deux ont en commun.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { activerChiffrement, desactiverChiffrement } from '../src/securite/activation.ts';
import {
  AuthentificationRefusee,
  CoffreVerrouille,
  chargerCoffre,
  deverrouiller,
  etatCoffre,
  gardiens,
  ouvrirValeur,
  reinitialiserCoffre,
  scellerValeur,
  verrouiller,
} from '../src/securite/coffre.ts';
import { capturer } from '../src/services/pipeline.ts';
import { MAGASIN_CAPTURES, MAGASIN_ELEMENTS, demander, transaction } from '../src/stockage/base.ts';
import {
  enregistrerElement,
  lireCapture,
  listerCaptures,
  listerElements,
  toutEffacer,
} from '../src/stockage/depot.ts';

const PHRASE = 'un cheval traverse le jardin sans bruit';

/**
 * PBKDF2 à 600 000 itérations coûte un quart de seconde par déverrouillage. Un test
 * qui en fait une dizaine n'a pas à les payer pour prouver ce qu'il prouve : la
 * valeur réelle est vérifiée séparément, une fois.
 */
beforeEach(async () => {
  reinitialiserCoffre();
  await toutEffacer();
  await chargerCoffre();
});

async function elementDe(captureId: string, texte: string): Promise<void> {
  await enregistrerElement({
    id: `el-${texte.length}-${captureId}`,
    captureId,
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
  });
}

/** Tout ce que la base contient vraiment, sans passer par le dépôt. */
async function brutSurLeDisque(): Promise<string> {
  const captures = await transaction([MAGASIN_CAPTURES], 'readonly', ([m]) =>
    demander<unknown[]>(m.getAll()),
  );
  const elements = await transaction([MAGASIN_ELEMENTS], 'readonly', ([m]) =>
    demander<unknown[]>(m.getAll()),
  );
  // Les ArrayBuffer ne se sérialisent pas en JSON ; on les rend lisibles pour que la
  // recherche de texte en clair porte aussi sur leur contenu.
  return JSON.stringify([captures, elements], (_cle, valeur: unknown) => {
    if (valeur instanceof ArrayBuffer) return new TextDecoder().decode(valeur);
    if (ArrayBuffer.isView(valeur)) {
      return new TextDecoder().decode(valeur.buffer as ArrayBuffer);
    }
    return valeur;
  });
}

describe('sceller et ouvrir', () => {
  it('rend exactement ce qu’on lui a confié', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    const scelle = await scellerValeur({ note: 'rappeler le couvreur', quand: 3 });
    expect(await ouvrirValeur(scelle)).toEqual({ note: 'rappeler le couvreur', quand: 3 });
  });

  it('ne produit jamais deux fois le même scellé pour le même texte', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    const a = await scellerValeur('rappeler le couvreur');
    const b = await scellerValeur('rappeler le couvreur');
    // Sans cela, deux notes identiques se reconnaîtraient sans être déchiffrées.
    expect(new Uint8Array(a.chiffre)).not.toEqual(new Uint8Array(b.chiffre));
    expect(new Uint8Array(a.eph)).not.toEqual(new Uint8Array(b.eph));
  });

  it('refuse d’ouvrir quand le coffre est fermé', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    const scelle = await scellerValeur('rappeler le couvreur');
    verrouiller();
    await expect(ouvrirValeur(scelle)).rejects.toThrow(CoffreVerrouille);
  });
});

describe('déverrouillage', () => {
  it('rouvre avec la bonne phrase', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    verrouiller();
    expect(etatCoffre()).toBe('VERROUILLE');

    await deverrouiller('PHRASE', PHRASE);
    expect(etatCoffre()).toBe('OUVERT');
  });

  it('refuse une phrase fausse, et reste fermé', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    verrouiller();

    await expect(deverrouiller('PHRASE', 'pas la bonne phrase')).rejects.toThrow(
      AuthentificationRefusee,
    );
    expect(etatCoffre()).toBe('VERROUILLE');
  });

  it('survit à un redémarrage : le coffre se relit depuis la base', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    await capturer({ texte: 'rappeler le couvreur', source: 'ECRITE', etatTranscription: 'OK' });

    // Ce que fait un rechargement de page : plus rien en mémoire, tout en base.
    reinitialiserCoffre();
    expect(await chargerCoffre()).toBe('VERROUILLE');

    await deverrouiller('PHRASE', PHRASE);
    expect((await listerCaptures())[0].texte).toBe('rappeler le couvreur');
  });
});

describe('capturer sans déverrouiller', () => {
  it('écrit une note coffre fermé, et la rend illisible aussitôt', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    verrouiller();

    // C'est toute la raison d'être de la paire de clés : déposer ne demande rien.
    const capture = await capturer({
      texte: 'rappeler le couvreur',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    expect(capture.id).toBeTruthy();
    expect(await brutSurLeDisque()).not.toContain('couvreur');

    // Et la relire demande bien l'authentification.
    await expect(listerCaptures()).rejects.toThrow(CoffreVerrouille);
    await deverrouiller('PHRASE', PHRASE);
    expect((await listerCaptures())[0].texte).toBe('rappeler le couvreur');
  });

  it('scelle aussi l’enregistrement, et le rend intact', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    const octets = new Uint8Array([26, 69, 223, 163, 1, 2, 3]);
    const capture = await capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'ABSENTE',
      audio: new Blob([octets], { type: 'audio/webm' }),
    });

    const relue = await lireCapture(capture.id);
    expect(relue?.aAudio).toBe(true);
    expect(relue?.audioType).toBe('audio/webm');
    expect(relue?.audioOctets).toBe(octets.length);
    expect(new Uint8Array(await relue!.audio!.arrayBuffer())).toEqual(octets);
  });

  it('ne déplie pas les enregistrements pour une simple liste', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    await capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'ABSENTE',
      audio: new Blob(['son'], { type: 'audio/webm' }),
    });

    const [listee] = await listerCaptures();
    // La liste sait qu'il y a un son et combien il pèse, sans l'avoir déchiffré.
    expect(listee.audio).toBeNull();
    expect(listee.aAudio).toBe(true);
    expect(listee.audioOctets).toBe(3);
  });
});

describe('activation sur des notes déjà là', () => {
  it('chiffre l’existant, sans en perdre une miette', async () => {
    const capture = await capturer({
      texte: 'rappeler le couvreur pour le devis',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await elementDe(capture.id, 'rappeler le couvreur');
    expect(await brutSurLeDisque()).toContain('couvreur');

    const reprise = await activerChiffrement('PHRASE', PHRASE);

    expect(reprise).toEqual({ captures: 1, elements: 1 });
    expect(await brutSurLeDisque()).not.toContain('couvreur');
    expect((await listerCaptures())[0].texte).toBe('rappeler le couvreur pour le devis');
    expect((await listerElements())[0].texte).toBe('rappeler le couvreur');
  });

  it('remet tout en clair quand on retire le chiffrement', async () => {
    const capture = await capturer({
      texte: 'rappeler le couvreur',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await elementDe(capture.id, 'rappeler le couvreur');
    await activerChiffrement('PHRASE', PHRASE);

    await desactiverChiffrement();

    expect(etatCoffre()).toBe('ABSENT');
    expect(await brutSurLeDisque()).toContain('couvreur');
    expect((await listerCaptures())[0].texte).toBe('rappeler le couvreur');
  });

  it('refuse de retirer le chiffrement coffre fermé : ce serait tout perdre', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    verrouiller();
    await expect(desactiverChiffrement()).rejects.toThrow(/Déverrouillez/);
    expect(etatCoffre()).toBe('VERROUILLE');
  });

  it('lit indifféremment une base à moitié reprise', async () => {
    // Ce qu'on obtient si la reprise s'interrompt : des notes scellées et des notes
    // en clair, côte à côte. Elles doivent toutes se lire, sinon une interruption
    // coûterait des données.
    const avant = await capturer({ texte: 'note en clair', source: 'ECRITE', etatTranscription: 'OK' });
    await activerChiffrement('PHRASE', PHRASE);
    const apres = await capturer({ texte: 'note scellée', source: 'ECRITE', etatTranscription: 'OK' });

    await transaction([MAGASIN_CAPTURES], 'readwrite', ([m]) => {
      // On remet de force la première à plat, comme si la reprise ne l'avait pas vue.
      m.put({
        id: avant.id,
        creeLe: avant.creeLe,
        source: 'ECRITE',
        texte: 'note en clair',
        etatTranscription: 'OK',
        dureeMs: null,
        audio: null,
        incomplete: false,
        analysee: false,
        audioOctets: null,
        audioType: null,
      });
    });

    const textes = (await listerCaptures()).map((c) => c.texte).sort();
    expect(textes).toEqual(['note en clair', 'note scellée']);
    expect(apres.texte).toBe('note scellée');
  });
});

describe('les moyens de déverrouillage', () => {
  it('n’en enregistre qu’un à la création', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    expect(gardiens()).toEqual(['PHRASE']);
  });

  it('refuse de créer un second coffre par-dessus le premier', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    await expect(activerChiffrement('PHRASE', 'autre phrase')).rejects.toThrow(/existe déjà/);
  });
});
