# Tasks

Les groupes suivent le Migration Plan de `design.md`. Prérequis : la change `analyse-typesafe` est archivée, ou au moins son groupe 6 est livré (c'est le cas sur `main`). Une case n'est cochée que lorsqu'un test nommé la couvre.

## 1. Fondations côté serveur

- [x] 1.1 Ajouter `@simplewebauthn/server` et `@netlify/blobs` à `netlify/package.json`, et `@simplewebauthn/browser` à `app/package.json`. Vérifier que `npm ci --prefix netlify` et `tsc` passent, et que `verifier-paquet.mjs` passe sur le paquet construit (aucun SDK serveur ni secret dans `dist/`).
- [x] 1.2 Écrire les magasins de la décision 3 derrière une interface injectable :
  - une implémentation Netlify Blobs en cohérence forte ;
  - une implémentation en mémoire pour les tests.
  Stocker uniquement les empreintes SHA-256 des défis, jetons et codes. Vérifier par un test qu'aucun secret n'est écrit en clair dans un magasin.
- [x] 1.3 Écrire `netlify/functions/partage/session.ts` (décision 4) :
  - lire le cookie `zenote_session` ;
  - comparer son empreinte à celles des sessions stockées ;
  - vérifier l'expiration et que le compte existe encore.
  Vérifier par des tests « Session fabriquée », « Session expirée », session d'un compte supprimé, et cookie absent ou malformé.

## 2. Fonction `compte`

- [x] 2.1 Écrire `netlify/functions/compte/traitement.ts`. Il porte les contrôles communs de la décision 5 : `POST` seulement pour ce qui modifie un état, `Origin` égale à l'origine attendue (décision 6, tirée de `URL` et `DEPLOY_PRIME_URL`), JSON seulement. Il porte aussi les réponses `{ motif }` et le journal sans contenu. Vérifier par un test « Requête venue d'un autre site » (403, rien ne change) et que le journal ne porte que des motifs et des nombres.
- [x] 2.2 Écrire l'inscription (`inscription/options`, `inscription`) selon les décisions 2 et 7 :
  - invitation ou code fondateur vérifiés aux options, consommés à la vérification ;
  - `user.id` aléatoire, jamais `zenote` ;
  - vérification de l'utilisateur exigée ;
  - premier compte `ADMINISTRATEUR` et `meta/administrateur` posé.
  Vérifier par des tests « Compte créé avec une invitation », « Invitation invalide » (même réponse pour inconnue, utilisée et expirée), « Premier compte avec le code fondateur » (le code est ensuite refusé), inscription abandonnée qui ne brûle pas le code, et options qui ne portent jamais l'identifiant du coffre.
- [x] 2.3 Écrire la connexion (`connexion/options`, `connexion`) : clé découvrable, défi à usage unique supprimé dès sa présentation, compteur de la clé mis à jour, session ouverte en cookie `HttpOnly; Secure; SameSite=Strict; Path=/api`. Vérifier par des tests « Connexion sur un nouvel appareil », « Clé d'accès inconnue », « Défi rejoué », et les attributs exacts du cookie.
- [x] 2.4 Écrire `session`, `deconnexion` et `suppression`. `session` rend `{ connecte, role }` et rien d'autre. La déconnexion révoque la session. La suppression efface le compte, ses clés, ses sessions et ses compteurs. Vérifier par des tests « Déconnexion » (le cookie est effacé et la session ne vaut plus) et « Suppression confirmée » (plus rien du compte dans aucun magasin, et la clé ne connecte plus).
- [x] 2.5 Écrire `invitation`, réservée à un administrateur : code de 16 octets, valable 7 jours, stocké en empreinte, rendu une fois sous forme de lien à fragment. Vérifier par des tests « Invitation créée » et « Invitation refusée à un compte ordinaire ».
- [ ] 2.6 Brancher `compte.mts` sur les vrais magasins et `@simplewebauthn/server`, et ajouter la route `/api/compte/*` dans `netlify.toml` avant le repli de la page unique. Vérifier avec `netlify dev` que `GET /api/compte/session` rend `{ "connecte": false }` et qu'un `POST` sans `Origin` est refusé. — *vérifié sur l'aperçu de déploiement plutôt qu'avec `netlify dev`, absent de l'environnement ; consigné en 6.3*

## 3. Analyse distante : compte réel et quota

- [x] 3.1 Brancher `analyser/compte.ts` sur `partage/session.ts`. Vérifier par `fonction-analyser.test.ts` :
  - une session valide passe l'identification ;
  - « en production, un jeton quelconque n'identifie personne » reste vrai ;
  - le 401 intervient toujours avant la création du client et la lecture du corps.
- [x] 3.2 Ajouter la dépendance `quota` à `traitement.ts` selon la décision 8 : contrôle et incrément avant l'appel au fournisseur, `ZENOTE_QUOTA_JOUR` (30 par défaut) et `ZENOTE_PLAFOND_MOIS` (1000 par défaut), `0` qui suspend tout, et `429 { motif: 'quota-atteint', portee }` avec `Retry-After`. Vérifier par des tests « Quota quotidien atteint », « Plafond mensuel atteint », « Compteurs sans contenu », l'interrupteur `0`, et un appel échoué du fournisseur qui compte quand même.

## 4. Appareil

- [x] 4.1 Réécrire `app/src/compte/compte.ts` selon la décision 10 : état en mémoire lu par `GET /api/compte/session` au démarrage, au retour sur l'onglet et après chaque geste, et remis à « déconnecté » sur un 401 d'analyse ; `compteConnecte()` reste synchrone. Vérifier par un test d'unité qui simule `fetch` : connecté, déconnecté, hors ligne (vaut déconnecté), et 401 d'analyse.
- [x] 4.2 Écrire les gestes de compte avec `@simplewebauthn/browser` : créer un compte depuis une invitation, se connecter, se déconnecter, supprimer, inviter. Lire le code d'invitation dans le fragment `#invitation=` puis l'effacer de l'adresse. Vérifier par un test d'unité que le fragment est lu puis retiré, et que les requêtes de compte ne portent que ce que la spec permet. — *`tests/compte.test.ts` ; le fragment est aussi lu sur `hashchange`, pour un lien ouvert dans un onglet déjà ouvert (bout-en-bout)*
- [x] 4.3 Consentement redemandé : la connexion et la déconnexion écrivent `analyseDistante = false`. L'interrupteur n'apparaît qu'une fois connecté, et garde la confirmation existante. Le client d'analyse ajoute `credentials: 'same-origin'` et traduit 429 en `QUOTA_ATTEINT` (repli). Vérifier par des tests « Réglage ancien ignoré », « Déconnexion » (de `analyse-distante`), et le client pour 429.
- [x] 4.4 Ajouter le bloc « Compte » dans « Vos données » (décision 10), avec l'avertissement « sans ses clés d'accès, un compte ne se récupère pas ; vos notes, elles, restent ici ». Ajouter à « Ce qui quitte l'appareil » le fait « Un compte ZeNote existe » et ce que le serveur en garde. Vérifier dans `tests/bout-en-bout.mjs` « Aucune identité demandée » et « Ce que le serveur sait, dit à l'écran ».

## 5. Bout-en-bout et promesse réseau

- [x] 5.1 Faire servir par `tests/servir.mjs` les vraies fonctions `compte` et `analyser`, construites par esbuild, avec des magasins en mémoire et un fournisseur TypeSafe simulé (décision 11). Vérifier que le parcours actuel reste vert sans compte.
- [x] 5.2 Ajouter au bout-en-bout, avec l'authentificateur virtuel de Chromium, le parcours complet :
  - création par code fondateur ;
  - « Compte créé sur un appareil au coffre protégé par l'appareil » : le coffre se rouvre ensuite ;
  - invitation, déconnexion, puis connexion ;
  - analyse distante allumée après confirmation (« Allumage après connexion ») : une seule requête, portant la session et que des passages ;
  - « Compte supprimé » : le coffre et les notes restent.
  Vérifier que les scénarios nommés passent.
- [x] 5.3 Réviser la vérification réseau : toute requête hors de l'origine échoue toujours ; les requêtes `/api/compte/*` sont recensées et ne contiennent aucun texte de note, audio, événement ou identifiant de capture (« Requêtes de compte inspectées ») ; aucune requête `/api/analyser` sans session et consentement. Vérifier que le bout-en-bout passe en entier.

## 6. Mise en service et clôture

- [x] 6.1 Réécrire le commentaire des en-têtes de `netlify.toml` et la section concernée du `README.md` (variables `ZENOTE_CODE_FONDATEUR`, `ZENOTE_QUOTA_JOUR`, `ZENOTE_PLAFOND_MOIS` ; création du premier compte ; retrait du code fondateur après usage). Vérifier que `openspec validate comptes-utilisateurs --strict` passe et que le README décrit les étapes 2 à 4 du Migration Plan.
- [x] 6.2 Mettre à jour `analyse-typesafe` : la note de la tâche 5.3 renvoie à cette change comme levée de la condition bloquante, et la décision 9 renvoie à celle-ci. Vérifier par `openspec validate analyse-typesafe --strict`.
- [ ] 6.3 Après déploiement, sur le site publié, vérifier à la main que `GET /api/compte/session` rend `{ "connecte": false }`, qu'un `POST /api/analyser` sans session rend 401, et, une fois le compte administrateur créé, que l'analyse distante reste éteinte jusqu'à sa confirmation. Consigner le résultat dans cette tâche.
