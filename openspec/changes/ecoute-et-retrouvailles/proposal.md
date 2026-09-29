# Proposal

## Why

ZeNote rend la saisie facile ; relire et retrouver restent lents.

- **Réécouter coûte cher.** Une note vocale est « facile à saisir, longue à réécouter », et l'on passe à la voix pour **72 %** des notes prises en marchant (Andrew, Karlson & Brush, INTERACT 2009). La réponse établie est d'accélérer la parole sans en changer la hauteur et de raccourcir les pauses (Arons, SpeechSkimmer, ACM TOCHI 1997). Le lecteur de ZeNote est un `<audio>` nu.
- **On retrouve par repères, pas par dates.** Avec des repères personnels sur la frise, le temps médian de recherche est significativement plus court qu'avec les seules dates (Ringel, Cutrell, Dumais & Horvitz, INTERACT 2003). La recherche de ZeNote lit « la semaine dernière » mais n'affiche que des horodatages.
- **On recherche souvent ce qu'on a déjà cherché.** Jusqu'à **40 %** des requêtes servent à retrouver quelque chose de déjà vu (Teevan, Adar, Jones & Potts, SIGIR 2007). ZeNote oublie chaque question.

## What Changes

- **Nouveau — Écoute accélérée** : le lecteur propose 1×, 1,5× et 2× (hauteur préservée), mémorise la vitesse choisie, et un interrupteur « Raccourcir les silences » saute les pauses de plus de 700 ms en n'en gardant que 300 ms. La détection des silences est une fonction pure sur les échantillons décodés.
- **Nouveau — Repères** : la réponse de recherche situe chaque citation par rapport à des repères tirés des propres captures de l'utilisateur — réunions enregistrées, décisions, première mention d'une personne — par exemple « deux jours après la réunion “point budget” ». Aucun repère ne vient d'ailleurs que de ses notes.
- **Nouveau — Recherches passées** : les dernières questions sont retenues, scellées comme les notes, et proposées sous le champ ; un geste les relance, un autre les oublie une à une ou toutes.
- **Modifié** : la base passe en version 4 (magasin `recherches`, une ligne scellée, comme le lexique). « Tout effacer » et l'export l'incluent.

## Capabilities

### New Capabilities
- `ecoute-acceleree` : vitesses de lecture et raccourcissement des silences.
- `reperes-temporels` : situer les résultats de recherche par des repères personnels.
- `recherches-passees` : retenir, proposer et oublier les questions déjà posées.

### Modified Capabilities
Aucune dans `openspec/specs/`.

## Impact

- `app/src/ui/lecteur.ts`, nouveau `app/src/audio/silences.ts`, `app/src/ui/recherche.ts`, nouveau `app/src/services/reperes.ts` et `app/src/services/recherches.ts`, `app/src/stockage/base.ts` (version 4), `app/src/stockage/depot.ts`, activation du coffre (rescellement), `app/src/services/export.ts`, réglages (`vitesseEcoute`, `raccourcirSilences`), `app/src/styles/`.
- Aucun changement du cœur.
