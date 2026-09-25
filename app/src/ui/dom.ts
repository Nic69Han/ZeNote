/**
 * Le strict minimum pour construire du DOM sans framework.
 *
 * Pas de moteur de rendu, pas de VDOM : l'application est petite, elle reconstruit
 * l'écran qu'elle change. C'est plus rapide à charger et plus simple à relire.
 */

type Attributs = Record<string, string | number | boolean | null | undefined | EventListener>;
type Enfant = Node | string | number | null | false | undefined;

export function el<K extends keyof HTMLElementTagNameMap>(
  balise: K,
  attributs: Attributs = {},
  ...enfants: (Enfant | Enfant[])[]
): HTMLElementTagNameMap[K] {
  const noeud = document.createElement(balise);
  for (const [cle, valeur] of Object.entries(attributs)) {
    if (valeur === null || valeur === undefined || valeur === false) continue;
    if (cle.startsWith('on') && typeof valeur === 'function') {
      noeud.addEventListener(cle.slice(2), valeur as EventListener);
    } else if (cle === 'texte') {
      noeud.textContent = String(valeur);
    } else if (valeur === true) {
      noeud.setAttribute(cle, '');
    } else {
      noeud.setAttribute(cle, String(valeur));
    }
  }
  for (const enfant of enfants.flat()) {
    if (enfant === null || enfant === undefined || enfant === false) continue;
    noeud.append(typeof enfant === 'object' ? enfant : document.createTextNode(String(enfant)));
  }
  return noeud;
}

export function vider(noeud: Element): void {
  noeud.replaceChildren();
}

/** Annonce un message aux lecteurs d'écran sans déplacer le focus. */
export function annoncer(message: string): void {
  const region = document.getElementById('annonces');
  if (region) region.textContent = message;
}
