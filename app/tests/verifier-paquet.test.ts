/**
 * La vérification post-construction : elle échoue sur une fuite plantée exprès, et
 * passe sur un paquet propre. Spec `analyse-distante` — « Paquet de l'application
 * inspecté ».
 */

import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { chercherFuites } from './verifier-paquet.mjs';

let dossier: string;

beforeEach(async () => {
  dossier = await mkdtemp(join(tmpdir(), 'zenote-paquet-'));
  await mkdir(join(dossier, 'assets'));
  // Un paquet sain : l'origine « TYPESAFE » d'un élément y a sa place.
  await writeFile(join(dossier, 'index.html'), '<script src="/assets/index.js"></script>');
  await writeFile(join(dossier, 'assets', 'index.js'), 'const o={moteur:"TYPESAFE",modele:null};fetch("/api/analyser")');
});

afterEach(async () => {
  await rm(dossier, { recursive: true, force: true });
});

describe('le paquet servi à l’appareil', () => {
  it('passe quand rien de serveur n’y est entré', async () => {
    expect(await chercherFuites(dossier, { cle: 'tsk-exemple-de-cle-1234' })).toEqual([]);
  });

  it.each([
    ['le nom de la variable de clé', 'const k=process.env.TYPESAFE_API_KEY'],
    ['le SDK', 'import{TypeSafeClient}from"@typesafe-ai/sdk"'],
    ['l’adresse du fournisseur', 'fetch("https://api.typesafe.ai/v1/system-one")'],
  ])('échoue sur %s', async (_nom, contenu) => {
    await writeFile(join(dossier, 'assets', 'fuite.js'), contenu);
    const fuites = await chercherFuites(dossier);
    expect(fuites.map((f) => f.fichier)).toEqual([join('assets', 'fuite.js')]);
  });

  it('échoue sur la clé elle-même, même dans un fichier binaire, sans la recopier', async () => {
    const cle = 'tsk-exemple-de-cle-1234';
    await writeFile(join(dossier, 'assets', 'modele.gz'), Buffer.concat([Buffer.from([0, 1, 2]), Buffer.from(cle)]));
    const fuites = await chercherFuites(dossier, { cle });
    expect(fuites).toEqual([{ fichier: join('assets', 'modele.gz'), motif: 'la clé TYPESAFE_API_KEY' }]);
    expect(JSON.stringify(fuites)).not.toContain(cle);
  });

  it('ignore une clé trop courte pour être cherchée sans tout trouver', async () => {
    expect(await chercherFuites(dossier, { cle: 'a' })).toEqual([]);
  });
});
