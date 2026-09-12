/**
 * Transcription par la Web Speech API (`webkitSpeechRecognition`), en `fr-FR`.
 *
 * Quand le moteur n'est pas disponible — navigateur sans reconnaissance, ou hors
 * ligne sur un moteur qui exige le réseau — la capture n'est pas perdue pour autant :
 * l'audio est conservé, la capture est marquée non transcrite, et l'application
 * l'annonce clairement plutôt que de faire semblant.
 */

type MoteurReconnaissance = {
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

type FabriqueReconnaissance = new () => MoteurReconnaissance;

function fabrique(): FabriqueReconnaissance | null {
  const f = globalThis as unknown as {
    webkitSpeechRecognition?: FabriqueReconnaissance;
    SpeechRecognition?: FabriqueReconnaissance;
  };
  return f.webkitSpeechRecognition ?? f.SpeechRecognition ?? null;
}

export function transcriptionDisponible(): boolean {
  return fabrique() !== null;
}

export interface ResultatTranscription {
  texte: string;
  /** `OK` si du texte a été obtenu, `INDISPONIBLE` si le moteur manque, `ECHEC` sinon. */
  etat: 'OK' | 'INDISPONIBLE' | 'ECHEC';
}

/**
 * Écoute pendant toute la durée d'une capture et accumule le texte reconnu.
 *
 * L'objet rendu est piloté par l'écran de capture : `demarrer` à l'appui,
 * `arreter` au relâchement. Il ne jette jamais : un échec est un état, pas une
 * exception, parce qu'il ne doit jamais empêcher l'écriture de la capture.
 */
export class Transcripteur {
  private moteur: MoteurReconnaissance | null = null;
  private texte = '';
  private partiel = '';
  private erreur = false;
  private surTexte: ((texte: string) => void) | null = null;

  /** Notifie l'écran du texte reconnu au fil de l'eau (final + en cours). */
  ecouter(rappel: (texte: string) => void): void {
    this.surTexte = rappel;
  }

  demarrer(): boolean {
    const Fabrique = fabrique();
    if (!Fabrique) return false;
    this.texte = '';
    this.partiel = '';
    this.erreur = false;
    try {
      const moteur = new Fabrique();
      moteur.lang = 'fr-FR';
      moteur.continuous = true;
      moteur.interimResults = true;
      moteur.onresult = (e) => this.accumuler(e);
      moteur.onerror = () => {
        this.erreur = true;
      };
      moteur.start();
      this.moteur = moteur;
      return true;
    } catch {
      this.erreur = true;
      return false;
    }
  }

  private accumuler(evenement: unknown): void {
    const e = evenement as {
      resultIndex: number;
      results: { length: number; [i: number]: { isFinal: boolean; 0: { transcript: string } } };
    };
    let partiel = '';
    for (let i = e.resultIndex; i < e.results.length; i += 1) {
      const resultat = e.results[i];
      if (resultat.isFinal) this.texte += `${resultat[0].transcript} `;
      else partiel += resultat[0].transcript;
    }
    this.partiel = partiel;
    this.surTexte?.(this.courant());
  }

  courant(): string {
    return `${this.texte}${this.partiel}`.replace(/\s+/g, ' ').trim();
  }

  /** Arrête l'écoute et rend le texte accumulé avec son état. */
  async arreter(): Promise<ResultatTranscription> {
    const moteur = this.moteur;
    if (!moteur) {
      return { texte: '', etat: transcriptionDisponible() ? 'ECHEC' : 'INDISPONIBLE' };
    }
    await new Promise<void>((resoudre) => {
      const fin = () => resoudre();
      moteur.onend = fin;
      try {
        moteur.stop();
      } catch {
        fin();
      }
      // Filet : certains moteurs n'émettent jamais `onend`.
      setTimeout(fin, 1200);
    });
    this.moteur = null;
    const texte = this.courant();
    if (texte) return { texte, etat: 'OK' };
    return { texte: '', etat: this.erreur ? 'ECHEC' : 'ECHEC' };
  }
}
