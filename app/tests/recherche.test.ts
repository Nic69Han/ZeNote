/**
 * L'écran Recherche.
 *
 * Ce qui est vérifié ici n'est pas la pertinence — elle appartient au cœur et
 * `RechercheTest.kt` s'en charge — mais le contrat d'affichage, qui est le seul
 * endroit où le produit peut mentir : une réponse montrée sans ses citations, une
 * absence maquillée en suggestion, ou une capacité en pause passée sous silence.
 *
 * L'environnement de test est `node` : il n'y a pas de DOM, et le projet n'embarque
 * pas jsdom. Ces tests montent donc le strict sous-ensemble du DOM que `ui/dom.ts`
 * utilise réellement — créer un nœud, poser un attribut, empiler des enfants, écouter
 * un événement. Rien de plus n'est simulé, pour que ce qui est vérifié reste le code
 * de l'écran et non une imitation du navigateur.
 */

import 'fake-indexeddb/auto';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ElementJson, ReponseJson } from '../src/core/regles.ts';
import {
  rechercherParPersonneObjets,
  rechercherParQuestionObjets,
} from '../src/core/regles.ts';
import {
  enregistrerCapture,
  remplacerElements,
  toutEffacer,
  type Capture,
} from '../src/stockage/depot.ts';
import { montrerRecherche } from '../src/ui/recherche.ts';

// Le vrai cœur répond ; on l'observe seulement, pour savoir laquelle des deux
// recherches l'écran a réellement appelée.
vi.mock('../src/core/regles.ts', async (importerVrai) => {
  const vrai = await importerVrai<typeof import('../src/core/regles.ts')>();
  return {
    ...vrai,
    rechercherParQuestionObjets: vi.fn(vrai.rechercherParQuestionObjets),
    rechercherParPersonneObjets: vi.fn(vrai.rechercherParPersonneObjets),
  };
});

// --------------------------------------------------------------- DOM minimal

class TexteFaux {
  constructor(readonly donnees: string) {}
  get textContent(): string {
    return this.donnees;
  }
}

class NoeudFaux {
  readonly enfants: (NoeudFaux | TexteFaux)[] = [];
  private readonly attributs = new Map<string, string>();
  private readonly ecouteurs = new Map<string, EventListener[]>();
  value = '';

  constructor(readonly balise: string) {}

  setAttribute(nom: string, valeur: string): void {
    this.attributs.set(nom, valeur);
    if (nom === 'value') this.value = valeur;
  }

  getAttribute(nom: string): string | null {
    return this.attributs.get(nom) ?? null;
  }

  addEventListener(type: string, ecouteur: EventListener): void {
    const liste = this.ecouteurs.get(type) ?? [];
    liste.push(ecouteur);
    this.ecouteurs.set(type, liste);
  }

  declencher(type: string): void {
    const evenement = { type, preventDefault: () => {} } as unknown as Event;
    for (const ecouteur of this.ecouteurs.get(type) ?? []) ecouteur(evenement);
  }

  append(...noeuds: (NoeudFaux | TexteFaux)[]): void {
    this.enfants.push(...noeuds);
  }

  replaceChildren(): void {
    this.enfants.length = 0;
  }

  get textContent(): string {
    return this.enfants.map((enfant) => enfant.textContent).join('');
  }

  set textContent(valeur: string) {
    this.enfants.length = 0;
    this.enfants.push(new TexteFaux(valeur));
  }
}

const annonces = new NoeudFaux('p');

beforeAll(() => {
  const documentFaux = {
    createElement: (balise: string) => new NoeudFaux(balise),
    createTextNode: (texte: string) => new TexteFaux(texte),
    getElementById: (id: string) => (id === 'annonces' ? annonces : null),
  };
  (globalThis as unknown as { document: unknown }).document = documentFaux;
});

/** Tous les nœuds portant cette classe, dans l'ordre du document. */
function parClasse(racine: NoeudFaux, classe: string): NoeudFaux[] {
  const trouves: NoeudFaux[] = [];
  const visiter = (noeud: NoeudFaux | TexteFaux): void => {
    if (!(noeud instanceof NoeudFaux)) return;
    if ((noeud.getAttribute('class') ?? '').split(' ').includes(classe)) trouves.push(noeud);
    for (const enfant of noeud.enfants) visiter(enfant);
  };
  visiter(racine);
  return trouves;
}

function unParClasse(racine: NoeudFaux, classe: string): NoeudFaux {
  const [premier] = parClasse(racine, classe);
  if (!premier) throw new Error(`Aucun nœud « ${classe} » dans l'écran.`);
  return premier;
}

/** Pose une question dans l'une des deux entrées et attend la réponse affichée. */
async function demander(racine: NoeudFaux, entree: string, question: string): Promise<void> {
  const formulaire = unParClasse(racine, `quete--${entree}`);
  unParClasse(formulaire, 'quete__champ').value = question;
  formulaire.declencher('submit');
  for (let essai = 0; essai < 100; essai++) {
    if (parClasse(racine, 'reponse__enonce').length > 0) return;
    await new Promise((resoudre) => setTimeout(resoudre, 1));
  }
  throw new Error('Aucune réponse affichée après attente.');
}

/** Ce que le cœur a réellement renvoyé, pour comparer l'écran à sa source. */
function reponseRendue(): ReponseJson {
  const appels = [
    ...vi.mocked(rechercherParQuestionObjets).mock.results,
    ...vi.mocked(rechercherParPersonneObjets).mock.results,
  ];
  expect(appels).toHaveLength(1);
  return appels[0].value as ReponseJson;
}

// ------------------------------------------------------------------ montages

/** L'état du réseau tel que l'écran le lit. Sans réseau par défaut : mode avion. */
function poserReseau(enLigne: boolean): void {
  Object.defineProperty(globalThis, 'navigator', {
    value: { onLine: enLigne },
    configurable: true,
    writable: true,
  });
}

const navigateurOrigine = Object.getOwnPropertyDescriptor(globalThis, 'navigator');

function capture(partiel: Partial<Capture> & { id: string }): Capture {
  return {
    creeLe: '2026-09-10T09:30:00.000Z',
    source: 'VOCALE',
    texte: '',
    etatTranscription: 'OK',
    dureeMs: null,
    audio: null,
    aAudio: false,
    audioOctets: null,
    audioType: null,
    incomplete: false,
    analysee: true,
    ...partiel,
  };
}

function element(partiel: Partial<ElementJson> & { id: string; captureId: string }): ElementJson {
  return {
    type: 'TACHE',
    texte: 'Faire quelque chose',
    debutCar: 0,
    finCar: 10,
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
    ...partiel,
  };
}

/** Deux captures sans rapport l'une avec l'autre : de quoi distinguer trouvé et rien. */
async function semerDeuxCaptures(): Promise<void> {
  await enregistrerCapture(
    capture({ id: 'cap-karim', texte: 'J’ai promis à Karim de relire le planning.' }),
  );
  await enregistrerCapture(
    capture({ id: 'cap-pain', texte: 'Acheter du pain en rentrant.', source: 'ECRITE' }),
  );
  await remplacerElements('cap-karim', [
    element({
      id: 'el-karim',
      captureId: 'cap-karim',
      type: 'ENGAGEMENT',
      texte: 'relire le planning',
      interlocuteur: 'Karim',
    }),
  ]);
  await remplacerElements('cap-pain', [
    element({ id: 'el-pain', captureId: 'cap-pain', texte: 'acheter du pain' }),
  ]);
}

async function ecran(): Promise<NoeudFaux> {
  const racine = new NoeudFaux('main');
  await montrerRecherche(racine as unknown as HTMLElement);
  return racine;
}

beforeEach(async () => {
  vi.clearAllMocks();
  annonces.textContent = '';
  poserReseau(false);
  await toutEffacer();
});

afterEach(() => {
  if (navigateurOrigine) Object.defineProperty(globalThis, 'navigator', navigateurOrigine);
});

// --------------------------------------------------------------------- tests

describe('réponse fondée sur la source', () => {
  it('montre autant de citations que la réponse du cœur en porte, chacune avec sa capture', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'mots', 'planning');

    const reponse = reponseRendue();
    expect(reponse.fondee).toBe(true);
    const citations = parClasse(racine, 'citation');
    expect(citations).toHaveLength(reponse.citations.length);
    expect(citations.length).toBeGreaterThan(0);

    // Chaque citation porte son extrait, sa raison, et le texte de la capture source.
    for (const [rang, citation] of citations.entries()) {
      const attendue = reponse.citations[rang];
      expect(unParClasse(citation, 'citation__extrait').textContent).toBe(attendue.extrait);
      expect(unParClasse(citation, 'citation__pourquoi').textContent).toBe(attendue.pourquoi);
      expect(citation.getAttribute('data-capture')).toBe(attendue.captureId);
    }
    expect(unParClasse(racine, 'source__texte').textContent).toBe(
      'J’ai promis à Karim de relire le planning.',
    );
  });

  it('annonce l’énoncé du cœur aux lecteurs d’écran, sans le reformuler', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'mots', 'planning');

    expect(unParClasse(racine, 'reponse__enonce').textContent).toBe(reponseRendue().enonce);
    expect(annonces.textContent).toBe(reponseRendue().enonce);
  });
});

describe('absence assumée', () => {
  it('dit l’absence telle que le cœur la formule et ne cite rien', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'mots', 'prestataire');

    const reponse = reponseRendue();
    expect(reponse.fondee).toBe(false);
    const enonce = unParClasse(racine, 'reponse__enonce');
    expect(enonce.textContent).toBe(reponse.enonce);
    expect(enonce.getAttribute('data-fondee')).toBe('false');
    // Ni citation, ni liste de citations, ni suggestion de rechange.
    expect(parClasse(racine, 'citation')).toHaveLength(0);
    expect(parClasse(racine, 'citations')).toHaveLength(0);
  });

  it('n’interroge pas le cœur sur une question vide', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    const formulaire = unParClasse(racine, 'quete--mots');
    unParClasse(formulaire, 'quete__champ').value = '   ';
    formulaire.declencher('submit');

    expect(rechercherParQuestionObjets).not.toHaveBeenCalled();
    expect(parClasse(racine, 'reponse__enonce')).toHaveLength(0);
  });
});

describe('recherche hors ligne', () => {
  it('signale ce que l’absence de réseau met en pause, sans masquer les résultats locaux', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'mots', 'planning');

    const enPause = reponseRendue().indisponibleHorsLigne;
    expect(enPause.length).toBeGreaterThan(0);
    const mention = unParClasse(racine, 'hors-ligne');
    for (const capacite of enPause) expect(mention.textContent).toContain(capacite);
    // Les résultats locaux restent là : la mention s'ajoute, elle ne remplace rien.
    expect(parClasse(racine, 'citation').length).toBeGreaterThan(0);
  });

  it('ne mentionne rien quand le réseau est là', async () => {
    poserReseau(true);
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'mots', 'planning');

    expect(reponseRendue().indisponibleHorsLigne).toEqual([]);
    expect(parClasse(racine, 'hors-ligne')).toHaveLength(0);
  });
});

describe('deux entrées distinctes', () => {
  it('interroge la recherche par personne, et elle seule, depuis l’entrée par personne', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'personne', 'Karim');

    expect(rechercherParQuestionObjets).not.toHaveBeenCalled();
    expect(rechercherParPersonneObjets).toHaveBeenCalledTimes(1);
    const [personne, , reseau] = vi.mocked(rechercherParPersonneObjets).mock.calls[0];
    expect(personne).toBe('Karim');
    expect(reseau).toBe(false);
    // Un engagement envers Karim remonte ; le pain, non.
    expect(parClasse(racine, 'citation')).toHaveLength(1);
    expect(unParClasse(racine, 'citation__extrait').textContent).toBe('relire le planning');
  });

  it('interroge la recherche par mots depuis l’entrée par mots', async () => {
    await semerDeuxCaptures();
    const racine = await ecran();

    await demander(racine, 'mots', 'Karim');

    expect(rechercherParPersonneObjets).not.toHaveBeenCalled();
    expect(rechercherParQuestionObjets).toHaveBeenCalledTimes(1);
  });
});

describe('repère temporel flou', () => {
  /**
   * Un mercredi de référence, pour que « la semaine dernière » désigne un intervalle
   * connu : du lundi 7 au dimanche 13 septembre 2026. Les captures sont datées en
   * heure locale — c'est le jour vécu, pas le jour universel, que l'écran transmet.
   */
  const MERCREDI = new Date('2026-09-16T10:00:00');

  beforeEach(() => {
    // Seule l'horloge est figée. Simuler aussi les minuteries arrêterait
    // fake-indexeddb, qui s'en sert pour livrer ses événements de transaction :
    // le dépôt ne rendrait plus rien et le test vérifierait le vide.
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(MERCREDI);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  async function semerDeuxSemaines(): Promise<void> {
    await enregistrerCapture(
      capture({
        id: 'cap-avant',
        creeLe: '2026-09-10T14:00:00',
        texte: 'Le devis du toit, à rappeler.',
      }),
    );
    await enregistrerCapture(
      capture({
        id: 'cap-apres',
        creeLe: '2026-09-15T09:00:00',
        texte: 'Penser aux pneus.',
      }),
    );
  }

  it('ne rend que les captures de la période demandée', async () => {
    await semerDeuxSemaines();
    const racine = await ecran();

    await demander(racine, 'mots', 'le truc dont j’ai parlé la semaine dernière');

    const citations = parClasse(racine, 'citation');
    expect(citations).toHaveLength(1);
    expect(unParClasse(citations[0], 'citation__extrait').textContent).toBe(
      'Le devis du toit, à rappeler.',
    );
    expect(unParClasse(racine, 'reponse__enonce').textContent).toContain('la semaine dernière');
  });

  it('transmet au cœur le jour vécu de chaque capture, et la date du jour', async () => {
    await semerDeuxSemaines();
    const racine = await ecran();

    await demander(racine, 'mots', 'hier');

    const [, , captures, jour] = vi.mocked(rechercherParQuestionObjets).mock.calls[0];
    expect(jour).toBe('2026-09-16');
    expect(captures.map((c) => c.jour)).toEqual(['2026-09-15', '2026-09-10']);
  });

  it('dit que le contexte de capture n’est pas pris en compte, au lieu de le deviner', async () => {
    await semerDeuxSemaines();
    const racine = await ecran();

    await demander(racine, 'mots', 'le truc dont j’ai parlé en voiture la semaine dernière');

    const ecartes = reponseRendue().nonPrisEnCompte;
    expect(ecartes).toHaveLength(1);
    const mention = unParClasse(racine, 'ecartee');
    expect(mention.textContent).toContain(ecartes[0]);
    // Ce n'est pas une panne réseau : les deux mentions ne se confondent pas.
    expect(mention.textContent).not.toContain('Hors ligne');
    // Et la moitié qu'on sait faire, on la fait quand même.
    expect(parClasse(racine, 'citation')).toHaveLength(1);
  });

  it('n’affiche aucune mention quand rien n’a été écarté', async () => {
    await semerDeuxSemaines();
    const racine = await ecran();

    await demander(racine, 'mots', 'devis');

    expect(reponseRendue().nonPrisEnCompte).toEqual([]);
    expect(parClasse(racine, 'ecartee')).toHaveLength(0);
  });

  it('ne rattache pas à une période une capture dont le jour est hors de portée', async () => {
    await enregistrerCapture(
      capture({ id: 'cap-vieille', creeLe: '2025-01-05T10:00:00', texte: 'Le devis du toit.' }),
    );
    const racine = await ecran();

    await demander(racine, 'mots', 'le devis la semaine dernière');

    expect(reponseRendue().fondee).toBe(false);
    expect(parClasse(racine, 'citation')).toHaveLength(0);
  });
});
