/**
 * La limite d'appels : un quota quotidien par compte, et un plafond mensuel global.
 *
 * Change `comptes-utilisateurs`, décision 8 ; spec `analyse-distante` — « Limite
 * d'appels par compte et plafond global ». Les compteurs sont incrémentés **avant**
 * l'appel au fournisseur, qui est facturé même quand sa réponse est rejetée. Chaque
 * incrément est une écriture conditionnelle à la version lue : deux requêtes
 * simultanées ne peuvent pas compter pour une.
 *
 * Ne sont conservés que des nombres, rattachés au compte et à la date.
 */

import type { Magasin } from '../partage/magasin.ts';

export const QUOTA_JOUR_DEFAUT = 30;
export const PLAFOND_MOIS_DEFAUT = 1000;
const ESSAIS = 5;

export interface RefusQuota {
  portee: 'jour' | 'mois';
  /** Secondes jusqu'au prochain jour, ou mois, en UTC. */
  reessayerDans: number;
}

export type Quota = (compteId: string) => Promise<RefusQuota | null>;

function lireLimite(valeur: string | undefined, defaut: number): number {
  if (valeur === undefined || valeur.trim() === '') return defaut;
  const n = Number(valeur);
  return Number.isInteger(n) && n >= 0 ? n : defaut;
}

/** Incrémente sous la limite ; `false` si la limite est déjà atteinte. */
async function prendre(usage: Magasin, cle: string, limite: number): Promise<boolean> {
  for (let i = 0; i < ESSAIS; i++) {
    const lu = await usage.lire<number>(cle);
    const actuel = lu?.valeur ?? 0;
    if (actuel >= limite) return false;
    const ok = await usage.ecrire(cle, actuel + 1, lu ? { siVersion: lu.version } : { siNouvelle: true });
    if (ok) return true;
  }
  // Trop de concurrence : refuser vaut mieux que dépasser.
  return false;
}

async function rendre(usage: Magasin, cle: string): Promise<void> {
  for (let i = 0; i < ESSAIS; i++) {
    const lu = await usage.lire<number>(cle);
    if (!lu || lu.valeur <= 0) return;
    if (await usage.ecrire(cle, lu.valeur - 1, { siVersion: lu.version })) return;
  }
}

export function creerQuota(
  usage: () => Magasin,
  env: Record<string, string | undefined> = process.env,
  maintenant: () => number = Date.now,
): Quota {
  return async (compteId) => {
    const quotaJour = lireLimite(env.ZENOTE_QUOTA_JOUR, QUOTA_JOUR_DEFAUT);
    const plafondMois = lireLimite(env.ZENOTE_PLAFOND_MOIS, PLAFOND_MOIS_DEFAUT);
    const t = new Date(maintenant());
    const jour = t.toISOString().slice(0, 10);
    const mois = jour.slice(0, 7);
    const demain = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1);
    const moisProchain = Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 1);
    const secondes = (fin: number) => Math.max(1, Math.ceil((fin - t.getTime()) / 1000));
    const magasin = usage();

    if (!(await prendre(magasin, `mois/${mois}`, plafondMois))) {
      return { portee: 'mois', reessayerDans: secondes(moisProchain) };
    }
    if (!(await prendre(magasin, `jour/${compteId}/${jour}`, quotaJour))) {
      // Le plafond du mois n'a pas servi : il est rendu.
      await rendre(magasin, `mois/${mois}`);
      return { portee: 'jour', reessayerDans: secondes(demain) };
    }
    return null;
  };
}
