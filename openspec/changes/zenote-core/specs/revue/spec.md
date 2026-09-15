## Purpose

Concentrer en un rendez-vous quotidien de deux minutes tout le travail de rangement, de validation et de planification, pour que la capture reste gratuite et que l'utilisateur n'ait jamais à ranger au moment où il n'en a pas le temps.

## ADDED Requirements

### Requirement: Rendez-vous quotidien unique

Le système SHALL proposer une Revue une fois par jour à un moment choisi par l'utilisateur, et SHALL dimensionner la file présentée pour qu'une Revue de charge normale soit traitable en moins de deux minutes.

Le rangement NE DOIT être demandé à aucun autre moment.

#### Scenario: Revue proposée au moment choisi

- **WHEN** l'heure de Revue configurée arrive et que des captures sont en attente
- **THEN** le système propose la Revue
- **AND** ne l'impose pas

#### Scenario: Aucun rangement hors Revue

- **WHEN** l'utilisateur capture une note en dehors de la Revue
- **THEN** aucune demande de classement, de date ou de projet ne lui est adressée

### Requirement: Décision en un geste

Chaque proposition de la Revue SHALL être traitable par un geste unique parmi : accepter tel quel, ajuster, reporter à la Revue suivante, classer en « un jour », supprimer.

#### Scenario: Acceptation groupée

- **WHEN** plusieurs propositions ont une confiance élevée sur tous leurs champs
- **THEN** l'utilisateur peut toutes les accepter en une action
- **AND** l'action reste annulable

#### Scenario: Ajustement rapide

- **WHEN** l'utilisateur choisit d'ajuster une proposition
- **THEN** seuls les champs déduits sont modifiables, sur un seul écran
- **AND** aucune navigation vers un formulaire séparé n'est nécessaire

### Requirement: Interruption et reprise

La Revue SHALL être interruptible à tout instant sans perte : les décisions déjà prises sont conservées, les propositions non traitées restent en file.

#### Scenario: Revue interrompue

- **WHEN** l'utilisateur quitte la Revue après avoir traité une partie de la file
- **THEN** les décisions prises sont conservées
- **AND** la reprise se fait à l'élément suivant

### Requirement: Ordre de présentation

Le système SHALL présenter d'abord les éléments dont le traitement est le plus urgent ou le plus incertain, et SHALL grouper les éléments issus d'une même capture ou d'un même projet.

#### Scenario: Regroupement par source

- **WHEN** une capture longue a produit plusieurs éléments
- **THEN** ils sont présentés ensemble, avec la source consultable une seule fois

#### Scenario: Urgent d'abord

- **WHEN** un élément a une échéance dans les 24 heures
- **THEN** il est présenté avant les éléments sans échéance proche

### Requirement: Bouclage du plan

Pour toute tâche ou tout engagement accepté, la Revue SHALL exiger l'un des trois résultats : un plan d'exécution (moment ou signal déclencheur), un classement en « un jour », ou une suppression.

Aucune tâche NE DOIT sortir de la Revue sans l'un de ces trois résultats.

#### Scenario: Plan obligatoire

- **WHEN** l'utilisateur accepte une tâche sans plan proposé
- **THEN** le système demande le moment ou le signal déclencheur avant de passer à l'élément suivant

#### Scenario: Classement « un jour » assumé

- **WHEN** l'utilisateur classe un élément en « un jour »
- **THEN** l'élément sort des vues actives sans être supprimé
- **AND** il est représenté lors d'une revue périodique de cette liste

### Requirement: Relance des engagements et des attentes

La Revue SHALL présenter les engagements dont l'échéance approche et les attentes envers des tiers restées sans nouvelle depuis une durée dépassant le délai habituel observé pour cette personne.

#### Scenario: Attente sans nouvelle

- **WHEN** une attente envers une personne dépasse le délai habituel observé pour elle
- **THEN** elle apparaît en Revue avec une relance proposée
- **AND** l'utilisateur peut relancer, prolonger ou clôturer d'un geste

### Requirement: File non traitée assumée

Le système SHALL présenter la file de captures non traitées sans compteur culpabilisant, sans notification de retard et sans marque d'échec, et NE DOIT pas dégrader ni supprimer automatiquement un élément non traité.

#### Scenario: Retard sans pression

- **WHEN** l'utilisateur n'a pas fait sa Revue depuis plusieurs jours
- **THEN** aucune notification de rappel insistante n'est émise
- **AND** la Revue suivante regroupe l'arriéré par thème pour rester traitable

#### Scenario: Arriéré volumineux

- **WHEN** l'arriéré dépasse ce qui est traitable en une session
- **THEN** le système propose une Revue réduite aux éléments les plus lourds ou les plus urgents
- **AND** le reste demeure en file, intact
