/**
 * Le chemin d'une capture : écriture d'abord, analyse ensuite.
 *
 * L'analyse n'est jamais sur le chemin critique de la capture (`design.md` — décision 1) :
 * elle est rejouée en arrière-plan, et son échec ne coûte rien à l'utilisateur, la
 * capture restant lisible et réanalysable.
 */

import { analyser } from '../analyse/index.ts';
import { identifiant } from '../analyse/index.ts';
import type { Capture, EtatTranscription, SourceCapture } from '../stockage/depot.ts';
import {
  capturesAAnalyser,
  enregistrerCapture,
  majCapture,
  remplacerElements,
} from '../stockage/depot.ts';

/** Date du jour au format ISO `AAAA-MM-JJ`, en heure locale. */
export function aujourdhui(maintenant: Date = new Date()): string {
  const decale = new Date(maintenant.getTime() - maintenant.getTimezoneOffset() * 60_000);
  return decale.toISOString().slice(0, 10);
}

export interface NouvelleCapture {
  texte: string;
  source: SourceCapture;
  etatTranscription: EtatTranscription;
  audio?: Blob | null;
  dureeMs?: number | null;
  incomplete?: boolean;
}

/**
 * Écrit une capture et ne rend la main qu'une fois l'écriture durable confirmée.
 *
 * Aucun champ n'est demandé : ni titre, ni dossier, ni date, ni priorité.
 */
export async function capturer(entree: NouvelleCapture): Promise<Capture> {
  const capture: Capture = {
    id: identifiant('cap'),
    creeLe: new Date().toISOString(),
    source: entree.source,
    texte: entree.texte.trim(),
    etatTranscription: entree.etatTranscription,
    dureeMs: entree.dureeMs ?? null,
    audio: entree.audio ?? null,
    incomplete: entree.incomplete ?? false,
    analysee: false,
  };
  return enregistrerCapture(capture);
}

/**
 * Analyse une capture et remplace sa couche dérivée.
 *
 * Idempotent : rejouer l'analyse ne crée pas de doublon et ne touche ni à la source
 * ni aux décisions déjà prises par l'utilisateur.
 */
export async function analyserCapture(capture: Capture, jour = aujourdhui()): Promise<number> {
  const { elements } = analyser(capture.texte, capture.id, jour, capture.dureeMs);
  await remplacerElements(capture.id, elements);
  await majCapture(capture.id, { analysee: true });
  return elements.length;
}

/** Vide la file d'analyse, dans l'ordre de capture. Sûr à rappeler à tout moment. */
export async function traiterFileAnalyse(jour = aujourdhui()): Promise<number> {
  const enAttente = await capturesAAnalyser();
  let produits = 0;
  for (const capture of enAttente) {
    try {
      produits += await analyserCapture(capture, jour);
    } catch {
      // Un échec d'analyse ne perd rien : la capture reste lisible et réanalysable.
    }
  }
  return produits;
}
