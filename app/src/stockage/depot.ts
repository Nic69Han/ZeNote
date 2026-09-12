/**
 * Le dépôt : la seule porte d'entrée des données de ZeNote.
 *
 * Trois couches, conformément à `design.md` — décision 2 :
 *  - la **source** (la capture : audio, transcription brute) est immuable ;
 *  - le **dérivé** (les éléments produits par l'analyse) est jetable et reconstructible ;
 *  - le **décidé par l'humain** (verdict, corrections, plan) prime et n'est jamais
 *    écrasé par une ré-analyse.
 */

import type { ElementJson } from '../core/regles.ts';
import {
  MAGASIN_CAPTURES,
  MAGASIN_ELEMENTS,
  MAGASIN_REGLAGES,
  demander,
  transaction,
} from './base.ts';

export type SourceCapture = 'VOCALE' | 'ECRITE';
export type EtatTranscription = 'ABSENTE' | 'EN_COURS' | 'OK' | 'INDISPONIBLE' | 'ECHEC';

/** Couche source : immuable une fois écrite. */
export interface Capture {
  id: string;
  /** Horodatage ISO complet de la capture. */
  creeLe: string;
  source: SourceCapture;
  /** Transcription brute, telle que rendue par la reconnaissance vocale ou saisie. */
  texte: string;
  etatTranscription: EtatTranscription;
  dureeMs: number | null;
  /** L'audio d'origine, conservé : aucune reformulation n'est irréversible. */
  audio: Blob | null;
  /** Vrai quand l'application s'est arrêtée pendant l'enregistrement. */
  incomplete: boolean;
  /** Vrai quand l'analyse a déjà produit les éléments de cette capture. */
  analysee: boolean;
}

export interface Reglages {
  theme: 'auto' | 'clair' | 'sombre';
  sonConfirmation: boolean;
}

export const REGLAGES_PAR_DEFAUT: Reglages = { theme: 'auto', sonConfirmation: true };

// ------------------------------------------------------------------ captures

/**
 * Écrit une capture et ne rend la main qu'une fois l'écriture durable.
 *
 * L'appelant ne doit émettre le retour de confirmation qu'après résolution de cette
 * promesse : c'est la garantie « rien ne se perd » qui rend l'oubli possible.
 */
export async function enregistrerCapture(capture: Capture): Promise<Capture> {
  await transaction([MAGASIN_CAPTURES], 'readwrite', ([captures]) => {
    captures.put(capture);
  });
  return capture;
}

/** Met à jour les champs dérivés d'une capture (transcription, état, analyse). */
export async function majCapture(id: string, ajustement: Partial<Capture>): Promise<void> {
  await transaction([MAGASIN_CAPTURES], 'readwrite', async ([captures]) => {
    const existante = await demander<Capture | undefined>(captures.get(id));
    if (!existante) throw new Error(`Capture introuvable : ${id}`);
    captures.put({ ...existante, ...ajustement, id: existante.id });
  });
}

export function listerCaptures(): Promise<Capture[]> {
  return transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<Capture[]>(captures.getAll()).then((tout) =>
      tout.sort((a, b) => b.creeLe.localeCompare(a.creeLe)),
    ),
  );
}

export function lireCapture(id: string): Promise<Capture | undefined> {
  return transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<Capture | undefined>(captures.get(id)),
  );
}

/** Les captures transcrites qui attendent encore d'être analysées. */
export async function capturesAAnalyser(): Promise<Capture[]> {
  const tout = await listerCaptures();
  return tout
    .filter((c) => !c.analysee && c.etatTranscription === 'OK' && c.texte.trim() !== '')
    .sort((a, b) => a.creeLe.localeCompare(b.creeLe));
}

// ------------------------------------------------------------------ éléments

/**
 * Remplace intégralement la couche dérivée d'une capture.
 *
 * Les décisions humaines déjà prises sont conservées : un élément dont le verdict
 * n'est plus `EN_ATTENTE`, ou corrigé à la main, survit à la ré-analyse.
 */
export async function remplacerElements(
  captureId: string,
  nouveaux: ElementJson[],
): Promise<void> {
  await transaction([MAGASIN_ELEMENTS], 'readwrite', async ([elements]) => {
    const index = elements.index('captureId');
    const anciens = await demander<ElementJson[]>(index.getAll(IDBKeyRange.only(captureId)));
    const aGarder = anciens.filter((e) => e.verdict !== 'EN_ATTENTE' || e.corrigeParHumain);
    const aGarderIds = new Set(aGarder.map((e) => e.id));

    for (const ancien of anciens) {
      if (!aGarderIds.has(ancien.id)) elements.delete(ancien.id);
    }
    for (const nouveau of nouveaux) elements.put(nouveau);
  });
}

export async function enregistrerElement(element: ElementJson): Promise<void> {
  await transaction([MAGASIN_ELEMENTS], 'readwrite', ([elements]) => {
    elements.put(element);
  });
}

/** Applique une décision humaine : elle prime et n'est jamais écrasée ensuite. */
export async function majElement(
  id: string,
  ajustement: Partial<ElementJson>,
): Promise<ElementJson> {
  return transaction([MAGASIN_ELEMENTS], 'readwrite', async ([elements]) => {
    const existant = await demander<ElementJson | undefined>(elements.get(id));
    if (!existant) throw new Error(`Élément introuvable : ${id}`);
    const fusionne: ElementJson = { ...existant, ...ajustement, id: existant.id };
    elements.put(fusionne);
    return fusionne;
  });
}

export function listerElements(): Promise<ElementJson[]> {
  return transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementJson[]>(elements.getAll()),
  );
}

export function elementsDeCapture(captureId: string): Promise<ElementJson[]> {
  return transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementJson[]>(elements.index('captureId').getAll(IDBKeyRange.only(captureId))),
  );
}

// ------------------------------------------------------------------ réglages

export async function lireReglages(): Promise<Reglages> {
  const stockes = await transaction([MAGASIN_REGLAGES], 'readonly', ([reglages]) =>
    demander<{ cle: string; valeur: unknown }[]>(reglages.getAll()),
  );
  const carte = Object.fromEntries(stockes.map((r) => [r.cle, r.valeur]));
  return { ...REGLAGES_PAR_DEFAUT, ...carte } as Reglages;
}

export async function ecrireReglage<C extends keyof Reglages>(
  cle: C,
  valeur: Reglages[C],
): Promise<void> {
  await transaction([MAGASIN_REGLAGES], 'readwrite', ([reglages]) => {
    reglages.put({ cle, valeur });
  });
}

/** Efface toutes les données locales. Utilisé par les tests et par l'export/purge. */
export async function toutEffacer(): Promise<void> {
  await transaction(
    [MAGASIN_CAPTURES, MAGASIN_ELEMENTS, MAGASIN_REGLAGES],
    'readwrite',
    ([captures, elements, reglages]) => {
      captures.clear();
      elements.clear();
      reglages.clear();
    },
  );
}
