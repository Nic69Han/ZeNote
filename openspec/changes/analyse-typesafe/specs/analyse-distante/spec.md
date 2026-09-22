# Spec Delta

## Purpose

Faire comprendre une capture par un service d'analyse distant — son type d'intention et sa sphère — sans jamais transmettre ce que l'utilisateur a refusé, sans exposer d'identifiant secret dans l'application, et sans que l'indisponibilité du service ne prive l'utilisateur d'une analyse.

## ADDED Requirements

### Requirement: Transmission conditionnée au consentement

Le système SHALL décider, avant tout envoi, si une capture est transmissible, et NE DOIT la transmettre au service d'analyse distant que si elle l'est : ni marquée non transmissible par l'utilisateur, ni rattachée à une sphère qu'il a exclue de l'analyse distante.

Le système NE DOIT transmettre, pour une capture transmissible, que le texte des passages à analyser. L'audio, l'horodatage, l'identifiant de la capture et tout autre élément de la base locale NE DOIVENT pas quitter l'appareil.

#### Scenario: Capture non transmissible

- **WHEN** l'utilisateur a marqué une capture comme non transmissible
- **THEN** aucune requête ne part vers le service d'analyse pour cette capture
- **AND** la capture est analysée localement
- **AND** ses éléments indiquent qu'ils viennent de l'analyse locale

#### Scenario: Sphère exclue

- **WHEN** l'utilisateur a exclu la sphère personnelle de l'analyse distante
- **AND** une capture est rattachée à la sphère personnelle
- **THEN** aucune requête ne part vers le service d'analyse pour cette capture

#### Scenario: Contenu minimal transmis

- **WHEN** une capture transmissible est envoyée à l'analyse
- **THEN** la requête ne contient que le texte de ses passages
- **AND** elle ne contient ni audio, ni date de capture, ni identifiant local

#### Scenario: Destination unique

- **WHEN** l'application fonctionne, captures transmissibles comprises
- **THEN** toute requête sortante de l'application vise uniquement le point d'analyse déclaré de ZeNote
- **AND** aucune requête ne vise directement le fournisseur du modèle depuis l'appareil

### Requirement: Identifiant secret hors de l'application

L'identifiant d'accès au fournisseur du modèle SHALL être détenu uniquement par le service d'analyse côté serveur. Il NE DOIT figurer ni dans le code livré à l'appareil, ni dans ses requêtes, ni dans son stockage local.

#### Scenario: Paquet de l'application inspecté

- **WHEN** on examine l'intégralité des fichiers servis à l'appareil
- **THEN** l'identifiant d'accès n'y apparaît pas

#### Scenario: Service non configuré

- **WHEN** le service d'analyse ne dispose d'aucun identifiant d'accès
- **THEN** il répond qu'il n'est pas disponible
- **AND** l'application analyse la capture localement, sans erreur visible autre que la mention de l'analyse locale

### Requirement: Jugement typé avec confiance

Pour chaque passage transmis, le service d'analyse SHALL rendre un type parmi `tâche`, `engagement`, `attente`, `décision`, `idée`, `information`, et une sphère parmi `professionnel`, `personnel` ou indécidable, chacun accompagné d'une confiance comprise entre 0 et 1.

Une sphère indécidable NE DOIT pas être rattachée arbitrairement à l'une des deux sphères : l'élément reste sans sphère et visible dans toutes les vues.

Les réponses pour tous les passages d'une capture SHALL être obtenues en une seule requête au fournisseur.

#### Scenario: Passages multiples, une requête

- **WHEN** une capture contient trois passages
- **THEN** le service interroge le fournisseur une seule fois
- **AND** rend un type et une sphère pour chacun des trois passages

#### Scenario: Sphère indécidable

- **WHEN** le service juge la sphère d'un passage indécidable
- **THEN** l'élément produit n'a pas de sphère
- **AND** il apparaît quel que soit le filtre de sphère choisi

#### Scenario: Confiance sous le seuil

- **WHEN** le type d'un passage est rendu avec une confiance inférieure au seuil de confirmation
- **THEN** l'élément apparaît en Revue sous forme de question à confirmer
- **AND** aucun rappel n'est planifié avant confirmation

### Requirement: Ancrage et correction préservés

Un élément issu de l'analyse distante SHALL rester rattaché au passage exact de la capture dont il vient. Le service distant NE DOIT produire aucun texte d'élément : il ne juge que des passages découpés sur l'appareil.

Une correction humaine SHALL primer sur toute réponse du service, y compris lors d'une ré-analyse.

#### Scenario: Aucun texte inventé

- **WHEN** le service d'analyse répond pour une capture
- **THEN** le texte de chaque élément produit est un passage présent mot pour mot dans la transcription

#### Scenario: Correction non écrasée

- **WHEN** l'utilisateur a corrigé le type d'un élément
- **AND** la capture est ré-analysée par le service distant
- **THEN** le type corrigé est conservé

#### Scenario: Réponse incohérente écartée

- **WHEN** la réponse du service ne couvre pas tous les passages envoyés, ou porte une valeur hors des listes attendues
- **THEN** la réponse est rejetée en entier
- **AND** la capture est analysée localement

### Requirement: Repli sur l'analyse locale

Quand le service d'analyse est indisponible, non configuré, trop lent, ou que la capture ne doit pas sortir, le système SHALL analyser la capture localement, et cette défaillance NE DOIT ni bloquer la capture, ni perdre d'élément, ni retarder la Revue au-delà du délai imparti au service.

Chaque élément SHALL indiquer l'origine de son analyse — locale, ou distante avec la version du modèle — pour qu'une ré-analyse ultérieure puisse cibler les éléments analysés localement.

#### Scenario: Service indisponible

- **WHEN** le service d'analyse ne répond pas dans le délai imparti
- **THEN** la capture est analysée localement
- **AND** l'état dégradé est signalé sans bloquer l'usage

#### Scenario: Hors ligne

- **WHEN** l'appareil est sans réseau
- **THEN** les captures sont analysées localement
- **AND** aucune tentative d'envoi ne retarde leur apparition en Revue

#### Scenario: Origine consultable

- **WHEN** l'utilisateur consulte un élément
- **THEN** il peut savoir s'il a été analysé localement ou par le service distant

### Requirement: Activation conditionnée à l'évaluation

L'analyse distante NE DOIT être activée par défaut qu'après une évaluation sur un lot de captures réelles en français, comparant ses résultats à ceux de l'analyse locale et à un étiquetage humain, dont les résultats et le seuil de confirmation retenu sont consignés.

Tant que cette évaluation n'est pas faite, l'analyse distante SHALL rester désactivée par défaut et activable explicitement par l'utilisateur.

#### Scenario: Avant évaluation

- **WHEN** l'évaluation n'a pas été consignée
- **THEN** une nouvelle installation analyse localement
- **AND** l'utilisateur peut activer l'analyse distante dans les réglages

#### Scenario: Évaluation défavorable

- **WHEN** l'évaluation montre que l'analyse distante ne fait pas mieux que l'analyse locale sur le type d'élément
- **THEN** elle n'est pas activée par défaut
- **AND** le constat est consigné avec les chiffres
