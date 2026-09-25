/**
 * L'export intégral : « vos données vous appartiennent », vérifié.
 *
 * Ce qui est testé ici est ce qui casserait vraiment la promesse : un export qui perd
 * le lien entre un élément et sa phrase d'origine, un export vide qui ne serait plus
 * un document, un fichier qui ne se reparse pas, ou un export qui laisserait croire
 * qu'il contient l'audio alors qu'il ne le contient pas.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  construireExport,
  copierDansPressePapier,
  exporterJson,
  nomFichierExport,
  proposerTelechargement,
  serialiser,
  FORMAT_EXPORT,
  VERSION_FORMAT_EXPORT,
  type ExportZeNote,
} from '../src/services/export.ts';
import { enregistrerCapture, ecrireReglage, majCapture, toutEffacer } from '../src/stockage/depot.ts';
import { analyserCapture, capturer } from '../src/services/pipeline.ts';

const JOUR = '2026-09-12';

beforeEach(async () => {
  await toutEffacer();
});

/** Relit l'export comme le ferait quelqu'un sans ZeNote : du texte, puis `JSON.parse`. */
async function relire(): Promise<ExportZeNote> {
  return JSON.parse(await exporterJson()) as ExportZeNote;
}

describe('un export est un document, même vide', () => {
  it('garde son en-tête, son mode d’emploi et son dictionnaire sans aucune donnée', async () => {
    const vide = await relire();

    expect(vide.format).toBe(FORMAT_EXPORT);
    expect(vide.versionFormat).toBe(VERSION_FORMAT_EXPORT);
    expect(vide.exporteLe).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(vide.captures).toEqual([]);
    expect(vide.elements).toEqual([]);
    expect(vide.totaux).toEqual({ captures: 0, elements: 0 });

    // Le format doit rester relisible sans données : c'est ce qui le rend documenté.
    expect(vide.lisezMoi.join(' ')).toContain('captureId');
    expect(Object.keys(vide.champs.captures)).toContain('texte');
    expect(Object.keys(vide.champs.elements)).toEqual(
      expect.arrayContaining(['captureId', 'debutCar', 'finCar', 'verdict']),
    );
  });

  it('emporte les réglages tels qu’ils sont, défauts compris', async () => {
    expect((await relire()).reglages.theme).toBe('auto');
    await ecrireReglage('theme', 'sombre');
    expect((await relire()).reglages.theme).toBe('sombre');
  });
});

describe('les liens de traçabilité survivent à l’export', () => {
  it('permet de retrouver la phrase d’origine de chaque élément depuis le seul fichier', async () => {
    const capture = await capturer({
      texte: 'Voir avec Marc pour le budget avant vendredi. Relire la note de Claire.',
      source: 'VOCALE',
      etatTranscription: 'OK',
    });
    await analyserCapture(capture, JOUR);

    const exporte = await relire();
    expect(exporte.elements.length).toBeGreaterThan(0);

    for (const element of exporte.elements) {
      // 1. L'élément désigne une capture qui est, elle aussi, dans le fichier.
      const source = exporte.captures.find((c) => c.id === element.captureId);
      expect(source, 'un élément sans sa capture serait un export amputé').toBeDefined();

      // 2. Les bornes du passage source sont exploitables telles quelles : découper
      //    le texte de la capture entre elles doit rendre du texte, pas du vide.
      expect(element.debutCar).toBeGreaterThanOrEqual(0);
      expect(element.finCar).toBeGreaterThan(element.debutCar);
      expect(element.finCar).toBeLessThanOrEqual(source!.texte.length);
      expect(source!.texte.slice(element.debutCar, element.finCar).trim()).not.toBe('');
    }
  });

  it('conserve les décisions humaines et n’écarte aucun élément', async () => {
    const capture = await capturer({
      texte: 'Appeler Marc. Relire le budget.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await analyserCapture(capture, JOUR);

    const exporte = await relire();
    expect(exporte.totaux.elements).toBe(exporte.elements.length);
    expect(exporte.elements.every((e) => e.verdict !== undefined)).toBe(true);
    expect(exporte.elements.every((e) => e.captureId === capture.id)).toBe(true);
  });

  it('range les éléments par capture puis dans l’ordre du texte source', async () => {
    const capture = await capturer({
      texte: 'Appeler Marc. Relire le budget. Envoyer le compte rendu à Claire.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await analyserCapture(capture, JOUR);

    const positions = (await relire()).elements.map((e) => e.debutCar);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });
});

describe('le fichier produit', () => {
  it('se reparse en JSON et rend exactement le document construit', async () => {
    await capturer({ texte: 'une note', source: 'ECRITE', etatTranscription: 'OK' });

    const instant = new Date('2026-09-12T08:30:00.000Z');
    const documentExport = await construireExport(instant);
    const texte = serialiser(documentExport);

    expect(() => JSON.parse(texte)).not.toThrow();
    expect(JSON.parse(texte)).toEqual(documentExport);
    // Indenté et terminé par une ligne : il est fait pour être lu, pas seulement parsé.
    expect(texte.startsWith('{\n  "format"')).toBe(true);
    expect(texte.endsWith('\n')).toBe(true);
    expect(documentExport.exporteLe).toBe('2026-09-12T08:30:00.000Z');
  });

  it('porte un nom de fichier daté', () => {
    expect(nomFichierExport(new Date('2026-09-12T08:30:00'))).toBe('zenote-export-2026-09-12.json');
  });
});

describe('l’audio : ce que l’export n’emporte pas, il le déclare', () => {
  /** Une capture dictée dont le son est bien en base, comme après un enregistrement. */
  async function capturerAvecAudio(octets: number): Promise<void> {
    const audio = new Blob([new Uint8Array(octets)], { type: 'audio/webm' });
    await enregistrerCapture({
      id: 'cap-audio',
      creeLe: '2026-09-12T07:00:00.000Z',
      source: 'VOCALE',
      texte: 'appeler Marc',
      etatTranscription: 'OK',
      dureeMs: 4200,
      audio,
      incomplete: false,
      analysee: false,
    });
  }

  it('n’écrit jamais le son dans le fichier, et le fichier reste du JSON pur', async () => {
    await capturerAvecAudio(2048);
    const texte = await exporterJson();

    // Aucune trace binaire ni base64 : le JSON se reparse, et rien ne l'a gonflé.
    expect(() => JSON.parse(texte)).not.toThrow();
    expect(texte).not.toContain('data:audio');
    expect(texte.length).toBeLessThan(20_000);
  });

  it('déclare l’absence du son, sa présence sur l’appareil et sa taille', async () => {
    await capturerAvecAudio(2048);
    const exporte = await relire();

    expect(exporte.audio.inclus).toBe(false);
    expect(exporte.audio.capturesAvecAudio).toBe(1);
    expect(exporte.audio.octetsNonInclus).toBe(2048);
    expect(exporte.audio.explication).not.toBe('');

    const [capture] = exporte.captures;
    expect(capture.audio).toEqual({
      inclus: false,
      presentSurLAppareil: true,
      octets: 2048,
      typeMime: 'audio/webm',
    });
  });

  it('ne prétend pas qu’un son existe quand la capture a été écrite', async () => {
    await capturer({ texte: 'note tapée', source: 'ECRITE', etatTranscription: 'OK' });
    const exporte = await relire();

    expect(exporte.audio.capturesAvecAudio).toBe(0);
    expect(exporte.audio.octetsNonInclus).toBe(0);
    expect(exporte.captures[0].audio.presentSurLAppareil).toBe(false);
    expect(exporte.captures[0].audio.octets).toBeNull();
  });
});

describe('le repli quand le téléchargement est impossible', () => {
  it('signale l’échec du téléchargement au lieu de le prétendre réussi', () => {
    // Ici, pas de `document` : c'est le cas limite du contexte qui n'autorise rien.
    // L'écran doit alors montrer le texte copiable plutôt qu'annoncer un fichier.
    expect(typeof document).toBe('undefined');
    expect(proposerTelechargement('{}', 'zenote-export.json')).toBe(false);
  });

  it('offre le contenu exact du fichier à la copie', async () => {
    await capturer({ texte: 'appeler Marc', source: 'ECRITE', etatTranscription: 'OK' });
    const texte = await exporterJson();

    const presse = { copie: '', async writeText(t: string) { this.copie = t; } };
    expect(await copierDansPressePapier(texte, presse)).toBe(true);
    // Le repli doit rendre le fichier entier, pas un résumé : ce qui est copié se
    // reparse et contient bien la capture.
    expect(presse.copie).toBe(texte);
    expect((JSON.parse(presse.copie) as ExportZeNote).captures[0].texte).toBe('appeler Marc');
  });

  it('rend faux plutôt que de jeter quand le presse-papiers est absent ou refuse', async () => {
    expect(await copierDansPressePapier('texte', undefined)).toBe(false);
    const refus = {
      writeText: () => Promise.reject(new Error('permission refusée')),
    };
    expect(await copierDansPressePapier('texte', refus)).toBe(false);
  });
});

describe('l’origine de l’analyse voyage avec l’export', () => {
  it('emporte l’origine et les confiances de chaque élément, et les documente', async () => {
    const capture = await capturer({
      texte: 'Voir avec Marc pour le budget avant vendredi.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await analyserCapture(capture, JOUR);

    const exporte = JSON.parse(await exporterJson());
    expect(exporte.elements.length).toBeGreaterThan(0);
    for (const e of exporte.elements) {
      expect(e.origineAnalyse).toEqual({ moteur: 'LOCAL', modele: null });
      expect(typeof e.typeConfiance).toBe('number');
      expect(e).toHaveProperty('sphereConfiance', null);
    }
    expect(Object.keys(exporte.champs.elements)).toEqual(
      expect.arrayContaining(['typeConfiance', 'sphereConfiance', 'origineAnalyse']),
    );
  });

  it('emporte le refus de transmettre une capture', async () => {
    const gardee = await capturer({ texte: 'rendez-vous chez le médecin', source: 'ECRITE', etatTranscription: 'OK' });
    const libre = await capturer({ texte: 'préparer le budget', source: 'ECRITE', etatTranscription: 'OK' });
    await majCapture(gardee.id, { transmissible: false });

    const exporte = await construireExport();
    const parId = new Map(exporte.captures.map((c) => [c.id, c]));
    expect(parId.get(gardee.id)?.transmissible).toBe(false);
    expect(parId.get(libre.id)?.transmissible).toBe(true);
    expect(Object.keys(exporte.champs.captures)).toContain('transmissible');
  });
});

describe('l’agenda et l’export (change agenda-local)', () => {
  it('dit que l’agenda n’y figure pas, et emporte le rattachement d’une capture', async () => {
    const capture = await capturer({
      texte: 'Je reprends le devis ligne 12',
      source: 'ECRITE',
      etatTranscription: 'OK',
      agenda: { evenementId: 'comite', titre: 'Comité', participants: ['Marc Dupont'], depose: true },
    });

    const exporte = await construireExport();
    expect(exporte.lisezMoi.join(' ')).toContain('L’agenda importé n’est PAS dans ce fichier');
    expect(exporte.captures.find((c) => c.id === capture.id)?.agenda).toEqual({
      evenementId: 'comite',
      titre: 'Comité',
      participants: ['Marc Dupont'],
      depose: true,
    });
    expect(Object.keys(exporte.champs.captures)).toContain('agenda');
    expect(Object.keys(exporte.champs.elements)).toEqual(expect.arrayContaining(['duree', 'dureeConfiance', 'dureeIndice']));
  });
});
