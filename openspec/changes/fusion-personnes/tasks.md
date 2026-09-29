# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Stockage et service

- [x] 1.1 Ajouter `interlocuteurAvantFusion` à l'élément stocké, scellé avec le reste du contenu. Écrire `services/personnes.ts` : `fusionner(absorbee, gardee)` et `separer(gardee, ancienNom)`, selon les décisions 1 à 3. Vérifier par `tests/personnes.test.ts` les scénarios « Deux fiches réunies », « Fusion annulée » (y compris l'élément déjà rattaché avant, qui reste), « Fusion tenue à la ré-analyse » et « Fusion protégée par le coffre ». — *le scénario de ré-analyse a révélé un défaut antérieur : une ré-analyse gardait l'élément corrigé mais reproposait le même passage à côté ; `remplacerElements` ne repropose plus un passage déjà décidé ou corrigé (`stockage.test.ts`)*

## 2. Écran

- [x] 2.1 Sur chaque fiche de « Les gens », ajouter « Même personne que… » : liste des autres fiches, confirmation, « Annuler » juste après, et « Séparer « X » » sur la fiche gardée tant que des éléments portent la marque. Vérifier dans `tests/bout-en-bout.mjs` : deux fiches réunies, puis annulées, par l'écran.

## 3. Clôture

- [x] 3.1 Passer « Fusion de doublons » à tenu dans `zenote-core/verification.md`, en renvoyant aux tests de cette change. Vérifier par `openspec validate fusion-personnes --strict` et `openspec validate zenote-core`.
