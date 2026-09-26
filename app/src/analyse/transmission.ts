/**
 * Ce qui a le droit de sortir de l'appareil pour être analysé.
 *
 * Spec `analyse-distante` — « Transmission conditionnée au consentement ». Une
 * fonction pure, décidée **avant** tout envoi et sur l'appareil seulement : le
 * service distant ne voit jamais une capture qu'il aurait fallu garder.
 *
 * Voir `design.md` de la change `analyse-typesafe`, décision 4 : la sphère d'une
 * capture est jugée ici, localement, puisque c'est justement le service distant qui
 * la jugerait sinon — et qu'il faudrait lui envoyer le texte pour le savoir.
 */

import type { Capture, Reglages } from '../stockage/depot.ts';
import { repererSphere } from './index.ts';

export type RaisonNonTransmise =
  /** Personne n'est connecté avec un compte : l'analyse distante est interdite. */
  | 'COMPTE_REQUIS'
  /** Le réglage d'analyse distante est éteint : rien ne sort, pour aucune capture. */
  | 'ANALYSE_DISTANTE_ETEINTE'
  /** L'utilisateur a marqué cette capture comme à garder sur l'appareil. */
  | 'CAPTURE_NON_TRANSMISSIBLE'
  /** La capture relève d'une sphère exclue de l'analyse distante. */
  | 'SPHERE_EXCLUE'
  /** Une exclusion est active et la sphère de la capture ne se décide pas ici. */
  | 'SPHERE_INDECIDABLE';

export type DecisionTransmission =
  | { transmettre: true }
  | { transmettre: false; raison: RaisonNonTransmise };

/**
 * Dit si une capture peut partir à l'analyse distante.
 *
 * L'ordre compte seulement pour la raison rendue : chacune des cinq suffit à
 * garder la capture sur l'appareil.
 *
 * @param connecte un utilisateur est connecté avec un compte (`compteConnecte`)
 */
export function peutTransmettre(
  capture: Pick<Capture, 'texte' | 'transmissible'>,
  reglages: Pick<Reglages, 'analyseDistante' | 'spheresExclues'>,
  connecte: boolean,
): DecisionTransmission {
  if (!connecte) {
    return { transmettre: false, raison: 'COMPTE_REQUIS' };
  }
  if (!reglages.analyseDistante) {
    return { transmettre: false, raison: 'ANALYSE_DISTANTE_ETEINTE' };
  }
  if (capture.transmissible === false) {
    return { transmettre: false, raison: 'CAPTURE_NON_TRANSMISSIBLE' };
  }
  if (reglages.spheresExclues.length > 0) {
    const sphere = repererSphere(capture.texte);
    if (sphere == null) {
      // Le doute se tranche du côté de la vie privée : envoyer une capture
      // personnelle que l'analyseur local n'a pas reconnue violerait l'exclusion.
      return { transmettre: false, raison: 'SPHERE_INDECIDABLE' };
    }
    if (reglages.spheresExclues.includes(sphere)) {
      return { transmettre: false, raison: 'SPHERE_EXCLUE' };
    }
  }
  return { transmettre: true };
}
