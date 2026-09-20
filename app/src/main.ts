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
import {
  capturer,
  recupererEnregistrements,
  traiterFileAnalyse,
  traiterFileTranscription,
} from './services/pipeline.ts';
import { assurerCoffreCharge, etatCoffre, verrouiller } from './securite/coffre.ts';
import { ecrireReglage, lireReglages, majCapture, toutEffacer, type Reglages } from './stockage/depot.ts';
import { el, vider } from './ui/dom.ts';
import { surEnregistrement } from './audio/enregistreur.ts';
import { montrerCapturer } from './ui/capturer.ts';
import { montrerMaintenant } from './ui/maintenant.ts';
import { montrerRevue } from './ui/revue.ts';
import { montrerRecherche } from './ui/recherche.ts';
import { montrerPersonnes } from './ui/personnes.ts';
import { montrerReglages } from './ui/reglages.ts';
import { montrerDeverrouillage } from './ui/deverrouillage.ts';
import { montrerRappels } from './ui/rappels.ts';
import {
  ABSENCE_AVANT_REPRISE_MS,
  aQuelqueChose,
  rappelsDuPointDeRupture,
} from './services/rappels.ts';

type Onglet = 'capturer' | 'revue' | 'maintenant' | 'recherche' | 'personnes' | 'reglages';

/** Les trois surfaces de la barre du bas : celles d'une journée de travail. */
const ONGLETS: { cle: Onglet; libelle: string }[] = [
  { cle: 'capturer', libelle: 'Capturer' },
  { cle: 'revue', libelle: 'La Revue' },
  { cle: 'maintenant', libelle: 'Maintenant' },
];

/** Les écrans en retrait, atteints depuis l'en-tête. */
const ECRANS_RETRAIT: { cle: Onglet; libelle: string }[] = [
  { cle: 'recherche', libelle: 'Rechercher' },
  { cle: 'personnes', libelle: 'Les gens' },
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

  // Spec `reunions` — « Aucun enregistrement à l'insu des participants ». Le voyant
  // vit dans la coquille, pas dans l'écran de capture : un enregistrement continue
  // quand on change d'écran, et un voyant qui disparaît avec l'écran laisserait le
  // micro tourner sans que rien ne le dise. C'est exactement ce que l'exigence
  // interdit, et ce serait invisible depuis l'écran de capture.
  const voyant = el('div', {
    class: 'voyant-enregistrement',
    role: 'status',
    hidden: true,
    texte: 'Enregistrement en cours',
  });
  document.body.prepend(voyant);
  surEnregistrement((enCours) => {
    voyant.hidden = enCours === null;
  });

  const bandeRappels = document.getElementById('rappels') as HTMLElement;
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

    // Capturer passe toujours ; tout ce qui relit attend le déverrouillage. C'est la
    // seule barrière du produit, et elle ne tombe jamais sur le geste de capture.
    if (valide !== 'capturer' && (await assurerCoffreCharge()) === 'VERROUILLE') {
      montrerDeverrouillage(vue, () => void afficher());
      return;
    }

    if (valide === 'capturer') demonterEcran = montrerCapturer(vue, reglages);
    else if (valide === 'revue') demonterEcran = await montrerRevue(vue);
    else if (valide === 'maintenant') demonterEcran = await montrerMaintenant(vue);
    else if (valide === 'recherche') demonterEcran = await montrerRecherche(vue);
    else if (valide === 'personnes') demonterEcran = await montrerPersonnes(vue);
    else await montrerReglages(vue);
  }

  /** La bande en cours, pour ne jamais en empiler deux. */
  let fermerRappels: (() => void) | undefined;

  /**
   * Présente ce qu'un point de rupture livre.
   *
   * Rien ne s'affiche coffre fermé : les rappels demandent de lire les éléments, et
   * les lire demande l'authentification. C'est cohérent — une bande qui annoncerait
   * « trois choses à voir » sans pouvoir les nommer serait pire que le silence.
   */
  async function presenterRappels(): Promise<void> {
    if ((await assurerCoffreCharge()) === 'VERROUILLE') return;
    try {
      const moment = await rappelsDuPointDeRupture();
      if (!aQuelqueChose(moment) || moment.rappels.length === 0) return;
      fermerRappels?.();
      fermerRappels = montrerRappels(bandeRappels, moment, () => {
        fermerRappels = undefined;
      });
    } catch {
      // Un rappel qui ne se calcule pas ne doit rien casser : l'application entière
      // ne dépend pas de lui.
    }
  }

  window.addEventListener('hashchange', () => void afficher());

  // Fermeture de l'onglet ou passage en arrière-plan : on tente la même sortie propre.
  // L'écriture est asynchrone et rien ne garantit qu'elle aboutisse ici — mais tenter
  // vaut mieux que laisser le micro ouvert et l'enregistrement par terre.
  window.addEventListener('pagehide', () => demonterEcran?.());

  await afficher();

  // Ce qu'un arrêt brutal a laissé en chemin devient une capture, avant tout le
  // reste : elle doit entrer dans les files de transcription et d'analyse comme les
  // autres, et pour cela exister avant qu'elles ne tournent.
  void recupererEnregistrements()
    .catch(() => 0)
    .then(() => traiterFileTranscription())
    .catch(() => {})
    .finally(() => void traiterFileAnalyse());

  // Ouvrir l'application est une reprise : c'est le point de rupture que le produit
  // sait observer, et donc le moment où les rappels arrivent.
  void presenterRappels();

  /**
   * Le coffre se referme quand l'application reste en arrière-plan.
   *
   * Pas au premier masquage : sur un téléphone, répondre à un message puis revenir
   * prend trois secondes, et redemander une empreinte à chaque fois rendrait le
   * chiffrement insupportable — donc désactivé, donc inutile. Pas jamais non plus :
   * une clé dépliée dans un onglet oublié n'est plus une clé. Deux minutes est le
   * compromis, et il n'est pas réglable : ce serait une décision de plus à prendre.
   */
  const REPOS_AVANT_VERROU_MS = 120_000;
  let verrouEnAttente: number | undefined;
  /** Le moment où l'application a été quittée, pour mesurer l'absence au retour. */
  let quitteeA: number | undefined;

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      window.clearTimeout(verrouEnAttente);
      verrouEnAttente = undefined;
      const absence = quitteeA === undefined ? 0 : Date.now() - quitteeA;
      quitteeA = undefined;
      if (absence >= ABSENCE_AVANT_REPRISE_MS) void presenterRappels();
      return;
    }
    quitteeA = Date.now();
    if (etatCoffre() !== 'OUVERT') return;
    verrouEnAttente = window.setTimeout(() => {
      verrouiller();
      // L'écran est caché : le redessiner maintenant ne fait sauter aucune lecture en
      // cours, et évite de retrouver au retour des notes déchiffrées sous un coffre
      // fermé.
      void afficher();
    }, REPOS_AVANT_VERROU_MS);
  });
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
      /**
       * Modifier une capture après coup — ce que fait la transcription quand elle
       * rend son texte et ce qu'elle a mal entendu. Sans cette porte, l'incertitude
       * de transcription ne serait vérifiable qu'en faisant mal parler un micro.
       */
      majCapture: typeof majCapture;
    };
  }
}
window.__zenote = { capturer, traiterFileAnalyse, toutEffacer, majCapture };

registerSW({ immediate: true });
void demarrer();
