/**
 * Les fiches : ce qui est ouvert avec chaque personne, et ce qui a été décidé.
 *
 * Spec `memoire` — « Fiche personne » et « Synthèse par projet ». Avant d'appeler
 * quelqu'un, la question est toujours la même : qu'est-ce qui traîne entre nous ?
 * Elle se répond en relisant six mois de notes, ce que personne ne fait — alors on
 * appelle sans, et l'on redemande ce qu'on savait déjà.
 *
 * Aucune fiche ne se renseigne à la main. Elles se déduisent de ce qui a été
 * capturé : c'est la seule façon qu'elles soient à jour, puisqu'une fiche qu'il faut
 * tenir n'est jamais tenue. Chaque ligne renvoie à sa capture — la même exigence
 * d'ancrage que pour l'extraction, appliquée cette fois à la restitution.
 */

import { fiches, type FicheJson, type LigneFicheJson } from '../core/regles.ts';
import { fusionner, nomsFusionnes, separer } from '../services/personnes.ts';
import { listerCaptures, listerElements } from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';

const LIBELLE_TYPE: Record<string, string> = {
  TACHE: 'tâche',
  ENGAGEMENT: 'engagement',
  ATTENTE: 'attente',
  INFORMATION: 'information',
  DECISION: 'décision',
  IDEE: 'idée',
};

/** Une date dite comme on la lirait, sans l'heure : la fiche n'est pas un journal. */
function quand(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

export async function montrerPersonnes(racine: HTMLElement): Promise<() => void> {
  /** La dernière fusion, que l'on peut encore annuler d'un geste. */
  let derniere: { gardee: string; absorbee: string } | null = null;

  async function rendre(): Promise<void> {
    const captures = await listerCaptures();
    const toutes = fiches(
      captures.map((c) => ({ id: c.id, texte: c.texte, creeLe: c.creeLe })),
      await listerElements(),
    );

    vider(racine);
    const section = el(
      'section',
      { class: 'ecran ecran--personnes', 'aria-labelledby': 'titre-personnes' },
      el('h1', { id: 'titre-personnes', class: 'ecran__titre', texte: 'Les gens' }),
      el('p', {
        class: 'ecran__sous-titre',
        texte: 'Ce qui traîne entre vous. Rien à renseigner : tout vient de vos notes.',
      }),
    );

    if (toutes.length === 0) {
      section.append(
        el(
          'div',
          { class: 'vide' },
          el('p', { class: 'vide__titre', texte: 'Personne, pour l’instant.' }),
          el('p', {
            class: 'vide__detail',
            texte: 'Les fiches apparaissent dès qu’une note nomme quelqu’un.',
          }),
        ),
      );
      racine.append(section);
      return;
    }

    if (derniere) {
      const { gardee, absorbee } = derniere;
      section.append(
        el(
          'p',
          { class: 'fusion__avis', role: 'status' },
          `« ${absorbee} » et « ${gardee} » ne font plus qu’un. `,
          el('button', {
            class: 'bouton bouton--discret',
            type: 'button',
            texte: 'Annuler',
            onclick: () => void defaire(gardee, absorbee),
          }),
        ),
      );
    }

    const noms = toutes.map((f) => f.nom);
    for (const fiche of toutes) section.append(await carte(fiche, noms));
    racine.append(section);
  }

  async function reunir(absorbee: string, gardee: string): Promise<void> {
    await fusionner(absorbee, gardee);
    derniere = { gardee, absorbee };
    annoncer(`« ${absorbee} » réunie à « ${gardee} ».`);
    await rendre();
  }

  async function defaire(gardee: string, absorbee: string): Promise<void> {
    await separer(gardee, absorbee);
    if (derniere?.gardee === gardee && derniere.absorbee === absorbee) derniere = null;
    annoncer(`« ${absorbee} » séparée de « ${gardee} ».`);
    await rendre();
  }

  /**
   * « Même personne que… » : les autres fiches, puis une confirmation qui dit ce qui
   * va se passer. Change `fusion-personnes`.
   */
  function blocFusion(fiche: FicheJson, noms: string[]): HTMLElement | null {
    const autres = noms.filter((n) => n !== fiche.nom);
    if (autres.length === 0) return null;
    const choix = el('select', { class: 'champ', 'aria-label': `Fiche à garder pour ${fiche.nom}` }) as HTMLSelectElement;
    for (const nom of autres) choix.append(el('option', { value: nom, texte: nom }));
    const confirmation = el('p', { class: 'fusion__detail' });
    const mettreAJour = () => {
      confirmation.textContent =
        `Tout ce qui concerne « ${fiche.nom} » rejoindra la fiche « ${choix.value} ». ` +
        'Vous pourrez séparer de nouveau.';
    };
    choix.addEventListener('change', mettreAJour);
    mettreAJour();
    return el(
      'details',
      { class: 'fusion' },
      el('summary', { class: 'fusion__resume', texte: 'Même personne que…' }),
      choix,
      confirmation,
      el('button', {
        class: 'bouton',
        type: 'button',
        texte: 'Réunir les deux fiches',
        onclick: () => void reunir(fiche.nom, choix.value),
      }),
    );
  }

  async function carte(fiche: FicheJson, noms: string[]): Promise<HTMLElement> {
    const bloc = el(
      'article',
      { class: 'fiche', 'data-nom': fiche.nom },
      el(
        'h2',
        { class: 'fiche__nom' },
        el('span', { texte: fiche.nom }),
        el('span', {
          class: 'fiche__mentions',
          texte: fiche.mentions === 1 ? '1 mention' : `${fiche.mentions} mentions`,
        }),
      ),
    );

    if (fiche.ouverts.length > 0) {
      bloc.append(
        el('h3', { class: 'fiche__titre', texte: 'Ouvert' }),
        liste(fiche.ouverts, 'fiche__ouvert'),
      );
    }
    if (fiche.decide.length > 0) {
      bloc.append(
        el('h3', { class: 'fiche__titre', texte: 'Décidé' }),
        liste(fiche.decide, 'fiche__decide'),
      );
    }
    if (fiche.ouverts.length === 0 && fiche.decide.length === 0) {
      // Une personne sans rien d'ouvert est une information, pas une absence : la
      // cacher obligerait à se demander si elle est connue, ce qui est la question
      // à laquelle cet écran répond.
      bloc.append(el('p', { class: 'fiche__rien', texte: 'Rien d’ouvert.' }));
    }

    if (fiche.derniersEchanges.length > 0) {
      const echanges = el('ul', { class: 'fiche__echanges' });
      for (const echange of fiche.derniersEchanges) {
        echanges.append(
          el(
            'li',
            { class: 'fiche__echange', 'data-capture': echange.captureId },
            el('span', { class: 'fiche__quand chiffres', texte: quand(echange.quand) }),
            el('span', { class: 'fiche__extrait', texte: echange.extrait }),
          ),
        );
      }
      bloc.append(el('h3', { class: 'fiche__titre', texte: 'Derniers échanges' }), echanges);
    }

    // Ce qui a été réuni ici se sépare encore, nom par nom.
    for (const ancien of await nomsFusionnes(fiche.nom)) {
      bloc.append(
        el('button', {
          class: 'bouton bouton--discret fusion__separer',
          type: 'button',
          texte: `Séparer « ${ancien} »`,
          onclick: () => void defaire(fiche.nom, ancien),
        }),
      );
    }
    const fusion = blocFusion(fiche, noms);
    if (fusion) bloc.append(fusion);

    return bloc;
  }

  function liste(lignes: LigneFicheJson[], classe: string): HTMLElement {
    const ul = el('ul', { class: 'fiche__liste' });
    for (const ligne of lignes) {
      ul.append(
        el(
          'li',
          { class: `fiche__ligne ${classe}`, 'data-element': ligne.elementId },
          el('span', {
            class: 'badge badge--type',
            texte: LIBELLE_TYPE[ligne.type] ?? ligne.type.toLowerCase(),
          }),
          el('span', { class: 'fiche__texte', texte: ligne.texte }),
        ),
      );
    }
    return ul;
  }

  await rendre();
  return () => vider(racine);
}
