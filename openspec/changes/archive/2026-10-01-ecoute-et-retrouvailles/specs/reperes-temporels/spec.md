# Spec Delta

## Purpose

Aider à reconnaître le bon résultat en le situant par rapport à des moments dont l'utilisateur se souvient, tirés de ses propres notes.

## ADDED Requirements

### Requirement: Repères personnels

Le système SHALL tirer des repères des seules données de l'utilisateur : réunions enregistrées ou importées, décisions acceptées, première mention d'une personne. Il NE DOIT inventer aucun repère ni en tirer d'une source extérieure.

#### Scenario: Décision comme repère

- **WHEN** l'utilisateur a accepté le 12 la décision « on passe au fournisseur B »
- **THEN** le 12 porte le repère « décision “on passe au fournisseur B” »

### Requirement: Résultats situés

Chaque citation d'une réponse de recherche SHALL être située par rapport au repère le plus proche à trois jours au plus, en toutes lettres (« la veille de », « le jour de », « deux jours après »). Sans repère à trois jours, la citation NE DOIT porter que sa date.

#### Scenario: Citation proche d'une réunion

- **WHEN** une citation date du 14 et une réunion « point budget » a été enregistrée le 12
- **THEN** la citation porte « deux jours après la réunion “point budget” »

#### Scenario: Aucun repère proche

- **WHEN** aucun repère n'existe à trois jours d'une citation
- **THEN** la citation ne porte aucune mention de repère
