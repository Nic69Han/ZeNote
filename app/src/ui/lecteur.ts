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
 *
 * ## Réécouter vite
 *
 * Une note vocale est facile à saisir et longue à réécouter. Le lecteur propose donc
 * trois vitesses (1×, 1,5×, 2×), voix non déformée, et un interrupteur qui saute les
 * pauses (spec `ecoute-acceleree`). Tout cela passe par le lecteur, donc vaut partout où
 * l'on réécoute — Revue, Maintenant, Recherche — sans que ces écrans n'en sachent rien.
 * L'enregistrement d'origine, lui, n'est jamais touché : le lecteur ne fait que le lire.
 */

import '../styles/ecoute.css';
import { el } from './dom.ts';
import { decoderEchantillons, type Decodeur } from '../audio/decodage.ts';
import {
  GARDE_SILENCE,
  positionDeSaut,
  silences as detecterSilences,
  type Silence,
} from '../audio/silences.ts';
import {
  VITESSES,
  choisirRaccourcirSilences,
  choisirVitesse,
  chargerPreferences,
  preferences,
  surPreferences,
  type PreferencesEcoute,
  type Vitesse,
} from '../services/ecoute.ts';
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

// ------------------------------------------------------- dépendances du navigateur

/** Ce que le lecteur emprunte au navigateur et que les tests remplacent. */
export interface DependancesLecteur {
  /** Décode l'audio en échantillons. `AudioContext` n'existe pas sous Node. */
  decodeur: Decodeur;
  /** Demande un rappel à la prochaine image. Rend de quoi l'annuler. */
  image: (rappel: () => void) => unknown;
  annulerImage: (poignee: unknown) => void;
}

const dependancesReelles: DependancesLecteur = {
  decodeur: decoderEchantillons,
  image: (rappel) =>
    typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame(rappel)
      : setTimeout(rappel, 50),
  annulerImage: (poignee) => {
    if (typeof cancelAnimationFrame === 'function') cancelAnimationFrame(poignee as number);
    else clearTimeout(poignee as ReturnType<typeof setTimeout>);
  },
};

let dependances: DependancesLecteur = dependancesReelles;

/**
 * Les pauses déjà cherchées, gardées pour la session : décoder une réunion d'une heure
 * est la partie coûteuse, et rouvrir la même capture ne doit pas la repayer.
 */
const cartes = new Map<string, Promise<Silence[]>>();

/** Remplace tout ou partie des dépendances ; `null` rétablit les vraies. Réservé aux tests. */
export function brancherLecteur(autres: Partial<DependancesLecteur> | null): void {
  dependances = autres ? { ...dependancesReelles, ...autres } : dependancesReelles;
  cartes.clear();
}

/** La phrase dite quand les pauses ne peuvent pas être trouvées. L'écoute normale reste possible. */
export const SILENCES_NON_DETECTABLES = 'Silences non détectables pour cet enregistrement';

type EtatSilences = 'inactif' | 'analyse' | 'pret' | 'indisponible';

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
  const cleCarte = `${capture.id}:${blob.size}`;
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

  // ----------------------------------------------------------------- vitesse
  //
  // Spec `ecoute-acceleree` — « Vitesse de lecture ». `defaultPlaybackRate` autant que
  // `playbackRate` : charger une source (`load`) remet la vitesse à la valeur par défaut,
  // et un lecteur ouvert après avoir choisi 1,5× repartirait sinon à 1×. La hauteur est
  // préservée : une voix accélérée qui monte dans l'aigu se comprend mal.

  const boutonsVitesse = VITESSES.map((vitesse) =>
    el('button', {
      class: 'lecteur__vitesse',
      type: 'button',
      'data-vitesse': String(vitesse),
      'aria-pressed': 'false',
      texte: `${String(vitesse).replace('.', ',')}×`,
      onclick: () => choisirVitesse(vitesse),
    }),
  );

  function appliquerVitesse(vitesse: Vitesse): void {
    audio.defaultPlaybackRate = vitesse;
    audio.playbackRate = vitesse;
    audio.preservesPitch = true;
    (audio as unknown as { webkitPreservesPitch: boolean }).webkitPreservesPitch = true;
  }

  /** Les boutons disent la vitesse réelle, y compris quand le menu du navigateur l'a changée. */
  function marquerVitesse(): void {
    for (const bouton of boutonsVitesse) {
      const choisie = Number(bouton.getAttribute('data-vitesse')) === audio.playbackRate;
      bouton.setAttribute('aria-pressed', String(choisie));
    }
  }

  // ---------------------------------------------------------------- silences
  //
  // Spec `ecoute-acceleree` — « Silences raccourcis ». Le blob est décodé une fois,
  // quand l'interrupteur est allumé ; la lecture saute ensuite de pause en pause.
  // L'audio stocké n'est ni modifié ni remplacé, et les positions des passages ne
  // bougent pas : on lit le même fichier, en avançant plus vite par endroits.

  let etat: EtatSilences = 'inactif';
  let carte: Silence[] = [];
  let surveillance: unknown = null;
  let demonte = false;

  const messageSilences = el('p', {
    class: 'lecteur__etat',
    role: 'status',
    hidden: true,
  });
  const boutonSilences = el('button', {
    class: 'lecteur__silences',
    type: 'button',
    'aria-pressed': 'false',
    texte: 'Raccourcir les silences',
    onclick: () => choisirRaccourcirSilences(!preferences().raccourcirSilences),
  });

  const noeud = el(
    'div',
    { class: 'lecteur', 'data-silences': 'inactif' },
    audio,
    el(
      'div',
      { class: 'lecteur__ecoute' },
      el(
        'div',
        { class: 'lecteur__vitesses', role: 'group', 'aria-label': 'Vitesse de lecture' },
        ...boutonsVitesse,
      ),
      boutonSilences,
    ),
    messageSilences,
    el('p', { class: 'lecteur__note', texte: 'Enregistrement d’origine, intact.' }),
  );

  function annoncerSilences(texte: string): void {
    messageSilences.textContent = texte;
    if (texte === '') messageSilences.setAttribute('hidden', '');
    else messageSilences.removeAttribute('hidden');
  }

  function poserEtat(suivant: EtatSilences): void {
    etat = suivant;
    noeud.setAttribute('data-silences', suivant);
  }

  /** Cherche les pauses de cet enregistrement, une seule fois par capture et par session. */
  async function chercherPauses(): Promise<void> {
    if (etat !== 'inactif') return;
    poserEtat('analyse');
    annoncerSilences('Recherche des pauses…');

    let promesse = cartes.get(cleCarte);
    if (!promesse) {
      promesse = dependances
        .decodeur(blob)
        .then(({ echantillons, frequence }) => detecterSilences(echantillons, frequence));
      cartes.set(cleCarte, promesse);
    }

    try {
      carte = await promesse;
    } catch {
      // Un échec ne doit pas rester en cache : le navigateur peut réussir plus tard.
      cartes.delete(cleCarte);
      if (demonte) return;
      // Repli annoncé, écoute normale intacte : l'interrupteur ne peut plus servir ici,
      // mais le réglage général, lui, reste celui de l'utilisateur pour les autres audios.
      poserEtat('indisponible');
      annoncerSilences(SILENCES_NON_DETECTABLES);
      appliquerInterrupteur();
      return;
    }
    if (demonte) return;
    poserEtat('pret');
    appliquerInterrupteur();
  }

  /** Ce que le lecteur dit des pauses trouvées, quand le raccourcissement est allumé. */
  function direPauses(): void {
    annoncerSilences(
      carte.length === 0
        ? 'Aucune longue pause dans cet enregistrement.'
        : 'Pauses de plus de 0,7 s raccourcies à 0,3 s.',
    );
  }

  function raccourcissementActif(): boolean {
    return preferences().raccourcirSilences && etat === 'pret';
  }

  /** Saute la pause en cours, s'il y en a une. Appelé à chaque image pendant la lecture. */
  function sauterSiPause(): void {
    if (!raccourcissementActif()) return;
    const cible = positionDeSaut(carte, audio.currentTime, GARDE_SILENCE);
    if (cible !== null) positionner(cible);
  }

  function demarrerSurveillance(): void {
    if (surveillance !== null || !raccourcissementActif() || audio.paused) return;
    const boucle = (): void => {
      surveillance = null;
      if (demonte || audio.paused || audio.ended || !raccourcissementActif()) return;
      sauterSiPause();
      surveillance = dependances.image(boucle);
    };
    surveillance = dependances.image(boucle);
  }

  function arreterSurveillance(): void {
    if (surveillance !== null) dependances.annulerImage(surveillance);
    surveillance = null;
  }

  /** L'interrupteur reflète le réglage, sauf quand cet audio-ci ne peut pas s'y plier. */
  function appliquerInterrupteur(): void {
    const voulu = preferences().raccourcirSilences;
    const indisponible = etat === 'indisponible';
    boutonSilences.setAttribute('aria-pressed', String(voulu && !indisponible));
    if (indisponible) boutonSilences.setAttribute('disabled', '');
    else boutonSilences.removeAttribute('disabled');

    if (!voulu) {
      arreterSurveillance();
      if (etat === 'pret') annoncerSilences('');
      return;
    }
    if (etat === 'inactif' && adresse !== undefined) void chercherPauses();
    else if (etat === 'pret') {
      direPauses();
      demarrerSurveillance();
    }
  }

  function appliquerPreferences(prefs: PreferencesEcoute): void {
    appliquerVitesse(prefs.vitesse);
    marquerVitesse();
    appliquerInterrupteur();
  }

  audio.addEventListener('ratechange', marquerVitesse);
  audio.addEventListener('play', demarrerSurveillance);
  audio.addEventListener('pause', arreterSurveillance);
  audio.addEventListener('ended', arreterSurveillance);

  audio.addEventListener('loadedmetadata', () => {
    // La vitesse survit au chargement, mais on ne s'y fie pas : un navigateur qui la
    // remettrait à 1× rendrait un lecteur qui ment sur ses propres boutons.
    appliquerVitesse(preferences().vitesse);
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
    // Le décodage est la partie coûteuse : il n'a lieu qu'à l'ouverture, jamais pour
    // dix lecteurs de Revue qu'on n'écoutera pas.
    if (preferences().raccourcirSilences) void chercherPauses();
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

  // Réglé dès la naissance sur ce qu'on sait déjà, puis sur ce que la base dira : un
  // lecteur créé avant la fin de la lecture des réglages est rattrapé, pas oublié.
  appliquerPreferences(preferences());
  const seDesabonner = surPreferences(appliquerPreferences);
  void chargerPreferences();

  return {
    noeud,
    disponible: true,
    ouvrir,
    allerA,
    demonter: () => {
      demonte = true;
      seDesabonner();
      arreterSurveillance();
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
