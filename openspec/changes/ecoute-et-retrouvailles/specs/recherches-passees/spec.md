# Spec Delta

## Purpose

Retrouver en un geste ce qu'on a déjà cherché, sans que ces questions ne soient moins protégées que les notes elles-mêmes.

## ADDED Requirements

### Requirement: Questions retenues

Le système SHALL retenir les dernières questions posées à la recherche, par mots ou par personne, et SHALL proposer les plus récentes sous les champs de recherche ; un geste SHALL relancer une question retenue.

Les questions retenues SHALL être protégées comme les notes : chiffrées quand le coffre est actif, incluses dans l'export et effacées par « Tout effacer ».

#### Scenario: Relancer une recherche

- **WHEN** l'utilisateur a cherché « devis fournisseur » hier
- **THEN** « devis fournisseur » est proposé sous le champ
- **AND** un appui relance la recherche

#### Scenario: Doublon

- **WHEN** l'utilisateur pose deux fois la même question, à la casse près
- **THEN** elle n'apparaît qu'une fois, à sa date la plus récente

#### Scenario: Chiffrement

- **WHEN** le coffre est actif
- **THEN** aucune question retenue n'est lisible en clair dans la base

### Requirement: Oubli à la demande

L'utilisateur SHALL pouvoir oublier une question retenue ou toutes, et une question oubliée NE DOIT plus être proposée.

#### Scenario: Oublier une question

- **WHEN** l'utilisateur oublie « devis fournisseur »
- **THEN** elle n'est plus proposée, y compris après rechargement
