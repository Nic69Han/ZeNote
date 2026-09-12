/**
 * Écran 2 — La Revue.
 *
 * Le seul moment où l'on range. Le système montre ce qu'il a compris ; l'utilisateur
 * accepte, ajuste, reporte, classe « un jour » ou supprime — d'un seul geste par
 * élément. L'ordre de présentation et le regroupement viennent du cœur
 * (`core/regles.ts`), jamais d'un tri refait ici.
 */

import { revueObjets, type ElementJson, type EntreeRevueJson } from '../core/regles.ts';
import { aujourdhui } from '../services/pipeline.ts';
import { lireCapture, listerElements, majElement, type Capture } from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';

const LIBELLE_TYPE: Record<ElementJson['type'], string> = {
  TACHE: 'Tâche',
  ENGAGEMENT: 'Engagement',
  ATTENTE: 'Attente',
  INFORMATION: 'Information',
  DECISION: 'Décision',
  IDEE: 'Idée',
};

const LIBELLE_POIDS: Record<'FAIBLE' | 'MOYEN' | 'FORT', string> = {
  FAIBLE: 'Poids faible',
  MOYEN: 'Poids moyen',
  FORT: 'Poids fort',
};

const LIBELLE_URGENCE: Record<string, string> = {
  DEPASSEE: 'dépassée',
  AUJOURD_HUI: "aujourd'hui",
  DEMAIN: 'demain',
  CETTE_SEMAINE: 'cette semaine',
  PLUS_TARD: 'plus tard',
  AUCUNE: 'sans échéance',
};

/** Un élément actionnable ne sort pas de la Revue sans plan, « un jour » ou suppression. */
function actionnable(type: ElementJson['type']): boolean {
  return type === 'TACHE' || type === 'ENGAGEMENT';
}

function dateLisible(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

export async function montrerRevue(racine: HTMLElement): Promise<void> {
  const jour = aujourdhui();
  /** Dernier lot traité, pour que toute action reste annulable. */
  let dernierLot: { id: string; avant: ElementJson }[] = [];

  async function appliquer(
    element: ElementJson,
    ajustement: Partial<ElementJson>,
    lot = false,
  ): Promise<void> {
    if (!lot) dernierLot = [];
    dernierLot.push({ id: element.id, avant: { ...element } });
    await majElement(element.id, ajustement);
  }

  async function annulerDernier(): Promise<void> {
    for (const { id, avant } of dernierLot) await majElement(id, avant);
    dernierLot = [];
    annoncer('Action annulée.');
    await rendre();
  }

  // ------------------------------------------------------------------- rendu

  async function rendre(): Promise<void> {
    const elements = await listerElements();
    const file = revueObjets(elements, jour);

    vider(racine);
    const section = el(
      'section',
      { class: 'ecran ecran--revue', 'aria-labelledby': 'titre-revue' },
      el('h1', { id: 'titre-revue', class: 'ecran__titre', texte: 'La Revue' }),
      el('p', {
        class: 'ecran__sous-titre',
        texte: 'Une fois par jour. Un geste par élément.',
      }),
    );

    if (file.total === 0) {
      section.append(
        el(
          'div',
          { class: 'vide' },
          el('p', { class: 'vide__titre', texte: 'Rien à ranger.' }),
          el('p', {
            class: 'vide__detail',
            texte: 'Tout ce qui a été capturé a trouvé sa place. Repassez demain.',
          }),
        ),
      );
      racine.append(section);
      return;
    }

    for (const groupe of file.groupes) {
      section.append(await rendreGroupe(groupe.captureId, groupe.entrees));
    }

    if (dernierLot.length > 0) {
      section.append(
        el(
          'div',
          { class: 'annulation', role: 'status' },
          el('span', { texte: 'Décision enregistrée.' }),
          el('button', {
            class: 'bouton bouton--discret',
            type: 'button',
            texte: 'Annuler',
            onclick: () => void annulerDernier(),
          }),
        ),
      );
    }

    racine.append(section);
  }

  async function rendreGroupe(
    captureId: string,
    entrees: EntreeRevueJson[],
  ): Promise<HTMLElement> {
    const capture = await lireCapture(captureId);
    const groupe = el('article', { class: 'groupe' });

    groupe.append(enTeteSource(capture, captureId));

    // L'acceptation groupée n'est proposée que si toutes les déductions sont sûres.
    const toutesSures = entrees.every((e) => !e.aConfirmer);
    if (entrees.length > 1 && toutesSures) {
      groupe.append(
        el('button', {
          class: 'bouton bouton--groupe',
          type: 'button',
          texte: `Tout accepter (${entrees.length})`,
          onclick: () => void accepterGroupe(entrees),
        }),
      );
    }

    const liste = el('ul', { class: 'entrees' });
    for (const entree of entrees) liste.append(rendreEntree(entree, capture));
    groupe.append(liste);
    return groupe;
  }

  function enTeteSource(capture: Capture | undefined, captureId: string): HTMLElement {
    const heure = capture
      ? new Date(capture.creeLe).toLocaleString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        })
      : captureId;
    const detail = el(
      'details',
      { class: 'source' },
      el(
        'summary',
        { class: 'source__resume' },
        el('span', { class: 'source__heure chiffres', texte: heure }),
        el('span', {
          class: 'source__mode',
          texte: capture?.source === 'ECRITE' ? 'écrite' : 'dictée',
        }),
      ),
      el('p', { class: 'source__texte', texte: capture?.texte ?? '(source introuvable)' }),
    );
    return detail;
  }

  function rendreEntree(entree: EntreeRevueJson, capture: Capture | undefined): HTMLElement {
    const e = entree.element;
    const ligne = el('li', { class: 'entree', 'data-type': e.type });

    const badges = el(
      'div',
      { class: 'badges' },
      el('span', { class: 'badge badge--type', texte: LIBELLE_TYPE[e.type] }),
      e.poids
        ? el('span', {
            class: `badge badge--poids badge--poids-${e.poids.toLowerCase()}`,
            texte: LIBELLE_POIDS[e.poids],
          })
        : null,
      e.echeance
        ? el('span', {
            class: 'badge badge--echeance chiffres',
            texte: `${dateLisible(e.echeance)} · ${LIBELLE_URGENCE[entree.urgence] ?? ''}`,
          })
        : null,
      e.interlocuteur ? el('span', { class: 'badge', texte: e.interlocuteur }) : null,
      entree.aConfirmer
        ? el('span', { class: 'badge badge--doute', texte: 'à confirmer' })
        : null,
    );

    const justification = el('p', {
      class: 'entree__indice',
      texte: e.poidsIndice ? `Poids : ${e.poidsIndice}.` : '',
    });

    const zoneActions = el('div', { class: 'entree__actions' });
    const zonePlan = el('div', { class: 'plan', hidden: true });
    const zoneAjustement = el('div', { class: 'ajustement', hidden: true });

    zoneActions.append(
      bouton('Accepter', 'bouton--accepter', () => {
        if (actionnable(e.type) && !e.planDeclencheur) {
          zonePlan.hidden = false;
          (zonePlan.querySelector('button') as HTMLButtonElement | null)?.focus();
        } else {
          void decider(e, { verdict: 'ACCEPTE' }, 'Accepté.');
        }
      }),
      bouton('Ajuster', 'bouton--ajuster', () => {
        zoneAjustement.hidden = !zoneAjustement.hidden;
      }),
      bouton('Reporter', 'bouton--reporter', () => {
        annoncer('Reporté à la prochaine Revue.');
        ligne.classList.add('entree--reportee');
      }),
      bouton('Un jour', 'bouton--unjour', () => {
        void decider(e, { verdict: 'UN_JOUR' }, 'Classé « un jour ».');
      }),
      bouton('Supprimer', 'bouton--supprimer', () => {
        void decider(e, { verdict: 'REJETE' }, 'Supprimé.');
      }),
    );

    zonePlan.append(
      el('p', {
        class: 'plan__question',
        texte: 'Quand, ou à quel signal ? Une tâche sans plan reste une charge.',
      }),
      ...declencheurs(e, capture).map(({ libelle, valeur }) =>
        bouton(libelle, 'bouton--plan', () => {
          void decider(
            e,
            { verdict: 'ACCEPTE', planDeclencheur: valeur, planAction: e.texte },
            `Accepté — ${valeur}.`,
          );
        }),
      ),
      champLibrePlan(e),
    );

    zoneAjustement.append(formulaireAjustement(e));

    ligne.append(
      badges,
      el('p', { class: 'entree__texte', texte: e.texte }),
      justification,
      zoneActions,
      zonePlan,
      zoneAjustement,
    );
    return ligne;
  }

  function bouton(libelle: string, classe: string, action: () => void): HTMLButtonElement {
    return el('button', { class: `bouton ${classe}`, type: 'button', texte: libelle, onclick: action });
  }

  /** Des déclencheurs, pas des heures : « quand X, je fais Y ». */
  function declencheurs(
    e: ElementJson,
    capture: Capture | undefined,
  ): { libelle: string; valeur: string }[] {
    const liste = [
      { libelle: 'Ce soir', valeur: 'ce soir' },
      { libelle: 'Demain matin', valeur: 'demain matin, au premier créneau' },
      { libelle: 'Prochain créneau libre', valeur: 'au prochain créneau libre' },
    ];
    if (e.interlocuteur) {
      liste.unshift({
        libelle: `Quand je vois ${e.interlocuteur}`,
        valeur: `quand je vois ${e.interlocuteur}`,
      });
    }
    if (capture?.source === 'VOCALE') {
      liste.push({ libelle: 'Au prochain point', valeur: 'au prochain point d’équipe' });
    }
    return liste;
  }

  function champLibrePlan(e: ElementJson): HTMLElement {
    const champ = el('input', {
      class: 'champ',
      type: 'text',
      placeholder: 'Ou : quand…',
      'aria-label': 'Déclencheur libre',
    });
    const valider = el('button', {
      class: 'bouton bouton--plan',
      type: 'button',
      texte: 'Poser',
      onclick: () => {
        const valeur = champ.value.trim();
        if (!valeur) return;
        void decider(
          e,
          { verdict: 'ACCEPTE', planDeclencheur: valeur, planAction: e.texte },
          `Accepté — ${valeur}.`,
        );
      },
    });
    return el('div', { class: 'plan__libre' }, champ, valider);
  }

  /** Seuls les champs déduits sont modifiables, sur un seul écran. */
  function formulaireAjustement(e: ElementJson): HTMLElement {
    const type = el('select', { class: 'champ', 'aria-label': 'Type' });
    for (const [valeur, libelle] of Object.entries(LIBELLE_TYPE)) {
      type.append(el('option', { value: valeur, selected: valeur === e.type, texte: libelle }));
    }
    const echeance = el('input', {
      class: 'champ chiffres',
      type: 'date',
      value: e.echeance ?? '',
      'aria-label': 'Échéance',
    });
    const interlocuteur = el('input', {
      class: 'champ',
      type: 'text',
      value: e.interlocuteur ?? '',
      placeholder: 'Interlocuteur',
      'aria-label': 'Interlocuteur',
    });
    const groupePoids = el('div', { class: 'poids-choix', role: 'group', 'aria-label': 'Poids' });
    let poidsChoisi = e.poids ?? 'MOYEN';
    for (const valeur of ['FAIBLE', 'MOYEN', 'FORT'] as const) {
      const b = el('button', {
        class: 'bouton bouton--poids',
        type: 'button',
        texte: LIBELLE_POIDS[valeur].replace('Poids ', ''),
        'aria-pressed': String(poidsChoisi === valeur),
        onclick: () => {
          poidsChoisi = valeur;
          for (const autre of groupePoids.querySelectorAll('button')) {
            autre.setAttribute('aria-pressed', String(autre === b));
          }
        },
      });
      groupePoids.append(b);
    }

    const enregistrer = el('button', {
      class: 'bouton bouton--plein',
      type: 'button',
      texte: 'Enregistrer la correction',
      onclick: () => {
        void decider(
          e,
          {
            type: type.value as ElementJson['type'],
            echeance: echeance.value || null,
            echeanceConfiance: echeance.value ? 1 : null,
            echeanceIndice: echeance.value ? 'corrigé à la main' : null,
            poids: poidsChoisi,
            poidsConfiance: 1,
            poidsIndice: 'poids fixé à la main',
            interlocuteur: interlocuteur.value.trim() || null,
            interlocuteurConfiance: interlocuteur.value.trim() ? 1 : null,
            corrigeParHumain: true,
          },
          'Correction enregistrée.',
        );
      },
    });

    return el(
      'div',
      { class: 'ajustement__grille' },
      el('label', { class: 'champ__etiquette' }, 'Type', type),
      el('label', { class: 'champ__etiquette' }, 'Échéance', echeance),
      el('label', { class: 'champ__etiquette' }, 'Interlocuteur', interlocuteur),
      el('div', { class: 'champ__etiquette' }, 'Poids', groupePoids),
      enregistrer,
    );
  }

  async function decider(
    e: ElementJson,
    ajustement: Partial<ElementJson>,
    annonce: string,
  ): Promise<void> {
    await appliquer(e, ajustement);
    annoncer(annonce);
    await rendre();
  }

  async function accepterGroupe(entrees: EntreeRevueJson[]): Promise<void> {
    dernierLot = [];
    for (const entree of entrees) {
      const e = entree.element;
      const ajustement: Partial<ElementJson> = actionnable(e.type)
        ? {
            verdict: 'ACCEPTE',
            planDeclencheur: e.planDeclencheur ?? 'au prochain créneau libre',
            planAction: e.texte,
          }
        : { verdict: 'ACCEPTE' };
      await appliquer(e, ajustement, true);
    }
    annoncer(`${entrees.length} éléments acceptés.`);
    await rendre();
  }

  await rendre();
}
