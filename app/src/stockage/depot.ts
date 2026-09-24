/**
 * Le dépôt : la seule porte d'entrée des données de ZeNote.
 *
 * Trois couches, conformément à `design.md` — décision 2 :
 *  - la **source** (la capture : audio, transcription brute) est immuable ;
 *  - le **dérivé** (les éléments produits par l'analyse) est jetable et reconstructible ;
 *  - le **décidé par l'humain** (verdict, corrections, plan) prime et n'est jamais
 *    écrasé par une ré-analyse.
 *
 * ## Le chiffrement, et pourquoi il vit ici
 *
 * Quand un coffre existe (`securite/coffre.ts`), tout ce qui porte du sens est
 * scellé avant d'entrer en base et ouvert en en sortant. C'est fait ici, au seul
 * endroit par lequel les données passent : une couche placée plus haut laisserait
 * un chemin d'écriture oublié écrire en clair, et personne ne le verrait.
 *
 * Ne restent en clair que les deux champs dont la base a besoin pour fonctionner :
 * l'identifiant d'un enregistrement, et l'identifiant de capture d'un élément — le
 * seul index réellement interrogé. Tout le reste, dates comprises, est dans le
 * scellé. Un tiers qui ouvre la base sans authentification voit donc combien de
 * notes existent et lesquelles vont ensemble, rien d'autre.
 *
 * ## Une règle à ne pas enfreindre
 *
 * Aucun appel de chiffrement à l'intérieur d'une transaction IndexedDB. Une
 * transaction se referme dès que la file d'événements se vide, et attendre
 * WebCrypto la vide : la transaction serait morte avant l'écriture. D'où la forme
 * de chaque écriture qui doit d'abord lire — lire, refermer, chiffrer, rouvrir pour
 * écrire.
 */

import type { ElementJson, PassageIncertain } from '../core/regles.ts';
import {
  assurerCoffreCharge,
  ouvrirScelle,
  ouvrirValeur,
  sceller,
  scellerValeur,
  type Scelle,
} from '../securite/coffre.ts';
import {
  MAGASIN_CAPTURES,
  MAGASIN_ELEMENTS,
  MAGASIN_LEXIQUE,
  MAGASIN_MORCEAUX,
  MAGASIN_REGLAGES,
  demander,
  transaction,
} from './base.ts';

/**
 * L'élément tel qu'il est stocké : le contrat du cœur, plus le seul fait que la
 * surface a besoin de retenir et que le contrat ne porte pas — la date à laquelle
 * l'utilisateur a marqué l'élément fait. Ce champ n'est jamais passé aux règles :
 * un élément fait sort simplement des éléments actifs.
 */
export interface ElementStocke extends ElementJson {
  faitLe?: string | null;
  /**
   * La dernière fois qu'on a eu — ou relancé — des nouvelles sur cet élément.
   *
   * C'est ce qui empêche une relance de se répéter tous les jours une fois traitée.
   * Ce champ non plus n'est jamais passé aux règles de classement : il alimente les
   * suivis, que le cœur lit pour décider ce qui remonte.
   */
  relanceLe?: string | null;
  /**
   * Le moment où le plan a été attaché, en heure locale (`AAAA-MM-JJTHH:MM`).
   *
   * Sans lui, « ce soir » n'aurait pas de soir : le cœur ne saurait pas de quel jour
   * on parle, et le rappel reviendrait tous les soirs.
   */
  planPoseLe?: string | null;
  /**
   * Combien de fois ce rappel a été présenté puis écarté sans être traité.
   *
   * Au troisième, le cœur le sort de la file et le remonte en Revue : répéter à
   * l'identique au-delà n'use que l'utilisateur.
   */
  rappelIgnoreFois?: number;
  /**
   * Combien de fois cet élément a été écarté dans la vue Maintenant.
   *
   * Écarter n'est ni supprimer ni reporter : l'élément reste actif et sera reproposé.
   * Mais au troisième écart, le reproposer à l'identique n'apprend plus rien — ce
   * n'est pas le moment qui cloche, c'est l'élément. Le compte vivait en mémoire et
   * disparaissait au rechargement ; il ne pouvait donc rien déclencher.
   */
  ecarteFois?: number;
  /**
   * Le dernier jour où l'on a touché à cet élément, en ISO `AAAA-MM-JJ`.
   *
   * C'est ce qui permet de repérer un élément lourd qui dort. Sans lui, « sans
   * avancée depuis trois semaines » ne se distingue pas de « créé il y a trois
   * semaines et traité hier ».
   */
  vuLe?: string | null;
}

/** Les suivis d'élément, tels que le cœur les attend. */
export function suivisElementDe(
  elements: ElementStocke[],
): { elementId: string; ecarteFois: number; vuLe: string | null }[] {
  return elements.map((e) => ({
    elementId: e.id,
    ecarteFois: e.ecarteFois ?? 0,
    vuLe: e.vuLe ?? null,
  }));
}

/** Les suivis de rappel, tels que le cœur les attend, tirés des éléments stockés. */
export function suivisRappelDe(
  elements: ElementStocke[],
): { elementId: string; planPoseLe: string; foisIgnore: number }[] {
  return elements
    .filter((e): e is ElementStocke & { planPoseLe: string } => Boolean(e.planPoseLe))
    .map((e) => ({
      elementId: e.id,
      planPoseLe: e.planPoseLe,
      foisIgnore: e.rappelIgnoreFois ?? 0,
    }));
}

/** Les suivis, tels que le cœur les attend, tirés des éléments stockés. */
export function suivisDe(elements: ElementStocke[]): { elementId: string; derniereNouvelle: string }[] {
  return elements
    .filter((e): e is ElementStocke & { relanceLe: string } => Boolean(e.relanceLe))
    .map((e) => ({ elementId: e.id, derniereNouvelle: e.relanceLe }));
}

export type SourceCapture = 'VOCALE' | 'ECRITE';
export type EtatTranscription = 'ABSENTE' | 'EN_COURS' | 'OK' | 'INDISPONIBLE' | 'ECHEC';

/** Couche source : immuable une fois écrite. */
export interface Capture {
  id: string;
  /** Horodatage ISO complet de la capture. */
  creeLe: string;
  source: SourceCapture;
  /** Transcription brute, telle que rendue par la reconnaissance vocale ou saisie. */
  texte: string;
  etatTranscription: EtatTranscription;
  dureeMs: number | null;
  /**
   * L'audio d'origine, conservé : aucune reformulation n'est irréversible.
   *
   * `null` ne veut pas dire « il n'y en a pas » : les lectures de liste ne le
   * déchiffrent pas, parce que déplier trente enregistrements pour en écouter zéro
   * coûterait cher pour rien. [aAudio] dit s'il existe ; [lireCapture] le rend.
   */
  audio: Blob | null;
  /** Vrai quand un enregistrement existe, qu'il ait été déplié ou non. */
  aAudio: boolean;
  /**
   * Le poids et le format de l'enregistrement, connus sans avoir à le déplier.
   *
   * L'export en a besoin pour dire ce qu'il n'emporte pas ; déchiffrer un
   * enregistrement entier pour en lire la seule taille serait payer le prix fort
   * pour un nombre. Ils voyagent donc dans le scellé, avec le reste.
   */
  audioOctets: number | null;
  audioType: string | null;
  /** Vrai quand l'application s'est arrêtée pendant l'enregistrement. */
  incomplete: boolean;
  /** Vrai quand l'analyse a déjà produit les éléments de cette capture. */
  analysee: boolean;
  /**
   * Combien de fois la transcription embarquée a été menée à son terme sur cet
   * audio — qu'elle ait rendu du texte ou rien.
   *
   * Absent ou zéro : pas encore essayée, la file s'en charge. Au-delà : ne pas
   * recommencer. Sans ce compte, un enregistrement où rien n'est reconnu serait
   * retranscrit à chaque ouverture, pour rien.
   */
  essaisTranscription?: number;
  /**
   * Ce que la reconnaissance vocale a mal entendu, en positions dans [texte].
   *
   * Absent pour une capture écrite — on n'a pas mal entendu ce qu'on a tapé — et
   * pour une transcription faite avant que le moteur ne rende ses confiances. Vide
   * veut dire « tout a été bien entendu » ; absent veut dire « on ne sait pas », et
   * l'écran ne prétend rien dans ce cas.
   */
  passagesIncertains?: PassageIncertain[];
  /**
   * La capture à laquelle celle-ci renvoie, quand on l'a dit.
   *
   * Spec `memoire` — « Référence à un échange passé ». Posé par l'utilisateur depuis
   * la Revue, jamais deviné : rattacher une note à la mauvaise conversation fabrique
   * un souvenir faux, et rien ne le signale ensuite.
   */
  captureLiee?: string | null;
  /**
   * `false` quand l'utilisateur a refusé que cette capture parte à l'analyse distante.
   *
   * Spec `analyse-distante` — « Transmission conditionnée au consentement ». Absent
   * veut dire transmissible : c'est le réglage d'analyse distante, éteint par défaut,
   * qui décide si quoi que ce soit sort, et ce champ ne sert qu'à dire non à une
   * capture précise. Posé par l'utilisateur, jamais par l'analyse.
   */
  transmissible?: boolean;
}

/**
 * Ce qu'il faut fournir pour écrire une capture.
 *
 * `aAudio`, `audioOctets` et `audioType` n'en font pas partie : ils se déduisent de
 * l'enregistrement lui-même, et les laisser à l'appelant serait lui donner de quoi
 * mentir au dépôt.
 */
export type CaptureAEcrire = Omit<Capture, 'aAudio' | 'audioOctets' | 'audioType'>;

export interface Reglages {
  theme: 'auto' | 'clair' | 'sombre';
  sonConfirmation: boolean;
  /**
   * La sphère regardée en ce moment. Une préférence d'affichage, pas un rangement.
   *
   * Spec `memoire` — « Filtrage à la restitution » : le filtre choisit ce qui est
   * présenté, et rien d'autre. Aucune donnée n'est déplacée ni dupliquée, et la
   * capture ne demande toujours rien.
   */
  filtreSphere: 'TOUT' | 'PROFESSIONNEL' | 'PERSONNEL';
  /**
   * L'heure de début du créneau protégé, en `HH:MM`, ou `null` pour l'éteindre.
   *
   * Spec `priorisation` — « Créneau protégé ». Une heure plutôt qu'un créneau
   * d'agenda : l'agenda n'est pas branché, et attendre qu'il le soit reviendrait à
   * ne rien protéger du tout. Le créneau dure une heure.
   */
  creneauProtegeDebut: string | null;
  /** Combien de fois d'affilée le créneau est passé sans être pris. */
  creneauRenoncements: number;
  /** Le jour où le créneau a été pris ou décliné, pour ne compter qu'une fois par jour. */
  creneauVuLe: string | null;
  /**
   * Le nom sous lequel l'utilisateur apparaît dans les comptes rendus de réunion.
   *
   * Sans lui, aucune ligne d'un compte rendu n'est attribuée : deviner ferait porter
   * à quelqu'un des engagements qui ne sont pas les siens, ce qui est exactement la
   * panne que l'import répare.
   */
  monNom: string;
  /**
   * L'analyse du type et de la sphère par un service distant.
   *
   * Spec `analyse-distante` — « Activation conditionnée à l'évaluation ». Éteinte
   * par défaut tant que l'évaluation sur des captures réelles n'est pas consignée :
   * c'est la première fois que du texte des notes quitterait l'appareil.
   */
  analyseDistante: boolean;
  /**
   * Les sphères dont aucune capture ne part à l'analyse distante.
   *
   * La sphère d'une capture est jugée sur l'appareil avant tout envoi. Une capture
   * dont la sphère est indécidable ne part pas tant qu'une exclusion est active :
   * le doute se tranche du côté de la vie privée.
   */
  spheresExclues: ('PROFESSIONNEL' | 'PERSONNEL')[];
}

export const REGLAGES_PAR_DEFAUT: Reglages = {
  theme: 'auto',
  sonConfirmation: true,
  filtreSphere: 'TOUT',
  creneauProtegeDebut: '09:00',
  creneauRenoncements: 0,
  creneauVuLe: null,
  monNom: '',
  analyseDistante: false,
  spheresExclues: [],
};

// ------------------------------------------------- scellement et ouverture

/** Ce qu'une capture porte de sensible : tout sauf son identifiant et son audio. */
type ContenuCapture = Omit<Capture, 'id' | 'audio' | 'aAudio'>;

/** Ce qu'un élément porte de sensible : tout sauf ses deux identifiants. */
type ContenuElement = Omit<ElementStocke, 'id' | 'captureId'>;

/**
 * Une capture telle qu'elle existe réellement en base.
 *
 * Sans coffre, c'est une [Capture] à plat. Avec coffre, il ne reste que
 * l'identifiant et des scellés. La présence de `scelle` distingue les deux, et
 * permet aux deux de coexister le temps d'une activation.
 */
interface CaptureBrute extends Partial<ContenuCapture> {
  id: string;
  audio?: Blob | null;
  scelle?: Scelle;
  audioScelle?: Scelle;
}

interface ElementBrut extends Partial<ContenuElement> {
  id: string;
  captureId: string;
  scelle?: Scelle;
}

/**
 * Y a-t-il un coffre sur cet appareil ?
 *
 * La réponse est asynchrone parce qu'elle garantit d'abord que le descripteur a été
 * lu : la question « faut-il chiffrer ? » ne doit jamais recevoir « non » par simple
 * ignorance.
 */
async function chiffre(): Promise<boolean> {
  return (await assurerCoffreCharge()) !== 'ABSENT';
}

async function versStockageCapture(capture: Capture): Promise<CaptureBrute> {
  const { id, audio, aAudio: _ignore, ...reste } = capture;
  const contenu: ContenuCapture = {
    ...reste,
    audioOctets: audio?.size ?? capture.audioOctets,
    audioType: audio?.type ?? capture.audioType,
  };
  if (!(await chiffre())) return { id, audio: audio ?? null, ...contenu };
  const brute: CaptureBrute = { id, scelle: await scellerValeur(contenu) };
  if (audio) brute.audioScelle = await sceller(await audio.arrayBuffer());
  return brute;
}

/**
 * @param avecAudio déplier l'enregistrement, qui est la partie coûteuse. Faux pour
 *   les listes ; vrai quand on va réellement l'écouter ou le transcrire.
 */
async function depuisStockageCapture(brute: CaptureBrute, avecAudio: boolean): Promise<Capture> {
  if (!brute.scelle) {
    // Sans coffre l'enregistrement est là, sous la main : sa taille est gratuite,
    // y compris pour les captures écrites avant que ce champ existe.
    return {
      ...(brute as unknown as ContenuCapture),
      id: brute.id,
      audio: avecAudio ? brute.audio ?? null : null,
      aAudio: brute.audio instanceof Blob,
      audioOctets: brute.audio?.size ?? null,
      audioType: brute.audio?.type || null,
    };
  }
  const contenu = await ouvrirValeur<ContenuCapture>(brute.scelle);
  const audio =
    avecAudio && brute.audioScelle
      ? new Blob([await ouvrirScelle(brute.audioScelle)], { type: contenu.audioType ?? '' })
      : null;
  return {
    ...contenu,
    id: brute.id,
    audio,
    aAudio: Boolean(brute.audioScelle),
    audioOctets: contenu.audioOctets ?? null,
    audioType: contenu.audioType ?? null,
  };
}

async function versStockageElement(element: ElementStocke): Promise<ElementBrut> {
  const { id, captureId, ...contenu } = element;
  if (!(await chiffre())) return { id, captureId, ...contenu };
  return { id, captureId, scelle: await scellerValeur(contenu) };
}

async function depuisStockageElement(brut: ElementBrut): Promise<ElementStocke> {
  if (!brut.scelle) return brut as unknown as ElementStocke;
  const contenu = await ouvrirValeur<ContenuElement>(brut.scelle);
  return { ...contenu, id: brut.id, captureId: brut.captureId };
}

// ------------------------------------------------------------------ captures

function toutesLesBrutes(): Promise<CaptureBrute[]> {
  return transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<CaptureBrute[]>(captures.getAll()),
  );
}

/**
 * Lit toutes les captures, en applique un filtre et un ordre, et ne déplie les
 * enregistrements que pour celles qui restent.
 *
 * Une seule transaction, puis tout le déchiffrement en dehors — c'est la règle du
 * fichier, et c'est aussi ce qui évite de déplier trente audios pour en garder deux.
 */
async function capturesRetenues(
  garde: (c: Capture) => boolean,
  ordre: (a: Capture, b: Capture) => number,
  avecAudio: boolean,
): Promise<Capture[]> {
  const brutes = await toutesLesBrutes();
  const legeres: Capture[] = [];
  for (const brute of brutes) legeres.push(await depuisStockageCapture(brute, false));

  const retenues = legeres.filter(garde).sort(ordre);
  if (!avecAudio) return retenues;

  const parId = new Map(brutes.map((b) => [b.id, b]));
  const completes: Capture[] = [];
  for (const capture of retenues) {
    completes.push(await depuisStockageCapture(parId.get(capture.id)!, true));
  }
  return completes;
}

const plusRecentesDAbord = (a: Capture, b: Capture) => b.creeLe.localeCompare(a.creeLe);
const plusAnciennesDAbord = (a: Capture, b: Capture) => a.creeLe.localeCompare(b.creeLe);

/**
 * Écrit une capture et ne rend la main qu'une fois l'écriture durable.
 *
 * L'appelant ne doit émettre le retour de confirmation qu'après résolution de cette
 * promesse : c'est la garantie « rien ne se perd » qui rend l'oubli possible.
 *
 * Le scellement a lieu avant la transaction, et ne demande aucune authentification :
 * déposer une note reste un geste, coffre verrouillé ou non.
 */
export async function enregistrerCapture(aEcrire: CaptureAEcrire): Promise<Capture> {
  const capture: Capture = {
    ...aEcrire,
    aAudio: aEcrire.audio instanceof Blob,
    audioOctets: aEcrire.audio?.size ?? null,
    audioType: aEcrire.audio?.type || null,
  };
  const brute = await versStockageCapture(capture);
  await transaction([MAGASIN_CAPTURES], 'readwrite', ([captures]) => {
    captures.put(brute);
  });
  return capture;
}

/**
 * Met à jour les champs dérivés d'une capture (transcription, état, analyse).
 *
 * Fusionner demande de relire ce qui est là, donc de l'ouvrir : cette écriture-ci
 * réclame le coffre ouvert, à la différence de [enregistrerCapture].
 */
export async function majCapture(id: string, ajustement: Partial<Capture>): Promise<void> {
  const brute = await transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<CaptureBrute | undefined>(captures.get(id)),
  );
  if (!brute) throw new Error(`Capture introuvable : ${id}`);

  const existante = await depuisStockageCapture(brute, true);
  const fusionnee = await versStockageCapture({ ...existante, ...ajustement, id: existante.id });
  await transaction([MAGASIN_CAPTURES], 'readwrite', ([captures]) => {
    captures.put(fusionnee);
  });
}

/** Toutes les captures, la plus récente d'abord. Les enregistrements ne sont pas dépliés. */
export function listerCaptures(): Promise<Capture[]> {
  return capturesRetenues(() => true, plusRecentesDAbord, false);
}

/** Une capture, enregistrement compris. */
export async function lireCapture(id: string): Promise<Capture | undefined> {
  const brute = await transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<CaptureBrute | undefined>(captures.get(id)),
  );
  return brute ? depuisStockageCapture(brute, true) : undefined;
}

/** Les captures transcrites qui attendent encore d'être analysées. */
export function capturesAAnalyser(): Promise<Capture[]> {
  return capturesRetenues(analysable, plusAnciennesDAbord, false);
}

/** Une capture qui porte du texte exploitable et n'a pas encore été analysée. */
function analysable(c: Capture): boolean {
  return !c.analysee && c.etatTranscription === 'OK' && c.texte.trim() !== '';
}

/**
 * Une capture vocale dont l'audio attend la transcription embarquée : pas de texte,
 * pas encore analysée, et le moteur ne l'a pas encore tentée jusqu'au bout.
 */
export function aTranscrire(c: Capture): boolean {
  return (
    !c.analysee &&
    c.source === 'VOCALE' &&
    c.aAudio &&
    c.texte.trim() === '' &&
    (c.essaisTranscription ?? 0) < 1
  );
}

/** Les captures que la transcription embarquée doit traiter, plus anciennes d'abord. */
export function capturesATranscrire(): Promise<Capture[]> {
  return capturesRetenues(aTranscrire, plusAnciennesDAbord, true);
}

/**
 * Les captures en souffrance : déposées, conservées, mais dont rien ne sortira.
 *
 * Une dictée où rien n'a été reconnu ne produit aucun texte, donc aucun élément,
 * donc rien en Revue. L'audio est bien là — mais sans ce relevé la capture
 * n'apparaît nulle part, et la Revue affiche « rien à ranger » alors que quelque
 * chose attend. C'est la promesse du produit qui se casse en silence : on a dit
 * « tu peux oublier », et l'utilisateur aurait oublié pour de bon.
 *
 * Une capture que la transcription embarquée n'a pas encore tentée n'est pas en
 * souffrance : elle est en file, et va être lue. L'enregistrement est déplié —
 * c'est précisément pour le réécouter que la Revue les présente.
 */
export function capturesEnSouffrance(): Promise<Capture[]> {
  return capturesRetenues(
    (c) => !c.analysee && !analysable(c) && !aTranscrire(c),
    plusRecentesDAbord,
    true,
  );
}

/**
 * Supprime une capture et tout ce qui en découle.
 *
 * Le seul endroit du produit où une source disparaît, et il faut que ce soit un geste
 * explicite de l'utilisateur : la couche source est immuable, pas indestructible.
 * Rien n'est déchiffré ici : les identifiants suffisent, et ils sont en clair.
 */
export async function supprimerCapture(id: string): Promise<void> {
  await transaction([MAGASIN_CAPTURES, MAGASIN_ELEMENTS], 'readwrite', async ([captures, elements]) => {
    const derives = await demander<{ id: string }[]>(
      elements.index('captureId').getAll(IDBKeyRange.only(id)),
    );
    for (const derive of derives) elements.delete(derive.id);
    captures.delete(id);
  });
}

// ------------------------------------------------------------------ éléments

/**
 * Remplace intégralement la couche dérivée d'une capture.
 *
 * Les décisions humaines déjà prises sont conservées : un élément dont le verdict
 * n'est plus `EN_ATTENTE`, ou corrigé à la main, survit à la ré-analyse. Savoir
 * lesquels demande de les ouvrir, donc le coffre.
 */
export async function remplacerElements(
  captureId: string,
  nouveaux: ElementJson[],
): Promise<void> {
  const bruts = await transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementBrut[]>(elements.index('captureId').getAll(IDBKeyRange.only(captureId))),
  );

  const aSupprimer: string[] = [];
  for (const brut of bruts) {
    const ancien = await depuisStockageElement(brut);
    if (ancien.verdict === 'EN_ATTENTE' && !ancien.corrigeParHumain) aSupprimer.push(ancien.id);
  }
  const aEcrire: ElementBrut[] = [];
  for (const nouveau of nouveaux) aEcrire.push(await versStockageElement(nouveau));

  await transaction([MAGASIN_ELEMENTS], 'readwrite', ([elements]) => {
    for (const id of aSupprimer) elements.delete(id);
    for (const brut of aEcrire) elements.put(brut);
  });
}

export async function enregistrerElement(element: ElementStocke): Promise<void> {
  const brut = await versStockageElement(element);
  await transaction([MAGASIN_ELEMENTS], 'readwrite', ([elements]) => {
    elements.put(brut);
  });
}

/** Applique une décision humaine : elle prime et n'est jamais écrasée ensuite. */
export async function majElement(
  id: string,
  ajustement: Partial<ElementStocke>,
): Promise<ElementStocke> {
  const brut = await transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementBrut | undefined>(elements.get(id)),
  );
  if (!brut) throw new Error(`Élément introuvable : ${id}`);

  const existant = await depuisStockageElement(brut);
  const fusionne: ElementStocke = { ...existant, ...ajustement, id: existant.id };
  const aEcrire = await versStockageElement(fusionne);
  await transaction([MAGASIN_ELEMENTS], 'readwrite', ([elements]) => {
    elements.put(aEcrire);
  });
  return fusionne;
}

export async function listerElements(): Promise<ElementStocke[]> {
  const bruts = await transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementBrut[]>(elements.getAll()),
  );
  const ouverts: ElementStocke[] = [];
  for (const brut of bruts) ouverts.push(await depuisStockageElement(brut));
  return ouverts;
}

/** Les éléments encore en jeu : tout sauf ceux que l'utilisateur a marqués faits. */
export async function listerElementsActifs(): Promise<ElementJson[]> {
  const tout = await listerElements();
  return tout.filter((e) => !e.faitLe);
}

export async function elementsDeCapture(captureId: string): Promise<ElementStocke[]> {
  const bruts = await transaction([MAGASIN_ELEMENTS], 'readonly', ([elements]) =>
    demander<ElementBrut[]>(elements.index('captureId').getAll(IDBKeyRange.only(captureId))),
  );
  const ouverts: ElementStocke[] = [];
  for (const brut of bruts) ouverts.push(await depuisStockageElement(brut));
  return ouverts;
}

/**
 * Retire l'enregistrement d'une capture, en gardant tout le reste.
 *
 * Le seul moyen qu'a le produit de rendre de la place sans rien perdre du sens : sur
 * une capture déjà transcrite, le texte porte la note, et l'audio n'est plus qu'un
 * recours. C'est irréversible, et jamais automatique — l'écran le demande.
 */
export async function retirerAudio(captureId: string): Promise<void> {
  const brute = await transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<CaptureBrute | undefined>(captures.get(captureId)),
  );
  if (!brute) return;

  const capture = await depuisStockageCapture(brute, false);
  const sansAudio = await versStockageCapture({
    ...capture,
    audio: null,
    aAudio: false,
    audioOctets: null,
    audioType: null,
  });
  await transaction([MAGASIN_CAPTURES], 'readwrite', ([captures]) => {
    captures.put(sansAudio);
  });
}

// ------------------------------------------------ morceaux d'enregistrement

/**
 * Un morceau d'enregistrement, écrit pendant qu'on parle.
 *
 * Il n'existe que le temps d'un enregistrement : l'arrêt normal les assemble puis les
 * efface. Ceux qui survivent à un redémarrage sont, par définition, ce qu'un arrêt
 * brutal a laissé — et c'est précisément ce qu'on veut récupérer.
 */
export interface Morceau {
  id: string;
  enregistrementId: string;
  /** L'ordre, pour réassembler exactement ce qui a été dit. */
  rang: number;
  /** Millisecondes écoulées depuis le début de l'enregistrement. */
  aMs: number;
  blob: Blob;
  typeMime: string;
}

interface MorceauBrut {
  id: string;
  enregistrementId: string;
  rang: number;
  aMs: number;
  blob?: Blob;
  typeMime?: string;
  scelle?: Scelle;
  audioScelle?: Scelle;
}

/**
 * Écrit un morceau. Scellé comme le reste : c'est de l'audio, donc du contenu.
 *
 * Aucune authentification demandée, ici non plus — enregistrer ne doit jamais
 * attendre quoi que ce soit.
 */
export async function ecrireMorceau(morceau: Morceau): Promise<void> {
  const { id, enregistrementId, rang, aMs, blob, typeMime } = morceau;
  const brut: MorceauBrut = { id, enregistrementId, rang, aMs };
  if (await chiffre()) {
    brut.scelle = await scellerValeur({ typeMime });
    brut.audioScelle = await sceller(await blob.arrayBuffer());
  } else {
    brut.blob = blob;
    brut.typeMime = typeMime;
  }
  await transaction([MAGASIN_MORCEAUX], 'readwrite', ([morceaux]) => {
    morceaux.put(brut);
  });
}

/** Les identifiants d'enregistrement dont des morceaux traînent encore. */
export async function enregistrementsInacheves(): Promise<string[]> {
  const bruts = await transaction([MAGASIN_MORCEAUX], 'readonly', ([morceaux]) =>
    demander<MorceauBrut[]>(morceaux.getAll()),
  );
  return [...new Set(bruts.map((m) => m.enregistrementId))].sort();
}

/**
 * Rassemble les morceaux d'un enregistrement, dans l'ordre.
 *
 * Rend `null` s'il n'y en a aucun, ou si le coffre est fermé — on ne peut pas
 * recoller un audio qu'on ne sait pas ouvrir, et il vaut mieux le laisser en place
 * jusqu'au déverrouillage que le perdre.
 */
export async function assemblerEnregistrement(
  enregistrementId: string,
): Promise<{ audio: Blob; dureeMs: number } | null> {
  const bruts = await transaction([MAGASIN_MORCEAUX], 'readonly', ([morceaux]) =>
    demander<MorceauBrut[]>(
      morceaux.index('enregistrementId').getAll(IDBKeyRange.only(enregistrementId)),
    ),
  );
  if (bruts.length === 0) return null;

  const ordonnes = [...bruts].sort((a, b) => a.rang - b.rang);
  const parts: BlobPart[] = [];
  let typeMime = '';
  for (const brut of ordonnes) {
    if (brut.scelle) {
      typeMime = (await ouvrirValeur<{ typeMime: string }>(brut.scelle)).typeMime;
      parts.push(await ouvrirScelle(brut.audioScelle!));
    } else if (brut.blob) {
      typeMime = brut.typeMime ?? '';
      parts.push(brut.blob);
    }
  }
  if (parts.length === 0) return null;

  return {
    audio: new Blob(parts, { type: typeMime || 'audio/webm' }),
    dureeMs: ordonnes[ordonnes.length - 1].aMs,
  };
}

/** Efface les morceaux d'un enregistrement : il est assemblé, ou abandonné. */
export async function supprimerMorceaux(enregistrementId: string): Promise<void> {
  await transaction([MAGASIN_MORCEAUX], 'readwrite', async ([morceaux]) => {
    const ids = await demander<IDBValidKey[]>(
      morceaux.index('enregistrementId').getAllKeys(IDBKeyRange.only(enregistrementId)),
    );
    for (const id of ids) morceaux.delete(id);
  });
}

// ------------------------------------------------- réécriture en clair

/**
 * Écrit une capture sans la sceller, coffre ou pas.
 *
 * Réservé à la désactivation du chiffrement, qui doit déchiffrer chaque
 * enregistrement — donc disposer du coffre — tout en le réécrivant en clair. Le
 * coffre n'est supprimé qu'une fois tout réécrit : si l'opération s'interrompt, la
 * base reste mêlée, et mêlée elle se lit encore parfaitement.
 */
export async function ecrireCaptureEnClair(capture: Capture): Promise<void> {
  const { id, audio, aAudio: _a, ...contenu } = capture;
  await transaction([MAGASIN_CAPTURES], 'readwrite', ([captures]) => {
    captures.put({ id, audio: audio ?? null, ...contenu });
  });
}

/** Voir [ecrireCaptureEnClair]. */
export async function ecrireElementEnClair(element: ElementStocke): Promise<void> {
  await transaction([MAGASIN_ELEMENTS], 'readwrite', ([elements]) => {
    elements.put({ ...element });
  });
}

/** Les identifiants de toutes les captures, sans rien déchiffrer. */
export function identifiantsDesCaptures(): Promise<string[]> {
  return transaction([MAGASIN_CAPTURES], 'readonly', ([captures]) =>
    demander<IDBValidKey[]>(captures.getAllKeys()).then((cles) => cles.map(String)),
  );
}

// ------------------------------------------------------------------ réglages

export async function lireReglages(): Promise<Reglages> {
  const stockes = await transaction([MAGASIN_REGLAGES], 'readonly', ([reglages]) =>
    demander<{ cle: string; valeur: unknown }[]>(reglages.getAll()),
  );
  const carte = Object.fromEntries(stockes.map((r) => [r.cle, r.valeur]));
  return { ...REGLAGES_PAR_DEFAUT, ...carte } as Reglages;
}

export async function ecrireReglage<C extends keyof Reglages>(
  cle: C,
  valeur: Reglages[C],
): Promise<void> {
  await transaction([MAGASIN_REGLAGES], 'readwrite', ([reglages]) => {
    reglages.put({ cle, valeur });
  });
}

/** Efface toutes les données locales. Utilisé par les tests et par l'export/purge. */
export async function toutEffacer(): Promise<void> {
  await transaction(
    [MAGASIN_CAPTURES, MAGASIN_ELEMENTS, MAGASIN_REGLAGES, MAGASIN_MORCEAUX, MAGASIN_LEXIQUE],
    'readwrite',
    ([captures, elements, reglages, morceaux, lexique]) => {
      captures.clear();
      elements.clear();
      reglages.clear();
      morceaux.clear();
      lexique.clear();
    },
  );
}

// ----------------------------------------------------------------- le lexique

/**
 * Une correction retenue : ce que le moteur entend, et ce qu'il fallait entendre.
 *
 * [malEntendu] est la forme pliée — minuscules, accents retirés — parce que c'est
 * sous cette forme qu'on reconnaît le même mot d'une fois sur l'autre. [correction]
 * garde sa graphie exacte : c'est elle qu'on réécrit dans la transcription, majuscule
 * et accents compris.
 */
export interface Correction {
  malEntendu: string;
  correction: string;
  /** Combien de fois cette correction a été refaite. Sert à départager, pas à filtrer. */
  fois: number;
}

/** L'unique ligne du magasin : tout le lexique tient dedans, scellé en une fois. */
const CLE_LEXIQUE = 'lexique';

interface LexiqueBrut {
  id: string;
  corrections?: Correction[];
  scelle?: Scelle;
}

/**
 * Le lexique personnel, ou vide s'il n'y en a pas encore.
 *
 * Coffre fermé : rend vide plutôt que de lever. Une transcription doit pouvoir avoir
 * lieu sans le lexique — elle sera seulement moins bonne — alors qu'échouer ici
 * arrêterait la file entière pour une amélioration facultative.
 */
export async function lireLexique(): Promise<Correction[]> {
  const brut = await transaction([MAGASIN_LEXIQUE], 'readonly', ([lexique]) =>
    demander<LexiqueBrut | undefined>(lexique.get(CLE_LEXIQUE)),
  );
  if (!brut) return [];
  if (!brut.scelle) return brut.corrections ?? [];
  try {
    return await ouvrirValeur<Correction[]>(brut.scelle);
  } catch {
    return [];
  }
}

/**
 * Retient ces corrections, en fusionnant avec ce qui est déjà su.
 *
 * Une correction refaite l'emporte sur une correction vue une fois : c'est le seul
 * arbitrage, et il est volontairement grossier. Décider finement lequel de deux
 * usages est le bon demanderait de comprendre les phrases, et se tromper ferait
 * réécrire un mot juste en un mot faux — le pire service possible.
 */
export async function retenirCorrections(nouvelles: Correction[]): Promise<Correction[]> {
  const parMot = new Map((await lireLexique()).map((c) => [c.malEntendu, c]));

  for (const neuve of nouvelles) {
    const connue = parMot.get(neuve.malEntendu);
    if (!connue) {
      parMot.set(neuve.malEntendu, { ...neuve });
    } else if (connue.correction === neuve.correction) {
      connue.fois += neuve.fois;
    } else if (neuve.fois > connue.fois) {
      parMot.set(neuve.malEntendu, { ...neuve });
    }
  }

  const corrections = [...parMot.values()];
  if (corrections.length === 0) return corrections;

  const brut: LexiqueBrut = { id: CLE_LEXIQUE };
  if (await chiffre()) {
    brut.scelle = await scellerValeur(corrections);
  } else {
    brut.corrections = corrections;
  }
  await transaction([MAGASIN_LEXIQUE], 'readwrite', ([lexique]) => {
    lexique.put(brut);
  });
  return corrections;
}

/**
 * Réécrit le lexique tel que le dépôt l'écrit maintenant : scellé, ou en clair.
 *
 * Sert à la reprise qui suit l'activation ou la levée du chiffrement. Passer par
 * [retenirCorrections] fait relire, refusionner et réécrire dans le mode courant —
 * le même chemin que les écritures ordinaires, donc le seul qui soit testé.
 */
export async function reecrireLexique(): Promise<void> {
  await retenirCorrections([]);
}
