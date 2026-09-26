# Tasks

Le groupe 1 touche le cœur Kotlin et exige de reconstruire `app/vendor/zenote-core/` par `scripts/sync-core-js.sh`. Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Cœur

- [x] 1.1 Ajouter `critique` à `ElementJson` (absent vaut `false`), et construire `Rappel.critique` selon la décision 2. Vérifier par un test Kotlin « Conséquence immédiate » : poids fort échu aujourd'hui est critique, poids fort à demain ne l'est pas, et un élément ancien sans le champ se décode.
- [x] 1.2 Ajouter `silencesJson` à `Regles.rappels` et livrer les critiques immédiatement selon la décision 3 (`critique` par rappel, `silenceJusqua`, `retenus`). Vérifier par des tests Kotlin :
  - « Rappel retenu pendant la nuit » ;
  - « Critique pendant la plage de silence » ;
  - « Critique marqué par l'utilisateur » pendant une réunion ;
  - « Plage éteinte » : sortie identique à l'actuelle sans plage ni critique.
- [x] 1.3 Ajouter `rappelsAvecContexte` au pont JS et son enveloppe typée dans `app/src/core/regles.ts`, puis reconstruire le cœur. Vérifier que `./gradlew :core:build` passe et qu'un test Vitest appelle l'entrée depuis le JS vendu.

## 2. Surface

- [x] 2.1 Ajouter le réglage `silence` (`null` par défaut), le calcul des plages autour d'un instant (décision 1) et leur passage au cœur dans `services/rappels.ts`. Vérifier par un test Vitest : plage qui passe minuit (veille et jour même), plage dans la journée, et plage éteinte.
- [x] 2.2 Ajouter le bloc « Plage de silence » dans « Vos données » (début, fin, éteindre), et la case « Critique » dans « Ajuster » en Revue, protégée par `corrigeParHumain`. Marquer « Critique » dans la bande de rappels. Vérifier dans `tests/bout-en-bout.mjs` que le réglage survit à un changement d'écran et qu'un élément marqué critique se relit critique. — *la case est vérifiée sur la première entrée de la Revue, la file pouvant être réduite*
- [x] 2.3 Guetter la fin de la plage dans `main.ts` (décision 4). Vérifier sous `page.clock` : « Rappel retenu pendant la nuit » (aucune bande à 23:30), « Rappel présenté à la fin de la plage » (bande après 07:00), et « Critique pendant la plage de silence » (bande marquée « Critique » à 23:30). — *la présentation après 07:00 est vérifiée par la reprise ; le guet minute par minute de `main.ts` n'est pas exercé en bout-en-bout, faute d'avancer les minuteries sans ralentir tout le parcours ; sa règle (`enSilence`) l'est en unitaire*

## 3. Clôture

- [x] 3.1 Mettre à jour `zenote-core/verification.md` : « Plage de silence respectée » et « Rappel critique immédiat » passent à tenus, en renvoyant aux tests de cette change. Vérifier par `openspec validate zenote-core` et `openspec validate rappels-silence-critique --strict`.
