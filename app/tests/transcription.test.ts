import { describe, expect, it } from 'vitest';
import { Transcripteur, expliquerEchec } from '../src/audio/transcription.ts';
import { enTexte } from '../src/audio/diagnostic.ts';

/**
 * La transcription a le droit d'échouer — le réseau tombe, le micro est pris, le
 * navigateur ne sait pas. Ce qu'elle n'a pas le droit de faire, c'est d'échouer en
 * silence : sans texte, aucun élément n'est produit, rien n'arrive en Revue, et une
 * capture que l'utilisateur croit prise n'existe pas. D'où ces tests, qui portent
 * tous sur une seule chose : la panne se nomme.
 */

type MoteurFactice = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: unknown) => void) | null;
  onerror: ((e: unknown) => void) | null;
  onend: (() => void) | null;
};

/** Installe un moteur factice et rend de quoi le piloter depuis le test. */
function installerMoteur(): { dernier: () => MoteurFactice | null; retirer: () => void } {
  let dernier: MoteurFactice | null = null;
  const g = globalThis as unknown as { webkitSpeechRecognition?: unknown };
  const avant = g.webkitSpeechRecognition;

  g.webkitSpeechRecognition = function (this: MoteurFactice) {
    this.lang = '';
    this.continuous = false;
    this.interimResults = false;
    this.onresult = null;
    this.onerror = null;
    this.onend = null;
    this.start = () => {};
    this.stop = () => this.onend?.();
    this.abort = () => {};
    dernier = this;
  } as unknown as typeof g.webkitSpeechRecognition;

  return {
    dernier: () => dernier,
    retirer: () => {
      if (avant === undefined) delete g.webkitSpeechRecognition;
      else g.webkitSpeechRecognition = avant;
    },
  };
}

describe('Transcripteur', () => {
  it('rend le texte reconnu, sans raison d’échec', async () => {
    const m = installerMoteur();
    const t = new Transcripteur();
    t.demarrer();
    m.dernier()?.onresult?.({
      resultIndex: 0,
      results: { length: 1, 0: { isFinal: true, 0: { transcript: 'voir Marc pour le budget' } } },
    });

    const r = await t.arreter();
    expect(r).toMatchObject({ etat: 'OK', texte: 'voir Marc pour le budget' });
    expect(r.raison).toBeUndefined();
    m.retirer();
  });

  it('conserve le code d’erreur du moteur au lieu de le jeter', async () => {
    const m = installerMoteur();
    const t = new Transcripteur();
    t.demarrer();
    m.dernier()?.onerror?.({ error: 'network' });

    const r = await t.arreter();
    expect(r.etat).toBe('ECHEC');
    expect(r.raison).toBe('network');
    m.retirer();
  });

  it('distingue une panne du moteur d’un silence', async () => {
    const m = installerMoteur();

    const enPanne = new Transcripteur();
    enPanne.demarrer();
    m.dernier()?.onerror?.({ error: 'audio-capture' });
    const panne = await enPanne.arreter();

    const muet = new Transcripteur();
    muet.demarrer();
    const silence = await muet.arreter();

    // Les deux échouent, mais plus de la même façon : c'est tout l'intérêt.
    expect(panne.raison).toBe('audio-capture');
    expect(silence.raison).toBeUndefined();
    expect(expliquerEchec(panne.raison)).not.toBe(expliquerEchec(silence.raison));
    m.retirer();
  });

  it('signale un navigateur sans reconnaissance comme indisponible, pas comme un échec', async () => {
    const g = globalThis as unknown as { webkitSpeechRecognition?: unknown; SpeechRecognition?: unknown };
    const a = g.webkitSpeechRecognition;
    const b = g.SpeechRecognition;
    delete g.webkitSpeechRecognition;
    delete g.SpeechRecognition;

    const t = new Transcripteur();
    expect(t.demarrer()).toBe(false);
    expect(await t.arreter()).toMatchObject({ etat: 'INDISPONIBLE', texte: '' });

    if (a !== undefined) g.webkitSpeechRecognition = a;
    if (b !== undefined) g.SpeechRecognition = b;
  });
});

describe('expliquerEchec', () => {
  it('nomme chaque panne connue en français, sans jamais rendre le code brut', () => {
    for (const code of ['not-allowed', 'audio-capture', 'network', 'no-speech', 'language-not-supported']) {
      const phrase = expliquerEchec(code);
      expect(phrase.length).toBeGreaterThan(10);
      expect(phrase).not.toContain(code);
    }
  });

  it('rend lisible un code inconnu plutôt que de le taire', () => {
    expect(expliquerEchec('bidule-inattendu')).toContain('bidule-inattendu');
  });

  it('dit le silence quand il n’y a aucun code', () => {
    expect(expliquerEchec(undefined)).toMatch(/aucune parole/i);
  });
});

describe('enTexte', () => {
  it('rend un constat recopiable qui porte tout ce qui sert à diagnostiquer', () => {
    const texte = enTexte(
      {
        moteurPresent: true,
        microPresent: true,
        autorisation: 'granted',
        enLigne: false,
        issue: 'network',
        explication: expliquerEchec('network'),
        texte: '',
      },
      '2026-09-13 19:54 UTC',
    );

    // Chacune de ces lignes a déjà manqué au moins une fois pour comprendre une panne.
    for (const attendu of ['version : 2026-09-13', 'moteur', 'micro', 'autorisation', 'réseau', 'issue : network']) {
      expect(texte).toContain(attendu);
    }
    expect(texte).toContain('hors ligne');
    expect(texte).toContain('aucun');
  });

  it('rapporte le texte reconnu quand la dictée a marché', () => {
    const texte = enTexte(
      {
        moteurPresent: true, microPresent: true, autorisation: 'granted', enLigne: true,
        issue: 'texte reconnu', explication: 'la dictée fonctionne sur cet appareil',
        texte: 'voir Marc pour le budget',
      },
      'v',
    );
    expect(texte).toContain('« voir Marc pour le budget »');
  });
});
