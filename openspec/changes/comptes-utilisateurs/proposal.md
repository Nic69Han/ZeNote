# Proposal

## Why

Depuis la change `analyse-typesafe` (groupe 6), l'analyse distante est réservée à un utilisateur connecté avec un compte ZeNote. Or ZeNote n'a pas de comptes : le service `/api/analyser` refuse tout, et l'analyse distante ne peut être ni évaluée sur de vraies notes (tâche 5.3), ni rendue à qui la voudrait. Le site est public, et une clé TypeSafe payante est posée chez l'hébergeur : le compte doit dire qui appelle, et borner ce que chacun peut consommer, avant que le service n'accepte un seul appel.

## What Changes

- **Compte par clé d'accès (passkey)** : un compte ZeNote se crée et s'ouvre avec une clé d'accès de l'appareil (empreinte, visage ou code de l'appareil). Aucune adresse e-mail, aucun nom, aucun mot de passe. La clé est vérifiée par les fonctions serveur de ZeNote, sans service tiers.
- **Inscription sur invitation** : un compte ne se crée qu'avec un code d'invitation à usage unique et à durée limitée. Le premier compte, celui du propriétaire, se crée avec un code fondateur posé chez l'hébergeur ; il peut ensuite inviter depuis « Vos données ».
- **Session vérifiée côté serveur** : une fois connecté, l'appareil porte un cookie de session inaccessible au code de la page. `compte.ts` vérifie cette session à chaque appel de `/api/analyser`. Se déconnecter la révoque.
- **Limite d'appels** : chaque compte a un quota quotidien d'analyses, et un plafond mensuel global borne le coût total. Au-delà, le service refuse, et l'appareil analyse localement en le disant.
- **Consentement redemandé** : se connecter n'allume rien. L'analyse distante reste éteinte tant que l'utilisateur, connecté, ne l'a pas allumée lui-même après l'explication de ce qui part. Un réglage allumé avant l'existence des comptes ne compte pas.
- **Le compte ne porte aucune note** : il ne sert qu'à l'analyse distante, pas à synchroniser. Côté serveur n'existent que l'identifiant du compte, ses clés publiques, ses sessions et ses compteurs. L'utilisateur peut se déconnecter et supprimer son compte d'un geste ; ses notes, sur l'appareil, n'en sont pas touchées.
- **« Ce qui quitte l'appareil » dit le compte** : connecté, l'écran dit ce que le serveur sait du compte ; la promesse réseau du bout-en-bout est révisée pour admettre les requêtes de compte vers la même origine, sans aucun contenu de note.

## Capabilities

### New Capabilities

- `comptes` : création d'un compte sur invitation par clé d'accès, connexion, session vérifiée côté serveur, déconnexion, suppression, invitations, et ce que le serveur conserve d'un compte.

### Modified Capabilities

Aucune spec n'est archivée dans `openspec/specs/`. La capability `analyse-distante` est introduite par la change `analyse-typesafe`, non archivée ; son exigence « Analyse réservée à un compte connecté » est tenue par celle-ci sans changer. Cette change y **ajoute** deux exigences, dans un delta `analyse-distante` : la limite d'appels par compte avec plafond global, et le consentement redemandé après connexion. `analyse-typesafe` doit être archivée avant elle.

## Impact

- **Fonctions Netlify** (`netlify/`) :
  - nouvelle fonction `compte` sous `/api/compte/*` : options et vérification d'inscription et de connexion, session, déconnexion, suppression, invitations ;
  - `analyser/compte.ts` lit et vérifie la session ; `traitement.ts` gagne le contrôle du quota avant l'appel au fournisseur ;
  - dépendances `@simplewebauthn/server` et `@netlify/blobs`, propres aux fonctions, hors du paquet de l'application.
- **Stockage serveur** : Netlify Blobs (inclus dans le plan gratuit) pour les comptes, les défis, les sessions, les invitations et les compteurs. Nouvelles variables d'environnement : le code fondateur, le quota quotidien, le plafond mensuel.
- **PWA** (`app/`) :
  - `compte/compte.ts` : état de connexion réel, rafraîchi au démarrage et après chaque geste de compte ;
  - bloc « Compte » dans « Vos données » : créer, se connecter, se déconnecter, supprimer, inviter ;
  - client d'analyse : 429 traité comme un repli ;
  - « Ce qui quitte l'appareil » et `netlify.toml` réécrits pour dire le compte.
- **Coffre** : la clé d'accès du compte est distincte de celle du coffre ; elle ne doit jamais l'écraser (décision 2 du design).
- **Tests** : fonctions vérifiées avec un authentificateur et un stockage simulés ; bout-en-bout avec l'authentificateur virtuel de Chromium déjà utilisé pour le coffre.
- **Déblocage** : la tâche 5.3 d'`analyse-typesafe` (évaluation) redevient possible une fois cette change livrée.
