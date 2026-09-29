/**
 * Les préférences d'écoute : la vitesse choisie, et les silences raccourcis ou non.
 *
 * Spec `ecoute-acceleree` — « Vitesse de lecture » : la dernière vitesse choisie est
 * retenue pour les écoutes suivantes, sur n'importe quel écran. Un lecteur est recréé à
 * chaque écran et à chaque question ; s'il devait relire la base pour se régler, le
 * premier instant d'une écoute se ferait à la mauvaise vitesse. Les préférences vivent
 * donc en mémoire, lues de façon synchrone par tous les lecteurs, et écrites en
 * réglages au fil de l'eau.
 */

import { ecrireReglage, lireReglages } from '../stockage/depot.ts';

export const VITESSES = [1, 1.5, 2] as const;
export type Vitesse = (typeof VITESSES)[number];

export interface PreferencesEcoute {
  vitesse: Vitesse;
  raccourcirSilences: boolean;
}

/** Où les préférences se lisent et s'écrivent. Remplaçable pour les tests. */
export interface StockageEcoute {
  lire(): Promise<PreferencesEcoute>;
  ecrire(cle: 'vitesseEcoute' | 'raccourcirSilences', valeur: number | boolean): Promise<void>;
}

const PAR_DEFAUT: PreferencesEcoute = { vitesse: 1, raccourcirSilences: false };

const stockageReglages: StockageEcoute = {
  async lire() {
    const reglages = await lireReglages();
    return {
      vitesse: vitesseValide(reglages.vitesseEcoute),
      raccourcirSilences: reglages.raccourcirSilences === true,
    };
  },
  async ecrire(cle, valeur) {
    if (cle === 'vitesseEcoute') await ecrireReglage('vitesseEcoute', valeur as Vitesse);
    else await ecrireReglage('raccourcirSilences', valeur === true);
  },
};

let stockage: StockageEcoute = stockageReglages;
let courantes: PreferencesEcoute = { ...PAR_DEFAUT };
let chargement: Promise<PreferencesEcoute> | null = null;
/** Vrai dès que l'utilisateur a choisi : ce qu'il vient de faire prime sur ce que la base rendra. */
let choisi = false;
const abonnes = new Set<(preferences: PreferencesEcoute) => void>();

/** Une vitesse lue en base n'est retenue que si le produit la propose. */
function vitesseValide(valeur: unknown): Vitesse {
  return (VITESSES as readonly unknown[]).includes(valeur) ? (valeur as Vitesse) : 1;
}

/** Les préférences du moment. Synchrone : c'est ce qui règle un lecteur dès sa naissance. */
export function preferences(): PreferencesEcoute {
  return courantes;
}

function notifier(): void {
  for (const abonne of [...abonnes]) abonne(courantes);
}

/**
 * Lit les préférences enregistrées, une fois, et prévient les lecteurs déjà montés.
 *
 * Tolérante : une base illisible laisse les valeurs par défaut. Régler la vitesse d'une
 * écoute n'a jamais assez de prix pour empêcher l'écoute.
 */
export function chargerPreferences(): Promise<PreferencesEcoute> {
  chargement ??= stockage
    .lire()
    .then((lues) => {
      if (!choisi) {
        courantes = lues;
        notifier();
      }
      return courantes;
    })
    .catch(() => courantes);
  return chargement;
}

/** S'abonne aux changements de préférences. Rend le désabonnement. */
export function surPreferences(abonne: (preferences: PreferencesEcoute) => void): () => void {
  abonnes.add(abonne);
  return () => {
    abonnes.delete(abonne);
  };
}

/** Une écriture qui échoue ne défait pas le choix : il vaut pour la session. */
function ecrire(cle: 'vitesseEcoute' | 'raccourcirSilences', valeur: number | boolean): void {
  void stockage.ecrire(cle, valeur).catch(() => {});
}

/** Retient cette vitesse pour toutes les écoutes, présentes et à venir. */
export function choisirVitesse(vitesse: Vitesse): void {
  choisi = true;
  courantes = { ...courantes, vitesse };
  ecrire('vitesseEcoute', vitesse);
  notifier();
}

/** Retient l'interrupteur « Raccourcir les silences » pour toutes les écoutes. */
export function choisirRaccourcirSilences(actif: boolean): void {
  choisi = true;
  courantes = { ...courantes, raccourcirSilences: actif };
  ecrire('raccourcirSilences', actif);
  notifier();
}

/** Remplace le stockage et remet la mémoire à zéro. Réservé aux tests ; `null` rétablit les réglages. */
export function brancherStockageEcoute(autre: StockageEcoute | null): void {
  stockage = autre ?? stockageReglages;
  courantes = { ...PAR_DEFAUT };
  chargement = null;
  choisi = false;
  abonnes.clear();
}
