/**
 * Les renvois à un échange passé : « le truc dont on a parlé avec Sophie mardi ».
 *
 * Spec `memoire` — « Référence à un échange passé ». Une note de quatre secondes
 * renvoie souvent à autre chose qu'elle-même. Relue trois jours plus tard, elle ne
 * veut plus rien dire : « le truc » n'est plus rien, et la note est perdue alors
 * qu'elle a été correctement capturée, transcrite et rangée.
 *
 * Ce module ne cherche pas à comprendre de quoi il s'agit. Il fait deux choses, et
 * refuse la troisième :
 *
 *  1. reconnaître qu'une note **renvoie** à quelque chose — c'est une tournure, pas
 *     un sens : « dont on a parlé », « le truc de », « comme dit » ;
 *  2. proposer les captures qui pourraient être ce quelque chose, en réutilisant la
 *     recherche du cœur, qui sait déjà lire « mardi » et « avec Sophie » ;
 *  3. **ne pas choisir**. Rattacher une note à la mauvaise conversation est pire que
 *     de ne pas la rattacher : cela fabrique un souvenir faux, et rien ne le signale.
 */

import { rechercherParQuestionObjets, type CaptureJson, type ElementJson } from '../core/regles.ts';

/**
 * Les tournures qui annoncent un renvoi.
 *
 * Volontairement étroites. Une liste large attraperait des notes ordinaires, et
 * proposerait un rattachement là où il n'y a rien à rattacher — ce qui use la
 * proposition jusqu'à ce qu'on ne la lise plus.
 */
const RENVOIS = [
  /\bdont\s+on\s+a\s+parl[ée]/i,
  /\bdont\s+je\s+(?:t[’']|vous\s+)?ai\s+parl[ée]/i,
  /\ble\s+truc\s+(?:de|dont|qu)/i,
  /\bce\s+truc\b/i,
  /\bcomme\s+(?:on\s+l['’]a\s+)?dit\b/i,
  /\bon\s+en\s+a\s+parl[ée]/i,
  /\b[ée]voqu[ée]\s+(?:avec|la\s+semaine|mardi|lundi|hier)/i,
  /\bsuite\s+[àa]\s+(?:notre|la)\b/i,
];

/** Une capture qui pourrait être ce à quoi la note renvoie. */
export interface Echo {
  captureId: string;
  extrait: string;
  /** Pourquoi elle est proposée — rendu par la recherche, affichable tel quel. */
  pourquoi: string;
}

/** Vrai quand ce texte renvoie explicitement à un échange passé. */
export function renvoieAUnEchange(texte: string): boolean {
  return RENVOIS.some((motif) => motif.test(texte));
}

/**
 * Ce à quoi cette note pourrait renvoyer, du plus probable au moins probable.
 *
 * La capture d'origine est exclue : une note ne renvoie pas à elle-même, et se
 * proposer soi-même ferait passer la proposition pour cassée.
 *
 * @param maximum combien de pistes au plus. Trois : au-delà, ce n'est plus une
 *   proposition mais une liste à dépouiller, et on ne la lit pas.
 */
export function echosDe(
  texte: string,
  captureId: string,
  captures: CaptureJson[],
  elements: ElementJson[],
  aujourdhui: string,
  maximum = 3,
): Echo[] {
  if (!renvoieAUnEchange(texte)) return [];

  const ailleurs = captures.filter((c) => c.id !== captureId);
  if (ailleurs.length === 0) return [];

  const reponse = rechercherParQuestionObjets(
    texte,
    elements.filter((e) => e.captureId !== captureId),
    ailleurs,
    aujourdhui,
    false,
  );
  if (!reponse.fondee) return [];

  const vues = new Set<string>();
  const echos: Echo[] = [];
  for (const citation of reponse.citations) {
    if (vues.has(citation.captureId)) continue;
    vues.add(citation.captureId);
    echos.push({
      captureId: citation.captureId,
      extrait: citation.extrait,
      pourquoi: citation.pourquoi,
    });
    if (echos.length >= maximum) break;
  }
  return echos;
}

/**
 * Ce qu'on a déjà dit sur ce sujet, s'il y a lieu.
 *
 * Spec `recherche` — « Rappel proactif du passé pertinent ». Une note dictée sur un
 * sujet déjà traité arrive sans son passé : on redemande ce qu'on sait déjà, on
 * repromet ce qu'on a promis, on refait une décision qu'on avait prise. Le produit a
 * ce passé sous la main et ne le montrait jamais.
 *
 * ## Ce qui rend ce rappel supportable
 *
 * Il arrive **après** l'écriture, jamais pendant : la capture ne doit rien attendre,
 * et surtout rien afficher qui détourne le regard pendant qu'on parle. Il ne propose
 * aucune action, ne demande aucune réponse, et s'efface tout seul. Une suggestion
 * qu'il faut fermer est une interruption, quel que soit son contenu.
 *
 * Et il se tait plus souvent qu'il ne parle : un rappel qui se déclenche à chaque
 * capture devient un décor, et l'on cesse de le lire le jour où il aurait servi.
 */

/** Le seuil de recouvrement en dessous duquel deux notes ne parlent pas du même sujet. */
const PROXIMITE_MINIMALE = 0.34;

/** Ce qu'on a déjà dit sur ce sujet, ou `null` s'il n'y a rien de net. */
export function passePertinent(
  texte: string,
  captureId: string,
  captures: CaptureJson[],
  elements: ElementJson[],
  aujourdhui: string,
): Echo | null {
  const mots = texte.trim().split(/\s+/).filter((m) => m.length > 2);
  // Trop court pour être un sujet : « rappeler Marc » ressemble à tout.
  if (mots.length < 3) return null;

  const ailleurs = captures.filter((c) => c.id !== captureId);
  if (ailleurs.length === 0) return null;

  const reponse = rechercherParQuestionObjets(
    texte,
    elements.filter((e) => e.captureId !== captureId),
    ailleurs,
    aujourdhui,
    false,
  );
  if (!reponse.fondee || reponse.citations.length === 0) return null;

  const citation = reponse.citations[0];
  const source = ailleurs.find((c) => c.id === citation.captureId);
  if (!source) return null;

  // Le recouvrement se mesure entre les deux textes, et non sur le rang rendu par la
  // recherche : celle-ci trouve toujours quelque chose, c'est son travail.
  if (recouvrement(texte, source.texte) < PROXIMITE_MINIMALE) return null;

  return {
    captureId: citation.captureId,
    extrait: citation.extrait,
    pourquoi: citation.pourquoi,
  };
}

/** Part des mots du premier texte que le second porte aussi, entre 0 et 1. */
function recouvrement(a: string, b: string): number {
  const mots = (texte: string) =>
    new Set(
      texte
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(/[^\p{L}\p{N}]+/u)
        .filter((m) => m.length > 3),
    );
  const gauche = mots(a);
  if (gauche.size === 0) return 0;
  const droite = mots(b);
  let communs = 0;
  for (const mot of gauche) if (droite.has(mot)) communs += 1;
  return communs / gauche.size;
}
