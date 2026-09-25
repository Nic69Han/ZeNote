# Design

## Context

Voir `proposal.md` pour le pourquoi, et `specs/analyse-distante/spec.md` pour le comportement attendu.

État actuel, relevé dans le code :

- `analyserCapture` (`app/src/services/pipeline.ts`) appelle `analyser()` de `app/src/analyse/index.ts`. Cet appel est synchrone et purement local. `traiterFileAnalyse` vide la file et avale les échecs : une capture non analysée reste lisible et réanalysable.
- `analyser()` découpe le texte (`decouper`), construit un `ElementJson` par passage, puis passe tout par `filtrerAncrageObjets`. C'est la règle du cœur : rien n'atteint l'écran sans passage source vérifié.
- `ElementJson` (`app/src/core/regles.ts`) porte la confiance de l'échéance, du poids et de l'interlocuteur. Il **ne porte ni la confiance du type, ni celle de la sphère, ni l'origine de l'analyse**. La décision 2 de `zenote-core` (chaque dérivé porte sa version de modèle) n'est donc pas encore tenue.
- `SEUIL_CONFIANCE = 0.75` existe en double, dans `core/…/Derive.kt` et dans `regles.ts`.
- `Capture` (`app/src/stockage/depot.ts`) n'a aucun marquage de transmissibilité. La tâche 7.1 de `zenote-core` est ouverte.
- La promesse « rien ne sort » est affirmée à trois endroits : `netlify.toml` (commentaire des en-têtes), l'écran Réglages (`app/src/ui/reglages.ts`, bloc « Ce qui quitte l'appareil »), et `tests/bout-en-bout.mjs`, qui échoue à la première requête vers un hôte autre que `localhost`.
- Le SDK `@typesafe-ai/sdk` (v0.6) demande Node ≥ 20. Il lit `TYPESAFE_API_KEY` et expose `client.systemOne({ state, questions })` avec les helpers `choice`/`noul`/`score`. Une réponse `choice` porte `choice`, `confidence` et `probabilities`.
- La documentation de Jev (jev-1.13) indique que l'anglais est sa langue principale, et qu'il faut tester avant de s'appuyer sur lui pour une autre langue.

## Goals / Non-Goals

**Goals:**
- Un seul point de sortie réseau, sur le même domaine que l'application, qui ne voit que du texte de passages.
- Un chemin distant qui ne remplace que deux champs, type et sphère. Tout le reste de l'élément continue de venir de l'analyse locale.
- Un repli local intégral et silencieux, pour que la clé absente et le service en panne soient des cas normaux.
- Des données d'évaluation produites par le code réel, pas par un script à part.

**Non-Goals:**
- Aucun passage approfondi (poids, résolution mémoire, rapprochement). Il fera l'objet d'une change distincte, si l'évaluation le justifie.
- Aucune file d'attente côté serveur, aucun stockage côté serveur, aucune journalisation du contenu des requêtes.
- Aucune ré-analyse rétroactive de l'historique : elle devient *possible* grâce au champ d'origine, mais elle n'est pas déclenchée ici.

## Decisions

### 1. Hybride par champ, pas remplacement de l'analyseur

L'analyse locale produit toujours l'élément complet : découpage, échéance, poids, interlocuteur, bornes. Le service distant ne fait que **réécrire `type` et `sphere`**, avec leur confiance. L'ancrage est ensuite appliqué comme aujourd'hui.

*Pourquoi.* Les champs hors périmètre ne changent pas de source, et le repli se réduit à « ne pas réécrire ». Le passage transmis est celui que `decouper` a produit sur l'appareil : le service ne peut pas inventer de texte, ce que la spec exige.

*Alternative écartée* : un analyseur distant complet, qui rendrait des éléments. Il déplacerait le découpage et l'ancrage hors du cœur, et doublerait le code à maintenir pendant l'évaluation.

### 2. Une fonction Netlify, sur le même domaine

`netlify/functions/analyser.mts` est exposée sous `/api/analyser`. Elle reçoit `{ passages: string[] }`, construit **deux questions `choice` par passage** (`type_i`, `sphere_i`) dans **un seul** `systemOne`, et rend `{ modele, reponses: [{ type, typeConfiance, sphere, sphereConfiance }] }`. Le SDK n'est dépendance que de la fonction, jamais du paquet Vite.

*Pourquoi le même domaine.* La vérification réseau du bout-en-bout se réduit à « tout sort vers `/api/analyser` de l'origine ». Aucun CORS n'est nécessaire, et le fournisseur n'est jamais contacté depuis l'appareil. Le passage par la fonction retire aussi l'adresse IP de l'utilisateur de ce que voit TypeSafe.

*Alternative écartée* : appeler TypeSafe depuis la PWA. C'est impossible sans exposer la clé. *Alternative écartée* : un serveur dédié. C'est une infrastructure de plus, alors que l'hébergeur est déjà Netlify.

Les questions reprennent les définitions de `TypeElement` (`Derive.kt`) mot pour mot, en critères explicites. La documentation de Jev insiste sur la lecture littérale : chaque option dit ce qu'elle est **et ce qu'elle n'est pas** (un engagement a un destinataire nommé ; une information n'a ni action ni promesse). Le passage est désigné par un chemin d'état (`` `passages[i]` ``), pas recopié dans la question.

### 3. Correspondance réponse → élément, et validation stricte

- `type` ← `choice`, `typeConfiance` ← `confidence` (la concentration de la distribution, pas la probabilité brute du choix retenu).
- `sphere` ← `PROFESSIONNEL` | `PERSONNEL` ; `INDECIDABLE` → `null`, et `sphereConfiance` reste renseignée.
- La confiance rejoint le seuil existant : sous `SEUIL_CONFIANCE`, le type devient une question en Revue. L'écran le fait déjà pour l'échéance et le poids ; il suffit d'y brancher le nouveau champ.
- La réponse est **rejetée en entier** si son nombre d'entrées diffère du nombre de passages envoyés, ou si une valeur sort de l'énumération. On bascule alors sur le local. Une réponse partielle mélangerait deux analyseurs dans une même capture sans que rien ne le dise.

### 4. Décider la transmissibilité avant d'avoir la sphère

Il y a un problème de poule et d'œuf : exclure une sphère demande de connaître la sphère d'une capture *avant* de l'envoyer, alors que c'est le service distant qui la juge.

**Choix.** La décision d'envoi s'appuie sur la sphère **locale** (`repererSphere` appliquée à la capture entière). Quand une sphère est exclue et que la sphère locale est indécidable, la capture **n'est pas envoyée**.

*Pourquoi.* Le doute se tranche du côté de la vie privée : envoyer une capture personnelle que l'analyseur local n'a pas reconnue violerait l'exclusion. Le coût, c'est que certaines captures professionnelles restent analysées localement tant qu'une exclusion est active. C'est acceptable, et c'est visible grâce au champ d'origine.

*Alternative écartée* : envoyer, puis jeter si la sphère distante tombe dans l'exclusion. Le texte serait déjà parti.

### 5. Origine de l'analyse sur chaque élément

`ElementJson` gagne `typeConfiance`, `sphereConfiance` et `origineAnalyse: { moteur: 'LOCAL' | 'TYPESAFE', modele: string | null }`. Tous ces champs sont optionnels, car les éléments déjà en base n'en ont pas et restent lisibles. L'export les emporte.

*Pourquoi.* C'est l'amorce de la décision 2 de `zenote-core`. Ce champ rend aussi l'évaluation possible (décision 7) et permet plus tard une ré-analyse ciblée.

*Constaté à l'implémentation.* Le cœur Kotlin ne connaît pas ces champs : `filtrerAncrage` décode vers son propre `ElementJson` puis réencode, et les perd. `analyser` les rattache donc par identifiant après l'ancrage, sans toucher à ce que l'ancrage a décidé. Tout autre passage d'un élément par le cœur qui doit les conserver fera de même.

*Confiance du type, locale ou distante.* L'analyseur local chiffre sa confiance d'après la règle qui a tranché (amorce 0,8, verbe 0,6, repli 0,5). Ces valeurs sont posées à la main, non calibrées : elles servent l'évaluation, pas la Revue. La question « ce type est-il juste ? » n'est donc posée que pour un élément d'origine `TYPESAFE` dont la confiance est sous le seuil. L'appliquer aux éléments locaux changerait la Revue de tous les utilisateurs actuels, qui n'ont que l'analyse locale, sans qu'aucune mesure ne le justifie.

*Où vit cette règle.* Dans `app/src/analyse/origine.ts` (`completerRevue`), qui complète la file rendue par le cœur : le cœur ne connaît ni `typeConfiance` ni `origineAnalyse`, et son `aConfirmer()` ne peut donc pas les lire. Conséquence assumée : la réduction de la file (`Arriere.revueReduite`) ne voit pas ce doute-là. Quand le cœur gagnera ces champs, la règle rejoindra `ElementJson.aConfirmer()` et `completerRevue` ne fera plus que rattacher les champs.

### 6. Délai borné, repli sans alerte

L'appel distant a un délai de **4 s**, avec un `AbortController` côté PWA. Toute erreur (hors ligne, 503 « non configuré », délai dépassé, 4xx/5xx, réponse invalide) mène au local. L'état dégradé est **signalé une seule fois**, en Revue (« analysé sur l'appareil »), et jamais par erreur modale.

Sans clé, la fonction rend `503` avec un motif `non-configure`. L'application le traite comme une indisponibilité, ce qui fait marcher le produit avant qu'une clé n'existe.

*Pourquoi 4 s.* La Revue ne doit pas attendre plus longtemps que la transcription locale elle-même (≈ 2 s pour 3 s d'audio, mesuré dans `zenote-core`). La valeur est réglable, et la décision 7 la mesure.

### 7. Évaluation par le code réel, avec un étiquetage humain

Un script `app/tests/evaluation-typesafe.mjs` lit un fichier d'étiquettes local : texte du passage, type attendu, sphère attendue. Il le passe dans **les deux chemins de production**, `analyser()` et la fonction, et produit :
- la précision par type, pour chacun des deux analyseurs ;
- la matrice de confusion ;
- la précision de TypeSafe au-dessus de chaque seuil candidat (0,5 à 0,9), et la part de questions posées en Revue que chaque seuil entraîne.

Le fichier d'étiquettes **n'est pas versionné** (ce sont des captures personnelles). Seuls les chiffres agrégés le sont, dans `evaluation.md`.

L'activation par défaut (décision 8) se prend sur ces chiffres, et le seuil retenu remplace 0,75 **pour le type seulement**.

*Variante testée au passage* : des instructions en anglais sur un contenu français. La documentation dit que l'anglais est la langue forte de Jev ; si la variante l'emporte, les questions sont réécrites en anglais sans rien changer d'autre.

### 8. Désactivée par défaut jusqu'à l'évaluation

Un réglage « Analyse sur un service distant » est **éteint par défaut**. L'allumer affiche, avant confirmation, ce qui part (le texte des passages), vers qui (ZeNote puis TypeSafe), et ce qui ne part jamais (audio, dates, identifiants). Le passage à « allumé par défaut » est une modification d'une ligne, faite seulement après l'évaluation.

## Risks / Trade-offs

- [Le français moins bien traité que l'anglais] → évaluation bloquante avant activation par défaut (décision 7), variante d'instructions en anglais, et routage par confiance qui renvoie le doute en Revue.
- [Des textes personnels chez un tiers] → désactivé par défaut, consentement explicite, exclusion par capture et par sphère, doute tranché vers le local (décision 4), transmission minimale (texte des passages seul).
- [La promesse « rien ne sort » devient fausse sans qu'on le voie] → le bout-en-bout reste strict pour les captures non transmissibles et quand le réglage est éteint, et une nouvelle vérification échoue si une requête vise autre chose que `/api/analyser`. L'écran Réglages et `netlify.toml` sont réécrits dans la même change.
- [Une clé qui fuit dans le paquet] → le SDK vit hors de `app/`. Un test cherche le préfixe de clé dans `dist/` après construction.
- [Le coût d'un service payant] → un appel par capture, deux questions par passage. `Usage` est journalisé côté fonction (jetons, **jamais le contenu**), ce qui rend mesurable la tâche 8.4 de `zenote-core`.
- [Des éléments d'une même capture analysés par deux moteurs] → impossible par construction : la réponse est validée en entier ou rejetée en entier (décision 3).
- [Le quota ou la latence de Netlify Functions] → délai de 4 s et repli local. La capture n'en dépend jamais.

## Migration Plan

1. Livrer d'abord 7.1 (le marquage non transmissible, avec les exclusions de sphère) et les champs optionnels d'`ElementJson`. Cette étape seule ne change aucun comportement réseau.
2. Livrer la fonction et le chemin distant, **réglage éteint par défaut**. Sans clé, tout reste local.
3. Poser `TYPESAFE_API_KEY` sur Netlify, puis faire l'évaluation.
4. Selon l'évaluation, allumer par défaut, ou non, et consigner le seuil.

**Retour arrière** : éteindre le réglage, ou retirer la variable d'environnement. Tout retombe sur le local sans migration de données, puisque les champs ajoutés sont optionnels.

## Open Questions

- La valeur exacte du délai (4 s au départ) et du seuil de confiance du type : fixées par l'évaluation, sans effet sur la structure.
- Le modèle TypeSafe à épingler (`jev-1.13` ou le défaut du SDK) : lu dans `models.md` au moment de l'implémentation, et enregistré dans `origineAnalyse.modele` dans tous les cas.
