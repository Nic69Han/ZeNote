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
import {
  ecrireReglage,
  lireReglages,
  toutEffacer,
  type Reglages,
} from '../stockage/depot.ts';
import { diagnostiquer, enTexte } from '../audio/diagnostic.ts';
import { activerChiffrement, desactiverChiffrement } from '../securite/activation.ts';
import {
  assurerCoffreCharge,
  chiffrementPossible,
  gardienAppareilPossible,
  gardiens,
  ajouterGardien,
  verrouiller,
  type EtatCoffre,
  type TypeGardien,
} from '../securite/coffre.ts';
import { annoncer, el, vider } from './dom.ts';
import { compteConnecte } from '../compte/compte.ts';
import { AgendaIllisible, lireAgenda } from '../agenda/ics.ts';
import { effacerAgenda, etatAgenda, importerAgenda, type EtatAgenda } from '../stockage/agenda.ts';

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
function faits(coffre: EtatCoffre, analyseDistante: boolean): Fait[] {
  return [
  // Change `analyse-typesafe` — tâche 4.1 : ce bloc dit vrai dans les deux états du
  // réglage. Allumé, la sortie du texte vient en tête, parce que c'est d'abord ce
  // qu'on veut savoir.
  analyseDistante
    ? {
        rassurant: false,
        titre: 'Le texte de vos notes part à l’analyse distante.',
        detail:
          'Pour chaque note que vous n’avez pas gardée sur l’appareil, le texte de ses ' +
          'passages part vers le service d’analyse de ZeNote, qui le soumet à TypeSafe pour ' +
          'juger le type et la sphère de chaque passage. Ni l’audio, ni les dates, ni les ' +
          'identifiants ne partent. Le reste de l’analyse — échéances, poids, personnes — se ' +
          'fait ici.',
      }
    : {
        rassurant: true,
        titre: 'L’analyse se fait sur cet appareil.',
        detail:
          'Le découpage d’une capture en tâches, engagements et informations est lexical : il ' +
          'compare des mots, ici, dans cet onglet. L’analyse distante, qui enverrait le texte ' +
          'des passages à un modèle, est éteinte : aucun texte ne sort.',
      },
  {
    rassurant: true,
    titre: 'Aucun compte, aucun stockage distant, aucune mesure d’audience.',
    detail:
      'Tout vit dans IndexedDB, la base de données du navigateur, sur cet appareil. Rien ' +
      'n’est déposé sur un serveur ZeNote : le service d’analyse distante, quand il est ' +
      'allumé, juge des passages et n’en garde rien.',
  },
  coffre === 'ABSENT'
    ? {
        rassurant: false,
        titre: 'Le stockage local n’est pas chiffré.',
        detail:
          'Vos captures, vos enregistrements et vos éléments sont écrits en clair dans la ' +
          'base du navigateur. Ils sont protégés par le verrouillage de l’appareil et par ' +
          'rien d’autre : qui ouvre votre session ouvre vos notes. Le chiffrement existe ' +
          'maintenant — il s’active plus bas sur cet écran.',
      }
    : {
        rassurant: true,
        titre: 'Le stockage local est chiffré.',
        detail:
          'Le texte de vos captures, vos enregistrements et vos éléments sont scellés avant ' +
          'd’entrer dans la base, et ne s’ouvrent qu’après authentification. Restent lisibles ' +
          'sans elle : le nombre de notes, leur ordre, et quels éléments viennent de quelle ' +
          'capture — ce dont la base a besoin pour fonctionner. Pas une phrase de ce que ' +
          'vous avez dit.',
      },
  {
    rassurant: true,
    titre: 'La dictée est transcrite sur cet appareil.',
    detail:
      'La transcription tourne ici, dans cet onglet : un moteur de reconnaissance vocale ' +
      'embarqué (Vosk, compilé en WebAssembly) et un modèle français téléchargé une fois ' +
      'puis gardé en cache. Ce que vous dictez ne part pas chez un service de ' +
      'reconnaissance. ZeNote n’utilise plus la reconnaissance vocale du navigateur, qui ' +
      'sur Chrome passe, elle, par un service distant de l’éditeur.',
  },
  {
    rassurant: false,
    titre: 'ZeNote ne vous notifiera pas quand elle est fermée.',
    detail:
      'Une page web ne se réveille pas seule : pour vous prévenir application fermée, ' +
      'il faudrait un serveur qui lui pousse un message, et ZeNote n’en a pas pour ' +
      'cela. Vos rappels vous attendent donc à votre retour — regroupés en une seule ' +
      'fois — au lieu d’arriver pendant votre absence. C’est une limite de la forme ' +
      'choisie, pas un oubli.',
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
}

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
    const coffre = await assurerCoffreCharge();
    const donnees = await construireExport();
    const texte = serialiser(donnees);
    const appareilPossible = await gardienAppareilPossible();
    const reglages = await lireReglages();
    const agenda = await etatAgenda();

    vider(vue);
    const section = el(
      'section',
      { class: 'ecran ecran--donnees', 'aria-labelledby': 'titre-donnees' },
      el('h1', { id: 'titre-donnees', class: 'ecran__titre', texte: 'Vos données' }),
      el('p', {
        class: 'ecran__sous-titre',
        texte: 'Ce qui reste ici, ce qui sort, et comment tout reprendre.',
      }),
      // Sans compte, rien ne part, quel que soit le réglage enregistré : le bloc le dit.
      blocPerimetre(coffre, reglages.analyseDistante && compteConnecte()),
      blocAgenda(agenda),
      blocAnalyseDistante(reglages),
      blocChiffrement(coffre, appareilPossible, donnees),
      blocCreneau(reglages),
      blocExport(donnees, texte),
      blocEffacement(donnees),
      blocDictee(),
    );
    vue.append(section);
  }

  // ------------------------------------------------------- le créneau protégé

  /**
   * L'heure du créneau protégé, et de quoi l'éteindre.
   *
   * Le réglage existe parce que le créneau ne vaut qu'au bon moment. Un créneau posé
   * à neuf heures chez quelqu'un dont la matinée est prise se saute tous les jours,
   * et la Revue finit par le signaler — ce qui est utile la première fois, et pénible
   * la dixième. Le déplacer coûte deux secondes ; l'éteindre aussi.
   */
  function blocCreneau(reglages: Reglages): HTMLElement {
    const heure = el('input', {
      class: 'champ',
      type: 'time',
      value: reglages.creneauProtegeDebut ?? '',
      'aria-label': 'Heure du créneau protégé',
    }) as HTMLInputElement;

    heure.addEventListener('change', () => {
      void (async () => {
        await ecrireReglage('creneauProtegeDebut', heure.value || null);
        // Changer l'heure remet le compte à zéro : les renoncements portaient sur
        // l'ancien créneau, et les reporter sur le nouveau ferait signaler d'emblée
        // un problème qu'on vient justement de corriger.
        await ecrireReglage('creneauRenoncements', 0);
        annoncer(heure.value ? `Créneau protégé à ${heure.value}.` : 'Créneau protégé éteint.');
      })();
    });

    return el(
      'section',
      { class: 'bloc bloc--creneau' },
      el('h2', { class: 'bloc__titre', texte: 'Créneau protégé' }),
      el('p', {
        class: 'bloc__texte',
        texte:
          'Une heure par jour où rien d’urgent ne passe devant. Ce qui compte vraiment ' +
          'n’a jamais de date, donc n’est jamais urgent, donc n’arrive jamais — ce ' +
          'créneau est la seule réponse qui ne demande pas de volonté.',
      }),
      heure,
      el('button', {
        class: 'bouton bouton--discret',
        type: 'button',
        texte: 'Éteindre le créneau',
        onclick: () => {
          void (async () => {
            heure.value = '';
            await ecrireReglage('creneauProtegeDebut', null);
            await ecrireReglage('creneauRenoncements', 0);
            annoncer('Créneau protégé éteint.');
          })();
        },
      }),
    );
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
      sortie.textContent = 'Test en cours : trois secondes d’enregistrement, puis la transcription.';
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
          'Ce test fait ce que fait une capture — trois secondes au micro, puis la '
          + 'transcription sur l’appareil — et dit le temps et le résultat de chaque étape. '
          + 'Appuyez, puis dites une phrase.',
      }),
      el('div', { class: 'bloc__actions' }, bouton, copier),
      sortie,
      el('p', { class: 'bloc__version', texte: `Version installée : ${VERSION}` }),
    );
  }

  // ------------------------------------------------------------ chiffrement

  /**
   * Activer, retirer, ou compléter le chiffrement.
   *
   * Le chiffrement n'est pas mis par défaut, et c'est délibéré : il crée une manière
   * de tout perdre qui n'existait pas avant. Perdre la phrase, effacer les données du
   * navigateur ou réinitialiser le téléphone rend les notes définitivement illisibles
   * — par personne, ZeNote compris. C'est dit ici, en toutes lettres, avant le
   * bouton et non après.
   */
  function blocChiffrement(
    coffre: EtatCoffre,
    appareilPossible: boolean,
    donnees: ExportZeNote,
  ): HTMLElement {
    const corps = el('div', { class: 'chiffrement' });

    if (!chiffrementPossible()) {
      corps.append(
        el('p', {
          class: 'bloc__detail',
          texte:
            'Ce navigateur n’offre pas les fonctions de chiffrement nécessaires. Vos notes ' +
            'restent en clair dans sa base.',
        }),
      );
    } else if (coffre === 'ABSENT') {
      corps.append(...activation(appareilPossible, donnees));
    } else {
      corps.append(...gestion(appareilPossible));
    }

    return el(
      'section',
      { class: 'bloc bloc--chiffrement', 'aria-labelledby': 'titre-chiffrement' },
      el('h2', { id: 'titre-chiffrement', class: 'bloc__titre', texte: 'Chiffrer vos notes' }),
      corps,
    );
  }

  /** L'écran d'activation : ce qu'on gagne, ce qu'on risque, et comment. */
  function activation(appareilPossible: boolean, donnees: ExportZeNote): HTMLElement[] {
    const champ = el('input', {
      class: 'champ',
      type: 'password',
      autocomplete: 'new-password',
      placeholder: 'Une phrase que vous seul connaissez',
      'aria-label': 'Phrase de passe',
    }) as HTMLInputElement;
    const confirmation = el('input', {
      class: 'champ',
      type: 'password',
      autocomplete: 'new-password',
      placeholder: 'La même, pour être sûr',
      'aria-label': 'Confirmation de la phrase de passe',
    }) as HTMLInputElement;

    async function activer(type: TypeGardien, phrase?: string): Promise<void> {
      dire('Chiffrement en cours…');
      try {
        const reprise = await activerChiffrement(type, phrase);
        dire(
          `Chiffré : ${accord(reprise.captures, 'capture', 'captures')} et ` +
            `${accord(reprise.elements, 'élément', 'éléments')}.`,
        );
        await rendre();
      } catch (erreur) {
        dire(
          erreur instanceof Error ? erreur.message : 'Le chiffrement n’a pas pu être activé.',
          'echec',
        );
      }
    }

    const boutons = el('div', { class: 'bloc__actions' });
    if (appareilPossible) {
      const bouton = el('button', {
        class: 'bouton bouton--plein',
        type: 'button',
        texte: 'Chiffrer, déverrouillage par cet appareil',
      }) as HTMLButtonElement;
      bouton.addEventListener('click', () => void activer('APPAREIL'));
      boutons.append(bouton);
    }

    const parPhrase = el('button', {
      class: `bouton ${appareilPossible ? 'bouton--discret' : 'bouton--plein'}`,
      type: 'submit',
      texte: 'Chiffrer, déverrouillage par phrase',
    }) as HTMLButtonElement;

    const formulaire = el(
      'form',
      {
        class: 'chiffrement__phrase',
        onsubmit: (evenement: Event) => {
          evenement.preventDefault();
          if (champ.value.length < 8) {
            dire('Une phrase de huit caractères au moins.', 'echec');
            return;
          }
          if (champ.value !== confirmation.value) {
            dire('Les deux phrases ne sont pas identiques.', 'echec');
            return;
          }
          void activer('PHRASE', champ.value);
        },
      },
      champ,
      confirmation,
      parPhrase,
    );

    return [
      el('p', {
        class: 'bloc__detail',
        texte:
          'Une fois chiffrées, vos notes ne se relisent qu’après authentification. Capturer ' +
          'continue de ne rien demander : une note déposée est chiffrée aussitôt, même ' +
          'sans déverrouiller.',
      }),
      el(
        'p',
        { class: 'chiffrement__danger' },
        el('strong', { texte: 'Ce qui devient possible de perdre. ' }),
        'Si vous oubliez votre phrase, effacez les données de ce navigateur ou ' +
          'réinitialisez l’appareil, vos notes deviennent définitivement illisibles — ' +
          'par vous comme par nous. Il n’existe aucun moyen de les récupérer. ' +
          (donnees.totaux.captures > 0
            ? `Vous avez ${accord(donnees.totaux.captures, 'capture', 'captures')} : ` +
              'exportez-les avant d’activer.'
            : ''),
      ),
      appareilPossible
        ? el('p', {
            class: 'bloc__detail',
            texte:
              'Le déverrouillage par l’appareil utilise son empreinte, son visage ou son ' +
              'code. La clé ne sort jamais de l’appareil et n’est écrite nulle part.',
          })
        : el('p', {
            class: 'bloc__detail',
            texte:
              'Cet appareil n’offre pas de déverrouillage biométrique à ZeNote : le ' +
              'chiffrement se fera par phrase de passe.',
          }),
      boutons,
      formulaire,
    ];
  }

  /**
   * Le coffre existe : le compléter, le fermer, ou le retirer.
   *
   * Il est forcément ouvert ici : cet écran montre l'export, donc toutes les notes,
   * et se trouve derrière le verrou comme la Revue. Rien n'a donc à prévoir le cas
   * fermé — le prévoir laisserait croire qu'il arrive.
   */
  function gestion(appareilPossible: boolean): HTMLElement[] {
    const enregistres = gardiens();
    const actions = el('div', { class: 'bloc__actions' });

    {
      const fermer = el('button', {
        class: 'bouton bouton--discret',
        type: 'button',
        texte: 'Fermer le coffre maintenant',
      }) as HTMLButtonElement;
      fermer.addEventListener('click', () => {
        verrouiller();
        annoncer('Coffre fermé.');
        location.hash = '#revue';
      });
      actions.append(fermer);

      const retirer = el('button', {
        class: 'bouton bouton--discret bouton--supprimer',
        type: 'button',
        texte: 'Retirer le chiffrement',
      }) as HTMLButtonElement;
      retirer.addEventListener('click', () => {
        if (retirer.dataset.confirme !== 'oui') {
          retirer.dataset.confirme = 'oui';
          retirer.textContent = 'Confirmer : remettre tout en clair';
          dire('Vos notes seront réécrites en clair dans la base.', 'echec');
          return;
        }
        void (async () => {
          dire('Déchiffrement en cours…');
          try {
            const reprise = await desactiverChiffrement();
            dire(`Remis en clair : ${accord(reprise.captures, 'capture', 'captures')}.`);
            await rendre();
          } catch (erreur) {
            dire(erreur instanceof Error ? erreur.message : 'Le retrait a échoué.', 'echec');
          }
        })();
      });
      actions.append(retirer);
    }

    const lignes: HTMLElement[] = [
      el('p', {
        class: 'bloc__detail',
        texte:
          'Le coffre est ouvert pour cette session. Il se referme deux minutes après que ' +
          'vous avez quitté l’application, et à chaque rechargement.',
      }),
      el('p', {
        class: 'bloc__detail',
        texte: `Déverrouillage enregistré : ${enregistres
          .map((g) => (g === 'APPAREIL' ? 'cet appareil' : 'une phrase de passe'))
          .join(' et ')}.`,
      }),
    ];

    // Un second moyen est une assurance contre la perte du premier — le seul filet
    // que ce produit puisse offrir, faute de serveur où déposer une copie.
    if (!enregistres.includes('PHRASE')) {
      lignes.push(secondGardienParPhrase());
    } else if (!enregistres.includes('APPAREIL') && appareilPossible) {
      lignes.push(secondGardienParAppareil());
    }

    return [...lignes, actions];
  }

  function secondGardienParPhrase(): HTMLElement {
    const champ = el('input', {
      class: 'champ',
      type: 'password',
      autocomplete: 'new-password',
      placeholder: 'Une phrase de secours',
      'aria-label': 'Phrase de passe de secours',
    }) as HTMLInputElement;
    return el(
      'form',
      {
        class: 'chiffrement__phrase',
        onsubmit: (evenement: Event) => {
          evenement.preventDefault();
          if (champ.value.length < 8) {
            dire('Une phrase de huit caractères au moins.', 'echec');
            return;
          }
          void ajouter('PHRASE', champ.value);
        },
      },
      el('p', {
        class: 'bloc__detail',
        texte:
          'Ajoutez une phrase de secours : si cet appareil vous lâche, elle sera le seul ' +
          'moyen de rouvrir vos notes.',
      }),
      champ,
      el('button', { class: 'bouton bouton--discret', type: 'submit', texte: 'Ajouter la phrase' }),
    );
  }

  function secondGardienParAppareil(): HTMLElement {
    const bouton = el('button', {
      class: 'bouton bouton--discret',
      type: 'button',
      texte: 'Ajouter le déverrouillage par cet appareil',
    }) as HTMLButtonElement;
    bouton.addEventListener('click', () => void ajouter('APPAREIL'));
    return el('div', { class: 'chiffrement__second' }, bouton);
  }

  async function ajouter(type: TypeGardien, phrase?: string): Promise<void> {
    try {
      await ajouterGardien(type, phrase);
      dire('Moyen de déverrouillage ajouté.');
      await rendre();
    } catch (erreur) {
      dire(erreur instanceof Error ? erreur.message : 'Ajout impossible.', 'echec');
    }
  }

  // ------------------------------------------------ ce qui quitte l'appareil

  function blocPerimetre(coffre: EtatCoffre, analyseDistante: boolean): HTMLElement {
    const liste = el('ul', { class: 'faits' });
    for (const fait of faits(coffre, analyseDistante)) {
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

  // ----------------------------------------------------------------- l'agenda

  /**
   * L'agenda, importé depuis un fichier `.ics` et lu ici.
   *
   * Change `agenda-local` ; spec `agenda` — « Import d'un agenda sur l'appareil »,
   * « Conservation et effacement », « Fraîcheur de l'agenda dite ». Rien ne part : le
   * fichier est lu dans cet onglet, et seules ses réunions sont gardées. L'écran dit
   * ce qui a été compris, ce qui ne l'a pas été, et jusqu'à quand l'agenda est connu.
   */
  function blocAgenda(etat: EtatAgenda | null): HTMLElement {
    const retour = el('p', { class: 'agenda__retour', role: 'status' });
    const champ = el('input', {
      type: 'file',
      accept: '.ics,text/calendar',
      class: 'agenda__fichier',
      'aria-label': 'Fichier d’agenda (.ics)',
    }) as HTMLInputElement;

    champ.addEventListener('change', () => {
      const fichier = champ.files?.[0];
      if (!fichier) return;
      void (async () => {
        try {
          const lecture = lireAgenda(await fichier.text());
          const importe = await importerAgenda(lecture);
          const message = resumeImport(importe);
          annoncer(message);
          await rendre();
          const apres = vue.querySelector('.agenda__retour');
          if (apres) apres.textContent = message;
        } catch (erreur) {
          retour.dataset.ton = 'echec';
          retour.textContent =
            erreur instanceof AgendaIllisible
              ? 'Ce fichier n’a pas été compris comme un agenda. L’agenda précédent reste en place.'
              : 'L’agenda n’a pas pu être enregistré. Si vos notes sont chiffrées, déverrouillez-les puis réessayez.';
          annoncer(retour.textContent);
        } finally {
          champ.value = '';
        }
      })();
    });

    const etatTexte = etat
      ? el(
          'p',
          { class: 'bloc__texte agenda__etat' },
          `Importé le ${dateLisible(etat.importeLe)}. Connu jusqu’au ${jourLisible(etat.couvreJusqua)} : ` +
            `${accord(etat.occurrences, 'réunion ou événement', 'réunions ou événements')}.`,
        )
      : el('p', {
          class: 'bloc__texte agenda__etat',
          texte: 'Aucun agenda importé : ZeNote fonctionne sans, comme avant.',
        });

    return el(
      'section',
      { class: 'bloc bloc--agenda', 'aria-labelledby': 'titre-agenda' },
      el('h2', { id: 'titre-agenda', class: 'bloc__titre', texte: 'Agenda' }),
      el('p', {
        class: 'bloc__texte',
        texte:
          'Exportez votre agenda en fichier .ics (Google Agenda : Paramètres, Importer et exporter ; ' +
          'Outlook : Enregistrer le calendrier), puis importez-le ici. Il est lu sur cet appareil et ' +
          'n’est envoyé nulle part. Il sert à ne proposer que ce qui tient avant votre prochaine ' +
          'réunion, et à préparer puis vider vos réunions.',
      }),
      etatTexte,
      el('label', { class: 'bouton agenda__importer' }, etat ? 'Réimporter un agenda' : 'Importer un agenda', champ),
      retour,
      etat
        ? el('button', {
            class: 'bouton bouton--discret agenda__effacer',
            type: 'button',
            texte: 'Effacer l’agenda',
            onclick: () => {
              void (async () => {
                await effacerAgenda();
                annoncer('Agenda effacé. Vos notes n’ont pas changé.');
                await rendre();
              })();
            },
          })
        : null,
      el('p', {
        class: 'bloc__texte agenda__limite',
        texte:
          'Il n’est aussi frais que votre dernier import : réimportez-le quand il change. Et les ' +
          'propositions de réunion n’apparaissent que si ZeNote est ouverte à ce moment-là.',
      }),
    );
  }

  /** Ce que l'import a compris, et ce qu'il n'a pas compris, en une phrase. */
  function resumeImport(etat: EtatAgenda): string {
    const parties = [
      `Agenda importé : ${accord(etat.occurrences, 'occurrence connue', 'occurrences connues')} jusqu’au ${jourLisible(etat.couvreJusqua)}, ` +
        `${accord(etat.lus, 'événement lu', 'événements lus')}.`,
    ];
    if (etat.recurrencesNonComprises > 0) {
      parties.push(
        `${accord(etat.recurrencesNonComprises, 'répétition non comprise', 'répétitions non comprises')} : ` +
          'seule la première occurrence est gardée.',
      );
    }
    for (const { raison, nombre } of etat.ecartes) parties.push(`Écarté (${raison}) : ${nombre}.`);
    return parties.join(' ');
  }

  function dateLisible(iso: string): string {
    return new Date(iso).toLocaleString('fr-FR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
  }

  function jourLisible(local: string): string {
    return new Date(`${local.slice(0, 10)}T12:00:00`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  }

  // ------------------------------------------------------ l'analyse distante

  /**
   * Ce qui ne partira jamais à l'analyse distante, quoi qu'on allume ensuite.
   *
   * Spec `analyse-distante` — « Transmission conditionnée au consentement ». Les
   * exclusions se posent avant l'allumage, pas après : c'est au moment où rien ne
   * sort encore qu'on choisit le plus sereinement ce qui ne doit jamais sortir. Une
   * note dont la sphère ne se reconnaît pas reste sur l'appareil dès qu'une
   * exclusion est posée (voir `peutTransmettre`), et le texte le dit.
   */
  function blocAnalyseDistante(reglages: Reglages): HTMLElement {
    // Réservée à un utilisateur connecté : sans compte, ni interrupteur ni confirmation.
    const connecte = compteConnecte();
    const exclues = new Set(reglages.spheresExclues);
    const choix = (sphere: 'PROFESSIONNEL' | 'PERSONNEL', libelle: string): HTMLElement => {
      const case_ = el('input', {
        type: 'checkbox',
        class: 'case',
        name: 'sphere-exclue',
        value: sphere,
        checked: exclues.has(sphere),
      }) as HTMLInputElement;
      case_.addEventListener('change', () => {
        void (async () => {
          if (case_.checked) exclues.add(sphere);
          else exclues.delete(sphere);
          await ecrireReglage('spheresExclues', [...exclues]);
          annoncer(case_.checked ? `${libelle} : jamais envoyées.` : `${libelle} : plus exclues.`);
        })();
      });
      return el('label', { class: 'champ__etiquette champ__etiquette--case' }, case_, libelle);
    };

    return el(
      'section',
      { class: 'bloc bloc--analyse-distante', 'aria-labelledby': 'titre-analyse-distante' },
      el('h2', { id: 'titre-analyse-distante', class: 'bloc__titre', texte: 'Analyse distante' }),
      connecte
        ? interrupteurAnalyseDistante(reglages.analyseDistante)
        : el(
            'div',
            { class: 'analyse-distante' },
            el('p', {
              class: 'analyse-distante__etat',
              texte: 'Analyse sur un service distant : réservée aux comptes.',
            }),
          ),
      el('p', {
        class: 'bloc__texte',
        texte: !connecte
          ? 'L’analyse distante demande d’être connecté avec un compte ZeNote, et les comptes ' +
            'n’existent pas encore : aucune note ne sort de l’appareil. Ces choix vaudront le jour ' +
            'où elle sera possible — une note dont la sphère ne se reconnaît pas restera alors ' +
            'ici, elle aussi, dès qu’une case est cochée.'
          : reglages.analyseDistante
          ? 'L’analyse distante est allumée. Les notes cochées ci-dessous ne partent jamais ; ' +
            'une note dont la sphère ne se reconnaît pas non plus, dès qu’une case est cochée.'
          : 'L’analyse distante est éteinte : aucune note ne sort de l’appareil. Ces choix ' +
            'vaudront si elle est un jour allumée — une note dont la sphère ne se reconnaît pas ' +
            'restera alors ici, elle aussi, dès qu’une case est cochée.',
      }),
      el(
        'fieldset',
        { class: 'bloc__choix' },
        el('legend', { texte: 'Ne jamais envoyer' }),
        choix('PERSONNEL', 'Les notes personnelles'),
        choix('PROFESSIONNEL', 'Les notes professionnelles'),
      ),
    );
  }

  /**
   * « Analyse sur un service distant » : éteinte par défaut, allumée seulement après
   * avoir lu ce qui part, vers qui, et ce qui ne part jamais.
   *
   * Change `analyse-typesafe`, décision 8. Un clic ne suffit pas : l'allumage ouvre
   * l'explication, et seul « Allumer » au bas de celle-ci pose le réglage. L'éteindre
   * est immédiat — arrêter d'envoyer ne demande aucune justification.
   */
  function interrupteurAnalyseDistante(allumee: boolean): HTMLElement {
    if (allumee) {
      return el(
        'div',
        { class: 'analyse-distante' },
        el('p', { class: 'analyse-distante__etat', texte: 'Analyse sur un service distant : allumée.' }),
        el('button', {
          class: 'bouton',
          type: 'button',
          texte: 'Éteindre l’analyse distante',
          onclick: () => {
            void (async () => {
              await ecrireReglage('analyseDistante', false);
              annoncer('Analyse distante éteinte. Plus rien ne sort.');
              await rendre();
            })();
          },
        }),
      );
    }

    const explication = el(
      'div',
      { class: 'analyse-distante__confirmation', hidden: true, role: 'group', 'aria-label': 'Avant d’allumer' },
      el('p', { class: 'fait__titre', texte: 'Ce qui part' }),
      el('p', {
        class: 'fait__detail',
        texte:
          'Le texte de chaque passage d’une note, tel que l’appareil l’a découpé — et rien ' +
          'd’autre, pour chaque note que vous n’avez pas gardée ici.',
      }),
      el('p', { class: 'fait__titre', texte: 'Vers qui' }),
      el('p', {
        class: 'fait__detail',
        texte:
          'Le service d’analyse de ZeNote, sur ce même site, qui le soumet à TypeSafe, ' +
          'fournisseur du modèle Jev, pour juger le type et la sphère de chaque passage. ' +
          'L’appareil ne contacte jamais TypeSafe directement.',
      }),
      el('p', { class: 'fait__titre', texte: 'Ce qui ne part jamais' }),
      el('p', {
        class: 'fait__detail',
        texte:
          'L’audio, la date et l’heure des notes, leurs identifiants, vos décisions, les ' +
          'notes marquées « Ne pas envoyer à l’analyse », et celles des sphères exclues ' +
          'ci-dessous.',
      }),
      el('p', {
        class: 'fait__detail',
        texte:
          'Encore expérimental : ce service n’a pas été évalué sur des notes en français. ' +
          'S’il ne répond pas, la note est analysée ici, comme aujourd’hui.',
      }),
      el('button', {
        class: 'bouton bouton--plein',
        type: 'button',
        texte: 'Allumer',
        onclick: () => {
          void (async () => {
            await ecrireReglage('analyseDistante', true);
            annoncer('Analyse distante allumée.');
            await rendre();
          })();
        },
      }),
      el('button', {
        class: 'bouton bouton--discret',
        type: 'button',
        texte: 'Laisser éteinte',
        onclick: () => {
          explication.hidden = true;
          ouvrir.hidden = false;
          ouvrir.focus();
        },
      }),
    );
    const ouvrir = el('button', {
      class: 'bouton',
      type: 'button',
      texte: 'Allumer l’analyse distante…',
      onclick: () => {
        explication.hidden = false;
        ouvrir.hidden = true;
      },
    });

    return el(
      'div',
      { class: 'analyse-distante' },
      el('p', { class: 'analyse-distante__etat', texte: 'Analyse sur un service distant : éteinte.' }),
      ouvrir,
      explication,
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
