# Spec Delta

## Purpose

Donner à un utilisateur de ZeNote un compte qui dit au serveur qui il est, sans rien lui confier de ses notes : création sur invitation par clé d'accès de l'appareil, connexion, session, déconnexion et suppression.

## ADDED Requirements

### Requirement: Création de compte sur invitation

Le système SHALL créer un compte uniquement sur présentation d'un code d'invitation valide : non utilisé, non expiré. Le compte est lié à une clé d'accès de l'appareil (passkey) créée à cette occasion, avec vérification de l'utilisateur par l'appareil. Le système NE DOIT demander ni adresse e-mail, ni nom, ni mot de passe.

Un code d'invitation SHALL ne servir qu'une fois et expirer sept jours après sa création. Tant qu'aucun compte n'existe, un code fondateur défini chez l'hébergeur tient lieu d'invitation et crée un compte administrateur ; il ne sert plus dès qu'un compte administrateur existe.

#### Scenario: Compte créé avec une invitation

- **WHEN** l'utilisateur ouvre un lien d'invitation valide et confirme avec la clé d'accès de son appareil
- **THEN** son compte est créé et il est connecté
- **AND** l'invitation ne peut plus servir

#### Scenario: Invitation invalide

- **WHEN** l'utilisateur présente un code d'invitation inconnu, déjà utilisé ou expiré
- **THEN** aucun compte n'est créé
- **AND** l'écran dit que l'invitation n'est pas valable, sans dire laquelle de ces raisons s'applique

#### Scenario: Premier compte avec le code fondateur

- **WHEN** aucun compte administrateur n'existe et l'utilisateur présente le code fondateur
- **THEN** un compte administrateur est créé
- **AND** le code fondateur est ensuite refusé

#### Scenario: Aucune identité demandée

- **WHEN** l'utilisateur crée un compte
- **THEN** aucun champ ne lui demande d'adresse e-mail, de nom ou de mot de passe

### Requirement: Clé d'accès du compte distincte de celle du coffre

Le système SHALL créer pour le compte une clé d'accès distincte de celle qui protège le coffre de l'appareil. Créer, utiliser ou supprimer un compte NE DOIT jamais rendre le coffre inaccessible.

#### Scenario: Compte créé sur un appareil au coffre protégé par l'appareil

- **WHEN** le coffre est protégé par une clé d'accès de l'appareil et l'utilisateur crée un compte
- **THEN** le coffre se déverrouille ensuite comme avant

#### Scenario: Compte supprimé

- **WHEN** l'utilisateur supprime son compte
- **THEN** le coffre et les notes de l'appareil restent intacts et accessibles

### Requirement: Connexion et session vérifiées côté serveur

Le système SHALL connecter un utilisateur par sa clé d'accès, sur défi à usage unique émis par le serveur, et ouvrir alors une session que le serveur vérifie à chaque requête qui l'exige. La preuve de session NE DOIT pas être lisible par le code de la page, et NE DOIT pas pouvoir être fabriquée par le client : un en-tête ou un identifiant fourni par l'appareil ne suffit jamais.

Une session SHALL expirer au plus tard trente jours après sa création. Une session expirée, révoquée ou inconnue vaut une absence de compte.

#### Scenario: Connexion sur un nouvel appareil

- **WHEN** l'utilisateur choisit « Se connecter » et présente la clé d'accès de son compte
- **THEN** il est connecté, et l'écran dit qu'il l'est

#### Scenario: Clé d'accès inconnue

- **WHEN** la clé d'accès présentée n'appartient à aucun compte, par exemple celle du coffre
- **THEN** la connexion est refusée et l'écran le dit

#### Scenario: Défi rejoué

- **WHEN** une réponse de clé d'accès déjà acceptée est présentée une seconde fois
- **THEN** elle est refusée

#### Scenario: Session fabriquée

- **WHEN** une requête porte un jeton de session que le serveur n'a pas émis
- **THEN** elle est traitée comme sans compte

#### Scenario: Session expirée

- **WHEN** trente jours ont passé depuis l'ouverture d'une session
- **THEN** elle ne vaut plus rien, et l'appareil se montre déconnecté

### Requirement: Requêtes de compte protégées contre la contrefaçon

Le système SHALL refuser toute requête de compte qui modifie un état (inscription, connexion, déconnexion, suppression, invitation) si elle ne vient pas de l'origine de l'application.

#### Scenario: Requête venue d'un autre site

- **WHEN** une page d'un autre site tente de déconnecter ou de supprimer le compte de l'utilisateur
- **THEN** la requête est refusée et rien ne change

### Requirement: Déconnexion et suppression du compte

Le système SHALL permettre à l'utilisateur connecté de se déconnecter, ce qui révoque sa session, et de supprimer son compte après confirmation, ce qui efface côté serveur ses clés publiques, ses sessions et ses compteurs. Après suppression, aucune de ses clés d'accès ne connecte plus.

#### Scenario: Déconnexion

- **WHEN** l'utilisateur se déconnecte
- **THEN** sa session est révoquée côté serveur
- **AND** l'analyse distante ne peut plus partir de cet appareil

#### Scenario: Suppression confirmée

- **WHEN** l'utilisateur supprime son compte et confirme
- **THEN** le serveur ne garde plus rien de ce compte
- **AND** une connexion avec sa clé d'accès est ensuite refusée

### Requirement: Le compte ne porte aucune note

Le compte SHALL ne servir qu'à identifier l'utilisateur auprès du service d'analyse. Le serveur NE DOIT conserver d'un compte que son identifiant tiré au hasard, ses clés publiques, la date de création, son rôle, ses sessions et ses compteurs d'usage. Aucune requête de compte NE DOIT porter de contenu de note, d'audio, d'agenda ou d'identifiant local.

#### Scenario: Requêtes de compte inspectées

- **WHEN** l'utilisateur crée un compte, se connecte, invite, se déconnecte et supprime son compte
- **THEN** chaque requête vise la même origine que l'application
- **AND** aucune ne contient de texte de note, d'audio, d'événement d'agenda ou d'identifiant de capture

#### Scenario: Ce que le serveur sait, dit à l'écran

- **WHEN** l'utilisateur connecté ouvre « Vos données »
- **THEN** l'écran dit ce que le serveur conserve de son compte, et que ses notes restent sur l'appareil

### Requirement: Invitations émises par un administrateur

Le système SHALL permettre à un compte administrateur, et à lui seul, de créer un code d'invitation et de le partager sous forme de lien. Le serveur NE DOIT conserver d'une invitation qu'une empreinte du code, sa date d'expiration et son état.

#### Scenario: Invitation créée

- **WHEN** un administrateur connecté choisit « Inviter quelqu'un »
- **THEN** un lien d'invitation à usage unique, valable sept jours, lui est montré une seule fois

#### Scenario: Invitation refusée à un compte ordinaire

- **WHEN** un compte qui n'est pas administrateur demande une invitation
- **THEN** la demande est refusée
