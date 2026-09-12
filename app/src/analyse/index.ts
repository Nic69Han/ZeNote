/**
 * L'analyse d'une capture transcrite.
 *
 * PROVISOIRE — analyseur local, destiné à être remplacé par un appel à un modèle.
 * Il est volontairement simple et honnête : il ne devine que ce qu'il peut justifier,
 * il porte une confiance basse quand il devine, et **tout élément produit cite un
 * passage réellement présent dans le texte** — garanti par le passage systématique
 * par `filtrerAncrage`, la règle d'ancrage du cœur.
 */

import type { ElementJson } from '../core/regles.ts';
import { filtrerAncrageObjets } from '../core/regles.ts';
import { normaliser, repererEcheance } from './dates.ts';
import { decouper, type Passage } from './segments.ts';
import {
  AMORCES_ATTENTE,
  AMORCES_DECISION,
  AMORCES_ENGAGEMENT,
  AMORCES_IDEE,
  AMORCES_TACHE,
  INDICES_FAIBLE,
  INDICES_FORT,
  INDICES_PERSONNEL,
  INDICES_PROFESSIONNEL,
  NON_PRENOMS,
  VERBES_ACTION,
} from './lexique.ts';

export interface ResultatAnalyse {
  elements: ElementJson[];
  /** Ce que l'ancrage a refusé, avec sa raison : traçable plutôt que disparu. */
  ecartes: { texte: string; raison: string }[];
}

const VERBES_NORMALISES = VERBES_ACTION.map(normaliser);

/** Identifiant stable et lisible, sans dépendance externe. */
export function identifiant(prefixe: string): string {
  const alea =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return `${prefixe}-${Date.now().toString(36)}-${alea}`;
}

function contientUn(texteNormalise: string, amorces: string[]): boolean {
  return amorces.some((a) => texteNormalise.includes(normaliser(a)));
}

/**
 * Le type d'un passage. L'ordre des tests compte : une attente et une décision se
 * reconnaissent à une amorce explicite, une tâche seulement à défaut.
 */
export function typerPassage(passage: string): ElementJson['type'] {
  const t = normaliser(passage);

  if (contientUn(t, AMORCES_ATTENTE)) return 'ATTENTE';
  if (contientUn(t, AMORCES_DECISION)) return 'DECISION';
  if (contientUn(t, AMORCES_ENGAGEMENT)) return 'ENGAGEMENT';
  if (contientUn(t, AMORCES_IDEE)) return 'IDEE';
  if (contientUn(t, AMORCES_TACHE)) return 'TACHE';

  // Verbe d'action à l'infinitif ou conjugué en première personne du futur proche.
  const mots = t.split(/[^a-z']+/);
  const verbe = mots.some((mot) => VERBES_NORMALISES.includes(mot));
  const premierePersonne = /\b(je dois|je vais|il faut que je|faudra que je)\b/.test(t);
  if (verbe || premierePersonne) {
    // Une promesse adressée à quelqu'un est un engagement, pas une simple tâche.
    if (premierePersonne && /\b(a|pour|aupres de)\s+[a-z]/.test(t) && /\b(rendre|renvoyer|livrer|repondre|envoyer)\b/.test(t)) {
      return 'ENGAGEMENT';
    }
    return 'TACHE';
  }

  return 'INFORMATION';
}

/** Le poids, avec l'indice qui le justifie — jamais un poids sans raison affichable. */
export function evaluerPoids(passage: string): {
  poids: ElementJson['poids'];
  confiance: number;
  indice: string;
} {
  const t = normaliser(passage);

  for (const { motif, indice } of INDICES_FORT) {
    if (motif.test(t)) return { poids: 'FORT', confiance: 0.8, indice };
  }
  for (const { motif, indice } of INDICES_FAIBLE) {
    if (motif.test(t)) return { poids: 'FAIBLE', confiance: 0.8, indice };
  }
  // Aucun indice de conséquence : on n'invente pas. Confiance sous le seuil, donc
  // la Revue posera la question au lieu de présenter une déduction comme un fait.
  return {
    poids: 'MOYEN',
    confiance: 0.4,
    indice: 'aucun indice de conséquence dans la capture',
  };
}

/** L'interlocuteur, repéré après « avec / à / pour / chez / auprès de ». */
export function repererInterlocuteur(
  passage: string,
): { nom: string; confiance: number } | null {
  const fort = /\b(avec|pour|aupr[èe]s de|chez)\s+([A-ZÉÈÊÀÂÇÎÔÛ][\p{L}'-]{1,})/u.exec(passage);
  if (fort && !NON_PRENOMS.has(normaliser(fort[2]))) {
    return { nom: fort[2], confiance: 0.8 };
  }
  const faible = /\b([àa]|de|d')\s*([A-ZÉÈÊÀÂÇÎÔÛ][\p{L}'-]{1,})/u.exec(passage);
  if (faible && !NON_PRENOMS.has(normaliser(faible[2]))) {
    return { nom: faible[2], confiance: 0.6 };
  }
  return null;
}

/** La sphère, quand le vocabulaire la trahit. Sinon, rien : on ne devine pas. */
export function repererSphere(passage: string): ElementJson['sphere'] {
  const mots = new Set(normaliser(passage).split(/[^a-z-]+/));
  const perso = INDICES_PERSONNEL.filter((m) => mots.has(m)).length;
  const pro = INDICES_PROFESSIONNEL.filter((m) => mots.has(m)).length;
  if (perso > pro) return 'PERSONNEL';
  if (pro > perso) return 'PROFESSIONNEL';
  return null;
}

/** Met une majuscule initiale sans toucher au reste du passage. */
function presenter(texte: string): string {
  const propre = texte.replace(/\s+/g, ' ').trim();
  return propre.charAt(0).toUpperCase() + propre.slice(1);
}

function elementDe(
  passage: Passage,
  captureId: string,
  aujourdhui: string,
  dureeMs: number | null,
  longueurTotale: number,
): ElementJson {
  const type = typerPassage(passage.texte);
  const echeance = repererEcheance(passage.texte, aujourdhui);
  const poids = evaluerPoids(passage.texte);
  const interlocuteur = repererInterlocuteur(passage.texte);

  // Position temporelle approchée dans l'audio, au prorata du texte : c'est une
  // estimation assumée, suffisante pour réécouter le bon moment.
  const auProrata = (car: number) =>
    dureeMs === null || longueurTotale === 0 ? null : Math.round((car / longueurTotale) * dureeMs);

  return {
    id: identifiant('el'),
    captureId,
    type,
    texte: presenter(passage.texte),
    debutCar: passage.debutCar,
    finCar: passage.finCar,
    debutMs: auProrata(passage.debutCar),
    finMs: auProrata(passage.finCar),
    echeance: echeance?.date ?? null,
    echeanceConfiance: echeance?.confiance ?? null,
    echeanceIndice: echeance?.indice ?? null,
    poids: poids.poids,
    poidsConfiance: poids.confiance,
    poidsIndice: poids.indice,
    interlocuteur: interlocuteur?.nom ?? null,
    interlocuteurConfiance: interlocuteur?.confiance ?? null,
    sphere: repererSphere(passage.texte),
    planDeclencheur: null,
    planAction: null,
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
  };
}

/**
 * Analyse une capture transcrite et rend les éléments structurés qu'elle contient.
 *
 * @param texte transcription de la capture, telle qu'elle est stockée
 * @param captureId la source à laquelle tous les éléments restent rattachés
 * @param aujourdhui date ISO `AAAA-MM-JJ`, pour résoudre les dates relatives
 * @param dureeMs durée de l'audio, si connue, pour estimer la position temporelle
 */
export function analyser(
  texte: string,
  captureId: string,
  aujourdhui: string,
  dureeMs: number | null = null,
): ResultatAnalyse {
  const passages = decouper(texte);
  const candidats = passages.map((p) =>
    elementDe(p, captureId, aujourdhui, dureeMs, texte.length),
  );

  // Le filet entre l'analyse et l'écran : rien n'atteint l'utilisateur sans passage
  // source vérifié. Cette règle appartient au cœur, elle n'est pas refaite ici.
  const ancrage = filtrerAncrageObjets(texte, candidats);
  return { elements: ancrage.retenus, ecartes: ancrage.ecartes };
}
