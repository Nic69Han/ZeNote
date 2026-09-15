/**
 * Le diagnostic de la dictée.
 *
 * Il existe parce qu'une panne de reconnaissance vocale ne se reproduit pas ailleurs :
 * elle dépend du navigateur, de l'appareil, du réseau et des autorisations de celui qui
 * l'utilise. Plutôt que de deviner à distance, l'application sait dire ce qui se passe
 * chez elle — et rend un texte que l'on peut recopier tel quel.
 *
 * Rien n'est transmis : tout ce qui suit est lu sur l'appareil et affiché dessus.
 */

import { expliquerEchec, transcriptionDisponible } from './transcription.ts';

export interface Constat {
  /** Le moteur de reconnaissance existe-t-il dans ce navigateur ? */
  moteurPresent: boolean;
  /** L'enregistrement audio est-il possible ? */
  microPresent: boolean;
  /** État de l'autorisation micro, quand le navigateur sait le dire. */
  autorisation: string;
  /** Réseau au moment du test — la reconnaissance de Chrome en dépend. */
  enLigne: boolean;
  /** Ce que le moteur a rendu : du texte, un code d'erreur, ou rien. */
  issue: string;
  /** L'issue en clair. */
  explication: string;
  /** Le texte reconnu, s'il y en a eu. */
  texte: string;
}

/** Combien de temps on laisse au moteur avant de conclure qu'il n'a rien rendu. */
const DELAI_MS = 5000;

/** Met le constat en un texte d'un seul tenant, prêt à être recopié. */
export function enTexte(c: Constat, version: string): string {
  return [
    `ZeNote — diagnostic de la dictée`,
    `version : ${version}`,
    `moteur de reconnaissance : ${c.moteurPresent ? 'présent' : 'absent'}`,
    `micro : ${c.microPresent ? 'disponible' : 'indisponible'}`,
    `autorisation : ${c.autorisation}`,
    `réseau : ${c.enLigne ? 'en ligne' : 'hors ligne'}`,
    `issue : ${c.issue}`,
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

/**
 * Lance la reconnaissance SEULE — sans enregistreur — et rapporte ce qu'elle fait.
 *
 * L'isoler est le point : si elle échoue ici aussi, la panne ne vient pas de la
 * cohabitation avec l'enregistrement audio, et la piste change.
 */
export async function diagnostiquer(): Promise<Constat> {
  const moteurPresent = transcriptionDisponible();
  const microPresent =
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined';
  const autorisation = await autorisationMicro();
  const enLigne = typeof navigator !== 'undefined' && navigator.onLine !== false;

  if (!moteurPresent) {
    return {
      moteurPresent, microPresent, autorisation, enLigne,
      issue: 'moteur absent',
      explication: "ce navigateur n'a pas de reconnaissance vocale ; essayez Chrome",
      texte: '',
    };
  }

  const Fabrique = (globalThis as unknown as {
    webkitSpeechRecognition?: new () => Record<string, unknown>;
    SpeechRecognition?: new () => Record<string, unknown>;
  });
  const F = Fabrique.webkitSpeechRecognition ?? Fabrique.SpeechRecognition;

  let texte = '';
  const issue = await new Promise<string>((resoudre) => {
    let fini = false;
    const finir = (v: string) => { if (!fini) { fini = true; resoudre(v); } };
    let moteur: Record<string, unknown>;
    try {
      moteur = new (F as new () => Record<string, unknown>)();
    } catch (e) {
      finir(`démarrage impossible : ${e instanceof Error ? e.message : 'erreur'}`);
      return;
    }
    moteur.lang = 'fr-FR';
    moteur.continuous = true;
    moteur.interimResults = true;
    moteur.onresult = (e: unknown) => {
      const ev = e as { results: { length: number; [i: number]: { 0: { transcript: string } } } };
      for (let i = 0; i < ev.results.length; i += 1) texte += `${ev.results[i][0].transcript} `;
      texte = texte.replace(/\s+/g, ' ').trim();
    };
    moteur.onerror = (e: unknown) => finir((e as { error?: string })?.error ?? 'erreur sans code');
    moteur.onend = () => finir(texte ? 'texte reconnu' : 'terminé sans rien reconnaître');
    try {
      (moteur.start as () => void)();
    } catch (e) {
      finir(`start a échoué : ${e instanceof Error ? e.message : 'erreur'}`);
      return;
    }
    setTimeout(() => {
      try { (moteur.stop as () => void)(); } catch { /* le moteur est déjà arrêté */ }
      finir(texte ? 'texte reconnu' : 'aucune réponse en 5 secondes');
    }, DELAI_MS);
  });

  return {
    moteurPresent, microPresent, autorisation, enLigne, issue,
    explication: texte ? 'la dictée fonctionne sur cet appareil' : expliquerEchec(issue),
    texte,
  };
}
