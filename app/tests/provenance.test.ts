/**
 * La provenance : ce qui a été dit, ce qui en est déduit, ce qu'un élément a perdu.
 *
 * Spec `provenance`. Trois moitiés :
 *
 *  - l'affichage (`ui/provenance.ts`) : une citation porte « vous avez dit » et des
 *    guillemets français, une déduction porte « déduit » et n'en a jamais ;
 *  - le calcul des omissions par le vrai cœur, à partir du découpage réel de l'analyse
 *    locale — pas d'un cas écrit à la main qui ne se produirait pas ;
 *  - ce que la Revue en fait : une négation perdue fait confirmer l'élément, un nombre
 *    ou un nom est seulement signalé.
 *
 * L'environnement est `node`, sans DOM : comme `recherche.test.ts`, on monte le strict
 * sous-ensemble que `ui/dom.ts` utilise. Le rendu de la Revue elle-même est vérifié
 * dans le navigateur (`bout-en-bout.mjs`).
 */

import { beforeAll, describe, expect, it } from 'vitest';
import { analyser } from '../src/analyse/index.ts';
import { completerRevue } from '../src/analyse/origine.ts';
import {
  omissionsObjets,
  revueObjets,
  type ElementJson,
} from '../src/core/regles.ts';
import {
  ajustementPhraseEntiere,
  elementsANegationPerdue,
  negationAConfirmer,
  negationsPerdues,
  omissionsDesElements,
} from '../src/services/omissions.ts';
import type { ElementStocke } from '../src/stockage/depot.ts';
import {
  INTRO_DIT,
  MARQUE_DEDUIT,
  citer,
  deduit,
  deduitDe,
  dit,
  figureDans,
  passageExact,
  phraseDite,
} from '../src/ui/provenance.ts';

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

  constructor(readonly balise: string) {}

  setAttribute(nom: string, valeur: string): void {
    this.attributs.set(nom, valeur);
  }

  getAttribute(nom: string): string | null {
    return this.attributs.get(nom) ?? null;
  }

  addEventListener(): void {}

  append(...noeuds: (NoeudFaux | TexteFaux)[]): void {
    this.enfants.push(...noeuds);
  }

  get textContent(): string {
    return this.enfants.map((enfant) => enfant.textContent).join('');
  }

  set textContent(valeur: string) {
    this.enfants.length = 0;
    this.enfants.push(new TexteFaux(valeur));
  }
}

beforeAll(() => {
  (globalThis as unknown as { document: unknown }).document = {
    createElement: (balise: string) => new NoeudFaux(balise),
    createTextNode: (texte: string) => new TexteFaux(texte),
    getElementById: () => null,
  };
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

const noeud = (n: HTMLElement) => n as unknown as NoeudFaux;

// ------------------------------------------------------------------ fixtures

const DEVIS = "Il ne faut surtout pas, et j'insiste, envoyer le devis";

/** L'élément que l'analyse locale tire réellement de la phrase du devis. */
function elementDuDevis(): ElementJson {
  const { elements } = analyser(DEVIS, 'cap-1', '2026-09-29');
  const trouve = elements.find((e) => e.texte.toLowerCase().startsWith("j'insiste"));
  if (!trouve) throw new Error(`Découpage inattendu : ${elements.map((e) => e.texte).join(' | ')}`);
  return trouve;
}

function stocke(e: ElementJson, extra: Partial<ElementStocke> = {}): ElementStocke {
  return { ...e, ...extra };
}

// ----------------------------------------------------------------- affichage

describe('une citation est des paroles de l’utilisateur', () => {
  it('porte « vous avez dit » et des guillemets français', () => {
    const texte = noeud(dit('avant vendredi')).textContent;
    expect(texte.startsWith(INTRO_DIT)).toBe(true);
    expect(texte).toContain(citer('avant vendredi'));
    expect(citer('x')).toBe('« x »');
    expect(phraseDite('x')).toBe('vous avez dit « x »');
  });

  it('peut s’introduire autrement, quand ce n’est pas l’utilisateur qui a parlé', () => {
    const texte = noeud(dit('relancer le client', { intro: 'le compte rendu dit' })).textContent;
    expect(texte.startsWith('le compte rendu dit')).toBe(true);
    expect(texte).not.toContain(INTRO_DIT);
  });

  it('met en évidence les mots demandés, sans rien en retrancher', () => {
    const phrase = 'Il ne faut pas envoyer le devis';
    const citation = noeud(
      dit(phrase, {
        surligner: [
          { debut: 3, fin: 5 },
          { debut: 11, fin: 14 },
        ],
      }),
    );
    expect(parClasse(citation, 'dit__manque').map((m) => m.textContent)).toEqual(['ne', 'pas']);
    expect(parClasse(citation, 'dit__mots')[0].textContent).toBe(citer(phrase));
  });

  it('cite chaque mot d’une liste entre ses propres guillemets', () => {
    const texte = noeud(dit(['trois', 'Karim'], { intro: 'La phrase d’origine dit aussi' })).textContent;
    expect(texte).toBe(`La phrase d’origine dit aussi ${citer('trois')}, ${citer('Karim')}`);
  });

  it('ne se laisse pas tromper par une borne fausse', () => {
    const citation = noeud(dit('bonjour', { surligner: [{ debut: -4, fin: 900 }] }));
    expect(parClasse(citation, 'dit__manque').map((m) => m.textContent)).toEqual(['bonjour']);
  });
});

describe('une déduction est produite par le système', () => {
  it('porte « déduit » et n’a jamais de guillemets', () => {
    const deduction = noeud(deduit('échéance demain'));
    expect(parClasse(deduction, 'deduit__marque').map((m) => m.textContent)).toEqual([MARQUE_DEDUIT]);
    expect(parClasse(deduction, 'deduit__libelle')[0].textContent).toBe('échéance demain');
    expect(deduction.textContent).not.toMatch(/[«»"]/);
  });

  it('cite les mots dont elle vient, à côté d’elle, quand ils sont connus', () => {
    const deduction = noeud(deduit('Échéance', 'avant vendredi'));
    expect(parClasse(deduction, 'deduit__libelle')[0].textContent).toBe('Échéance');
    const depuis = parClasse(deduction, 'deduit__depuis')[0];
    expect(depuis.textContent.startsWith(INTRO_DIT)).toBe(true);
    expect(depuis.textContent).toContain(citer('avant vendredi'));
  });

  it('ne cite un indice que s’il est de l’utilisateur', () => {
    const passage = 'envoyer le devis, sinon le chantier est bloqué';
    // Les mots figurent dans le passage : ce sont les siens.
    expect(noeud(deduitDe('Poids', 'sinon le chantier est bloqué', passage)).textContent).toContain(
      citer('sinon le chantier est bloqué'),
    );
    // Un libellé écrit par l'analyse n'est jamais présenté comme une parole.
    const libelle = noeud(deduitDe('Poids', "bloque quelqu'un d'autre", passage));
    expect(libelle.textContent).toContain("Poids : bloque quelqu'un d'autre");
    expect(libelle.textContent).not.toMatch(/[«»]/);
    expect(parClasse(libelle, 'dit')).toHaveLength(0);
  });

  it('compare sans se laisser piéger par la casse, les accents ni la ponctuation', () => {
    expect(figureDans('Avant vendredi', 'envoyer le devis, avant vendredi.')).toBe(true);
    expect(figureDans('bloqué', 'le chantier est BLOQUE')).toBe(true);
    expect(figureDans('vendre', 'avant vendredi')).toBe(false);
    expect(figureDans('  ', 'avant vendredi')).toBe(false);
  });

  it('relit le passage exact dans la capture, et retombe sur le texte de l’élément', () => {
    const capture = 'Rappeler Sophie pour le devis, avant vendredi';
    expect(
      passageExact({ texte: 'Rappeler sophie', debutCar: 0, finCar: 15 }, capture),
    ).toBe('Rappeler Sophie');
    // Corrigé à la main : ses bornes ne disent plus rien, ce qu'il a écrit est ce qu'il a dit.
    expect(
      passageExact({ texte: 'Autre chose', debutCar: 0, finCar: 15, corrigeParHumain: true }, capture),
    ).toBe('Autre chose');
    // Une source introuvable, ou des bornes qui n'y tiennent pas : on ne prétend rien.
    expect(passageExact({ texte: 'Texte', debutCar: 0, finCar: 15 }, undefined)).toBe('Texte');
    expect(passageExact({ texte: 'Texte', debutCar: 0, finCar: 900 }, capture)).toBe('Texte');
  });
});

// ------------------------------------------------------- omissions et Revue

describe('une négation perdue au découpage', () => {
  it('se produit bien ainsi : l’analyse tire « j’insiste, envoyer le devis » de la phrase', () => {
    const element = elementDuDevis();
    expect(element.texte).toBe("J'insiste, envoyer le devis");
    expect(DEVIS.slice(element.debutCar, element.finCar)).toBe("j'insiste, envoyer le devis");
  });

  it('est signalée avec la phrase entière et les mots manquants à leur place', () => {
    const element = elementDuDevis();
    const [omission] = omissionsObjets(DEVIS, [element]);

    expect(omission.phrase).toBe(DEVIS);
    expect(negationsPerdues(omission).map((m) => m.mots)).toEqual(['ne', 'pas']);
    for (const manque of omission.manques) {
      expect(DEVIS.slice(manque.debutCar, manque.finCar)).toBe(manque.mots);
    }
  });

  it('ne l’est pas pour le morceau qui a gardé la négation', () => {
    const { elements } = analyser(DEVIS, 'cap-1', '2026-09-29');
    const garde = elements.find((e) => e.texte.startsWith('Il ne faut'));
    expect(garde).toBeDefined();
    expect(omissionsObjets(DEVIS, [garde as ElementJson])).toEqual([]);
  });

  it('fait confirmer l’élément en Revue, et le sort de l’acceptation groupée', () => {
    const element = stocke(elementDuDevis(), { poids: 'FORT' });
    const omissions = omissionsDesElements([{ id: 'cap-1', texte: DEVIS }], [element]);

    const perdues = elementsANegationPerdue(omissions, [element]);
    expect(perdues.has(element.id)).toBe(true);

    const file = completerRevue(revueObjets([element], '2026-09-29'), [element], perdues);
    const entree = file.groupes[0].entrees.find((e) => e.element.id === element.id);
    expect(entree?.aConfirmer).toBe(true);

    // Sans le calcul des omissions, rien ne distingue l'élément d'un autre.
    const sans = completerRevue(revueObjets([element], '2026-09-29'), [element]);
    expect(sans.groupes[0].entrees[0].aConfirmer).toBe(false);
  });

  it('cesse d’être à confirmer quand la phrase entière a été lue et confirmée', () => {
    const element = stocke(elementDuDevis(), { omissionLevee: true });
    const omissions = omissionsDesElements([{ id: 'cap-1', texte: DEVIS }], [element]);

    expect(negationAConfirmer(omissions.get(element.id), element)).toBe(false);
    expect(elementsANegationPerdue(omissions, [element]).size).toBe(0);
    // Le signalement demeure : la phrase d'origine dit toujours « ne … pas ».
    expect(omissions.get(element.id)?.manques.length).toBeGreaterThan(0);
  });

  it('reprendre la phrase entière élargit le passage, et plus rien n’est perdu', () => {
    const element = stocke(elementDuDevis());
    const [omission] = omissionsObjets(DEVIS, [element]);

    const ajustement = ajustementPhraseEntiere(element, omission);
    expect(ajustement.debutCar).toBe(0);
    expect(ajustement.finCar).toBe(DEVIS.length);
    expect(ajustement.texte).toBe(DEVIS);

    // Toujours un passage exact de la capture : l'ancrage tient.
    const elargi = { ...element, ...ajustement } as ElementJson;
    expect(DEVIS.slice(elargi.debutCar, elargi.finCar)).toBe(DEVIS);
    expect(omissionsObjets(DEVIS, [elargi])).toEqual([]);
  });

  it('ne s’évalue que pour les éléments en attente', () => {
    const decide = stocke(elementDuDevis(), { verdict: 'ACCEPTE' });
    expect(omissionsDesElements([{ id: 'cap-1', texte: DEVIS }], [decide]).size).toBe(0);
  });

  it('n’affirme rien d’un élément dont la capture a disparu', () => {
    const element = stocke(elementDuDevis());
    expect(omissionsDesElements([], [element]).size).toBe(0);
  });
});

describe('un nombre ou un nom perdu', () => {
  const capture = 'Il faut relancer les devis, trois devis sont en retard chez Karim';

  function elementDe(passage: string): ElementStocke {
    const debut = capture.indexOf(passage);
    return stocke({
      id: 'el-1',
      captureId: 'cap-2',
      type: 'TACHE',
      texte: passage,
      debutCar: debut,
      finCar: debut + passage.length,
      verdict: 'EN_ATTENTE',
      corrigeParHumain: false,
    });
  }

  it('est signalé sans jamais bloquer la décision', () => {
    const element = elementDe('relancer les devis');
    const omissions = omissionsDesElements([{ id: 'cap-2', texte: capture }], [element]);
    const omission = omissions.get(element.id);

    expect(omission?.manques.map((m) => [m.nature, m.mots])).toEqual([
      ['NOMBRE', 'trois'],
      ['NOM', 'Karim'],
    ]);
    expect(negationAConfirmer(omission, element)).toBe(false);
    expect(elementsANegationPerdue(omissions, [element]).size).toBe(0);
  });

  it('ne signale rien quand l’élément a tout gardé', () => {
    const element = elementDe(capture);
    expect(omissionsDesElements([{ id: 'cap-2', texte: capture }], [element]).size).toBe(0);
  });
});
