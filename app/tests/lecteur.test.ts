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
import { duree, lecteurAudio } from '../src/ui/lecteur.ts';
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
