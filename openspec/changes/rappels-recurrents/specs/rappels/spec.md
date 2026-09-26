# Spec Delta

## ADDED Requirements

### Requirement: Fenêtre de chaque occurrence d'un événement récurrent

Quand le signal d'un plan désigne un événement récurrent de l'agenda sans le limiter à la prochaine fois, le système SHALL rendre le rappel dû avant chaque occurrence connue : dès cinq minutes avant son début, et jusqu'à trente minutes après sa fin. Pendant l'occurrence, le rappel non critique est retenu, et livré en retard à sa sortie. Hors de ces fenêtres, le rappel NE DOIT pas être présenté. Un signal « au prochain … » SHALL ne viser qu'une occurrence.

#### Scenario: Chaque lundi

- **WHEN** un plan porte « avant le point du lundi » et l'agenda connaît le point d'équipe récurrent de chaque lundi à 9 h
- **THEN** le rappel est présenté le lundi à partir de 8 h 55, puis de nouveau le lundi suivant

#### Scenario: Rien entre deux occurrences

- **WHEN** l'occurrence d'un lundi est passée depuis plus de trente minutes
- **THEN** le rappel n'est pas présenté avant la fenêtre de l'occurrence suivante

#### Scenario: Au prochain seulement

- **WHEN** un plan porte « au prochain point d'équipe »
- **THEN** seule la prochaine occurrence le déclenche
