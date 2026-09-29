/**
 * L'écran Recherche : retrouver sans avoir jamais rangé.
 *
 * Le classement, la lecture du repère temporel et la décision « rien ne correspond »
 * ne sont pas décidés ici : ils viennent du cœur (`rechercherParQuestionObjets`,
 * `rechercherParPersonneObjets`). Cet écran affiche une réponse, il n'en fabrique pas.
 *
 * Quatre règles tiennent tout le reste (spec `recherche`) :
 *  - toute réponse montre ses citations, et chacune renvoie à sa capture source ;
 *  - quand rien ne correspond, l'absence est dite comme le cœur la formule — aucune
 *    reformulation, aucune suggestion « vouliez-vous dire » ;
 *  - ce que le manque de réseau met en pause est signalé, discrètement, jamais masqué ;
 *  - ce que la question demandait et que le produit ne sait pas faire est dit aussi.
 *    Répondre à moitié sans le signaler laisserait lire les résultats de travers.
 */

import '../styles/recherche.css';
import {
  rechercherParPersonneObjets,
  rechercherParQuestionObjets,
  type CaptureJson,
  type CitationJson,
  type ElementJson,
  type ReponseJson,
} from '../core/regles.ts';
import {
  lireCapture,
  listerCaptures,
  listerElements,
  type Capture,
} from '../stockage/depot.ts';
import { aujourdhui } from '../services/pipeline.ts';
import {
  friseDe,
  jourVecu,
  reperesDepuis,
  situer,
  type PointDeFrise,
} from '../services/reperes.ts';
import {
  oublier,
  recentes,
  retenir,
  toutOublier,
  type ModeRecherche,
  type RechercheRetenue,
} from '../services/recherches.ts';
import { annoncer, el, vider } from './dom.ts';
import { duree, lecteurAudio, type Lecteur } from './lecteur.ts';

/**
 * L'état du réseau au moment de la question : le cœur en déduit seul ce qu'il met en
 * pause. En cas de doute on répond « pas de réseau » — signaler une capacité en pause
 * coûte moins cher que de la taire.
 */
function reseauDisponible(): boolean {
  return typeof navigator !== 'undefined' && navigator.onLine === true;
}

/**
 * L'horodatage d'une capture, en clair.
 *
 * Le cœur cite la date telle qu'on la lui donne (`CaptureJson.creeLe` sert de mention
 * lisible dans la justification) : c'est donc à l'application de la rendre lisible,
 * jamais au cœur de connaître une locale.
 */
function quandLisible(iso: string): string {
  return new Date(iso).toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/** Un jour ISO, court : « 14 sept. ». Midi évite qu'un fuseau ne le ramène à la veille. */
function jourCourt(jour: string): string {
  return new Date(`${jour}T12:00:00`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
  });
}

export async function montrerRecherche(racine: HTMLElement): Promise<() => void> {
  /**
   * Les lecteurs audio posés par les réponses successives. Chacun tient une URL objet
   * sur un blob : une question suivie d'une autre en laisserait derrière elle.
   */
  const lecteurs: Lecteur[] = [];

  /**
   * Change à chaque réponse : un lecteur qui finit de se charger après qu'une autre
   * réponse a pris la place de la sienne ne doit pas s'ouvrir dans le vide.
   */
  let generation = 0;

  function libererLecteurs(): void {
    generation += 1;
    for (const lecteur of lecteurs) lecteur.demonter();
    lecteurs.length = 0;
  }
  /** La zone de réponse survit aux questions successives : le champ garde sa saisie. */
  const zoneReponse = el('div', {
    class: 'reponse',
    role: 'region',
    'aria-label': 'Réponse',
  });

  // ---------------------------------------------------------------- questions

  async function parQuestion(requete: string): Promise<void> {
    const [elements, captures] = await Promise.all([listerElements(), listerCaptures()]);
    const sources: CaptureJson[] = captures.map((capture) => ({
      id: capture.id,
      texte: capture.texte,
      creeLe: quandLisible(capture.creeLe),
      // Le jour vécu, pas le jour universel : c'est ce qui rend « hier » juste pour une
      // capture de 23 h 30. Le cœur ne peut pas le déduire, il ne connaît aucun fuseau.
      jour: aujourdhui(new Date(capture.creeLe)),
    }));
    afficher(
      rechercherParQuestionObjets(requete, elements, sources, aujourdhui(), reseauDisponible()),
      captures,
      elements,
    );
  }

  async function parPersonne(personne: string): Promise<void> {
    const [elements, captures] = await Promise.all([listerElements(), listerCaptures()]);
    afficher(rechercherParPersonneObjets(personne, elements, reseauDisponible()), captures, elements);
  }

  // ------------------------------------------------------------------- rendu

  function afficher(reponse: ReponseJson, captures: Capture[], elements: ElementJson[]): void {
    const parId = new Map(captures.map((capture) => [capture.id, capture]));
    const elementsParId = new Map(elements.map((element) => [element.id, element]));

    libererLecteurs();
    vider(zoneReponse);
    zoneReponse.append(
      el('p', { class: 'reponse__question', texte: reponse.question }),
      // Quand `fondee` est faux, cet énoncé EST l'absence, mot pour mot.
      el('p', {
        class: 'reponse__enonce',
        'data-fondee': String(reponse.fondee),
        texte: reponse.enonce,
      }),
    );

    // Pas de citation, pas de liste : une affirmation que rien ne porte n'a nulle part
    // où s'afficher.
    if (reponse.citations.length > 0) {
      // Spec `reperes-temporels` — « Résultats situés ». Les repères viennent de toutes
      // les notes, pas seulement des citations : la réunion qui situe un résultat n'a
      // aucune raison d'en être un.
      const reperes = reperesDepuis(captures, elements);
      const jours = reponse.citations.map((citation) => jourDeCapture(parId.get(citation.captureId)));

      const frise = friseDe(
        jours.filter((jour): jour is string => jour !== null),
        reperes,
      );
      if (frise.length > 0) zoneReponse.append(rendreFrise(frise));

      const liste = el('ol', { class: 'citations' });
      reponse.citations.forEach((citation, rang) => {
        const jour = jours[rang];
        liste.append(
          rendreCitation(
            citation,
            parId.get(citation.captureId),
            citation.elementId ? elementsParId.get(citation.elementId) : undefined,
            jour === null ? null : situer(jour, reperes),
          ),
        );
      });
      zoneReponse.append(liste);
    }

    if (reponse.nonPrisEnCompte.length > 0) {
      zoneReponse.append(mentionEcartee(reponse.nonPrisEnCompte));
    }

    if (reponse.indisponibleHorsLigne.length > 0) {
      zoneReponse.append(mentionHorsLigne(reponse.indisponibleHorsLigne));
    }

    annoncer(reponse.enonce);
  }

  /** Le jour vécu de la capture citée, ou `null` si elle a disparu ou si sa date est illisible. */
  function jourDeCapture(capture: Capture | undefined): string | null {
    return capture ? jourVecu(capture.creeLe) : null;
  }

  /**
   * La frise compacte des jours concernés, avec les repères de la période.
   *
   * Elle n'est là que pour situer : quand aucun repère n'est proche, elle n'existe pas
   * (`friseDe` rend alors une liste vide) plutôt que de répéter des horodatages.
   */
  function rendreFrise(points: PointDeFrise[]): HTMLElement {
    return el(
      'ol',
      { class: 'frise', 'aria-label': 'Frise des jours concernés' },
      points.map((point) =>
        el(
          'li',
          {
            class: 'frise__jour',
            'data-jour': point.jour,
            'data-cite': String(point.citations > 0),
          },
          el('span', { class: 'frise__date chiffres', texte: jourCourt(point.jour) }),
          point.reperes.map((repere) =>
            el('span', {
              class: 'frise__repere',
              'data-sorte': repere.sorte,
              texte: repere.libelle,
            }),
          ),
          point.citations > 0
            ? el('span', {
                class: 'frise__citations',
                texte: point.citations === 1 ? '1 citation' : `${point.citations} citations`,
              })
            : null,
        ),
      ),
    );
  }

  function rendreCitation(
    citation: CitationJson,
    capture: Capture | undefined,
    element: ElementJson | undefined,
    repere: string | null,
  ): HTMLElement {
    return el(
      'li',
      { class: 'citation', 'data-capture': citation.captureId },
      el('p', { class: 'citation__extrait', texte: citation.extrait }),
      // Sans repère à trois jours, rien : la date de la source suffit, et une mention
      // vide ou déguisée serait une information de moins, pas de plus.
      repere ? el('p', { class: 'citation__repere', texte: repere }) : null,
      // Le « pourquoi » vient du cœur : c'est une raison, jamais un score.
      el('p', { class: 'citation__pourquoi', texte: citation.pourquoi }),
      renvoiSource(citation.captureId, capture, element),
    );
  }

  /**
   * Le renvoi à la capture source : sans lui, une citation ne se vérifie pas.
   *
   * La transcription brute et l'enregistrement d'origine y sont, en une action — et
   * quand la citation vient d'un élément dont on connaît la position dans l'audio, la
   * lecture démarre à ce passage (spec `transcription` — « Remonter à l'audio
   * d'origine »).
   */
  function renvoiSource(
    captureId: string,
    capture: Capture | undefined,
    element: ElementJson | undefined,
  ): HTMLElement {
    const debutMs = element?.debutMs;
    const emplacement = el('div', { class: 'source__lecteur' });

    /**
     * Le lecteur est fait à l'ouverture de la source, pas avant.
     *
     * `listerCaptures` ne déplie pas les enregistrements : y chercher l'audio rendait
     * toujours « pas d'audio conservé », même pour une dictée. On relit donc la capture
     * entière, et seulement celle-ci, au moment où l'on veut l'écouter.
     */
    let chargement: Promise<Lecteur | null> | null = null;
    function charger(): Promise<Lecteur | null> {
      chargement ??= (async () => {
        const epoque = generation;
        const complete = capture?.aAudio
          ? await lireCapture(captureId).catch(() => capture)
          : capture;
        if (epoque !== generation) return null;
        const lecteur = lecteurAudio(complete);
        lecteurs.push(lecteur);
        emplacement.append(lecteur.noeud);
        return lecteur;
      })();
      return chargement;
    }

    const detail = el(
      'details',
      { class: 'source' },
      el(
        'summary',
        { class: 'source__resume' },
        el('span', {
          class: 'source__heure chiffres',
          texte: capture ? quandLisible(capture.creeLe) : captureId,
        }),
        el('span', {
          class: 'source__mode',
          texte: capture?.source === 'ECRITE' ? 'écrite' : 'dictée',
        }),
      ),
      el('p', { class: 'source__texte', texte: capture?.texte ?? '(source introuvable)' }),
      emplacement,
      capture?.aAudio && typeof debutMs === 'number'
        ? el('button', {
            class: 'bouton bouton--ecouter',
            type: 'button',
            texte: `Écouter ce passage (vers ${duree(debutMs)})`,
            onclick: () => {
              void charger().then((lecteur) => lecteur?.allerA(debutMs));
            },
          })
        : null,
    ) as HTMLDetailsElement;

    detail.addEventListener('toggle', () => {
      if (detail.open) void charger().then((lecteur) => lecteur?.ouvrir());
    });
    return detail;
  }

  /**
   * Ce que la question demandait et que le produit ne sait pas faire.
   *
   * Ce n'est pas une panne et ça ne reviendra pas : c'est un choix du produit —
   * ZeNote n'enregistre pas où vous étiez. Le dire vaut mieux que rendre des
   * résultats en laissant croire que cette moitié de la question a compté.
   */
  function mentionEcartee(points: string[]): HTMLElement {
    return el(
      'p',
      { class: 'ecartee' },
      el('span', { class: 'ecartee__titre', texte: 'Non pris en compte' }),
      el('span', { class: 'ecartee__detail', texte: points.join(' · ') }),
    );
  }

  /** Signalé, jamais masqué : ce qui reprendra quand le réseau reviendra. */
  function mentionHorsLigne(capacites: string[]): HTMLElement {
    return el(
      'p',
      { class: 'hors-ligne' },
      el('span', { class: 'hors-ligne__titre', texte: 'Hors ligne' }),
      el('span', {
        class: 'hors-ligne__detail',
        texte: `en pause : ${capacites.join(' · ')}`,
      }),
    );
  }

  // ------------------------------------------------------------------ entrées

  // ------------------------------------------------------ recherches passées
  //
  // Spec `recherches-passees` — « Questions retenues » et « Oubli à la demande ». Sous
  // les champs : les cinq dernières questions, un appui les relance, un bouton les
  // oublie une à une, un autre toutes. Rien de tout cela ne bloque la recherche : si
  // l'historique est illisible, il est simplement absent.

  /** Les champs des deux entrées, pour y remettre une question relancée. */
  const champs: Record<string, HTMLInputElement> = {};

  const zoneRecentes = el('section', {
    class: 'recentes',
    'aria-labelledby': 'titre-recentes',
    hidden: true,
  });

  async function poser(mode: ModeRecherche, valeur: string): Promise<void> {
    // La question est retenue même si elle ne rend rien : c'est souvent celle qu'on
    // repose. Elle ne retarde pas la réponse, et son échec ne l'empêche pas.
    const retenue = retenir(valeur, mode).catch(() => []);
    await (mode === 'MOTS' ? parQuestion(valeur) : parPersonne(valeur));
    await retenue;
    await rafraichirRecentes();
  }

  function relancer(question: RechercheRetenue): void {
    const champ = champs[question.mode === 'MOTS' ? 'mots' : 'personne'];
    if (champ) champ.value = question.requete;
    void poser(question.mode, question.requete);
  }

  async function rafraichirRecentes(): Promise<void> {
    const questions = await recentes().catch(() => []);
    vider(zoneRecentes);
    zoneRecentes.hidden = questions.length === 0;
    if (questions.length === 0) return;

    zoneRecentes.append(
      el(
        'div',
        { class: 'recentes__entete' },
        el('h2', { id: 'titre-recentes', class: 'recentes__titre', texte: 'Récemment cherché' }),
        el('button', {
          class: 'recentes__tout',
          type: 'button',
          texte: 'Tout oublier',
          onclick: () => {
            void toutOublier()
              .catch(() => {})
              .then(rafraichirRecentes);
          },
        }),
      ),
      el(
        'ul',
        { class: 'recentes__liste' },
        questions.map((question) =>
          el(
            'li',
            { class: 'recente', 'data-mode': question.mode },
            el(
              'button',
              {
                class: 'recente__relancer',
                type: 'button',
                onclick: () => relancer(question),
              },
              el('span', { class: 'recente__requete', texte: question.requete }),
              question.mode === 'PERSONNE'
                ? el('span', { class: 'recente__mode', texte: 'par personne' })
                : null,
            ),
            el('button', {
              class: 'recente__oublier',
              type: 'button',
              'aria-label': `Oublier « ${question.requete} »`,
              texte: 'Oublier',
              onclick: () => {
                void oublier(question.requete, question.mode)
                  .catch(() => {})
                  .then(rafraichirRecentes);
              },
            }),
          ),
        ),
      ),
    );
  }

  /**
   * Une entrée de recherche : un libellé, un champ, un bouton. Les deux entrées sont
   * côte à côte et toujours visibles — chercher par personne n'est pas un mode caché.
   */
  function entree(
    cle: string,
    libelle: string,
    exemple: string,
    action: string,
    demander: (valeur: string) => Promise<void>,
  ): HTMLFormElement {
    const id = `quete-${cle}`;
    const champ = el('input', {
      id,
      class: 'champ quete__champ',
      type: 'search',
      autocomplete: 'off',
      placeholder: exemple,
    });
    champs[cle] = champ;
    return el(
      'form',
      {
        class: `quete quete--${cle}`,
        onsubmit: (evenement: Event) => {
          evenement.preventDefault();
          const valeur = champ.value.trim();
          // Une question vide n'est pas une question : on n'interroge pas le cœur.
          if (valeur === '') return;
          void demander(valeur);
        },
      },
      el('label', { class: 'quete__libelle', for: id, texte: libelle }),
      el(
        'div',
        { class: 'quete__ligne' },
        champ,
        el('button', { class: 'bouton bouton--plein', type: 'submit', texte: action }),
      ),
    );
  }

  vider(racine);
  racine.append(
    el(
      'section',
      { class: 'ecran ecran--recherche', 'aria-labelledby': 'titre-recherche' },
      el('h1', { id: 'titre-recherche', class: 'ecran__titre', texte: 'Rechercher' }),
      el('p', {
        class: 'ecran__sous-titre',
        texte: 'Ce qui a été capturé, tel qu’il a été dit. Rien d’autre.',
      }),
      entree(
        'mots',
        'Par mots ou par moment',
        'le truc dont j’ai parlé la semaine dernière…',
        'Chercher',
        (valeur) => poser('MOTS', valeur),
      ),
      entree(
        'personne',
        'Par personne',
        'Karim',
        'Voir avec cette personne',
        (valeur) => poser('PERSONNE', valeur),
      ),
      zoneRecentes,
      zoneReponse,
    ),
  );

  zoneReponse.append(
    el(
      'div',
      { class: 'vide' },
      el('p', { class: 'vide__titre', texte: 'Rien n’a encore été demandé.' }),
      el('p', {
        class: 'vide__detail',
        texte:
          'Par mots, par moment — « la semaine dernière », « avant-hier » — ou par ' +
          'personne. Chaque réponse renverra à ses captures.',
      }),
    ),
  );

  void rafraichirRecentes();

  return libererLecteurs;
}
