/**
 * Les questions déjà posées : les retenir, les proposer, les oublier.
 *
 * Spec `recherches-passees` — « Questions retenues » et « Oubli à la demande ». Jusqu'à
 * 40 % des requêtes servent à retrouver quelque chose de déjà vu (Teevan, Adar, Jones &
 * Potts, SIGIR 2007) ; ZeNote oubliait chaque question dès qu'elle était posée.
 *
 * Le stockage — une ligne scellée comme le lexique, rescellée à l'activation du coffre —
 * vit dans le dépôt. Ce module ne décide que de ce qui se retient : au plus vingt
 * questions, chacune une seule fois, la plus récente d'abord.
 *
 * ## Une question sans réponse fondée est retenue aussi
 *
 * C'est souvent celle qu'on repose : le mot qu'on cherchait n'y était pas, on l'a
 * remplacé, ou la note n'a pas encore été écrite. Le module ne regarde donc jamais ce
 * que la recherche a rendu.
 */

import {
  ecrireRecherches,
  lireRecherches,
  type RechercheRetenue,
} from '../stockage/depot.ts';

export type { RechercheRetenue };
export type ModeRecherche = RechercheRetenue['mode'];

/** Au-delà, la plus ancienne question est oubliée : une liste qui grandit sans fin ne se relit plus. */
export const MAX_RECHERCHES = 20;

/** Combien de questions le champ de recherche propose. */
export const RECENTES_PROPOSEES = 5;

/**
 * Ce qui fait de deux questions la même : la casse et les espaces ne comptent pas.
 *
 * Les accents comptent : « élève » et « eleve » sont deux façons d'écrire, et la
 * plus récente doit se relancer telle que l'utilisateur l'a tapée. Le mode compte
 * aussi — « Karim » cherché par personne n'est pas « Karim » cherché par mots.
 */
export function cleDe(requete: string, mode: ModeRecherche): string {
  return `${mode}:${requete.trim().replace(/\s+/g, ' ').toLocaleLowerCase('fr')}`;
}

/**
 * Deux écritures qui se croisent — une question posée pendant qu'une autre s'écrit —
 * perdraient l'une des deux. Elles passent donc l'une après l'autre.
 */
let file: Promise<unknown> = Promise.resolve();

function enFile<T>(travail: () => Promise<T>): Promise<T> {
  const suite = file.then(travail, travail);
  file = suite.catch(() => {});
  return suite;
}

/**
 * Retient cette question. Si elle l'était déjà (à la casse et aux espaces près), elle
 * n'apparaît qu'une fois, à sa date la plus récente, avec sa graphie la plus récente.
 *
 * @returns la liste après retenue, de la plus récente à la plus ancienne.
 */
export function retenir(
  requete: string,
  mode: ModeRecherche,
  maintenant: Date = new Date(),
): Promise<RechercheRetenue[]> {
  const propre = requete.trim().replace(/\s+/g, ' ');
  if (propre === '') return recentes(MAX_RECHERCHES);

  return enFile(async () => {
    // Lecture stricte : si l'historique existe mais ne peut pas s'ouvrir (coffre
    // verrouillé), écrire par-dessus l'effacerait pour une seule question.
    const connues = await lireRecherches(true);
    const cle = cleDe(propre, mode);
    const avant = connues.find((r) => cleDe(r.requete, r.mode) === cle);
    const nouvelle: RechercheRetenue = {
      requete: propre,
      mode,
      derniereFois: maintenant.toISOString(),
      fois: (avant?.fois ?? 0) + 1,
    };
    const liste = [
      nouvelle,
      ...connues.filter((r) => cleDe(r.requete, r.mode) !== cle),
    ].slice(0, MAX_RECHERCHES);
    await ecrireRecherches(liste);
    return liste;
  });
}

/** Les questions retenues, de la plus récente à la plus ancienne, au plus `combien`. */
export async function recentes(combien: number = RECENTES_PROPOSEES): Promise<RechercheRetenue[]> {
  const liste = await lireRecherches();
  return [...liste].sort((a, b) => b.derniereFois.localeCompare(a.derniereFois)).slice(0, combien);
}

/** Oublie cette question, dans ce mode. Ne fait rien si elle n'était pas retenue. */
export function oublier(requete: string, mode: ModeRecherche): Promise<RechercheRetenue[]> {
  return enFile(async () => {
    const cle = cleDe(requete, mode);
    const connues = await lireRecherches(true);
    const restantes = connues.filter((r) => cleDe(r.requete, r.mode) !== cle);
    if (restantes.length !== connues.length) await ecrireRecherches(restantes);
    return restantes;
  });
}

/** Oublie toutes les questions retenues. */
export function toutOublier(): Promise<void> {
  return enFile(() => ecrireRecherches([]));
}
