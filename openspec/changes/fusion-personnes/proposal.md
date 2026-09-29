# Proposal

## Why

Le scénario « Fusion de doublons » de la spec `memoire` (change `zenote-core`) reste partiel dans `verification.md` : le cœur sait fusionner deux entités (`MemoireTest`), mais aucun écran ne le propose. Or les doublons arrivent tout seuls : « Marc » dans une note dictée, « Marc Dupont » dans une autre. L'écran « Les gens » montre alors deux fiches pour une même personne, chacune avec une moitié de ce qui traîne entre vous.

## What Changes

- **« Même personne que… »** sur chaque fiche de « Les gens » : l'utilisateur choisit la fiche à garder, confirme, et les deux n'en font plus qu'une. L'historique est réuni, et chaque élément rattaché désigne désormais le nom gardé.
- **Annulable** : juste après, « Annuler » rend les deux fiches telles qu'elles étaient. Plus tard, la fiche gardée propose « Séparer « Marc » », qui fait de même. L'annulation ne touche que ce que la fusion a changé.
- **Protégée de la ré-analyse** : un élément fusionné compte comme corrigé à la main, et une nouvelle analyse de sa capture ne le rend pas à l'ancien nom.
- **Rien de nouveau hors de l'appareil, rien en clair** : la fusion est écrite sur les éléments eux-mêmes, que le coffre scelle déjà. Aucun nom ne part dans un réglage ou un magasin en clair.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune spec n'est archivée dans `openspec/specs/`. Le scénario visé appartient à la capability `memoire` de la change `zenote-core`, non archivée ; il ne change pas, il devient tenu sur la surface web. Cette change **ajoute** à `memoire` une exigence qui dit ce que la surface garantit : la fusion depuis les fiches, son annulation, et sa tenue à la ré-analyse.

## Impact

- **PWA** (`app/`) :
  - `stockage/depot.ts` : champ `interlocuteurAvantFusion` sur l'élément, scellé avec lui ;
  - `services/personnes.ts` (nouveau) : fusionner, séparer ;
  - `ui/personnes.ts` : action « Même personne que… », annulation, « Séparer ».
- **Cœur** : aucun changement. Les fiches se reconstruisent depuis les éléments, qui portent déjà le nom gardé.
- **Limite** : une mention future de l'ancien nom (« Marc ») crée de nouveau sa fiche, jusqu'à une nouvelle fusion. Retenir un alias demanderait un magasin de noms, scellé à part ; ce n'est pas l'objet de cette change.
