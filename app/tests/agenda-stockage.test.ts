/**
 * L'agenda gardé sur l'appareil — change `agenda-local`, tâche 2.2.
 *
 * Spec `agenda` — « Conservation et effacement de l'agenda » : réimport, effacement,
 * protection par le coffre, et montée d'une base existante.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import type { ResultatLecture } from '../src/agenda/ics.ts';
import type { EvenementJson } from '../src/core/regles.ts';
import { activerChiffrement, desactiverChiffrement } from '../src/securite/activation.ts';
import { chargerCoffre, reinitialiserCoffre } from '../src/securite/coffre.ts';
import { effacerAgenda, etatAgenda, importerAgenda, lireEvenements, agendaPerime } from '../src/stockage/agenda.ts';
import {
  MAGASIN_EVENEMENTS,
  NOM_BASE,
  VERSION_BASE,
  demander,
  ouvrir,
  reinitialiserOuverture,
  transaction,
} from '../src/stockage/base.ts';
import { lireCapture, toutEffacer } from '../src/stockage/depot.ts';
import { capturer } from '../src/services/pipeline.ts';

function evenement(id: string, titre: string, debut: string, participants: string[] = []): EvenementJson {
  return { id, titre, debut, fin: debut.replace(/T(\d\d)/, (_m, h) => `T${String(+h + 1).padStart(2, '0')}`), participants, lieu: 'Salle Galilée', recurrent: false, journeeEntiere: false };
}

function lecture(evenements: EvenementJson[]): ResultatLecture {
  return {
    evenements,
    lus: evenements.length,
    ecartes: [{ raison: 'annulé', nombre: 1 }],
    recurrencesNonComprises: 0,
    couvreDepuis: '2026-09-20T00:00',
    couvreJusqua: '2026-11-20T23:59',
  };
}

const COMITE = evenement('comite', 'Comité budget', '2026-09-22T10:00', ['Marc Dupont']);
const CLIENT = evenement('client', 'Visite client Durand', '2026-09-23T14:00', ['Sophie Bernard']);

/** Tout le magasin, rendu lisible — les octets scellés compris — pour y chercher du texte en clair. */
async function magasinBrut(): Promise<string> {
  return JSON.stringify(
    await transaction([MAGASIN_EVENEMENTS], 'readonly', ([m]) => demander<unknown[]>(m.getAll())),
    (_cle, valeur: unknown) => {
      if (valeur instanceof ArrayBuffer) return new TextDecoder().decode(valeur);
      if (ArrayBuffer.isView(valeur)) return new TextDecoder().decode(valeur.buffer as ArrayBuffer);
      return valeur;
    },
  );
}

beforeEach(async () => {
  reinitialiserCoffre();
  await toutEffacer();
  await chargerCoffre();
});

describe('conservation de l’agenda', () => {
  it('garde les occurrences et l’état de l’import', async () => {
    const etat = await importerAgenda(lecture([COMITE, CLIENT]), new Date('2026-09-21T08:00:00Z'));
    expect(etat).toMatchObject({ lus: 2, occurrences: 2, couvreJusqua: '2026-11-20T23:59' });
    expect(await etatAgenda()).toEqual(etat);
    expect((await lireEvenements()).map((e) => e.titre)).toEqual(['Comité budget', 'Visite client Durand']);
    expect(await lireEvenements('2026-09-23T00:00', '2026-09-23T23:59')).toEqual([CLIENT]);
  });

  it('ne rend rien hors de la couverture de l’import', async () => {
    const tard = evenement('tard', 'Hors couverture', '2026-12-01T10:00');
    await importerAgenda(lecture([COMITE, tard]));
    expect((await lireEvenements()).map((e) => e.id)).toEqual(['comite']);
    expect(await lireEvenements('2026-12-01T00:00', '2026-12-31T23:59')).toEqual([]);
  });

  it('scénario « Réimport » — l’ancien agenda disparaît, les notes restent', async () => {
    const note = await capturer({ texte: 'rappeler Marc', source: 'ECRITE', etatTranscription: 'OK' });
    await importerAgenda(lecture([COMITE]));
    await importerAgenda(lecture([CLIENT]));

    expect((await lireEvenements()).map((e) => e.id)).toEqual(['client']);
    expect((await lireCapture(note.id))?.texte).toBe('rappeler Marc');
  });

  it('scénario « Agenda effacé » — comme si rien n’avait été importé, sans toucher aux notes', async () => {
    const note = await capturer({ texte: 'rappeler Marc', source: 'ECRITE', etatTranscription: 'OK' });
    await importerAgenda(lecture([COMITE]));
    await effacerAgenda();

    expect(await etatAgenda()).toBeNull();
    expect(await lireEvenements()).toEqual([]);
    expect(await lireCapture(note.id)).not.toBeUndefined();
  });

  it('dit un agenda périmé : plus de sept jours, ou couverture dépassée', async () => {
    const etat = await importerAgenda(lecture([COMITE]), new Date('2026-09-21T08:00:00Z'));
    expect(agendaPerime(etat, new Date('2026-09-25T08:00:00Z'), '2026-09-25T10:00')).toBe(false);
    expect(agendaPerime(etat, new Date('2026-09-29T09:00:00Z'), '2026-09-29T11:00')).toBe(true);
    expect(agendaPerime({ ...etat, importeLe: new Date().toISOString() }, new Date(), '2026-11-21T08:00')).toBe(true);
    expect(agendaPerime(null, new Date(), '2026-09-25T10:00')).toBe(false);
  });
});

describe('l’agenda et le coffre', () => {
  it('scénario « Agenda protégé par le coffre » — ni titre, ni lieu, ni participant en clair', async () => {
    await activerChiffrement('PHRASE', 'un cheval traverse le jardin sans bruit');
    await importerAgenda(lecture([COMITE, CLIENT]));

    const brut = await magasinBrut();
    for (const secret of ['Comité budget', 'Marc Dupont', 'Salle Galilée', 'Durand', 'Sophie']) {
      expect(brut).not.toContain(secret);
    }
    expect((await lireEvenements()).map((e) => e.titre)).toEqual(['Comité budget', 'Visite client Durand']);
  });

  it('scelle un agenda importé avant le coffre, et le remet en clair à sa levée', async () => {
    await importerAgenda(lecture([COMITE]));
    expect(await magasinBrut()).toContain('Comité budget');

    await activerChiffrement('PHRASE', 'un cheval traverse le jardin sans bruit');
    expect(await magasinBrut()).not.toContain('Comité budget');
    expect((await lireEvenements())[0].titre).toBe('Comité budget');

    await desactiverChiffrement();
    expect(await magasinBrut()).toContain('Comité budget');
    expect((await lireEvenements())[0]).toEqual(COMITE);
  });
});

describe('la montée de la base', () => {
  it('ouvre une base de version 3 remplie, garde ses notes, et ajoute l’agenda', async () => {
    (await ouvrir()).close();
    reinitialiserOuverture();
    await new Promise<void>((resoudre, rejeter) => {
      const r = indexedDB.deleteDatabase(NOM_BASE);
      r.onsuccess = () => resoudre();
      r.onerror = () => rejeter(r.error);
    });

    // Une base telle que la version 3 la laissait, avec une capture dedans.
    await new Promise<void>((resoudre, rejeter) => {
      const r = indexedDB.open(NOM_BASE, 3);
      r.onupgradeneeded = () => {
        const base = r.result;
        const captures = base.createObjectStore('captures', { keyPath: 'id' });
        captures.createIndex('creeLe', 'creeLe');
        captures.createIndex('analysee', 'analysee');
        const elements = base.createObjectStore('elements', { keyPath: 'id' });
        elements.createIndex('captureId', 'captureId');
        elements.createIndex('verdict', 'verdict');
        base.createObjectStore('reglages', { keyPath: 'cle' });
        base.createObjectStore('lexique', { keyPath: 'id' });
        base.createObjectStore('morceaux', { keyPath: 'id' }).createIndex('enregistrementId', 'enregistrementId');
        captures.put({
          id: 'ancienne',
          creeLe: '2026-09-01T08:00:00.000Z',
          source: 'ECRITE',
          texte: 'une note d’avant l’agenda',
          etatTranscription: 'OK',
          dureeMs: null,
          audio: null,
          incomplete: false,
          analysee: true,
        });
      };
      r.onsuccess = () => {
        r.result.close();
        resoudre();
      };
      r.onerror = () => rejeter(r.error);
    });

    reinitialiserOuverture();
    expect(VERSION_BASE).toBe(4);
    expect((await lireCapture('ancienne'))?.texte).toBe('une note d’avant l’agenda');
    expect(await lireEvenements()).toEqual([]);
    await importerAgenda(lecture([COMITE]));
    expect((await lireEvenements()).map((e) => e.id)).toEqual(['comite']);
  });
});
