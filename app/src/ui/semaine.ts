/**
 * L'écran « La semaine » : un moment de recul, fait de constats.
 *
 * Spec `retour-semaine` — « Retour sur la semaine » et « Invitation hebdomadaire
 * discrète ». Les sept derniers jours en trois groupes, chaque ligne citant
 * l'élément ; puis une question facultative, dont la réponse est une capture écrite
 * comme une autre.
 *
 * Ce qui n'a pas sa place ici : un pourcentage, un taux, une série, une comparaison
 * avec une autre semaine, une couleur d'alerte, un mot de reproche. Lâcher un
 * élément est présenté pour ce que c'est — une décision — et un groupe vide dit
 * « Rien cette semaine. », sans rien ajouter.
 *
 * Ouvrir l'écran pose `semaineVueLe` : c'est ce qui éteint la ligne de la Revue.
 */

import '../styles/semaine.css';
import { bilan, type LigneSemaine } from '../services/semaine.ts';
import { aujourdhui, capturer, traiterFileAnalyse } from '../services/pipeline.ts';
import { ecrireReglage, listerElements } from '../stockage/depot.ts';
import { annoncer, el, vider } from './dom.ts';

export async function montrerSemaine(racine: HTMLElement): Promise<void> {
  const jour = aujourdhui();
  const semaine = bilan(await listerElements(), jour);
  // Ouvert : la Revue ne le proposera plus avant sept jours.
  await ecrireReglage('semaineVueLe', jour);

  function groupe(cle: string, titre: string, lignes: LigneSemaine[]): HTMLElement {
    const corps =
      lignes.length === 0
        ? el('p', { class: 'semaine__vide', texte: 'Rien cette semaine.' })
        : el(
            'ul',
            { class: 'semaine__lignes' },
            lignes.map((ligne) =>
              el(
                'li',
                { class: 'semaine__ligne', 'data-element': ligne.elementId },
                el('span', { class: 'semaine__texte', texte: ligne.texte }),
                ligne.motif ? el('span', { class: 'semaine__motif', texte: ligne.motif }) : null,
              ),
            ),
          );
    return el(
      'section',
      { class: 'semaine__groupe', 'data-groupe': cle, 'aria-labelledby': `titre-semaine-${cle}` },
      el('h2', { id: `titre-semaine-${cle}`, class: 'semaine__titre', texte: titre }),
      corps,
    );
  }

  // ------------------------------------------------ la question facultative

  const zone = el('textarea', {
    class: 'champ semaine__zone',
    rows: 3,
    placeholder: 'Facultatif',
    'aria-label': 'Une chose à retenir de la semaine',
  }) as HTMLTextAreaElement;
  const retour = el('p', { class: 'semaine__retour', role: 'status', hidden: true });

  async function noter(): Promise<void> {
    const texte = zone.value.trim();
    if (texte === '') {
      annoncer('Rien à noter : la question est facultative.');
      return;
    }
    // Une capture écrite comme les autres : même chemin que « Écrire plutôt », donc
    // même analyse, même Revue, même export. Rien de spécial n'est gardé sur elle.
    await capturer({ texte, source: 'ECRITE', etatTranscription: 'OK' });
    zone.value = '';
    retour.hidden = false;
    retour.textContent = 'Noté.';
    annoncer('Noté.');
    void traiterFileAnalyse();
  }

  const question = el(
    'form',
    {
      class: 'semaine__question',
      onsubmit: (evenement: Event) => {
        evenement.preventDefault();
        void noter();
      },
    },
    el('label', {
      class: 'semaine__libelle',
      for: 'semaine-retenir',
      texte: 'Une chose à retenir de la semaine ?',
    }),
    zone,
    el('button', { class: 'bouton bouton--plein', type: 'submit', texte: 'Noter' }),
    retour,
  );
  zone.id = 'semaine-retenir';

  vider(racine);
  racine.append(
    el(
      'section',
      { class: 'ecran ecran--semaine', 'aria-labelledby': 'titre-semaine' },
      el('h1', { id: 'titre-semaine', class: 'ecran__titre', texte: 'La semaine' }),
      el('p', { class: 'ecran__sous-titre', texte: 'Les sept derniers jours, tels qu’ils sont.' }),
      groupe('avance', 'Ce qui a avancé', semaine.avance),
      groupe('lache', 'Ce que vous avez lâché — c’est aussi décider', semaine.lache),
      groupe('bloque', 'Ce qui n’avance plus', semaine.bloque),
      question,
    ),
  );
}
