# Spec Delta

## Purpose

Que l'utilisateur sache toujours, en lisant ZeNote, ce qu'il a dit lui-même et ce que ZeNote en a déduit, et qu'une déduction ne fasse jamais disparaître silencieusement une négation, un nombre ou un nom qu'il avait prononcés.

## ADDED Requirements

### Requirement: Déduction accompagnée de sa source

Toute déduction affichée — type, poids, échéance datée, horizon, interlocuteur, sphère, raison de priorité — SHALL être marquée comme déduite et SHALL être accompagnée, dans la même carte et sans action supplémentaire, des mots exacts de l'utilisateur dont elle provient.

Les mots de l'utilisateur SHALL être présentés comme une citation (guillemets français, introduits par « vous avez dit »). Un texte produit par le système NE DOIT jamais être présenté comme une citation.

#### Scenario: Élément en Revue

- **WHEN** un élément déduit d'une capture apparaît en Revue
- **THEN** son passage source est visible dans la carte comme une citation
- **AND** chaque attribut déduit porte la mention « déduit »

#### Scenario: Raison d'une proposition

- **WHEN** Maintenant propose un élément dont le poids vient de la phrase « sinon le chantier est bloqué » et dont l'échéance est demain
- **THEN** « sinon le chantier est bloqué » est cité comme dit par l'utilisateur
- **AND** l'urgence tirée de l'échéance est marquée déduite, séparément de la citation

#### Scenario: Énoncé de recherche

- **WHEN** une recherche rend une réponse fondée
- **THEN** l'énoncé formulé par le système est marqué déduit
- **AND** seules les citations des captures sont présentées comme des paroles de l'utilisateur

### Requirement: Omissions signalées

Le système SHALL comparer chaque élément à la phrase de sa capture dont il a été découpé, et SHALL signaler toute négation, tout nombre et tout nom propre présents dans cette phrase et absents de l'élément.

Un élément qui a perdu une négation SHALL être présenté à confirmer en Revue, avec la phrase entière et les mots manquants mis en évidence, et aucun rappel NE DOIT être planifié pour lui avant cette confirmation.

#### Scenario: Négation perdue au découpage

- **WHEN** l'utilisateur dicte « il ne faut surtout pas, et j'insiste, envoyer le devis »
- **AND** l'analyse produit l'élément « j'insiste, envoyer le devis »
- **THEN** la Revue le présente à confirmer
- **AND** montre la phrase entière avec « ne … pas » mis en évidence

#### Scenario: Nombre perdu

- **WHEN** la phrase d'origine contient « trois devis » et l'élément ne contient pas « trois »
- **THEN** la Revue signale que la phrase d'origine dit aussi « trois »
- **AND** l'élément reste décidable sans confirmation supplémentaire

#### Scenario: Rien de perdu

- **WHEN** l'élément contient toutes les négations, nombres et noms de sa phrase
- **THEN** aucun signalement d'omission n'apparaît

#### Scenario: Pas de faux signalement hors de la phrase

- **WHEN** une négation figure dans une autre phrase de la même capture
- **THEN** elle n'est pas signalée comme omise par l'élément
