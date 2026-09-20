/**
 * Écran 3 — Maintenant.
 *
 * Une seule question : quoi faire là, tout de suite. Trois éléments au plus, chacun
 * avec sa raison en une ligne. Pas de compteur, pas de liste complète, pas de
 * statistiques de complétion, pas de notification de retard.
 *
 * Le classement vient du cœur (`core/regles.ts`) : cet écran n'ordonne rien.
 */

import { maintenantObjets, type ElementJson, type PropositionJson } from '../core/regles.ts';
import { aujourdhui } from '../services/pipeline.ts';
import {
  lireCapture,
  lireReglages,
  listerElementsActifs,
  majElement,
  type Capture,
  type ElementStocke,
} from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';
import { duree, lecteurAudio, type Lecteur } from './lecteur.ts';

/**
 * Les éléments écartés le sont pour la session en cours seulement : écarter n'est ni
 * supprimer, ni repousser dans le temps (spec `priorisation`).
 */
const ecartes = new Set<string>();

const LIBELLE_POIDS: Record<string, string> = {
  FAIBLE: 'poids faible',
  MOYEN: 'poids moyen',
  FORT: 'poids fort',
};

export async function montrerMaintenant(racine: HTMLElement): Promise<() => void> {
  /** Les lecteurs audio posés par le rendu courant, à libérer avant le suivant. */
  const lecteurs: Lecteur[] = [];

  function libererLecteurs(): void {
    for (const lecteur of lecteurs) lecteur.demonter();
    lecteurs.length = 0;
  }

  async function rendre(): Promise<void> {
    libererLecteurs();
    const sphere = (await lireReglages()).filtreSphere;
    const actifs = await listerElementsActifs();
    // Le même filtre qu'en Revue, et la même règle : un élément dont la sphère n'a
    // pas pu être déduite reste visible partout. Le filtre trie ce qu'on sait ranger,
    // il ne cache pas ce qu'on ne sait pas — et il ne déplace rien.
    const candidats = actifs.filter(
      (e) =>
        !ecartes.has(e.id) && (sphere === 'TOUT' || !e.sphere || e.sphere === sphere),
    );
    const propositions = maintenantObjets(candidats, aujourdhui());

    // Les sources des trois propositions, chargées d'avance : trois lectures, pas une
    // par rendu de carte, et le rendu reste synchrone.
    const parElement = new Map(candidats.map((e) => [e.id, e]));
    const sources = new Map<string, Capture | undefined>();
    await Promise.all(
      propositions.map(async (p) => {
        const captureId = parElement.get(p.elementId)?.captureId;
        if (captureId && !sources.has(captureId)) {
          sources.set(captureId, await lireCapture(captureId));
        }
      }),
    );

    vider(racine);
    const section = el(
      'section',
      { class: 'ecran ecran--maintenant', 'aria-labelledby': 'titre-maintenant' },
      el('h1', { id: 'titre-maintenant', class: 'ecran__titre', texte: 'Maintenant' }),
      el('p', { class: 'ecran__sous-titre', texte: 'Trois choses. Pas une de plus.' }),
    );

    if (propositions.length === 0) {
      section.append(vue_vide(actifs));
    } else {
      const liste = el('ol', { class: 'propositions' });
      for (const proposition of propositions) {
        const element = parElement.get(proposition.elementId);
        liste.append(
          rendreProposition(
            proposition,
            element,
            element ? sources.get(element.captureId) : undefined,
          ),
        );
      }
      section.append(liste);
    }

    racine.append(section);
  }

  /** Rien à proposer : on le dit, on ne remplit pas l'espace. */
  function vue_vide(actifs: ElementJson[]): HTMLElement {
    const enAttente = actifs.some((e) => e.verdict === 'EN_ATTENTE');
    const bloc = el(
      'div',
      { class: 'vide' },
      el('p', { class: 'vide__titre', texte: 'Rien à faire là, tout de suite.' }),
    );
    if (enAttente) {
      bloc.append(
        el('p', {
          class: 'vide__detail',
          texte: 'Des captures attendent la Revue. Deux minutes suffisent.',
        }),
        el('a', { class: 'bouton bouton--plein', href: '#revue', texte: 'Ouvrir la Revue' }),
      );
    } else if (ecartes.size > 0) {
      bloc.append(
        el('p', { class: 'vide__detail', texte: 'Tout ce qui restait a été écarté pour l’instant.' }),
        el('button', {
          class: 'bouton bouton--discret',
          type: 'button',
          texte: 'Revoir ce qui a été écarté',
          onclick: () => {
            ecartes.clear();
            void rendre();
          },
        }),
      );
    } else {
      bloc.append(el('p', { class: 'vide__detail', texte: 'Rien. C’est une bonne nouvelle.' }));
    }
    return bloc;
  }

  function rendreProposition(
    p: PropositionJson,
    element: ElementStocke | undefined,
    capture: Capture | undefined,
  ): HTMLElement {
    return el(
      'li',
      { class: 'proposition', 'data-poids': p.poidsEffectif },
      el(
        'div',
        { class: 'proposition__entete' },
        el('span', {
          class: `badge badge--poids badge--poids-${p.poidsEffectif.toLowerCase()}`,
          texte: LIBELLE_POIDS[p.poidsEffectif] ?? p.poidsEffectif,
        }),
      ),
      el('p', { class: 'proposition__texte', texte: p.texte }),
      // La raison dit ce qui se passe si ce n'est pas fait, jamais un score.
      el('p', { class: 'proposition__raison', texte: p.raison }),
      source(element, capture),
      el(
        'div',
        { class: 'proposition__actions' },
        el('button', {
          class: 'bouton bouton--accepter',
          type: 'button',
          texte: "C'est fait",
          onclick: () => void marquerFait(p),
        }),
        el('button', {
          class: 'bouton bouton--discret',
          type: 'button',
          texte: 'Pas maintenant',
          onclick: () => {
            // Écarté : l'élément reste actif et pourra être reproposé plus tard. Ni
            // supprimé, ni reporté — c'est la différence que la spec tient.
            //
            // Le compte, lui, est écrit : il vivait en mémoire et disparaissait au
            // rechargement, donc ne pouvait rien déclencher. Au troisième écart, la
            // Revue demande si c'est bien le bon découpage.
            ecartes.add(p.elementId);
            void majElement(p.elementId, {
              ecarteFois: (element?.ecarteFois ?? 0) + 1,
              vuLe: aujourdhui(),
            });
            annoncer('Écarté pour l’instant.');
            void rendre();
          },
        }),
      ),
    );
  }

  /**
   * La source, repliée.
   *
   * Maintenant est l'écran le plus protégé du produit : replié, ce renvoi tient en une
   * ligne grise. Mais il doit y être — c'est ici qu'on est sur le point de faire la
   * chose, donc ici qu'un doute sur ce qu'on avait dit se lève (spec `transcription`
   * — « Remonter à l'audio d'origine »).
   */
  function source(element: ElementJson | undefined, capture: Capture | undefined): HTMLElement | null {
    if (!element) return null;

    const lecteur = lecteurAudio(capture);
    lecteurs.push(lecteur);

    const detail = el(
      'details',
      { class: 'source' },
      el(
        'summary',
        { class: 'source__resume' },
        el('span', { class: 'source__mode', texte: 'ce que vous aviez dit' }),
      ),
      el('p', { class: 'source__texte', texte: capture?.texte ?? '(source introuvable)' }),
      lecteur.noeud,
      lecteur.disponible && typeof element.debutMs === 'number'
        ? el('button', {
            class: 'bouton bouton--ecouter',
            type: 'button',
            texte: `Écouter ce passage (vers ${duree(element.debutMs)})`,
            onclick: () => lecteur.allerA(element.debutMs as number),
          })
        : null,
    ) as HTMLDetailsElement;

    detail.addEventListener('toggle', () => {
      if (detail.open) lecteur.ouvrir();
    });
    return detail;
  }

  async function marquerFait(p: PropositionJson): Promise<void> {
    await majElement(p.elementId, { faitLe: new Date().toISOString() });
    annoncer('Fait.');
    await rendre();
  }

  await rendre();

  return libererLecteurs;
}
