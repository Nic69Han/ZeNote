/**
 * La bande de rappels : l'unique notification d'un point de rupture.
 *
 * Une seule, groupée, et jamais au milieu d'une tâche — c'est la spec `rappels`, et
 * c'est aussi la seule forme qu'un rappel peut prendre dans ce produit sans devenir
 * ce qu'il combat. Elle apparaît au retour dans l'application, au-dessus de l'écran
 * en cours, et se referme d'un geste.
 *
 * Trois choses qu'elle ne fait pas, et qui sont délibérées : elle ne compte pas ce
 * qui reste, elle ne dit pas de retard comme un reproche — seulement comme un fait —
 * et elle ne réapparaît pas tant qu'on n'est pas reparti puis revenu.
 */

import { marquerIgnores, type RappelsDuMoment } from '../services/rappels.ts';
import { annoncer, el, vider } from './dom.ts';

/**
 * Monte la bande et rend de quoi la retirer.
 *
 * @param surTraite appelé quand l'utilisateur va s'occuper d'un rappel : la bande se
 *   referme, et ce rappel n'est pas compté comme ignoré.
 */
export function montrerRappels(
  hote: HTMLElement,
  moment: RappelsDuMoment,
  surTraite: () => void,
): () => void {
  /** Vrai dès que la bande se referme d'une façon ou d'une autre : on ne compte qu'une fois. */
  let close = false;

  function fermer(compterCommeIgnores: boolean): void {
    if (close) return;
    close = true;
    const ids = moment.rappels.map((r) => r.elementId);
    if (compterCommeIgnores && ids.length > 0) {
      // Écrit en arrière-plan : refermer une bande ne doit pas attendre la base.
      void marquerIgnores(ids);
    }
    vider(hote);
    hote.hidden = true;
  }

  const liste = el('ul', { class: 'rappels__liste' });
  for (const rappel of moment.rappels) {
    liste.append(
      el(
        'li',
        { class: 'rappels__ligne', 'data-element': rappel.elementId },
        // Change `rappels-silence-critique` : un critique passe même quand tout le
        // reste attend ; il doit se reconnaître d'un coup d'œil.
        rappel.critique ? el('p', { class: 'rappels__critique', texte: 'Critique' }) : null,
        el('p', { class: 'rappels__texte', texte: rappel.texte }),
        el('p', {
          class: 'rappels__signal',
          // Le signal tel qu'il a été formulé, et — s'il n'est pas observable — la
          // raison pour laquelle le rappel arrive maintenant plutôt qu'à ce signal.
          texte: rappel.substitution
            ? `« ${rappel.declencheur} » — ${rappel.substitution}`
            : `« ${rappel.declencheur} »`,
        }),
        rappel.enRetard
          ? el('p', { class: 'rappels__retard', texte: 'Le moment est passé.' })
          : null,
      ),
    );
  }

  vider(hote);
  hote.hidden = false;
  hote.append(
    el(
      'section',
      { class: 'rappels', role: 'status', 'aria-labelledby': 'titre-rappels' },
      el('h2', { id: 'titre-rappels', class: 'rappels__titre', texte: moment.titre }),
      liste,
      el(
        'div',
        { class: 'rappels__actions' },
        el('a', {
          class: 'bouton bouton--plein',
          href: '#maintenant',
          texte: 'M’en occuper',
          onclick: () => {
            fermer(false);
            surTraite();
          },
        }),
        el('button', {
          class: 'bouton bouton--discret',
          type: 'button',
          texte: 'Plus tard',
          onclick: () => fermer(true),
        }),
      ),
    ),
  );
  annoncer(moment.titre);

  // Quitter la bande sans y toucher, c'est l'ignorer : c'est ce que compte le cœur
  // pour décider, au bout de trois fois, de la remonter en Revue autrement.
  return () => fermer(true);
}
