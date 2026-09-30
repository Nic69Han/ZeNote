# Proposal

## Why

- **Une suggestion non demandée dérange, même utile.** L'aide proactive fait gagner du temps mais interrompt le travail ; signaler sa présence et ce qui l'a déclenchée réduit cette gêne (Pu et al., CHI 2025). ZeNote affiche après une capture « Déjà dit : « … » » sans dire pourquoi, alors que la raison (`Echo.pourquoi`) est calculée puis jetée, et la suggestion revient au même rythme qu'on la lise ou non.
- **Le recul est l'étape où les outils personnels échouent.** Dans le modèle par étapes de Li, Dey & Forlizzi (CHI 2010), la réflexion est l'étape la plus souvent négligée. C'est un modèle, pas un effet mesuré : la confiance est plus faible, d'où une fonctionnalité légère et sans engagement. ZeNote a tout ce qu'il faut — faits, abandons, éléments qui n'avancent plus — et ne le montre jamais d'un seul tenant.

## What Changes

- **Nouveau — Pourquoi je vois ça** : toute suggestion proactive affiche en une ligne ce qui l'a déclenchée (mots partagés, personne, date). Aujourd'hui : le rappel du passé pertinent sur l'écran de capture et les pistes d'échange en Revue.
- **Nouveau — Retenue** : un service `retenue` compte, par sorte de suggestion, les présentations ignorées d'affilée. Après 3, la sorte s'espace (une présentation sur 2, puis sur 4 au-delà de 6, plafonné à 1 sur 8) ; une seule suggestion utilisée remet le rythme normal. Le rythme courant est dit dans Réglages, avec un bouton pour revenir au rythme normal.
- **Nouveau — La semaine** : un écran en retrait « La semaine » montre les sept derniers jours en trois groupes — ce qui a avancé, ce qui a été abandonné ou classé « un jour », ce qui n'avance plus — puis une question facultative « Une chose à retenir de la semaine ? » qui crée une capture écrite. Aucun pourcentage, aucune série, aucune comparaison, aucun mot de reproche. La Revue le signale d'une ligne une fois par semaine.

## Capabilities

### New Capabilities
- `suggestions-proactives` : raison affichée et retenue des suggestions non demandées.
- `retour-semaine` : retour sur la semaine, sans reproche.

### Modified Capabilities
Aucune dans `openspec/specs/`.

## Impact

- Nouveau `app/src/services/retenue.ts`, `app/src/services/echos.ts` (raison conservée), `app/src/ui/capturer.ts` (ligne de passé pertinent), `app/src/ui/revue.ts` (pistes d'échange, ligne hebdomadaire), `app/src/ui/reglages.ts`, nouveau `app/src/services/semaine.ts` et `app/src/ui/semaine.ts`, `app/src/main.ts` (écran en retrait `semaine`), réglages (`retenue`, `semaineVueLe`), `app/src/styles/`.
- Aucun changement du cœur ni de la version de la base.
