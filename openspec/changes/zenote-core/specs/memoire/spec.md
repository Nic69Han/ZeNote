## Purpose

Donner au système une mémoire des personnes, projets et sujets récurrents de l'utilisateur, pour qu'une note dictée en quatre secondes et pleine de sous-entendus soit comprise comme un collègue proche la comprendrait, sans que l'utilisateur ait à expliciter le contexte.

## ADDED Requirements

### Requirement: Entités de la mémoire

Le système SHALL maintenir une mémoire persistante composée d'entités typées : `personne`, `projet`, `organisation`, `lieu`, `événement récurrent`, `sujet`.

Chaque entité SHALL être créée automatiquement à partir des captures, sans saisie manuelle préalable de l'utilisateur.

#### Scenario: Création automatique d'une entité

- **WHEN** une personne inconnue est mentionnée dans une capture
- **THEN** une entité `personne` est créée avec le nom entendu
- **AND** elle est rattachée à la capture qui l'a fait apparaître

#### Scenario: Enrichissement progressif

- **WHEN** une entité déjà connue est mentionnée dans une nouvelle capture
- **THEN** la mention est ajoutée à son historique
- **AND** aucune entité en double n'est créée

### Requirement: Résolution des références implicites

Le système SHALL résoudre les références ambiguës d'une capture — prénom seul, « le budget », « la réunion de la semaine dernière », « il », « ce truc dont on a parlé » — contre sa mémoire, en s'appuyant sur la récence, la fréquence et la proximité de sujet.

#### Scenario: Prénom résolu par le contexte

- **WHEN** l'utilisateur dicte « voir avec Marc pour le budget »
- **AND** deux personnes nommées Marc existent en mémoire
- **AND** une seule est liée au projet dont le budget a été évoqué récemment
- **THEN** le système propose cette personne comme résolution
- **AND** affiche sur quoi il s'est appuyé

#### Scenario: Ambiguïté non résolue

- **WHEN** aucune résolution ne dépasse le seuil de confiance
- **THEN** le système pose la question en Revue avec les candidats classés
- **AND** ne choisit pas silencieusement

#### Scenario: Référence à un échange passé

- **WHEN** l'utilisateur dicte « le truc dont on a parlé avec Sophie mardi »
- **THEN** le système propose les captures et éléments correspondants
- **AND** rattache la nouvelle capture à celle retenue

### Requirement: Récupération par pertinence, récence et importance

Le système SHALL sélectionner le contexte fourni au modèle d'analyse en combinant la pertinence par rapport à la capture, la récence de l'information et son importance, plutôt que de fournir l'intégralité de l'historique.

#### Scenario: Contexte borné

- **WHEN** une capture est analysée
- **THEN** seul un contexte sélectionné et borné est utilisé
- **AND** l'historique complet n'est jamais transmis en bloc

#### Scenario: Contexte inspectable

- **WHEN** l'utilisateur consulte une déduction du système
- **THEN** il peut afficher les éléments de mémoire qui l'ont produite

### Requirement: Consolidation et oubli

Le système SHALL consolider périodiquement les captures anciennes en synthèses par entité, et SHALL faire décroître la présence des éléments non consultés, non liés à un élément actif et sans rappel associé.

Aucune donnée d'origine NE DOIT être supprimée par la consolidation ; seule sa mise en avant décroît.

#### Scenario: Synthèse par projet

- **WHEN** un projet accumule de nombreuses captures
- **THEN** une synthèse à jour de ce projet est maintenue — décisions, engagements ouverts, personnes impliquées
- **AND** les captures d'origine restent accessibles

#### Scenario: Décroissance sans suppression

- **WHEN** un élément n'a pas été consulté depuis longtemps et n'est lié à aucun élément actif
- **THEN** il cesse d'être proposé spontanément
- **AND** reste retrouvable par recherche explicite

### Requirement: Fiches d'entité

Le système SHALL présenter pour chaque entité une fiche donnant ce qui est ouvert et ce qui a été décidé la concernant, sans exiger de l'utilisateur qu'il l'ait renseignée.

#### Scenario: Fiche personne

- **WHEN** l'utilisateur ouvre la fiche d'une personne
- **THEN** elle affiche les engagements en cours envers elle, les attentes à son égard, les décisions communes et les derniers échanges
- **AND** chaque ligne renvoie à sa capture source

### Requirement: Séparation des sphères

Le système SHALL rattacher chaque capture à une sphère — `professionnel` ou `personnel` — déduite du contenu et du contexte, et SHALL permettre de filtrer la restitution par sphère sans jamais scinder le flux de capture.

#### Scenario: Déduction de la sphère

- **WHEN** une capture concerne une entité rattachée à la sphère personnelle
- **THEN** l'élément produit est rattaché à la sphère personnelle
- **AND** la capture s'est faite au même endroit que toutes les autres

#### Scenario: Filtrage à la restitution

- **WHEN** l'utilisateur active un filtre de sphère
- **THEN** seules les entrées de cette sphère sont présentées
- **AND** aucune donnée n'est déplacée ni dupliquée

### Requirement: Correction de la mémoire

L'utilisateur SHALL pouvoir fusionner, renommer, séparer ou supprimer une entité, et la correction SHALL se propager aux éléments qui s'y rattachent.

#### Scenario: Fusion de doublons

- **WHEN** l'utilisateur fusionne deux entités désignant la même personne
- **THEN** l'historique des deux est réuni
- **AND** les éléments rattachés pointent vers l'entité conservée
- **AND** l'opération est annulable
