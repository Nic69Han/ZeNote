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

/**
 * L'élément tel qu'il est stocké : le contrat du cœur, plus le seul fait que la
 * surface a besoin de retenir et que le contrat ne porte pas — la date à laquelle
 * l'utilisateur a marqué l'élément fait. Ce champ n'est jamais passé aux règles :
 * un élément fait sort simplement des éléments actifs.
 */
export interface ElementStocke extends ElementJson {
  faitLe?: string | null;
  /**
   * La dernière fois qu'on a eu — ou relancé — des nouvelles sur cet élément.
   *
   * C'est ce qui empêche une relance de se répéter tous les jours une fois traitée.
   * Ce champ non plus n'est jamais passé aux règles de classement : il alimente les
   * suivis, que le cœur lit pour décider ce qui remonte.
   */
  relanceLe?: string | null;
}

/** Les suivis, tels que le cœur les attend, tirés des éléments stockés. */
export function suivisDe(elements: ElementStocke[]): { elementId: string; derniereNouvelle: string }[] {
  return elements
    .filter((e): e is ElementStocke & { relanceLe: string } => Boolean(e.relanceLe))
    .map((e) => ({ elementId: e.id, derniereNouvelle: e.relanceLe }));
}

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
  /**
   * Combien de fois la transcription embarquée a été menée à son terme sur cet
   * audio — qu'elle ait rendu du texte ou rien.
   *
   * Absent ou zéro : pas encore essayée, la file s'en charge. Au-delà : ne pas
   * recommencer. Sans ce compte, un enregistrement où rien n'est reconnu serait
   * retranscrit à chaque ouverture, pour rien.
   */
  essaisTranscription?: number;
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
  return tout.filter(analysable).sort((a, b) => a.creeLe.localeCompare(b.creeLe));
}

/** Une capture qui porte du texte exploitable et n'a pas encore été analysée. */
function analysable(c: Capture): boolean {
  return !c.analysee && c.etatTranscription === 'OK' && c.texte.trim() !== '';
}

/**
 * Une capture vocale dont l'audio attend la transcription embarquée : pas de texte,
 * pas encore analysée, et le moteur ne l'a pas encore tentée jusqu'au bout.
 */
export function aTranscrire(c: Capture): boolean {
  return (
    !c.analysee &&
    c.source === 'VOCALE' &&
    c.audio !== null &&
    c.texte.trim() === '' &&
    (c.essaisTranscription ?? 0) < 1
  );
}

/** Les captures que la transcription embarquée doit traiter, plus anciennes d'abord. */
export async function capturesATranscrire(): Promise<Capture[]> {
  const tout = await listerCaptures();
  return tout.filter(aTranscrire).sort((a, b) => a.creeLe.localeCompare(b.creeLe));
}

/**
 * Les captures en souffrance : déposées, conservées, mais dont rien ne sortira.
 *
 * Une dictée où rien n'a été reconnu ne produit aucun texte, donc aucun élément,
 * donc rien en Revue. L'audio est bien là — mais sans ce relevé la capture
 * n'apparaît nulle part, et la Revue affiche « rien à ranger » alors que quelque
 * chose attend. C'est la promesse du produit qui se casse en silence : on a dit
 * « tu peux oublier », et l'utilisateur aurait oublié pour de bon.
 *
 * Une capture que la transcription embarquée n'a pas encore tentée n'est pas en
 * souffrance : elle est en file, et va être lue.
 */
export async function capturesEnSouffrance(): Promise<Capture[]> {
  const tout = await listerCaptures();
  return tout
    .filter((c) => !c.analysee && !analysable(c) && !aTranscrire(c))
    .sort((a, b) => b.creeLe.localeCompare(a.creeLe));
}

/**
 * Supprime une capture et tout ce qui en découle.
 *
 * Le seul endroit du produit où une source disparaît, et il faut que ce soit un geste
 * explicite de l'utilisateur : la couche source est immuable, pas indestructible.
 */
export async function supprimerCapture(id: string): Promise<void> {
  await transaction([MAGASIN_CAPTURES, MAGASIN_ELEMENTS], 'readwrite', async ([captures, elements]) => {
    const derives = await demander<ElementStocke[]>(
      elements.index('captureId').getAll(IDBKeyRange.only(id)),
    );
    for (const derive of derives) elements.delete(derive.id);
    captures.delete(id);
  });
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
    const anciens = await demander<ElementStocke[]>(index.getAll(IDBKeyRange.only(captureId)));
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
  ajustement: Partial<ElementStocke>,
): Promise<ElementStocke> {
  return transaction([MAGASIN_ELEMENTS], 'readwrite', async ([elements]) => {
    const existant = await demander<ElementStocke | undefined>(elements.get(id));
    if (!existant) throw new Error(`Élément introuvable : ${id}`);
    const fusionne: ElementStocke = { ...existant, ...ajustement, id: existant.id };
    elements.put(fusionne);
    return fusionne;
  });
}

export function listerElements(): Promise<ElementStocke[]> {
  return transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementStocke[]>(elements.getAll()),
  );
}

/** Les éléments encore en jeu : tout sauf ceux que l'utilisateur a marqués faits. */
export async function listerElementsActifs(): Promise<ElementJson[]> {
  const tout = await listerElements();
  return tout.filter((e) => !e.faitLe);
}

export function elementsDeCapture(captureId: string): Promise<ElementStocke[]> {
  return transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementStocke[]>(elements.index('captureId').getAll(IDBKeyRange.only(captureId))),
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
