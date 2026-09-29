# Proposal

## Why

Le scénario « Rappel lié à un événement récurrent » de la spec `rappels` (change `zenote-core`) est partiel dans `verification.md`. Un plan « avant le point du lundi » s'accroche à la prochaine occurrence, puis reste dû à chaque point de rupture jusqu'à être traité ou escaladé. La spec demande autre chose : qu'il revienne avant **chaque** occurrence, tant qu'il n'est pas clos. Aujourd'hui, un mercredi, il réapparaît sans raison, et le lundi suivant il n'a plus rien de particulier.

## What Changes

- **Échéance récurrente** : quand le signal d'un plan désigne un événement récurrent de l'agenda (« avant le point du lundi »), le rappel est dû pendant chaque occurrence connue :
  - dès 5 minutes avant le début ;
  - retenu pendant la réunion, comme tout rappel non critique ;
  - livré en retard à sa sortie, dans les 30 minutes après la fin.
  Entre deux occurrences, il n'est pas dû.
- **« au prochain … » reste unique** : « au prochain point d'équipe » vise une seule occurrence, récurrente ou non. C'est le comportement actuel.
- Sans agenda, rien ne change : le signal reste ramené à la reprise, en le disant.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune spec n'est archivée dans `openspec/specs/`. Le scénario visé appartient à la capability `rappels` de la change `zenote-core`, non archivée ; il ne change pas, il devient tenu. Cette change **ajoute** à `rappels` une exigence qui précise la fenêtre de chaque occurrence et la différence avec « au prochain ».

## Impact

- **Cœur Kotlin** (`core/`) :
  - `Echeance.Recurrente` et ses fenêtres ;
  - `SignauxAgenda` produit l'échéance récurrente ;
  - `Regles.rappels` calcule le retard sur la fenêtre en cours.
  Le JS vendu est régénéré.
- **PWA** : aucun changement de code. L'agenda importé porte déjà `recurrent`.
