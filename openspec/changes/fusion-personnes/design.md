# Design

## Context

Voir `proposal.md`. Les fiches ne sont pas stockées : `Regles.fiches` les reconstruit à chaque affichage depuis les captures et les éléments, en regroupant par `interlocuteur`. La correction `Memoire.fusionner` du cœur agit sur une mémoire qui n'existe que le temps d'un calcul ; elle ne peut pas persister seule.

## Goals / Non-Goals

**Goals :** une fusion qui survit au rechargement, s'annule, tient à la ré-analyse, et ne met aucun nom en clair.

**Non-Goals :**
- Des alias pour les mentions futures (voir proposal, Limite).
- Renommer une personne, ou séparer une fiche au-delà de l'annulation d'une fusion.

## Decisions

### 1. La fusion s'écrit sur les éléments, pas dans un magasin de corrections

Fusionner « Marc » dans « Marc Dupont » réécrit, sur chaque élément dont `interlocuteur` vaut « Marc », trois champs :
- `interlocuteur = « Marc Dupont »` ;
- `interlocuteurAvantFusion = « Marc »` ;
- `corrigeParHumain = true`.

Les fiches se reconstruisent donc d'elles-mêmes, sans rien changer au cœur.

*Alternative écartée* : une liste de corrections rejouée par le cœur. Elle vivrait dans les réglages, qui ne sont pas scellés, et mettrait des noms en clair dans la base.

### 2. L'annulation ne touche que ce que la fusion a changé

« Séparer » rend `interlocuteur = interlocuteurAvantFusion` aux seuls éléments qui portent cette marque et le nom gardé, puis efface la marque. Un élément qui désignait déjà « Marc Dupont » avant la fusion n'a pas de marque, et ne bouge pas.

Si une fiche a été fusionnée deux fois (« Marc », puis « M. Dupont »), chaque ancien nom se sépare indépendamment.

`corrigeParHumain` reste vrai après l'annulation, et cela n'a rien de faux : l'élément a bien été touché à la main.

### 3. Rechercher par nom exact, comme le regroupement des fiches

La fusion vise les éléments dont `interlocuteur`, sans espaces autour, vaut exactement le nom de la fiche absorbée. C'est la clé sous laquelle `fiches` les a regroupés. Les variantes de casse sont celles que le cœur réunit déjà.

### 4. Une ré-analyse ne repropose pas un passage déjà tranché

`remplacerElements` garde déjà les éléments décidés ou corrigés. Mais il écrivait à côté les nouveaux candidats, y compris pour le même passage. D'où un doublon qui ramenait l'ancien nom, et par là la fiche fusionnée. Un nouveau candidat dont les bornes (`debutCar`, `finCar`) sont celles d'un élément gardé n'est donc plus écrit. C'est la tenue de la décision humaine sur ce passage, et elle vaut au-delà des fusions : une durée fixée à la main n'est plus concurrencée par l'estimée.

## Risks / Trade-offs

- **[Une mention future de l'ancien nom recrée sa fiche]** → Assumé et dit (proposal). La fiche « Marc » réapparaît avec la nouvelle mention seulement, et se fusionne à nouveau d'un geste.
- **[Fusion par erreur]** → Il faut une confirmation, « Annuler » est proposé tout de suite, et « Séparer » reste disponible sur la fiche gardée tant que des éléments portent la marque.
