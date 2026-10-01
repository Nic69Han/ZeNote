# Spec Delta

## Purpose

Qu'une tâche floue ne reste pas une charge sans prise : demander par quoi elle commence, et montrer ce premier geste au moment d'agir.

## ADDED Requirements

### Requirement: Premier geste demandé pour une tâche floue

Quand l'utilisateur accepte en Revue une tâche dont la formulation ne comporte pas d'action concrète, la zone de plan SHALL demander un premier geste de quelques minutes. Répondre NE DOIT pas être obligatoire : sans réponse, le plan reste celui d'aujourd'hui.

Le système NE DOIT jamais rédiger le geste à la place de l'utilisateur.

#### Scenario: Tâche floue

- **WHEN** l'utilisateur accepte la tâche « avancer sur le budget 2027 »
- **THEN** la zone de plan demande un premier geste
- **AND** le geste saisi « ouvrir le tableur et relire l'onglet charges » est enregistré comme action du plan

#### Scenario: Tâche déjà concrète

- **WHEN** l'utilisateur accepte la tâche « appeler Karim pour le devis »
- **THEN** aucun premier geste n'est demandé
- **AND** un lien discret permet d'en préciser un

#### Scenario: Geste laissé vide

- **WHEN** l'utilisateur choisit un déclencheur sans saisir de geste
- **THEN** l'action du plan est le texte de la tâche

### Requirement: Premier geste affiché au moment d'agir

Quand une tâche a un premier geste distinct de son texte, Maintenant SHALL afficher ce geste comme la chose à faire, avec le texte de la tâche, et SHALL permettre de marquer le geste fait et d'en noter un suivant sans clore la tâche.

#### Scenario: Geste fait

- **WHEN** l'utilisateur marque le geste « ouvrir le tableur » comme fait
- **THEN** la tâche reste active
- **AND** un champ facultatif propose de noter le geste suivant
