## Purpose

Encadrer le moment où le manager perd le plus d'information — l'enchaînement des réunions — par deux rituels très courts, avant et après, et par le traitement des comptes rendus qu'il reçoit déjà.

## ADDED Requirements

### Requirement: Dépose avant réunion

Le système SHALL proposer, juste avant une réunion, une capture courte permettant de déposer ce que l'utilisateur a en tête sur la tâche qu'il quitte, afin de pouvoir la reprendre ensuite.

Cette capture SHALL être proposée, jamais imposée, et SHALL être passable d'un geste.

#### Scenario: Dépose proposée

- **WHEN** une réunion commence dans deux minutes
- **AND** l'utilisateur travaillait sur une tâche identifiée
- **THEN** une capture courte « où j'en suis, ce que je reprends après » est proposée
- **AND** elle est passable d'un geste

#### Scenario: Reprise après réunion

- **WHEN** la réunion se termine
- **THEN** le système présente la dépose faite avant, telle quelle
- **AND** propose de reprendre la tâche quittée

### Requirement: Vidage après réunion

Le système SHALL proposer, à la fin d'une réunion, une capture vocale courte, pré-contextualisée par la réunion et ses participants.

#### Scenario: Capture post-réunion contextualisée

- **WHEN** une réunion se termine
- **THEN** une capture vocale est proposée, déjà rattachée à cette réunion et à ses participants
- **AND** les éléments qui en sont extraits héritent de ce contexte sans que l'utilisateur ait à le préciser

#### Scenario: Proposition non intrusive

- **WHEN** l'utilisateur enchaîne immédiatement sur une autre réunion
- **THEN** la proposition de vidage est reportée au premier point de rupture disponible

### Requirement: Traitement d'un compte rendu externe

Le système SHALL accepter en entrée un compte rendu ou une transcription de réunion produits ailleurs, et en extraire les éléments concernant l'utilisateur selon les mêmes règles que pour une capture vocale.

Le système SHALL distinguer ce que l'utilisateur doit faire de ce que les autres doivent faire.

#### Scenario: Compte rendu importé

- **WHEN** un compte rendu de réunion est fourni au système
- **THEN** les engagements de l'utilisateur en sont extraits comme éléments à faire
- **AND** les engagements des autres participants sont extraits comme attentes
- **AND** chaque élément renvoie au passage exact du compte rendu

#### Scenario: Aucun élément inventé

- **WHEN** un élément candidat ne peut être rattaché à un passage du compte rendu
- **THEN** il n'est pas créé

### Requirement: Confirmation avant engagement

Le système SHALL présenter en Revue les engagements extraits d'une réunion pour confirmation avant de les traiter comme des engagements fermes, et NE DOIT planifier aucun rappel sur un engagement non confirmé.

#### Scenario: Engagement extrait à confirmer

- **WHEN** un engagement est extrait d'une réunion
- **THEN** il apparaît en Revue comme à confirmer
- **AND** aucun rappel n'est planifié avant confirmation

### Requirement: Aucun enregistrement à l'insu des participants

Le système NE DOIT pas enregistrer l'audio d'une réunion sans une action explicite de l'utilisateur pour cette réunion, et SHALL rendre visible tout enregistrement en cours.

#### Scenario: Enregistrement explicite

- **WHEN** l'utilisateur déclenche explicitement l'enregistrement d'une réunion
- **THEN** un indicateur visible signale l'enregistrement pendant toute sa durée

#### Scenario: Aucun enregistrement implicite

- **WHEN** une réunion démarre dans l'agenda sans action de l'utilisateur
- **THEN** aucun audio n'est enregistré
