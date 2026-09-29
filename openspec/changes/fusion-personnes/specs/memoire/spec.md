# Spec Delta

## ADDED Requirements

### Requirement: Fusion de fiches depuis l'écran des personnes

Le système SHALL permettre, depuis la fiche d'une personne, de la déclarer identique à une autre fiche. Après confirmation, il ne reste qu'une fiche, sous le nom choisi : ses éléments ouverts, ses décisions et ses échanges sont ceux des deux, et chaque élément rattaché désigne le nom gardé.

La fusion SHALL être annulable, juste après et plus tard, et l'annulation NE DOIT rendre que ce que la fusion a changé. Une nouvelle analyse d'une capture NE DOIT pas défaire une fusion. La fusion NE DOIT écrire aucun nom en clair hors des éléments, que le coffre scelle.

#### Scenario: Deux fiches réunies

- **WHEN** l'écran « Les gens » montre « Marc » et « Marc Dupont », et l'utilisateur déclare « Marc » même personne que « Marc Dupont »
- **THEN** une seule fiche « Marc Dupont » demeure, avec les éléments et les échanges des deux

#### Scenario: Fusion annulée

- **WHEN** l'utilisateur annule la fusion
- **THEN** les fiches « Marc » et « Marc Dupont » reviennent telles qu'avant
- **AND** un élément déjà rattaché à « Marc Dupont » avant la fusion y reste

#### Scenario: Fusion tenue à la ré-analyse

- **WHEN** une capture dont un élément a été fusionné est analysée de nouveau
- **THEN** l'élément désigne toujours « Marc Dupont »

#### Scenario: Fusion protégée par le coffre

- **WHEN** le coffre est actif et l'utilisateur fusionne deux fiches
- **THEN** aucun des deux noms n'apparaît en clair dans la base de l'appareil
