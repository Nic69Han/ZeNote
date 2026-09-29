/**
 * Où sont les pauses d'un enregistrement, et où sauter pour ne pas les subir.
 *
 * Spec `ecoute-acceleree` — « Silences raccourcis » : toute pause de plus de 700 ms est
 * sautée à la lecture en n'en gardant que 300 ms. Une note vocale se dit vite et se
 * réécoute lentement, en grande partie à cause de ce qui n'y est pas : les hésitations,
 * la marche qui reprend, le temps de chercher un mot (Arons, SpeechSkimmer, 1997).
 *
 * ## Une carte de sauts, jamais une réécriture
 *
 * Le module ne produit pas un nouvel audio : il rend la liste des pauses, et le lecteur
 * saute de l'une à l'autre en lisant l'enregistrement d'origine, intact. Réécrire
 * l'audio aurait demandé de le stocker (ou de le recalculer à chaque écoute) et aurait
 * décalé les positions `debutMs` des éléments, seul lien entre une note et son passage.
 *
 * Les fonctions sont pures — des échantillons et une fréquence en entrée, des durées
 * en secondes en sortie. Le décodage, qui dépend du navigateur, vit ailleurs
 * (`decodage.ts`) et s'injecte : rien ici ne touche au DOM.
 */

/** Une pause, en secondes depuis le début de l'enregistrement. `fin` est exclue. */
export interface Silence {
  debut: number;
  fin: number;
}

export interface OptionsSilences {
  /**
   * Le niveau RMS (0 à 1) sous lequel une fenêtre est silencieuse.
   *
   * Absent, il se déduit de l'enregistrement lui-même : une fraction du niveau de
   * parole. Un seuil absolu serait faux d'un micro à l'autre — un enregistrement pris
   * dans la rue et un autre dans un bureau n'ont pas le même « silence ».
   */
  seuil?: number;
  /** En dessous de cette durée (secondes), une pause est conservée telle quelle. */
  dureeMin?: number;
  /** La fenêtre d'analyse, en millisecondes. */
  fenetreMs?: number;
}

/** Une pause de plus de 700 ms est raccourcie. */
export const DUREE_MIN_SILENCE = 0.7;

/** Ce qu'il en reste : 300 ms, réparties de part et d'autre du saut. */
export const GARDE_SILENCE = 0.3;

/** Le niveau de parole : le 90e percentile des niveaux de fenêtres. */
const PERCENTILE_PAROLE = 0.9;

/** Le seuil de silence, en part du niveau de parole (environ -20 dB). */
const PART_DU_NIVEAU_DE_PAROLE = 0.1;

/**
 * Sous ce niveau, tout l'enregistrement est muet : il n'y a pas de parole à laquelle
 * comparer, donc rien à raccourcir. Sauter un fichier entier serait pire qu'inutile.
 */
const NIVEAU_MUET = 1e-4;

/** Le niveau RMS de chaque fenêtre de `taille` échantillons. La dernière, partielle, est écartée. */
function niveaux(echantillons: Float32Array, taille: number): Float32Array {
  const nombre = Math.floor(echantillons.length / taille);
  const rms = new Float32Array(nombre);
  for (let f = 0; f < nombre; f += 1) {
    let somme = 0;
    const debut = f * taille;
    for (let i = debut; i < debut + taille; i += 1) {
      const v = echantillons[i];
      somme += v * v;
    }
    rms[f] = Math.sqrt(somme / taille);
  }
  return rms;
}

function percentile(valeurs: Float32Array, rang: number): number {
  if (valeurs.length === 0) return 0;
  const tri = Float32Array.from(valeurs).sort();
  return tri[Math.min(tri.length - 1, Math.floor(rang * tri.length))];
}

/**
 * Les pauses d'au moins `dureeMin` secondes, dans l'ordre.
 *
 * Énergie RMS sur des fenêtres de 20 ms ; une pause est une suite de fenêtres sous le
 * seuil. Une fenêtre bruyante au milieu d'une pause — un toussotement, un claquement —
 * la coupe en deux : c'est voulu, on préfère laisser passer un silence que sauter de
 * la parole.
 *
 * @param frequence la fréquence d'échantillonnage, en hertz.
 */
export function silences(
  echantillons: Float32Array,
  frequence: number,
  options: OptionsSilences = {},
): Silence[] {
  const { dureeMin = DUREE_MIN_SILENCE, fenetreMs = 20 } = options;
  const taille = Math.max(1, Math.round((frequence * fenetreMs) / 1000));
  const rms = niveaux(echantillons, taille);
  if (rms.length === 0) return [];

  const parole = percentile(rms, PERCENTILE_PAROLE);
  if (options.seuil === undefined && parole < NIVEAU_MUET) return [];
  const seuil = options.seuil ?? parole * PART_DU_NIVEAU_DE_PAROLE;

  const secondes = (fenetre: number): number => (fenetre * taille) / frequence;
  const trouvees: Silence[] = [];
  let debut = -1;
  for (let f = 0; f <= rms.length; f += 1) {
    const calme = f < rms.length && rms[f] < seuil;
    if (calme && debut < 0) debut = f;
    if (!calme && debut >= 0) {
      const pause = { debut: secondes(debut), fin: secondes(f) };
      if (pause.fin - pause.debut >= dureeMin) trouvees.push(pause);
      debut = -1;
    }
  }
  return trouvees;
}

/**
 * Où sauter depuis `position`, ou `null` si la lecture n'est pas dans une pause à
 * raccourcir.
 *
 * On laisse `garde / 2` de silence à chaque bord de la pause : la coupure ne mord
 * jamais sur un mot, et la pause raccourcie se sent encore comme une pause. Une
 * pause de deux secondes se lit donc en 300 ms environ (`garde`).
 *
 * @param pauses la sortie de [silences], dans l'ordre.
 * @param position la position de lecture, en secondes.
 */
export function positionDeSaut(
  pauses: readonly Silence[],
  position: number,
  garde: number = GARDE_SILENCE,
): number | null {
  const marge = garde / 2;
  // La dernière pause qui a commencé : recherche dichotomique, la lecture appelle
  // ceci à chaque image et un compte rendu d'une heure compte des centaines de pauses.
  let bas = 0;
  let haut = pauses.length - 1;
  let candidate = -1;
  while (bas <= haut) {
    const milieu = (bas + haut) >> 1;
    if (pauses[milieu].debut <= position) {
      candidate = milieu;
      bas = milieu + 1;
    } else {
      haut = milieu - 1;
    }
  }
  if (candidate < 0) return null;
  const { debut, fin } = pauses[candidate];
  return position >= debut + marge && position < fin - marge ? fin - marge : null;
}
