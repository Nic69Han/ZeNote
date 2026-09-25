# Tasks

Les groupes suivent le Migration Plan de `design.md`. Le groupe 1 touche le cœur Kotlin et exige de reconstruire `app/vendor/zenote-core/` par `scripts/sync-core-js.sh`. S'il est impossible de le reconstruire, l'application s'arrête et le signale : aucune règle n'est recopiée en TypeScript. Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Cœur : durée, contexte d'agenda, signaux et moments

- [x] 1.1 Ajouter au modèle dérivé du cœur et à son `ElementJson` la durée estimée (`COURTE`, `MOYENNE`, `LONGUE` ou absente), avec sa confiance et son indice, lus sans erreur quand ils manquent ; vérifier par un test Kotlin qu'un élément ancien sans durée se décode et que `maintenant` le classe comme avant
- [x] 1.2 Ajouter `maintenantAvecContexte(elementsJson, contexteJson)` selon la décision 5 : filtre par temps avant la prochaine réunion, durée inconnue écartée sous 30 minutes, récupération après au moins 180 minutes de réunions enchaînées, créneau protégé suspendu, raison du filtre et nombre d'écartés rendus ; vérifier par des tests Kotlin les scénarios « Créneau court », « Rien qui tienne », « Temps retrouvé » et « Journée dense », et que `maintenant` sans contexte rend exactement le classement actuel
- [x] 1.3 Étendre `Echeancier.quand` avec les événements, selon la décision 6 : « je vois X » par participant ou titre (le nom complet prime ; un prénom partagé n'accroche rien), « avant/au prochain titre » par occurrence, 5 minutes avant le début ; sans correspondance, substitution avec l'explication « aucun événement de l'agenda ne concerne X » ; vérifier par des tests Kotlin « Rappel lié à une personne », « Rappel lié à un événement récurrent », « Personne absente de l'agenda » et le cas des deux Marc
- [x] 1.4 Ajouter `evenementsJson` à `Regles.rappels` : vider la file sur `FIN_DE_REUNION` dans les 30 minutes qui suivent la fin d'une réunion, rappel marqué en retard s'il est devenu actionnable pendant la réunion, `REPRISE_APPAREIL` sinon ; vérifier par un test Kotlin « Report à la fin de la réunion », et qu'avec une liste vide la sortie est identique à l'actuelle
- [x] 1.5 Ajouter `momentsDeReunion(evenementsJson, maintenant, capturesJson, elementsJson, rattachesJson)` selon la décision 7 (`AVANT` à 10 minutes ou moins avec briefing, dépose à 2 minutes ou moins ; `APRES` jusqu'à 60 minutes, reporté si une réunion suit dans les 5 minutes) ; vérifier par des tests Kotlin « Briefing avant réunion », « Aucun élément à rappeler », « Dépose proposée », « Reprise après réunion » et « Proposition non intrusive »
- [x] 1.6 Reconstruire le cœur par `bash scripts/sync-core-js.sh` et ajouter les enveloppes typées dans `app/src/core/regles.ts` ; vérifier que `./gradlew :core:build` passe, et qu'un test Vitest appelle chaque nouvelle entrée depuis le JS vendu

## 2. Surface : lecture, stockage et durée

- [ ] 2.1 Écrire `app/src/agenda/ics.ts` selon les décisions 1 et 2 : dépliage, `VEVENT`, fuseaux `Z`/`TZID`/flottant avec table des noms Windows, `RRULE` `DAILY`/`WEEKLY`/`MONTHLY` avec `INTERVAL`/`COUNT`/`UNTIL`/`EXDATE`/`RECURRENCE-ID`, `STATUS:CANCELLED`, horizon de la veille à 60 jours, comptes de lus et d'écartés avec raisons ; vérifier par `tests/agenda-ics.test.ts` sur des fixtures exportées de Google Agenda et d'Outlook, dont un fuseau Windows et une règle non prise en charge (« Récurrence non comprise »), et un fichier non iCalendar (« Fichier illisible »)
- [ ] 2.2 Passer la base en version 4 avec le magasin `evenements` et la ligne `agenda` des réglages (décision 3) : import dans une seule transaction, effacement, scellement du titre, du lieu et des participants quand le coffre est actif ; vérifier par `tests/agenda-stockage.test.ts` « Réimport », « Agenda effacé », « Agenda protégé par le coffre », et la montée depuis une base v3 remplie
- [ ] 2.3 Déduire la durée dans l'analyse locale (décision 4) et la faire traverser l'ancrage comme `typeConfiance` ; vérifier par `analyse.test.ts` « Durée déduite » (« envoyer le devis à Marc » → courte, avec indice), « Durée inconnue », et un nombre de minutes explicite qui prime

## 3. Écrans

- [ ] 3.1 Ajouter le bloc « Agenda » dans « Vos données » : import par fichier, résultat (lus, écartés et pourquoi), date d'import et couverture, bouton d'effacement, limite dite (visible seulement application ouverte) ; vérifier dans `tests/bout-en-bout.mjs` « Import réussi » et « Couverture affichée » avec un `.ics` généré
- [ ] 3.2 Brancher Maintenant sur `maintenantAvecContexte` et le bandeau de `momentsDeReunion`, recalculés à l'ouverture, au retour sur l'onglet et chaque minute ; dépose et vidage ouvrant la capture sans démarrer le micro ; vérifier sous `page.clock` « Créneau court », « Journée dense », « Dépose proposée », « Reprise après réunion », « Capture post-réunion contextualisée », « Proposition non intrusive » et « Aucun enregistrement implicite »
- [ ] 3.3 Poser `agenda` sur une capture faite pendant une réunion ou dans les 15 minutes qui suivent (décision 7), sans l'effacer quand l'agenda est effacé ; vérifier par un test de pipeline et par le scénario « Agenda effacé »
- [ ] 3.4 En Revue : choix de durée dans « Ajuster » (confiance 1, protégé par `corrigeParHumain`), déclencheurs d'agenda proposés pour l'interlocuteur, avertissement unique d'agenda périmé ; brancher `rappels` sur les événements ; vérifier « Durée corrigée », « Agenda périmé » et, sous `page.clock`, « Rappel lié à une personne » et « Report à la fin de la réunion »
- [ ] 3.5 Mentionner dans le `lisezMoi` de l'export que l'agenda n'y figure pas ; vérifier par `export.test.ts`

## 4. Promesse et clôture

- [ ] 4.1 Faire couvrir par la vérification réseau stricte du bout-en-bout tout le parcours avec agenda ; vérifier « Aucune sortie réseau » et « Sans agenda » (le parcours existant reste vert sans import)
- [ ] 4.2 Cocher dans `zenote-core/tasks.md` 5.4 (volet temps, écart « appareil » écrit), 5.5, 6.1 et 6.2, et noter 5.14 pour son seul volet dégradé, en renvoyant aux tests de cette change ; mettre à jour les lignes concernées de `zenote-core/verification.md` ; vérifier par `openspec validate zenote-core` et `openspec validate agenda-local --strict`
