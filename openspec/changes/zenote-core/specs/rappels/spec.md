## Purpose

Faire arriver la bonne information au moment où elle est actionnable — avant de voir quelqu'un, à la fin d'une réunion, au premier vrai trou de la journée — plutôt qu'à une heure fixe où elle sera balayée, et sans jamais interrompre au milieu d'une tâche.

## ADDED Requirements

### Requirement: Rappels par déclencheur

Le système SHALL permettre d'attacher un rappel à un signal déclencheur non temporel : une personne, un événement d'agenda, ou une transition de contexte.

Le système NE DOIT pas utiliser la position géographique de l'appareil comme déclencheur ni la collecter.

#### Scenario: Rappel lié à une personne

- **WHEN** un rappel est attaché à « quand je vois Marc »
- **AND** une réunion avec Marc démarre dans l'agenda
- **THEN** le rappel est présenté juste avant cette réunion

#### Scenario: Déclencheur de lieu ramené à un déclencheur disponible

- **WHEN** l'utilisateur formule un déclencheur de lieu, par exemple « en arrivant au bureau »
- **THEN** le système propose le déclencheur disponible le plus proche — événement d'agenda à ce lieu, ou première reprise de l'appareil dans la plage habituelle
- **AND** indique que le déclencheur de position n'est pas disponible

#### Scenario: Rappel lié à un événement récurrent

- **WHEN** un rappel est attaché à « avant le point du lundi »
- **THEN** il est présenté avant chaque occurrence de cet événement tant qu'il n'est pas clos

### Requirement: Formulation en intention d'implémentation

Le système SHALL formuler chaque plan sous la forme « quand *signal*, je fais *action* », et NE DOIT pas se contenter d'une date seule quand un signal plus fiable est disponible.

#### Scenario: Signal préféré à l'heure

- **WHEN** une tâche dépend d'une personne ou d'un événement d'agenda identifiable
- **THEN** le plan proposé s'appuie sur ce signal
- **AND** une heure n'est proposée qu'en complément ou en repli

### Requirement: Livraison aux points de rupture

Le système SHALL livrer les rappels non critiques à un point de rupture de l'activité — fin de réunion, fin de créneau d'agenda, reprise de l'appareil après une pause — et NE DOIT pas interrompre un créneau de travail concentré identifié.

#### Scenario: Report à la fin de la réunion

- **WHEN** un rappel non critique arrive à échéance pendant une réunion
- **THEN** il est présenté à la fin de la réunion
- **AND** son retard est signalé

#### Scenario: Rappel critique immédiat

- **WHEN** un rappel est marqué critique par l'utilisateur ou porte une conséquence immédiate
- **THEN** il est présenté sans attendre un point de rupture

### Requirement: Regroupement des notifications

Le système SHALL regrouper les rappels arrivant dans une même fenêtre en une notification unique, et NE DOIT pas émettre plus d'une notification par point de rupture.

#### Scenario: Plusieurs rappels simultanés

- **WHEN** trois rappels deviennent actionnables dans la même fenêtre
- **THEN** une seule notification est émise, listant les trois

### Requirement: Briefing avant événement

Le système SHALL présenter, avant une réunion, ce qui est en attente avec les participants : engagements en cours, attentes, décisions passées et derniers échanges.

#### Scenario: Briefing avant réunion

- **WHEN** une réunion avec des participants connus commence dans quelques minutes
- **THEN** le système présente les éléments ouverts liés à ces personnes et à ce sujet
- **AND** chaque élément renvoie à sa capture source

#### Scenario: Aucun élément à rappeler

- **WHEN** aucun élément ouvert n'est lié à la réunion
- **THEN** aucun briefing n'est présenté

### Requirement: Escalade d'un rappel ignoré

Le système SHALL faire évoluer un rappel ignoré à répétition : d'abord le représenter à un meilleur moment, puis proposer en Revue de le replanifier, de le déléguer ou de l'abandonner.

Le système NE DOIT pas répéter indéfiniment le même rappel à l'identique.

#### Scenario: Rappel ignoré trois fois

- **WHEN** un rappel a été ignoré trois fois
- **THEN** il cesse d'être représenté à l'identique
- **AND** il est porté en Revue avec les options replanifier, déléguer, abandonner

### Requirement: Silence garanti

Le système SHALL respecter des plages de silence définies par l'utilisateur et déduites de son agenda, et NE DOIT émettre aucune notification pendant ces plages hormis les rappels marqués critiques.

#### Scenario: Plage de silence respectée

- **WHEN** un rappel non critique devient actionnable pendant une plage de silence
- **THEN** il est retenu jusqu'à la fin de la plage
