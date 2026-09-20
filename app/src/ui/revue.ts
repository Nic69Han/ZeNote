/**
 * Écran 2 — La Revue.
 *
 * Le seul moment où l'on range. Le système montre ce qu'il a compris ; l'utilisateur
 * accepte, ajuste, reporte, classe « un jour » ou supprime — d'un seul geste par
 * élément. L'ordre de présentation et le regroupement viennent du cœur
 * (`core/regles.ts`), jamais d'un tri refait ici.
 */

import {
  relancesObjets,
  revueObjets,
  referencesAResoudre,
  transcriptionLisible,
  type ElementJson,
  type PassageIncertain,
  type ResolutionJson,
  type EntreeRevueJson,
  type RelanceJson,
} from '../core/regles.ts';
import {
  capturesATranscrire,
  capturesEnSouffrance,
  lireCapture,
  listerCaptures,
  listerElements,
  majCapture,
  retenirCorrections,
  majElement,
  supprimerCapture,
  suivisDe,
  type Capture,
  ecrireReglage,
  lireReglages,
  type ElementStocke,
  type Reglages,
} from '../stockage/depot.ts';
import {
  aujourdhui,
  maintenantLocal,
  traiterFileAnalyse,
  traiterFileTranscription,
} from '../services/pipeline.ts';
import { annoncer, el, vider } from './dom.ts';
import { duree, lecteurAudio, type Lecteur } from './lecteur.ts';
import { apprendre } from '../services/lexique.ts';
import {
  abandonner,
  deleguer,
  rappelsDuPointDeRupture,
  replanifier,
  type RappelsDuMoment,
} from '../services/rappels.ts';

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

/** Un horizon dit en français, jamais en chiffres : ce n'est pas une date. */
const LIBELLE_HORIZON: Record<string, string> = {
  JOURS: 'dans les prochains jours',
  SEMAINES: 'dans les prochaines semaines',
  MOIS: 'dans les prochains mois',
};

function dateLisible(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

/** De combien de jours « prolonger » repousse une échéance. */
const JOURS_PROLONGATION = 7;

/** Ce que chaque option du cœur dit à l'écran. */
const LIBELLE_OPTION: Record<string, string> = {
  RELANCER: 'J’ai relancé',
  PROLONGER: 'Laisser du temps',
  CLORE: 'C’est réglé',
};

export async function montrerRevue(racine: HTMLElement): Promise<() => void> {
  const jour = aujourdhui();
  /**
   * Les lecteurs audio posés sur cet écran. Chacun tient une URL objet sur un blob ;
   * quitter la Revue sans les libérer laisserait les enregistrements en mémoire.
   */
  const lecteurs: Lecteur[] = [];

  /** Libère tous les lecteurs posés jusqu'ici. Idempotent. */
  function libererLecteurs(): void {
    for (const lecteur of lecteurs) lecteur.demonter();
    lecteurs.length = 0;
  }
  /** Dernier lot traité, pour que toute action reste annulable. */
  let dernierLot: { id: string; avant: ElementStocke }[] = [];
  /** Ce que la mémoire dit des références, par élément. Refait à chaque rendu. */
  let references = new Map<string, ResolutionJson>();

  // Le type stocké, pas seulement le contrat du cœur : une relance touche `relanceLe`
  // et `faitLe`, que les règles ne connaissent pas et n'ont pas à connaître.
  async function appliquer(
    element: ElementStocke,
    ajustement: Partial<ElementStocke>,
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

  /**
   * Relancer, prolonger, clore.
   *
   * Les trois font des choses différentes, et c'est voulu : relancer remet seulement
   * le compteur de silence à zéro, prolonger déplace l'échéance elle-même — ce qui
   * change aussi la place de l'élément dans Maintenant — et clore le sort des vues
   * actives. Trois boutons qui feraient la même chose seraient un mensonge poli.
   */
  async function surRelance(relance: RelanceJson, option: string): Promise<void> {
    const elements = await listerElements();
    const element = elements.find((e) => e.id === relance.elementId);
    if (!element) return;

    if (option === 'RELANCER') {
      await appliquer(element, { relanceLe: jour });
      annoncer('Relance notée. Le compteur repart d’aujourd’hui.');
    } else if (option === 'PROLONGER') {
      const repoussee = new Date(`${jour}T00:00:00Z`);
      repoussee.setUTCDate(repoussee.getUTCDate() + JOURS_PROLONGATION);
      const nouvelle = repoussee.toISOString().slice(0, 10);
      await appliquer(element, { echeance: nouvelle, relanceLe: jour, corrigeParHumain: true });
      annoncer(`Échéance repoussée au ${nouvelle}.`);
    } else {
      await appliquer(element, { faitLe: jour });
      annoncer('Clos. Cela ne remontera plus.');
    }
    await rendre();
  }

  /**
   * Ce que le filtre laisse passer.
   *
   * Spec `memoire` — « Filtrage à la restitution ». Un élément dont la sphère n'a
   * pas pu être déduite reste visible dans toutes les vues : le filtre trie ce qu'on
   * sait ranger, il ne fait pas disparaître ce qu'on ne sait pas. Cacher l'indécidé
   * transformerait une aide à la lecture en perte de notes, silencieuse.
   */
  function filtrerParSphere(
    elements: ElementStocke[],
    sphere: Reglages['filtreSphere'],
  ): ElementStocke[] {
    if (sphere === 'TOUT') return elements;
    return elements.filter((e) => !e.sphere || e.sphere === sphere);
  }

  /**
   * Le choix de sphère : trois boutons, et ce qu'ils mettent de côté.
   *
   * Le compte de ce qui est masqué est affiché, parce qu'un filtre actif qu'on a
   * oublié d'enlever est la façon la plus sûre de croire qu'une note a disparu.
   */
  async function choixSphere(
    courante: Reglages['filtreSphere'],
    masques: number,
  ): Promise<HTMLElement> {
    const bloc = el('div', { class: 'spheres', role: 'group', 'aria-label': 'Sphère' });
    const choix: [Reglages['filtreSphere'], string][] = [
      ['TOUT', 'Tout'],
      ['PROFESSIONNEL', 'Professionnel'],
      ['PERSONNEL', 'Personnel'],
    ];

    for (const [valeur, libelle] of choix) {
      bloc.append(
        el('button', {
          class: `bouton bouton--discret spheres__choix${valeur === courante ? ' spheres__choix--actif' : ''}`,
          type: 'button',
          'aria-pressed': valeur === courante ? 'true' : 'false',
          'data-sphere': valeur,
          texte: libelle,
          onclick: () => {
            void (async () => {
              await ecrireReglage('filtreSphere', valeur);
              await rendre();
            })();
          },
        }),
      );
    }

    if (courante !== 'TOUT' && masques > 0) {
      bloc.append(
        el('p', {
          class: 'spheres__masques',
          texte:
            masques === 1
              ? '1 élément d’une autre sphère est de côté.'
              : `${masques} éléments d’une autre sphère sont de côté.`,
        }),
      );
    }
    return bloc;
  }

  async function rendre(): Promise<void> {
    // Chaque rendu repose de nouveaux lecteurs : sans cette libération, décider dix
    // éléments laisserait dix enregistrements accrochés en mémoire.
    libererLecteurs();
    const sphere = (await lireReglages()).filtreSphere;
    const tous = await listerElements();
    const elements = filtrerParSphere(tous, sphere);
    const file = revueObjets(elements, jour);

    // Ce que la mémoire sait des références de ces éléments. Reconstruite à chaque
    // rendu depuis les captures et les éléments : c'est une couche dérivée, elle n'a
    // ni stockage ni migration, et elle ne peut pas contredire les notes.
    references = new Map(
      referencesAResoudre(
        (await listerCaptures()).map((c) => ({
          id: c.id,
          texte: c.texte,
          creeLe: c.creeLe,
        })),
        elements,
        new Date().toISOString(),
      ).map((r) => [r.elementId, r]),
    );
    // Sans ce filtre, clore une relance ne la faisait pas disparaître : l'élément
    // gardait son verdict « accepté » et remontait le lendemain comme la veille.
    const encoreEnJeu = elements.filter((e) => !e.faitLe);
    const masques = tous.length - elements.length;
    const aRelancer = relancesObjets(encoreEnJeu, jour, suivisDe(encoreEnJeu));
    const enSouffrance = await capturesEnSouffrance();
    const enTranscription = await capturesATranscrire();
    const moment = await rappelsDuPointDeRupture();

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

    // Les captures en souffrance passent avant tout le reste : ce sont des dépôts
    // dont il ne sortira rien tant que personne ne s'en occupe. Les laisser derrière
    // la file reviendrait à les enterrer sous ce qui, lui, a bien fonctionné.
    section.append(await choixSphere(sphere, masques));

    if (enSouffrance.length > 0) section.append(blocSouffrance(enSouffrance));

    // Ce que la transcription embarquée n'a pas encore lu. Une ligne, pas un bloc :
    // ce n'est pas à l'utilisateur de faire quelque chose, seulement de savoir que ça
    // arrive — sinon « rien à ranger » ressemble à « votre capture a disparu ».
    if (enTranscription.length > 0) {
      section.append(ligneTranscription(enTranscription.length));
      transcrirePuisRafraichir();
    }

    // Les escalades viennent avant les relances : ce sont des rappels qu'on a déjà
    // vus passer trois fois sans rien en faire. Les redemander à l'identique ne sert
    // plus ; ce qu'il faut, c'est décider autrement.
    if (moment.escalades.length > 0) section.append(blocEscalades(moment));

    // Les relances passent devant la file : ce sont les seules choses que
    // l'utilisateur ne peut pas réclamer, puisqu'il les a précisément oubliées.
    if (aRelancer.length > 0) section.append(blocRelances(aRelancer));

    if (
      file.total === 0 &&
      aRelancer.length === 0 &&
      enSouffrance.length === 0 &&
      enTranscription.length === 0 &&
      moment.escalades.length === 0
    ) {
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

    if (file.reduite) {
      section.append(
        el(
          'p',
          { class: 'reduction', role: 'status' },
          el('span', { class: 'reduction__motif', texte: file.motifReduction }),
        ),
      );
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

  /** Le bloc des relances : ce que le produit se rappelle à votre place. */
  /**
   * Les rappels qui ne passent plus, et les trois façons d'en sortir.
   *
   * Spec `rappels` — « Escalade d'un rappel ignoré ». Trois fois écarté, un rappel
   * cesse de se représenter à l'identique : ce n'est plus le moment qui cloche, c'est
   * le plan. On ne le répète donc pas une quatrième fois — on demande de le
   * replanifier, de le déléguer, ou de l'abandonner.
   *
   * Aucun reproche ici non plus. « Ignoré trois fois » est un constat sur le rappel,
   * pas sur celui qui l'a écarté.
   */
  function blocEscalades(moment: RappelsDuMoment): HTMLElement {
    const bloc = el(
      'section',
      { class: 'escalades', 'aria-labelledby': 'titre-escalades' },
      el('h2', {
        id: 'titre-escalades',
        class: 'escalades__titre',
        texte:
          moment.escalades.length === 1
            ? 'Un rappel ne passe pas'
            : `${moment.escalades.length} rappels ne passent pas`,
      }),
      el('p', {
        class: 'escalades__explication',
        texte:
          'Vous les avez écartés plusieurs fois. Ce n’est sans doute pas le moment qui ' +
          'cloche, mais le plan : reposez-le, confiez-le, ou laissez-le partir.',
      }),
    );

    for (const escalade of moment.escalades) {
      const champ = el('input', {
        class: 'champ escalades__champ',
        type: 'text',
        placeholder: 'Ou : quand… / à qui…',
        'aria-label': 'Nouveau déclencheur, ou personne à qui confier',
      }) as HTMLInputElement;

      const actions = el(
        'div',
        { class: 'escalades__actions' },
        el('button', {
          class: 'bouton bouton--discret',
          type: 'button',
          texte: 'Replanifier',
          onclick: () => {
            const valeur = champ.value.trim() || 'au prochain créneau libre';
            void agirSurEscalade(() => replanifier(escalade.elementId, valeur), `Reposé — ${valeur}.`);
          },
        }),
        el('button', {
          class: 'bouton bouton--discret',
          type: 'button',
          texte: 'Déléguer',
          onclick: () => {
            const aQui = champ.value.trim();
            if (!aQui) {
              annoncer('À qui ? Écrivez un nom dans le champ.');
              return;
            }
            void agirSurEscalade(
              () => deleguer(escalade.elementId, aQui),
              `Confié à ${aQui} — suivi comme une attente.`,
            );
          },
        }),
        el('button', {
          class: 'bouton bouton--discret bouton--supprimer',
          type: 'button',
          texte: 'Abandonner',
          onclick: () =>
            void agirSurEscalade(() => abandonner(escalade.elementId), 'Abandonné.'),
        }),
      );

      bloc.append(
        el(
          'article',
          { class: 'escalades__ligne', 'data-element': escalade.elementId },
          el('p', { class: 'escalades__texte', texte: escalade.texte }),
          el('p', { class: 'escalades__motif', texte: escalade.motif }),
          champ,
          actions,
        ),
      );
    }
    return bloc;
  }

  async function agirSurEscalade(action: () => Promise<unknown>, dire: string): Promise<void> {
    await action();
    annoncer(dire);
    await rendre();
  }

  function ligneTranscription(combien: number): HTMLElement {
    return el('p', {
      class: 'transcription-en-cours',
      role: 'status',
      texte:
        combien === 1
          ? 'Une capture est en cours de transcription. Elle arrivera ici dans un instant.'
          : `${combien} captures sont en cours de transcription. Elles arriveront ici dans un instant.`,
    });
  }

  /** Une seule relance par rendu : la file elle-même refuse de tourner en double. */
  let transcriptionLancee = false;
  function transcrirePuisRafraichir(): void {
    if (transcriptionLancee) return;
    transcriptionLancee = true;
    void traiterFileTranscription()
      .catch(() => {
        // Le moteur n'a pas pu tourner ; les captures restent en file, l'audio en base.
      })
      .finally(() => {
        transcriptionLancee = false;
        void rendre();
      });
  }

  /**
   * Les captures dont rien n'est sorti, et de quoi les rattraper.
   *
   * La reconnaissance vocale du navigateur échoue — pas de moteur installé, micro
   * pris par autre chose, parole trop courte. L'audio, lui, est enregistré et
   * conservé. Ce bloc est le chemin qui manquait entre les deux : on réécoute, on
   * écrit ce qu'on avait dit, et la capture repart dans l'analyse comme si la
   * transcription avait marché.
   *
   * Aucun reproche dans ce qui est écrit ici. L'échec n'est pas celui de
   * l'utilisateur, et la seule chose qui compte est que sa note ne soit pas perdue.
   */
  function blocSouffrance(captures: Capture[]): HTMLElement {
    const bloc = el(
      'section',
      { class: 'souffrance', 'aria-labelledby': 'titre-souffrance' },
      el('h2', {
        id: 'titre-souffrance',
        class: 'souffrance__titre',
        texte:
          captures.length === 1
            ? 'Une capture n’a pas pu être lue'
            : `${captures.length} captures n’ont pas pu être lues`,
      }),
      el('p', {
        class: 'souffrance__explication',
        // Que l'enregistrement soit intact, le lecteur le dit déjà sous chaque ligne :
        // le redire ici userait la phrase au lieu de rassurer.
        texte:
          'Écoutez, puis écrivez ce que vous aviez dit : la capture rejoindra la ' +
          'Revue comme les autres.',
      }),
    );

    for (const capture of captures) bloc.append(ligneSouffrance(capture));
    return bloc;
  }

  function ligneSouffrance(capture: Capture): HTMLElement {
    const lecteur = lecteurAudio(capture);
    lecteurs.push(lecteur);
    // Pas de repli ici : la capture n'a rien d'autre à montrer que son audio, et
    // demander un geste de plus pour l'atteindre serait ajouter un obstacle là où
    // l'on vient déjà réparer quelque chose.
    lecteur.ouvrir();

    const champ = el('textarea', {
      class: 'champ souffrance__champ',
      rows: '2',
      placeholder: 'Ce que vous aviez dit…',
      'aria-label': 'Ce que vous aviez dit',
    }) as HTMLTextAreaElement;

    const enregistrer = el('button', {
      class: 'bouton bouton--plein',
      type: 'button',
      texte: 'Enregistrer',
      onclick: () => void reprendre(capture, champ.value),
    });

    return el(
      'article',
      { class: 'souffrance__ligne', 'data-capture': capture.id },
      el(
        'p',
        { class: 'souffrance__quand' },
        el('span', {
          class: 'chiffres',
          texte: new Date(capture.creeLe).toLocaleString('fr-FR', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
          }),
        }),
        el('span', { class: 'souffrance__motif', texte: motifSouffrance(capture) }),
      ),
      lecteur.noeud,
      champ,
      el(
        'div',
        { class: 'souffrance__actions' },
        enregistrer,
        el('button', {
          class: 'bouton bouton--discret bouton--supprimer',
          type: 'button',
          texte: 'Supprimer',
          onclick: () => void jeter(capture),
        }),
      ),
    );
  }

  /** Pourquoi cette capture est restée là. Un constat, jamais un reproche. */
  function motifSouffrance(capture: Capture): string {
    if (capture.incomplete) return 'enregistrement interrompu';
    if (capture.etatTranscription === 'INDISPONIBLE') return 'ce navigateur ne sait pas transcrire';
    return 'rien n’a été reconnu';
  }

  /**
   * Reprend une capture en souffrance avec le texte écrit à la main.
   *
   * La couche source reste vraie : le texte saisi remplace la transcription, qui
   * était vide, et l'état passe à « OK » parce qu'un humain a fourni ce que la
   * machine n'a pas su lire. `analysee: false` la remet dans la file d'analyse.
   */
  async function reprendre(capture: Capture, saisi: string): Promise<void> {
    const texte = saisi.trim();
    if (texte === '') {
      annoncer('Écrivez d’abord ce que vous aviez dit.');
      return;
    }
    await majCapture(capture.id, { texte, etatTranscription: 'OK', analysee: false });
    const produits = await traiterFileAnalyse(jour);
    annoncer(
      produits > 0 ? 'Capture reprise : elle est dans la Revue.' : 'Capture reprise.',
    );
    await rendre();
  }

  async function jeter(capture: Capture): Promise<void> {
    await supprimerCapture(capture.id);
    annoncer('Capture supprimée.');
    await rendre();
  }

  function blocRelances(relances: RelanceJson[]): HTMLElement {
    const bloc = el(
      'section',
      { class: 'relances', 'aria-labelledby': 'titre-relances' },
      el('h2', {
        id: 'titre-relances',
        class: 'relances__titre',
        texte: relances.length === 1 ? 'Une chose vous attend' : 'Des choses vous attendent',
      }),
    );

    for (const relance of relances) {
      const actions = el('div', { class: 'relance__actions' });
      for (const option of relance.options) {
        actions.append(
          el('button', {
            class: `bouton bouton--discret bouton--${option.toLowerCase()}`,
            type: 'button',
            texte: LIBELLE_OPTION[option] ?? option,
            onclick: () => void surRelance(relance, option),
          }),
        );
      }
      bloc.append(
        el(
          'article',
          { class: 'relance', 'data-element': relance.elementId },
          el('p', { class: 'relance__texte', texte: relance.texte }),
          // Le motif vient du cœur, tel quel : c'est lui qui sait pourquoi cela
          // remonte aujourd'hui, et il ne formule jamais de reproche.
          el('p', { class: 'relance__motif', texte: relance.motif }),
          actions,
        ),
      );
    }
    return bloc;
  }

  async function rendreGroupe(
    captureId: string,
    entrees: EntreeRevueJson[],
  ): Promise<HTMLElement> {
    const capture = await lireCapture(captureId);
    const groupe = el('article', { class: 'groupe' });

    const source = enTeteSource(capture, captureId);
    groupe.append(source.noeud);

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
    for (const entree of entrees) liste.append(rendreEntree(entree, capture, source));
    groupe.append(liste);
    return groupe;
  }

  /**
   * La source du groupe : la transcription brute, et l'enregistrement d'origine.
   *
   * Un groupe de Revue est fait d'une seule capture — c'est ce qui permet de tenir
   * ici, une fois, ce que chaque élément du groupe partage. Les éléments y renvoient
   * plutôt que de répéter la transcription sous chacun d'eux.
   */
  function enTeteSource(capture: Capture | undefined, captureId: string): SourceGroupe {
    const heure = capture
      ? new Date(capture.creeLe).toLocaleString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        })
      : captureId;

    const lecteur = lecteurAudio(capture);
    lecteurs.push(lecteur);

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
      texteSource(capture),
      lecteur.noeud,
    ) as HTMLDetailsElement;

    // L'audio n'est chargé qu'au dépliement : voir `lecteurAudio`.
    detail.addEventListener('toggle', () => {
      if (detail.open) lecteur.ouvrir();
    });

    return {
      noeud: detail,
      audioDisponible: lecteur.disponible,
      ecouterA: (ms: number) => {
        detail.open = true;
        lecteur.allerA(ms);
      },
    };
  }

  /**
   * La transcription, lisible, avec le brut à portée d'un geste.
   *
   * Spec `transcription` — « Reformulation réversible » : la version brute reste
   * disponible et affichable, et peut être retenue comme référence. Le brut n'est
   * donc pas caché derrière une explication, mais derrière un bouton, et le libellé
   * dit laquelle des deux on regarde.
   *
   * Quand il n'y a rien à retirer, il n'y a rien à proposer non plus : pas de
   * bouton, pas de mention. Annoncer un nettoyage qui n'a pas eu lieu ferait douter
   * d'une transcription qui n'a pourtant rien perdu.
   */
  function texteSource(capture: Capture | undefined): HTMLElement {
    const brut = capture?.texte ?? '';
    if (!capture) {
      return el('p', { class: 'source__texte', texte: '(source introuvable)' });
    }

    const incertains = capture.passagesIncertains ?? [];
    const lisible = transcriptionLisible(brut);

    // Spec `transcription` — « Incertitude de transcription signalée ». Quand le
    // moteur dit avoir mal entendu, c'est ce qu'il a entendu qu'on montre, souligné
    // aux endroits douteux. Présenter une version nettoyée d'une phrase incertaine
    // la rendrait lisse et sûre d'elle, ce qui est exactement l'inverse du service.
    if (incertains.length > 0) {
      return el(
        'div',
        { class: 'source__transcription' },
        souligner(brut, incertains),
        el('p', {
          class: 'source__doute',
          texte:
            incertains.length === 1
              ? 'Un passage a été mal entendu : il est souligné. L’enregistrement est là.'
              : `${incertains.length} passages ont été mal entendus : ils sont soulignés. ` +
                'L’enregistrement est là.',
        }),
        // C'est ici que corriger sert le plus : le moteur a dit lui-même s'être
        // trompé. L'oublier sur ce chemin-là serait l'oublier là où il compte.
        blocCorrection(capture),
      );
    }

    const ligne = el('p', { class: 'source__texte', texte: lisible });
    if (lisible === brut) {
      return el('div', { class: 'source__transcription' }, ligne, blocCorrection(capture));
    }

    let auBrut = false;
    const bascule = el('button', {
      class: 'bouton bouton--discret source__bascule',
      type: 'button',
      texte: 'Voir ce qui a été dit',
      onclick: () => {
        auBrut = !auBrut;
        ligne.textContent = auBrut ? brut : lisible;
        ligne.dataset.version = auBrut ? 'brute' : 'lisible';
        bascule.textContent = auBrut ? 'Voir la version lisible' : 'Voir ce qui a été dit';
      },
    });
    ligne.dataset.version = 'lisible';
    return el(
      'div',
      { class: 'source__transcription' },
      ligne,
      bascule,
      blocCorrection(capture),
    );
  }

  /**
   * Corriger ce que le moteur a mal entendu — et ne plus avoir à le refaire.
   *
   * Spec `transcription` — « Vocabulaire personnel ». Corriger ici fait deux choses
   * d'un coup : la capture est réécrite et réanalysée, et la substitution est retenue
   * pour les transcriptions suivantes. C'est la seconde qui compte : corriger le même
   * nom chaque semaine est ce qui fait abandonner un outil.
   *
   * Le geste est replié par défaut. Une capture bien transcrite ne doit pas proposer
   * une zone de texte sous chaque note : ce serait suggérer qu'il y a quelque chose à
   * réparer alors qu'il n'y a rien.
   */
  function blocCorrection(capture: Capture): HTMLElement {
    const zone = el('textarea', {
      class: 'champ correction__zone',
      rows: 3,
      'aria-label': 'Ce qui avait été dit',
    }) as HTMLTextAreaElement;

    const bloc = el('div', { class: 'correction', hidden: true });
    const ouvrir = el('button', {
      class: 'bouton bouton--discret correction__ouvrir',
      type: 'button',
      texte: 'Corriger',
      onclick: () => {
        bloc.hidden = !bloc.hidden;
        if (!bloc.hidden) {
          zone.value = capture.texte;
          zone.focus();
        }
      },
    });

    bloc.append(
      zone,
      el('button', {
        class: 'bouton bouton--plein correction__valider',
        type: 'button',
        texte: 'Corriger et retenir',
        onclick: () => void corriger(capture, zone.value),
      }),
      el('p', {
        class: 'correction__note',
        texte:
          'Les mots que vous remplacez sont retenus : ils seront transcrits ainsi la ' +
          'prochaine fois. L’enregistrement, lui, ne change pas.',
      }),
    );

    return el('div', { class: 'correction__bloc' }, ouvrir, bloc);
  }

  /**
   * Réécrit la transcription et retient ce qui a changé.
   *
   * L'ordre importe : on apprend depuis l'ancien texte avant de l'écraser. Les
   * passages incertains sont effacés — ils désignaient des positions dans un texte
   * qui n'existe plus, et les garder ferait souligner au hasard.
   */
  async function corriger(capture: Capture, saisi: string): Promise<void> {
    const texte = saisi.trim();
    if (texte === '' || texte === capture.texte) {
      annoncer('Rien n’a changé.');
      return;
    }

    const apprises = await retenirCorrections(apprendre(capture.texte, texte));
    await majCapture(capture.id, {
      texte,
      etatTranscription: 'OK',
      analysee: false,
      passagesIncertains: [],
    });
    await traiterFileAnalyse(jour);
    annoncer(
      apprises.length > 0
        ? 'Corrigé. Ces mots seront transcrits ainsi la prochaine fois.'
        : 'Corrigé.',
    );
    await rendre();
  }

  /**
   * Le texte, avec les passages mal entendus soulignés à leur place exacte.
   *
   * Les bornes viennent du moteur et portent sur ce texte-là ; elles sont quand même
   * bornées et remises dans l'ordre avant usage. Une borne fausse ne doit pas
   * tronquer une note : au pire, elle souligne à côté.
   */
  function souligner(texte: string, passages: PassageIncertain[]): HTMLElement {
    const ligne = el('p', { class: 'source__texte' });
    ligne.dataset.version = 'brute';

    const bornes = passages
      .map((p) => ({
        debut: Math.max(0, Math.min(p.debutCar, texte.length)),
        fin: Math.max(0, Math.min(p.finCar, texte.length)),
      }))
      .filter((p) => p.fin > p.debut)
      .sort((a, b) => a.debut - b.debut);

    let curseur = 0;
    for (const { debut, fin } of bornes) {
      if (debut < curseur) continue;
      if (debut > curseur) ligne.append(texte.slice(curseur, debut));
      ligne.append(
        el('mark', {
          class: 'source__incertain',
          texte: texte.slice(debut, fin),
          title: 'Mal entendu : à vérifier sur l’enregistrement.',
        }),
      );
      curseur = fin;
    }
    if (curseur < texte.length) ligne.append(texte.slice(curseur));
    return ligne;
  }

  function rendreEntree(
    entree: EntreeRevueJson,
    capture: Capture | undefined,
    source: SourceGroupe,
  ): HTMLElement {
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
      // Spec `extraction` — « Expression floue ». Un horizon n'est pas une date, et
      // ne doit pas lui ressembler : pas de chiffres, pas d'urgence, et le mot
      // « sans date ferme » écrit en toutes lettres. Une date inventée passerait
      // pour une échéance promise, et le produit la dirait en retard.
      !e.echeance && e.horizon
        ? el('span', {
            class: 'badge badge--horizon',
            texte: `sans date ferme · ${LIBELLE_HORIZON[e.horizon]}`,
          })
        : null,
      e.interlocuteur ? el('span', { class: 'badge', texte: e.interlocuteur }) : null,
      entree.aConfirmer
        ? el('span', { class: 'badge badge--doute', texte: 'à confirmer' })
        : null,
    );

    // Spec `extraction` — « Expression relative » : l'expression d'origine reste
    // visible sur l'élément. La date est une déduction ; « avant vendredi » est ce
    // qui a été dit, et c'est lui qui permet de voir d'un coup d'œil qu'elle est
    // juste — ou qu'elle ne l'est pas.
    const raisons = [
      e.poidsIndice ? `Poids : ${e.poidsIndice}.` : '',
      e.echeanceIndice ? `Échéance : « ${e.echeanceIndice} ».` : '',
    ].filter((r) => r !== '');
    const justification = el('p', {
      class: 'entree__indice',
      texte: raisons.join(' '),
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
            { verdict: 'ACCEPTE', planDeclencheur: valeur, planAction: e.texte, planPoseLe: maintenantLocal() },
            `Accepté — ${valeur}.`,
          );
        }),
      ),
      champLibrePlan(e),
    );

    zoneAjustement.append(formulaireAjustement(e));

    const ecouter = reecoute(e, source);
    const question = questionDeReference(e);
    ligne.append(
      badges,
      el('p', { class: 'entree__texte', texte: e.texte }),
      justification,
      ...(question ? [question] : []),
      ...(ecouter ? [ecouter] : []),
      zoneActions,
      zonePlan,
      zoneAjustement,
    );
    return ligne;
  }

  /**
   * « Quel Marc ? » — la question posée quand la mémoire ne tranche pas.
   *
   * Spec `memoire` — « Ambiguïté non résolue » : les candidats sont classés et la
   * question est posée, le système ne choisit pas silencieusement. Chaque candidat
   * porte ce sur quoi il est placé là ; sans cette phrase on accepte le premier, ce
   * qui revient exactement à laisser choisir à sa place.
   *
   * Quand la mémoire tranche, l'écran **propose** au lieu d'appliquer, et dit sur
   * quoi il s'appuie. Remplacer « Marc » par « Marc Dupuis » sans le demander
   * reviendrait à réécrire la note de quelqu'un d'autre.
   *
   * Rien n'est bloqué dans un cas comme dans l'autre : l'élément se décide comme les
   * autres, avec sa référence telle qu'elle a été dite. Une question qui empêche
   * d'avancer coûte plus cher que l'ambiguïté qu'elle lève.
   */
  function questionDeReference(e: ElementJson): HTMLElement | null {
    const resolution = references.get(e.id);
    if (!resolution) return null;
    const retenu = resolution.retenu ?? null;
    if (!retenu && !resolution.aQuestionner) return null;

    const bloc = el(
      'div',
      { class: 'reference', 'data-element': e.id },
      el('p', {
        class: 'reference__question',
        texte: retenu
          // Spec `memoire` — « Prénom résolu par le contexte » : le système propose,
          // il n'applique pas. Écrire « Marc Dupuis » à la place de ce qui a été dit
          // sans le demander serait réécrire la note.
          ? `« ${resolution.reference} » — sans doute ${retenu.nom} ?`
          : `« ${resolution.reference} » — de qui s’agit-il ?`,
      }),
    );

    if (retenu) {
      bloc.append(el('p', { class: 'reference__appui', texte: retenu.appui }));
    }

    for (const candidat of resolution.candidats) {
      bloc.append(
        el(
          'div',
          { class: 'reference__candidat' },
          el('button', {
            class: 'bouton bouton--discret reference__choix',
            type: 'button',
            'data-nom': candidat.nom,
            texte:
              retenu?.entiteId === candidat.entiteId ? `Oui, ${candidat.nom}` : candidat.nom,
            onclick: () => {
              void decider(
                e,
                { interlocuteur: candidat.nom, corrigeParHumain: true },
                `Il s’agit de ${candidat.nom}.`,
              );
            },
          }),
          // L'appui du candidat proposé est déjà écrit au-dessus, en entier.
          retenu?.entiteId === candidat.entiteId
            ? null
            : el('span', { class: 'reference__appui', texte: candidat.appui }),
        ),
      );
    }
    return bloc;
  }

  /**
   * Le renvoi d'un élément vers le moment où il a été dit.
   *
   * Trancher demande parfois d'entendre la phrase : une transcription approximative
   * se juge mal sur le texte seul. La position est estimée à partir de la place du
   * passage dans le texte — le libellé le dit, il ne promet pas une mesure.
   */
  function reecoute(e: ElementJson, source: SourceGroupe): HTMLElement | null {
    if (!source.audioDisponible || typeof e.debutMs !== 'number') return null;
    return el('button', {
      class: 'bouton bouton--ecouter',
      type: 'button',
      texte: `Écouter ce passage (vers ${duree(e.debutMs)})`,
      onclick: () => source.ecouterA(e.debutMs as number),
    });
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
          { verdict: 'ACCEPTE', planDeclencheur: valeur, planAction: e.texte, planPoseLe: maintenantLocal() },
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
    ajustement: Partial<ElementStocke>,
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
      const ajustement: Partial<ElementStocke> = actionnable(e.type)
        ? {
            verdict: 'ACCEPTE',
            planDeclencheur: e.planDeclencheur ?? 'au prochain créneau libre',
            planAction: e.texte,
            planPoseLe: maintenantLocal(),
          }
        : { verdict: 'ACCEPTE' };
      await appliquer(e, ajustement, true);
    }
    annoncer(`${entrees.length} éléments acceptés.`);
    await rendre();
  }

  await rendre();

  return libererLecteurs;
}

/** Ce qu'un groupe de Revue offre à ses éléments : sa source, et de quoi la réécouter. */
interface SourceGroupe {
  noeud: HTMLElement;
  audioDisponible: boolean;
  /** Ouvre la source et lance la lecture à cette position, en millisecondes. */
  ecouterA: (ms: number) => void;
}
