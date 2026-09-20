/**
 * Le vocabulaire personnel : ce qu'une correction apprend, et ce qu'elle ne doit pas.
 *
 * La promesse de la spec est précise — « un terme corrigé est correctement transcrit
 * à l'occurrence suivante » — et son intérêt est de ne pas redemander deux fois la
 * même chose. Mais une règle apprise s'applique ensuite partout, sans qu'on la
 * revoie : apprendre trop est le vrai danger. Une substitution fausse réécrit
 * silencieusement des mots justes dans des captures qui allaient bien, et personne
 * ne s'en aperçoit avant d'avoir relu une note qui ne veut plus rien dire.
 *
 * Ces tests vérifient donc les deux moitiés, avec la même exigence.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { apprendre, appliquer, plier } from '../src/services/lexique.ts';
import { lireLexique, retenirCorrections, toutEffacer } from '../src/stockage/depot.ts';
import { activerChiffrement } from '../src/securite/activation.ts';
import { chargerCoffre, reinitialiserCoffre } from '../src/securite/coffre.ts';
import { MAGASIN_LEXIQUE } from '../src/stockage/base.ts';
import { demander, transaction } from '../src/stockage/base.ts';

beforeEach(async () => {
  reinitialiserCoffre();
  await toutEffacer();
  await chargerCoffre();
});

describe('ce qu’une correction apprend', () => {
  it('retient le mot remplacé, sous sa forme comparable', () => {
    const apprises = apprendre(
      'rappeler le carreleur pour le devis',
      'rappeler le couvreur pour le devis',
    );
    expect(apprises).toEqual([{ malEntendu: 'carreleur', correction: 'couvreur', fois: 1 }]);
  });

  it('garde la graphie exacte de la correction, majuscule et accents compris', () => {
    const apprises = apprendre('voir avec karim demain', 'voir avec Karîm demain');
    expect(apprises).toEqual([{ malEntendu: 'karim', correction: 'Karîm', fois: 1 }]);
  });

  it('retient plusieurs mots changés dans la même phrase', () => {
    const apprises = apprendre('voir Marc et Sofi', 'voir Marc et Sophie');
    expect(apprises.map((c) => c.malEntendu)).toEqual(['sofi']);
  });
});

describe('ce qu’une correction refuse d’apprendre', () => {
  it('n’apprend rien d’un mot ajouté : ce n’est pas une erreur d’écoute', () => {
    // Rejouer ça ailleurs abîmerait des phrases correctes.
    expect(apprendre('rappeler le couvreur', 'rappeler le couvreur demain')).toEqual([]);
  });

  it('n’apprend rien d’un mot retiré', () => {
    expect(apprendre('rappeler vite le couvreur', 'rappeler le couvreur')).toEqual([]);
  });

  it('n’apprend rien de deux phrases qui n’ont plus grand-chose en commun', () => {
    expect(apprendre('rappeler le couvreur', 'envoyer le devis du toit à Sophie')).toEqual([]);
  });

  it('n’apprend pas un mot d’un seul caractère, trop fréquent pour être sûr', () => {
    expect(apprendre('voir a Marc', 'voir à Marc')).toEqual([]);
  });

  it('n’apprend pas une majuscule posée sur le premier mot', () => {
    // Le moteur rend tout en minuscules. Quelqu'un qui remet une majuscule de phrase
    // apprendrait « voir » → « Voir », et le mot ressortirait capitalisé au milieu
    // des phrases suivantes.
    expect(apprendre('voir avec Marc', 'Voir avec Marc')).toEqual([]);
  });

  it('apprend en revanche une majuscule ailleurs : c’est un nom', () => {
    // La même correction, à une autre place, est exactement le service attendu.
    expect(apprendre('voir avec marc', 'voir avec Marc')).toEqual([
      { malEntendu: 'marc', correction: 'Marc', fois: 1 },
    ]);
  });

  it('n’apprend rien quand le mot est identique', () => {
    expect(apprendre('voir avec Marc', 'voir avec Marc')).toEqual([]);
  });

  it('n’apprend rien d’un texte vide', () => {
    expect(apprendre('', 'rappeler le couvreur')).toEqual([]);
    expect(apprendre('rappeler le couvreur', '')).toEqual([]);
  });
});

describe('le lexique retenu', () => {
  it('se relit après écriture', async () => {
    await retenirCorrections([{ malEntendu: 'carreleur', correction: 'couvreur', fois: 1 }]);
    expect(await lireLexique()).toEqual([
      { malEntendu: 'carreleur', correction: 'couvreur', fois: 1 },
    ]);
  });

  it('compte les redites au lieu de les empiler', async () => {
    const une = { malEntendu: 'carreleur', correction: 'couvreur', fois: 1 };
    await retenirCorrections([une]);
    await retenirCorrections([une]);
    expect(await lireLexique()).toEqual([
      { malEntendu: 'carreleur', correction: 'couvreur', fois: 2 },
    ]);
  });

  it('la correction la plus refaite l’emporte sur celle vue une fois', async () => {
    await retenirCorrections([{ malEntendu: 'sofi', correction: 'Sophie', fois: 3 }]);
    await retenirCorrections([{ malEntendu: 'sofi', correction: 'Sofia', fois: 1 }]);
    expect((await lireLexique())[0].correction).toBe('Sophie');
  });

  it('ne garde rien quand il n’y a rien à garder', async () => {
    await retenirCorrections([]);
    expect(await lireLexique()).toEqual([]);
  });
});

describe('appliquer le lexique', () => {
  const lexique = [{ malEntendu: 'carreleur', correction: 'couvreur', fois: 1 }];

  it('réécrit le mot appris, quelle que soit sa casse', () => {
    expect(appliquer(['rappeler', 'le', 'Carreleur'], lexique)).toEqual([
      'rappeler',
      'le',
      'couvreur',
    ]);
  });

  it('ne touche à rien d’autre', () => {
    expect(appliquer(['rappeler', 'le', 'couvreur'], lexique)).toEqual([
      'rappeler',
      'le',
      'couvreur',
    ]);
  });

  it('ne change jamais le nombre de mots', () => {
    // Les positions des passages incertains sont calculées après : un mot de plus ou
    // de moins ferait souligner à côté.
    const entree = ['a', 'carreleur', 'b'];
    expect(appliquer(entree, lexique)).toHaveLength(entree.length);
  });

  it('sans lexique, rend les mots tels quels', () => {
    const entree = ['rappeler', 'le', 'carreleur'];
    expect(appliquer(entree, [])).toBe(entree);
  });
});

describe('le tour complet', () => {
  it('un terme corrigé ressort juste à l’occurrence suivante', async () => {
    // C'est la promesse de la spec, vérifiée de bout en bout du module : on corrige
    // une fois à la main, et la transcription suivante n'a plus besoin de l'être.
    await retenirCorrections(
      apprendre('rappeler le carreleur pour le devis', 'rappeler le couvreur pour le devis'),
    );

    const suivante = appliquer(
      'voir le carreleur mardi'.split(' '),
      await lireLexique(),
    );

    expect(suivante.join(' ')).toBe('voir le couvreur mardi');
  });
});

describe('le lexique et le coffre', () => {
  it('chiffré, aucun de ces mots ne se lit dans la base', async () => {
    await retenirCorrections([{ malEntendu: 'sofi', correction: 'Sophie', fois: 1 }]);
    await activerChiffrement('PHRASE', 'un cheval traverse le jardin sans bruit');

    const brut = JSON.stringify(
      await transaction([MAGASIN_LEXIQUE], 'readonly', ([m]) => demander<unknown[]>(m.getAll())),
      (_cle, valeur: unknown) => {
        // Les ArrayBuffer ne se sérialisent pas : on les rend lisibles pour que la
        // recherche de texte en clair porte aussi sur leur contenu.
        if (valeur instanceof ArrayBuffer) return new TextDecoder().decode(valeur);
        if (ArrayBuffer.isView(valeur)) {
          return new TextDecoder().decode(valeur.buffer as ArrayBuffer);
        }
        return valeur;
      },
    );

    expect(brut).not.toContain('Sophie');
    expect(brut).not.toContain('sofi');
    // Et il reste lisible par l'application, coffre ouvert.
    expect(await lireLexique()).toEqual([
      { malEntendu: 'sofi', correction: 'Sophie', fois: 1 },
    ]);
  });
});

describe('plier', () => {
  it('rend la même forme pour le même mot écrit autrement', () => {
    expect(plier('Karîm')).toBe(plier('karim'));
    expect(plier('Élève,')).toBe('eleve');
  });
});
