# Proposal

## Why

L'analyse de ZeNote est aujourd'hui un analyseur à règles lexicales (`app/src/analyse/`), marqué dans le code comme **provisoire, destiné à être remplacé par un appel à un modèle**. Il ne reconnaît une intention que si une amorce figée apparaît, et sa confiance est une constante choisie à la main, pas une mesure. La conception de `zenote-core` (décision 6) a retenu une analyse distante par défaut, jamais branchée : les scénarios qui en dépendent sont « non tenus » dans `verification.md`.

TypeSafe (modèle Jev) répond exactement à ce besoin : des jugements typés avec une confiance calibrée, qui correspondent déjà à la forme `Deduit(valeur, confiance, indice)` du cœur. Cette change branche TypeSafe sur le seul passage rapide, pour mesurer avant d'étendre.

## What Changes

- **Nouveau** : un service d'analyse distante, exposé par une fonction serveur (Netlify Functions), qui interroge TypeSafe en **un seul appel par capture** et rend, pour chaque passage, son type d'élément et sa sphère avec leur confiance.
- **Nouveau** : la clé d'API TypeSafe vit uniquement côté serveur. La PWA n'en connaît ni la valeur ni l'existence.
- **Nouveau** : l'interrupteur « non transmissible », par capture et par sphère (tâche 7.1 de `zenote-core`). **Il est un prérequis bloquant** : aucune transmission n'est possible tant qu'il n'existe pas.
- **Modifié** : l'analyseur local cesse d'être le seul chemin et devient le **repli** quand le service est indisponible, non configuré, ou quand la capture ne doit pas sortir. La tâche 7.6 de `zenote-core` prend alors un objet réel.
- **Modifié** : chaque élément porte la confiance de son type et de sa sphère, et l'origine de son analyse (locale ou distante, avec la version du modèle).
- **BREAKING (promesse produit)** : « aucune donnée ne quitte l'appareil » cesse d'être vrai pour toutes les captures. Le test bout-en-bout qui le vérifie est révisé délibérément : il reste strict pour les captures non transmissibles, et une vérification nouvelle limite ce qui sort à l'unique point d'analyse déclaré. Les en-têtes et l'écran de confiance qui affirment le contraire sont mis à jour.
- **Nouveau** : une évaluation obligatoire sur un lot de captures françaises réelles, comparant TypeSafe à l'analyseur local. Le français n'est pas la langue principale de Jev. **Le passage à l'analyse distante par défaut en dépend**, ainsi que le recalibrage du seuil de 0,75.

Hors périmètre, et laissés tels quels : les échéances (restent dans `dates.ts`, Jev étant documenté comme faible sur les dates), le plan d'exécution (génération de texte), le poids, la résolution contre la mémoire, la recherche.

## Capabilities

### New Capabilities
- `analyse-distante` : ce que le service d'analyse distante fait et ne fait pas — transmission conditionnée au consentement, jugements typés avec confiance, frontière de la clé d'API, repli sur l'analyse locale, garde-fou d'ancrage, et critère d'activation par évaluation.

### Modified Capabilities
Aucune. Les exigences touchées — `extraction` (classification, confiance) et `donnees` (périmètre transmis, dépendance externe) — sont déjà écrites dans `zenote-core` et restent inchangées ; cette change les **réalise** au lieu de les modifier. Elles ne sont pas encore dans `openspec/specs/`, `zenote-core` n'étant pas archivée.

## Impact

- **Code** : `app/src/services/pipeline.ts` (`analyserCapture` choisit le chemin), `app/src/analyse/` (devient le repli), `app/src/core/regles.ts` (champs de confiance et d'origine sur `ElementJson`), `app/src/stockage/depot.ts` (marquage non transmissible), écran de capture et réglages (les deux interrupteurs), écran de confiance.
- **Nouveau code serveur** : `netlify/functions/` et une dépendance `@typesafe-ai/sdk` côté fonction uniquement, jamais dans le paquet de la PWA.
- **Configuration** : variable `TYPESAFE_API_KEY` sur l'hébergeur. **Aucune clé n'existe encore** : l'implémentation doit fonctionner sans, en retombant sur l'analyse locale.
- **Tests** : `tests/bout-en-bout.mjs` (révision de la vérification réseau), nouveaux tests du choix de chemin, de la correspondance réponse → élément, et du repli.
- **Déploiement** : `netlify.toml` (fonction, en-têtes), et le commentaire qui y affirme que l'application ne transmet rien.
- **Coût et dépendance** : un service tiers payant à l'usage entre dans le chemin d'analyse ; la tâche 8.4 de `zenote-core` (coût par capture) devient mesurable.
