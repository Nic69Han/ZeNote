/**
 * Le bloc « Vider sa tête le soir » de l'écran Réglages.
 *
 * Spec `delestage-du-soir` — « Invite du soir facultative » : le réglage est éteint par
 * défaut, et rien ici ne pousse à l'allumer. Ce bloc ne tient que trois valeurs — un
 * interrupteur, une heure, le jour où l'invite a été vue — et aucune n'est du texte de
 * note : le magasin des réglages n'est pas scellé.
 */

import { HEURE_SOIREE_PAR_DEFAUT } from '../services/delestage.ts';
import { ecrireReglage, type Reglages } from '../stockage/depot.ts';
import { annoncer, el } from './dom.ts';

export function blocDelestage(reglages: Reglages): HTMLElement {
  const allume = el('input', {
    type: 'checkbox',
    class: 'case',
    name: 'delestage-soir',
    checked: reglages.delestageSoir,
  }) as HTMLInputElement;

  const heure = el('input', {
    class: 'champ',
    type: 'time',
    value: reglages.delestageHeure || HEURE_SOIREE_PAR_DEFAUT,
    'aria-label': 'Heure de début de la soirée',
  }) as HTMLInputElement;

  const reglageHeure = el(
    'label',
    { class: 'champ__etiquette' },
    'À partir de ',
    heure,
  );
  reglageHeure.hidden = !reglages.delestageSoir;

  allume.addEventListener('change', () => {
    void (async () => {
      await ecrireReglage('delestageSoir', allume.checked);
      reglageHeure.hidden = !allume.checked;
      annoncer(
        allume.checked
          ? `Invite du soir allumée, à partir de ${heure.value || HEURE_SOIREE_PAR_DEFAUT}.`
          : 'Invite du soir éteinte.',
      );
    })();
  });

  heure.addEventListener('change', () => {
    void (async () => {
      // Une heure effacée n'éteint rien : elle revient à l'heure proposée. L'éteindre
      // se fait avec la case, d'un geste que l'on comprend.
      const valeur = heure.value || HEURE_SOIREE_PAR_DEFAUT;
      heure.value = valeur;
      await ecrireReglage('delestageHeure', valeur);
      annoncer(`Invite du soir à partir de ${valeur}.`);
    })();
  });

  return el(
    'section',
    { class: 'bloc bloc--delestage', 'aria-labelledby': 'titre-delestage' },
    el('h2', { id: 'titre-delestage', class: 'bloc__titre', texte: 'Vider sa tête le soir' }),
    el('p', {
      class: 'bloc__texte',
      texte:
        'Écrire cinq minutes ce qu’on fera les jours suivants, précisément, aide à ' +
        's’endormir plus vite que de revoir sa journée (Scullin et al., 2018). Si vous le ' +
        'voulez, l’écran de capture le propose une fois dans la soirée, avec la consigne. ' +
        'Rien d’autre ne change, et rien n’est compté.',
    }),
    el(
      'label',
      { class: 'champ__etiquette champ__etiquette--case' },
      allume,
      'Proposer cette invite le soir',
    ),
    reglageHeure,
    el('p', {
      class: 'bloc__texte',
      texte: 'L’invite se retire d’un geste (« Pas ce soir ») et s’efface à quatre heures du matin.',
    }),
  );
}
