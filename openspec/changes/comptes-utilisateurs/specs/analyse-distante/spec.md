# Spec Delta

## ADDED Requirements

### Requirement: Limite d'appels par compte et plafond global

Le service d'analyse distant SHALL compter les analyses acceptées par compte et par jour, et refuser au-delà d'un quota quotidien par compte. Il SHALL aussi refuser toute analyse, pour tous les comptes, au-delà d'un plafond mensuel global. Le refus a lieu avant tout appel au fournisseur du modèle, et dit quand réessayer. Côté appareil, un refus pour quota est un repli sur l'analyse locale, signalé comme tel.

#### Scenario: Quota quotidien atteint

- **WHEN** un compte a atteint son quota d'analyses du jour
- **THEN** le service refuse ses requêtes suivantes jusqu'au lendemain, sans appeler le fournisseur
- **AND** l'appareil analyse la capture localement et la Revue dit que le service n'était pas disponible

#### Scenario: Plafond mensuel atteint

- **WHEN** le nombre total d'analyses du mois a atteint le plafond global
- **THEN** le service refuse toute analyse, quel que soit le compte, jusqu'au mois suivant

#### Scenario: Compteurs sans contenu

- **WHEN** une analyse est comptée
- **THEN** seul un nombre est conservé, rattaché au compte et à la date, sans aucun passage

### Requirement: Consentement redemandé après connexion

L'application SHALL garder l'analyse distante éteinte à la connexion d'un compte, quel que soit le réglage enregistré auparavant. Elle ne s'allume que par la confirmation explicite de l'utilisateur connecté, après l'explication de ce qui part, vers qui, et ce qui ne part jamais. Se déconnecter l'éteint.

#### Scenario: Réglage ancien ignoré

- **WHEN** le réglage d'analyse distante avait été allumé avant l'existence des comptes, et l'utilisateur se connecte
- **THEN** l'analyse distante est éteinte
- **AND** aucune note ne part tant qu'il ne l'a pas allumée

#### Scenario: Allumage après connexion

- **WHEN** l'utilisateur connecté allume l'analyse distante et confirme après l'explication
- **THEN** les notes transmissibles partent à l'analyse avec sa session

#### Scenario: Déconnexion

- **WHEN** l'utilisateur se déconnecte alors que l'analyse distante est allumée
- **THEN** elle s'éteint, et plus aucune note ne part
