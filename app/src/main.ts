/**
 * Le point d'entrée : coquille de l'application et navigation entre les trois écrans.
 *
 * Trois surfaces, pas une de plus — Capturer, La Revue, Maintenant.
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

type Onglet = 'capturer' | 'revue' | 'maintenant';

const ONGLETS: { cle: Onglet; libelle: string }[] = [
  { cle: 'capturer', libelle: 'Capturer' },
  { cle: 'revue', libelle: 'La Revue' },
  { cle: 'maintenant', libelle: 'Maintenant' },
];

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

  basculeTheme.textContent = libelleTheme(reglages.theme);
  basculeTheme.addEventListener('click', () => {
    const suivant = THEMES[(THEMES.indexOf(reglages.theme) + 1) % THEMES.length];
    reglages.theme = suivant;
    appliquerTheme(suivant);
    basculeTheme.textContent = libelleTheme(suivant);
    void ecrireReglage('theme', suivant);
  });

  async function afficher(): Promise<void> {
    const onglet = (location.hash.replace('#', '') || 'capturer') as Onglet;
    const valide = ONGLETS.some((o) => o.cle === onglet) ? onglet : 'capturer';

    for (const lien of navigation.querySelectorAll<HTMLAnchorElement>('.nav__lien')) {
      const actif = lien.dataset.onglet === valide;
      lien.classList.toggle('nav__lien--actif', actif);
      if (actif) lien.setAttribute('aria-current', 'page');
      else lien.removeAttribute('aria-current');
    }

    vider(vue);
    document.documentElement.dataset.ecran = valide;
    if (valide === 'capturer') montrerCapturer(vue, reglages);
    else if (valide === 'revue') await montrerRevue(vue);
    else await montrerMaintenant(vue);
  }

  window.addEventListener('hashchange', () => void afficher());
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
