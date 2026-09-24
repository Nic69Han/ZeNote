# Tasks

Les groupes suivent le plan de mise en service de `design.md` — Migration Plan. Les groupes 1 et 2 ne changent **aucun** comportement réseau ; le groupe 3 ajoute le chemin distant, éteint par défaut. Une case n'est cochée que lorsqu'un test nommé la couvre, ou, pour le groupe 5, quand le constat chiffré est consigné.

## 1. Consentement (prérequis bloquant, tâche 7.1 de `zenote-core`)

- [x] 1.1 Ajouter à `Capture` (`app/src/stockage/depot.ts`) un champ optionnel `transmissible` (absent = transmissible), et aux réglages la liste des sphères exclues de l'analyse distante ; vérifier par un test de stockage qu'une capture ancienne sans le champ se relit, et que le marquage survit à un rechargement
- [x] 1.2 Écrire la fonction pure `peutTransmettre(capture, reglages)` selon la décision 4 : non transmissible → non ; sphère locale exclue → non ; sphère locale indécidable et au moins une sphère exclue → non ; réglage d'analyse distante éteint → non ; sinon oui. Vérifier par un test qui couvre chacune des cinq branches, dont le doute tranché vers le local
- [x] 1.3 Ajouter l'interrupteur « Ne pas envoyer à l'analyse » sur une capture (Revue et fiche) et les exclusions de sphère dans Réglages ; vérifier dans `tests/bout-en-bout.mjs` que marquer une capture la fait apparaître comme « analysée sur l'appareil » — *la PWA n'a pas d'écran de fiche par capture : l'interrupteur vit sur le bloc source de la capture en Revue, seul endroit où une capture se consulte seule*

## 2. Modèle de l'élément

- [x] 2.1 Ajouter à `ElementJson` (`app/src/core/regles.ts`) les champs optionnels `typeConfiance`, `sphereConfiance` et `origineAnalyse { moteur: 'LOCAL' | 'TYPESAFE', modele }`, et les renseigner dans l'analyse locale (`origineAnalyse.moteur = 'LOCAL'`, `typeConfiance` d'après la règle qui a tranché dans `typerPassage`) ; vérifier par `analyse.test.ts` que chaque élément local porte son origine et que les éléments anciens se relisent
- [x] 2.2 Faire passer un type sous le seuil de confiance en question à confirmer en Revue, comme l'échéance et le poids, sans planifier de rappel ; vérifier par un test que les scénarios « Confiance sous le seuil » et « Correction non écrasée » de `analyse-distante` sont tenus
- [x] 2.3 Inclure `origineAnalyse`, `typeConfiance` et `sphereConfiance` dans l'export ; vérifier par `export.test.ts`

## 3. Service distant et chemin hybride

- [x] 3.1 Créer `netlify/functions/analyser.mts` (dépendance `@typesafe-ai/sdk` propre à la fonction, hors du paquet de `app/`) : `POST { passages: string[] }` → un seul `systemOne` avec deux `choice` par passage (type, sphère avec `INDECIDABLE`), critères repris de `TypeElement` avec ce que chaque type n'est pas ; rend `{ modele, reponses[] }`. Sans `TYPESAFE_API_KEY` → `503 { motif: 'non-configure' }`. Journaliser l'usage en jetons, jamais le contenu. Vérifier par un test de la fonction avec un client TypeSafe simulé : une seule requête pour trois passages, 503 sans clé, aucun texte dans les journaux
- [x] 3.2 Déclarer la fonction sous `/api/analyser` dans `netlify.toml` et réécrire le commentaire des en-têtes qui affirme que rien n'est transmis ; vérifier avec `netlify dev` qu'un `POST` local répond 503 `non-configure`
- [x] 3.3 Écrire côté PWA le client d'analyse distante : délai de 4 s par `AbortController`, validation stricte de la réponse (même nombre d'entrées, valeurs dans les énumérations, sinon rejet entier) ; vérifier par un test chaque issue — succès, hors ligne, délai dépassé, 503, réponse incomplète, valeur inconnue — et que seules la première réécrit quelque chose
- [x] 3.4 Brancher le chemin hybride dans `analyserCapture` : analyse locale complète, puis, si `peutTransmettre`, réécriture de `type`, `sphere`, de leurs confiances et de `origineAnalyse` depuis la réponse distante, **avant** `filtrerAncrageObjets` ; `INDECIDABLE` → `sphere: null`. Vérifier par `pipeline.test.ts` : le texte et les bornes de chaque élément sont inchangés par la réponse distante, un repli laisse un résultat identique à l'analyse locale seule, et une capture non transmissible ne déclenche aucun appel
- [x] 3.5 Signaler une seule fois en Revue l'état « analysé sur l'appareil » quand un repli a eu lieu alors que le réglage est allumé, et rendre l'origine consultable sur un élément ; vérifier par un test d'écran

## 4. Promesse réseau, révisée délibérément

- [x] 4.1 Ajouter le réglage « Analyse sur un service distant », **éteint par défaut**, dont l'activation montre avant confirmation ce qui part, vers qui, et ce qui ne part jamais ; réécrire le bloc « Ce qui quitte l'appareil » de `app/src/ui/reglages.ts` pour qu'il dise la vérité dans les deux états. Vérifier par un test d'écran que l'allumage sans confirmation laisse le réglage éteint
- [x] 4.2 Réviser `tests/bout-en-bout.mjs` : la vérification « aucune donnée ne quitte l'appareil » reste stricte réglage éteint et pour une capture non transmissible ; une nouvelle vérification, réglage allumé, échoue sur toute requête sortante autre que `POST /api/analyser` de l'origine, et contrôle que son corps ne contient que des passages (ni audio, ni date, ni identifiant). Vérifier que les deux passent avec la fonction simulée par `tests/servir.mjs`
- [ ] 4.3 Ajouter une vérification post-construction qui cherche `TYPESAFE`, le préfixe de clé du fournisseur et le nom de paquet `@typesafe-ai/sdk` dans `app/dist/` ; vérifier qu'elle échoue en y plaçant volontairement la chaîne, puis passe sur le vrai paquet

## 5. Évaluation et activation

- [ ] 5.1 Écrire `app/tests/evaluation-typesafe.mjs` : il lit un fichier d'étiquettes local et non versionné (passage, type attendu, sphère attendue), le passe dans `analyser()` et dans la fonction, et produit la précision par type pour chaque moteur, la matrice de confusion, et, pour chaque seuil de 0,5 à 0,9, la précision de TypeSafe au-dessus du seuil et la part de questions posées en Revue ; vérifier sur un fichier d'étiquettes de synthèse de dix lignes que les chiffres attendus sortent
- [ ] 5.2 Ajouter au script la variante « instructions en anglais, contenu en français » ; vérifier que le rapport compare les deux variantes côte à côte
- [ ] 5.3 Poser `TYPESAFE_API_KEY` sur Netlify, étiqueter à la main un lot d'au moins cent passages tirés de captures réelles, lancer l'évaluation et consigner les chiffres agrégés, le modèle épinglé, le délai et le seuil retenus dans `openspec/changes/analyse-typesafe/evaluation.md` — **nécessite une clé et des captures réelles, rien de tout cela n'existe aujourd'hui**
- [ ] 5.4 Selon `evaluation.md`, allumer l'analyse distante par défaut et fixer le seuil du type, ou consigner pourquoi elle reste éteinte ; vérifier que les scénarios « Avant évaluation » ou « Évaluation défavorable » de `analyse-distante` sont tenus selon l'issue, puis cocher 7.1 et 7.6 dans `zenote-core/tasks.md` en renvoyant aux tests de cette change
