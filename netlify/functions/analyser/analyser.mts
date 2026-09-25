/**
 * `POST /api/analyser` — le point d'analyse distante de ZeNote.
 *
 * La clé `TYPESAFE_API_KEY` ne vit qu'ici, dans l'environnement de l'hébergeur :
 * l'application ne la voit jamais, et le fournisseur ne voit jamais l'appareil. Le
 * modèle se fixe par `TYPESAFE_DEFAULT_MODEL`, lu par le SDK ; sans lui, c'est
 * `jev-latest`.
 *
 * Tout le comportement est dans `traitement.ts`, vérifié avec un client simulé ; ce
 * fichier ne fait que brancher le vrai SDK.
 */

import { choice, TypeSafeClient, type Logger } from '@typesafe-ai/sdk';
import { traiter, type ClientTypeSafe, type FabriqueChoix } from './traitement.ts';

/**
 * Le journal du SDK, réduit à son message.
 *
 * Ses arguments peuvent porter le corps de la requête, donc les passages : ils ne
 * sont jamais écrits. Seuls les avertissements et les erreurs passent.
 */
const journalSdk: Logger = {
  debug: () => {},
  info: () => {},
  warn: (message) => console.warn(`[typesafe] ${message}`),
  error: (message) => console.error(`[typesafe] ${message}`),
};

function creerClient(): ClientTypeSafe | null {
  if (!process.env.TYPESAFE_API_KEY?.trim()) return null;
  return new TypeSafeClient({
    logger: journalSdk,
    logLevel: 'warn',
    // Une relance dépasserait le délai que l'appareil accorde : il repliera sur
    // l'analyse locale, ce qui vaut mieux qu'attendre.
    retry: { maxRetries: 0 },
  }) as unknown as ClientTypeSafe;
}

export default (requete: Request): Promise<Response> =>
  traiter(requete, {
    creerClient,
    choix: choice as unknown as FabriqueChoix,
    journal: (evenement) => console.info(JSON.stringify(evenement)),
  });
