/**
 * Le lecteur de l'audio d'origine.
 *
 * Trois choses se vérifient ici, et ce sont les trois qui cassent en silence :
 * l'audio n'est pas chargé tant qu'on ne l'a pas demandé, l'URL objet est bien
 * libérée au démontage, et l'absence d'audio est expliquée au lieu d'être masquée
 * par un lecteur mort.
 *
 * L'environnement est `node` : le DOM minimal monté ici est celui que `ui/dom.ts`
 * utilise réellement, rien de plus.
 */

import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import {
  SILENCES_NON_DETECTABLES,
  brancherLecteur,
  duree,
  lecteurAudio,
} from '../src/ui/lecteur.ts';
import {
  brancherStockageEcoute,
  chargerPreferences,
  preferences,
  type PreferencesEcoute,
  type StockageEcoute,
} from '../src/services/ecoute.ts';
import type { Echantillons } from '../src/audio/decodage.ts';
import type { Capture } from '../src/stockage/depot.ts';

class NoeudFaux {
  readonly enfants: NoeudFaux[] = [];
  readonly attributs = new Map<string, string>();
  readonly ecouteurs = new Map<string, EventListener[]>();
  /** Le navigateur expose ces champs sur un `<audio>` ; le faux les imite au minimum. */
  duration = Number.NaN;
  currentTime = 0;
  readyState = 0;
  pauses = 0;
  /** Ce que le navigateur expose sur un `<audio>` et que l'écoute accélérée règle. */
  playbackRate = 1;
  defaultPlaybackRate = 1;
  preservesPitch = false;
  paused = true;
  ended = false;

  constructor(readonly balise: string) {}

  setAttribute(nom: string, valeur: string): void {
    this.attributs.set(nom, valeur);
  }

  getAttribute(nom: string): string | null {
    return this.attributs.get(nom) ?? null;
  }

  removeAttribute(nom: string): void {
    this.attributs.delete(nom);
  }

  addEventListener(type: string, ecouteur: EventListener): void {
    const liste = this.ecouteurs.get(type) ?? [];
    liste.push(ecouteur);
    this.ecouteurs.set(type, liste);
  }

  declencher(type: string): void {
    for (const ecouteur of this.ecouteurs.get(type) ?? []) {
      ecouteur({ type } as unknown as Event);
    }
  }

  append(...noeuds: NoeudFaux[]): void {
    this.enfants.push(...noeuds);
  }

  load(): void {}
  pause(): void {
    this.pauses += 1;
  }
  play(): Promise<void> {
    return Promise.resolve();
  }

  get textContent(): string {
    return this.attributs.get('texte') ?? '';
  }

  set textContent(valeur: string) {
    this.attributs.set('texte', valeur);
  }
}

/** Les URL objet créées et libérées, pour vérifier qu'aucune ne reste ouverte. */
const ouvertes = new Set<string>();
let compteur = 0;

beforeAll(() => {
  (globalThis as unknown as { document: unknown }).document = {
    createElement: (balise: string) => new NoeudFaux(balise),
    createTextNode: (texte: string) => new NoeudFaux(`#texte:${texte}`),
    getElementById: () => null,
  };
  (globalThis as unknown as { URL: unknown }).URL = {
    createObjectURL: () => {
      const adresse = `blob:faux/${(compteur += 1)}`;
      ouvertes.add(adresse);
      return adresse;
    },
    revokeObjectURL: (adresse: string) => {
      ouvertes.delete(adresse);
    },
  };
});

beforeEach(() => {
  ouvertes.clear();
  brancherStockageEcoute(memoire().stockage);
  brancherLecteur(null);
});

afterEach(() => {
  expect([...ouvertes], 'une URL objet est restée ouverte').toEqual([]);
});

function capture(partiel: Partial<Capture> = {}): Capture {
  return {
    id: 'cap-1',
    creeLe: '2026-09-14T09:00:00.000Z',
    source: 'VOCALE',
    texte: 'Rappeler le couvreur pour le devis.',
    etatTranscription: 'OK',
    dureeMs: 12_000,
    audio: { taille: 1 } as unknown as Blob,
    aAudio: true,
    audioOctets: 1,
    audioType: 'audio/webm',
    incomplete: false,
    analysee: true,
    ...partiel,
  };
}

/** Le `<audio>` du lecteur, tel que le DOM minimal le rend. */
function balise(lecteur: { noeud: unknown }): NoeudFaux {
  const noeud = lecteur.noeud as unknown as NoeudFaux;
  const trouve = noeud.enfants.find((enfant) => enfant.balise === 'audio');
  if (!trouve) throw new Error('Le lecteur ne porte aucune balise audio.');
  return trouve;
}

describe('durée lisible', () => {
  it('dit les secondes seules en dessous d’une minute', () => {
    expect(duree(0)).toBe('0 s');
    expect(duree(7_400)).toBe('7 s');
  });

  it('dit minutes et secondes au-delà, sans perdre le zéro', () => {
    expect(duree(64_000)).toBe('1 min 04');
    expect(duree(125_000)).toBe('2 min 05');
  });

  it('ne rend jamais une durée négative', () => {
    expect(duree(-5_000)).toBe('0 s');
  });
});

describe('absence d’audio', () => {
  it('dit qu’une capture écrite n’en a pas, plutôt que de montrer un lecteur mort', () => {
    const lecteur = lecteurAudio(capture({ source: 'ECRITE', audio: null }));
    expect(lecteur.disponible).toBe(false);
    expect((lecteur.noeud as unknown as NoeudFaux).textContent).toContain('pas d’audio');
  });

  it('distingue l’enregistrement interrompu de l’audio simplement absent', () => {
    const interrompu = lecteurAudio(capture({ audio: null, incomplete: true }));
    expect(interrompu.disponible).toBe(false);
    expect((interrompu.noeud as unknown as NoeudFaux).textContent).toContain('interrompu');

    const sansAudio = lecteurAudio(capture({ audio: null }));
    expect((sansAudio.noeud as unknown as NoeudFaux).textContent).not.toContain('interrompu');
  });

  it('dit qu’une capture introuvable n’a plus de source', () => {
    const lecteur = lecteurAudio(undefined);
    expect(lecteur.disponible).toBe(false);
    expect((lecteur.noeud as unknown as NoeudFaux).textContent).toContain('introuvable');
  });

  it('ne casse pas quand on demande à écouter ce qui n’existe pas', () => {
    const lecteur = lecteurAudio(undefined);
    expect(() => lecteur.allerA(3_000)).not.toThrow();
    lecteur.demonter();
  });
});

describe('chargement différé', () => {
  it('ne crée aucune URL objet tant que la source n’est pas ouverte', () => {
    const lecteur = lecteurAudio(capture());
    expect(ouvertes.size).toBe(0);
    expect(balise(lecteur).getAttribute('src')).toBeNull();
    lecteur.demonter();
  });

  it('crée l’URL à l’ouverture, une seule fois', () => {
    const lecteur = lecteurAudio(capture());
    lecteur.ouvrir();
    const premiere = balise(lecteur).getAttribute('src');
    expect(premiere).toMatch(/^blob:/);

    lecteur.ouvrir();
    expect(ouvertes.size).toBe(1);
    expect(balise(lecteur).getAttribute('src')).toBe(premiere);

    lecteur.demonter();
  });

  it('libère l’URL au démontage, et supporte un démontage répété', () => {
    const lecteur = lecteurAudio(capture());
    lecteur.ouvrir();
    expect(ouvertes.size).toBe(1);

    lecteur.demonter();
    expect(ouvertes.size).toBe(0);
    expect(balise(lecteur).getAttribute('src')).toBeNull();

    expect(() => lecteur.demonter()).not.toThrow();
  });
});

describe('démarrage au passage', () => {
  it('positionne dès que la durée est connue, et joue', () => {
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);

    lecteur.allerA(4_000);
    // L'audio n'a pas encore ses métadonnées : la position attend.
    expect(audio.currentTime).toBe(0);

    audio.duration = 12;
    audio.declencher('loadedmetadata');
    expect(audio.currentTime).toBe(4);

    lecteur.demonter();
  });

  it('positionne immédiatement quand les métadonnées sont déjà là', () => {
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    audio.readyState = 1;
    audio.duration = 12;

    lecteur.allerA(6_000);
    expect(audio.currentTime).toBe(6);

    lecteur.demonter();
  });

  it('ne va pas au-delà de la fin : une position estimée peut déborder', () => {
    // Le début du passage vient d'une estimation au prorata du texte. Rien ne garantit
    // qu'elle tombe dans l'enregistrement ; sauter après la fin rendrait un lecteur
    // muet là où le début de l'audio reste écoutable.
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    audio.readyState = 1;
    audio.duration = 5;

    lecteur.allerA(9_000);
    expect(audio.currentTime).toBe(0);

    lecteur.demonter();
  });

  it('tente quand même le positionnement sur une durée inconnue', () => {
    // Un enregistrement produit en flux annonce parfois une durée infinie : on ne peut
    // rien vérifier, et refuser de positionner perdrait le seul repère qu'on ait.
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    audio.readyState = 1;
    audio.duration = Number.POSITIVE_INFINITY;

    lecteur.allerA(3_000);
    expect(audio.currentTime).toBe(3);

    lecteur.demonter();
  });
});

// ------------------------------------------------------------ écoute accélérée

/** Un stockage de préférences en mémoire, qui garde trace de ce qu'on lui écrit. */
function memoire(initial: Partial<PreferencesEcoute> = {}) {
  const valeurs: PreferencesEcoute = { vitesse: 1, raccourcirSilences: false, ...initial };
  const ecrites: [string, number | boolean][] = [];
  const stockage: StockageEcoute = {
    lire: () => Promise.resolve({ ...valeurs }),
    ecrire: (cle, valeur) => {
      ecrites.push([cle, valeur]);
      if (cle === 'vitesseEcoute') valeurs.vitesse = valeur as PreferencesEcoute['vitesse'];
      else valeurs.raccourcirSilences = valeur as boolean;
      return Promise.resolve();
    },
  };
  return { stockage, ecrites, valeurs };
}

/** Tous les descendants d'un noeud du faux DOM. */
function descendants(racine: NoeudFaux): NoeudFaux[] {
  return racine.enfants.flatMap((enfant) => [enfant, ...descendants(enfant)]);
}

function trouver(lecteur: { noeud: unknown }, condition: (n: NoeudFaux) => boolean): NoeudFaux {
  const trouve = descendants(lecteur.noeud as NoeudFaux).find(condition);
  if (!trouve) throw new Error('Élément introuvable dans le lecteur.');
  return trouve;
}

const boutonVitesse = (lecteur: { noeud: unknown }, vitesse: string) =>
  trouver(lecteur, (n) => n.balise === 'button' && n.getAttribute('data-vitesse') === vitesse);

const interrupteur = (lecteur: { noeud: unknown }) =>
  trouver(lecteur, (n) => n.balise === 'button' && n.getAttribute('class') === 'lecteur__silences');

const messageSilences = (lecteur: { noeud: unknown }) =>
  trouver(lecteur, (n) => n.getAttribute('class') === 'lecteur__etat');

/** L'état des silences, tel que le lecteur l'expose sur son noeud racine. */
const etatSilences = (lecteur: { noeud: unknown }) =>
  (lecteur.noeud as NoeudFaux).getAttribute('data-silences');

/** Laisse les promesses en attente se résoudre. */
const laisserPasser = () => new Promise<void>((resoudre) => setTimeout(resoudre, 0));

describe('Écoute à 1,5×', () => {
  it('propose 1×, 1,5× et 2×, et démarre à 1× tant que rien n’a été choisi', () => {
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);

    const libelles = descendants(lecteur.noeud as unknown as NoeudFaux)
      .filter((n) => n.balise === 'button' && n.getAttribute('data-vitesse') !== null)
      .map((n) => n.textContent);
    expect(libelles).toEqual(['1×', '1,5×', '2×']);

    expect(audio.playbackRate).toBe(1);
    expect(boutonVitesse(lecteur, '1').getAttribute('aria-pressed')).toBe('true');
    lecteur.demonter();
  });

  it('lit à une fois et demie la vitesse, sans changer la hauteur de la voix', () => {
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);

    boutonVitesse(lecteur, '1.5').declencher('click');

    expect(audio.playbackRate).toBe(1.5);
    // Charger une source remet `playbackRate` à la valeur par défaut : elle suit.
    expect(audio.defaultPlaybackRate).toBe(1.5);
    expect(audio.preservesPitch).toBe(true);
    expect(boutonVitesse(lecteur, '1.5').getAttribute('aria-pressed')).toBe('true');
    expect(boutonVitesse(lecteur, '1').getAttribute('aria-pressed')).toBe('false');
    lecteur.demonter();
  });

  it('démarre l’écoute suivante à 1,5×, sur n’importe quel écran', () => {
    const premier = lecteurAudio(capture());
    boutonVitesse(premier, '1.5').declencher('click');
    premier.demonter();

    // Un autre écran, une autre capture : le lecteur naît déjà réglé.
    const suivant = lecteurAudio(capture({ id: 'cap-2' }));
    const audio = balise(suivant);
    expect(audio.playbackRate).toBe(1.5);
    expect(boutonVitesse(suivant, '1.5').getAttribute('aria-pressed')).toBe('true');

    // Et le chargement de la source, qui réinitialise la vitesse, ne la défait pas.
    suivant.ouvrir();
    audio.playbackRate = 1;
    audio.declencher('loadedmetadata');
    expect(audio.playbackRate).toBe(1.5);
    suivant.demonter();
  });

  it('retient la vitesse dans les réglages, pour qu’elle survive à un rechargement', async () => {
    const { stockage, ecrites, valeurs } = memoire();
    brancherStockageEcoute(stockage);

    const lecteur = lecteurAudio(capture());
    boutonVitesse(lecteur, '2').declencher('click');
    lecteur.demonter();
    expect(ecrites).toEqual([['vitesseEcoute', 2]]);

    // Rechargement : la mémoire est vide, les réglages, eux, ont gardé le choix.
    brancherStockageEcoute(memoire({ vitesse: valeurs.vitesse }).stockage);
    const apres = lecteurAudio(capture());
    await chargerPreferences();
    expect(preferences().vitesse).toBe(2);
    expect(balise(apres).playbackRate).toBe(2);
    apres.demonter();
  });

  it('règle aussi les lecteurs déjà à l’écran quand la vitesse est choisie sur l’un d’eux', () => {
    const a = lecteurAudio(capture({ id: 'cap-a' }));
    const b = lecteurAudio(capture({ id: 'cap-b' }));

    boutonVitesse(a, '2').declencher('click');

    expect(balise(b).playbackRate).toBe(2);
    a.demonter();
    b.demonter();
  });

  it('dit la vitesse réelle quand le menu du navigateur en a posé une autre', () => {
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);

    audio.playbackRate = 1.25;
    audio.declencher('ratechange');

    for (const vitesse of ['1', '1.5', '2']) {
      expect(boutonVitesse(lecteur, vitesse).getAttribute('aria-pressed')).toBe('false');
    }
    lecteur.demonter();
  });
});

// -------------------------------------------------------------- les silences

const FREQUENCE = 8000;

/** Voix (440 Hz) et silences alternés, en secondes : `[voix, silence, voix, …]`. */
function echantillonsDe(...durees: number[]): Echantillons {
  const total = durees.reduce((somme, d) => somme + Math.round(d * FREQUENCE), 0);
  const echantillons = new Float32Array(total);
  let position = 0;
  durees.forEach((duree, rang) => {
    const n = Math.round(duree * FREQUENCE);
    if (rang % 2 === 0) {
      for (let i = 0; i < n; i += 1) {
        echantillons[position + i] = 0.5 * Math.sin((2 * Math.PI * 440 * i) / FREQUENCE);
      }
    }
    position += n;
  });
  return { echantillons, frequence: FREQUENCE };
}

/** Des images d'animation pilotées à la main : chaque appel à `pas()` en joue une. */
function images() {
  const attente: (() => void)[] = [];
  return {
    image: (rappel: () => void) => {
      attente.push(rappel);
      return attente.length;
    },
    annulerImage: () => {
      attente.length = 0;
    },
    pas: () => attente.shift()?.(),
    enAttente: () => attente.length,
  };
}

/** Allume l'interrupteur sur un lecteur ouvert et attend la fin du décodage. */
async function allumerSilences(lecteur: ReturnType<typeof lecteurAudio>): Promise<void> {
  lecteur.ouvrir();
  interrupteur(lecteur).declencher('click');
  await laisserPasser();
}

/** La lecture est en cours à cette position. */
function lireA(audio: NoeudFaux, secondes: number): void {
  audio.paused = false;
  audio.currentTime = secondes;
  audio.declencher('play');
}

describe('Pause longue sautée', () => {
  it('saute la pause en 300 ms environ pendant la lecture', async () => {
    const animation = images();
    brancherLecteur({
      decodeur: () => Promise.resolve(echantillonsDe(1, 2, 1)),
      ...animation,
    });

    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    await allumerSilences(lecteur);
    expect(etatSilences(lecteur)).toBe('pret');

    // La lecture entre dans la pause (1 s à 3 s) : 150 ms plus tard, on saute jusqu'à
    // 150 ms avant la reprise.
    lireA(audio, 1.2);
    animation.pas();
    expect(audio.currentTime).toBeCloseTo(2.85, 5);

    // Et ne saute plus une fois arrivé.
    animation.pas();
    expect(audio.currentTime).toBeCloseTo(2.85, 5);
    lecteur.demonter();
  });

  it('dit combien de pauses ont été raccourcies, ou qu’il n’y en avait aucune', async () => {
    brancherLecteur({ decodeur: () => Promise.resolve(echantillonsDe(1, 2, 1)) });
    const lecteur = lecteurAudio(capture());
    await allumerSilences(lecteur);
    expect(messageSilences(lecteur).textContent).toContain('raccourcies');
    lecteur.demonter();

    brancherLecteur({ decodeur: () => Promise.resolve(echantillonsDe(3)) });
    // L'interrupteur est déjà allumé : ouvrir le lecteur suffit à chercher les pauses.
    const continu = lecteurAudio(capture({ id: 'cap-continue' }));
    continu.ouvrir();
    await laisserPasser();
    expect(messageSilences(continu).textContent).toContain('Aucune longue pause');
    continu.demonter();
  });

  it('cesse de surveiller quand la lecture s’arrête', async () => {
    const animation = images();
    brancherLecteur({ decodeur: () => Promise.resolve(echantillonsDe(1, 2, 1)), ...animation });
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    await allumerSilences(lecteur);

    lireA(audio, 0.5);
    expect(animation.enAttente()).toBe(1);
    audio.paused = true;
    audio.declencher('pause');
    expect(animation.enAttente()).toBe(0);
    lecteur.demonter();
  });

  it('éteint, ne saute rien et ne décode rien', () => {
    const animation = images();
    let decodages = 0;
    brancherLecteur({
      decodeur: () => {
        decodages += 1;
        return Promise.resolve(echantillonsDe(1, 2, 1));
      },
      ...animation,
    });

    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    lecteur.ouvrir();
    lireA(audio, 1.5);
    animation.pas();

    expect(decodages).toBe(0);
    expect(audio.currentTime).toBe(1.5);
    expect(interrupteur(lecteur).getAttribute('aria-pressed')).toBe('false');
    lecteur.demonter();
  });

  it('cesse de sauter dès que l’interrupteur est éteint', async () => {
    const animation = images();
    brancherLecteur({ decodeur: () => Promise.resolve(echantillonsDe(1, 2, 1)), ...animation });
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    await allumerSilences(lecteur);

    interrupteur(lecteur).declencher('click');
    expect(interrupteur(lecteur).getAttribute('aria-pressed')).toBe('false');
    lireA(audio, 1.5);
    animation.pas();
    expect(audio.currentTime).toBe(1.5);
    lecteur.demonter();
  });

  it('ne décode qu’à l’ouverture quand l’interrupteur était déjà allumé', async () => {
    let decodages = 0;
    brancherLecteur({
      decodeur: () => {
        decodages += 1;
        return Promise.resolve(echantillonsDe(1, 2, 1));
      },
    });
    brancherStockageEcoute(memoire({ raccourcirSilences: true }).stockage);
    await chargerPreferences();

    // Dix lecteurs de Revue qu'on n'écoutera pas ne doivent rien décoder.
    const lecteur = lecteurAudio(capture());
    await laisserPasser();
    expect(decodages).toBe(0);

    lecteur.ouvrir();
    await laisserPasser();
    expect(decodages).toBe(1);
    expect(etatSilences(lecteur)).toBe('pret');
    lecteur.demonter();
  });

  it('ne décode qu’une fois la même capture, pour toute la session', async () => {
    let decodages = 0;
    brancherLecteur({
      decodeur: () => {
        decodages += 1;
        return Promise.resolve(echantillonsDe(1, 2, 1));
      },
    });

    const premier = lecteurAudio(capture());
    await allumerSilences(premier);
    premier.demonter();

    const second = lecteurAudio(capture());
    await allumerSilences(second);
    expect(decodages).toBe(1);
    second.demonter();
  });
});

describe('Pause courte conservée', () => {
  it('lit telle quelle une pause de 400 ms', async () => {
    const animation = images();
    brancherLecteur({ decodeur: () => Promise.resolve(echantillonsDe(1, 0.4, 1)), ...animation });
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    await allumerSilences(lecteur);

    lireA(audio, 1.2);
    animation.pas();
    expect(audio.currentTime).toBe(1.2);
    lecteur.demonter();
  });
});

describe('repli quand les silences ne se détectent pas', () => {
  it('le dit, désactive l’interrupteur et laisse l’écoute normale disponible', async () => {
    brancherLecteur({ decodeur: () => Promise.reject(new Error('décodage impossible')) });
    const lecteur = lecteurAudio(capture());
    const audio = balise(lecteur);
    await allumerSilences(lecteur);

    expect(etatSilences(lecteur)).toBe('indisponible');
    expect(messageSilences(lecteur).textContent).toBe(SILENCES_NON_DETECTABLES);
    expect(messageSilences(lecteur).getAttribute('hidden')).toBeNull();
    expect(interrupteur(lecteur).getAttribute('aria-pressed')).toBe('false');
    expect(interrupteur(lecteur).getAttribute('disabled')).not.toBeNull();

    // L'écoute, elle, reste possible : l'audio se charge et se positionne.
    expect(audio.getAttribute('src')).toMatch(/^blob:/);
    audio.readyState = 1;
    audio.duration = 12;
    lecteur.allerA(4_000);
    expect(audio.currentTime).toBe(4);
    lecteur.demonter();
  });

  it('ne recommence pas à décoder un audio qui vient d’échouer sous le même lecteur', async () => {
    let decodages = 0;
    brancherLecteur({
      decodeur: () => {
        decodages += 1;
        return Promise.reject(new Error('non'));
      },
    });
    const lecteur = lecteurAudio(capture());
    await allumerSilences(lecteur);
    interrupteur(lecteur).declencher('click');
    interrupteur(lecteur).declencher('click');
    await laisserPasser();
    expect(decodages).toBe(1);
    lecteur.demonter();
  });
});

describe('Enregistrement intact', () => {
  it('laisse l’audio stocké identique, octet pour octet, après l’écoute', async () => {
    const octets = Uint8Array.from({ length: 4096 }, (_, i) => (i * 31 + 7) % 256);
    const audioStocke = new Blob([octets], { type: 'audio/webm;codecs=opus' });
    const avant = new Uint8Array(await audioStocke.arrayBuffer());

    let recu: Blob | null = null;
    const animation = images();
    brancherLecteur({
      decodeur: (blob) => {
        recu = blob;
        return Promise.resolve(echantillonsDe(1, 2, 1));
      },
      ...animation,
    });

    const lecteur = lecteurAudio(capture({ audio: audioStocke, audioOctets: octets.length }));
    const audio = balise(lecteur);
    await allumerSilences(lecteur);
    lireA(audio, 1.5);
    animation.pas();
    lecteur.allerA(500);
    lecteur.demonter();

    // Le lecteur a décodé le blob stocké lui-même, sans en produire un autre...
    expect(recu).toBe(audioStocke);
    // ... et il est, octet pour octet, ce qu'il était.
    const apres = new Uint8Array(await audioStocke.arrayBuffer());
    expect(audioStocke.size).toBe(octets.length);
    expect(audioStocke.type).toBe('audio/webm;codecs=opus');
    expect(Buffer.from(apres).equals(Buffer.from(avant))).toBe(true);
    expect(Buffer.from(apres).equals(Buffer.from(octets))).toBe(true);
  });
});
