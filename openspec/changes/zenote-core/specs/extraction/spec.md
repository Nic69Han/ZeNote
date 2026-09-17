## Purpose

Comprendre ce qu'une capture veut dire — une tâche, un engagement pris, une information à retenir, une décision — et le proposer sous une forme actionnable, chaque proposition restant traçable jusqu'au passage exact qui l'a produite.

## ADDED Requirements

### Requirement: Classification de l'intention

Le système SHALL classer chaque segment d'une capture dans l'un des types suivants : `tâche` (l'utilisateur doit agir), `engagement` (l'utilisateur a promis quelque chose à quelqu'un), `attente` (quelqu'un doit quelque chose à l'utilisateur), `information` (à retenir, sans action), `décision` (un choix arrêté et sa raison), `idée` (à explorer un jour).

Une capture unique SHALL pouvoir produire plusieurs éléments de types différents.

#### Scenario: Capture multi-intentions

- **WHEN** l'utilisateur dicte « faut que je rappelle Sophie pour le devis, et j'ai dit à Karim que je lui envoie le planning avant jeudi, et au fait on a tranché : on part sur le prestataire B »
- **THEN** le système produit trois éléments distincts
- **AND** ils sont typés respectivement `tâche`, `engagement` et `décision`
- **AND** les trois sont rattachés à la même capture source

#### Scenario: Information sans action

- **WHEN** l'utilisateur dicte une information sans verbe d'action ni destinataire
- **THEN** le système la classe en `information`
- **AND** ne crée aucune tâche

### Requirement: Traçabilité de chaque élément

Chaque élément extrait SHALL référencer la capture source et le passage exact — bornes dans le texte et dans l'audio — dont il est issu.

Le système NE DOIT jamais produire un élément dont le contenu ne peut pas être rattaché à un passage de la source.

#### Scenario: Passage source affiché

- **WHEN** l'utilisateur consulte un élément extrait
- **THEN** il peut afficher le passage exact de la transcription qui l'a produit

#### Scenario: Aucune invention

- **WHEN** le système ne peut rattacher un contenu candidat à aucun passage de la source
- **THEN** cet élément n'est pas créé

### Requirement: Confiance explicite et seuil de confirmation

Le système SHALL associer à chaque élément extrait et à chaque champ déduit (échéance, personne, projet, poids) un niveau de confiance.

En dessous d'un seuil configurable, l'élément SHALL être présenté comme une question à confirmer plutôt que comme un fait acquis, et NE DOIT déclencher aucun rappel tant qu'il n'est pas confirmé.

#### Scenario: Déduction incertaine posée en question

- **WHEN** l'échéance déduite a une confiance inférieure au seuil
- **THEN** l'élément apparaît en Revue sous forme de question explicite
- **AND** aucun rappel n'est planifié avant confirmation

#### Scenario: Déduction sûre appliquée

- **WHEN** tous les champs déduits dépassent le seuil de confiance
- **THEN** l'élément est proposé prêt à accepter d'un seul geste

### Requirement: Extraction des échéances

Le système SHALL convertir les expressions temporelles relatives et floues en échéance datée, en s'appuyant sur la date et l'heure de la capture, et SHALL conserver l'expression d'origine.

#### Scenario: Expression relative

- **WHEN** une capture faite un mardi contient « avant vendredi »
- **THEN** l'échéance est fixée au vendredi de la même semaine
- **AND** l'expression « avant vendredi » reste visible sur l'élément

#### Scenario: Expression floue

- **WHEN** une capture contient « dans les prochaines semaines »
- **THEN** aucune date ferme n'est inventée
- **AND** l'élément est marqué comme sans échéance ferme, avec un horizon indicatif

### Requirement: Extraction du poids par conséquence

Le système SHALL déduire le poids d'un élément à partir de ce qui se produit s'il n'est pas fait — conséquence pour un tiers, irréversibilité, effet en cascade, montant, engagement pris — et NE DOIT jamais demander à l'utilisateur de choisir un niveau de priorité abstrait.

Le poids SHALL être distinct et indépendant de l'échéance.

#### Scenario: Poids indépendant de l'urgence

- **WHEN** un élément a une échéance lointaine mais une conséquence forte
- **THEN** son poids reste élevé
- **AND** son urgence reste faible

#### Scenario: Aucune priorité demandée

- **WHEN** un élément est proposé à l'utilisateur
- **THEN** aucun choix de priorité numérique ou de niveau P1/P2/P3 n'est demandé

### Requirement: Détection des engagements pris

Le système SHALL détecter les engagements de l'utilisateur envers un tiers ainsi que les attentes de l'utilisateur envers un tiers, et SHALL les distinguer explicitement d'une tâche ordinaire.

#### Scenario: Engagement envers un tiers

- **WHEN** une capture contient « j'ai dit à Karim que je lui envoie le planning »
- **THEN** un élément de type `engagement` est créé avec Karim comme destinataire
- **AND** il est distingué visuellement d'une tâche personnelle

#### Scenario: Attente envers un tiers

- **WHEN** une capture contient « Sophie doit me renvoyer le chiffrage »
- **THEN** un élément de type `attente` est créé avec Sophie comme responsable
- **AND** il est suivi pour relance sans figurer dans la liste des tâches à faire

### Requirement: Proposition de plan d'exécution

Pour chaque élément de type `tâche` ou `engagement`, le système SHALL proposer un plan d'exécution comportant un moment ou un signal déclencheur, et SHALL présenter cet élément comme incomplet tant qu'aucun plan n'est attaché ou explicitement refusé.

#### Scenario: Plan proposé avec la tâche

- **WHEN** une tâche est proposée en Revue
- **THEN** un plan d'exécution est proposé avec elle
- **AND** l'utilisateur peut l'accepter, le modifier, ou classer l'élément en « un jour » sans plan

#### Scenario: Élément sans plan signalé

- **WHEN** une tâche acceptée n'a ni plan ni classement « un jour »
- **THEN** elle est signalée comme incomplète à la Revue suivante

### Requirement: Correction de l'extraction

Toute proposition du système SHALL être modifiable et annulable par l'utilisateur, et une correction NE DOIT jamais dégrader ou supprimer la capture source.

#### Scenario: Rejet d'une proposition

- **WHEN** l'utilisateur rejette un élément extrait
- **THEN** l'élément est supprimé
- **AND** la capture source et sa transcription restent intactes

#### Scenario: Correction apprise

- **WHEN** l'utilisateur corrige de façon répétée le même type de déduction
- **THEN** le système ajuste ses déductions ultérieures dans ce sens
- **AND** l'utilisateur peut consulter et annuler cet ajustement
