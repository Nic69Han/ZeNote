# Design

## Context

Voir `proposal.md`. État relevé dans le code :

- Un élément est un passage exact de sa capture (`debutCar`, `finCar`), découpé par `decouper` (`app/src/analyse/segments.ts`) sur la ponctuation et sur des charnières orales (« puis », « , et je… »). Le découpage sur charnière peut séparer une négation de ce qu'elle nie.
- La Revue affiche les badges déduits (type, poids, échéance, interlocuteur) puis le texte de l'élément et une ligne `entree__indice` (« Poids : … Échéance : « … ». Origine : … »). Rien ne distingue visuellement un texte cité d'un texte produit.
- Maintenant affiche `PropositionJson.texte` (le passage) et `raison`, construite par `Priorisation.raison` comme `"$indicePoids — ${urgence.libelle}"` : une citation et une déduction collées dans une même phrase. La source est repliée dans un `<details>`.
- `Disfluences.kt` connaît déjà les négations (`NEGATIONS`) et les nombres en lettres (`NOMBRES`) qu'il ne faut pas abîmer.

## Goals / Non-Goals

**Goals :** rendre la frontière dit / déduit lisible partout où une déduction s'affiche ; attraper l'omission la plus dangereuse (la négation) avant qu'elle ne devienne une tâche acceptée.

**Non-Goals :** corriger automatiquement un élément ; changer le découpage (une autre change pourra s'appuyer sur les omissions mesurées pour le faire).

## Decisions

### 1. Le détecteur vit dans le cœur

`Omissions.dans(phrase, passage): List<Omission>` avec `Omission(nature: NEGATION | NOMBRE | NOM, mots: String)`. La phrase est l'intervalle de la capture délimité par la ponctuation forte (`.!?;` et saut de ligne) qui contient le passage. Une marque n'est une omission que si elle est **dans la phrase, hors du passage, et absente du passage**. Les listes de négations et de nombres sont partagées avec `Disfluences` (extraites dans un objet commun plutôt que dupliquées). Un nom propre est un mot à majuscule qui n'ouvre pas la phrase.

*Pourquoi le cœur* : la règle d'ancrage et la protection des disfluences y sont ; la même règle ne doit pas exister en deux langues.

`Regles.omissions(texteCapture, elementsJson)` rend `[{ elementId, phrase, debutPhrase, finPhrase, manques: [{ nature, mots, debutCar, finCar }] }]`, exposé par `Pont.kt`. Contrat `14`.

### 2. Seule la négation fait confirmer

Un nombre ou un nom perdu est signalé (« La phrase d'origine dit aussi : … ») sans bloquer. Une négation perdue inverse le sens : l'élément est marqué « à confirmer » comme une transcription incertaine, et aucun plan ni rappel n'est posé tant que l'utilisateur ne l'a pas accepté explicitement ou corrigé.

*Alternative écartée* : tout faire confirmer. Les noms coupés d'une phrase sont fréquents et bénins ; les faire tous confirmer userait la question.

### 3. « Vous avez dit » / « déduit »

Un composant d'affichage unique (`app/src/ui/provenance.ts`) rend deux formes : `dit(mots)` → « vous avez dit « … » » en style citation, `deduit(libelle, depuis?)` → libellé suivi de la mention « déduit » et, si connue, de la citation d'où il vient. Revue, Maintenant, Recherche (énoncé de réponse) et Personnes l'utilisent ; aucun écran ne compose sa propre variante.

Dans Maintenant, la raison est rendue en deux morceaux : l'indice de poids quand il vient d'une citation, et l'urgence marquée déduite. Pour cela `PropositionJson` gagne `raisonDite` (l'indice de conséquence, ou `null`) et `raisonDeduite` (le libellé d'urgence) ; `raison` reste pour la compatibilité.

## Risks / Trade-offs

- Faux positifs sur les noms (majuscule après un deux-points dicté) → signalement non bloquant.
- Élément ancien sans capture : aucune omission n'est calculée, rien n'est affirmé.
