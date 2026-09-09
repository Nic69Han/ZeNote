## Purpose

Répondre à une seule question — quoi faire maintenant — en corrigeant activement le biais qui pousse à traiter l'urgent au détriment de l'important, et sans jamais demander à l'utilisateur de prioriser lui-même.

## ADDED Requirements

### Requirement: Vue Maintenant

Le système SHALL présenter une vue « Maintenant » proposant au plus trois éléments à un instant donné, chacun accompagné de la raison en une ligne pour laquelle il est proposé.

La vue NE DOIT afficher ni compteur de tâches restantes, ni liste complète, ni statistiques de complétion.

#### Scenario: Trois éléments au plus

- **WHEN** l'utilisateur ouvre la vue Maintenant
- **THEN** au plus trois éléments sont affichés
- **AND** chacun porte une justification en une ligne

#### Scenario: Aucun élément pertinent

- **WHEN** aucun élément n'est exécutable dans le contexte courant
- **THEN** la vue le dit explicitement et propose un temps de traitement de la file ou rien
- **AND** ne remplit pas l'espace avec des éléments non pertinents

### Requirement: Séparation du poids et de l'urgence

Le classement SHALL combiner poids et échéance comme deux dimensions distinctes, et NE DOIT jamais classer par échéance seule.

Un élément à échéance proche mais de poids faible NE DOIT pas passer devant un élément de poids fort dont l'échéance approche à un horizon compatible.

#### Scenario: Urgent mais léger

- **WHEN** un élément de poids faible arrive à échéance dans l'heure
- **AND** un élément de poids fort arrive à échéance demain
- **THEN** l'élément de poids fort n'est pas relégué derrière l'élément léger

#### Scenario: Justification lisible

- **WHEN** un élément est proposé
- **THEN** sa justification indique ce qui se passe s'il n'est pas fait, pas seulement sa date

### Requirement: Créneau protégé pour l'important non urgent

Le système SHALL réserver dans la journée au moins un créneau dédié à un élément de poids fort sans échéance proche, et ce créneau NE DOIT pas être occupé par un élément urgent de poids faible.

#### Scenario: Créneau tenu

- **WHEN** le créneau protégé arrive
- **THEN** l'élément proposé est de poids fort et sans échéance proche
- **AND** aucun élément urgent de poids faible ne le remplace

#### Scenario: Renoncement explicite

- **WHEN** l'utilisateur passe outre le créneau protégé
- **THEN** le système l'enregistre sans reproche
- **AND** le signale en Revue si cela se répète

### Requirement: Adaptation au contexte d'exécution

Le classement SHALL tenir compte du contexte courant — temps disponible avant le prochain événement de l'agenda, lieu, appareil, moment de la journée — et NE DOIT proposer que des éléments réalisables dans ce contexte.

#### Scenario: Créneau court

- **WHEN** il reste sept minutes avant la prochaine réunion
- **THEN** seuls des éléments réalisables en moins de sept minutes sont proposés

#### Scenario: Contexte inadapté

- **WHEN** un élément requiert un appareil ou un lieu indisponible
- **THEN** il n'est pas proposé
- **AND** il le sera lorsque le contexte le permettra

### Requirement: Charge et énergie

Le système SHALL tenir compte de la charge de la journée observée dans l'agenda et NE DOIT pas proposer une tâche exigeante immédiatement après une séquence longue de réunions enchaînées.

#### Scenario: Journée dense

- **WHEN** l'utilisateur sort de trois heures de réunions consécutives
- **THEN** les éléments proposés sont de charge cognitive faible
- **AND** les éléments exigeants sont replacés à un moment plus favorable

### Requirement: Ordre proposé, jamais imposé

Le système SHALL présenter son classement comme une proposition, et l'utilisateur SHALL pouvoir écarter un élément d'un geste sans le supprimer ni le repousser dans le temps.

#### Scenario: Élément écarté

- **WHEN** l'utilisateur écarte un élément proposé
- **THEN** l'élément suivant prend sa place
- **AND** l'élément écarté reste actif et pourra être reproposé plus tard

#### Scenario: Rejets répétés

- **WHEN** un même élément est écarté plusieurs fois de suite
- **THEN** il est présenté en Revue avec la question de sa reformulation, de son découpage ou de son abandon

### Requirement: Détection des éléments bloqués

Le système SHALL identifier les éléments actifs sans progression ni interaction depuis une durée anormale au regard de leur poids, et SHALL les faire remonter en Revue.

#### Scenario: Tâche dormante

- **WHEN** une tâche de poids fort n'a connu aucune interaction depuis une durée anormale
- **THEN** elle est présentée en Revue avec les options : découper, planifier, déléguer, abandonner
