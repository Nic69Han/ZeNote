/**
 * Réécouter ce qui a été dit.
 *
 * Spec `transcription` — « Conservation de la source » : l'audio d'origine et la
 * transcription brute restent consultables depuis tout élément qui en découle, et
 * l'extrait démarre au passage à l'origine de cet élément.
 *
 * C'est la garantie qui rend la transcription supportable. Une reconnaissance vocale
 * se trompe, ou ne rend rien du tout ; tant que l'audio est là et qu'on peut
 * l'atteindre, la note n'est pas perdue — seulement mal lue. Un enregistrement
 * conservé mais injoignable ne vaut pas mieux qu'un enregistrement absent, et c'est
 * exactement ce qu'était l'audio de ZeNote jusqu'ici : écrit en base, jamais rendu.
 *
 * Le module ne décide de rien : il rend un lecteur, ou dit pourquoi il n'y en a pas.
 */

import { el } from './dom.ts';
import type { Capture } from '../stockage/depot.ts';

export interface Lecteur {
  noeud: HTMLElement;
  /** Vrai quand il y a réellement un audio à écouter. */
  readonly disponible: boolean;
  /**
   * Charge l'audio s'il ne l'est pas encore. À appeler quand le repli qui contient le
   * lecteur s'ouvre — pas avant : une Revue chargée présente plusieurs captures, et en
   * tenir dix en mémoire pour n'en écouter aucune serait payer l'audio sans jamais
   * l'entendre.
   */
  ouvrir: () => void;
  /**
   * Va à cette position, en millisecondes, et joue.
   *
   * La position vient de l'analyse, qui la déduit de la place du passage dans le texte
   * au prorata de la durée. Elle vise le bon moment, pas la bonne milliseconde — les
   * écrans le disent plutôt que de laisser croire à une mesure.
   */
  allerA: (ms: number) => void;
  /** Libère l'URL objet. À appeler en quittant l'écran, sinon le blob reste en mémoire. */
  demonter: () => void;
}

/** Une durée en millisecondes, dite comme on la lirait : « 1 min 04 ». */
export function duree(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const minutes = Math.floor(total / 60);
  const secondes = total % 60;
  return minutes === 0 ? `${secondes} s` : `${minutes} min ${String(secondes).padStart(2, '0')}`;
}

/** Le lecteur de l'audio d'une capture, ou l'explication de son absence. */
export function lecteurAudio(capture: Capture | undefined): Lecteur {
  if (!capture) return absent('Source introuvable : cet élément n’a plus sa capture.');
  if (capture.source === 'ECRITE') return absent('Capture écrite : il n’y a pas d’audio.');
  if (!capture.audio) {
    return absent(
      capture.incomplete
        ? 'L’enregistrement s’est interrompu avant d’être écrit : pas d’audio conservé.'
        : 'Pas d’audio conservé pour cette capture.',
    );
  }

  const blob = capture.audio;
  let adresse: string | undefined;
  /** Position demandée avant que l'audio ne sache sa durée ; appliquée à ce moment-là. */
  let attendue: number | null = null;

  const audio = el('audio', {
    class: 'lecteur__audio',
    controls: 'controls',
    preload: 'none',
  }) as HTMLAudioElement;

  function positionner(secondes: number): void {
    // `duration` vaut parfois l'infini sur un enregistrement produit en flux : on ne
    // peut alors pas vérifier que la position tombe dedans, et on tente quand même —
    // le navigateur ramène au plus près.
    const fin = audio.duration;
    if (Number.isFinite(fin) && secondes >= fin) return;
    try {
      audio.currentTime = secondes;
    } catch {
      // Un navigateur qui refuse le positionnement rend l'extrait depuis le début.
      // C'est moins bien, ce n'est pas une panne : l'audio reste écoutable.
    }
  }

  audio.addEventListener('loadedmetadata', () => {
    if (attendue === null) return;
    positionner(attendue);
    attendue = null;
    // La lecture peut être refusée (geste utilisateur exigé) : l'audio reste posé au
    // bon endroit, prêt pour l'appui suivant. Rien à signaler, rien à rattraper.
    void audio.play().catch(() => {});
  });

  function ouvrir(): void {
    if (adresse) return;
    adresse = URL.createObjectURL(blob);
    audio.setAttribute('src', adresse);
    audio.load();
  }

  function allerA(ms: number): void {
    const secondes = Math.max(0, ms / 1000);
    ouvrir();
    if (audio.readyState >= 1) {
      positionner(secondes);
      void audio.play().catch(() => {});
    } else {
      attendue = secondes;
    }
  }

  return {
    noeud: el(
      'div',
      { class: 'lecteur' },
      audio,
      el('p', { class: 'lecteur__note', texte: 'Enregistrement d’origine, intact.' }),
    ),
    disponible: true,
    ouvrir,
    allerA,
    demonter: () => {
      audio.pause();
      audio.removeAttribute('src');
      if (adresse) URL.revokeObjectURL(adresse);
      adresse = undefined;
    },
  };
}

function absent(explication: string): Lecteur {
  return {
    noeud: el('p', { class: 'lecteur lecteur--absent', texte: explication }),
    disponible: false,
    ouvrir: () => {},
    allerA: () => {},
    demonter: () => {},
  };
}
