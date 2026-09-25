/**
 * Ce qui remonte en Revue quand Maintenant n'en fait plus rien.
 *
 * Les règles appartiennent au cœur, et `ARevoirTest` s'en charge. Ce qui se vérifie
 * ici est ce que la surface en fait — et c'est la moitié qui cassait en silence : le
 * compte d'écarts vivait en mémoire et disparaissait au rechargement. Écarter
 * fonctionnait donc parfaitement, et ne déclenchait jamais rien.
 *
 * L'autre moitié est la date de dernière interaction. Sans elle, « sans avancée
 * depuis trois semaines » ne se distingue pas de « créé il y a trois semaines et
 * traité hier », et le produit remonterait des éléments dont on s'occupe.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { aRevoirObjets, type ElementJson } from '../src/core/regles.ts';
import {
  enregistrerElement,
  listerElements,
  majElement,
  suivisElementDe,
  toutEffacer,
  type ElementStocke,
} from '../src/stockage/depot.ts';

const JOUR = '2026-09-22';

beforeEach(async () => {
  await toutEffacer();
});

async function tache(id: string, extra: Partial<ElementStocke> = {}): Promise<void> {
  const texte = 'préparer le dossier de reprise';
  await enregistrerElement({
    id,
    captureId: 'c-1',
    type: 'TACHE',
    texte,
    debutCar: 0,
    finCar: texte.length,
    poids: 'FORT',
    verdict: 'ACCEPTE',
    corrigeParHumain: false,
  } as ElementJson);
  if (Object.keys(extra).length > 0) await majElement(id, extra);
}

async function remontees() {
  const elements = await listerElements();
  return aRevoirObjets(elements, suivisElementDe(elements), JOUR);
}

describe('le compte d’écarts survit au rechargement', () => {
  it('s’écrit sur l’élément, pas en mémoire', async () => {
    await tache('e-1', { ecarteFois: 2 });
    const [element] = await listerElements();
    expect(element.ecarteFois).toBe(2);
    // Et il est rendu au cœur tel quel.
    expect(suivisElementDe([element])[0].ecarteFois).toBe(2);
  });

  it('au troisième écart, l’élément remonte', async () => {
    await tache('e-1', { ecarteFois: 3 });
    const vus = await remontees();
    expect(vus).toHaveLength(1);
    expect(vus[0].motif).toBe('ECARTE_PLUSIEURS_FOIS');
    expect(vus[0].issues).toEqual(['REFORMULER', 'DECOUPER', 'ABANDONNER']);
  });

  it('en deçà, il reste simplement actif — ni supprimé, ni reporté', async () => {
    await tache('e-1', { ecarteFois: 2 });
    expect(await remontees()).toEqual([]);
    // Il est toujours là, et toujours accepté.
    const [element] = await listerElements();
    expect(element.verdict).toBe('ACCEPTE');
    expect(element.faitLe ?? null).toBeNull();
  });
});

describe('la dernière interaction', () => {
  it('un élément lourd sans nouvelle depuis trois semaines remonte', async () => {
    await tache('e-1', { vuLe: '2026-09-01' });
    const vus = await remontees();
    expect(vus).toHaveLength(1);
    expect(vus[0].motif).toBe('DORMANT');
    expect(vus[0].issues).toContain('DELEGUER');
  });

  it('touché hier, il ne remonte pas', async () => {
    await tache('e-1', { vuLe: '2026-09-21' });
    expect(await remontees()).toEqual([]);
  });

  it('sans date d’interaction, rien ne remonte : on ne sait pas', async () => {
    await tache('e-1');
    expect(await remontees()).toEqual([]);
  });
});

describe('ce qui ne remonte pas', () => {
  it('une information, qu’on ne peut pas faire avancer', async () => {
    const texte = 'le nouveau bureau ouvre en mars';
    await enregistrerElement({
      id: 'e-1',
      captureId: 'c-1',
      type: 'INFORMATION',
      texte,
      debutCar: 0,
      finCar: texte.length,
      verdict: 'ACCEPTE',
      corrigeParHumain: false,
    } as ElementJson);
    await majElement('e-1', { ecarteFois: 5 });
    expect(await remontees()).toEqual([]);
  });

  it('un élément déjà abandonné', async () => {
    await tache('e-1', { ecarteFois: 5, verdict: 'REJETE' });
    expect(await remontees()).toEqual([]);
  });
});

describe('le motif est un constat', () => {
  it('il dit ce qui s’est passé, sans jamais s’adresser à qui que ce soit', async () => {
    await tache('e-1', { ecarteFois: 4 });
    const [vu] = await remontees();
    expect(vu.explication).toContain('écarté 4 fois');
    for (const reproche of ['vous', 'auriez', 'oublié', 'retard']) {
      expect(vu.explication.toLowerCase()).not.toContain(reproche);
    }
  });
});
