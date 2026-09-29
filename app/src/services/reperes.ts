/**
 * Situer un résultat de recherche par rapport à des moments dont on se souvient.
 *
 * Spec `reperes-temporels` — « Repères personnels » et « Résultats situés ». On retrouve
 * par repères, pas par dates : avec des repères personnels sur la frise, le temps
 * médian de recherche est significativement plus court qu'avec les seules dates
 * (Ringel, Cutrell, Dumais & Horvitz, INTERACT 2003). « Le 14 à 10 h 42 » ne dit rien ;
 * « deux jours après la réunion “point budget” » fait reconnaître le bon résultat.
 *
 * ## Des repères tirés des notes, et de nulle part ailleurs
 *
 * Trois sortes, toutes déduites de ce que l'utilisateur a lui-même capturé : une
 * réunion enregistrée ou importée, une décision acceptée, la première mention d'une
 * personne. Aucun agenda n'est branché, et aucune source extérieure n'est consultée :
 * un repère inventé serait pire qu'aucun, il ferait reconnaître un souvenir qui n'a
 * pas eu lieu.
 *
 * Quand aucun repère ne tombe à moins de trois jours, la citation ne porte rien de
 * plus que sa date. On n'affiche pas une date déguisée en repère.
 *
 * Le module est pur : des captures et des éléments en entrée, des repères en sortie.
 */

import type { ElementJson } from '../core/regles.ts';
import { aujourdhui } from './pipeline.ts';
import { plier } from './lexique.ts';

export type SorteRepere = 'REUNION' | 'DECISION' | 'PREMIERE_MENTION';

/**
 * Un moment de la frise personnelle.
 *
 * [libelle] est un groupe nominal féminin sans article — « réunion “point budget” »,
 * « décision “on passe au fournisseur B” », « première mention de Karim » — que
 * [situer] insère derrière « la ».
 */
export interface Repere {
  /** Le jour vécu, en ISO `AAAA-MM-JJ`. */
  jour: string;
  libelle: string;
  sorte: SorteRepere;
}

/** Ce que les repères lisent d'une capture. */
export interface CapturePourRepere {
  id: string;
  creeLe: string;
  texte: string;
  /** Vrai pour l'enregistrement d'une réunion ou un compte rendu importé. */
  reunion?: boolean;
}

/** Ce que les repères lisent d'un élément. */
export type ElementPourRepere = Pick<
  ElementJson,
  'captureId' | 'type' | 'verdict' | 'texte' | 'interlocuteur' | 'issuDeReunion'
>;

/** Au-delà de trois jours, un repère ne situe plus rien. */
export const PORTEE_JOURS = 3;

/** Un libellé long ne se reconnaît plus : on le tronque. */
export const LONGUEUR_LIBELLE = 50;

/** Préférence entre deux repères du même jour : ce dont on se souvient le mieux d'abord. */
const ORDRE_SORTE: Record<SorteRepere, number> = { REUNION: 0, DECISION: 1, PREMIERE_MENTION: 2 };

/** Le jour vécu d'une capture, ou `null` si son horodatage est illisible. */
export function jourVecu(creeLe: string): string | null {
  const instant = new Date(creeLe);
  return Number.isNaN(instant.getTime()) ? null : aujourdhui(instant);
}

/** Compte de jours entre deux jours ISO (`b` moins `a`), sans jamais dépendre d'un fuseau. */
function ecartEnJours(a: string, b: string): number {
  const [ya, ma, da] = a.split('-').map(Number);
  const [yb, mb, db] = b.split('-').map(Number);
  return Math.round((Date.UTC(yb, mb - 1, db) - Date.UTC(ya, ma - 1, da)) / 86_400_000);
}

/** Un texte sur une ligne, cité entre guillemets, tronqué à [LONGUEUR_LIBELLE] caractères. */
function citer(texte: string): string {
  const ligne = texte.split('\n').find((l) => l.trim() !== '') ?? '';
  const propre = ligne.replace(/\s+/g, ' ').trim();
  const court =
    propre.length > LONGUEUR_LIBELLE ? `${propre.slice(0, LONGUEUR_LIBELLE - 1).trimEnd()}…` : propre;
  return court === '' ? '' : `“${court}”`;
}

function trier(reperes: Repere[]): Repere[] {
  return reperes.sort(
    (a, b) => a.jour.localeCompare(b.jour) || ORDRE_SORTE[a.sorte] - ORDRE_SORTE[b.sorte],
  );
}

/**
 * Les repères que contiennent les notes de l'utilisateur, du plus ancien au plus récent.
 *
 * - **Réunion** : une capture issue de l'enregistrement d'une réunion ou d'un compte
 *   rendu importé — marquée `reunion`, ou dont un élément vient d'un compte rendu (les
 *   comptes rendus importés avant que le marquage existe se reconnaissent ainsi).
 * - **Décision** : un élément `DECISION` accepté. Son jour est celui de sa capture :
 *   l'acceptation elle-même n'est pas datée, et le jour où la décision a été dite est
 *   celui dont on se souvient.
 * - **Première mention** : le premier jour où un interlocuteur apparaît dans un
 *   élément. Un élément rejeté ne compte pas : c'est une erreur d'analyse écartée, pas
 *   une rencontre.
 */
export function reperesDepuis(
  captures: readonly CapturePourRepere[],
  elements: readonly ElementPourRepere[],
): Repere[] {
  const jourDeCapture = new Map<string, string>();
  for (const capture of captures) {
    const jour = jourVecu(capture.creeLe);
    if (jour) jourDeCapture.set(capture.id, jour);
  }

  const reperes: Repere[] = [];

  const reunions = new Set(captures.filter((c) => c.reunion).map((c) => c.id));
  for (const element of elements) {
    if (element.issuDeReunion) reunions.add(element.captureId);
  }
  for (const capture of captures) {
    const jour = jourDeCapture.get(capture.id);
    if (!jour || !reunions.has(capture.id)) continue;
    const titre = citer(capture.texte);
    reperes.push({ jour, libelle: titre === '' ? 'réunion' : `réunion ${titre}`, sorte: 'REUNION' });
  }

  const premieres = new Map<string, { jour: string; nom: string }>();
  for (const element of elements) {
    const jour = jourDeCapture.get(element.captureId);
    if (!jour) continue;

    if (element.type === 'DECISION' && element.verdict === 'ACCEPTE') {
      const texte = citer(element.texte);
      reperes.push({
        jour,
        libelle: texte === '' ? 'décision' : `décision ${texte}`,
        sorte: 'DECISION',
      });
    }

    const nom = element.interlocuteur?.trim();
    if (nom && element.verdict !== 'REJETE') {
      const cle = plier(nom);
      const connue = premieres.get(cle);
      if (cle !== '' && (!connue || jour < connue.jour)) premieres.set(cle, { jour, nom });
    }
  }
  for (const { jour, nom } of premieres.values()) {
    reperes.push({ jour, libelle: `première mention de ${nom}`, sorte: 'PREMIERE_MENTION' });
  }

  return trier(reperes);
}

/**
 * Le repère le plus proche de ce jour, à [PORTEE_JOURS] jours au plus, ou `null`.
 *
 * À égalité de distance, le plus ancien l'emporte — on se souvient de ce qui a
 * précédé plus sûrement que de ce qui a suivi — puis la réunion sur la décision, et la
 * décision sur la première mention.
 */
export function repereProche(jour: string, reperes: readonly Repere[]): Repere | null {
  let meilleur: Repere | null = null;
  let distanceMeilleur = Infinity;
  for (const repere of reperes) {
    const distance = Math.abs(ecartEnJours(repere.jour, jour));
    if (distance > PORTEE_JOURS) continue;
    const plusPres = distance < distanceMeilleur;
    const memeDistance = distance === distanceMeilleur && meilleur !== null;
    const plusAncien = memeDistance && repere.jour < meilleur!.jour;
    const memeJourPlusSur =
      memeDistance &&
      repere.jour === meilleur!.jour &&
      ORDRE_SORTE[repere.sorte] < ORDRE_SORTE[meilleur!.sorte];
    if (plusPres || plusAncien || memeJourPlusSur) {
      meilleur = repere;
      distanceMeilleur = distance;
    }
  }
  return meilleur;
}

const NOMBRES_EN_LETTRES = ['zéro', 'un', 'deux', 'trois'];

/** La position d'un jour par rapport à un repère, en toutes lettres. */
function relation(jour: string, repere: string): string {
  const ecart = ecartEnJours(repere, jour);
  if (ecart === 0) return 'le jour de';
  if (ecart === -1) return 'la veille de';
  if (ecart === 1) return 'le lendemain de';
  const nombre = NOMBRES_EN_LETTRES[Math.abs(ecart)] ?? String(Math.abs(ecart));
  return `${nombre} jours ${ecart < 0 ? 'avant' : 'après'}`;
}

/**
 * Situe ce jour par rapport au repère le plus proche : « deux jours après la réunion
 * “point budget” », « la veille de la décision “…” », ou `null` quand aucun repère ne
 * tombe à trois jours.
 */
export function situer(jour: string, reperes: readonly Repere[]): string | null {
  const repere = repereProche(jour, reperes);
  return repere ? `${relation(jour, repere.jour)} la ${repere.libelle}` : null;
}

// ------------------------------------------------------------------ la frise

/** Un jour de la frise : ce qui y a été cité, et les repères qui y tombent. */
export interface PointDeFrise {
  jour: string;
  /** Combien de citations de la réponse datent de ce jour. */
  citations: number;
  reperes: Repere[];
}

/** Les repères de la période qu'on ajoute à la frise sans qu'aucune citation s'y appuie. */
const REPERES_SUPPLEMENTAIRES_MAX = 5;

/**
 * La frise compacte d'une réponse : les jours cités et les repères de leur période.
 *
 * Y figurent les repères sur lesquels une citation s'est appuyée, et ceux qui tombent
 * entre la première et la dernière citation — le décor qui aide à se souvenir. Vide
 * quand aucun repère ne s'y trouve : une frise de dates seules serait la liste
 * d'horodatages que les repères existent pour remplacer.
 */
export function friseDe(joursCites: readonly string[], reperes: readonly Repere[]): PointDeFrise[] {
  if (joursCites.length === 0 || reperes.length === 0) return [];

  const citations = new Map<string, number>();
  for (const jour of joursCites) citations.set(jour, (citations.get(jour) ?? 0) + 1);
  const tries = [...citations.keys()].sort();
  const debut = tries[0];
  const fin = tries[tries.length - 1];

  const retenus = new Set<Repere>();
  for (const jour of tries) {
    const repere = repereProche(jour, reperes);
    if (repere) retenus.add(repere);
  }
  let supplementaires = 0;
  for (const repere of reperes) {
    if (retenus.has(repere) || repere.jour < debut || repere.jour > fin) continue;
    if (supplementaires >= REPERES_SUPPLEMENTAIRES_MAX) break;
    retenus.add(repere);
    supplementaires += 1;
  }
  if (retenus.size === 0) return [];

  const points = new Map<string, PointDeFrise>();
  const point = (jour: string): PointDeFrise => {
    let existant = points.get(jour);
    if (!existant) {
      existant = { jour, citations: citations.get(jour) ?? 0, reperes: [] };
      points.set(jour, existant);
    }
    return existant;
  };
  for (const jour of tries) point(jour);
  for (const repere of trier([...retenus])) point(repere.jour).reperes.push(repere);

  return [...points.values()].sort((a, b) => a.jour.localeCompare(b.jour));
}
