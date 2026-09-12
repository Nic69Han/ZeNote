/**
 * Écran 1 — Capturer.
 *
 * Un geste, zéro champ, zéro décision. On appuie, on parle, on relâche. Le retour
 * (vibration + son) n'arrive qu'une fois la capture **écrite en base**, jamais avant.
 */

import { Enregistreur, audioDisponible, prechauffer } from '../audio/enregistreur.ts';
import { retourDebut, retourEchec, retourEcrite } from '../audio/retour.ts';
import { Transcripteur, transcriptionDisponible } from '../audio/transcription.ts';
import { capturer, traiterFileAnalyse } from '../services/pipeline.ts';
import { listerCaptures, type Capture, type Reglages } from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';

type Etat = 'REPOS' | 'ENREGISTRE' | 'ECRITURE' | 'CONFIRME' | 'ECHEC';

/**
 * Monte l'écran Capturer et rend de quoi le démonter proprement.
 *
 * Le démontage n'est pas une formalité : quitter l'écran pendant un enregistrement
 * laissait battre la minuterie sur un écran détaché et abandonnait l'enregistrement
 * en cours. « Aucune capture perdue » est l'une des trois promesses mesurables du
 * produit — la perdre en changeant d'onglet la rendait fausse.
 */
export function montrerCapturer(racine: HTMLElement, reglages: Reglages): () => void {
  const enregistreur = new Enregistreur();
  const transcripteur = new Transcripteur();
  let etat: Etat = 'REPOS';
  let debutMs = 0;
  let chrono: number | undefined;
  let modeEcrit = false;

  const minuterie = el('span', { class: 'minuterie chiffres', texte: '0:00' });
  const etiquette = el('span', { class: 'bouton-capture__texte', texte: 'Maintenir' });
  const bouton = el(
    'button',
    {
      class: 'bouton-capture',
      type: 'button',
      'aria-label': 'Maintenir pour capturer à la voix',
    },
    el('span', { class: 'bouton-capture__anneau', 'aria-hidden': 'true' }),
    etiquette,
  );

  const apercu = el('p', { class: 'apercu', 'aria-live': 'polite' });
  const message = el('p', { class: 'message', role: 'status' });
  const journal = el('ul', { class: 'journal' });

  const zoneEcrite = el('textarea', {
    class: 'zone-ecrite',
    rows: 3,
    placeholder: 'Écrire au lieu de parler…',
    'aria-label': 'Capture écrite',
  });
  const deposer = el('button', { class: 'bouton bouton--plein', type: 'button', texte: 'Déposer' });
  const blocEcrit = el('form', { class: 'bloc-ecrit', hidden: true }, zoneEcrite, deposer);

  const basculeEcrite = el('button', {
    class: 'bouton bouton--discret',
    type: 'button',
    texte: 'Écrire plutôt',
    'aria-expanded': 'false',
  });

  // ---------------------------------------------------------------- rendu

  function afficherEtat(nouvel: Etat, texte = ''): void {
    etat = nouvel;
    bouton.dataset.etat = etat;
    message.dataset.ton =
      etat === 'ECHEC' ? 'echec' : etat === 'CONFIRME' ? 'succes' : 'neutre';
    message.textContent = texte;
    etiquette.textContent =
      etat === 'ENREGISTRE' ? 'Relâcher' : etat === 'ECRITURE' ? 'Écriture…' : 'Maintenir';
    if (texte) annoncer(texte);
  }

  async function rafraichirJournal(): Promise<void> {
    const captures = await listerCaptures();
    vider(journal);
    // Les trois dernières, sans compteur ni retard affiché : la preuve que rien
    // ne se perd, pas un tableau de bord de sa propre culpabilité.
    for (const capture of captures.slice(0, 3)) {
      journal.append(ligneJournal(capture));
    }
  }

  function ligneJournal(capture: Capture): HTMLElement {
    const heure = new Date(capture.creeLe).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const apercuTexte =
      capture.texte ||
      (capture.etatTranscription === 'INDISPONIBLE'
        ? 'Audio conservé, transcription indisponible'
        : 'Audio conservé, non transcrit');
    return el(
      'li',
      { class: 'journal__ligne' },
      el('span', { class: 'journal__heure chiffres', texte: heure }),
      el('span', { class: 'journal__texte', texte: apercuTexte }),
    );
  }

  // ------------------------------------------------------------ capture vocale

  function lancerChrono(): void {
    debutMs = Date.now();
    minuterie.textContent = '0:00';
    chrono = window.setInterval(() => {
      const s = Math.floor((Date.now() - debutMs) / 1000);
      minuterie.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    }, 250);
  }

  async function demarrer(): Promise<void> {
    if (etat === 'ENREGISTRE' || etat === 'ECRITURE') return;
    afficherEtat('ENREGISTRE', 'Enregistrement…');
    apercu.textContent = '';
    lancerChrono();
    retourDebut(reglages.sonConfirmation);
    transcripteur.ecouter((t) => {
      apercu.textContent = t;
    });
    const ecoute = transcripteur.demarrer();
    const micro = await enregistreur.demarrer();
    if (!micro && !ecoute) {
      arreterChrono();
      afficherEtat(
        'ECHEC',
        "Micro indisponible : autorisez l'accès, ou utilisez la capture écrite.",
      );
      retourEchec(reglages.sonConfirmation);
    }
  }

  function arreterChrono(): void {
    if (chrono !== undefined) window.clearInterval(chrono);
    chrono = undefined;
  }

  async function relacher(): Promise<void> {
    if (etat !== 'ENREGISTRE') return;
    arreterChrono();
    afficherEtat('ECRITURE', 'Écriture…');

    const audio = await enregistreur.arreter();
    const transcription = await transcripteur.arreter();

    if (!audio.blob && !transcription.texte) {
      afficherEtat('ECHEC', 'Rien à enregistrer : ni audio, ni texte reconnu.');
      retourEchec(reglages.sonConfirmation);
      return;
    }

    try {
      // L'écriture d'abord. Le retour ne vient qu'après, jamais sur l'intention.
      await capturer({
        texte: transcription.texte,
        source: 'VOCALE',
        etatTranscription: transcription.texte ? 'OK' : transcription.etat,
        audio: audio.blob,
        dureeMs: audio.dureeMs,
      });
      retourEcrite(reglages.sonConfirmation);
      afficherEtat('CONFIRME', "C'est à moi. Tu peux oublier.");
      apercu.textContent = '';
      await rafraichirJournal();
      void traiterFileAnalyse();
    } catch {
      retourEchec(reglages.sonConfirmation);
      afficherEtat(
        'ECHEC',
        "Écriture impossible — rien n'a été enregistré. Libérez de l'espace puis réessayez.",
      );
    }
  }

  // ------------------------------------------------------------ capture écrite

  async function deposerTexte(): Promise<void> {
    const texte = zoneEcrite.value.trim();
    if (!texte) return;
    afficherEtat('ECRITURE', 'Écriture…');
    try {
      await capturer({ texte, source: 'ECRITE', etatTranscription: 'OK' });
      retourEcrite(reglages.sonConfirmation);
      zoneEcrite.value = '';
      afficherEtat('CONFIRME', "C'est à moi. Tu peux oublier.");
      await rafraichirJournal();
      void traiterFileAnalyse();
    } catch {
      retourEchec(reglages.sonConfirmation);
      afficherEtat('ECHEC', "Écriture impossible — le texte est resté dans le champ.");
    }
  }

  // ------------------------------------------------------------------ liaisons

  bouton.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    bouton.setPointerCapture(e.pointerId);
    void demarrer();
  });
  for (const evenement of ['pointerup', 'pointercancel'] as const) {
    bouton.addEventListener(evenement, () => void relacher());
  }
  // Équivalent clavier : maintenir Espace ou Entrée, même geste, même règle.
  bouton.addEventListener('keydown', (e) => {
    if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
      e.preventDefault();
      void demarrer();
    }
  });
  bouton.addEventListener('keyup', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      void relacher();
    }
  });

  basculeEcrite.addEventListener('click', () => {
    modeEcrit = !modeEcrit;
    blocEcrit.hidden = !modeEcrit;
    basculeEcrite.setAttribute('aria-expanded', String(modeEcrit));
    basculeEcrite.textContent = modeEcrit ? 'Parler plutôt' : 'Écrire plutôt';
    if (modeEcrit) zoneEcrite.focus();
  });
  blocEcrit.addEventListener('submit', (e) => {
    e.preventDefault();
    void deposerTexte();
  });
  deposer.addEventListener('click', (e) => {
    e.preventDefault();
    void deposerTexte();
  });
  zoneEcrite.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      void deposerTexte();
    }
  });

  // ------------------------------------------------------------------- montage

  const avertissements: HTMLElement[] = [];
  if (!audioDisponible()) {
    avertissements.push(
      el('p', {
        class: 'repli',
        texte: "Micro indisponible sur cet appareil : la capture écrite prend le relais.",
      }),
    );
  } else if (!transcriptionDisponible()) {
    avertissements.push(
      el('p', {
        class: 'repli',
        texte:
          "Reconnaissance vocale indisponible ici : l'audio est conservé et la capture reste dans la file, à transcrire plus tard.",
      }),
    );
  }

  vider(racine);
  racine.append(
    el(
      'section',
      { class: 'ecran ecran--capture', 'aria-labelledby': 'titre-capture' },
      el('h1', { id: 'titre-capture', class: 'ecran__titre', texte: 'Capturer' }),
      el('p', { class: 'ecran__sous-titre', texte: 'Un geste. Rien à décider.' }),
      el('div', { class: 'zone-bouton' }, bouton, minuterie),
      apercu,
      message,
      ...avertissements,
      el('div', { class: 'actions' }, basculeEcrite),
      blocEcrit,
      el('h2', { class: 'titre-section', texte: 'Dernières captures' }),
      journal,
    ),
  );

  afficherEtat('REPOS');
  void rafraichirJournal();
  // Le micro est préparé à l'avance pour que l'appui suivant démarre sans attendre.
  void prechauffer();

  // On termine l'enregistrement comme si le doigt s'était levé, plutôt que de le jeter
  // en silence : ce que l'utilisateur a dit est déjà dit, et le perdre parce qu'il a
  // changé d'écran serait la pire trahison de la promesse de capture. `relacher` ne
  // fait rien si aucun enregistrement n'est en cours.
  return () => {
    arreterChrono();
    void relacher();
  };
}
