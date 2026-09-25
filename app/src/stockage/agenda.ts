/**
 * L'agenda importé, tel qu'il est gardé sur l'appareil.
 *
 * Change `agenda-local`, décision 3 ; spec `agenda` — « Conservation et effacement de
 * l'agenda » et « Fraîcheur de l'agenda dite ». Une ligne par occurrence, déjà
 * développée. Le titre, le lieu et les participants sont scellés comme une note
 * quand le coffre existe ; l'identifiant et les bornes horaires restent en clair, pour
 * l'index par date.
 *
 * L'agenda est une copie d'une source externe : il se remplace entièrement à chaque
 * import, s'efface d'un geste, et ne touche jamais aux notes.
 */

import type { EvenementJson } from '../core/regles.ts';
import type { ResultatLecture } from '../agenda/ics.ts';
import { assurerCoffreCharge, ouvrirValeur, scellerValeur, type Scelle } from '../securite/coffre.ts';
import { MAGASIN_EVENEMENTS, demander, transaction } from './base.ts';

/** Au-delà, l'agenda est dit périmé en Revue, une fois. */
export const AGENDA_PERIME_APRES_JOURS = 7;

/** Ce que l'on sait de l'import en cours. Rien de sensible : des dates et des nombres. */
export interface EtatAgenda {
  /** Horodatage ISO de l'import. */
  importeLe: string;
  /** Bornes de couverture, en heure locale `AAAA-MM-JJTHH:MM`. */
  couvreDepuis: string;
  couvreJusqua: string;
  lus: number;
  occurrences: number;
  ecartes: { raison: string; nombre: number }[];
  recurrencesNonComprises: number;
}

const CLE_ETAT = '__etat__';

/** Ce qui est scellé d'un événement : tout ce qui dit de qui et de quoi il s'agit. */
type ContenuEvenement = Omit<EvenementJson, 'id' | 'debut' | 'fin'>;

interface EvenementBrut extends Partial<ContenuEvenement> {
  id: string;
  debut: string;
  fin: string;
  scelle?: Scelle;
}

interface EtatBrut {
  id: typeof CLE_ETAT;
  etat: EtatAgenda;
}

async function chiffre(): Promise<boolean> {
  return (await assurerCoffreCharge()) !== 'ABSENT';
}

async function versStockage(e: EvenementJson, enClair: boolean): Promise<EvenementBrut> {
  const { id, debut, fin, ...contenu } = e;
  if (enClair) return { id, debut, fin, ...contenu };
  return { id, debut, fin, scelle: await scellerValeur(contenu) };
}

async function depuisStockage(brut: EvenementBrut): Promise<EvenementJson> {
  const { id, debut, fin } = brut;
  if (!brut.scelle) {
    const { scelle: _scelle, ...clair } = brut;
    return clair as EvenementJson;
  }
  return { id, debut, fin, ...(await ouvrirValeur<ContenuEvenement>(brut.scelle)) };
}

/**
 * Remplace l'agenda par celui-ci, en une seule transaction : un import interrompu
 * laisse l'ancien agenda entier, jamais un mélange des deux.
 */
export async function importerAgenda(lecture: ResultatLecture, importeLe: Date = new Date()): Promise<EtatAgenda> {
  const enClair = !(await chiffre());
  const bruts: EvenementBrut[] = [];
  for (const e of lecture.evenements) bruts.push(await versStockage(e, enClair));

  const etat: EtatAgenda = {
    importeLe: importeLe.toISOString(),
    couvreDepuis: lecture.couvreDepuis,
    couvreJusqua: lecture.couvreJusqua,
    lus: lecture.lus,
    occurrences: lecture.evenements.length,
    ecartes: lecture.ecartes,
    recurrencesNonComprises: lecture.recurrencesNonComprises,
  };
  await transaction([MAGASIN_EVENEMENTS], 'readwrite', ([evenements]) => {
    evenements.clear();
    for (const brut of bruts) evenements.put(brut);
    evenements.put({ id: CLE_ETAT, etat } satisfies EtatBrut);
  });
  return etat;
}

/** L'état de l'import, ou `null` si aucun agenda n'a été importé. */
export async function etatAgenda(): Promise<EtatAgenda | null> {
  const brut = await transaction([MAGASIN_EVENEMENTS], 'readonly', ([evenements]) =>
    demander<EtatBrut | undefined>(evenements.get(CLE_ETAT)),
  );
  return brut?.etat ?? null;
}

/**
 * Les événements connus entre deux bornes locales `AAAA-MM-JJTHH:MM`, et seulement
 * dans la couverture de l'import : au-delà, l'agenda ne sait rien, et le dire vaut
 * mieux que d'inventer une journée vide.
 *
 * Coffre fermé : rend une liste vide plutôt que de lever. Sans agenda lisible,
 * l'application se comporte comme sans agenda — c'est le mode dégradé attendu.
 */
export async function lireEvenements(depuis?: string, jusqua?: string): Promise<EvenementJson[]> {
  const etat = await etatAgenda();
  if (!etat) return [];
  const bas = [depuis, etat.couvreDepuis].filter((x): x is string => !!x).sort().at(-1)!;
  const haut = [jusqua, etat.couvreJusqua].filter((x): x is string => !!x).sort()[0];
  if (bas > haut) return [];

  const bruts = await transaction([MAGASIN_EVENEMENTS], 'readonly', ([evenements]) =>
    demander<EvenementBrut[]>(evenements.index('debut').getAll(IDBKeyRange.bound(bas, haut))),
  );
  try {
    const lus: EvenementJson[] = [];
    for (const brut of bruts) lus.push(await depuisStockage(brut));
    return lus;
  } catch {
    return [];
  }
}

/** Efface l'agenda, et lui seul : les notes et leurs rattachements restent. */
export async function effacerAgenda(): Promise<void> {
  await transaction([MAGASIN_EVENEMENTS], 'readwrite', ([evenements]) => {
    evenements.clear();
  });
}

/**
 * Réécrit l'agenda dans le mode du dépôt : scellé si le coffre existe, en clair
 * sinon. Sert à l'activation et à la levée du chiffrement.
 *
 * @param enClair forcer l'écriture en clair — la levée du chiffrement réécrit tout en
 *   clair avant de supprimer le coffre.
 */
export async function reecrireAgenda(enClair?: boolean): Promise<void> {
  const clair = enClair ?? !(await chiffre());
  const bruts = await transaction([MAGASIN_EVENEMENTS], 'readonly', ([evenements]) =>
    demander<(EvenementBrut | EtatBrut)[]>(evenements.getAll()),
  );
  const reecrits: EvenementBrut[] = [];
  for (const brut of bruts) {
    if (brut.id === CLE_ETAT) continue;
    reecrits.push(await versStockage(await depuisStockage(brut as EvenementBrut), clair));
  }
  await transaction([MAGASIN_EVENEMENTS], 'readwrite', ([evenements]) => {
    for (const brut of reecrits) evenements.put(brut);
  });
}

/**
 * L'agenda est-il périmé à [maintenant] ?
 *
 * Périmé s'il date de plus de [AGENDA_PERIME_APRES_JOURS] jours, ou si sa couverture
 * est dépassée. Sans agenda, rien n'est périmé : il n'y a rien à dire.
 */
export function agendaPerime(etat: EtatAgenda | null, maintenant: Date, maintenantLocal: string): boolean {
  if (!etat) return false;
  const age = maintenant.getTime() - new Date(etat.importeLe).getTime();
  return age > AGENDA_PERIME_APRES_JOURS * 86_400_000 || maintenantLocal > etat.couvreJusqua;
}
