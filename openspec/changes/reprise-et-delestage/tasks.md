# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Où j'en étais

- [x] 1.1 Ajouter `Capture.reprise` (`depot.ts`), le relire sur une capture ancienne sans le champ, l'inclure dans l'export ; faire marquer analysée sans élément une note de reprise par la file d'analyse ; vérifier par `reprise.test.ts` et `export.test.ts`
- [x] 1.2 Écrire `services/reprise.ts` (`noteDeReprise`, `marquerReprise`, `garderPourRevue`) ; vérifier par `reprise.test.ts` les scénarios « Une seule note à la fois », « Reprise marquée » et « Envoyer en Revue »
- [x] 1.3 Bouton « Je m'arrête là » sur l'écran de capture (dictée ou écrite) et carte « Où vous en étiez » en tête de Maintenant ; vérifier dans `bout-en-bout.mjs` « Poser une note de reprise » et « Retour après une réunion » (horloge simulée ou note datée d'avant l'absence)

## 2. Vider sa tête le soir

- [x] 2.1 Réglages `delestageSoir` (faux), `delestageHeure` ('21:00'), `delestageVuLe` ; fonction pure `inviteDuSoir(maintenant, reglages)` avec le jour de référence qui passe minuit ; vérifier par `delestage.test.ts` les trois scénarios de « Invite du soir facultative »
- [x] 2.2 Bloc de réglage dans `reglages.ts` et invite sur l'écran de capture, confirmation « Écrit. Vous pouvez le lâcher jusqu'à demain. » ; vérifier dans `bout-en-bout.mjs` « Liste du lendemain déposée »

## 3. Premier geste

- [ ] 3.1 Écrire `analyse/geste.ts` (`demandeUnPremierGeste`) ; vérifier par `geste.test.ts` au moins dix formulations floues et dix concrètes
- [ ] 3.2 Champ de premier geste dans la zone de plan de la Revue, et affichage « Commencer par » avec « Geste fait » dans Maintenant ; vérifier dans `bout-en-bout.mjs` « Tâche floue », « Geste laissé vide » et « Geste fait »
