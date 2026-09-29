# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Cœur : détecteur d'omissions

- [ ] 1.1 Extraire de `Disfluences.kt` les listes de négations et de nombres dans un objet partagé (`texte/Marques.kt`), sans changer le comportement de `Disfluences` ; vérifier que `DisfluencesTest` passe inchangé
- [ ] 1.2 Écrire `texte/Omissions.kt` : `phraseDe(texte, debutCar, finCar)` et `dans(phrase, passage)` selon la décision 1 ; vérifier par `OmissionsTest.kt` les quatre scénarios de « Omissions signalées », dont la négation hors phrase non signalée, et un nom en tête de phrase non compté
- [ ] 1.3 Exposer `Regles.omissions(texteCapture, elementsJson)` (JSON) dans `api/Regles.kt` et `Pont.kt`, passer le contrat à `14`, ajouter `raisonDite` / `raisonDeduite` à la proposition ; vérifier par un test JVM de l'API et par `regles.test.ts` côté PWA après `bash scripts/sync-core-js.sh`

## 2. PWA : dit / déduit

- [ ] 2.1 Créer `app/src/ui/provenance.ts` (`dit`, `deduit`) ; vérifier par `provenance.test.ts` qu'une citation porte « vous avez dit » et des guillemets français, et qu'une déduction porte « déduit » sans guillemets
- [ ] 2.2 Revue : passage source en citation dans chaque carte, attributs déduits marqués ; Maintenant : raison scindée dite / déduite ; Recherche : énoncé marqué déduit ; Personnes : lignes de fiche marquées déduites ; vérifier dans `bout-en-bout.mjs` les scénarios « Élément en Revue », « Raison d'une proposition » et « Énoncé de recherche »

## 3. PWA : omissions

- [ ] 3.1 Brancher `omissionsObjets` en Revue : signalement des nombres et noms, confirmation obligatoire sur négation perdue (phrase entière, mots manquants mis en évidence), aucun plan proposé avant acceptation explicite ; vérifier par `provenance.test.ts` et par un bloc `bout-en-bout.mjs` qui dicte « il ne faut surtout pas, et j'insiste, envoyer le devis »
- [ ] 3.2 Vérifier que la planification des rappels ignore un élément dont l'omission de négation n'est pas levée ; test dans `rappels.test.ts`
