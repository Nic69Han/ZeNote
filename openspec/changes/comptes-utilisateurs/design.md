# Design

## Context

Voir `proposal.md` pour le pourquoi, et les specs `comptes` et `analyse-distante` de cette change pour les exigences.

État de départ, tel que la change `analyse-typesafe` (groupe 6) l'a laissé :
- `netlify/functions/analyser/traitement.ts` exige une dépendance `identifier(requete)`, appelée avant de créer le client et avant de lire le corps ; `null` donne un 401 `authentification-requise`.
- `netlify/functions/analyser/compte.ts` n'identifie personne.
- Côté appareil, `app/src/compte/compte.ts` expose `compteConnecte()`, qui rend `false`. `peutTransmettre` et Réglages s'y fient.
- Le coffre (`app/src/securite/coffre.ts`) crée déjà une clé d'accès de plateforme, avec `user.id = 'zenote'`, `residentKey: 'required'` et l'extension `prf`. Le bout-en-bout l'exerce avec l'authentificateur virtuel de Chromium.
- Hébergement Netlify, plan gratuit : fonctions Node 22 empaquetées par esbuild, dépendances des fonctions dans `netlify/package.json`, séparées de l'application. Le site a une URL de production et des aperçus de déploiement par PR.

## Goals / Non-Goals

**Goals :**
- Une identité serveur vérifiable pour `/api/analyser`, sans service tiers et sans donnée personnelle.
- Un coût TypeSafe borné par compte et au total, quels que soient le nombre de comptes et le comportement d'un client.
- Aucun changement pour qui n'a pas de compte : l'appli reste entièrement locale.

**Non-Goals :**
- Synchroniser des notes, sauvegarder le coffre ou retrouver ses données sur un autre appareil : le compte ne porte rien de cela.
- Récupérer un compte dont toutes les clés d'accès sont perdues. On en crée un autre sur une nouvelle invitation ; rien n'est perdu, puisque le compte ne porte aucune note.
- Ajouter une seconde clé d'accès à un compte existant. Les clés synchronisées par le système (trousseau iCloud, gestionnaire Google) couvrent le cas courant ; le reste peut attendre.
- Gérer les comptes d'autrui, au-delà des invitations.

## Decisions

### 1. Clés d'accès vérifiées par nos fonctions, avec `@simplewebauthn/server`

L'inscription et la connexion suivent WebAuthn. Le serveur émet un défi, l'appareil le signe avec sa clé d'accès après vérification de l'utilisateur, et le serveur vérifie la signature. La vérification d'attestation et d'assertion est confiée à `@simplewebauthn/server` (MIT, 14.x), dépendance de `netlify/` seulement. Réécrire cette vérification (CBOR, COSE, compteurs, `rpIdHash`) à la main serait la source d'erreurs de sécurité la plus probable de la change.

Côté appareil, `@simplewebauthn/browser` (MIT, 14.x) convertit les options JSON en appels `navigator.credentials` et retour. C'est quelques kilo-octets dans le paquet, contre un convertisseur base64url maison à tester.

*Alternatives écartées :*
- Netlify Identity : déprécié.
- Auth0 ou Supabase Auth : service tiers et adresse e-mail, écartés par l'utilisateur.
- Un simple secret partagé dans l'appli : il serait lisible dans le paquet.

### 2. La clé du compte ne doit jamais écraser celle du coffre

Une clé d'accès « résidente » est remplacée si l'on en crée une autre pour le même site et le même `user.id`. Le coffre utilise `user.id = 'zenote'`. Réutiliser cet identifiant pour le compte effacerait la clé du coffre, et avec elle l'accès aux notes chiffrées.

Donc le compte prend un `user.id` de 32 octets tirés au hasard par le serveur, et un nom distinct : `name: 'compte-zenote'`, `displayName: 'Compte ZeNote'`. Un test vérifie que les options d'inscription ne portent jamais l'identifiant du coffre. Le bout-en-bout vérifie le scénario « Compte créé sur un appareil au coffre protégé par l'appareil ».

À la connexion, le sélecteur du système peut proposer les deux clés. Si l'utilisateur choisit celle du coffre, le serveur ne la connaît pas et la refuse. L'écran le dit : « Cette clé n'est pas celle d'un compte ZeNote. »

### 3. Stockage : Netlify Blobs, en cohérence forte

Netlify Blobs est inclus dans le plan gratuit, sans service de plus. Chaque magasin est partagé par tout le site et lu en `consistency: 'strong'` : un défi ou une invitation consommés doivent l'être tout de suite, partout.

| Magasin | Clé | Valeur |
| --- | --- | --- |
| `comptes` | identifiant du compte (aléatoire, base64url) | rôle (`ADMINISTRATEUR` ou `MEMBRE`), date de création, clés `{ id, clePublique, compteur, transports }` |
| `cles` | identifiant de clé d'accès | identifiant du compte (index de connexion) |
| `defis` | empreinte SHA-256 du défi | usage (`INSCRIPTION` ou `CONNEXION`), expiration à 5 minutes, données d'inscription en attente |
| `sessions` | empreinte SHA-256 du jeton | identifiant du compte, expiration |
| `invitations` | empreinte SHA-256 du code | expiration, `utilisee`, compte émetteur |
| `usage` | `jour/<compte>/<AAAA-MM-JJ>`, `mois/<AAAA-MM>` | un nombre |
| `meta` | `administrateur` | présence d'un compte administrateur |

Les secrets (défis, jetons, codes) ne sont jamais stockés en clair : seulement leur empreinte. Une fuite du magasin ne permet d'ouvrir aucune session.

Un défi est supprimé dès sa première présentation, que la vérification réussisse ou non. C'est ce qui tient le scénario « Défi rejoué ».

### 4. Session : jeton opaque en cookie `HttpOnly`, révocable

Après une connexion ou une inscription réussie, le serveur tire un jeton de 32 octets et stocke son empreinte dans `sessions`, avec une expiration à 30 jours. Il le pose dans le cookie `zenote_session` : `HttpOnly; Secure; SameSite=Strict; Path=/api; Max-Age=2592000`. Le code de la page ne le lit jamais : il ne peut ni le fuiter ni le fabriquer.

`analyser/compte.ts` lit ce cookie, calcule son empreinte, lit `sessions`, vérifie l'expiration et que le compte existe encore, puis rend l'identifiant du compte. Tout écart rend `null`, ce qui déclenche le 401 existant.

La vérification vit dans un module partagé, `netlify/functions/partage/session.ts`, importé par les deux fonctions.

*Alternative écartée :* un jeton signé sans état (JWT, HMAC). La déconnexion et la suppression exigent une révocation, donc un état serveur de toute façon. Le jeton opaque évite en plus un secret de signature à gérer.

### 5. Contrefaçon : `SameSite=Strict` et contrôle d'origine

Toute requête qui modifie un état (`POST`) est refusée en 403 dans l'un de ces cas :
- son en-tête `Origin` diffère de l'origine attendue (décision 6) ;
- son type de contenu n'est pas `application/json`.

Avec `SameSite=Strict`, une page d'un autre site ne peut ni envoyer le cookie ni forger une requête acceptée.

### 6. Origine et identifiant de site tirés de l'environnement, jamais de la requête

La vérification WebAuthn exige l'origine attendue et l'identifiant de site (`rpID`). Ils sont pris dans les variables que Netlify pose à chaque déploiement :
- `URL` pour la production ;
- `DEPLOY_PRIME_URL` pour un aperçu.

Ils ne sont jamais tirés de l'en-tête `Host`, qu'un client contrôle.

Conséquence assumée : une clé d'accès créée sur la production ne sert pas sur un aperçu, dont le domaine diffère. Les aperçus se testent avec un compte créé sur l'aperçu. Leurs magasins Blobs sont ceux du site : un compte d'aperçu est un vrai compte, soumis au même quota.

### 7. Invitations et compte fondateur

Le premier compte se crée avec `ZENOTE_CODE_FONDATEUR`, une variable d'environnement que le propriétaire pose sur Netlify. Il est accepté seulement tant que `meta/administrateur` est absent, et crée un compte `ADMINISTRATEUR`. Sans cette variable, aucun compte ne peut naître, et l'appli se comporte exactement comme aujourd'hui.

Un administrateur crée ensuite des invitations depuis « Vos données » :
- code de 16 octets aléatoires, valable 7 jours, à usage unique ;
- montré une seule fois, sous la forme `https://<site>/#invitation=<code>`.

Le code voyage dans le fragment d'adresse, que le navigateur n'envoie jamais au serveur. Il n'apparaît donc pas dans les journaux de l'hébergeur. L'appli le lit, puis l'efface de l'adresse (`history.replaceState`).

Un code invalide reçoit la même réponse, quelle qu'en soit la raison : inconnu, utilisé ou expiré.

### 8. Quota : compter chaque appel au fournisseur, avant de l'appeler

Dans `traitement.ts`, après l'identification et avant `creerClient()`, une dépendance `quota` est consultée :
- `jour/<compte>/<date>` doit rester sous `ZENOTE_QUOTA_JOUR` (30 par défaut) ;
- `mois/<AAAA-MM>` doit rester sous `ZENOTE_PLAFOND_MOIS` (1000 par défaut).

Au-delà, la réponse est `429 { motif: 'quota-atteint', portee: 'jour' | 'mois' }`, avec `Retry-After` jusqu'au prochain jour ou mois en UTC.

Les deux compteurs sont incrémentés avant l'appel au fournisseur, qui est facturé même quand sa réponse est rejetée. Une valeur `0` suspend l'analyse pour tous sans redéploiement ; c'est l'interrupteur d'urgence.

Chaque incrément est une écriture conditionnelle à la version lue (ETag de Netlify Blobs, `onlyIfMatch`), rejouée quelques fois en cas de conflit, puis refusée : deux requêtes simultanées ne comptent pas pour une, et le quota ne se dépasse pas. Le compteur du mois, pris avant celui du jour, est rendu si c'est le jour qui refuse. Le même mécanisme (`onlyIfNew`) rend sûrs la consommation d'une invitation et la création du premier administrateur.

Côté appareil, le client traduit 429 en `QUOTA_ATTEINT`, un repli comme les autres. La Revue dit une fois que le service n'était pas disponible.

### 9. Fonction `compte` : même découpage que `analyser`

`netlify/functions/compte/` contient :
- `compte.mts` branche les vrais magasins et `@simplewebauthn/server` ;
- `traitement.ts` porte tout le comportement, avec ses dépendances injectées : magasins, vérificateur WebAuthn, horloge, aléa.

La fonction est routée sous `/api/compte/*` dans `netlify.toml`, avant le repli de la page unique :

| Route | Rôle |
| --- | --- |
| `POST /api/compte/inscription/options` | `{ invitation }` → options de création |
| `POST /api/compte/inscription` | réponse de la clé → compte créé et session ouverte |
| `POST /api/compte/connexion/options` | options d'assertion sans `allowCredentials` (clé découvrable) |
| `POST /api/compte/connexion` | réponse de la clé → session ouverte |
| `GET /api/compte/session` | `{ connecte, role }`, sans rien d'autre |
| `POST /api/compte/deconnexion` | révoque la session |
| `POST /api/compte/suppression` | supprime le compte |
| `POST /api/compte/invitation` | administrateur seulement → `{ lien, expire }` |

À l'inscription, l'invitation est vérifiée aux options, puis consommée seulement quand la clé est vérifiée. Une inscription abandonnée ne brûle pas le code.

Les réponses d'erreur ne portent qu'un `motif`, et les journaux que des motifs et des nombres, comme pour `analyser`.

### 10. Côté appareil : un état de compte en mémoire, rafraîchi

`app/src/compte/compte.ts` garde en mémoire `{ connecte, role }`, lu par `GET /api/compte/session` :
- au démarrage ;
- au retour sur l'onglet ;
- après chaque geste de compte.

`compteConnecte()` reste synchrone et rend cet état. Un 401 de `/api/analyser` le remet à « déconnecté ». Hors ligne, l'état est « inconnu », traité comme déconnecté : rien ne part, ce qui est de toute façon le cas hors ligne.

La connexion et la déconnexion écrivent toutes deux `analyseDistante = false` (spec « Consentement redemandé après connexion »). Seule la confirmation de l'interrupteur, affiché uniquement quand on est connecté, peut l'allumer.

Le client d'analyse ajoute `credentials: 'same-origin'`, pour que le cookie parte. Il n'envoie toujours rien d'autre que les passages.

Le bloc « Compte » de « Vos données » propose, selon l'état :
- déconnecté : « Se connecter » et « J'ai une invitation » ;
- connecté : « Se déconnecter », « Supprimer mon compte » (avec confirmation), et « Inviter quelqu'un » pour un administrateur.

« Ce qui quitte l'appareil » ajoute, une fois connecté, le fait « Un compte ZeNote existe » et ce que le serveur en garde.

### 11. Vérification : fonctions simulées en unitaire, vraies fonctions en bout-en-bout

**Vitest.** `compte/traitement.ts` est vérifié avec :
- des magasins en mémoire ;
- un vérificateur WebAuthn simulé ;
- une horloge fixée.

Un test réel d'`@simplewebauthn/server` n'apporterait rien de plus que ses propres tests.

**Bout-en-bout.** `tests/servir.mjs` sert les vraies fonctions `compte` et `analyser` :
- construites à la volée par esbuild, déjà présent via Vite ;
- avec des magasins en mémoire et le vrai `@simplewebauthn/server` ;
- face à l'authentificateur virtuel de Chromium.

Le parcours exerce l'inscription par code fondateur, la connexion, l'invitation, la déconnexion et la suppression. Le fournisseur TypeSafe y reste simulé.

La vérification réseau stricte reste en place :
- toute requête hors de l'origine échoue ;
- les requêtes vers `/api/compte/*` sont recensées, et aucune ne doit contenir de texte de note ;
- aucune requête `/api/analyser` ne part sans session et sans consentement.

## Risks / Trade-offs

- **[Toutes les clés d'accès d'un compte perdues]** → Le compte est perdu. On en crée un autre sur une nouvelle invitation, et aucune note n'est perdue. L'écran le dit à la création. Les clés synchronisées par le système couvrent la plupart des changements d'appareil.
- **[Écraser la clé du coffre]** → Identifiant utilisateur distinct et aléatoire (décision 2). Un test unitaire vérifie les options d'inscription, un scénario bout-en-bout vérifie que le coffre se rouvre.
- **[Forte concurrence sur un compteur]** → Les écritures conditionnelles échouent au-delà de quelques essais, et la requête est refusée plutôt que comptée deux fois. Le plafond mensuel et l'interrupteur `0` bornent le reste.
- **[Code fondateur connu d'un tiers avant usage]** → Il ne sert qu'une fois et seulement avant le premier administrateur. Il est à poser juste avant usage, à tirer au hasard, et à retirer ensuite (tâche de mise en service).
- **[Quotas du plan gratuit de Netlify (Blobs, invocations)]** → Quelques lectures par appel d'analyse et une poignée d'utilisateurs, très en deçà. Le plafond mensuel borne aussi le nombre d'appels.
- **[Aperçus de déploiement et vrais magasins]** → Un compte d'aperçu est un vrai compte, sous le même quota. C'est documenté ; pas de magasin par déploiement, qui rendrait la production et les aperçus incohérents.
- **[La promesse « rien ne sort » s'élargit]** → Les requêtes de compte partent vers la même origine, sans contenu. Le bout-en-bout les recense et vérifie leur contenu, et l'écran de confiance les dit.
- **[Dépendances nouvelles]** → Côté serveur, `@simplewebauthn/server` et `@netlify/blobs` restent hors du paquet de l'appli. Côté appareil, `@simplewebauthn/browser` entre dans le paquet ; `verifier-paquet.mjs` continue de n'y admettre ni SDK TypeSafe ni secret.

## Migration Plan

1. Livrer les fonctions et l'appli **sans** `ZENOTE_CODE_FONDATEUR`. Aucun compte ne peut naître, `/api/analyser` refuse tout, et l'appli se comporte comme aujourd'hui.
2. Poser `ZENOTE_CODE_FONDATEUR` (aléatoire) sur Netlify, redéployer, et créer le compte administrateur depuis « Vos données ». Retirer ensuite la variable.
3. L'analyse distante reste éteinte. L'allumer n'a de sens qu'avec une clé TypeSafe ; l'évaluation (tâche 5.3 d'`analyse-typesafe`) peut alors être menée avec le compte administrateur.
4. Inviter d'autres utilisateurs si l'on veut.

**Retour arrière** : mettre `ZENOTE_QUOTA_JOUR=0`, ce qui suspend toute analyse sans redéploiement, ou revenir à la version précédente. `compte.ts` n'identifie alors plus personne. Les magasins Blobs restent, sans effet, et se vident depuis l'interface de Netlify.

## Open Questions

- Les valeurs par défaut du quota (30 par jour et par compte) et du plafond (1000 par mois) se règlent par variables d'environnement, sans effet sur la structure. Elles seront ajustées après l'évaluation, quand le coût réel par appel sera connu.
