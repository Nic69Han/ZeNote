/**
 * L'écran Recherche : retrouver sans avoir jamais rangé.
 *
 * Le classement et la décision « rien ne correspond » ne sont pas décidés ici : ils
 * viennent du cœur (`rechercherParMotsObjets`, `rechercherParPersonneObjets`). Cet
 * écran affiche une réponse, il n'en fabrique pas.
 *
 * Trois règles tiennent tout le reste (spec `recherche`) :
 *  - toute réponse montre ses citations, et chacune renvoie à sa capture source ;
 *  - quand rien ne correspond, l'absence est dite comme le cœur la formule — aucune
 *    reformulation, aucune suggestion « vouliez-vous dire » ;
 *  - ce que le manque de réseau met en pause est signalé, discrètement, jamais masqué.
 */

import '../styles/recherche.css';
import {
  rechercherParMotsObjets,
  rechercherParPersonneObjets,
  type CaptureJson,
  type CitationJson,
  type ReponseJson,
} from '../core/regles.ts';
import { listerCaptures, listerElements, type Capture } from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';

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

export async function montrerRecherche(racine: HTMLElement): Promise<void> {
  /** La zone de réponse survit aux questions successives : le champ garde sa saisie. */
  const zoneReponse = el('div', {
    class: 'reponse',
    role: 'region',
    'aria-label': 'Réponse',
  });

  // ---------------------------------------------------------------- questions

  async function parMots(requete: string): Promise<void> {
    const [elements, captures] = await Promise.all([listerElements(), listerCaptures()]);
    const sources: CaptureJson[] = captures.map((capture) => ({
      id: capture.id,
      texte: capture.texte,
      creeLe: quandLisible(capture.creeLe),
    }));
    afficher(
      rechercherParMotsObjets(requete, elements, sources, reseauDisponible()),
      captures,
    );
  }

  async function parPersonne(personne: string): Promise<void> {
    const [elements, captures] = await Promise.all([listerElements(), listerCaptures()]);
    afficher(rechercherParPersonneObjets(personne, elements, reseauDisponible()), captures);
  }

  // ------------------------------------------------------------------- rendu

  function afficher(reponse: ReponseJson, captures: Capture[]): void {
    const parId = new Map(captures.map((capture) => [capture.id, capture]));

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
      const liste = el('ol', { class: 'citations' });
      for (const citation of reponse.citations) {
        liste.append(rendreCitation(citation, parId.get(citation.captureId)));
      }
      zoneReponse.append(liste);
    }

    if (reponse.indisponibleHorsLigne.length > 0) {
      zoneReponse.append(mentionHorsLigne(reponse.indisponibleHorsLigne));
    }

    annoncer(reponse.enonce);
  }

  function rendreCitation(citation: CitationJson, capture: Capture | undefined): HTMLElement {
    return el(
      'li',
      { class: 'citation', 'data-capture': citation.captureId },
      el('p', { class: 'citation__extrait', texte: citation.extrait }),
      // Le « pourquoi » vient du cœur : c'est une raison, jamais un score.
      el('p', { class: 'citation__pourquoi', texte: citation.pourquoi }),
      renvoiSource(citation.captureId, capture),
    );
  }

  /** Le renvoi à la capture source : sans lui, une citation ne se vérifie pas. */
  function renvoiSource(captureId: string, capture: Capture | undefined): HTMLElement {
    return el(
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
        'Par mots',
        'ce que j’ai promis à Karim…',
        'Chercher',
        (valeur) => parMots(valeur),
      ),
      entree(
        'personne',
        'Par personne',
        'Karim',
        'Voir avec cette personne',
        (valeur) => parPersonne(valeur),
      ),
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
        texte: 'Par mots ou par personne. Chaque réponse renverra à ses captures.',
      }),
    ),
  );
}
