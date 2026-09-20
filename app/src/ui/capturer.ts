/**
 * Écran 1 — Capturer.
 *
 * Un geste, zéro champ, zéro décision. On appuie, on parle, on relâche. Le retour
 * (vibration + son) n'arrive qu'une fois la capture **écrite en base**, jamais avant.
 */

import { Enregistreur, audioDisponible, prechauffer } from '../audio/enregistreur.ts';
import { arreterReunion, demarrerReunion, reunionEnCours } from '../audio/reunion.ts';
import { retourDebut, retourEchec, retourEcrite } from '../audio/retour.ts';
import { transcriptionLocaleDisponible } from '../audio/transcripteurLocal.ts';
import {
  aujourdhui,
  capturer,
  traiterFileAnalyse,
  traiterFileTranscription,
} from '../services/pipeline.ts';
import { deposerCompteRendu } from '../services/reunion.ts';
import { CoffreVerrouille } from '../securite/coffre.ts';
import { espaceLiberable, estManqueDePlace, libererEspace } from '../services/espace.ts';
import {
  aTranscrire,
  ecrireReglage,
  lireReglages,
  listerCaptures,
  type Capture,
  type Reglages,
} from '../stockage/depot.ts';
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
  let etat: Etat = 'REPOS';
  /** Ce que la transcription en arrière-plan a reconnu jusqu'ici, par capture. */
  const avancement = new Map<string, string>();
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
  /** Proposé seulement quand l'écriture a échoué faute de place. */
  const secours = el('div', { class: 'secours', hidden: true });
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

  // ------------------------------------------------- l'import d'un compte rendu
  //
  // Spec `reunions` — « Traitement d'un compte rendu externe ». Un compte rendu fait
  // dix écrans et contient le mélange habituel : ce qu'on a promis, ce que les
  // autres ont promis, et le reste. Relu deux jours plus tard, on n'y retrouve pas
  // ses propres engagements — qui sont pourtant la seule raison de l'ouvrir.
  //
  // Le nom est demandé, et retenu. Sans lui rien n'est attribué : deviner ferait
  // porter à quelqu'un des engagements qui ne sont pas les siens.
  const zoneImport = el('textarea', {
    class: 'zone-import',
    rows: 6,
    placeholder: 'Coller le compte rendu…',
    'aria-label': 'Compte rendu de réunion',
  }) as HTMLTextAreaElement;

  const champNom = el('input', {
    class: 'champ',
    type: 'text',
    placeholder: 'Votre nom dans le compte rendu',
    'aria-label': 'Votre nom dans le compte rendu',
  }) as HTMLInputElement;

  const retourImport = el('p', { class: 'import__retour', hidden: true });

  const importer = el('button', {
    class: 'bouton bouton--plein',
    type: 'button',
    texte: 'Importer',
  });

  const blocImport = el(
    'div',
    { class: 'bloc-import', hidden: true },
    champNom,
    zoneImport,
    importer,
    retourImport,
  );

  // ------------------------------------------------- l'enregistrement de réunion
  //
  // Spec `reunions` — « Aucun enregistrement à l'insu des participants ». Une réunion
  // dure une heure : l'appui long n'est pas tenable, il faut un début et une fin. Ce
  // qui ne change pas, c'est qu'aucun micro ne s'ouvre sans un geste — il n'existe
  // dans ce produit aucun chemin qui enregistre tout seul, ni au démarrage, ni à
  // l'arrivée d'une réunion dans un agenda.
  const boutonReunion = el('button', {
    class: 'bouton bouton--discret',
    type: 'button',
    texte: 'Enregistrer une réunion',
  });

  /** Le bouton dit toujours ce qui se passe, y compris après un retour sur l'écran. */
  function ajusterBoutonReunion(): void {
    const enCours = reunionEnCours();
    boutonReunion.textContent = enCours ? 'Arrêter l’enregistrement' : 'Enregistrer une réunion';
    boutonReunion.classList.toggle('bouton--enregistre', enCours);
  }

  async function basculerReunion(): Promise<void> {
    if (!reunionEnCours()) {
      if (!(await demarrerReunion())) {
        afficherEtat('ECHEC', "Micro indisponible : autorisez l'accès.");
        retourEchec(reglages.sonConfirmation);
        return;
      }
      ajusterBoutonReunion();
      retourDebut(reglages.sonConfirmation);
      annoncer('Enregistrement de réunion commencé. Un voyant le signale.');
      return;
    }

    const audio = await arreterReunion();
    ajusterBoutonReunion();

    if (!audio?.blob) {
      afficherEtat('ECHEC', "Rien n'a été enregistré : le micro n'a rien rendu.");
      retourEchec(reglages.sonConfirmation);
      return;
    }

    try {
      await capturer({
        texte: '',
        source: 'VOCALE',
        etatTranscription: 'ABSENTE',
        audio: audio.blob,
        dureeMs: audio.dureeMs,
      });
      retourEcrite(reglages.sonConfirmation);
      afficherEtat('CONFIRME', 'Réunion enregistrée. La transcription suit.');
      await rafraichirJournal();
      transcrireEnArrierePlan();
    } catch (erreur) {
      retourEchec(reglages.sonConfirmation);
      await signalerEchecEcriture(erreur, () => basculerReunion());
    }
  }

  boutonReunion.addEventListener('click', () => void basculerReunion());
  ajusterBoutonReunion();

  const basculeImport = el('button', {
    class: 'bouton bouton--discret',
    type: 'button',
    texte: 'Importer un compte rendu',
    'aria-expanded': 'false',
  });

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
    let captures: Capture[];
    try {
      captures = await listerCaptures();
    } catch (erreur) {
      // Coffre fermé : on peut déposer mais pas relire. Le dire vaut mieux qu'un
      // journal vide, qui laisserait croire que la capture n'a pas été écrite.
      vider(journal);
      if (erreur instanceof CoffreVerrouille) {
        journal.append(
          el(
            'li',
            { class: 'journal__ligne', 'data-etat': 'verrouille' },
            el('span', {
              class: 'journal__texte',
              texte: 'Vos notes sont chiffrées et fermées. Ce que vous déposez est bien gardé.',
            }),
          ),
        );
        return;
      }
      throw erreur;
    }
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
    return el(
      'li',
      { class: 'journal__ligne', 'data-capture': capture.id, 'data-etat': etatJournal(capture) },
      el('span', { class: 'journal__heure chiffres', texte: heure }),
      el('span', { class: 'journal__texte', texte: apercuJournal(capture) }),
    );
  }

  function etatJournal(capture: Capture): string {
    if (capture.texte) return 'transcrite';
    if (aTranscrire(capture)) return 'en-cours';
    return 'a-reprendre';
  }

  /**
   * Ce que dit une ligne du journal quand la transcription n'a pas encore rendu son
   * texte. Le partiel d'abord — voir les mots arriver est ce qui rassure ; sinon
   * l'état, dit tel quel.
   */
  function apercuJournal(capture: Capture): string {
    if (capture.texte) return capture.texte;
    const partiel = avancement.get(capture.id);
    if (partiel) return `${partiel}…`;
    if (aTranscrire(capture)) return 'Audio conservé — transcription en cours…';
    if (capture.etatTranscription === 'INDISPONIBLE') {
      return 'Audio conservé — ce navigateur ne peut pas transcrire ; à reprendre en Revue';
    }
    return 'Audio conservé — rien reconnu ; à reprendre en Revue';
  }

  /**
   * Lance la transcription de ce qui attend, et tient le journal à jour pendant.
   *
   * Le journal ne se reconstruit pas à chaque mot : seule la ligne concernée change.
   * Reconstruire la liste ferait sauter le focus et clignoter l'écran à chaque
   * partiel, sur le seul écran où l'on doit pouvoir ne pas regarder.
   */
  function transcrireEnArrierePlan(): void {
    void traiterFileTranscription(undefined, (captureId, partiel) => {
      avancement.set(captureId, partiel);
      const ligne = journal.querySelector<HTMLElement>(
        `.journal__ligne[data-capture="${captureId}"] .journal__texte`,
      );
      if (ligne) ligne.textContent = `${partiel}…`;
    })
      .catch(() => {
        // Le moteur n'a pas pu tourner : la capture reste en file, l'audio est en
        // base, la Revue la montrera. Rien à dire ici qui ne serait pas dit là.
      })
      .finally(() => {
        avancement.clear();
        void rafraichirJournal();
      });
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
    // L'enregistreur, et lui seul. La reconnaissance vocale du navigateur ne tourne
    // plus pendant l'appui : sur Android elle réclame le micro pour elle seule et
    // n'entendait rien pendant qu'on enregistrait. La transcription se fait après,
    // sur l'appareil, à partir de l'audio écrit — voir `audio/transcripteurLocal.ts`.
    const micro = await enregistreur.demarrer();
    if (!micro) {
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

    if (!audio.blob) {
      afficherEtat('ECHEC', "Rien n'a été enregistré : le micro n'a rien rendu.");
      retourEchec(reglages.sonConfirmation);
      return;
    }

    try {
      // L'écriture d'abord. Le retour ne vient qu'après, jamais sur l'intention.
      await capturer({
        texte: '',
        source: 'VOCALE',
        etatTranscription: 'ABSENTE',
        audio: audio.blob,
        dureeMs: audio.dureeMs,
      });
      // « Tu peux oublier » se tient ici parce que la chaîne qui suit ne perd rien :
      // l'audio est en base ; la transcription tourne sur l'appareil dans les secondes
      // qui viennent ; et si elle ne reconnaît rien, la capture remonte en tête de la
      // Revue avec son audio, à reprendre. Aucun chemin ne mène au silence.
      retourEcrite(reglages.sonConfirmation);
      afficherEtat('CONFIRME', "C'est à moi. Tu peux oublier.");
      apercu.textContent = '';
      await rafraichirJournal();
      transcrireEnArrierePlan();
    } catch (erreur) {
      retourEchec(reglages.sonConfirmation);
      await signalerEchecEcriture(erreur, () => relacher());
    }
  }

  /**
   * Ce qu'on dit quand l'écriture est refusée, et ce qu'on propose d'y faire.
   *
   * Manquer de place n'est pas la même panne qu'un coffre fermé ou qu'une base
   * cassée, et les confondre enverrait l'utilisateur chercher au mauvais endroit.
   * Surtout, le manque de place se résout ici : ce sont les enregistrements qui
   * remplissent ZeNote, et ceux des captures déjà transcrites ne portent plus la
   * note.
   *
   * @param reessayer ce qu'on relance une fois la place faite.
   */
  async function signalerEchecEcriture(erreur: unknown, reessayer: () => Promise<void>): Promise<void> {
    vider(secours);
    secours.hidden = true;

    if (!estManqueDePlace(erreur)) {
      afficherEtat(
        'ECHEC',
        erreur instanceof CoffreVerrouille
          ? 'Écriture impossible : le coffre est fermé. Déverrouillez-le puis réessayez.'
          : "Écriture impossible — rien n'a été enregistré. Réessayez.",
      );
      return;
    }

    afficherEtat('ECHEC', "Plus de place : rien n'a été enregistré.");
    const liberable = await espaceLiberable().catch(() => ({ captureIds: [], octets: 0 }));
    if (liberable.captureIds.length === 0) {
      secours.hidden = false;
      secours.append(
        el('p', {
          class: 'secours__detail',
          texte:
            'Rien à libérer ici : toutes vos captures ont encore besoin de leur ' +
            'enregistrement. Exportez vos données depuis « Vos données », puis faites ' +
            'de la place sur l’appareil.',
        }),
      );
      return;
    }

    const bouton = el('button', {
      class: 'bouton bouton--plein',
      type: 'button',
      texte: `Libérer ${poidsLisible(liberable.octets)} et réessayer`,
    }) as HTMLButtonElement;
    bouton.addEventListener('click', () => {
      bouton.disabled = true;
      bouton.textContent = 'Libération…';
      void libererEspace(liberable.captureIds)
        .then(async () => {
          secours.hidden = true;
          vider(secours);
          await reessayer();
        })
        .catch(() => {
          bouton.disabled = false;
          afficherEtat('ECHEC', 'La libération a échoué. Exportez vos données puis réessayez.');
        });
    });

    secours.hidden = false;
    secours.append(
      el('p', {
        class: 'secours__detail',
        texte:
          `${accordCaptures(liberable.captureIds.length)} déjà transcrites gardent leur ` +
          'enregistrement. Leur texte reste, le son est perdu — définitivement.',
      }),
      bouton,
    );
  }

  function accordCaptures(nombre: number): string {
    return nombre > 1 ? `${nombre} captures` : '1 capture';
  }

  /** Une taille d'octets lisible d'un coup d'œil, sans fausse précision. */
  function poidsLisible(octets: number): string {
    if (octets < 1024) return `${octets} o`;
    if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} ko`;
    return `${(octets / (1024 * 1024)).toFixed(1)} Mo`;
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
    } catch (erreur) {
      retourEchec(reglages.sonConfirmation);
      // Le texte reste dans le champ : c'est ce qui permet de réessayer sans le
      // retaper, une fois la place faite.
      await signalerEchecEcriture(erreur, () => deposerTexte());
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

  basculeImport.addEventListener('click', () => {
    const ouvert = blocImport.hidden;
    blocImport.hidden = !ouvert;
    basculeImport.setAttribute('aria-expanded', String(ouvert));
    if (ouvert) {
      void lireReglages().then((r) => {
        if (champNom.value === '') champNom.value = r.monNom;
        champNom.focus();
      });
    }
  });

  importer.addEventListener('click', () => {
    void (async () => {
      const texte = zoneImport.value.trim();
      if (texte === '') {
        annoncer('Collez d’abord le compte rendu.');
        return;
      }
      const monNom = champNom.value.trim();
      await ecrireReglage('monNom', monNom);

      try {
        const rendu = await deposerCompteRendu(texte, monNom, aujourdhui());
        zoneImport.value = '';
        retourImport.hidden = false;
        retourImport.textContent =
          rendu.elements === 0
            ? 'Rien n’a pu être rattaché à une ligne du compte rendu. Il est gardé tel quel.'
            : `${rendu.elements} élément(s) en Revue, à confirmer. Le compte rendu est gardé entier.`;
        annoncer(retourImport.textContent);
        await rafraichirJournal();
      } catch (erreur) {
        await signalerEchecEcriture(erreur, async () => {
          importer.click();
        });
      }
    })();
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
  } else if (!transcriptionLocaleDisponible()) {
    avertissements.push(
      el('p', {
        class: 'repli',
        texte:
          "Ce navigateur ne peut pas transcrire sur l'appareil : l'audio est conservé, et chaque capture remontera en Revue, à écrire.",
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
      secours,
      ...avertissements,
      el('div', { class: 'actions' }, basculeEcrite, boutonReunion, basculeImport),
      blocEcrit,
      blocImport,
      el('h2', { class: 'titre-section', texte: 'Dernières captures' }),
      journal,
    ),
  );

  afficherEtat('REPOS');
  void rafraichirJournal();
  // Le micro est préparé à l'avance pour que l'appui suivant démarre sans attendre.
  void prechauffer();
  // Ce qui attendait une transcription — une capture faite juste avant de fermer
  // l'application, par exemple — repart dès qu'on revient sur cet écran.
  transcrireEnArrierePlan();

  // On termine l'enregistrement comme si le doigt s'était levé, plutôt que de le jeter
  // en silence : ce que l'utilisateur a dit est déjà dit, et le perdre parce qu'il a
  // changé d'écran serait la pire trahison de la promesse de capture. `relacher` ne
  // fait rien si aucun enregistrement n'est en cours.
  return () => {
    arreterChrono();
    void relacher();
  };
}
