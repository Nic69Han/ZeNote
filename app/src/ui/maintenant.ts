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
import { listerElementsActifs, majElement } from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';

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

export async function montrerMaintenant(racine: HTMLElement): Promise<void> {
  async function rendre(): Promise<void> {
    const actifs = await listerElementsActifs();
    const candidats = actifs.filter((e) => !ecartes.has(e.id));
    const propositions = maintenantObjets(candidats, aujourdhui());

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
        liste.append(rendreProposition(proposition));
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

  function rendreProposition(p: PropositionJson): HTMLElement {
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
            // Écarté : l'élément reste actif et pourra être reproposé plus tard.
            ecartes.add(p.elementId);
            annoncer('Écarté pour l’instant.');
            void rendre();
          },
        }),
      ),
    );
  }

  async function marquerFait(p: PropositionJson): Promise<void> {
    await majElement(p.elementId, { faitLe: new Date().toISOString() });
    annoncer('Fait.');
    await rendre();
  }

  await rendre();
}
