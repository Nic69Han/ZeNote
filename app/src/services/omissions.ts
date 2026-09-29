/**
 * Les omissions d'un élément, vues depuis la surface.
 *
 * Spec `provenance` — « Omissions signalées ». Le cœur compare un élément à la phrase
 * dont il a été découpé (`omissionsObjets`) ; ce module fait le seul travail qui lui
 * revient : lui fournir les textes de capture, et dire ce que l'écran en fait.
 *
 *  - Un nombre ou un nom perdu est **signalé** (« la phrase d'origine dit aussi… »)
 *    sans bloquer : les noms coupés d'une phrase sont fréquents et bénins, les faire
 *    tous confirmer userait la question.
 *  - Une négation perdue **inverse** la phrase : l'élément passe en « à confirmer »,
 *    reste en attente — donc sans plan ni rappel, puisque le cœur ne planifie que des
 *    éléments acceptés — jusqu'à ce que l'utilisateur ait lu la phrase entière et
 *    l'ait confirmée, ou l'ait reprise.
 */

import {
  omissionsObjets,
  type ElementJson,
  type ManqueJson,
  type OmissionElementJson,
} from '../core/regles.ts';
import type { ElementStocke } from '../stockage/depot.ts';

/** Ce dont le calcul a besoin d'une capture : son identité et son texte brut. */
export interface TexteDeCapture {
  id: string;
  texte: string;
}

/**
 * Les omissions des éléments en attente, par identifiant d'élément.
 *
 * Seuls les éléments en attente sont évalués : ce qui a été tranché ne repasse pas en
 * Revue, et le cœur n'a pas à relire des captures pour rien. Une capture introuvable
 * (un élément ancien dont la source a disparu) ne produit rien — on n'affirme rien de
 * ce qu'on ne peut pas relire.
 */
export function omissionsDesElements(
  captures: TexteDeCapture[],
  elements: ElementJson[],
): Map<string, OmissionElementJson> {
  const textes = new Map(captures.map((c) => [c.id, c.texte]));
  const parCapture = new Map<string, ElementJson[]>();
  for (const element of elements) {
    if (element.verdict !== 'EN_ATTENTE') continue;
    const groupe = parCapture.get(element.captureId) ?? [];
    groupe.push(element);
    parCapture.set(element.captureId, groupe);
  }

  const resultat = new Map<string, OmissionElementJson>();
  for (const [captureId, groupe] of parCapture) {
    const texte = textes.get(captureId);
    if (texte === undefined) continue;
    for (const omission of omissionsObjets(texte, groupe)) {
      resultat.set(omission.elementId, omission);
    }
  }
  return resultat;
}

/** Les négations que l'élément a perdues : celles qui inversent la phrase. */
export function negationsPerdues(omission: OmissionElementJson | undefined): ManqueJson[] {
  return omission?.manques.filter((m) => m.nature === 'NEGATION') ?? [];
}

/**
 * Cet élément doit-il être confirmé avant d'être accepté ?
 *
 * Vrai tant qu'une négation manque et que l'utilisateur n'a pas dit avoir lu la
 * phrase entière (`omissionLevee`).
 */
export function negationAConfirmer(
  omission: OmissionElementJson | undefined,
  element: Pick<ElementStocke, 'omissionLevee'>,
): boolean {
  return !element.omissionLevee && negationsPerdues(omission).length > 0;
}

/** L'ensemble des éléments dont la négation perdue attend une confirmation. */
export function elementsANegationPerdue(
  omissions: Map<string, OmissionElementJson>,
  elements: ElementStocke[],
): Set<string> {
  return new Set(
    elements
      .filter((e) => negationAConfirmer(omissions.get(e.id), e))
      .map((e) => e.id),
  );
}

/** Une majuscule initiale sans toucher au reste : la même mise en forme que l'analyse. */
function presenter(texte: string): string {
  const propre = texte.replace(/\s+/g, ' ').trim();
  return propre.charAt(0).toUpperCase() + propre.slice(1);
}

/**
 * Ce que devient un élément qui reprend la phrase entière.
 *
 * Le passage s'élargit aux bornes de la phrase : il reste un passage exact de la
 * capture, donc l'ancrage tient, et la négation perdue n'en est plus une. Les repères
 * dans l'audio, estimés au prorata du texte, suivent le même prorata. Ni le type, ni
 * le poids, ni l'échéance ne sont recalculés : ils restent ce qu'ils étaient, et
 * `Ajuster` est là pour les corriger.
 */
export function ajustementPhraseEntiere(
  element: Pick<ElementStocke, 'debutCar' | 'finCar' | 'debutMs' | 'finMs'>,
  omission: OmissionElementJson,
): Partial<ElementStocke> {
  const prorata = (ms: number | null | undefined, avant: number, apres: number) =>
    typeof ms === 'number' && avant > 0 ? Math.round((ms * apres) / avant) : ms;

  return {
    texte: presenter(omission.phrase),
    debutCar: omission.debutPhrase,
    finCar: omission.finPhrase,
    debutMs: prorata(element.debutMs, element.debutCar, omission.debutPhrase),
    finMs: prorata(element.finMs, element.finCar, omission.finPhrase),
  };
}
