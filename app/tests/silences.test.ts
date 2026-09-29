/**
 * Les pauses d'un enregistrement : ce qui est sauté, ce qui est gardé.
 *
 * Les échantillons sont synthétiques (une sinusoïde pour la voix, des zéros ou un
 * léger bruit pour le silence) : le décodage `AudioContext` n'existe pas sous Node, et
 * il n'a d'ailleurs rien à prouver ici. Ce qui se vérifie est la décision — quelle
 * pause on saute, laquelle on laisse — car c'est elle qui, mal réglée, coupe un mot ou
 * laisse passer les hésitations.
 */

import { describe, expect, it } from 'vitest';
import {
  DUREE_MIN_SILENCE,
  GARDE_SILENCE,
  positionDeSaut,
  silences,
} from '../src/audio/silences.ts';

const FREQUENCE = 8000;

type Segment = { voix: number } | { silence: number } | { bruit: number };

/** Assemble un signal : de la « voix » (440 Hz), du silence parfait, ou un bruit de fond. */
function signal(segments: Segment[], frequence = FREQUENCE): Float32Array {
  const morceaux: Float32Array[] = segments.map((segment) => {
    const duree = 'voix' in segment ? segment.voix : 'silence' in segment ? segment.silence : segment.bruit;
    const n = Math.round(duree * frequence);
    const morceau = new Float32Array(n);
    if ('voix' in segment) {
      for (let i = 0; i < n; i += 1) morceau[i] = 0.5 * Math.sin((2 * Math.PI * 440 * i) / frequence);
    } else if ('bruit' in segment) {
      // Un bruit déterministe : la reproductibilité prime sur le réalisme.
      for (let i = 0; i < n; i += 1) morceau[i] = 0.004 * Math.sin(i * 12.9898);
    }
    return morceau;
  });
  const sortie = new Float32Array(morceaux.reduce((total, m) => total + m.length, 0));
  let decalage = 0;
  for (const morceau of morceaux) {
    sortie.set(morceau, decalage);
    decalage += morceau.length;
  }
  return sortie;
}

describe('Pause longue sautée', () => {
  it('trouve une pause de deux secondes entre deux phrases', () => {
    const pauses = silences(signal([{ voix: 1 }, { silence: 2 }, { voix: 1 }]), FREQUENCE);
    expect(pauses).toHaveLength(1);
    expect(pauses[0].debut).toBeCloseTo(1, 1);
    expect(pauses[0].fin).toBeCloseTo(3, 1);
  });

  it('trouve la pause même sur un bruit de fond, parce que le seuil suit le niveau de parole', () => {
    // Un seuil absolu confondrait ce souffle avec de la parole, ou l'inverse selon le micro.
    const pauses = silences(signal([{ voix: 1 }, { bruit: 2 }, { voix: 1 }]), FREQUENCE);
    expect(pauses).toHaveLength(1);
    expect(pauses[0].debut).toBeCloseTo(1, 1);
    expect(pauses[0].fin).toBeCloseTo(3, 1);
  });

  it('suit le niveau de parole : la même pause est trouvée sur une voix faible', () => {
    const faible = signal([{ voix: 1 }, { silence: 2 }, { voix: 1 }]).map((v) => v * 0.02);
    expect(silences(faible, FREQUENCE)).toHaveLength(1);
  });

  it('trouve chaque pause, dans l’ordre', () => {
    const pauses = silences(
      signal([{ voix: 1 }, { silence: 1 }, { voix: 1 }, { silence: 1.5 }, { voix: 1 }]),
      FREQUENCE,
    );
    expect(pauses).toHaveLength(2);
    expect(pauses[0].fin).toBeLessThan(pauses[1].debut);
  });

  it('saute une pause de deux secondes en 300 ms environ', () => {
    const pauses = silences(signal([{ voix: 1 }, { silence: 2 }, { voix: 1 }]), FREQUENCE);
    const { debut, fin } = pauses[0];

    // Entrée dans la pause : on garde 150 ms de silence, puis on saute jusqu'à 150 ms
    // avant la reprise. Reste à entendre 150 + 150 = 300 ms de pause.
    const cible = positionDeSaut(pauses, debut + GARDE_SILENCE / 2);
    expect(cible).toBeCloseTo(fin - GARDE_SILENCE / 2, 5);
    const restant = GARDE_SILENCE / 2 + (fin - (cible as number));
    expect(restant).toBeCloseTo(0.3, 5);
  });
});

describe('Pause courte conservée', () => {
  it('lit telle quelle une pause de 400 ms', () => {
    const pauses = silences(signal([{ voix: 1 }, { silence: 0.4 }, { voix: 1 }]), FREQUENCE);
    expect(pauses).toEqual([]);
  });

  it('garde une pause juste sous le seuil de 700 ms et prend celle qui le dépasse', () => {
    expect(silences(signal([{ voix: 1 }, { silence: 0.66 }, { voix: 1 }]), FREQUENCE)).toEqual([]);
    expect(silences(signal([{ voix: 1 }, { silence: 0.8 }, { voix: 1 }]), FREQUENCE)).toHaveLength(1);
    expect(DUREE_MIN_SILENCE).toBe(0.7);
  });

  it('ne coupe jamais une pause interrompue par un bruit : elle en devient deux plus courtes', () => {
    // Deux fois 500 ms de silence séparées par un claquement : aucune ne passe le seuil.
    const pauses = silences(
      signal([{ voix: 1 }, { silence: 0.5 }, { voix: 0.04 }, { silence: 0.5 }, { voix: 1 }]),
      FREQUENCE,
    );
    expect(pauses).toEqual([]);
  });
});

describe('cas limites', () => {
  it('ne trouve rien dans un enregistrement vide', () => {
    expect(silences(new Float32Array(0), FREQUENCE)).toEqual([]);
  });

  it('ne trouve rien dans un enregistrement entièrement muet : sauter un fichier entier n’aide personne', () => {
    expect(silences(signal([{ silence: 5 }]), FREQUENCE)).toEqual([]);
  });

  it('ne trouve rien dans une parole continue', () => {
    expect(silences(signal([{ voix: 4 }]), FREQUENCE)).toEqual([]);
  });

  it('compte une pause qui ouvre ou qui ferme l’enregistrement', () => {
    const pauses = silences(signal([{ silence: 1.5 }, { voix: 1 }, { silence: 1.5 }]), FREQUENCE);
    expect(pauses).toHaveLength(2);
    expect(pauses[0].debut).toBe(0);
    expect(pauses[1].fin).toBeCloseTo(4, 1);
  });

  it('respecte un seuil et une durée minimale donnés', () => {
    const son = signal([{ voix: 1 }, { silence: 0.4 }, { voix: 1 }]);
    expect(silences(son, FREQUENCE, { dureeMin: 0.3 })).toHaveLength(1);
    expect(silences(son, FREQUENCE, { seuil: 0.9 })).toHaveLength(1);
  });

  it('n’a pas besoin d’une fréquence particulière', () => {
    const pauses = silences(signal([{ voix: 1 }, { silence: 2 }, { voix: 1 }], 16000), 16000);
    expect(pauses).toHaveLength(1);
  });
});

describe('position de saut', () => {
  const pauses = [
    { debut: 1, fin: 3 },
    { debut: 10, fin: 11 },
  ];

  it('ne saute pas tant que la lecture n’est pas dans une pause', () => {
    expect(positionDeSaut(pauses, 0.5)).toBeNull();
    expect(positionDeSaut(pauses, 5)).toBeNull();
    expect(positionDeSaut(pauses, 12)).toBeNull();
  });

  it('laisse 150 ms de silence avant de sauter, pour ne jamais mordre sur un mot', () => {
    expect(positionDeSaut(pauses, 1.1)).toBeNull();
    expect(positionDeSaut(pauses, 1.16)).toBeCloseTo(2.85, 9);
    expect(positionDeSaut(pauses, 2)).toBeCloseTo(2.85, 9);
  });

  it('ne saute plus une fois arrivé à la marge de fin : le saut ne se répète pas', () => {
    expect(positionDeSaut(pauses, 2.86)).toBeNull();
    expect(positionDeSaut(pauses, 2.99)).toBeNull();
    expect(positionDeSaut(pauses, 3)).toBeNull();
  });

  it('trouve la bonne pause parmi plusieurs', () => {
    expect(positionDeSaut(pauses, 10.5)).toBeCloseTo(10.85, 9);
  });

  it('rend null sans aucune pause', () => {
    expect(positionDeSaut([], 4)).toBeNull();
  });
});
