# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Cœur : détecteur d'omissions

- [x] 1.1 Extraire de `Disfluences.kt` les listes de négations et de nombres dans un objet partagé (`texte/Marques.kt`), sans changer le comportement de `Disfluences` ; vérifier que `DisfluencesTest` passe inchangé
  *Fait : `texte/Marques.kt` (`Marques.NEGATIONS`, `Marques.NOMBRES`) ; `DisfluencesTest` (10 tests) passe sans modification.*
- [x] 1.2 Écrire `texte/Omissions.kt` : `phraseDe(texte, debutCar, finCar)` et `dans(phrase, passage)` selon la décision 1 ; vérifier par `OmissionsTest.kt` les quatre scénarios de « Omissions signalées », dont la négation hors phrase non signalée, et un nom en tête de phrase non compté
  *Écart : l'API est positionnelle — `Omissions.phraseDe(texte, debutCar, finCar)` rend les bornes de la phrase, `Omissions.dans(texte, phrase, debutCar, finCar)` rend les omissions avec leurs positions dans la capture (et non `dans(phrase, passage)` sur deux chaînes), pour que l'écran surligne les mots dans la phrase entière. « un » et « une » ne comptent pas comme nombres (articles) ; deux noms séparés par une espace ne font qu'une omission. Couvert par `OmissionsTest` (15 tests).*
- [x] 1.3 Exposer `Regles.omissions(texteCapture, elementsJson)` (JSON) dans `api/Regles.kt` et `Pont.kt`, passer le contrat à `14`, ajouter `raisonDite` / `raisonDeduite` à la proposition ; vérifier par un test JVM de l'API et par `regles.test.ts` côté PWA après `bash scripts/sync-core-js.sh`
  *Fait : `ProvenanceTest` (5 tests JVM), `regles.test.ts` (« contrat 14 — provenance », 5 tests) ; `app/vendor/zenote-core/` régénéré.*

## 2. PWA : dit / déduit

- [x] 2.1 Créer `app/src/ui/provenance.ts` (`dit`, `deduit`) ; vérifier par `provenance.test.ts` qu'une citation porte « vous avez dit » et des guillemets français, et qu'une déduction porte « déduit » sans guillemets
  *Fait : `provenance.test.ts` (« une citation est des paroles de l'utilisateur », « une déduction est produite par le système »). `dit` accepte aussi une liste de mots (chacun entre ses guillemets) et une introduction autre que « vous avez dit » (« le compte rendu dit » pour un élément issu d'un compte rendu importé, qui n'a pas été dit par l'utilisateur). Styles dans `styles/provenance.css` (nouveau fichier, importé par `provenance.ts`) plutôt que dans `ecrans.css`, pour ne pas toucher aux fichiers partagés.*
- [x] 2.2 Revue : passage source en citation dans chaque carte, attributs déduits marqués ; Maintenant : raison scindée dite / déduite ; Recherche : énoncé marqué déduit ; Personnes : lignes de fiche marquées déduites ; vérifier dans `bout-en-bout.mjs` les scénarios « Élément en Revue », « Raison d'une proposition » et « Énoncé de recherche »
  *Fait : `bout-en-bout.mjs`, bloc « Provenance » (17 constats). Écart de conception : l'indice de poids (`poidsIndice`) est un libellé écrit par l'analyse (« bloque quelqu'un d'autre »), pas une parole de l'utilisateur. Le cœur l'expose bien en `raisonDite` comme prévu, mais la PWA ne le met entre guillemets que s'il figure mot pour mot dans le passage (`figureDans`) ; sinon il est présenté comme déduit. La citation « sinon le chantier est bloqué » de la spec est celle du passage entier, cité en tête de la carte Maintenant. Un élément corrigé à la main ne porte plus la mention « déduit ». Recherche : l'extrait d'une citation garde exactement le texte de la capture (`recherche.test.ts` l'exige) ; « vous avez dit » est un élément voisin (`citation__intro`) et les guillemets viennent de la feuille de style. Personnes : fiche marquée déduite en tête, type marqué déduit, lignes et échanges cités.*

## 3. PWA : omissions

- [x] 3.1 Brancher `omissionsObjets` en Revue : signalement des nombres et noms, confirmation obligatoire sur négation perdue (phrase entière, mots manquants mis en évidence), aucun plan proposé avant acceptation explicite ; vérifier par `provenance.test.ts` et par un bloc `bout-en-bout.mjs` qui dicte « il ne faut surtout pas, et j'insiste, envoyer le devis »
  *Fait : `provenance.test.ts` (omissions sur le vrai découpage) et `bout-en-bout.mjs`. Le cas se reproduit bien ainsi (« J'insiste, envoyer le devis »). La confirmation passe par un bloc visible dans la carte (phrase entière, « ne … pas » en évidence) avec deux sorties qui n'acceptent pas : « C'est bien cela » (pose `omissionLevee`, champ stocké et annulable, jamais passé au cœur) et « Reprendre la phrase entière » (le passage s'élargit aux bornes de la phrase, toujours exact). « Accepter » avant confirmation ne pose ni plan ni verdict. `omissionLevee` est perdu par l'aller-retour dans le cœur : la Revue calcule l'ensemble des éléments à confirmer depuis les éléments stockés.*
- [x] 3.2 Vérifier que la planification des rappels ignore un élément dont l'omission de négation n'est pas levée ; test dans `rappels.test.ts`
  *Fait : `rappels.test.ts`, « un élément qui a perdu une négation ». Ce que la planification fait réellement : le cœur ne rappelle que les éléments acceptés portant un plan ; l'élément reste en attente tant que la Revue n'a pas fait lire la phrase, même si un plan a été posé par une autre voie.*
