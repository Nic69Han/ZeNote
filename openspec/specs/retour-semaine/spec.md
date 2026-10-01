# retour-semaine Specification

## Purpose

Offrir un moment de recul sur la semaine écoulée, fait de constats, sans rien qui ressemble à une note ou à un reproche.

## Requirements

### Requirement: Retour sur la semaine

Le système SHALL proposer un écran qui présente les sept derniers jours en trois groupes : ce qui a avancé, ce qui a été lâché (abandonné ou classé « un jour »), et ce qui n'avance plus. Chaque ligne SHALL citer l'élément concerné.

L'écran NE DOIT comporter ni pourcentage, ni taux, ni série, ni comparaison avec une autre semaine, ni formulation de reproche.

#### Scenario: Semaine ordinaire

- **WHEN** l'utilisateur a fait deux tâches, en a abandonné une et en a écarté une trois fois cette semaine
- **THEN** l'écran les range respectivement dans « Ce qui a avancé », « Ce que vous avez lâché » et « Ce qui n'avance plus »

#### Scenario: Groupe vide

- **WHEN** rien n'a été lâché cette semaine
- **THEN** le groupe dit « Rien cette semaine. » sans autre commentaire

#### Scenario: Aucun chiffre de performance

- **WHEN** l'écran est affiché
- **THEN** il ne contient aucun pourcentage ni aucun taux de réalisation

### Requirement: Invitation hebdomadaire discrète

La Revue SHALL signaler d'une seule ligne, au plus une fois par semaine, que le retour sur la semaine est disponible. Une question facultative en fin d'écran SHALL permettre de noter une chose à retenir, enregistrée comme une capture écrite.

#### Scenario: Signal hebdomadaire

- **WHEN** l'écran de la semaine n'a pas été ouvert depuis sept jours
- **THEN** la Revue affiche une ligne qui y mène
- **AND** la ligne disparaît une fois l'écran ouvert

#### Scenario: Chose à retenir

- **WHEN** l'utilisateur écrit « le fournisseur B tient ses délais » dans la question finale
- **THEN** une capture écrite est créée avec ce texte
