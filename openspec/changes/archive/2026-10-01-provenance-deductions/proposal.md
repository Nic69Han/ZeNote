# Proposal

## Why

ZeNote mélange à chaque écran les mots de l'utilisateur et ce qu'il en déduit : un type, un poids, une échéance, un interlocuteur, une raison de priorité. Deux études de 2026 montrent que ce mélange abîme la mémoire de celui qui lit :

- Après un résumé produit par une IA et trompeur, **44,8 %** des participants se souviennent correctement de l'événement, contre **83,6 %** après un résumé exact. Savoir que le résumé vient d'une IA **ne protège pas**, et la confiance déclarée dans l'IA n'y change rien. L'erreur la plus fréquente est l'**omission** : la plupart des résumés trompeurs laissent de côté l'élément central (Sim, Eiger & Kohno, arXiv 2609.28820, 2026).
- Une semaine plus tard, la probabilité d'attribuer correctement l'origine d'une idée est **inférieure de 95 %** quand une IA a pris part à sa formulation (Zindulka et al., CHI 2026).

Une étiquette « déduit par l'IA » ne suffit donc pas : il faut que la phrase d'origine soit **à côté** de la déduction, et que ce qui a été perdu en route soit signalé. ZeNote sait déjà protéger les noms, les chiffres et les négations quand il nettoie une transcription (`Disfluences.kt`). Il ne fait pas ce contrôle entre un élément et la phrase dont il a été découpé : « Il ne faut surtout pas, et j'insiste, envoyer le devis » devient aujourd'hui la tâche « j'insiste, envoyer le devis ».

## What Changes

- **Nouveau** : chaque déduction affichée (type, poids, échéance datée, interlocuteur, sphère, raison de priorité) est marquée « déduit » et accompagnée, dans la même carte et sans dépliage, des mots exacts dont elle vient. Les mots de l'utilisateur sont toujours cités entre guillemets français et introduits par « vous avez dit ». Les textes produits par ZeNote ne le sont jamais.
- **Nouveau** : un détecteur d'omissions, dans le cœur, qui compare chaque élément à la phrase de la capture dont il a été découpé et signale une négation, un nombre ou un nom propre présents dans la phrase et absents de l'élément.
- **Nouveau** : la Revue fait confirmer un élément qui a perdu une négation, et montre la phrase entière avec les mots manquants mis en évidence ; aucun rappel n'est planifié sur un élément dont l'omission n'est pas levée.
- **Modifié** : la raison d'une proposition dans Maintenant sépare ce qui a été dit (l'indice de conséquence, cité) de ce qui a été déduit (l'urgence tirée de l'échéance).
- **Modifié** : le contrat JSON du cœur passe de `13` à `14`.

Hors périmètre : la reformulation des éléments (aucune n'est introduite), l'analyse distante (inchangée), l'écran Personnes au-delà du marquage de ses fiches.

## Capabilities

### New Capabilities
- `provenance` : distinction visible entre ce qui a été dit et ce qui a été déduit, et signalement des omissions entre un élément et sa phrase d'origine.

### Modified Capabilities
Aucune dans `openspec/specs/` (vide tant que `zenote-core` n'est pas archivée). Les exigences `extraction` et `revue` de `zenote-core` sont prolongées, pas modifiées.

## Impact

- **Cœur** : `core/.../texte/Omissions.kt` (nouveau), `api/Regles.kt`, `api/Dto.kt`, `jsMain/.../js/Pont.kt`, tests JVM ; `bash scripts/sync-core-js.sh`.
- **PWA** : `app/src/core/regles.ts` (contrat 14, `omissionsObjets`), `app/src/ui/revue.ts`, `app/src/ui/maintenant.ts`, `app/src/ui/recherche.ts` (énoncé marqué), `app/src/ui/personnes.ts`, `app/src/styles/ecrans.css`.
- **Tests** : `OmissionsTest.kt`, `app/tests/provenance.test.ts`, bloc dédié dans `app/tests/bout-en-bout.mjs`.
