# Spec Delta

## Purpose

Rendre une note vocale aussi rapide à réécouter qu'elle a été rapide à dire, sans jamais toucher à l'enregistrement d'origine.

## ADDED Requirements

### Requirement: Vitesse de lecture

Partout où un enregistrement se réécoute, le système SHALL proposer les vitesses 1×, 1,5× et 2×, en préservant la hauteur de la voix, et SHALL retenir la dernière vitesse choisie pour les écoutes suivantes.

#### Scenario: Écoute à 1,5×

- **WHEN** l'utilisateur choisit 1,5× sur un enregistrement
- **THEN** la lecture se fait à une fois et demie la vitesse
- **AND** l'écoute suivante, sur n'importe quel écran, démarre à 1,5×

### Requirement: Silences raccourcis

Le système SHALL proposer de raccourcir les silences : toute pause de plus de 700 ms est sautée à la lecture en n'en gardant que 300 ms. L'enregistrement d'origine NE DOIT être ni modifié ni remplacé, et les positions des passages NE DOIVENT pas changer.

Quand les silences ne peuvent pas être détectés, le système SHALL le dire et laisser l'écoute normale disponible.

#### Scenario: Pause longue sautée

- **WHEN** un enregistrement contient une pause de deux secondes et que le raccourcissement est allumé
- **THEN** la lecture passe cette pause en 300 ms environ

#### Scenario: Pause courte conservée

- **WHEN** une pause dure 400 ms
- **THEN** elle est lue telle quelle

#### Scenario: Enregistrement intact

- **WHEN** l'utilisateur a écouté avec les silences raccourcis
- **THEN** l'audio stocké est identique, octet pour octet, à ce qu'il était avant
