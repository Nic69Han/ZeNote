## Purpose

Retrouver une note, un engagement ou une décision par la formulation approximative que l'utilisateur a en tête, sans qu'il ait jamais eu à ranger quoi que ce soit à l'avance.

## ADDED Requirements

### Requirement: Recherche en langage naturel

Le système SHALL accepter des requêtes en langage naturel portant sur le contenu, les personnes, les dates approximatives et les sujets, et SHALL répondre par des éléments, pas seulement par des documents.

#### Scenario: Question sur un engagement

- **WHEN** l'utilisateur demande « qu'est-ce que j'ai promis à Karim »
- **THEN** le système liste les engagements ouverts et clos envers Karim
- **AND** chaque ligne renvoie à sa capture source

#### Scenario: Question sur une décision

- **WHEN** l'utilisateur demande « pourquoi on avait écarté le prestataire A »
- **THEN** le système présente la décision et la raison enregistrée
- **AND** renvoie au passage source

#### Scenario: Repère temporel flou

- **WHEN** l'utilisateur demande « le truc dont j'ai parlé en voiture la semaine dernière »
- **THEN** le système propose les captures correspondant à cette période et à ce contexte de capture

### Requirement: Réponse fondée sur la source

Toute réponse du système SHALL citer les éléments sur lesquels elle se fonde, et le système NE DOIT pas affirmer un fait qu'aucune capture ne porte.

#### Scenario: Absence assumée

- **WHEN** aucune capture ne répond à la question
- **THEN** le système répond qu'il n'a rien à ce sujet
- **AND** ne produit aucune réponse plausible non fondée

### Requirement: Recherche hors ligne

Le système SHALL permettre la recherche par mots et par personne sans connexion réseau, sur l'ensemble des données présentes localement.

#### Scenario: Recherche en mode avion

- **WHEN** l'appareil est sans réseau
- **AND** l'utilisateur recherche un terme
- **THEN** les résultats locaux sont retournés
- **AND** les capacités nécessitant le réseau sont signalées comme temporairement indisponibles

### Requirement: Rappel proactif du passé pertinent

Le système SHALL faire remonter spontanément des éléments passés pertinents pour le contexte courant — réunion imminente, personne rencontrée, sujet en cours de dictée — de façon discrète et jamais bloquante.

#### Scenario: Élément passé pertinent proposé

- **WHEN** l'utilisateur dicte une capture sur un sujet déjà traité
- **THEN** le système signale discrètement les éléments passés liés
- **AND** n'interrompt pas la capture

#### Scenario: Suggestion ignorable

- **WHEN** une suggestion proactive est présentée
- **THEN** elle disparaît sans action de l'utilisateur
- **AND** ne bloque aucune interaction en cours
