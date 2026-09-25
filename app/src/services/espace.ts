/**
 * Quand la place manque.
 *
 * Un navigateur refuse l'écriture avant d'être vraiment plein — le quota d'un site
 * est une fraction du disque. Le refus arrive donc alors qu'il reste de la place, et
 * dire « libérez de l'espace » sans plus serait renvoyer l'utilisateur vers les
 * réglages du système pour un problème que l'application peut résoudre elle-même.
 *
 * Ce qui remplit ZeNote, ce sont les enregistrements. Sur une capture déjà
 * transcrite, le texte porte la note et l'audio n'est plus qu'un recours : c'est
 * exactement ce dont on peut se défaire pour continuer à capturer. Jamais
 * automatiquement — l'écran le demande, et dit ce qui se perd.
 */

import { listerCaptures, retirerAudio } from '../stockage/depot.ts';

/** Ce qu'on peut rendre, et ce que cela coûte. */
export interface EspaceLiberable {
  captureIds: string[];
  octets: number;
}

/**
 * Les enregistrements dont on peut se défaire sans perdre de note.
 *
 * Seulement les captures déjà analysées : leur texte existe, et les éléments qui en
 * découlent aussi. Une capture pas encore transcrite n'a que son audio — s'en
 * défaire la ferait disparaître.
 */
export async function espaceLiberable(): Promise<EspaceLiberable> {
  const captures = (await listerCaptures()).filter(
    (c) => c.aAudio && c.analysee && c.texte.trim() !== '',
  );
  return {
    captureIds: captures.map((c) => c.id),
    octets: captures.reduce((total, c) => total + (c.audioOctets ?? 0), 0),
  };
}

/**
 * Retire les enregistrements désignés.
 *
 * @returns le nombre d'enregistrements réellement retirés.
 */
export async function libererEspace(captureIds: string[]): Promise<number> {
  let retires = 0;
  for (const id of captureIds) {
    await retirerAudio(id);
    retires += 1;
  }
  return retires;
}

/** Ce refus d'écriture est-il un manque de place ? */
export function estManqueDePlace(erreur: unknown): boolean {
  if (!erreur || typeof erreur !== 'object') return false;
  const nom = (erreur as { name?: string }).name;
  // `QuotaExceededError` est le nom normalisé ; Firefox a longtemps rendu le sien.
  return nom === 'QuotaExceededError' || nom === 'NS_ERROR_DOM_QUOTA_REACHED';
}
