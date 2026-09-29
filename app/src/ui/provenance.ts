/**
 * Ce que l'utilisateur a dit, et ce que ZeNote en a déduit.
 *
 * Spec `provenance` — « Déduction accompagnée de sa source ». Une étiquette « déduit
 * par l'IA » ne protège pas la mémoire de celui qui lit : ce qui protège, c'est la
 * phrase d'origine **à côté** de la déduction. Ce module est donc le seul endroit où
 * l'on écrit l'une ou l'autre, pour qu'aucun écran ne compose sa propre variante :
 *
 *  - `dit(mots)` présente des paroles de l'utilisateur : « vous avez dit », puis les
 *    mots exacts entre guillemets français ;
 *  - `deduit(libelle, depuis)` présente ce que le système en a tiré : le libellé, la
 *    mention « déduit », et — quand on la connaît — la citation d'où il vient.
 *
 * La règle qui les sépare est simple et tient dans les guillemets : un texte produit
 * par ZeNote n'est **jamais** entre guillemets, un texte de l'utilisateur l'est
 * **toujours**. Le lecteur n'a pas à se souvenir d'une légende : la typographie le
 * dit.
 */

import '../styles/provenance.css';
import { el } from './dom.ts';

/** L'espace insécable : ni guillemet ouvrant, ni fermant ne doit finir seul en bout de ligne. */
const ESPACE = '\u00a0';

/** Ce qui introduit des paroles de l'utilisateur. */
export const INTRO_DIT = 'vous avez dit';

/** La mention qui marque une déduction. */
export const MARQUE_DEDUIT = 'déduit';

/**
 * Les mots entre guillemets français, avec des espaces insécables : les guillemets
 * ne doivent jamais se retrouver seuls en bout de ligne.
 */
export function citer(mots: string): string {
  return `«${ESPACE}${mots}${ESPACE}»`;
}

/** La phrase complète d'une citation, telle qu'un lecteur d'écran la lit. */
export function phraseDite(mots: string, intro: string = INTRO_DIT): string {
  return `${intro} ${citer(mots)}`;
}

/** Une plage de la citation à mettre en évidence, en positions dans `mots`. */
export interface Plage {
  debut: number;
  fin: number;
}

export interface OptionsDit {
  /**
   * Ce qui introduit la citation. « vous avez dit » par défaut ; un compte rendu
   * importé n'a pas été dit par celui qui le lit, et l'écran le dit autrement.
   */
  intro?: string;
  /** Les mots à mettre en évidence : ceux qu'un élément a perdus, par exemple. */
  surligner?: Plage[];
  /** Une classe de plus, pour le contexte où la citation s'affiche. */
  classe?: string;
}

/**
 * Des paroles de l'utilisateur : « vous avez dit « … » ».
 *
 * Les `surligner` sont des positions dans `mots`, bornées et remises dans l'ordre
 * avant usage : une borne fausse ne doit pas tronquer la citation, au pire elle
 * surligne à côté.
 */
export function dit(mots: string | string[], options: OptionsDit = {}): HTMLElement {
  // Plusieurs citations d'un coup — « la phrase d'origine dit aussi « trois », « Karim » » :
  // chacune garde ses propres guillemets, jamais un seul pour la liste.
  if (Array.isArray(mots)) {
    return el(
      'span',
      {
        class: options.classe ? `dit ${options.classe}` : 'dit',
        'data-provenance': 'dit',
      },
      el('span', { class: 'dit__intro', texte: options.intro ?? INTRO_DIT }),
      ' ',
      el('span', { class: 'dit__mots', texte: mots.map(citer).join(', ') }),
    );
  }

  const plages = (options.surligner ?? [])
    .map((p) => ({
      debut: Math.max(0, Math.min(p.debut, mots.length)),
      fin: Math.max(0, Math.min(p.fin, mots.length)),
    }))
    .filter((p) => p.fin > p.debut)
    .sort((a, b) => a.debut - b.debut);

  const morceaux: (HTMLElement | string)[] = [];
  let curseur = 0;
  for (const { debut, fin } of plages) {
    if (debut < curseur) continue;
    if (debut > curseur) morceaux.push(mots.slice(curseur, debut));
    morceaux.push(el('mark', { class: 'dit__manque', texte: mots.slice(debut, fin) }));
    curseur = fin;
  }
  if (curseur < mots.length) morceaux.push(mots.slice(curseur));

  const corps = el('span', { class: 'dit__mots' }, '«' + ESPACE, morceaux, ESPACE + '»');

  return el(
    'span',
    {
      class: options.classe ? `dit ${options.classe}` : 'dit',
      'data-provenance': 'dit',
    },
    el('span', { class: 'dit__intro', texte: options.intro ?? INTRO_DIT }),
    ' ',
    corps,
  );
}

/** La seule mention « déduit » : petite, discrète, et toujours la même. */
export function marqueDeduit(): HTMLElement {
  return el('span', {
    class: 'deduit__marque',
    texte: MARQUE_DEDUIT,
    title: 'Déduit par ZeNote à partir de ce que vous avez dit.',
  });
}

export interface OptionsDeduit {
  /** Une classe de plus pour le contexte (un badge, une ligne de fiche…). */
  classe?: string;
  /** Voir [`OptionsDit.intro`]. */
  intro?: string;
}

/**
 * Ce que le système a tiré des paroles : le libellé, « déduit », puis — quand on la
 * connaît — la citation dont il vient.
 *
 * Le libellé n'est jamais entre guillemets : il est écrit par ZeNote, pas par
 * l'utilisateur.
 */
export function deduit(
  libelle: string,
  depuis?: string | null,
  options: OptionsDeduit = {},
): HTMLElement {
  return el(
    'span',
    {
      class: options.classe ? `deduit ${options.classe}` : 'deduit',
      'data-provenance': 'deduit',
    },
    el('span', { class: 'deduit__libelle', texte: libelle }),
    ' ',
    marqueDeduit(),
    depuis ? ' ' : null,
    depuis
      ? el('span', { class: 'deduit__depuis' }, dit(depuis, { intro: options.intro }))
      : null,
  );
}

/** Pour comparer deux textes sans se laisser piéger par la casse, les accents, la ponctuation. */
function comparable(texte: string): string {
  return texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

/**
 * Vrai si `mots` figure mot pour mot dans `passage`.
 *
 * C'est ce qui autorise à mettre un indice entre guillemets. L'analyse locale écrit
 * ses indices elle-même (« annoncé comme urgent », « bloque quelqu'un d'autre ») :
 * ce sont des libellés du système, pas des paroles. Les citer comme dits serait
 * attribuer à l'utilisateur une phrase qu'il n'a jamais prononcée — précisément la
 * confusion que cette change répare.
 */
export function figureDans(mots: string, passage: string): boolean {
  const cherche = comparable(mots);
  if (cherche === '') return false;
  return ` ${comparable(passage)} `.includes(` ${cherche} `);
}

/**
 * Une déduction et son indice, en citant l'indice seulement s'il est de l'utilisateur.
 *
 * Quand l'indice figure mot pour mot dans le passage, ce sont ses paroles : la
 * déduction est suivie de la citation d'où elle vient. Sinon c'est un libellé écrit
 * par l'analyse (« annoncé comme urgent ») : il fait partie de la déduction, sans
 * guillemets.
 */
export function deduitDe(
  libelle: string,
  indice: string | null | undefined,
  passage: string,
  options: OptionsDeduit = {},
): HTMLElement {
  if (!indice) return deduit(libelle, null, options);
  if (figureDans(indice, passage)) return deduit(libelle, indice, options);
  return deduit(`${libelle} : ${indice}`, null, options);
}

/**
 * Les mots exacts d'un passage : ceux de la capture quand on peut les relire, sinon
 * le texte de l'élément.
 *
 * Le texte d'un élément est le passage remis en forme (majuscule initiale) ; la
 * capture, elle, porte ce qui a été dit. Quand l'utilisateur a corrigé l'élément à la
 * main, ses bornes ne disent plus rien : ce qu'il a écrit est ce qu'il a dit.
 */
export function passageExact(
  element: { texte: string; debutCar: number; finCar: number; corrigeParHumain?: boolean },
  texteCapture: string | undefined,
): string {
  if (
    !element.corrigeParHumain &&
    texteCapture !== undefined &&
    element.debutCar >= 0 &&
    element.finCar <= texteCapture.length &&
    element.debutCar < element.finCar
  ) {
    const brut = texteCapture.slice(element.debutCar, element.finCar).trim();
    if (brut !== '') return brut;
  }
  return element.texte;
}
