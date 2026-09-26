# Tasks

## 1. Cœur

- [x] 1.1 Ajouter `Echeance.Recurrente`, et la produire dans `SignauxAgenda` pour un événement récurrent hors « prochain » (décisions 1 et 2). Vérifier par `RappelsRecurrentsTest` : fenêtres de chaque lundi (8 h 55, sortie à +30 min, rien entre deux) et « au prochain » unique.
- [x] 1.2 Calculer le retard sur la fenêtre en cours dans `Regles.rappels`, puis reconstruire le cœur. Vérifier par `RappelsRecurrentsTest` « Rappel lié à un événement récurrent » (présenté, retenu pendant le point, livré en retard à la sortie, rien le mercredi, de nouveau le lundi suivant), par `./gradlew :core:build`, et par `regles-agenda.test.ts` depuis le JS vendu.

## 2. Clôture

- [x] 2.1 Passer « Rappel lié à un événement récurrent » à tenu dans `zenote-core/verification.md`. Vérifier par `openspec validate rappels-recurrents --strict` et `openspec validate zenote-core`.
