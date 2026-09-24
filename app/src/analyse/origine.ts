/**
 * Ce que l'origine d'un élément change à sa Revue.
 *
 * Spec `analyse-distante` — « Confiance sous le seuil ». Un type rendu par le service
 * distant avec une confiance sous le seuil devient une question, comme une échéance
 * ou un poids incertains : l'élément est marqué « à confirmer », sort de
 * l'acceptation groupée, et aucun rappel n'est posé tant qu'un humain ne l'a pas
 * accepté.
 *
 * Voir `design.md` de la change `analyse-typesafe`, décision 5 : la règle ne vaut
 * que pour l'origine `TYPESAFE`, seule à porter une confiance calibrée. Elle vit ici
 * et non dans le cœur tant que celui-ci ne connaît pas ces champs.
 */

import { SEUIL_CONFIANCE, type ElementJson, type RevueJson } from '../core/regles.ts';

/** Le type de cet élément doit-il être confirmé avant d'être tenu pour acquis ? */
export function typeAConfirmer(e: ElementJson): boolean {
  if (e.corrigeParHumain) return false;
  if (e.origineAnalyse?.moteur !== 'TYPESAFE') return false;
  return e.typeConfiance != null && e.typeConfiance < SEUIL_CONFIANCE;
}

/** Même ordre que `Urgence` dans le cœur : la plus pressante d'abord. */
const ORDRE_URGENCE = ['DEPASSEE', 'AUJOURD_HUI', 'DEMAIN', 'CETTE_SEMAINE', 'PLUS_TARD', 'AUCUNE'];

function rangUrgence(urgence: string): number {
  const rang = ORDRE_URGENCE.indexOf(urgence);
  return rang === -1 ? Number.MAX_SAFE_INTEGER : rang;
}

/**
 * Complète la file de Revue rendue par le cœur.
 *
 * Le cœur perd les champs qu'il ne connaît pas : ils sont rattachés depuis les
 * éléments d'origine, par identifiant. Un type à confirmer s'ajoute ensuite aux
 * doutes que le cœur a déjà reconnus, et chaque groupe est retrié comme le cœur le
 * fait — l'urgent, puis l'incertain.
 */
export function completerRevue(file: RevueJson, elements: ElementJson[]): RevueJson {
  const parId = new Map(elements.map((e) => [e.id, e]));
  return {
    ...file,
    groupes: file.groupes.map((groupe) => ({
      ...groupe,
      entrees: groupe.entrees
        .map((entree) => {
          const origine = parId.get(entree.element.id);
          if (!origine) return entree;
          return {
            ...entree,
            element: {
              ...entree.element,
              typeConfiance: origine.typeConfiance,
              sphereConfiance: origine.sphereConfiance,
              origineAnalyse: origine.origineAnalyse,
            },
            aConfirmer: entree.aConfirmer || typeAConfirmer(origine),
          };
        })
        .sort(
          (a, b) =>
            rangUrgence(a.urgence) - rangUrgence(b.urgence) ||
            Number(b.aConfirmer) - Number(a.aConfirmer) ||
            (a.element.id < b.element.id ? -1 : a.element.id > b.element.id ? 1 : 0),
        ),
    })),
  };
}
