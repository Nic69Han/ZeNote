/**
 * Supprimer, avec le droit de se raviser.
 *
 * Spec `donnees` — « Suppression d'une capture » et « Fenêtre d'annulation ». La
 * suppression doit être réelle et complète : la capture, son audio, et tout ce qui
 * en découle. C'est la contrepartie de tout garder en local — si rien ne part, alors
 * effacer doit vraiment effacer.
 *
 * Mais un geste irréversible à un doigt d'un bouton ordinaire finit toujours par
 * être fait par erreur, et « êtes-vous sûr ? » ne protège personne : on répond oui
 * sans lire. Ce module fait l'inverse : la suppression a lieu immédiatement, et ce
 * qui a été retiré est tenu de côté le temps qu'on puisse le remettre.
 *
 * ## Pourquoi tenir la copie en mémoire plutôt qu'en base
 *
 * Marquer la capture « supprimée » sans l'effacer laisserait dans la base des notes
 * que l'utilisateur croit parties. Chaque écran devrait alors penser à les exclure,
 * et le jour où l'un l'oublie, une note supprimée réapparaît — ce qui est une
 * trahison pire que l'absence d'annulation. La copie vit donc hors de la base, et
 * fermer l'application ferme la fenêtre : c'est une limite assumée, et elle est du
 * bon côté.
 */

import {
  enregistrerElement,
  ecrireCaptureEnClair,
  elementsDeCapture,
  lireCapture,
  majCapture,
  supprimerCapture,
  type Capture,
  type ElementStocke,
} from '../stockage/depot.ts';

/** Ce qu'on peut remettre, et jusqu'à quand. */
export interface Annulation {
  /** Ce qui a été retiré, dit en une ligne. */
  resume: string;
  /** Remet tout en place. Sans effet une fois la fenêtre fermée. */
  annuler: () => Promise<boolean>;
}

/** Le temps pendant lequel une suppression peut être reprise. */
export const FENETRE_ANNULATION_MS = 30_000;

/**
 * Supprime une capture, son audio et ses éléments, et rend de quoi se raviser.
 *
 * @returns `null` si la capture n'existait pas — se raviser n'aurait alors rien à
 *   remettre, et proposer l'annulation ferait croire à une suppression qui n'a pas eu
 *   lieu.
 */
export async function supprimerAvecAnnulation(captureId: string): Promise<Annulation | null> {
  const capture = await lireCapture(captureId);
  if (!capture) return null;
  const elements = await elementsDeCapture(captureId);

  await supprimerCapture(captureId);

  let fenetreOuverte = true;
  const fermeture = setTimeout(() => {
    fenetreOuverte = false;
  }, FENETRE_ANNULATION_MS);

  return {
    resume: resumer(capture, elements.length),
    annuler: async () => {
      if (!fenetreOuverte) return false;
      clearTimeout(fermeture);
      fenetreOuverte = false;
      await remettre(capture, elements);
      return true;
    },
  };
}

/** Ce qui a été retiré, dit sans chiffre inutile ni jargon. */
function resumer(capture: Capture, combien: number): string {
  const debut = capture.texte.trim().slice(0, 50);
  const quoi = debut !== '' ? `« ${debut} »` : 'une capture sans texte';
  if (combien === 0) return `${quoi} supprimée.`;
  return combien === 1
    ? `${quoi} supprimée, avec l’élément qui en venait.`
    : `${quoi} supprimée, avec les ${combien} éléments qui en venaient.`;
}

/**
 * Réécrit la capture telle qu'elle était, audio compris, puis ses éléments.
 *
 * L'ordre importe : un élément dont la capture n'existe pas encore serait un
 * orphelin le temps de l'écriture, et la Revue pourrait le lire dans cet
 * intervalle.
 */
async function remettre(capture: Capture, elements: ElementStocke[]): Promise<void> {
  await ecrireCaptureEnClair(capture);
  // Réécrite par le chemin ordinaire : c'est ce qui la rescelle si le coffre est
  // ouvert, au lieu de la remettre en clair dans une base chiffrée.
  await majCapture(capture.id, {});
  for (const element of elements) await enregistrerElement(element);
}
