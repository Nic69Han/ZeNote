# Proposal

## Why

Deux scénarios de la spec `rappels` de `zenote-core` restent partiels sur la surface web (`verification.md`) : « Plage de silence respectée » et « Rappel critique immédiat ». Le cœur connaît les deux (`FileOpportunite`, `Rappel.critique`), mais la surface ne déclare aucune plage de silence et ne marque aucun rappel critique. Pire, la file rend bien un rappel critique « immédiat », mais `Regles.rappels` ignore cette réponse : un critique ne serait jamais présenté.

## What Changes

- **Plage de silence quotidienne** : un réglage dans « Vos données » (par exemple 22:00–07:00, éteint par défaut). Pendant la plage, les rappels non critiques sont retenus. À sa fin, application ouverte, ils sont présentés ; sinon, ils le sont à la reprise suivante.
- **Rappel critique** : l'utilisateur marque un élément « critique » dans « Ajuster » en Revue. Un élément de poids fort dont l'échéance est aujourd'hui ou dépassée est aussi critique : c'est la « conséquence immédiate » de la spec.
- **Livraison immédiate** : un rappel critique devenu actionnable est présenté au premier moment observable, sans attendre un point de rupture, plage de silence et réunion en cours comprises. La bande le marque « Critique ».
- **Cœur** : `Regles.rappels` prend les plages de silence, rend les critiques livrés immédiatement, et dit jusqu'à quand les autres sont retenus.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune spec n'est archivée dans `openspec/specs/`. Les deux scénarios visés appartiennent à la capability `rappels` de la change `zenote-core`, non archivée ; ils ne changent pas, ils deviennent tenus sur la surface web. Cette change **ajoute** à `rappels` deux exigences qui précisent ce que la surface déclare : le réglage de la plage de silence, et ce qui rend un rappel critique.

## Impact

- **Cœur Kotlin** (`core/`) :
  - `ElementJson.critique` ;
  - `Regles.rappels` avec plages de silence et critiques immédiats ;
  - `RappelsDuMomentJson` : `silenceJusqua`, et `critique` par rappel livré ;
  - nouvelle entrée JS `rappelsAvecContexte`.
  Le JS vendu est à régénérer par `scripts/sync-core-js.sh`.
- **PWA** (`app/`) :
  - réglage `silence` et bloc « Plage de silence » ;
  - case « Critique » dans « Ajuster » ;
  - `services/rappels.ts` calcule les plages autour de l'instant ;
  - la bande marque les critiques ;
  - `main.ts` présente les rappels retenus à la fin de la plage, application ouverte.
- Aucun réseau, aucune donnée nouvelle hors de l'appareil.
