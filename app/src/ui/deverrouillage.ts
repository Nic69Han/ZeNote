/**
 * L'écran de déverrouillage.
 *
 * Il ne s'affiche que devant ce qui demande à relire — la Revue, Maintenant, la
 * Recherche, Vos données. **Capturer n'est jamais derrière lui** : déposer une note
 * ne demande aucune authentification, et c'est précisément ce que la forme du coffre
 * a été choisie pour permettre. L'écran le dit, plutôt que de laisser croire que
 * l'application entière est bloquée.
 */

import {
  AuthentificationRefusee,
  deverrouiller,
  gardiens,
  type TypeGardien,
} from '../securite/coffre.ts';
import { annoncer, el, vider } from './dom.ts';

const LIBELLE: Record<TypeGardien, string> = {
  APPAREIL: 'Déverrouiller avec cet appareil',
  PHRASE: 'Déverrouiller avec la phrase',
};

/**
 * Monte l'écran de déverrouillage.
 *
 * @param apres appelé une fois le coffre ouvert, pour que l'écran demandé s'affiche
 *   enfin — on n'a pas demandé le déverrouillage pour lui-même.
 */
export function montrerDeverrouillage(racine: HTMLElement, apres: () => void): void {
  const message = el('p', { class: 'verrou__message', role: 'status' });
  const enregistres = gardiens();

  function dire(texte: string, ton: 'neutre' | 'echec' = 'echec'): void {
    message.textContent = texte;
    message.dataset.ton = ton;
    annoncer(texte);
  }

  async function tenter(type: TypeGardien, phrase?: string, bouton?: HTMLButtonElement) {
    const libelleInitial = bouton?.textContent ?? '';
    if (bouton) {
      bouton.disabled = true;
      bouton.textContent = 'Un instant…';
    }
    dire('', 'neutre');
    try {
      await deverrouiller(type, phrase);
      annoncer('Coffre ouvert.');
      apres();
    } catch (erreur) {
      dire(
        erreur instanceof AuthentificationRefusee
          ? erreur.message
          : "Le déverrouillage n'a pas abouti.",
      );
    } finally {
      if (bouton) {
        bouton.disabled = false;
        bouton.textContent = libelleInitial;
      }
    }
  }

  const actions = el('div', { class: 'verrou__actions' });

  if (enregistres.includes('APPAREIL')) {
    const bouton = el('button', {
      class: 'bouton bouton--plein',
      type: 'button',
      texte: LIBELLE.APPAREIL,
    }) as HTMLButtonElement;
    bouton.addEventListener('click', () => void tenter('APPAREIL', undefined, bouton));
    actions.append(bouton);
  }

  if (enregistres.includes('PHRASE')) {
    const champ = el('input', {
      class: 'champ verrou__champ',
      type: 'password',
      autocomplete: 'current-password',
      placeholder: 'Votre phrase de passe',
      'aria-label': 'Phrase de passe',
    }) as HTMLInputElement;
    const bouton = el('button', {
      class: 'bouton bouton--plein',
      type: 'submit',
      texte: LIBELLE.PHRASE,
    }) as HTMLButtonElement;
    const formulaire = el(
      'form',
      {
        class: 'verrou__phrase',
        onsubmit: (evenement: Event) => {
          evenement.preventDefault();
          if (champ.value === '') {
            dire('Entrez votre phrase de passe.');
            return;
          }
          void tenter('PHRASE', champ.value, bouton);
        },
      },
      champ,
      bouton,
    );
    actions.append(formulaire);
  }

  vider(racine);
  racine.append(
    el(
      'section',
      { class: 'ecran ecran--verrou', 'aria-labelledby': 'titre-verrou' },
      el('h1', { id: 'titre-verrou', class: 'ecran__titre', texte: 'Vos notes sont fermées' }),
      el('p', {
        class: 'ecran__sous-titre',
        texte:
          'Elles sont chiffrées sur cet appareil. Il faut vous authentifier pour les relire.',
      }),
      actions,
      message,
      el('p', {
        class: 'verrou__capture',
        texte:
          'Vous pouvez capturer sans déverrouiller : une note déposée maintenant sera ' +
          'chiffrée aussitôt, et vous la retrouverez ici.',
      }),
      el('a', { class: 'bouton bouton--discret', href: '#capturer', texte: 'Capturer quand même' }),
    ),
  );
}
