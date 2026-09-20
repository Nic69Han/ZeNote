/**
 * Les sphères : déduites à l'analyse, filtrées à la restitution, jamais rangées.
 *
 * Spec `memoire` — « Déduction de la sphère » et « Filtrage à la restitution ». Le
 * point délicat n'est pas de séparer le professionnel du personnel : c'est de le
 * faire sans jamais demander de le faire. La capture reste unique — un seul bouton,
 * un seul endroit — et la séparation n'arrive qu'à la lecture. Scinder le flux de
 * capture rendrait la capture plus lente et plus intelligente, ce qui est exactement
 * ce que ce produit refuse.
 *
 * Et un filtre ne déplace rien. C'est ce qui permet de le changer d'avis sans
 * conséquence, et ce qui garantit qu'une note mal classée reste retrouvable.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import { analyser, repererSphere } from '../src/analyse/index.ts';
import { capturer } from '../src/services/pipeline.ts';
import {
  ecrireReglage,
  lireReglages,
  listerElements,
  toutEffacer,
} from '../src/stockage/depot.ts';

const JOUR = '2026-09-22';

beforeEach(async () => {
  await toutEffacer();
});

/** Le filtre tel que les écrans l'appliquent : même règle en Revue et en Maintenant. */
function filtrer<T extends { sphere?: string | null }>(
  elements: T[],
  sphere: 'TOUT' | 'PROFESSIONNEL' | 'PERSONNEL',
): T[] {
  if (sphere === 'TOUT') return elements;
  return elements.filter((e) => !e.sphere || e.sphere === sphere);
}

describe('déduction de la sphère', () => {
  it('reconnaît le personnel à ce qui s’y rattache', () => {
    expect(repererSphere('prendre rendez-vous chez le dentiste')).toBe('PERSONNEL');
    expect(repererSphere('acheter le cadeau d’anniversaire de maman')).toBe('PERSONNEL');
  });

  it('reconnaît le professionnel de la même façon', () => {
    expect(repererSphere('préparer la réunion budget avec le client')).toBe('PROFESSIONNEL');
    expect(repererSphere('envoyer le devis au fournisseur')).toBe('PROFESSIONNEL');
  });

  it('ne tranche pas quand rien ne le dit', () => {
    // Deviner ici rangerait la note au mauvais endroit, et le filtre la cacherait.
    expect(repererSphere('rappeler Marc')).toBeNull();
  });

  it('la sphère voyage avec l’élément', () => {
    const { elements } = analyser('prendre rendez-vous chez le dentiste', 'c-1', JOUR);
    expect(elements[0].sphere).toBe('PERSONNEL');
  });
});

describe('la capture ne se scinde pas', () => {
  it('rien n’est demandé au dépôt, quelle que soit la sphère', async () => {
    // Le même appel, le même écran, le même geste : la sphère n'apparaît nulle part
    // dans ce que la capture réclame.
    const perso = await capturer({
      texte: 'prendre rendez-vous chez le dentiste',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    const pro = await capturer({
      texte: 'préparer la réunion budget avec le client',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });

    expect(perso.id).toBeTruthy();
    expect(pro.id).toBeTruthy();
    // Et les deux sont dans le même magasin, sans distinction de rangement.
    expect(perso.source).toBe(pro.source);
  });
});

describe('filtrage à la restitution', () => {
  const elements = [
    { id: 'e-1', sphere: 'PROFESSIONNEL' },
    { id: 'e-2', sphere: 'PERSONNEL' },
    { id: 'e-3', sphere: null },
  ];

  it('ne présente que la sphère demandée', () => {
    expect(filtrer(elements, 'PROFESSIONNEL').map((e) => e.id)).toEqual(['e-1', 'e-3']);
    expect(filtrer(elements, 'PERSONNEL').map((e) => e.id)).toEqual(['e-2', 'e-3']);
  });

  it('garde ce dont la sphère est inconnue, dans les deux vues', () => {
    // Cacher l'indécidé transformerait une aide à la lecture en perte de notes,
    // silencieuse : on chercherait une note qui est là, et qu'on ne voit plus.
    expect(filtrer(elements, 'PROFESSIONNEL').map((e) => e.id)).toContain('e-3');
    expect(filtrer(elements, 'PERSONNEL').map((e) => e.id)).toContain('e-3');
  });

  it('sans filtre, tout est présenté', () => {
    expect(filtrer(elements, 'TOUT')).toHaveLength(3);
  });

  it('ne déplace ni ne duplique rien', async () => {
    await capturer({
      texte: 'prendre rendez-vous chez le dentiste. Envoyer le devis au client.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    const { traiterFileAnalyse } = await import('../src/services/pipeline.ts');
    await traiterFileAnalyse(JOUR);

    const avant = (await listerElements()).map((e) => e.id).sort();
    await ecrireReglage('filtreSphere', 'PERSONNEL');
    await ecrireReglage('filtreSphere', 'PROFESSIONNEL');
    await ecrireReglage('filtreSphere', 'TOUT');
    const apres = (await listerElements()).map((e) => e.id).sort();

    expect(apres).toEqual(avant);
    expect(apres.length).toBeGreaterThan(1);
  });

  it('le filtre est une préférence, et se retient', async () => {
    expect((await lireReglages()).filtreSphere).toBe('TOUT');
    await ecrireReglage('filtreSphere', 'PERSONNEL');
    expect((await lireReglages()).filtreSphere).toBe('PERSONNEL');
  });
});
