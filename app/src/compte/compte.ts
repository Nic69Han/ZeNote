/**
 * Le compte utilisateur, côté appareil.
 *
 * L'analyse distante est réservée à un utilisateur connecté avec un compte ZeNote :
 * sans compte, aucune note ne part, quel que soit le réglage enregistré. ZeNote n'a
 * pas encore de comptes, donc personne n'est connecté.
 *
 * Ce n'est qu'une moitié de la garde : le service `/api/analyser` refuse lui aussi
 * tout appelant non identifié. Côté appareil, elle évite d'envoyer un texte qui
 * serait refusé ; côté serveur, elle empêche qu'un tiers consomme l'analyse.
 */

export function compteConnecte(): boolean {
  return false;
}
