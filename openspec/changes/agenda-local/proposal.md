# Proposal

## Why

L'agenda est la seule source externe prévue par `zenote-core`, et il n'est pas branché. Une douzaine de scénarios restent donc non tenus dans `verification.md` :
- le créneau court, le contexte inadapté et la journée dense (`priorisation`) ;
- « quand je vois Marc », le rappel avant un événement récurrent, le report à la fin de la réunion et le briefing (`rappels`) ;
- la dépose, la reprise et le vidage (`reunions`).

Aujourd'hui, un plan comme « quand je vois Karim » est ramené à la reprise de l'appareil, en le disant. Les tâches 5.4, 5.5, 5.14, 6.1 et 6.2 attendent toutes cette lecture.

Une PWA ne peut pas lire l'agenda du téléphone. Elle peut en revanche lire un fichier `.ics`, que tout agenda sait exporter, sans service payant et sans que rien ne quitte l'appareil.

## What Changes

- **Import d'agenda** : l'utilisateur importe un fichier `.ics` depuis « Vos données ». Les événements sont lus sur l'appareil, récurrences comprises, sur un horizon borné. Ce qui n'est pas compris est compté et dit, jamais deviné.
- **Stockage local** : les événements vivent dans IndexedDB, scellés quand le coffre est actif, et sont remplacés à chaque réimport. L'agenda s'efface d'un geste. Rien n'est envoyé nulle part, et la vérification réseau du bout-en-bout reste stricte.
- **Fraîcheur dite** : l'écran dit quand l'agenda a été importé et jusqu'à quelle date il couvre. Au-delà, aucun signal n'est inventé : le comportement actuel reprend, et un agenda périmé est signalé une fois en Revue.
- **Durée estimée d'un élément** : nouveau champ dérivé (environ 5, 20 ou 60 minutes, ou inconnue), avec confiance et indice, corrigeable en Revue. Sans lui, « seuls les éléments réalisables en moins de sept minutes » n'a pas de sens.
- **Maintenant selon l'agenda** : avant la prochaine réunion, seuls les éléments dont la durée estimée tient dans le temps restant sont proposés. Après une longue séquence de réunions, seuls les éléments courts le sont.
- **Déclencheurs observables** : « quand je vois X » s'accroche au prochain événement où X participe, « avant le point du lundi » à la prochaine occurrence, et la fin d'une réunion devient un point de rupture. Un signal toujours absent de l'agenda reste substitué, en le disant, comme aujourd'hui.
- **Briefing, dépose et vidage** : avant une réunion, l'application montre ce qui est ouvert avec ses participants et propose une dépose. Après, elle rend la dépose et propose une capture déjà rattachée à la réunion, reportée si l'utilisateur enchaîne.
- **Contexte d'agenda de la capture** : une capture faite pendant ou juste après une réunion porte cette réunion (`ContexteAgenda`, déjà dans le modèle du cœur).

## Capabilities

### New Capabilities

- `agenda` : import d'un agenda `.ics` sur l'appareil, sa conservation, sa fraîcheur, et les signaux qu'il fournit au classement, aux rappels et aux rituels de réunion, y compris la durée estimée des éléments qui les rend utilisables.

### Modified Capabilities

Aucune spec n'est archivée dans `openspec/specs/`. Les exigences de `priorisation`, `rappels` et `reunions` que cette change rend observables sont celles de la change `zenote-core`, non archivée. Elles ne changent pas : elles deviennent tenues sur la surface web. Les tâches correspondantes de `zenote-core` seront cochées en renvoyant aux tests de cette change.

## Impact

- **Cœur Kotlin** (`core/`) : classement selon un contexte d'agenda ; `Echeancier` capable de reconnaître un signal d'agenda ; exposition du briefing et des moments de réunion (dépose, reprise, vidage) dans l'API JS ; durée estimée dans le modèle dérivé. Le JS vendu dans `app/vendor/zenote-core/` est à régénérer par `scripts/sync-core-js.sh`.
- **PWA** (`app/`) :
  - lecteur `.ics` (sans dépendance) ;
  - nouveau magasin IndexedDB, avec passage à la version 4 de la base ;
  - bloc « Agenda » dans « Vos données » ;
  - Maintenant, Revue et capture qui lisent l'agenda ;
  - champ de durée dans le formulaire d'ajustement ;
  - tests unitaires et bout-en-bout, horloge simulée comprise.
- **Aucun service externe, aucun coût** : pas de réseau, pas de dépendance serveur. La fonction Netlify n'est pas concernée.
- **Limites assumées** :
  - L'agenda n'est aussi frais que le dernier import. L'abonnement par URL est laissé en question ouverte (voir `design.md`).
  - Sans notification application fermée, les moments de réunion ne sont vus que si l'application est ouverte ou rouverte à temps.
  - L'adaptation à l'appareil utilisé (5.4) et le budget d'autonomie (5.14) restent hors de portée d'une page web.
