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

/**
 * D'où vient cet élément, en clair. Spec `analyse-distante` — « Origine consultable ».
 * `null` pour un élément antérieur à ce champ : on ne prétend pas savoir.
 */
export function origineLisible(e: ElementJson): string | null {
  const o = e.origineAnalyse;
  if (!o) return null;
  if (o.moteur === 'LOCAL') return 'analyse sur l’appareil';
  return o.modele ? `service d’analyse distant (${o.modele})` : 'service d’analyse distant';
}

/**
 * L'avis d'état dégradé, une seule fois pour toute la Revue — ou rien.
 *
 * Décision 6 : le repli n'est jamais une erreur, seulement un fait à savoir. Il
 * n'est dit que si l'analyse distante est allumée (sinon, analyser sur l'appareil
 * est la règle, pas un repli) et seulement pour les captures présentes en Revue.
 */
export function avisRepli(
  captures: { id: string; repliAnalyse?: boolean }[],
  capturesEnRevue: string[],
  analyseDistante: boolean,
): string | null {
  if (!analyseDistante) return null;
  const presentes = new Set(capturesEnRevue);
  const n = captures.filter((c) => c.repliAnalyse === true && presentes.has(c.id)).length;
  if (n === 0) return null;
  const sujet = n === 1 ? '1 note a été analysée' : `${n} notes ont été analysées`;
  return `${sujet} sur l’appareil : le service d’analyse n’était pas disponible.`;
}
