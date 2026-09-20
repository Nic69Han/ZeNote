/**
 * L'enregistrement audio, via `MediaRecorder`.
 *
 * Le flux micro est ouvert une seule fois puis réutilisé : c'est ce qui permet de
 * démarrer l'enregistrement dès l'appui, sans attendre l'autorisation ni la
 * négociation du périphérique.
 *
 * ## Les morceaux sont écrits pendant qu'on parle
 *
 * `MediaRecorder` garde tout en mémoire jusqu'à l'arrêt. Une application tuée au
 * milieu d'une phrase — onglet fermé, batterie à plat, système qui récupère la
 * mémoire — emportait donc l'enregistrement entier, et « aucune capture perdue » ne
 * tenait que tant que rien de brutal n'arrivait.
 *
 * Chaque morceau part donc en base dès qu'il arrive. L'arrêt normal les assemble et
 * les efface ; ceux qui survivent à un redémarrage sont, par construction, ce qu'un
 * arrêt brutal a laissé — et `pipeline.recupererEnregistrements()` en fait une
 * capture marquée incomplète.
 */

import { ecrireMorceau, supprimerMorceaux } from '../stockage/depot.ts';
import { identifiant } from '../analyse/index.ts';

export interface CaptureAudio {
  blob: Blob | null;
  dureeMs: number;
}

let flux: MediaStream | null = null;

/**
 * L'enregistrement en cours, s'il y en a un.
 *
 * La récupération le consulte : ses morceaux ne sont pas des restes d'un arrêt
 * brutal, ils sont en train d'être écrits. Les lui donner reviendrait à voler
 * l'enregistrement qu'on est en train de faire.
 */
let enCours: string | null = null;

/** L'identifiant de l'enregistrement en cours, ou `null`. */
export function enregistrementEnCours(): string | null {
  return enCours;
}

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
  private enregistrementId: string | null = null;
  private rang = 0;
  /** Les écritures de morceaux lancées, pour que l'arrêt n'efface pas avant elles. */
  private ecritures: Promise<unknown>[] = [];

  get actif(): boolean {
    return this.recorder?.state === 'recording';
  }

  /** Démarre l'enregistrement. Rend `false` si le micro est indisponible. */
  async demarrer(): Promise<boolean> {
    if (!(await prechauffer()) || !flux) return false;
    this.morceaux = [];
    this.ecritures = [];
    this.rang = 0;
    this.debut = Date.now();
    this.enregistrementId = identifiant('enr');
    enCours = this.enregistrementId;

    this.recorder = new MediaRecorder(flux);
    this.recorder.ondataavailable = (e) => {
      if (e.data.size === 0) return;
      this.morceaux.push(e.data);
      const id = this.enregistrementId;
      if (!id) return;
      const rang = this.rang++;
      // Écrit sans être attendu : la capture ne doit rien attendre pendant qu'on
      // parle. L'échec est silencieux ici — ce qui compte est ce qui a pu être
      // écrit, et l'arrêt normal rend de toute façon ce qu'il a en mémoire.
      this.ecritures.push(
        ecrireMorceau({
          id: `${id}-${String(rang).padStart(4, '0')}`,
          enregistrementId: id,
          rang,
          aMs: Date.now() - this.debut,
          blob: e.data,
          typeMime: this.recorder?.mimeType || 'audio/webm',
        }).catch(() => {}),
      );
    };
    // Des tranches courtes limitent la perte en cas d'arrêt brutal.
    this.recorder.start(1000);
    return true;
  }

  /** Arrête l'enregistrement et rend l'audio complet. */
  arreter(): Promise<CaptureAudio> {
    const dureeMs = Date.now() - this.debut;
    const recorder = this.recorder;
    const id = this.enregistrementId;
    this.enregistrementId = null;
    if (enCours === id) enCours = null;

    if (!recorder || recorder.state === 'inactive') {
      void this.oublierMorceaux(id);
      return Promise.resolve({ blob: null, dureeMs });
    }
    return new Promise((resoudre) => {
      recorder.onstop = () => {
        const blob = this.morceaux.length
          ? new Blob(this.morceaux, { type: recorder.mimeType || 'audio/webm' })
          : null;
        this.recorder = null;
        // Les morceaux ont fait leur office : l'enregistrement est entier en
        // mémoire. Les effacer maintenant évite qu'un démarrage ultérieur les
        // prenne pour les restes d'un arrêt brutal et crée une capture en double.
        void this.oublierMorceaux(id);
        resoudre({ blob, dureeMs });
      };
      recorder.stop();
    });
  }

  /** Attend les écritures en vol, puis efface. Sans quoi une arriverait après. */
  private async oublierMorceaux(id: string | null): Promise<void> {
    if (!id) return;
    await Promise.allSettled(this.ecritures);
    this.ecritures = [];
    await supprimerMorceaux(id).catch(() => {});
  }
}
