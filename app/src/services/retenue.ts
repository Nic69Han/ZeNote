/**
 * La retenue : se faire plus rare quand une suggestion ne sert pas.
 *
 * Spec `suggestions-proactives` — « Retenue après suggestions ignorées ». Une aide non
 * demandée fait gagner du temps et interrompt le travail ; l'interruption ne se
 * justifie que tant que l'aide sert. Ce module compte, pour chaque sorte de
 * suggestion, les présentations laissées passer d'affilée, et en déduit à quelle
 * cadence la sorte se présente encore.
 *
 * ## Ce qui est compté, et ce qui ne l'est pas
 *
 * Une présentation est **ignorée** quand elle s'efface sans avoir été touchée, et
 * **utilisée** quand on l'ouvre ou qu'on y répond. Rien d'autre : ni temps passé, ni
 * défilement, ni regard. Ces compteurs ne disent rien de ce qui se trouvait dans la
 * suggestion — deux entiers par sorte, pas un mot d'une note — ce qui les autorise à
 * vivre dans les réglages, qui ne sont pas scellés.
 *
 * Une occasion **sautée** (la sorte est espacée, on ne présente rien) n'est pas une
 * présentation ignorée : personne n'a rien vu, donc rien n'a été laissé passer.
 *
 * ## Pas de reproche
 *
 * La cadence se lit dans Réglages comme un constat sur la suggestion (« elle ne vient
 * plus qu'une fois sur deux »), jamais sur celui qui ne l'a pas ouverte. Un seul geste
 * — utiliser une suggestion, ou le bouton des réglages — rétablit le rythme normal.
 *
 * Les fonctions du haut du fichier sont pures : elles reçoivent un état et en
 * rendent un neuf, sans base. Celles du bas le lisent et l'écrivent dans les
 * réglages, à la file pour qu'aucune écriture n'en écrase une autre.
 */

import { ecrireReglage, lireReglages } from '../stockage/depot.ts';

/** Les sortes de suggestion non demandée que le produit présente aujourd'hui. */
export type SorteSuggestion = 'PASSE_PERTINENT' | 'PISTES_ECHANGE';

export const SORTES_SUGGESTION: readonly SorteSuggestion[] = ['PASSE_PERTINENT', 'PISTES_ECHANGE'];

/** Ce que la retenue sait d'une sorte : deux entiers, jamais un texte de note. */
export interface CompteurRetenue {
  /** Présentations laissées passer d'affilée depuis la dernière utilisée. */
  ignoreesDAffilee: number;
  /** Occasions sautées depuis la dernière présentation, pour espacer sans hasard. */
  presentationsSautees: number;
}

export type EtatRetenue = Record<SorteSuggestion, CompteurRetenue>;

/** Le nom d'une sorte, tel que les réglages le disent. */
export const LIBELLE_SORTE: Record<SorteSuggestion, string> = {
  PASSE_PERTINENT: 'Rappel du passé sur un sujet déjà traité',
  PISTES_ECHANGE: 'Pistes pour une note qui renvoie à un échange',
};

/** À partir de combien de présentations ignorées d'affilée une sorte s'espace. */
export const IGNOREES_AVANT_RETENUE = 3;

/** Le rythme le plus lent : une occasion sur huit, jamais moins. */
export const INTERVALLE_MAXIMUM = 8;

export function retenueInitiale(): EtatRetenue {
  return {
    PASSE_PERTINENT: { ignoreesDAffilee: 0, presentationsSautees: 0 },
    PISTES_ECHANGE: { ignoreesDAffilee: 0, presentationsSautees: 0 },
  };
}

/**
 * Relit un état venu des réglages, éventuellement absent, partiel ou d'une version
 * plus ancienne : ce qui manque est remis à zéro, ce qui n'a pas de sens aussi.
 */
export function normaliser(brut: unknown): EtatRetenue {
  const etat = retenueInitiale();
  if (typeof brut !== 'object' || brut === null) return etat;
  for (const sorte of SORTES_SUGGESTION) {
    const compteur = (brut as Partial<Record<SorteSuggestion, Partial<CompteurRetenue>>>)[sorte];
    const entier = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v > 0 ? Math.floor(v) : 0);
    etat[sorte] = {
      ignoreesDAffilee: entier(compteur?.ignoreesDAffilee),
      presentationsSautees: entier(compteur?.presentationsSautees),
    };
  }
  return etat;
}

/**
 * Une occasion sur combien, selon les présentations ignorées d'affilée.
 *
 * Sous trois : chaque occasion. De trois à cinq : une sur deux. De six à huit : une
 * sur quatre. Au-delà : une sur huit, et pas moins — se taire tout à fait ferait
 * disparaître une aide qui pourrait resservir, sans que rien ne le dise.
 */
export function intervalle(ignoreesDAffilee: number): 1 | 2 | 4 | 8 {
  if (ignoreesDAffilee < IGNOREES_AVANT_RETENUE) return 1;
  if (ignoreesDAffilee < 6) return 2;
  if (ignoreesDAffilee < 9) return 4;
  return INTERVALLE_MAXIMUM;
}

/**
 * Cette occasion mérite-t-elle une présentation ?
 *
 * Déterministe, sans tirage au sort : « une fois sur deux » est vérifiable, et une
 * suggestion qui apparaîtrait au hasard donnerait l'impression d'un outil capricieux.
 * L'état rendu est à conserver, que l'on présente ou non : l'occasion sautée compte.
 */
export function doitPresenter(
  etat: EtatRetenue,
  sorte: SorteSuggestion,
): { presenter: boolean; etat: EtatRetenue } {
  const compteur = etat[sorte];
  const attendu = intervalle(compteur.ignoreesDAffilee);
  if (compteur.presentationsSautees + 1 >= attendu) {
    return { presenter: true, etat: avec(etat, sorte, { presentationsSautees: 0 }) };
  }
  return {
    presenter: false,
    etat: avec(etat, sorte, { presentationsSautees: compteur.presentationsSautees + 1 }),
  };
}

/** Une présentation s'est effacée sans qu'on y touche. */
export function noterIgnoree(etat: EtatRetenue, sorte: SorteSuggestion): EtatRetenue {
  return avec(etat, sorte, { ignoreesDAffilee: etat[sorte].ignoreesDAffilee + 1 });
}

/** Une suggestion a servi : le rythme normal revient, pour cette sorte. */
export function noterUtilisee(etat: EtatRetenue, sorte: SorteSuggestion): EtatRetenue {
  return avec(etat, sorte, { ignoreesDAffilee: 0, presentationsSautees: 0 });
}

/** Le geste des réglages : une sorte, ou toutes, repart du rythme normal. */
export function revenirAuRythmeNormal(etat: EtatRetenue, sorte?: SorteSuggestion): EtatRetenue {
  if (sorte) return noterUtilisee(etat, sorte);
  return retenueInitiale();
}

/** Le rythme courant d'une sorte, et de quoi le dire en clair. */
export function rythme(
  etat: EtatRetenue,
  sorte: SorteSuggestion,
): { intervalle: 1 | 2 | 4 | 8; espacee: boolean; libelle: string } {
  const n = intervalle(etat[sorte].ignoreesDAffilee);
  if (n === 1) return { intervalle: n, espacee: false, libelle: 'Rythme normal.' };
  return {
    intervalle: n,
    espacee: true,
    libelle:
      n === 2
        ? 'Espacée : elle ne se présente plus qu’une fois sur deux.'
        : `Espacée : elle ne se présente plus qu’une fois sur ${n === 4 ? 'quatre' : 'huit'}.`,
  };
}

function avec(
  etat: EtatRetenue,
  sorte: SorteSuggestion,
  changement: Partial<CompteurRetenue>,
): EtatRetenue {
  return { ...etat, [sorte]: { ...etat[sorte], ...changement } };
}

// ------------------------------------------------------------------ dans les réglages

/**
 * Les écritures passent l'une après l'autre. Une présentation qui s'efface et une
 * occasion qui se présente peuvent tomber au même instant : sans file, la seconde
 * lirait l'état d'avant la première et l'écraserait.
 */
let file: Promise<unknown> = Promise.resolve();

function modifier<T>(operation: (etat: EtatRetenue) => { etat: EtatRetenue; valeur: T }): Promise<T> {
  const suite = file.then(async () => {
    const courant = normaliser((await lireReglages()).retenue);
    const { etat, valeur } = operation(courant);
    await ecrireReglage('retenue', etat);
    return valeur;
  });
  file = suite.catch(() => undefined);
  return suite;
}

export async function lireRetenue(): Promise<EtatRetenue> {
  await file;
  return normaliser((await lireReglages()).retenue);
}

/** À appeler quand une occasion de présenter se produit : répond, et compte l'occasion. */
export function presenterMaintenant(sorte: SorteSuggestion): Promise<boolean> {
  return modifier((etat) => {
    const { presenter, etat: suivant } = doitPresenter(etat, sorte);
    return { etat: suivant, valeur: presenter };
  });
}

export function signalerIgnoree(sorte: SorteSuggestion): Promise<void> {
  return modifier((etat) => ({ etat: noterIgnoree(etat, sorte), valeur: undefined }));
}

export function signalerUtilisee(sorte: SorteSuggestion): Promise<void> {
  return modifier((etat) => ({ etat: noterUtilisee(etat, sorte), valeur: undefined }));
}

export function remettreRythmeNormal(sorte?: SorteSuggestion): Promise<void> {
  return modifier((etat) => ({ etat: revenirAuRythmeNormal(etat, sorte), valeur: undefined }));
}
