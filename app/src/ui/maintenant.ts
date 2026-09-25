/**
 * Écran 3 — Maintenant.
 *
 * Une seule question : quoi faire là, tout de suite. Trois éléments au plus, chacun
 * avec sa raison en une ligne. Pas de compteur, pas de liste complète, pas de
 * statistiques de complétion, pas de notification de retard.
 *
 * Le classement vient du cœur (`core/regles.ts`) : cet écran n'ordonne rien.
 */

import {
  creneauProtege,
  maintenantAvecContexteObjets,
  momentsDeReunion,
  type ElementJson,
  type MaintenantJson,
  type MomentReunionJson,
  type PropositionJson,
} from '../core/regles.ts';
import { preparerRattachement } from '../agenda/rattachement.ts';
import { aujourdhui, maintenantLocal } from '../services/pipeline.ts';
import { lireEvenements } from '../stockage/agenda.ts';
import {
  ecrireReglage,
  lireCapture,
  lireReglages,
  listerCaptures,
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

/** Les moments de réunion laissés de côté pour la session : « plus tard » ne revient pas à chaque minute. */
const momentsLaisses = new Set<string>();

/** Toutes les minutes, tant que l'écran est visible : « dans deux minutes » change vite. */
const RAFRAICHIR_MS = 60_000;

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

  /**
   * Vrai si l'heure présente tombe dans le créneau protégé.
   *
   * Une heure pleine, à partir de l'heure réglée. Un créneau qui déborderait sur la
   * journée entière ne protégerait plus rien : c'est sa brièveté qui le rend tenable.
   */
  function dansLeCreneau(debut: string | null, maintenant = new Date()): boolean {
    if (!debut) return false;
    const [heure, minute] = debut.split(':').map(Number);
    if (Number.isNaN(heure) || Number.isNaN(minute)) return false;
    const debutMinutes = heure * 60 + minute;
    const courant = maintenant.getHours() * 60 + maintenant.getMinutes();
    return courant >= debutMinutes && courant < debutMinutes + 60;
  }

  async function rendre(): Promise<void> {
    libererLecteurs();
    const reglages = await lireReglages();
    const sphere = reglages.filtreSphere;
    const actifs = await listerElementsActifs();
    // Le même filtre qu'en Revue, et la même règle : un élément dont la sphère n'a
    // pas pu être déduite reste visible partout. Le filtre trie ce qu'on sait ranger,
    // il ne cache pas ce qu'on ne sait pas — et il ne déplace rien.
    const candidats = actifs.filter(
      (e) =>
        !ecartes.has(e.id) && (sphere === 'TOUT' || !e.sphere || e.sphere === sphere),
    );
    // Change `agenda-local` : le classement tient compte du temps que l'agenda laisse.
    // Sans agenda, `evenements` est vide et le résultat est celui d'avant.
    const instant = maintenantLocal();
    const evenements = await lireEvenements(decale(-12 * 60), decale(24 * 60));
    const resultat = maintenantAvecContexteObjets(candidats, instant, evenements);
    const propositions = resultat.propositions;
    const moments = evenements.length > 0 ? await momentsDuMoment(evenements, instant, actifs) : [];

    // Spec `priorisation` — « Créneau tenu ». Pendant le créneau, ce qui compte passe
    // devant ce qui presse. Le reste de la journée, l'ordre habituel reprend — et le
    // créneau s'efface devant une réunion imminente ou une longue séquence finie.
    const creneauOuvert = dansLeCreneau(reglages.creneauProtegeDebut) && !resultat.creneauProtegeSuspendu;
    const protege = creneauOuvert
      ? candidats.find((e) => e.id === creneauProtege(candidats, aujourdhui()))
      : undefined;

    // Les sources des trois propositions, chargées d'avance : trois lectures, pas une
    // par rendu de carte, et le rendu reste synchrone.
    const parElement = new Map(candidats.map((e) => [e.id, e]));
    const sources = new Map<string, Capture | undefined>();
    await Promise.all(
      [...propositions.map((p) => parElement.get(p.elementId)?.captureId), protege?.captureId]
        .filter((id): id is string => Boolean(id))
        .map(async (captureId) => {
          if (!sources.has(captureId)) sources.set(captureId, await lireCapture(captureId));
        }),
    );

    vider(racine);
    const section = el(
      'section',
      { class: 'ecran ecran--maintenant', 'aria-labelledby': 'titre-maintenant' },
      el('h1', { id: 'titre-maintenant', class: 'ecran__titre', texte: 'Maintenant' }),
      el('p', { class: 'ecran__sous-titre', texte: 'Trois choses. Pas une de plus.' }),
    );

    for (const moment of moments) section.append(carteMoment(moment));

    // Un filtre qu'on ne voit pas ferait croire que la liste est tout ce qu'il y a.
    if (resultat.raison) section.append(el('p', { class: 'maintenant__contexte', texte: resultat.raison }));

    if (protege) {
      section.append(carteCreneau(protege, sources.get(protege.captureId)));
    }

    if (propositions.length === 0 && !protege && resultat.ecartes > 0) {
      section.append(rienQuiTienne(resultat));
    } else if (propositions.length === 0 && !protege) {
      section.append(vue_vide(actifs));
    } else if (propositions.length > 0) {
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

  /** Heure locale `AAAA-MM-JJTHH:MM`, décalée de quelques minutes. */
  function decale(minutes: number): string {
    return maintenantLocal(new Date(Date.now() + minutes * 60_000));
  }

  /** Les moments de réunion à proposer, sans ceux laissés de côté. */
  async function momentsDuMoment(
    evenements: Parameters<typeof momentsDeReunion>[0],
    instant: string,
    elements: ElementJson[],
  ): Promise<MomentReunionJson[]> {
    const captures = await listerCaptures();
    const rattaches = captures
      .filter((c) => c.agenda)
      .map((c) => ({
        captureId: c.id,
        evenementId: c.agenda!.evenementId,
        depose: c.agenda!.depose === true,
        texte: c.texte,
        creeLe: maintenantLocal(new Date(c.creeLe)),
      }));
    const pourMemoire = captures.map((c) => ({ id: c.id, texte: c.texte, creeLe: c.creeLe }));
    return momentsDeReunion(evenements, instant, pourMemoire, elements, rattaches).filter(
      (m) => !momentsLaisses.has(`${m.type}:${m.evenementId}`),
    );
  }

  /**
   * Un moment de réunion : avant (ce qui est ouvert avec les participants, et la
   * dépose), ou après (la dépose rendue telle quelle, et le vidage).
   *
   * Rien ne démarre seul : les deux boutons ouvrent la capture, déjà rattachée à la
   * réunion, et c'est l'utilisateur qui parle ou écrit (spec `agenda` — « Aucun
   * enregistrement implicite »).
   */
  function carteMoment(m: MomentReunionJson): HTMLElement {
    const rattachement = { evenementId: m.evenementId, titre: m.titre, participants: m.participants };
    const ouvrirCapture = (depose: boolean) => {
      preparerRattachement({ ...rattachement, depose });
      window.location.hash = '#capturer';
    };
    const laisser = el('button', {
      class: 'bouton bouton--discret',
      type: 'button',
      texte: 'Plus tard',
      onclick: () => {
        momentsLaisses.add(`${m.type}:${m.evenementId}`);
        void rendre();
      },
    });

    if (m.type === 'AVANT') {
      const quand = m.minutes <= 0 ? 'Maintenant' : m.minutes === 1 ? 'Dans 1 minute' : `Dans ${m.minutes} minutes`;
      return el(
        'section',
        { class: 'moment moment--avant', 'data-moment': 'AVANT', 'aria-label': `Avant « ${m.titre} »` },
        el('h2', { class: 'moment__titre', texte: `${quand} : « ${m.titre} »` }),
        m.briefing && m.briefing.ouverts.length > 0
          ? el(
              'div',
              { class: 'moment__briefing' },
              el('p', { class: 'moment__intro', texte: 'Ouvert avec les participants :' }),
              el('ul', { class: 'moment__liste' }, ...m.briefing.ouverts.map((l) => ligneBriefing(l.texte, l.captureId))),
            )
          : null,
        m.briefing && m.briefing.decide.length > 0
          ? el('p', {
              class: 'moment__decide',
              texte: `Déjà décidé ensemble : ${m.briefing.decide.map((l) => `« ${l.texte} »`).join(', ')}.`,
            })
          : null,
        el(
          'div',
          { class: 'moment__actions' },
          m.proposerDepose
            ? el('button', {
                class: 'bouton bouton--plein moment__deposer',
                type: 'button',
                texte: 'Déposer où j’en suis',
                onclick: () => ouvrirCapture(true),
              })
            : null,
          laisser,
        ),
      );
    }

    const apres = m.precedentes.length > 0 ? ` (après ${m.precedentes.map((t) => `« ${t} »`).join(', ')})` : '';
    return el(
      'section',
      { class: 'moment moment--apres', 'data-moment': 'APRES', 'aria-label': `Après « ${m.titre} »` },
      el('h2', { class: 'moment__titre', texte: `« ${m.titre} » est terminée${apres}` }),
      m.depose
        ? el(
            'p',
            { class: 'moment__depose' },
            el('span', { class: 'moment__intro', texte: 'Avant, vous aviez noté : ' }),
            el('q', { class: 'moment__depose-texte', texte: m.depose.texte ?? '' }),
          )
        : null,
      el(
        'div',
        { class: 'moment__actions' },
        m.proposerVidage
          ? el('button', {
              class: 'bouton bouton--plein moment__vider',
              type: 'button',
              texte: 'Vider la réunion',
              onclick: () => ouvrirCapture(false),
            })
          : null,
        laisser,
      ),
    );
  }

  /** Une ligne de briefing, qui renvoie à ce qui avait été dit. */
  function ligneBriefing(texte: string, captureId: string): HTMLElement {
    const detail = el(
      'details',
      { class: 'source source--briefing' },
      el('summary', { class: 'source__resume' }, el('span', { class: 'source__mode', texte: 'ce que vous aviez dit' })),
      el('p', { class: 'source__texte', texte: '…' }),
    ) as HTMLDetailsElement;
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      void lireCapture(captureId).then((c) => {
        const cible = detail.querySelector('.source__texte');
        if (cible) cible.textContent = c?.texte ?? '(source introuvable)';
      });
    });
    return el('li', { class: 'moment__ligne', 'data-capture': captureId }, el('span', { texte: texte }), detail);
  }

  /**
   * Rien ne tient dans le temps qui reste : on le dit, plutôt que de proposer un
   * élément trop long ou de laisser croire qu'il n'y a rien à faire.
   */
  function rienQuiTienne(resultat: MaintenantJson): HTMLElement {
    const avant =
      resultat.minutesAvantReunion !== null && resultat.minutesAvantReunion < 60
        ? `en ${resultat.minutesAvantReunion} minute${resultat.minutesAvantReunion > 1 ? 's' : ''}` +
          (resultat.prochaineReunion ? ` avant « ${resultat.prochaineReunion} »` : '')
        : 'pour l’instant';
    return el(
      'div',
      { class: 'vide vide--contexte' },
      el('p', { class: 'vide__titre', texte: `Rien qui tienne ${avant}.` }),
      el('p', {
        class: 'vide__detail',
        texte: `${resultat.ecartes} élément${resultat.ecartes > 1 ? 's' : ''} attend${resultat.ecartes > 1 ? 'ent' : ''} un moment plus long.`,
      }),
    );
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

  /**
   * La carte du créneau protégé.
   *
   * Elle se distingue des trois propositions ordinaires, parce qu'elle ne répond pas
   * à la même question : les autres disent « quoi faire maintenant », celle-ci dit
   * « ce qui n'arrivera jamais tout seul ».
   *
   * Passer outre est un bouton comme un autre, sans commentaire ni friction : un
   * créneau qui reproche se fait désactiver, et l'on perd tout. Le renoncement est
   * seulement compté, une fois par jour.
   */
  function carteCreneau(element: ElementStocke, capture: Capture | undefined): HTMLElement {
    const lecteur = lecteurAudio(capture);
    lecteurs.push(lecteur);

    return el(
      'section',
      { class: 'creneau', 'aria-labelledby': 'titre-creneau' },
      el('h2', { id: 'titre-creneau', class: 'creneau__titre', texte: 'Créneau protégé' }),
      el('p', {
        class: 'creneau__explication',
        texte: 'Ce qui compte, et qui n’a pas de date. Rien d’urgent ne prend ce moment.',
      }),
      el('p', { class: 'creneau__texte', texte: element.texte }),
      el(
        'div',
        { class: 'creneau__actions' },
        el('button', {
          class: 'bouton bouton--plein creneau__pris',
          type: 'button',
          texte: 'Je m’y mets',
          onclick: () => {
            void marquerCreneau(false);
          },
        }),
        el('button', {
          class: 'bouton bouton--discret creneau__passe',
          type: 'button',
          texte: 'Pas aujourd’hui',
          onclick: () => {
            void marquerCreneau(true);
          },
        }),
      ),
    );
  }

  /**
   * Retient ce qui a été fait du créneau, une fois par jour.
   *
   * Compter deux fois le même jour ferait d'un après-midi hésitant trois
   * renoncements, et la Revue signalerait un problème qui n'existe pas.
   */
  async function marquerCreneau(renonce: boolean): Promise<void> {
    const reglages = await lireReglages();
    const jour = aujourdhui();
    if (reglages.creneauVuLe !== jour) {
      await ecrireReglage(
        'creneauRenoncements',
        renonce ? (reglages.creneauRenoncements ?? 0) + 1 : 0,
      );
      await ecrireReglage('creneauVuLe', jour);
    }
    annoncer(renonce ? 'Noté.' : 'Bon travail.');
    await rendre();
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

  const minuterie = window.setInterval(() => {
    if (document.visibilityState === 'visible') void rendre();
  }, RAFRAICHIR_MS);
  const auRetour = () => {
    if (document.visibilityState === 'visible') void rendre();
  };
  document.addEventListener('visibilitychange', auRetour);

  return () => {
    window.clearInterval(minuterie);
    document.removeEventListener('visibilitychange', auRetour);
    libererLecteurs();
  };
}
