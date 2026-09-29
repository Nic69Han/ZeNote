/**
 * La carte « Où vous en étiez », en tête de Maintenant.
 *
 * Spec `reprise` — « Restitution au retour ». Elle rend la note telle qu'elle a été
 * posée, mot pour mot, avec son heure et son audio : rien n'est reformulé, parce que
 * c'est la phrase de celui qui s'arrêtait qui remet en route, pas un résumé.
 *
 * Deux gestes, sans commentaire ni friction : « C'est reparti » la range, « Garder
 * pour la Revue » la confie à l'analyse. Aucun compteur de notes en attente.
 */

import {
  derniereRepriseObservee,
  estRevenu,
  garderPourRevue,
  marquerReprise,
  noteDeReprise,
  quandPosee,
} from '../services/reprise.ts';
import { traiterFileAnalyse } from '../services/pipeline.ts';
import { lireCapture, listerCaptures, type Capture } from '../stockage/depot.ts';
import { annoncer, el } from './dom.ts';
import { lecteurAudio, type Lecteur } from './lecteur.ts';

/**
 * La note à rendre maintenant, avec son audio, ou `undefined`.
 *
 * Lit les captures sans déplier les enregistrements, puis ne déplie que celui de la
 * note retenue.
 */
export async function noteARendre(
  maintenant: number = Date.now(),
): Promise<Capture | undefined> {
  const note = noteDeReprise(await listerCaptures());
  if (!note?.reprise) return undefined;
  if (!estRevenu(note.reprise.poseeLe, maintenant, derniereRepriseObservee())) return undefined;
  return (await lireCapture(note.id)) ?? note;
}

/**
 * La carte de la note.
 *
 * @param lecteurs la liste de l'écran, où le lecteur de la note est inscrit pour être
 *   libéré avec les autres.
 * @param surChangement appelé une fois la note rangée ou confiée à la Revue, pour que
 *   l'écran se redessine sans elle.
 */
export function carteReprise(
  note: Capture,
  lecteurs: Lecteur[],
  surChangement: () => void,
): HTMLElement {
  const lecteur = lecteurAudio(note);
  lecteurs.push(lecteur);
  // Une seule note, qu'on est venu chercher : l'audio est prêt sans geste de plus.
  if (lecteur.disponible) lecteur.ouvrir();

  const texte = note.texte.trim();
  return el(
    'section',
    { class: 'reprise', 'aria-labelledby': 'titre-reprise', 'data-capture': note.id },
    el('h2', { id: 'titre-reprise', class: 'reprise__titre', texte: 'Où vous en étiez' }),
    el('p', {
      class: 'reprise__quand chiffres',
      texte: quandPosee(note.reprise?.poseeLe ?? note.creeLe),
    }),
    texte !== ''
      ? el('p', { class: 'reprise__texte', texte: `« ${texte} »` })
      : el('p', {
          class: 'reprise__texte reprise__texte--muet',
          texte: 'Note dictée — le texte n’est pas encore là ; l’enregistrement est ci-dessous.',
        }),
    note.aAudio ? lecteur.noeud : null,
    el(
      'div',
      { class: 'reprise__actions' },
      el('button', {
        class: 'bouton bouton--plein reprise__reparti',
        type: 'button',
        texte: 'C’est reparti',
        onclick: () => {
          void marquerReprise(note).then(() => {
            annoncer('C’est noté.');
            surChangement();
          });
        },
      }),
      el('button', {
        class: 'bouton bouton--discret reprise__revue',
        type: 'button',
        texte: 'Garder pour la Revue',
        onclick: () => {
          void garderPourRevue(note)
            .then(() => traiterFileAnalyse())
            .then(() => {
              annoncer('Confiée à la Revue.');
              surChangement();
            });
        },
      }),
    ),
  );
}
