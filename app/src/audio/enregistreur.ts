/**
 * L'enregistrement audio, via `MediaRecorder`.
 *
 * Le flux micro est ouvert une seule fois puis réutilisé : c'est ce qui permet de
 * démarrer l'enregistrement dès l'appui, sans attendre l'autorisation ni la
 * négociation du périphérique.
 */

export interface CaptureAudio {
  blob: Blob | null;
  dureeMs: number;
}

let flux: MediaStream | null = null;

export function audioDisponible(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined'
  );
}

/** Prépare le micro à l'avance pour que l'appui suivant démarre immédiatement. */
export async function prechauffer(): Promise<boolean> {
  if (!audioDisponible()) return false;
  try {
    flux ??= await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch {
    return false;
  }
}

export class Enregistreur {
  private recorder: MediaRecorder | null = null;
  private morceaux: Blob[] = [];
  private debut = 0;

  get actif(): boolean {
    return this.recorder?.state === 'recording';
  }

  /** Démarre l'enregistrement. Rend `false` si le micro est indisponible. */
  async demarrer(): Promise<boolean> {
    if (!(await prechauffer()) || !flux) return false;
    this.morceaux = [];
    this.debut = Date.now();
    this.recorder = new MediaRecorder(flux);
    this.recorder.ondataavailable = (e) => {
      if (e.data.size > 0) this.morceaux.push(e.data);
    };
    // Des tranches courtes limitent la perte en cas d'arrêt brutal.
    this.recorder.start(1000);
    return true;
  }

  /** Arrête l'enregistrement et rend l'audio complet. */
  arreter(): Promise<CaptureAudio> {
    const dureeMs = Date.now() - this.debut;
    const recorder = this.recorder;
    if (!recorder || recorder.state === 'inactive') {
      return Promise.resolve({ blob: null, dureeMs });
    }
    return new Promise((resoudre) => {
      recorder.onstop = () => {
        const blob = this.morceaux.length
          ? new Blob(this.morceaux, { type: recorder.mimeType || 'audio/webm' })
          : null;
        this.recorder = null;
        resoudre({ blob, dureeMs });
      };
      recorder.stop();
    });
  }
}
