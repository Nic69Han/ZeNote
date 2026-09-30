# Spec Delta

## Purpose

Permettre de noter, dans les secondes qui précèdent un décrochage, la prochaine étape de ce qu'on faisait, et la retrouver au retour sans la chercher.

## ADDED Requirements

### Requirement: Note de reprise

L'écran de capture SHALL offrir un geste « Je m'arrête là » qui enregistre une note de reprise, dictée ou écrite, avec la même garantie d'écriture durable qu'une capture ordinaire.

Une note de reprise NE DOIT pas produire d'éléments en Revue, sauf si l'utilisateur le demande explicitement.

#### Scenario: Poser une note de reprise

- **WHEN** l'utilisateur appuie sur « Je m'arrête là » et écrit « reprendre au paragraphe 3 du budget »
- **THEN** la note est écrite et confirmée comme une capture
- **AND** aucun élément n'en est tiré pour la Revue

#### Scenario: Envoyer en Revue

- **WHEN** l'utilisateur choisit « Garder pour la Revue » sur une note de reprise
- **THEN** elle est analysée comme une capture ordinaire
- **AND** ses éléments apparaissent en Revue

### Requirement: Restitution au retour

Au retour dans l'application après une absence, Maintenant SHALL afficher en tête la dernière note de reprise non reprise, mot pour mot, avec son heure de pose et son audio s'il existe. Un geste SHALL la marquer reprise, après quoi elle ne s'affiche plus et reste retrouvable par la recherche.

#### Scenario: Retour après une réunion

- **WHEN** une note de reprise a été posée à 10 h 02
- **AND** l'utilisateur revient dans l'application à 11 h 15
- **THEN** Maintenant affiche « Où vous en étiez » avec la note citée et « posée à 10 h 02 »

#### Scenario: Reprise marquée

- **WHEN** l'utilisateur appuie sur « C'est reparti »
- **THEN** la carte disparaît
- **AND** la note reste retrouvable par la recherche

#### Scenario: Une seule note à la fois

- **WHEN** deux notes de reprise ont été posées sans reprise entre elles
- **THEN** seule la plus récente est affichée
