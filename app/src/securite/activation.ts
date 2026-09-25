/**
 * Activer et désactiver le chiffrement sur des données qui existent déjà.
 *
 * Créer un coffre ne suffit pas : les notes déposées avant lui sont toujours en
 * clair dans la base, et le chiffrement ne vaudrait rien tant qu'elles y sont. Ce
 * module fait la reprise, dans un sens comme dans l'autre.
 *
 * ## La propriété qui rend l'opération sûre
 *
 * Le dépôt lit indifféremment un enregistrement scellé et un enregistrement en
 * clair : la présence du scellé le dit. Une base à moitié reprise est donc une base
 * parfaitement lisible, et la reprise peut être interrompue — batterie vide, onglet
 * fermé, téléphone qui s'endort — puis reprise plus tard sans rien perdre ni rien
 * réparer. C'est ce qui permet de la faire sans transaction géante et sans risque.
 *
 * L'ordre importe, et il est le même dans les deux sens : le coffre n'est créé
 * qu'avant de chiffrer, et supprimé qu'après avoir tout déchiffré. À aucun moment
 * il n'existe d'enregistrement que personne ne peut plus lire.
 */

import {
  creerCoffre,
  etatCoffre,
  supprimerCoffre,
  type TypeGardien,
} from './coffre.ts';
import {
  ecrireCaptureEnClair,
  ecrireElementEnClair,
  enregistrerElement,
  identifiantsDesCaptures,
  lireCapture,
  listerElements,
  majCapture,
  reecrireLexique,
} from '../stockage/depot.ts';

/** Ce qu'une reprise a réellement touché. */
export interface Reprise {
  captures: number;
  elements: number;
}

/**
 * Réécrit tout le contenu tel que le dépôt l'écrit maintenant.
 *
 * Après création du coffre, cela scelle ; après suppression, cela remet en clair.
 * Les captures passent une à une, enregistrement compris : les tenir toutes en
 * mémoire pour n'en réécrire qu'une à la fois n'aurait pas de sens sur un téléphone
 * où l'audio pèse plus que tout le reste.
 */
async function reecrireTout(): Promise<Reprise> {
  let captures = 0;
  for (const id of await identifiantsDesCaptures()) {
    const capture = await lireCapture(id);
    if (!capture) continue;
    // Une mise à jour vide suffit : le dépôt relit, refusionne et réécrit dans le
    // mode courant. Passer par le même chemin que les écritures ordinaires évite
    // d'avoir deux façons d'écrire une capture, dont une seule serait testée.
    await majCapture(id, {});
    captures += 1;
  }

  const elements = await listerElements();
  for (const element of elements) await enregistrerElement(element);

  // Le lexique aussi : il porte des noms de personnes et de dossiers, et le laisser
  // en clair rouvrirait dans la base le trou que tout le reste ferme.
  await reecrireLexique();

  return { captures, elements: elements.length };
}

/**
 * Crée le coffre, puis chiffre tout ce qui existait avant lui.
 *
 * Le coffre naît ouvert : la reprise a besoin de relire, et laisser l'utilisateur
 * face à une base à demi chiffrée qu'il faudrait déverrouiller pour finir serait
 * une impasse.
 */
export async function activerChiffrement(
  type: TypeGardien,
  phrase?: string,
): Promise<Reprise> {
  await creerCoffre(type, phrase);
  return reecrireTout();
}

/**
 * Remet tout en clair, puis supprime le coffre.
 *
 * Demande le coffre ouvert — évidemment : sans lui, il n'y aurait rien à remettre
 * en clair, et supprimer le coffre d'abord rendrait les notes définitivement
 * illisibles.
 */
export async function desactiverChiffrement(): Promise<Reprise> {
  if (etatCoffre() !== 'OUVERT') {
    throw new Error('Déverrouillez le coffre avant de retirer le chiffrement.');
  }

  let captures = 0;
  for (const id of await identifiantsDesCaptures()) {
    const capture = await lireCapture(id);
    if (!capture) continue;
    await ecrireCaptureEnClair(capture);
    captures += 1;
  }

  const elements = await listerElements();
  for (const element of elements) await ecrireElementEnClair(element);

  await supprimerCoffre();
  return { captures, elements: elements.length };
}
