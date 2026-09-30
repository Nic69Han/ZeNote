/**
 * Décoder un enregistrement en échantillons, pour y chercher les pauses.
 *
 * `AudioContext.decodeAudioData` n'existe ni sous Node ni dans les tests : ce module est
 * le seul endroit qui en dépend, et le lecteur le reçoit par injection
 * (`brancherLecteur`). Tout le reste de l'écoute accélérée se vérifie sans navigateur.
 */

export interface Echantillons {
  echantillons: Float32Array;
  frequence: number;
}

/** Ce qui décode un enregistrement. Remplaçable : c'est ainsi que les tests s'en passent. */
export type Decodeur = (audio: Blob) => Promise<Echantillons>;

/**
 * Le décodage réel, à 8 kHz quand le navigateur le permet.
 *
 * La parole n'a rien à gagner au-delà, et une réunion d'une heure décodée à 48 kHz
 * pèse plus de 600 Mo en mémoire — de quoi tuer l'onglet d'un téléphone. À 8 kHz,
 * mono, elle en pèse une centaine. Un navigateur qui refuse la fréquence demandée
 * décode à la sienne : c'est plus lourd, pas faux.
 *
 * Les canaux sont moyennés : une voix captée d'un seul côté d'un enregistrement
 * stéréo ne doit pas passer pour un silence de l'autre.
 */
export const decoderEchantillons: Decodeur = async (audio) => {
  const Contexte: typeof AudioContext | undefined =
    globalThis.AudioContext ??
    (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Contexte) throw new Error('Décodage audio indisponible sur ce navigateur');

  let contexte: AudioContext;
  try {
    contexte = new Contexte({ sampleRate: 8000 });
  } catch {
    contexte = new Contexte();
  }

  try {
    const tampon = await contexte.decodeAudioData(await audio.arrayBuffer());
    const canaux = tampon.numberOfChannels;
    if (canaux === 1) {
      return { echantillons: tampon.getChannelData(0), frequence: tampon.sampleRate };
    }
    const moyenne = new Float32Array(tampon.length);
    for (let c = 0; c < canaux; c += 1) {
      const canal = tampon.getChannelData(c);
      for (let i = 0; i < moyenne.length; i += 1) moyenne[i] += canal[i] / canaux;
    }
    return { echantillons: moyenne, frequence: tampon.sampleRate };
  } finally {
    // Le tampon décodé reste valide une fois le contexte refermé.
    void contexte.close().catch(() => {});
  }
};
