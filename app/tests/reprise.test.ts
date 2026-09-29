/**
 * Où j'en étais : la note de reprise, de son écriture à sa restitution.
 *
 * Ce qui casserait la promesse : une note qui produit des éléments en Revue (on la lit
 * deux fois), une note qui se perd (elle est une capture comme les autres), deux notes
 * qui s'affichent ensemble, ou une carte qui revient après « C'est reparti ». Les
 * scénarios de la spec `reprise` sont nommés dans les tests.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { capturer, traiterFileAnalyse, analyserCapture } from '../src/services/pipeline.ts';
import { ABSENCE_AVANT_REPRISE_MS } from '../src/services/rappels.ts';
import {
  derniereRepriseObservee,
  estRevenu,
  garderPourRevue,
  marquerReprise,
  noteDeReprise,
  observerReprise,
  quandPosee,
} from '../src/services/reprise.ts';
import {
  capturesAAnalyser,
  capturesEnSouffrance,
  elementsDeCapture,
  enregistrerCapture,
  listerCaptures,
  lireCapture,
  majCapture,
  toutEffacer,
} from '../src/stockage/depot.ts';

beforeEach(async () => {
  await toutEffacer();
});

const JOUR = '2026-09-29';
/** Une note qui, dite comme une tâche, aurait produit un élément en Revue. */
const TEXTE_TACHE = 'reprendre au paragraphe 3 du budget et appeler Karim pour le devis';

function poser(texte = TEXTE_TACHE) {
  return capturer({ texte, source: 'ECRITE', etatTranscription: 'OK', reprise: true });
}

describe('la note de reprise est une capture marquée', () => {
  it('porte son marquage, avec l’instant de pose et sans reprise', async () => {
    const note = await poser();
    const relue = await lireCapture(note.id);
    expect(relue?.reprise).toEqual({ poseeLe: note.creeLe, reprisLe: null });
    expect(relue?.texte).toBe(TEXTE_TACHE);
  });

  it('laisse une capture ordinaire sans marquage', async () => {
    const ordinaire = await capturer({ texte: 'appeler Karim', source: 'ECRITE', etatTranscription: 'OK' });
    expect((await lireCapture(ordinaire.id))?.reprise).toBeUndefined();
  });

  it('relit une capture ancienne, écrite avant que le champ existe', async () => {
    await enregistrerCapture({
      id: 'cap-ancienne',
      creeLe: '2026-01-05T09:00:00.000Z',
      source: 'ECRITE',
      texte: 'note d’avant',
      etatTranscription: 'OK',
      dureeMs: null,
      audio: null,
      incomplete: false,
      analysee: true,
    });
    const relue = await lireCapture('cap-ancienne');
    expect(relue?.texte).toBe('note d’avant');
    expect(relue?.reprise).toBeUndefined();
    expect(noteDeReprise(await listerCaptures())).toBeUndefined();
  });
});

describe('Poser une note de reprise — aucun élément pour la Revue', () => {
  it('la marque analysée sans produire aucun élément, même écrite comme une tâche', async () => {
    const note = await poser();
    expect(await analyserCapture(note, JOUR)).toBe(0);
    expect(await elementsDeCapture(note.id)).toEqual([]);
    expect((await lireCapture(note.id))?.analysee).toBe(true);
  });

  it('sort de la file d’analyse sans élément, et la file suit son cours pour les autres', async () => {
    const note = await poser();
    const ordinaire = await capturer({
      texte: 'Appeler Karim pour le devis avant vendredi.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    expect((await capturesAAnalyser()).map((c) => c.id).sort()).toEqual([note.id, ordinaire.id].sort());

    const produits = await traiterFileAnalyse(JOUR);

    expect(produits).toBeGreaterThan(0);
    expect(await elementsDeCapture(note.id)).toEqual([]);
    expect((await elementsDeCapture(ordinaire.id)).length).toBe(produits);
    expect(await capturesAAnalyser()).toEqual([]);
  });

  it('reste écrite et lisible : la note est une capture, pas un état', async () => {
    const note = await poser();
    await traiterFileAnalyse(JOUR);
    expect((await listerCaptures()).map((c) => c.id)).toContain(note.id);
  });
});

describe('Une seule note à la fois', () => {
  it('rend la plus récente des notes, les anciennes restant des captures', async () => {
    const ancienne = await poser('reprendre le budget');
    const recente = await poser('reprendre le planning');
    await majCapture(ancienne.id, { reprise: { poseeLe: '2026-09-29T09:00:00.000Z', reprisLe: null } });
    await majCapture(recente.id, { reprise: { poseeLe: '2026-09-29T10:02:00.000Z', reprisLe: null } });

    const captures = await listerCaptures();
    expect(noteDeReprise(captures)?.id).toBe(recente.id);
    expect(captures.map((c) => c.id)).toContain(ancienne.id);
  });

  it('ne rend rien sans note de reprise, ni parmi des captures ordinaires', async () => {
    await capturer({ texte: 'appeler Karim', source: 'ECRITE', etatTranscription: 'OK' });
    expect(noteDeReprise(await listerCaptures())).toBeUndefined();
  });
});

describe('Reprise marquée', () => {
  it('« C’est reparti » retire la carte et laisse la note retrouvable', async () => {
    const note = await poser();
    await marquerReprise((await lireCapture(note.id))!, '2026-09-29T11:20:00.000Z');

    const captures = await listerCaptures();
    expect(noteDeReprise(captures)).toBeUndefined();
    const relue = captures.find((c) => c.id === note.id);
    expect(relue?.texte).toBe(TEXTE_TACHE);
    expect(relue?.reprise?.reprisLe).toBe('2026-09-29T11:20:00.000Z');
  });

  it('ne fait pas ressortir une note plus ancienne : elle reste une capture ordinaire', async () => {
    const ancienne = await poser('reprendre le budget');
    const recente = await poser('reprendre le planning');
    await majCapture(ancienne.id, { reprise: { poseeLe: '2026-09-29T09:00:00.000Z', reprisLe: null } });
    await majCapture(recente.id, { reprise: { poseeLe: '2026-09-29T10:02:00.000Z', reprisLe: null } });

    await marquerReprise((await lireCapture(recente.id))!);

    const captures = await listerCaptures();
    expect(noteDeReprise(captures)).toBeUndefined();
    expect(captures.map((c) => c.id)).toContain(ancienne.id);
  });
});

describe('Envoyer en Revue', () => {
  it('« Garder pour la Revue » efface le marquage et remet la note dans la file', async () => {
    const note = await poser();
    await analyserCapture(note, JOUR);
    expect((await lireCapture(note.id))?.analysee).toBe(true);

    await garderPourRevue((await lireCapture(note.id))!);

    const apres = await lireCapture(note.id);
    expect(apres?.reprise).toBeUndefined();
    expect(apres?.analysee).toBe(false);
    expect(noteDeReprise(await listerCaptures())).toBeUndefined();
    expect((await capturesAAnalyser()).map((c) => c.id)).toEqual([note.id]);
  });

  it('elle est alors analysée comme une capture ordinaire, éléments compris', async () => {
    const note = await poser();
    await analyserCapture(note, JOUR);
    await garderPourRevue((await lireCapture(note.id))!);

    const produits = await traiterFileAnalyse(JOUR);

    expect(produits).toBeGreaterThan(0);
    expect((await elementsDeCapture(note.id)).length).toBe(produits);
  });
});

describe('Retour après une réunion — quand la carte se montre', () => {
  const pose = new Date(2026, 8, 29, 10, 2).toISOString();
  const poseMs = Date.parse(pose);

  it('se montre au retour d’une absence d’au moins trente minutes', () => {
    expect(estRevenu(pose, poseMs + ABSENCE_AVANT_REPRISE_MS, null)).toBe(true);
    expect(estRevenu(pose, new Date(2026, 8, 29, 11, 15).getTime(), null)).toBe(true);
  });

  it('ne se montre pas juste après avoir été dictée', () => {
    expect(estRevenu(pose, poseMs + 60_000, null)).toBe(false);
    expect(estRevenu(pose, poseMs + ABSENCE_AVANT_REPRISE_MS - 1, null)).toBe(false);
  });

  it('se montre dès que l’application a été retrouvée depuis la pose, même en moins de trente minutes', () => {
    expect(estRevenu(pose, poseMs + 5 * 60_000, poseMs + 4 * 60_000)).toBe(true);
    // Un retour antérieur à la pose ne compte pas : on n'était pas encore parti.
    expect(estRevenu(pose, poseMs + 5 * 60_000, poseMs - 60_000)).toBe(false);
  });

  it('retient le dernier retour observé', () => {
    observerReprise(1234);
    expect(derniereRepriseObservee()).toBe(1234);
  });

  it('dit l’heure de pose comme on la lirait', () => {
    const midi = new Date(2026, 8, 29, 12, 0);
    expect(quandPosee(pose, midi)).toBe('posée à 10 h 02');
    expect(quandPosee(new Date(2026, 8, 29, 9, 5).toISOString(), midi)).toBe('posée à 9 h 05');
  });

  it('ne laisse pas croire qu’une note d’hier date de ce matin', () => {
    const lendemain = new Date(2026, 8, 30, 8, 0);
    expect(quandPosee(pose, lendemain)).toBe('posée hier à 10 h 02');
    expect(quandPosee(pose, new Date(2026, 9, 3, 8, 0))).toMatch(/^posée le 29 septembre à 10 h 02$/);
  });
});

describe('une note dictée dont rien n’a été reconnu', () => {
  it('n’est pas « à reprendre » en Revue : elle n’en produit rien, et garde son audio', async () => {
    const muette = await capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'ECHEC',
      audio: new Blob(['son'], { type: 'audio/webm' }),
      reprise: true,
    });
    const ordinaire = await capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'ECHEC',
      audio: new Blob(['son'], { type: 'audio/webm' }),
    });
    await majCapture(muette.id, { essaisTranscription: 1 });
    await majCapture(ordinaire.id, { essaisTranscription: 1 });

    expect((await capturesEnSouffrance()).map((c) => c.id)).toEqual([ordinaire.id]);
    expect((await lireCapture(muette.id))?.aAudio).toBe(true);
  });
});
