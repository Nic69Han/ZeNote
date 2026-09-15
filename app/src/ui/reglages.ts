/**
 * L'écran Réglages : ce qui quitte l'appareil (rien, aujourd'hui), et l'export.
 *
 * L'export intégral est une promesse tenue dès le premier jour : les données doivent
 * être exploitables sans ce produit, sinon « vos données vous appartiennent » n'est
 * qu'une phrase.
 *
 * Le reste de l'écran dit ce qui sort réellement de l'appareil — y compris ce qui
 * dérange : le stockage local n'est pas chiffré, et la dictée passe par la
 * reconnaissance vocale du navigateur. Un écran de confiance qui n'énonce que les
 * bonnes nouvelles n'est pas un écran de confiance.
 */

import '../styles/reglages.css';

import {
  construireExport,
  copierDansPressePapier,
  nomFichierExport,
  proposerTelechargement,
  serialiser,
  type ExportZeNote,
} from '../services/export.ts';
import { toutEffacer } from '../stockage/depot.ts';
import { diagnostiquer, enTexte } from '../audio/diagnostic.ts';
import { annoncer, el, vider } from './dom.ts';

/** Empreinte de la construction servie, injectée par Vite. */
const VERSION: string =
  typeof __VERSION_ZENOTE__ === 'string' ? __VERSION_ZENOTE__ : 'inconnue';

/** Le mot à écrire pour confirmer l'effacement : un clic seul ne doit jamais suffire. */
const MOT_DE_CONFIRMATION = 'SUPPRIMER';

interface Fait {
  /** Vrai quand le fait est à l'avantage de l'utilisateur ; faux quand il faut l'avouer. */
  rassurant: boolean;
  titre: string;
  detail: string;
}

/**
 * Ce qui quitte l'appareil, dans l'ordre où l'on s'en inquiète. Les formulations sont
 * volontairement prudentes là où le code ne permet pas de trancher : la dictée est
 * déléguée au navigateur, et l'application ne peut, depuis son propre code, ni
 * observer ni empêcher ce que celui-ci envoie.
 */
const FAITS: Fait[] = [
  {
    rassurant: true,
    titre: 'L’analyse se fait sur cet appareil.',
    detail:
      'Le découpage d’une capture en tâches, engagements et informations est lexical : il ' +
      'compare des mots, ici, dans cet onglet. Aucun texte n’est envoyé à un service ' +
      'd’analyse ni à un modèle de langage.',
  },
  {
    rassurant: true,
    titre: 'Aucun compte, aucun serveur, aucune mesure d’audience.',
    detail:
      'Il n’y a pas de serveur ZeNote : rien n’est déposé ailleurs, faute d’un ailleurs où ' +
      'le déposer. Tout vit dans IndexedDB, la base de données du navigateur, sur cet ' +
      'appareil.',
  },
  {
    rassurant: false,
    titre: 'Le stockage local n’est pas chiffré.',
    detail:
      'Vos captures, vos enregistrements et vos éléments sont écrits en clair dans la base ' +
      'du navigateur. Ils sont protégés par le verrouillage de l’appareil et par rien ' +
      'd’autre : qui ouvre votre session ouvre vos notes. Tant que le chiffrement n’existe ' +
      'pas, nous préférons l’écrire que le laisser croire.',
  },
  {
    rassurant: false,
    titre: 'La dictée passe par la reconnaissance vocale du navigateur.',
    detail:
      'ZeNote confie la transcription à l’API de reconnaissance vocale du navigateur ' +
      '(webkitSpeechRecognition). Sur Chrome et les navigateurs dérivés de Chromium, cette ' +
      'reconnaissance est assurée par un service distant de l’éditeur : ce que vous dictez ' +
      'quitte alors l’appareil, envoyé par le navigateur lui-même — ZeNote ne voit pas cet ' +
      'échange, ne peut pas le vérifier depuis son code et ne peut pas l’empêcher. Le ' +
      'comportement dépend du navigateur et de sa version. Pour qu’il ne sorte rien, ' +
      'capturez par écrit : la saisie n’appelle aucune reconnaissance vocale.',
  },
  {
    rassurant: true,
    titre: 'L’enregistrement audio, lui, reste ici.',
    detail:
      'Le son conservé par ZeNote — celui qui permet de réécouter une capture — n’est ' +
      'envoyé nulle part par l’application, et il n’est pas non plus placé dans l’export : ' +
      'il rendrait le fichier illisible. L’export dit, capture par capture, quel ' +
      'enregistrement existe et quelle taille il fait.',
  },
];

/** Une taille d'octets lisible d'un coup d'œil, sans fausse précision. */
function poidsLisible(octets: number): string {
  if (octets < 1024) return `${octets} o`;
  if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} ko`;
  return `${(octets / (1024 * 1024)).toFixed(1)} Mo`;
}

function accord(nombre: number, singulier: string, pluriel: string): string {
  return `${nombre} ${nombre > 1 ? pluriel : singulier}`;
}

export async function montrerReglages(vue: HTMLElement): Promise<void> {
  /** Message de service (copie faite, téléchargement proposé, effacement). */
  let note: HTMLElement | null = null;

  function dire(message: string, ton: 'neutre' | 'echec' = 'neutre'): void {
    if (note) {
      note.textContent = message;
      note.dataset.ton = ton;
    }
    annoncer(message);
  }

  async function rendre(): Promise<void> {
    const donnees = await construireExport();
    const texte = serialiser(donnees);

    vider(vue);
    const section = el(
      'section',
      { class: 'ecran ecran--donnees', 'aria-labelledby': 'titre-donnees' },
      el('h1', { id: 'titre-donnees', class: 'ecran__titre', texte: 'Vos données' }),
      el('p', {
        class: 'ecran__sous-titre',
        texte: 'Ce qui reste ici, ce qui sort, et comment tout reprendre.',
      }),
      blocPerimetre(),
      blocExport(donnees, texte),
      blocEffacement(donnees),
      blocDictee(),
    );
    vue.append(section);
  }

  // ------------------------------------------------------------ la dictée

  /**
   * Le test de la dictée, et l'empreinte de la version.
   *
   * Une panne de reconnaissance vocale ne se reproduit pas ailleurs : elle tient au
   * navigateur, à l'appareil, au réseau et aux autorisations de celui qui s'en sert.
   * Ce bloc permet de la nommer sur place plutôt que de la deviner à distance — et
   * dit quelle version est réellement exécutée, une application installée gardant la
   * précédente en cache jusqu'à sa prochaine ouverture.
   */
  function blocDictee(): HTMLElement {
    const sortie = el('pre', { class: 'diagnostic__sortie', hidden: 'hidden' });
    const bouton = el('button', {
      class: 'bouton bouton--plein',
      type: 'button',
      texte: 'Tester la dictée',
    }) as HTMLButtonElement;

    bouton.addEventListener('click', () => {
      bouton.disabled = true;
      bouton.textContent = 'Parlez maintenant…';
      sortie.hidden = false;
      sortie.textContent = 'Test en cours, cinq secondes.';
      void diagnostiquer()
        .then((constat) => {
          sortie.textContent = enTexte(constat, VERSION);
          annoncer(constat.explication);
        })
        .catch((e) => {
          sortie.textContent = `Le test lui-même a échoué : ${
            e instanceof Error ? e.message : 'erreur inconnue'
          }`;
        })
        .finally(() => {
          bouton.disabled = false;
          bouton.textContent = 'Tester la dictée';
        });
    });

    const copier = el('button', {
      class: 'bouton bouton--discret',
      type: 'button',
      texte: 'Copier le résultat',
    }) as HTMLButtonElement;
    copier.addEventListener('click', () => {
      const contenu = sortie.textContent ?? '';
      if (!contenu) { dire('Lancez d’abord le test.', 'echec'); return; }
      void navigator.clipboard
        ?.writeText(contenu)
        .then(() => dire('Résultat copié.'))
        .catch(() => dire('Copie refusée par le navigateur — sélectionnez le texte.', 'echec'));
    });

    return el(
      'section',
      { class: 'bloc bloc--diagnostic', 'aria-labelledby': 'titre-dictee' },
      el('h2', { id: 'titre-dictee', class: 'bloc__titre', texte: 'La dictée fonctionne-t-elle ?' }),
      el('p', {
        class: 'bloc__detail',
        texte:
          'Ce test lance la reconnaissance vocale seule, sans enregistrement, et dit '
          + 'exactement ce qu’elle répond. Appuyez, puis dites une phrase.',
      }),
      el('div', { class: 'bloc__actions' }, bouton, copier),
      sortie,
      el('p', { class: 'bloc__version', texte: `Version installée : ${VERSION}` }),
    );
  }

  // ------------------------------------------------ ce qui quitte l'appareil

  function blocPerimetre(): HTMLElement {
    const liste = el('ul', { class: 'faits' });
    for (const fait of FAITS) {
      liste.append(
        el(
          'li',
          { class: `fait ${fait.rassurant ? '' : 'fait--avertissement'}`.trim() },
          el('span', {
            class: 'fait__marque',
            'aria-hidden': 'true',
            texte: fait.rassurant ? '✓' : '!',
          }),
          el('p', { class: 'fait__titre', texte: fait.titre }),
          el('p', { class: 'fait__detail', texte: fait.detail }),
        ),
      );
    }
    return el(
      'section',
      { class: 'bloc', 'aria-labelledby': 'titre-perimetre' },
      el('h2', { id: 'titre-perimetre', class: 'bloc__titre', texte: 'Ce qui quitte l’appareil' }),
      liste,
    );
  }

  // ----------------------------------------------------------------- export

  function blocExport(donnees: ExportZeNote, texte: string): HTMLElement {
    const nomFichier = nomFichierExport();

    const resume = el('p', { class: 'export__resume' });
    resume.append(
      el('strong', { texte: accord(donnees.totaux.captures, 'capture', 'captures') }),
      ' et ',
      el('strong', { texte: accord(donnees.totaux.elements, 'élément', 'éléments') }),
      ', en JSON, avec leur mode d’emploi et le lien de chaque élément vers la phrase exacte ' +
        'dont il vient. Le fichier s’ouvre dans n’importe quel éditeur de texte.',
    );

    const zoneTexte = el('textarea', {
      class: 'repli-export__texte',
      readonly: true,
      spellcheck: 'false',
      'aria-label': 'Contenu du fichier d’export',
    });
    zoneTexte.value = texte;

    const actions = el(
      'div',
      { class: 'export__actions' },
      el('button', {
        class: 'bouton bouton--plein',
        type: 'button',
        texte: 'Télécharger le fichier',
        onclick: () => {
          // Un succès apparent ne prouve rien : certains contextes bloquent le
          // téléchargement sans le dire. On renvoie donc toujours vers le repli.
          const propose = proposerTelechargement(texte, nomFichier);
          if (propose) dire(`Téléchargement proposé : ${nomFichier}. Rien n’arrive ? Le texte est ci-dessous.`);
          else dire('Le téléchargement est impossible ici. Copiez le texte ci-dessous.', 'echec');
        },
      }),
      el('button', {
        class: 'bouton bouton--discret',
        type: 'button',
        texte: 'Copier le texte',
        onclick: () => void copier(texte),
      }),
      el('button', {
        class: 'bouton bouton--discret',
        type: 'button',
        texte: 'Tout sélectionner',
        onclick: () => {
          zoneTexte.focus();
          zoneTexte.select();
          dire('Texte sélectionné. Copiez-le avec Ctrl+C (ou Cmd+C).');
        },
      }),
    );

    note = el('p', { class: 'note-service', role: 'status', 'data-ton': 'neutre' });

    const audio = donnees.audio;
    const phraseAudio =
      audio.capturesAvecAudio === 0
        ? 'Aucun enregistrement audio pour l’instant. L’export n’en contient jamais : le son ' +
          'resterait sur l’appareil, et le fichier le dirait.'
        : `L’audio n’est pas dans l’export : ${accord(audio.capturesAvecAudio, 'enregistrement reste', 'enregistrements restent')} ` +
          `sur l’appareil (${poidsLisible(audio.octetsNonInclus)}). Le fichier le déclare, capture par capture.`;

    return el(
      'section',
      { class: 'bloc', 'aria-labelledby': 'titre-export' },
      el('h2', { id: 'titre-export', class: 'bloc__titre', texte: 'Exporter tout' }),
      resume,
      el('p', { class: 'bloc__detail', texte: phraseAudio }),
      actions,
      note,
      el(
        'div',
        { class: 'repli-export' },
        el('p', {
          class: 'bloc__detail',
          texte:
            'Si le téléchargement ne donne rien — certains contextes d’affichage le bloquent ' +
            'sans prévenir — voici le fichier en entier. Il est copiable tel quel.',
        }),
        zoneTexte,
      ),
    );
  }

  async function copier(texte: string): Promise<void> {
    const copie = await copierDansPressePapier(texte);
    if (copie) dire('Export copié dans le presse-papiers.');
    else dire('Copie refusée par le navigateur. Sélectionnez le texte ci-dessous à la main.', 'echec');
  }

  // ------------------------------------------------------------- effacement

  function blocEffacement(donnees: ExportZeNote): HTMLElement {
    const confirmation = el('div', { class: 'danger__confirmation', hidden: true });

    const champ = el('input', {
      class: 'champ',
      type: 'text',
      autocomplete: 'off',
      placeholder: MOT_DE_CONFIRMATION,
      'aria-label': `Écrivez ${MOT_DE_CONFIRMATION} pour confirmer`,
    });
    const effacer = el('button', {
      class: 'bouton bouton--danger',
      type: 'button',
      disabled: true,
      texte: 'Effacer définitivement',
      onclick: () => void toutSupprimer(),
    });
    champ.addEventListener('input', () => {
      effacer.disabled = champ.value.trim().toUpperCase() !== MOT_DE_CONFIRMATION;
    });

    const ouvrir = el('button', {
      class: 'bouton bouton--danger',
      type: 'button',
      texte: 'Tout effacer…',
      onclick: () => {
        confirmation.hidden = false;
        ouvrir.hidden = true;
        champ.focus();
      },
    });

    confirmation.append(
      el('p', {
        class: 'danger__question',
        texte:
          `Écrivez ${MOT_DE_CONFIRMATION} pour effacer ` +
          `${accord(donnees.totaux.captures, 'capture', 'captures')}, ` +
          `${accord(donnees.totaux.elements, 'élément', 'éléments')}, les enregistrements ` +
          'audio et les réglages.',
      }),
      champ,
      el(
        'div',
        { class: 'danger__actions' },
        effacer,
        el('button', {
          class: 'bouton bouton--discret',
          type: 'button',
          texte: 'Annuler',
          onclick: () => {
            champ.value = '';
            effacer.disabled = true;
            confirmation.hidden = true;
            ouvrir.hidden = false;
            ouvrir.focus();
          },
        }),
      ),
    );

    return el(
      'section',
      { class: 'bloc danger', 'aria-labelledby': 'titre-effacement' },
      el('h2', { id: 'titre-effacement', class: 'bloc__titre', texte: 'Tout effacer' }),
      el('p', {
        class: 'bloc__detail',
        texte:
          'Efface de cet appareil les captures, les enregistrements, les éléments et les ' +
          'réglages. Rien n’est récupérable ensuite, et il n’existe aucune copie ailleurs : ' +
          'exportez d’abord si vous hésitez.',
      }),
      ouvrir,
      confirmation,
    );
  }

  async function toutSupprimer(): Promise<void> {
    await toutEffacer();
    await rendre();
    dire('Toutes les données locales ont été effacées.');
  }

  await rendre();
}
