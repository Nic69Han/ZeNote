# Tasks

Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Écoute accélérée

- [ ] 1.1 Réglage `vitesseEcoute` et boutons 1× / 1,5× / 2× dans `lecteurAudio` (`preservesPitch`) ; vérifier par `lecteur.test.ts` que la vitesse retenue s'applique au lecteur suivant, et dans `bout-en-bout.mjs` « Écoute à 1,5× » (`playbackRate` lu dans la page)
- [ ] 1.2 Écrire `audio/silences.ts` ; vérifier par `silences.test.ts` sur des échantillons synthétiques « Pause longue sautée », « Pause courte conservée », et le calcul de la position de saut
- [ ] 1.3 Interrupteur « Raccourcir les silences » dans le lecteur (décodage à la demande, sauts pendant la lecture, repli annoncé si le décodage échoue) ; vérifier par `lecteur.test.ts` le repli, et « Enregistrement intact » par une comparaison d'octets

## 2. Repères

- [ ] 2.1 Écrire `services/reperes.ts` (`reperesDepuis`, `situer`) ; vérifier par `reperes.test.ts` « Décision comme repère », « Citation proche d'une réunion », « Aucun repère proche » et la préférence au plus ancien à égalité
- [ ] 2.2 Afficher la mention de repère sur chaque citation et la frise compacte ; vérifier dans `bout-en-bout.mjs` une citation située par une décision acceptée

## 3. Recherches passées

- [ ] 3.1 Passer la base en version 4 avec `MAGASIN_RECHERCHES` (une ligne scellée), rescellement à l'activation du coffre, inclusion dans « Tout effacer » et l'export ; vérifier par `stockage.test.ts` la montée 3 → 4 avec données existantes, et par `export.test.ts`
- [ ] 3.2 Écrire `services/recherches.ts` (`retenir`, `recentes`, `oublier`, `toutOublier`) ; vérifier par `recherches.test.ts` « Doublon », « Oublier une question » et la limite de 20
- [ ] 3.3 Liste des recherches récentes sous les champs ; vérifier dans `bout-en-bout.mjs` « Relancer une recherche », et « Chiffrement » par lecture brute de la base coffre actif
