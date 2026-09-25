/**
 * Le diagnostic de la dictée.
 *
 * Il existe parce qu'une panne ne se reproduit pas ailleurs : elle tient au
 * navigateur, à l'appareil et aux autorisations de celui qui s'en sert. Plutôt que
 * de deviner à distance, l'application sait dire ce qui se passe chez elle — et rend
 * un texte que l'on peut recopier tel quel.
 *
 * Le test fait exactement ce que fait une capture, mesures en plus : trois secondes
 * d'enregistrement au micro, puis la transcription embarquée sur cet audio. Rien
 * n'est transmis : tout ce qui suit est lu sur l'appareil et affiché dessus.
 */

import { Enregistreur, audioDisponible } from './enregistreur.ts';
import { chargerModele, transcrireAudio, transcriptionLocaleDisponible } from './transcripteurLocal.ts';

export interface Constat {
  /** Le navigateur peut-il faire tourner le moteur (WebAssembly, Worker, audio) ? */
  moteurPossible: boolean;
  /** L'enregistrement audio est-il possible ? */
  microPresent: boolean;
  /** État de l'autorisation micro, quand le navigateur sait le dire. */
  autorisation: string;
  /** Temps de chargement du modèle, ou ce qui l'a empêché. */
  modele: string;
  /** Ce que l'enregistrement a donné : durée et poids, ou ce qui l'a empêché. */
  enregistrement: string;
  /** Ce que la transcription a rendu : durée du travail, ou ce qui l'a empêchée. */
  transcription: string;
  /** L'issue en clair. */
  explication: string;
  /** Le texte reconnu, s'il y en a eu. */
  texte: string;
}

/** Combien de temps on enregistre pour le test. */
const DUREE_MS = 3000;

/** Met le constat en un texte d'un seul tenant, prêt à être recopié. */
export function enTexte(c: Constat, version: string): string {
  return [
    `ZeNote — diagnostic de la dictée`,
    `version : ${version}`,
    `moteur embarqué possible : ${c.moteurPossible ? 'oui' : 'non'}`,
    `micro : ${c.microPresent ? 'disponible' : 'indisponible'}`,
    `autorisation : ${c.autorisation}`,
    `modèle : ${c.modele}`,
    `enregistrement : ${c.enregistrement}`,
    `transcription : ${c.transcription}`,
    `en clair : ${c.explication}`,
    c.texte ? `texte reconnu : « ${c.texte} »` : `texte reconnu : aucun`,
  ].join('\n');
}

async function autorisationMicro(): Promise<string> {
  try {
    const p = (navigator as unknown as {
      permissions?: { query(d: { name: string }): Promise<{ state: string }> };
    }).permissions;
    if (!p) return 'inconnue (le navigateur ne le dit pas)';
    return (await p.query({ name: 'microphone' })).state;
  } catch {
    return 'inconnue (le navigateur ne le dit pas)';
  }
}

function message(erreur: unknown): string {
  return erreur instanceof Error ? erreur.message : 'erreur inconnue';
}

/**
 * Enregistre trois secondes, transcrit, et rapporte chaque étape avec son temps.
 *
 * Chaque étape est mesurée séparément : « rien reconnu » n'a pas la même cause
 * selon que le modèle a mis deux secondes à charger ou n'a jamais chargé, ou que
 * l'enregistrement pèse zéro octet.
 */
export async function diagnostiquer(): Promise<Constat> {
  const moteurPossible = transcriptionLocaleDisponible();
  const microPresent = audioDisponible();
  const autorisation = await autorisationMicro();
  const constat: Constat = {
    moteurPossible,
    microPresent,
    autorisation,
    modele: 'non chargé',
    enregistrement: 'non tenté',
    transcription: 'non tentée',
    explication: '',
    texte: '',
  };

  if (!moteurPossible) {
    constat.explication =
      "ce navigateur ne peut pas faire tourner la transcription embarquée ; les captures resteront à écrire en Revue";
    return constat;
  }

  const t0 = performance.now();
  try {
    await chargerModele();
    constat.modele = `chargé en ${Math.round(performance.now() - t0)} ms`;
  } catch (erreur) {
    constat.modele = `impossible à charger : ${message(erreur)}`;
    constat.explication =
      'le modèle de reconnaissance ne se charge pas — réseau coupé au premier usage, ou mémoire insuffisante';
    return constat;
  }

  if (!microPresent) {
    constat.explication = "pas de micro utilisable dans ce navigateur ; la capture écrite prend le relais";
    return constat;
  }

  const enregistreur = new Enregistreur();
  if (!(await enregistreur.demarrer())) {
    constat.enregistrement = 'refusé';
    constat.explication = "le micro n'a pas été autorisé ; accordez l'autorisation puis relancez le test";
    return constat;
  }
  await new Promise((resoudre) => setTimeout(resoudre, DUREE_MS));
  const audio = await enregistreur.arreter();
  if (!audio.blob) {
    constat.enregistrement = 'aucun audio rendu';
    constat.explication = "le micro est ouvert mais ne rend rien ; une autre application le tient peut-être";
    return constat;
  }
  constat.enregistrement = `${Math.round(audio.dureeMs / 100) / 10} s, ${audio.blob.size} octets`;

  const t1 = performance.now();
  try {
    constat.texte = (await transcrireAudio(audio.blob)).texte;
    constat.transcription = `faite en ${Math.round(performance.now() - t1)} ms`;
  } catch (erreur) {
    constat.transcription = `échouée : ${message(erreur)}`;
    constat.explication = "l'audio est enregistré mais le moteur n'a pas pu le lire";
    return constat;
  }

  constat.explication = constat.texte
    ? 'la dictée fonctionne sur cet appareil'
    : "tout a fonctionné mais rien n'a été reconnu : parlez plus près, ou plus fort — l'audio, lui, est bien capté";
  return constat;
}
