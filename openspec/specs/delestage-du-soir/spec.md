# delestage-du-soir Specification

## Purpose

Offrir, à qui le veut, un moment du soir pour déposer précisément ce qui attend le lendemain, et pouvoir le lâcher.

## Requirements

### Requirement: Invite du soir facultative

Le système SHALL proposer un réglage « Vider sa tête le soir », éteint par défaut, avec une heure de début. Quand il est allumé, l'écran de capture SHALL afficher pendant la soirée une invite unique à dicter ce qui attend le lendemain en le formulant précisément (quoi, pour qui, quand).

L'invite NE DOIT apparaître qu'une fois par soirée, NE DOIT apparaître sur aucun autre écran, et NE DOIT comporter aucun reproche ni aucun compte de soirées manquées.

#### Scenario: Réglage éteint par défaut

- **WHEN** l'application vient d'être installée
- **THEN** aucune invite du soir n'apparaît, quelle que soit l'heure

#### Scenario: Invite dans la soirée

- **WHEN** le réglage est allumé pour 21 h 00
- **AND** l'utilisateur ouvre l'écran de capture à 22 h 10
- **THEN** l'invite apparaît avec la consigne de précision

#### Scenario: Pas ce soir

- **WHEN** l'utilisateur choisit « Pas ce soir »
- **THEN** l'invite ne réapparaît pas avant la soirée suivante
- **AND** cela reste vrai après minuit pour la même soirée

### Requirement: Dépôt digne de confiance

Une capture faite depuis l'invite du soir SHALL être une capture ordinaire, écrite de façon durable avant confirmation, et analysée pour la Revue suivante. La confirmation SHALL dire que le contenu est écrit et peut être lâché jusqu'au lendemain.

#### Scenario: Liste du lendemain déposée

- **WHEN** l'utilisateur dicte sa liste depuis l'invite
- **THEN** la confirmation dit « Écrit. Vous pouvez le lâcher jusqu'à demain. »
- **AND** l'invite ne réapparaît pas ce soir-là
- **AND** les éléments de la liste sont en Revue le lendemain
