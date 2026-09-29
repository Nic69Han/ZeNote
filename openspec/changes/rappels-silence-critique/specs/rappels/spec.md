# Spec Delta

## ADDED Requirements

### Requirement: Plage de silence déclarée par l'utilisateur

Le système SHALL permettre à l'utilisateur de déclarer une plage de silence quotidienne, par une heure de début et une heure de fin, qui peut passer minuit. Elle est éteinte par défaut. Pendant la plage, aucun rappel non critique NE DOIT être présenté ; ceux qui deviennent actionnables sont retenus, puis présentés à la fin de la plage si l'application est ouverte, sinon au point de rupture suivant.

#### Scenario: Rappel retenu pendant la nuit

- **WHEN** l'utilisateur a déclaré une plage de silence de 22:00 à 07:00
- **AND** il rouvre l'application à 23:30 alors qu'un rappel non critique est devenu actionnable
- **THEN** aucun rappel n'est présenté

#### Scenario: Rappel présenté à la fin de la plage

- **WHEN** un rappel non critique a été retenu par la plage de silence
- **AND** l'application est ouverte à 07:00, ou rouverte ensuite
- **THEN** le rappel est présenté

#### Scenario: Plage éteinte

- **WHEN** aucune plage de silence n'est déclarée
- **THEN** les rappels sont présentés comme avant, au point de rupture

### Requirement: Rappel critique

Un rappel SHALL être critique quand l'utilisateur a marqué son élément comme critique, ou quand l'élément est de poids fort et que son échéance est aujourd'hui ou dépassée. Un rappel critique devenu actionnable SHALL être présenté dès que l'application peut le présenter, sans attendre un point de rupture, et y compris pendant une plage de silence ou une réunion en cours. L'écran le signale comme critique.

#### Scenario: Critique marqué par l'utilisateur

- **WHEN** l'utilisateur a marqué un élément critique dans « Ajuster »
- **AND** son rappel devient actionnable pendant une réunion en cours
- **THEN** il est présenté sans attendre la fin de la réunion, marqué « Critique »

#### Scenario: Critique pendant la plage de silence

- **WHEN** un rappel critique devient actionnable pendant la plage de silence
- **THEN** il est présenté, et les rappels non critiques restent retenus

#### Scenario: Conséquence immédiate

- **WHEN** un élément de poids fort porte un plan, et son échéance est aujourd'hui
- **THEN** son rappel est critique sans que l'utilisateur l'ait marqué
