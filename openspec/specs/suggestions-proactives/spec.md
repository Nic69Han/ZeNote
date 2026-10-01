# suggestions-proactives Specification

## Purpose

Qu'une suggestion non demandée dise pourquoi elle est là, et se fasse plus rare quand elle n'est pas utile.

## Requirements

### Requirement: Raison visible

Toute suggestion que le système présente sans qu'on la lui ait demandée SHALL afficher, avec elle et en une ligne, ce qui l'a déclenchée : mots partagés, personne, ou date. Elle SHALL rester ignorable : elle ne demande aucune réponse et ne bloque rien.

#### Scenario: Passé pertinent expliqué

- **WHEN** après une capture, ZeNote rappelle une note passée sur le même sujet
- **THEN** la ligne affiche l'extrait de la note passée
- **AND** la raison du rapprochement
- **AND** elle s'efface d'elle-même si l'utilisateur n'y touche pas

### Requirement: Retenue après suggestions ignorées

Le système SHALL compter, pour chaque sorte de suggestion, les présentations ignorées d'affilée. À partir de trois, les suggestions de cette sorte SHALL s'espacer, d'autant plus que les ignorées s'accumulent. Une suggestion utilisée SHALL rétablir le rythme normal.

Le rythme courant de chaque sorte SHALL être consultable dans les réglages, avec un geste pour revenir au rythme normal.

#### Scenario: Trois fois ignorée

- **WHEN** l'utilisateur a laissé passer trois rappels du passé pertinent sans les ouvrir
- **THEN** le suivant n'est présenté qu'une fois sur deux occasions

#### Scenario: Utilisée à nouveau

- **WHEN** l'utilisateur ouvre un rappel du passé pertinent pendant que la sorte est espacée
- **THEN** le rythme normal est rétabli

#### Scenario: Rythme dit dans les réglages

- **WHEN** une sorte de suggestion est espacée
- **THEN** l'écran des réglages le dit en clair
- **AND** propose de revenir au rythme normal
