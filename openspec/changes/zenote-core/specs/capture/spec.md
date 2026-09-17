## Purpose

Permettre à l'utilisateur de sortir une pensée de sa tête en un seul geste, sans aucune décision de rangement, depuis n'importe quelle surface et même sans réseau, avec la garantie que rien ne sera perdu.

## ADDED Requirements

### Requirement: Capture vocale en un geste

Le système SHALL permettre de démarrer une capture vocale par une seule action physique, sans navigation préalable, et SHALL démarrer l'enregistrement en moins de 300 ms après cette action.

Aucun champ, choix de dossier, titre, projet, étiquette, priorité ou date NE DOIT être demandé pendant la capture.

#### Scenario: Capture depuis l'écran verrouillé

- **WHEN** l'utilisateur maintient le bouton de capture depuis l'écran verrouillé du téléphone
- **THEN** l'enregistrement démarre en moins de 300 ms, sans déverrouillage
- **AND** aucun champ de saisie n'est présenté
- **AND** au relâchement, la capture est enregistrée et l'application se referme

#### Scenario: Capture au clavier sur ordinateur

- **WHEN** l'utilisateur presse le raccourci global depuis n'importe quelle application
- **THEN** une surface de capture minimale s'ouvre au premier plan avec le focus déjà placé
- **AND** l'utilisateur peut parler ou taper sans autre action
- **AND** la validation referme la surface et rend le focus à l'application précédente

#### Scenario: Aucune décision demandée

- **WHEN** une capture est enregistrée
- **THEN** le système NE DOIT demander ni titre, ni dossier, ni projet, ni date, ni priorité

### Requirement: Confirmation de prise en charge

Le système SHALL confirmer chaque capture par un retour immédiat, perceptible sans regarder l'écran, signifiant que la capture est durablement enregistrée et prise en charge.

Ce retour SHALL être émis uniquement après écriture durable en stockage local, jamais sur la base d'une intention d'écriture.

#### Scenario: Confirmation après écriture durable

- **WHEN** l'utilisateur relâche le bouton de capture
- **AND** l'enregistrement est écrit en stockage local
- **THEN** un retour haptique et sonore court est émis
- **AND** ce retour n'est jamais émis si l'écriture a échoué

#### Scenario: Échec d'écriture signalé

- **WHEN** l'écriture locale échoue (stockage plein, permission refusée)
- **THEN** le système signale l'échec de façon non ambiguë et distincte du retour de succès
- **AND** propose une action de récupération

### Requirement: Fonctionnement hors ligne

La capture SHALL fonctionner intégralement sans connexion réseau. L'absence de réseau NE DOIT jamais empêcher, retarder ou dégrader une capture.

#### Scenario: Capture en mode avion

- **WHEN** l'appareil est sans réseau
- **AND** l'utilisateur effectue une capture vocale
- **THEN** la capture est enregistrée localement et confirmée normalement
- **AND** la transcription et l'analyse sont mises en file d'attente
- **AND** aucun message d'erreur réseau n'est présenté à ce moment

#### Scenario: Traitement au retour du réseau

- **WHEN** le réseau redevient disponible
- **THEN** les captures en attente sont traitées dans l'ordre de capture
- **AND** l'utilisateur n'a aucune action à faire pour déclencher ce traitement

### Requirement: Capture écrite

Le système SHALL offrir une capture textuelle soumise aux mêmes règles que la capture vocale : un geste, aucun champ obligatoire, aucune décision de rangement.

#### Scenario: Note écrite sans structuration

- **WHEN** l'utilisateur saisit un texte libre et valide
- **THEN** la note est enregistrée telle quelle dans la file de captures non traitées
- **AND** aucune structuration n'est demandée à ce moment

### Requirement: Durée et découpage

Le système SHALL accepter des captures vocales d'au moins 10 minutes en continu et SHALL découper automatiquement une capture longue en segments cohérents lors de l'analyse, sans intervention de l'utilisateur.

#### Scenario: Capture longue segmentée

- **WHEN** l'utilisateur dicte une capture de 6 minutes contenant plusieurs sujets distincts
- **THEN** la capture est enregistrée comme un seul objet source
- **AND** l'analyse produit plusieurs éléments distincts rattachés à cette source unique

### Requirement: Aucune perte de capture

Le système SHALL garantir qu'une capture confirmée n'est jamais perdue, y compris en cas d'arrêt brutal de l'application, de redémarrage de l'appareil, d'échec de transcription ou d'échec d'analyse.

#### Scenario: Arrêt brutal pendant l'enregistrement

- **WHEN** l'application est arrêtée brutalement pendant un enregistrement en cours
- **THEN** au redémarrage, la portion déjà enregistrée est présente dans la file de captures
- **AND** elle est marquée comme potentiellement incomplète

#### Scenario: Échec de transcription

- **WHEN** la transcription d'une capture échoue de façon définitive
- **THEN** la capture reste accessible et lisible dans la file avec son audio
- **AND** elle est marquée comme non transcrite
- **AND** une nouvelle tentative peut être déclenchée par l'utilisateur

### Requirement: Capture mains libres

Le système SHALL offrir un mode de capture utilisable sans regarder l'écran ni toucher l'appareil, adapté à la conduite ou à la marche, déclenchable par la voix ou par un accessoire connecté.

#### Scenario: Capture depuis un écouteur

- **WHEN** l'utilisateur déclenche la capture depuis le contrôle de son écouteur connecté
- **THEN** l'enregistrement démarre avec un signal sonore de confirmation de début
- **AND** un signal sonore distinct confirme l'enregistrement à la fin
