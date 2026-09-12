/**
 * Le point d'entrée : coquille de l'application et navigation entre les écrans.
 *
 * Trois surfaces portent le produit — Capturer, La Revue, Maintenant. Recherche et
 * Réglages ne s'ajoutent pas à cette liste : on ne les traverse pas dans une journée
 * de travail, on y va quand on cherche quelque chose ou qu'on veut ses données. Elles
 * vivent donc en retrait, sous l'en-tête, et non dans la barre du bas.
 */

import './styles/base.css';
import './styles/ecrans.css';
import { registerSW } from 'virtual:pwa-register';
import { capturer, traiterFileAnalyse } from './services/pipeline.ts';
import { ecrireReglage, lireReglages, toutEffacer, type Reglages } from './stockage/depot.ts';
import { el, vider } from './ui/dom.ts';
import { montrerCapturer } from './ui/capturer.ts';
import { montrerMaintenant } from './ui/maintenant.ts';
import { montrerRevue } from './ui/revue.ts';
import { montrerRecherche } from './ui/recherche.ts';
import { montrerReglages } from './ui/reglages.ts';

type Onglet = 'capturer' | 'revue' | 'maintenant' | 'recherche' | 'reglages';

/** Les trois surfaces de la barre du bas : celles d'une journée de travail. */
const ONGLETS: { cle: Onglet; libelle: string }[] = [
  { cle: 'capturer', libelle: 'Capturer' },
  { cle: 'revue', libelle: 'La Revue' },
  { cle: 'maintenant', libelle: 'Maintenant' },
];

/** Les écrans en retrait, atteints depuis l'en-tête. */
const ECRANS_RETRAIT: { cle: Onglet; libelle: string }[] = [
  { cle: 'recherche', libelle: 'Rechercher' },
  { cle: 'reglages', libelle: 'Vos données' },
];

const TOUS = [...ONGLETS, ...ECRANS_RETRAIT];

const THEMES: Reglages['theme'][] = ['auto', 'clair', 'sombre'];

async function demarrer(): Promise<void> {
  const reglages = await lireReglages();
  appliquerTheme(reglages.theme);

  const vue = document.getElementById('vue') as HTMLElement;
  const navigation = document.getElementById('navigation') as HTMLElement;
  const basculeTheme = document.getElementById('bascule-theme') as HTMLButtonElement;

  for (const onglet of ONGLETS) {
    navigation.append(
      el('a', {
        class: 'nav__lien',
        href: `#${onglet.cle}`,
        'data-onglet': onglet.cle,
        texte: onglet.libelle,
      }),
    );
  }

  const retrait = document.getElementById('retrait') as HTMLElement;
  for (const ecran of ECRANS_RETRAIT) {
    retrait.append(
      el('a', {
        class: 'retrait__lien',
        href: `#${ecran.cle}`,
        'data-ecran': ecran.cle,
        texte: ecran.libelle,
      }),
    );
  }

  basculeTheme.textContent = libelleTheme(reglages.theme);
  basculeTheme.addEventListener('click', () => {
    const suivant = THEMES[(THEMES.indexOf(reglages.theme) + 1) % THEMES.length];
    reglages.theme = suivant;
    appliquerTheme(suivant);
    basculeTheme.textContent = libelleTheme(suivant);
    void ecrireReglage('theme', suivant);
  });

  /**
   * De quoi démonter l'écran courant. Sans cela, un écran qui tient une ressource
   * vivante — la capture tient le micro et une minuterie — la garde ouverte après
   * qu'on l'a quitté.
   */
  let demonterEcran: (() => void) | undefined;

  async function afficher(): Promise<void> {
    const onglet = (location.hash.replace('#', '') || 'capturer') as Onglet;
    const valide = TOUS.some((o) => o.cle === onglet) ? onglet : 'capturer';

    for (const lien of navigation.querySelectorAll<HTMLAnchorElement>('.nav__lien')) {
      const actif = lien.dataset.onglet === valide;
      lien.classList.toggle('nav__lien--actif', actif);
      if (actif) lien.setAttribute('aria-current', 'page');
      else lien.removeAttribute('aria-current');
    }

    for (const lien of retrait.querySelectorAll<HTMLAnchorElement>('.retrait__lien')) {
      const actif = lien.dataset.ecran === valide;
      lien.classList.toggle('retrait__lien--actif', actif);
      if (actif) lien.setAttribute('aria-current', 'page');
      else lien.removeAttribute('aria-current');
    }

    demonterEcran?.();
    demonterEcran = undefined;

    vider(vue);
    document.documentElement.dataset.ecran = valide;
    if (valide === 'capturer') demonterEcran = montrerCapturer(vue, reglages);
    else if (valide === 'revue') await montrerRevue(vue);
    else if (valide === 'maintenant') await montrerMaintenant(vue);
    else if (valide === 'recherche') await montrerRecherche(vue);
    else await montrerReglages(vue);
  }

  window.addEventListener('hashchange', () => void afficher());

  // Fermeture de l'onglet ou passage en arrière-plan : on tente la même sortie propre.
  // L'écriture est asynchrone et rien ne garantit qu'elle aboutisse ici — mais tenter
  // vaut mieux que laisser le micro ouvert et l'enregistrement par terre.
  window.addEventListener('pagehide', () => demonterEcran?.());

  await afficher();

  // L'analyse est rejouée en arrière-plan : elle n'est jamais sur le chemin de la capture.
  void traiterFileAnalyse();
}

function appliquerTheme(theme: Reglages['theme']): void {
  document.documentElement.dataset.theme = theme;
}

function libelleTheme(theme: Reglages['theme']): string {
  return theme === 'auto' ? 'Thème : auto' : theme === 'clair' ? 'Thème : clair' : 'Thème : sombre';
}

/**
 * Accès local pour les tests de bout en bout et les démonstrations. Tout reste sur
 * l'appareil : ces fonctions n'ouvrent aucune porte vers l'extérieur.
 */
declare global {
  interface Window {
    __zenote: {
      capturer: typeof capturer;
      traiterFileAnalyse: typeof traiterFileAnalyse;
      toutEffacer: typeof toutEffacer;
    };
  }
}
window.__zenote = { capturer, traiterFileAnalyse, toutEffacer };

registerSW({ immediate: true });
void demarrer();
