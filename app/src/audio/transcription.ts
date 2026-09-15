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
  /**
   * Pourquoi rien n'a été transcrit, quand c'est le cas.
   *
   * Le code rendu par le moteur (`network`, `not-allowed`, `audio-capture`,
   * `no-speech`…) est la seule chose qui distingue « je n'ai rien entendu » de
   * « le service est injoignable ». Le perdre, c'est condamner l'utilisateur à
   * constater une panne sans jamais pouvoir la nommer.
   */
  raison?: string;
}

/** Ce que le code d'erreur du moteur veut dire, en français. */
export function expliquerEchec(raison: string | undefined): string {
  switch (raison) {
    case 'not-allowed':
    case 'service-not-allowed':
      return "le micro n'a pas été autorisé pour la reconnaissance vocale";
    case 'audio-capture':
      // Mesuré : ce code apparaît aussi quand le moteur tourne sans service de
      // reconnaissance derrière lui, pas seulement quand une autre application tient
      // le micro. Affirmer la contention serait envoyer l'utilisateur sur une fausse
      // piste — on nomme les deux causes possibles.
      return "le moteur n'a pas pu prendre le micro — soit une autre application "
        + "l'utilise, soit la reconnaissance vocale n'est pas disponible sur cet appareil";
    case 'network':
      return "le service de reconnaissance du navigateur n'a pas pu être joint";
    case 'no-speech':
      return 'aucune parole distincte n’a été reconnue';
    case 'language-not-supported':
      return 'le français n’est pas disponible pour la reconnaissance sur cet appareil';
    case 'aborted':
      return 'la reconnaissance a été interrompue';
    default:
      return raison ? `le moteur a répondu « ${raison} »` : 'aucune parole n’a été reconnue';
  }
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
  private raisonErreur: string | undefined;
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
    this.raisonErreur = undefined;
    try {
      const moteur = new Fabrique();
      moteur.lang = 'fr-FR';
      moteur.continuous = true;
      moteur.interimResults = true;
      moteur.onresult = (e) => this.accumuler(e);
      moteur.onerror = (e) => {
        // Le code porté par l'événement est la seule information exploitable ici.
        this.raisonErreur = (e as { error?: string })?.error ?? 'erreur inconnue';
      };
      moteur.start();
      this.moteur = moteur;
      return true;
    } catch (e) {
      this.raisonErreur = e instanceof Error ? e.message : 'démarrage impossible';
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
      return transcriptionDisponible()
        ? { texte: '', etat: 'ECHEC', raison: this.raisonErreur }
        : { texte: '', etat: 'INDISPONIBLE' };
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
    // Sans texte, on rend la raison telle que le moteur l'a donnée — ou son absence,
    // qui signifie qu'il a bien tourné sans rien reconnaître.
    return { texte: '', etat: 'ECHEC', raison: this.raisonErreur };
  }
}
