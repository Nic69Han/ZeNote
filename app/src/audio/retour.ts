/**
 * Le retour de prise en charge : vibration et son court.
 *
 * Règle non négociable (spec `capture`) : ce retour n'est émis qu'**après** écriture
 * durable en base, jamais sur une intention d'écriture. C'est lui qui autorise
 * l'utilisateur à oublier. Le retour d'échec est volontairement distinct — plus grave,
 * plus long — pour qu'aucune confusion ne soit possible sans regarder l'écran.
 */

let contexte: AudioContext | null = null;

function audio(): AudioContext | null {
  try {
    const Fabrique =
      (globalThis as unknown as { AudioContext?: typeof AudioContext }).AudioContext ??
      (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Fabrique) return null;
    contexte ??= new Fabrique();
    if (contexte.state === 'suspended') void contexte.resume();
    return contexte;
  } catch {
    return null;
  }
}

function bip(frequence: number, dureeMs: number, volume = 0.12, retardMs = 0): void {
  const ctx = audio();
  if (!ctx) return;
  const debut = ctx.currentTime + retardMs / 1000;
  const oscillateur = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillateur.type = 'sine';
  oscillateur.frequency.value = frequence;
  gain.gain.setValueAtTime(0, debut);
  gain.gain.linearRampToValueAtTime(volume, debut + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, debut + dureeMs / 1000);
  oscillateur.connect(gain).connect(ctx.destination);
  oscillateur.start(debut);
  oscillateur.stop(debut + dureeMs / 1000 + 0.02);
}

function vibrer(motif: number | number[]): void {
  try {
    navigator.vibrate?.(motif);
  } catch {
    /* la vibration est un confort, jamais une condition */
  }
}

/** Début d'enregistrement : un signal discret, perceptible sans regarder. */
export function retourDebut(sonActif = true): void {
  vibrer(18);
  if (sonActif) bip(660, 90, 0.09);
}

/** Capture écrite durablement : c'est à moi maintenant, tu peux oublier. */
export function retourEcrite(sonActif = true): void {
  vibrer([24, 40, 24]);
  if (sonActif) {
    bip(880, 80, 0.1);
    bip(1320, 110, 0.09, 70);
  }
}

/** Échec d'écriture : distinct, grave, insistant. Rien n'est parti. */
export function retourEchec(sonActif = true): void {
  vibrer([120, 70, 120]);
  if (sonActif) {
    bip(220, 180, 0.14);
    bip(165, 260, 0.14, 170);
  }
}
