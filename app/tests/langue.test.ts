/**
 * Les phrases qui mêlent français et anglais.
 *
 * Spec `transcription` — « Langue et alternance ». La partie de l'exigence qui se
 * vérifie aujourd'hui est la seconde : **rien n'est traduit**. C'est une propriété
 * qu'aucun code ne réalise — il n'y a pas d'étape de traduction — et c'est
 * précisément pour ça qu'elle mérite un test : personne ne remarquerait qu'une
 * « normalisation » bien intentionnée s'est mise à franciser « deadline ».
 *
 * Un terme métier traduit serait pire qu'un terme mal transcrit. Mal transcrit, il
 * se voit et se corrige ; traduit, il se lit parfaitement et dit autre chose.
 *
 * La première moitié de l'exigence — détecter la langue et transcrire correctement
 * l'anglais dicté — n'est pas tenue : le modèle embarqué est français et rendra
 * toujours « deadline » en approximation phonétique. Ce qui la rattrape en pratique
 * est le lexique personnel, vérifié ici aussi : corriger une fois suffit.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { analyser } from '../src/analyse/index.ts';
import { transcriptionLisible } from '../src/core/regles.ts';
import { apprendre, appliquer } from '../src/services/lexique.ts';
import { capturer } from '../src/services/pipeline.ts';
import { elementsDeCapture, lireCapture, toutEffacer } from '../src/stockage/depot.ts';

beforeEach(async () => {
  await toutEffacer();
});

/** Les termes qu'un manager dicte en anglais sans y penser, et qui doivent survivre. */
const TERMES = ['deadline', 'call', 'follow-up', 'board', 'roadmap', 'kickoff', 'CEO'];

const PHRASE =
  'euh préparer le board de jeudi et caler un call avec le CEO avant la deadline ' +
  'du kickoff, puis envoyer le follow-up et la roadmap à Sophie';

describe('rien n’est traduit', () => {
  it('la version lisible garde chaque terme dans sa langue', () => {
    const lisible = transcriptionLisible(PHRASE);
    for (const terme of TERMES) {
      expect(lisible).toContain(terme);
    }
    // Et elle a bien fait son travail par ailleurs.
    expect(lisible).not.toContain('euh ');
  });

  it('l’analyse rend des éléments qui citent les termes tels quels', () => {
    const { elements } = analyser(PHRASE, 'c-1', '2026-09-21');
    expect(elements.length).toBeGreaterThan(0);

    const tout = elements.map((e) => e.texte).join(' ');
    // Chaque terme se retrouve dans au moins un élément, à l'identique.
    for (const terme of ['board', 'call', 'CEO', 'deadline']) {
      expect(tout).toContain(terme);
    }
  });

  it('la capture écrite conserve la phrase au caractère près', async () => {
    const capture = await capturer({
      texte: PHRASE,
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    expect((await lireCapture(capture.id))?.texte).toBe(PHRASE.trim());
  });

  it('rien n’est perdu entre la capture et les éléments', async () => {
    const capture = await capturer({
      texte: 'envoyer le follow-up à Karim avant la deadline',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    const { elements } = analyser(
      (await lireCapture(capture.id))!.texte,
      capture.id,
      '2026-09-21',
    );
    const tout = elements.map((e) => e.texte).join(' ');
    expect(tout).toContain('follow-up');
    expect(tout).toContain('Karim');
  });

  it('un élément déjà écrit garde son terme anglais en base', async () => {
    const capture = await capturer({
      texte: 'caler le kickoff avec le board',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    const { elements } = analyser('caler le kickoff avec le board', capture.id, '2026-09-21');
    expect(elements.length).toBeGreaterThan(0);
    // Passé par le dépôt, puis relu : c'est là qu'une normalisation se glisserait.
    const { remplacerElements } = await import('../src/stockage/depot.ts');
    await remplacerElements(capture.id, elements);
    const relus = await elementsDeCapture(capture.id);
    expect(relus.map((e) => e.texte).join(' ')).toContain('kickoff');
  });
});

describe('ce que le lexique rattrape', () => {
  it('un terme anglais mal entendu, corrigé une fois, ressort juste', () => {
    // Le modèle est français : « deadline » ressort en approximation phonétique.
    // C'est le seul remède disponible aujourd'hui, et il suffit pour une poignée de
    // termes métier — ce qui est exactement l'usage visé.
    const lexique = apprendre(
      'envoyer ça avant la dédeline',
      'envoyer ça avant la deadline',
    );
    expect(lexique).toEqual([{ malEntendu: 'dedeline', correction: 'deadline', fois: 1 }]);

    const suivante = appliquer('caler le call avant la dédeline'.split(' '), lexique);
    expect(suivante.join(' ')).toBe('caler le call avant la deadline');
  });

  it('le trait d’union d’un terme composé ne le casse pas', () => {
    const lexique = apprendre('envoyer le folop à Marc', 'envoyer le follow-up à Marc');
    expect(lexique).toEqual([{ malEntendu: 'folop', correction: 'follow-up', fois: 1 }]);
    expect(appliquer(['le', 'folop'], lexique)).toEqual(['le', 'follow-up']);
  });
});
