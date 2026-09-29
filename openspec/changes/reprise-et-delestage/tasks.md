# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Où j'en étais

- [x] 1.1 Ajouter `Capture.reprise` (`depot.ts`), le relire sur une capture ancienne sans le champ, l'inclure dans l'export ; faire marquer analysée sans élément une note de reprise par la file d'analyse ; vérifier par `reprise.test.ts` et `export.test.ts`

  *Ajout à la décision 1 : une note dictée dont rien n'a été reconnu n'est pas « en souffrance » en Revue (`capturesEnSouffrance` l'écarte) — elle n'en produit rien par construction, et sa carte offre l'audio. Par ailleurs `noteDeReprise` ne rend que la plus récente des notes marquées : après « C'est reparti », une note plus ancienne non reprise ne ressort pas, conformément à « reste une capture ordinaire retrouvable ».*
- [x] 1.2 Écrire `services/reprise.ts` (`noteDeReprise`, `marquerReprise`, `garderPourRevue`) ; vérifier par `reprise.test.ts` les scénarios « Une seule note à la fois », « Reprise marquée » et « Envoyer en Revue »
- [x] 1.3 Bouton « Je m'arrête là » sur l'écran de capture (dictée ou écrite) et carte « Où vous en étiez » en tête de Maintenant ; vérifier dans `bout-en-bout.mjs` « Poser une note de reprise » et « Retour après une réunion » (horloge simulée ou note datée d'avant l'absence)

## 2. Vider sa tête le soir

- [x] 2.1 Réglages `delestageSoir` (faux), `delestageHeure` ('21:00'), `delestageVuLe` ; fonction pure `inviteDuSoir(maintenant, reglages)` avec le jour de référence qui passe minuit ; vérifier par `delestage.test.ts` les trois scénarios de « Invite du soir facultative »
- [x] 2.2 Bloc de réglage dans `reglages.ts` et invite sur l'écran de capture, confirmation « Écrit. Vous pouvez le lâcher jusqu'à demain. » ; vérifier dans `bout-en-bout.mjs` « Liste du lendemain déposée »

## 3. Premier geste

- [x] 3.1 Écrire `analyse/geste.ts` (`demandeUnPremierGeste`) ; vérifier par `geste.test.ts` au moins dix formulations floues et dix concrètes
- [x] 3.2 Champ de premier geste dans la zone de plan de la Revue, et affichage « Commencer par » avec « Geste fait » dans Maintenant ; vérifier dans `bout-en-bout.mjs` « Tâche floue », « Geste laissé vide » et « Geste fait »

  *Écart à la décision 4 : `design.md` ne dit pas comment « Geste fait » est retenu. Sans état, la carte continuerait de dire « Commencer par » un geste déjà fait. Le geste rejoint `ElementStocke.gestesFaits` (documenté dans l'export) et `planAction` redevient le texte de la tâche ; « Et ensuite ? » y repose le geste suivant. Aucune évolution du cœur ni de la base : `gestesFaits` n'est jamais passé aux règles.*
