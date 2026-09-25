# Spec Delta

## Purpose

Faire connaître à ZeNote l'agenda de l'utilisateur, lu sur l'appareil depuis un fichier qu'il fournit, pour que le classement, les rappels et les rituels de réunion s'appuient sur ses vraies réunions plutôt que sur des substituts, sans qu'aucune donnée ne quitte l'appareil.

## ADDED Requirements

### Requirement: Import d'un agenda sur l'appareil

Le système SHALL permettre d'importer un agenda au format iCalendar (`.ics`) et de le lire entièrement sur l'appareil, récurrences comprises, sur un horizon borné autour de la date d'import.

Le système NE DOIT transmettre ni le fichier ni son contenu à quelque service que ce soit.

Le système NE DOIT pas deviner ce qu'il ne comprend pas. Un événement ou une règle de récurrence non pris en charge est écarté ou importé sans ses répétitions. L'import dit combien d'événements ont été lus et combien ont été écartés, avec la raison.

#### Scenario: Import réussi

- **WHEN** l'utilisateur importe un fichier `.ics` contenant des réunions ponctuelles et récurrentes
- **THEN** les occurrences comprises dans l'horizon sont connues de l'application, avec leur titre, leur début, leur fin, leur lieu et leurs participants
- **AND** l'écran dit combien d'événements ont été lus

#### Scenario: Récurrence non comprise

- **WHEN** le fichier contient une règle de récurrence que le système ne sait pas développer
- **THEN** seule l'occurrence d'origine est retenue
- **AND** l'import le signale, sans inventer de répétitions

#### Scenario: Fichier illisible

- **WHEN** le fichier fourni n'est pas un agenda iCalendar
- **THEN** l'agenda précédent, s'il existe, reste en place
- **AND** l'écran dit que le fichier n'a pas été compris

#### Scenario: Aucune sortie réseau

- **WHEN** un agenda est importé puis utilisé pendant tout un parcours
- **THEN** aucune requête ne quitte l'appareil du fait de l'agenda

### Requirement: Conservation et effacement de l'agenda

Le système SHALL conserver l'agenda importé sur l'appareil, protégé comme les notes quand le chiffrement est actif. Un nouvel import SHALL remplacer entièrement le précédent. L'utilisateur SHALL pouvoir effacer l'agenda d'un geste, sans toucher à ses notes.

#### Scenario: Réimport

- **WHEN** l'utilisateur importe un nouveau fichier
- **THEN** les événements de l'import précédent ne sont plus connus
- **AND** les notes et décisions ne sont pas modifiées

#### Scenario: Agenda effacé

- **WHEN** l'utilisateur efface l'agenda
- **THEN** l'application se comporte comme si aucun agenda n'avait été importé
- **AND** les captures déjà rattachées à une réunion gardent ce rattachement

#### Scenario: Agenda protégé par le coffre

- **WHEN** le chiffrement est actif
- **THEN** ni le titre, ni le lieu, ni les participants d'un événement ne sont lisibles dans la base sans déverrouillage

### Requirement: Fraîcheur de l'agenda dite

Le système SHALL indiquer quand l'agenda a été importé et jusqu'à quelle date il couvre. Au-delà de cette date, ou sans agenda, le système SHALL se comporter comme sans agenda et NE DOIT inventer aucun signal. Un agenda périmé SHALL être signalé une seule fois en Revue.

#### Scenario: Couverture affichée

- **WHEN** l'utilisateur consulte ses réglages après un import
- **THEN** il voit la date d'import et la date jusqu'à laquelle l'agenda est connu

#### Scenario: Agenda périmé

- **WHEN** la date du jour dépasse la couverture de l'agenda, ou l'import date de plus de sept jours
- **THEN** la Revue le signale une fois, avec l'invitation à réimporter
- **AND** aucun signal n'est déduit au-delà de la couverture

#### Scenario: Sans agenda

- **WHEN** aucun agenda n'a été importé
- **THEN** le classement, les rappels et la Revue se comportent exactement comme avant cette capacité

### Requirement: Durée estimée d'un élément

Le système SHALL estimer pour chaque élément actionnable une durée de réalisation parmi quelques minutes, une vingtaine de minutes ou une heure et plus. Cette estimation porte une confiance et l'indice qui la fonde. Quand rien ne permet de l'estimer, elle SHALL rester inconnue. L'utilisateur SHALL pouvoir la corriger, et sa correction prime sur toute ré-analyse.

#### Scenario: Durée déduite

- **WHEN** une capture contient « envoyer le devis à Marc »
- **THEN** l'élément porte une durée courte, avec l'indice qui la justifie

#### Scenario: Durée inconnue

- **WHEN** rien dans le passage ne permet d'estimer sa durée
- **THEN** la durée reste inconnue plutôt que devinée

#### Scenario: Durée corrigée

- **WHEN** l'utilisateur corrige la durée d'un élément
- **THEN** la durée corrigée est conservée à travers une ré-analyse de la capture

### Requirement: Classement selon le temps avant la prochaine réunion

Le système SHALL, quand l'agenda connaît une prochaine réunion, ne proposer dans Maintenant que des éléments dont la durée estimée, suffisamment sûre, tient dans le temps restant. Un élément de durée inconnue NE DOIT pas être proposé dans un créneau de moins de trente minutes. Un élément écarté faute de temps SHALL revenir dès que le temps le permet.

#### Scenario: Créneau court

- **WHEN** il reste sept minutes avant la prochaine réunion
- **THEN** seuls des éléments de durée estimée courte et sûre sont proposés
- **AND** l'écran dit combien de temps reste et avant quoi

#### Scenario: Rien qui tienne

- **WHEN** aucun élément ne tient dans le temps restant
- **THEN** Maintenant le dit au lieu de proposer un élément trop long

#### Scenario: Temps retrouvé

- **WHEN** la réunion est passée et la journée n'en compte plus d'autre avant longtemps
- **THEN** les éléments écartés faute de temps sont de nouveau proposés

### Requirement: Charge de la journée

Le système SHALL, à la sortie d'au moins trois heures de réunions enchaînées selon l'agenda, ne proposer pendant un temps de récupération que des éléments de durée courte. Les éléments exigeants SHALL être replacés plus tard, sans être perdus.

#### Scenario: Journée dense

- **WHEN** l'utilisateur sort de trois heures de réunions consécutives
- **THEN** les éléments proposés sont de durée courte
- **AND** les éléments longs sont de nouveau proposés après le temps de récupération

### Requirement: Déclencheurs reconnus dans l'agenda

Le système SHALL reconnaître dans l'agenda les déclencheurs des plans :
- « quand je vois *personne* » : le prochain événement dont elle est participante ou qu'elle nomme ;
- un événement récurrent : sa prochaine occurrence ;
- la fin d'une réunion : un point de rupture.

Un déclencheur que l'agenda ne permet pas de reconnaître SHALL rester ramené à la reprise de l'appareil, en le disant, comme sans agenda.

#### Scenario: Rappel lié à une personne

- **WHEN** un plan porte « quand je vois Marc »
- **AND** une réunion avec Marc commence dans l'agenda
- **THEN** le rappel est présenté juste avant cette réunion

#### Scenario: Rappel lié à un événement récurrent

- **WHEN** un plan porte « avant le point du lundi »
- **THEN** il est présenté avant la prochaine occurrence de cet événement tant qu'il n'est pas clos

#### Scenario: Report à la fin de la réunion

- **WHEN** un rappel non critique devient actionnable pendant une réunion connue de l'agenda
- **THEN** il est présenté à la fin de la réunion
- **AND** son retard est signalé

#### Scenario: Personne absente de l'agenda

- **WHEN** un plan porte « quand je vois Karim » et aucun événement connu ne concerne Karim
- **THEN** le rappel reste ramené à la reprise de l'appareil
- **AND** l'écran dit pourquoi

### Requirement: Moments de réunion

Le système SHALL, lorsque l'application est ouverte à ces moments, proposer :
- avant une réunion connue de l'agenda : ce qui est ouvert avec ses participants, et une dépose courte de ce que l'utilisateur quitte ;
- à sa fin : la dépose faite avant, et une capture déjà rattachée à la réunion et à ses participants.

La proposition de fin SHALL être reportée si une autre réunion suit immédiatement. Aucune de ces propositions NE DOIT démarrer un enregistrement sans action explicite de l'utilisateur.

Une capture faite pendant une réunion connue, ou dans la foulée de sa fin, SHALL porter le rattachement à cette réunion.

#### Scenario: Briefing avant réunion

- **WHEN** une réunion avec des participants connus de la mémoire commence dans quelques minutes
- **THEN** l'application présente les éléments ouverts liés à ces personnes, chacun renvoyant à sa capture source

#### Scenario: Dépose proposée

- **WHEN** une réunion commence dans deux minutes
- **THEN** une capture courte « où j'en suis, ce que je reprends après » est proposée

#### Scenario: Reprise après réunion

- **WHEN** la réunion se termine
- **THEN** l'application présente la dépose faite avant, telle quelle

#### Scenario: Capture post-réunion contextualisée

- **WHEN** une réunion se termine
- **THEN** une capture est proposée, déjà rattachée à cette réunion et à ses participants

#### Scenario: Proposition non intrusive

- **WHEN** l'utilisateur enchaîne immédiatement sur une autre réunion
- **THEN** la proposition de vidage est reportée à la fin de l'enchaînement

#### Scenario: Aucun enregistrement implicite

- **WHEN** une réunion commence dans l'agenda sans action de l'utilisateur
- **THEN** aucun audio n'est enregistré
