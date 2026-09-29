# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Suggestions proactives

- [ ] 1.1 Écrire `services/retenue.ts` (`doitPresenter`, `noterIgnoree`, `noterUtilisee`, `revenirAuRythmeNormal`, `rythme`) et le réglage `retenue` ; vérifier par `retenue.test.ts` « Trois fois ignorée », « Utilisée à nouveau » et le plafond d'une sur huit
- [ ] 1.2 Passé pertinent : raison affichée, lien « Voir », comptage utilisée / ignorée, présentation soumise à `doitPresenter` ; pistes d'échange en Revue : même comptage ; vérifier par `passe.test.ts` et dans `bout-en-bout.mjs` « Passé pertinent expliqué »
- [ ] 1.3 Bloc « Suggestions » dans Réglages (rythme par sorte, retour au rythme normal) ; vérifier dans `bout-en-bout.mjs` « Rythme dit dans les réglages »

## 2. La semaine

- [ ] 2.1 Écrire `services/semaine.ts` (`bilan`) ; vérifier par `semaine.test.ts` « Semaine ordinaire », « Groupe vide », et qu'un élément abandonné n'est pas compté comme avancé
- [ ] 2.2 Écran `ui/semaine.ts` en retrait (`#semaine`), question finale créant une capture écrite, réglage `semaineVueLe` ; vérifier dans `bout-en-bout.mjs` « Chose à retenir » et « Aucun chiffre de performance » (aucun `%` dans l'écran)
- [ ] 2.3 Ligne hebdomadaire en Revue ; vérifier dans `bout-en-bout.mjs` « Signal hebdomadaire »
