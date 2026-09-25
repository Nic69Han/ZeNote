## Purpose

Garantir que l'utilisateur peut confier à ZeNote sa vie professionnelle et personnelle : ses données lui appartiennent, restent lisibles hors ligne, sortent du produit quand il le veut, et il sait exactement ce qui est envoyé à un service tiers.

## ADDED Requirements

### Requirement: Données locales de référence

Le système SHALL conserver sur l'appareil une copie complète et exploitable des captures, transcriptions et éléments, et l'application SHALL rester utilisable en lecture, capture et recherche locale sans connexion.

#### Scenario: Utilisation complète hors ligne

- **WHEN** l'appareil est sans réseau
- **THEN** l'utilisateur peut capturer, consulter ses éléments, sa vue Maintenant et rechercher localement
- **AND** seules les fonctions d'analyse sont différées

### Requirement: Chiffrement

Le système SHALL chiffrer les données au repos sur l'appareil et en transit, et l'accès à l'application SHALL être protégé par le verrouillage biométrique ou par code de l'appareil.

#### Scenario: Appareil perdu

- **WHEN** un tiers accède physiquement à l'appareil verrouillé
- **THEN** les données de l'application ne sont pas lisibles sans authentification

### Requirement: Périmètre de ce qui est transmis

Le système SHALL indiquer explicitement quelles données quittent l'appareil pour être analysées, et SHALL permettre de refuser l'analyse distante pour une capture donnée ou pour une sphère entière.

Une capture marquée comme non transmissible NE DOIT être envoyée à aucun service tiers.

#### Scenario: Capture marquée privée

- **WHEN** l'utilisateur marque une capture comme non transmissible
- **THEN** elle n'est envoyée à aucun service distant
- **AND** elle reste capturée, consultable et recherchable localement
- **AND** l'absence d'analyse est signalée

#### Scenario: Sphère personnelle exclue

- **WHEN** l'utilisateur exclut la sphère personnelle de l'analyse distante
- **THEN** aucune capture de cette sphère n'est transmise

### Requirement: Export intégral

L'utilisateur SHALL pouvoir exporter à tout moment l'intégralité de ses données — audio, transcriptions, éléments, mémoire, liens de traçabilité — dans un format ouvert et documenté, lisible sans ZeNote.

#### Scenario: Export complet

- **WHEN** l'utilisateur demande un export
- **THEN** l'archive produite contient les fichiers audio, les transcriptions, les éléments et la mémoire dans un format ouvert
- **AND** les liens entre un élément et sa capture source y sont préservés

### Requirement: Suppression effective

L'utilisateur SHALL pouvoir supprimer une capture, une entité ou l'intégralité de son compte, et la suppression SHALL se propager aux copies distantes dans un délai borné et annoncé.

#### Scenario: Suppression d'une capture

- **WHEN** l'utilisateur supprime une capture
- **THEN** l'audio, la transcription et les éléments qui en découlent sont supprimés localement
- **AND** la suppression est propagée aux copies distantes dans le délai annoncé

#### Scenario: Fenêtre d'annulation

- **WHEN** une suppression est demandée
- **THEN** une fenêtre d'annulation est offerte avant l'effacement définitif

### Requirement: Synchronisation entre appareils

Le système SHALL synchroniser les données entre le téléphone et l'ordinateur de l'utilisateur, SHALL résoudre les conflits sans perte, et NE DOIT jamais écraser silencieusement une version divergente.

#### Scenario: Modification concurrente

- **WHEN** un même élément est modifié sur deux appareils hors ligne
- **THEN** les deux versions sont conservées à la reconnexion
- **AND** l'utilisateur tranche si le conflit n'est pas résoluble automatiquement

#### Scenario: Capture prioritaire

- **WHEN** la synchronisation est en cours
- **THEN** une nouvelle capture reste possible et instantanée
- **AND** elle n'attend pas la fin de la synchronisation

### Requirement: Dépendance externe non bloquante

Le système SHALL rester capable de capturer, consulter et rechercher localement en cas de panne, d'indisponibilité ou de limitation d'un service tiers ; une telle défaillance NE DOIT jamais bloquer ces trois usages.

#### Scenario: Service d'analyse indisponible

- **WHEN** le service d'analyse est indisponible
- **THEN** les captures continuent d'être enregistrées et mises en file
- **AND** l'état dégradé est signalé sans bloquer l'usage
