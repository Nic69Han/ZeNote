/**
 * Le vocabulaire personnel : ce que le moteur entend mal, et qu'on lui apprend.
 *
 * Spec `transcription` — « Vocabulaire personnel ». Un petit modèle générique ne
 * connaît ni vos clients, ni vos acronymes, ni les prénoms peu courants de votre
 * entourage. Il ne les apprendra pas non plus : le modèle est figé, servi avec
 * l'application. Ce qu'on peut faire, en revanche, c'est retenir la correction — et
 * ne plus jamais la redemander. Corriger « Karim » chaque semaine est exactement ce
 * qui fait abandonner un outil.
 *
 * ## Ce que ce module apprend, et ce qu'il refuse d'apprendre
 *
 * Il apprend des **substitutions de mot à mot**, tirées d'une correction faite à la
 * main : le texte d'avant et le texte d'après, alignés, donnent les mots qui ont
 * changé de place à place. Un mot devenu un autre mot, et rien d'autre.
 *
 * Il refuse d'apprendre :
 *
 *  - les mots ajoutés ou retirés — ce n'est pas une erreur d'écoute, c'est une
 *    reformulation, et la rejouer ailleurs abîmerait des phrases correctes ;
 *  - les corrections dont le nombre de mots change, ou dont trop de mots changent :
 *    ce n'est plus une phrase corrigée, c'est une phrase réécrite ;
 *  - les mots d'un seul caractère, trop fréquents pour qu'une substitution soit sûre ;
 *  - une majuscule posée sur le **premier** mot du texte. Le moteur rend tout en
 *    minuscules ; quelqu'un qui commence par remettre une majuscule de phrase
 *    apprendrait « voir » → « Voir », et le mot ressortirait capitalisé au milieu
 *    des phrases suivantes. Ailleurs qu'au premier mot, la même correction est au
 *    contraire précieuse : c'est ainsi qu'un prénom s'écrit enfin correctement.
 *
 * Le parti pris est le même que pour les disfluences : se tromper en réécrivant un
 * mot juste est pire que de laisser une erreur visible, qu'on corrigera.
 */

import type { Correction } from '../stockage/depot.ts';

/** En dessous de quoi un mot est trop court pour qu'une substitution soit sûre. */
const LONGUEUR_MINIMALE = 2;

/**
 * Part des mots au-delà de laquelle ce n'est plus une correction.
 *
 * Deux textes de même longueur dont la moitié des mots diffère ne sont pas une
 * phrase et sa correction : c'est une phrase réécrite, et en tirer des
 * substitutions produirait des règles fausses appliquées partout ensuite.
 */
const PART_MAXIMALE_CHANGEE = 0.5;

/** Minuscules, accents pliés : la forme sous laquelle on reconnaît le même mot. */
export function plier(mot: string): string {
  return mot
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]/gu, '');
}

/** Découpe en mots, en gardant leur graphie. */
function mots(texte: string): string[] {
  return texte.split(/\s+/).filter((m) => m !== '');
}

/**
 * Ce qu'une correction à la main apprend.
 *
 * Seules deux versions **de même nombre de mots** enseignent quelque chose, et la
 * comparaison se fait alors place par place. C'est restrictif, et c'est voulu : dès
 * que le compte change, on ne sait plus quel mot a remplacé lequel, et deviner
 * produirait des règles fausses — appliquées ensuite à des captures qui allaient
 * bien, sans que personne ne les revoie.
 */
export function apprendre(avant: string, apres: string): Correction[] {
  const a = mots(avant);
  const b = mots(apres);
  if (a.length === 0 || a.length !== b.length) return [];

  const apprises: Correction[] = [];
  let changes = 0;

  for (const [rang, motAvant] of a.entries()) {
    const correction = b[rang];
    if (motAvant === correction) continue;
    changes += 1;

    const malEntendu = plier(motAvant);
    if (malEntendu.length < LONGUEUR_MINIMALE) continue;
    if (plier(correction).length < LONGUEUR_MINIMALE) continue;
    // Une simple remise en forme du tout premier mot : voir l'en-tête du module.
    if (rang === 0 && malEntendu === plier(correction)) continue;
    apprises.push({ malEntendu, correction, fois: 1 });
  }

  if (changes > a.length * PART_MAXIMALE_CHANGEE) return [];
  return apprises;
}

/**
 * Applique le lexique à une suite de mots reconnus.
 *
 * Travaille sur les mots plutôt que sur le texte assemblé : c'est ce qui permet de
 * réécrire sans déplacer les positions des passages incertains, qui sont calculées
 * après. Seule la graphie change, jamais le nombre de mots — une correction qui
 * ajouterait ou retirerait un mot ferait mentir les ancrages.
 */
export function appliquer(mots: string[], lexique: Correction[]): string[] {
  if (lexique.length === 0) return mots;
  const parMot = new Map(lexique.map((c) => [c.malEntendu, c.correction]));
  return mots.map((mot) => {
    const su = parMot.get(plier(mot));
    // Une correction en plusieurs mots ne s'applique pas : elle décalerait tout.
    return su !== undefined && !/\s/.test(su) ? su : mot;
  });
}
