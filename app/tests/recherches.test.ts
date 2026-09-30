/**
 * Les recherches passées : retenues, proposées, oubliées — et protégées comme les notes.
 *
 * Une question est aussi parlante qu'une note (« licenciement de Karim »). Ce qui se
 * vérifie ici est donc autant ce qui est retenu que ce qui ne doit pas fuir : la base
 * lue sans passer par le dépôt, coffre actif, ne doit livrer aucune question.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { activerChiffrement, desactiverChiffrement } from '../src/securite/activation.ts';
import {
  chargerCoffre,
  deverrouiller,
  reinitialiserCoffre,
  verrouiller,
} from '../src/securite/coffre.ts';
import {
  MAX_RECHERCHES,
  RECENTES_PROPOSEES,
  cleDe,
  oublier,
  recentes,
  retenir,
  toutOublier,
} from '../src/services/recherches.ts';
import {
  MAGASIN_RECHERCHES,
  demander,
  reinitialiserOuverture,
  transaction,
} from '../src/stockage/base.ts';
import { lireRecherches, toutEffacer } from '../src/stockage/depot.ts';

const PHRASE = 'un cheval traverse le jardin sans bruit';

/** Un jour de plus à chaque appel : l'ordre des questions ne dépend jamais de l'horloge. */
function jour(n: number): Date {
  return new Date(Date.UTC(2026, 8, 1 + n, 9, 0, 0));
}

beforeEach(async () => {
  reinitialiserCoffre();
  await toutEffacer();
  await chargerCoffre();
});

/** Le contenu du magasin, tel que le lirait quelqu'un qui ouvre la base sans ZeNote. */
async function magasinEnClair(): Promise<string> {
  const lignes = await transaction([MAGASIN_RECHERCHES], 'readonly', ([m]) =>
    demander<unknown[]>(m.getAll()),
  );
  return JSON.stringify(lignes, (_cle, valeur: unknown) => {
    if (valeur instanceof ArrayBuffer) return new TextDecoder().decode(valeur);
    if (ArrayBuffer.isView(valeur)) return new TextDecoder().decode(valeur.buffer as ArrayBuffer);
    return valeur;
  });
}

describe('Relancer une recherche', () => {
  it('retient une question et la propose ensuite, de la plus récente à la plus ancienne', async () => {
    await retenir('devis fournisseur', 'MOTS', jour(1));
    await retenir('Karim', 'PERSONNE', jour(2));
    await retenir('le truc de la semaine dernière', 'MOTS', jour(3));

    const proposees = await recentes();
    expect(proposees.map((r) => r.requete)).toEqual([
      'le truc de la semaine dernière',
      'Karim',
      'devis fournisseur',
    ]);
    expect(proposees[1].mode).toBe('PERSONNE');
    expect(proposees[2]).toEqual({
      requete: 'devis fournisseur',
      mode: 'MOTS',
      derniereFois: jour(1).toISOString(),
      fois: 1,
    });
  });

  it('propose les cinq plus récentes seulement', async () => {
    for (let i = 1; i <= 8; i += 1) await retenir(`question ${i}`, 'MOTS', jour(i));

    const proposees = await recentes();
    expect(RECENTES_PROPOSEES).toBe(5);
    expect(proposees.map((r) => r.requete)).toEqual([
      'question 8',
      'question 7',
      'question 6',
      'question 5',
      'question 4',
    ]);
  });

  it('retient aussi une question qui n’a rien rendu : c’est souvent celle qu’on repose', async () => {
    // Le service ne voit jamais la réponse : il ne peut pas la trier.
    await retenir('mot qui n’existe dans aucune note', 'MOTS', jour(1));
    expect((await recentes()).map((r) => r.requete)).toEqual(['mot qui n’existe dans aucune note']);
  });

  it('ignore une question vide', async () => {
    await retenir('   ', 'MOTS', jour(1));
    expect(await recentes()).toEqual([]);
  });

  it('survit à un rechargement de l’application', async () => {
    await retenir('devis fournisseur', 'MOTS', jour(1));
    reinitialiserOuverture();
    expect((await recentes()).map((r) => r.requete)).toEqual(['devis fournisseur']);
  });
});

describe('Doublon', () => {
  it('n’affiche qu’une fois une question posée deux fois, à la casse près, à sa date la plus récente', async () => {
    await retenir('Devis fournisseur', 'MOTS', jour(1));
    await retenir('autre chose', 'MOTS', jour(2));
    await retenir('  devis   FOURNISSEUR ', 'MOTS', jour(3));

    const proposees = await recentes();
    expect(proposees.map((r) => r.requete)).toEqual(['devis FOURNISSEUR', 'autre chose']);
    expect(proposees[0].derniereFois).toBe(jour(3).toISOString());
    expect(proposees[0].fois).toBe(2);
  });

  it('compte les accents : ce sont deux écritures, et la dernière se relance telle qu’elle a été tapée', () => {
    expect(cleDe('élève', 'MOTS')).not.toBe(cleDe('eleve', 'MOTS'));
    expect(cleDe('Élève', 'MOTS')).toBe(cleDe('élève', 'MOTS'));
  });

  it('distingue le même mot cherché par mots et par personne', async () => {
    await retenir('Karim', 'MOTS', jour(1));
    await retenir('Karim', 'PERSONNE', jour(2));
    expect(await recentes()).toHaveLength(2);
  });
});

describe('limite de 20', () => {
  it('ne garde que les vingt questions les plus récentes', async () => {
    for (let i = 1; i <= 25; i += 1) await retenir(`question ${i}`, 'MOTS', jour(i));

    const toutes = await lireRecherches();
    expect(MAX_RECHERCHES).toBe(20);
    expect(toutes).toHaveLength(20);
    // Les cinq plus anciennes sont oubliées, pas les plus récentes.
    expect(toutes.map((r) => r.requete)).toContain('question 25');
    expect(toutes.map((r) => r.requete)).toContain('question 6');
    expect(toutes.map((r) => r.requete)).not.toContain('question 5');
  });

  it('ne perd aucune question quand plusieurs sont posées en même temps', async () => {
    await Promise.all(Array.from({ length: 10 }, (_, i) => retenir(`en parallèle ${i}`, 'MOTS', jour(i))));
    expect(await lireRecherches()).toHaveLength(10);
  });
});

describe('Oublier une question', () => {
  it('ne propose plus une question oubliée, y compris après rechargement', async () => {
    await retenir('devis fournisseur', 'MOTS', jour(1));
    await retenir('Karim', 'PERSONNE', jour(2));

    await oublier('devis fournisseur', 'MOTS');
    expect((await recentes()).map((r) => r.requete)).toEqual(['Karim']);

    reinitialiserOuverture();
    expect((await recentes()).map((r) => r.requete)).toEqual(['Karim']);
  });

  it('oublie à la casse près, comme elle a été retenue', async () => {
    await retenir('Devis fournisseur', 'MOTS', jour(1));
    await oublier('devis FOURNISSEUR', 'MOTS');
    expect(await recentes()).toEqual([]);
  });

  it('oublier une question inconnue ne change rien', async () => {
    await retenir('devis fournisseur', 'MOTS', jour(1));
    await oublier('autre chose', 'MOTS');
    expect(await recentes()).toHaveLength(1);
  });

  it('oublie toutes les questions, et ne laisse rien dans la base', async () => {
    await retenir('devis fournisseur', 'MOTS', jour(1));
    await retenir('Karim', 'PERSONNE', jour(2));

    await toutOublier();

    expect(await recentes()).toEqual([]);
    expect(await magasinEnClair()).toBe('[]');
  });

  it('« Tout effacer » vide aussi les questions retenues', async () => {
    await retenir('devis fournisseur', 'MOTS', jour(1));
    await toutEffacer();
    expect(await recentes()).toEqual([]);
  });
});

describe('Chiffrement', () => {
  it('ne laisse aucune question lisible dans la base quand le coffre est actif', async () => {
    await retenir('licenciement de Karim', 'MOTS', jour(1));
    expect(await magasinEnClair()).toContain('licenciement de Karim');

    await activerChiffrement('PHRASE', PHRASE);

    const brut = await magasinEnClair();
    expect(brut).not.toContain('licenciement');
    expect(brut).not.toContain('Karim');
    // Et elle reste lisible par l'application, coffre ouvert.
    expect((await recentes()).map((r) => r.requete)).toEqual(['licenciement de Karim']);
  });

  it('scelle aussi les questions posées une fois le coffre actif', async () => {
    await activerChiffrement('PHRASE', PHRASE);
    await retenir('budget confidentiel', 'MOTS', jour(1));

    expect(await magasinEnClair()).not.toContain('confidentiel');
    expect((await recentes()).map((r) => r.requete)).toEqual(['budget confidentiel']);
  });

  it('coffre fermé, ne propose rien et ne demande rien', async () => {
    await retenir('licenciement de Karim', 'MOTS', jour(1));
    await activerChiffrement('PHRASE', PHRASE);
    verrouiller();

    expect(await recentes()).toEqual([]);
  });

  it('coffre fermé, ne remplace pas l’historique par la seule question du moment', async () => {
    await retenir('licenciement de Karim', 'MOTS', jour(1));
    await activerChiffrement('PHRASE', PHRASE);
    verrouiller();

    await expect(retenir('autre chose', 'MOTS', jour(2))).rejects.toThrow();
    await expect(oublier('autre chose', 'MOTS')).rejects.toThrow();

    // L'historique était scellé, il l'est resté : rouvert, il est intact.
    await deverrouiller('PHRASE', PHRASE);
    expect((await recentes()).map((r) => r.requete)).toEqual(['licenciement de Karim']);
  });

  it('remet les questions en clair quand on retire le chiffrement, faute de quoi elles seraient perdues', async () => {
    await retenir('licenciement de Karim', 'MOTS', jour(1));
    await activerChiffrement('PHRASE', PHRASE);
    await desactiverChiffrement();

    expect(await magasinEnClair()).toContain('licenciement de Karim');
    expect((await recentes()).map((r) => r.requete)).toEqual(['licenciement de Karim']);
  });
});
