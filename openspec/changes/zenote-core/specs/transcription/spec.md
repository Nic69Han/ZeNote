## Purpose

Transformer une capture vocale en texte fidèle puis lisible, sans jamais détruire la source : l'audio d'origine et la transcription brute restent la vérité de référence, le texte nettoyé n'est qu'une vue.

## ADDED Requirements

### Requirement: Transcription automatique

Le système SHALL transcrire automatiquement toute capture vocale, sans action de l'utilisateur, et SHALL rendre la transcription disponible dès qu'elle est produite.

#### Scenario: Transcription sans intervention

- **WHEN** une capture vocale est enregistrée et le traitement est possible
- **THEN** la transcription est produite automatiquement
- **AND** l'utilisateur n'a déclenché aucune action pour l'obtenir

#### Scenario: Délai de transcription visible

- **WHEN** une transcription est en cours ou en attente
- **THEN** l'état de la capture l'indique explicitement dans la file
- **AND** la capture reste consultable et lisible par son audio

### Requirement: Conservation de la source

Le système SHALL conserver l'audio d'origine et la transcription brute de chaque capture, et SHALL les rendre consultables à tout moment depuis l'élément qui en découle.

Aucun traitement ultérieur (nettoyage, résumé, extraction, reformulation) NE DOIT remplacer, écraser ou rendre inaccessibles l'audio d'origine ni la transcription brute.

#### Scenario: Remonter à l'audio d'origine

- **WHEN** l'utilisateur consulte une tâche produite à partir d'une capture vocale
- **THEN** il peut accéder en une action à la transcription brute et à l'extrait audio correspondant
- **AND** l'extrait audio démarre au passage à l'origine de cette tâche

#### Scenario: Reformulation réversible

- **WHEN** le système a nettoyé ou reformulé une transcription
- **THEN** la version brute reste disponible et affichable
- **AND** l'utilisateur peut retenir la version brute comme version de référence

### Requirement: Nettoyage des disfluences

Le système SHALL produire une version lisible de la transcription en supprimant hésitations, répétitions, faux départs et bruits de langage, sans modifier le sens, sans ajouter d'information absente, et sans supprimer de contenu porteur de sens.

#### Scenario: Suppression des hésitations

- **WHEN** la transcription brute contient des hésitations et des reprises
- **THEN** la version lisible les supprime
- **AND** conserve intégralement les noms propres, chiffres, dates et négations

#### Scenario: Aucune information ajoutée

- **WHEN** le système produit la version lisible
- **THEN** aucun fait, nom, date ou chiffre absent de la transcription brute n'y apparaît

### Requirement: Vocabulaire personnel

Le système SHALL améliorer la transcription à partir du vocabulaire propre à l'utilisateur — noms de personnes, de projets, de clients, acronymes métier — issu de sa mémoire de contexte.

#### Scenario: Nom de projet correctement transcrit

- **WHEN** l'utilisateur dicte un nom de projet déjà présent dans sa mémoire de contexte
- **THEN** ce nom est transcrit dans sa forme connue plutôt qu'en approximation phonétique

#### Scenario: Correction apprise

- **WHEN** l'utilisateur corrige un terme mal transcrit
- **THEN** le système enregistre la correction dans son vocabulaire personnel
- **AND** l'applique aux transcriptions ultérieures

### Requirement: Langue et alternance

Le système SHALL détecter automatiquement la langue de chaque capture et SHALL transcrire correctement les captures mêlant français et anglais dans une même phrase.

#### Scenario: Phrase mixte

- **WHEN** l'utilisateur dicte une phrase en français contenant des termes anglais métier
- **THEN** la transcription conserve chaque terme dans sa langue d'origine
- **AND** ne traduit rien

### Requirement: Incertitude de transcription signalée

Le système SHALL signaler les passages dont la transcription est peu fiable plutôt que de présenter une transcription douteuse comme certaine.

#### Scenario: Passage inaudible

- **WHEN** un passage est inaudible ou de confiance faible
- **THEN** il est marqué comme incertain dans la transcription
- **AND** aucun élément structuré n'est créé à partir de ce seul passage sans confirmation de l'utilisateur
