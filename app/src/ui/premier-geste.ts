/**
 * Le premier geste : le demander en Revue, le montrer dans Maintenant.
 *
 * Une tâche floue reste une charge sans prise : « avancer sur le budget » ne dit pas par
 * où prendre. Découper en microtâches améliore le résultat et résiste mieux aux
 * interruptions (Cheng, Teevan, Iqbal & Bernstein, 2015). Ce module tient les deux
 * moitiés de l'écran — la question, puis la réponse au moment d'agir — et une règle :
 * le geste est celui de l'utilisateur, jamais rédigé à sa place (spec `premier-geste`).
 */

import { demandeUnPremierGeste } from '../analyse/geste.ts';
import type { ElementJson } from '../core/regles.ts';
import { aujourdhui } from '../services/pipeline.ts';
import { majElement, type ElementStocke } from '../stockage/depot.ts';
import { annoncer, el } from './dom.ts';

// ------------------------------------------------------------------ la Revue

/** Le champ de la zone de plan, et ce qu'il fait de la réponse. */
export interface ZoneGeste {
  noeud: HTMLElement;
  /**
   * L'action du plan : le geste saisi, ou le texte de la tâche si rien n'est saisi.
   * Spec `premier-geste` — « Geste laissé vide » : le plan reste celui d'aujourd'hui.
   */
  action: () => string;
}

/**
 * Le premier geste dans la zone de plan.
 *
 * Pour une tâche floue, le champ est là d'emblée, avant les déclencheurs. Sinon, un lien
 * discret l'ouvre à qui veut en préciser un. Dans les deux cas répondre est facultatif.
 */
export function zonePremierGeste(e: ElementJson): ZoneGeste {
  const demande = e.type === 'TACHE' && demandeUnPremierGeste(e.texte);

  const champ = el('input', {
    class: 'champ geste__champ',
    type: 'text',
    maxlength: 200,
    placeholder: 'Ce que vous feriez en deux minutes…',
    'aria-label': 'Premier geste',
  }) as HTMLInputElement;

  const etiquette = el(
    'label',
    { class: 'geste__etiquette' },
    el('span', { class: 'geste__intitule', texte: 'Premier geste (deux minutes)' }),
    champ,
    el('span', {
      class: 'geste__aide',
      texte: 'Facultatif, et dans vos mots. Sans réponse, le plan reste la tâche telle quelle.',
    }),
  );

  const preciser = el('button', {
    class: 'bouton bouton--discret geste__preciser',
    type: 'button',
    texte: 'Préciser un premier geste',
    onclick: () => {
      preciser.hidden = true;
      etiquette.hidden = false;
      champ.focus();
    },
  });

  etiquette.hidden = !demande;
  preciser.hidden = demande;

  return {
    noeud: el('div', { class: 'geste', 'data-demande': String(demande) }, etiquette, preciser),
    action: () => champ.value.trim() || e.texte,
  };
}

// ------------------------------------------------------------------ Maintenant

/**
 * Les gestes marqués faits pendant cette session, par élément : c'est ce qui garde
 * ouvert le champ « Et ensuite ? » d'un rendu à l'autre, jusqu'à ce qu'on le renseigne
 * ou qu'on le laisse.
 */
const gestesFaitsRecemment = new Map<string, string>();

/** Ce que la carte d'une proposition ajoute quand la tâche a un premier geste. */
export interface GesteDeProposition {
  /** « Commencer par : « geste » », ou `null` si le plan n'a pas d'autre action que la tâche. */
  commencerPar: HTMLElement | null;
  /** « Geste fait », ou `null`. */
  boutonFait: HTMLElement | null;
  /** « Et ensuite ? », tant que le geste qui vient d'être fait n'a pas de suite. */
  suite: HTMLElement | null;
}

/** Le premier geste d'un élément : l'action du plan, quand elle n'est pas la tâche elle-même. */
export function premierGesteDe(element: Pick<ElementStocke, 'texte' | 'planAction'>): string | null {
  const geste = element.planAction?.trim();
  return geste && geste !== element.texte.trim() ? geste : null;
}

/**
 * Le geste d'une proposition de Maintenant.
 *
 * Spec `premier-geste` — « Premier geste affiché au moment d'agir » : le geste est la
 * chose à faire, la tâche reste dessous. « Geste fait » ne clôt pas la tâche — seul
 * « C'est fait » le fait — et ouvre un champ facultatif pour le geste suivant.
 *
 * @param surChangement appelé quand l'élément a changé, pour que l'écran se redessine.
 */
export function gesteDeProposition(
  element: ElementStocke | undefined,
  surChangement: () => void,
): GesteDeProposition {
  const vide: GesteDeProposition = { commencerPar: null, boutonFait: null, suite: null };
  if (!element) return vide;

  const geste = premierGesteDe(element);
  const fait = gestesFaitsRecemment.get(element.id);

  return {
    commencerPar: geste
      ? el('p', { class: 'proposition__geste', texte: `Commencer par : « ${geste} »` })
      : null,
    boutonFait: geste
      ? el('button', {
          class: 'bouton bouton--geste-fait',
          type: 'button',
          texte: 'Geste fait',
          onclick: () => {
            void marquerGesteFait(element, geste).then(() => {
              annoncer('Geste fait. La tâche reste à faire.');
              surChangement();
            });
          },
        })
      : null,
    suite: fait !== undefined ? champSuite(element, fait, surChangement) : null,
  };
}

/**
 * Marque le geste fait, sans clore la tâche.
 *
 * Le geste rejoint `gestesFaits` et l'action du plan redevient la tâche : sans cela la
 * carte continuerait de dire « Commencer par » un geste déjà fait. La tâche, elle, reste
 * active, et compte comme touchée aujourd'hui.
 */
async function marquerGesteFait(element: ElementStocke, geste: string): Promise<void> {
  await majElement(element.id, {
    gestesFaits: [...(element.gestesFaits ?? []), geste],
    planAction: element.texte,
    vuLe: aujourdhui(),
  });
  gestesFaitsRecemment.set(element.id, geste);
}

/** « Et ensuite ? » : facultatif, et qui se laisse sans un mot. */
function champSuite(element: ElementStocke, fait: string, surChangement: () => void): HTMLElement {
  const champ = el('input', {
    class: 'champ geste__champ',
    type: 'text',
    maxlength: 200,
    placeholder: 'Le geste suivant, si vous le connaissez…',
    'aria-label': 'Et ensuite ?',
  }) as HTMLInputElement;

  const clore = (): void => {
    gestesFaitsRecemment.delete(element.id);
    surChangement();
  };

  const noter = (): void => {
    const suivant = champ.value.trim();
    if (suivant === '') {
      clore();
      return;
    }
    void majElement(element.id, { planAction: suivant }).then(() => {
      annoncer('Geste suivant noté.');
      clore();
    });
  };

  champ.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      noter();
    }
  });

  return el(
    'div',
    { class: 'geste-suite' },
    el('p', { class: 'geste-suite__fait', texte: `Geste fait : « ${fait} ».` }),
    el('label', { class: 'geste__etiquette' }, el('span', { class: 'geste__intitule', texte: 'Et ensuite ?' }), champ),
    el(
      'div',
      { class: 'geste-suite__actions' },
      el('button', {
        class: 'bouton bouton--plein geste-suite__noter',
        type: 'button',
        texte: 'Noter',
        onclick: noter,
      }),
      el('button', {
        class: 'bouton bouton--discret geste-suite__plus-tard',
        type: 'button',
        texte: 'Plus tard',
        onclick: clore,
      }),
    ),
  );
}
