# Design

## Context

Voir `proposal.md` pour le pourquoi, et `specs/agenda/spec.md` pour le comportement attendu.

État actuel, relevé dans le code :

- **Le cœur modélise déjà l'agenda sans rien recevoir.**
  - `EvenementConnu` (id, titre, début, fin, lieu, participants, récurrent) existe dans `rappels/Declencheur.kt`.
  - Il en va de même pour `Declencheur.Personne`, `Declencheur.Evenement`, `Declencheur.EvenementRecurrent` et les points de rupture `FIN_DE_REUNION` et `FIN_DE_CRENEAU`.
  - `Briefings.avant(evenement, memoire, elements)` et `ContexteAgenda` sur la capture source (`model/Source.kt`) existent aussi.
  - Aucune fonction de l'API JS (`api/Regles.kt`) ne prend d'événements en entrée.
- **`Echeancier.quand(declencheur, poseLe)`** ne reconnaît que « ce soir », « demain matin » et une date. Tout autre signal devient `Echeance.Substituee(SIGNAL_NON_OBSERVABLE)`, ramené à la reprise de l'appareil.
- **`Regles.rappels`** construit chaque rappel sur `Transition(REPRISE_APPAREIL)` et vide la file sur ce seul point de rupture. Côté surface, `rappelsDuPointDeRupture` (`app/src/services/rappels.ts`) est appelé au démarrage et après trente minutes d'absence (`main.ts`).
- **`Priorisation.classer`** trie par poids, puis par urgence. `ContexteMaintenant` ne contient que `aujourdhui`. Aucun élément ne porte de durée, ni dans le cœur ni dans `ElementJson`.
- **Base IndexedDB en version 3.** Elle compte cinq magasins ; les notes sont scellées quand le coffre est actif (`sceller`/`ouvrir` dans `depot.ts`).
- **Pas de réseau.** Le bout-en-bout échoue sur toute requête vers un autre hôte. L'analyse distante est éteinte par défaut.
- **Construction du cœur.** Elle passe par Gradle (`scripts/sync-core-js.sh`) et dépose le JS dans `app/vendor/zenote-core/`. En session cloud, Maven Central a déjà répondu 429. La CI, elle, construit le cœur.
- **Horloge.** Playwright 1.63 offre `page.clock`, ce qui rend vérifiables en bout-en-bout « dans deux minutes » et « à la fin de la réunion ».

## Goals / Non-Goals

**Goals:**
- Un agenda lu une fois, sur l'appareil, et consulté partout où le cœur en attend un. Les règles (quel signal, quand, pour qui) restent dans le cœur, lecture `.ics` exceptée.
- Aucune régression sans agenda : chaque chemin retombe exactement sur le comportement actuel.
- Chaque scénario de `specs/agenda/spec.md` vérifié par un test nommé ; ceux qui dépendent de l'heure le sont sous horloge simulée.

**Non-Goals:**
- **Abonnement par URL.** Il faudrait relayer l'adresse secrète de l'agenda et son contenu par la fonction Netlify, ce qui est une révision de la promesse réseau. Voir Open Questions.
- **Écriture dans l'agenda, invitations, réponses.** `zenote-core` le limite à la lecture seule.
- **Adaptation à l'appareil utilisé** (volet « appareil » de 5.4). Aucun élément ne dit de quel appareil il a besoin, et le déduire d'un mot (« imprimer », « Excel ») serait deviner. 5.4 sera cochée sur son volet temps, avec cet écart écrit.
- **Budget d'autonomie** (5.14). Une page web n'a aucune mesure de consommation à rattacher à ZeNote. Seul le volet « mode dégradé sans agenda » est tenu.
- **Plages de silence déduites de l'agenda.** Sans notification, il n'y a rien à taire. Hors périmètre.

## Decisions

### 1. Fichier `.ics` importé à la main, lu par un lecteur maison

L'import passe par un `<input type="file" accept=".ics,text/calendar">` dans « Vos données ». Le lecteur est écrit dans `app/src/agenda/ics.ts`, sans dépendance :
- dépliage des lignes ;
- `VEVENT` : `UID`, `SUMMARY`, `DTSTART`, `DTEND` ou `DURATION`, `LOCATION`, `ATTENDEE` (`CN=` ou adresse), `ORGANIZER`, `RRULE`, `EXDATE`, `RECURRENCE-ID`, `STATUS:CANCELLED` ;
- `RRULE` pour `DAILY`, `WEEKLY` (`BYDAY`) et `MONTHLY` (`BYMONTHDAY`, ou `BYDAY` avec rang), avec `INTERVAL`, `COUNT` et `UNTIL`.

Tout le reste est compté comme non compris et dit à l'écran. Un événement récurrent non compris garde sa seule occurrence d'origine (spec, « Récurrence non comprise »).

*Pourquoi maison.* ical.js ferait plus, mais ajouterait environ 80 ko à une application qui n'a aucune dépendance d'exécution hors du cœur. Le sous-ensemble ci-dessus couvre ce que produisent Google Agenda et Outlook pour des réunions de travail. Le reste est dit, jamais deviné.

*Alternative écartée.* Lire l'agenda dans le cœur Kotlin. Les futures surfaces natives liront l'agenda du système, pas un fichier. Le lecteur `.ics` est donc propre à la surface web, et le cœur ne reçoit que des événements déjà développés.

### 2. Fuseaux résolus sur l'appareil, heure locale transmise au cœur

- Une date `…Z` est prise en temps universel.
- Une date avec `TZID=` est convertie par `Intl.DateTimeFormat`, qui connaît les fuseaux IANA : l'heure murale est convertie en instant par ajustement itératif du décalage. Les noms Windows qu'utilise Outlook (« Romance Standard Time ») passent par une petite table vers IANA.
- Une date flottante, sans fuseau, est prise dans le fuseau de l'appareil.
- Un événement « toute la journée » (`VALUE=DATE`) est importé, mais ne compte jamais comme réunion.

Les occurrences sont remises au cœur en heure locale de l'appareil (`AAAA-MM-JJTHH:MM`), la convention de `maintenantLocal()` et de `Regles.rappels`, qui lisent déjà l'heure locale comme un instant UTC. Le cœur n'a donc jamais de fuseau à connaître.

### 3. Horizon, stockage, fraîcheur

- **Horizon.** Les occurrences sont développées de la veille de l'import jusqu'à 60 jours après, puis stockées développées : aucune règle de récurrence n'est rejouée à l'usage.
- **Stockage.** Nouveau magasin `evenements` en version 4 de la base, avec une ligne par occurrence. Une ligne `agenda` dans `reglages` porte `importeLe`, `couvreJusquA`, `lus` et `ecartes`. Le titre, le lieu et les participants sont scellés comme le contenu d'une note quand le coffre est actif ; seuls l'identifiant et les bornes horaires restent en clair, pour l'index par date.
- **Réimport.** Il vide le magasin puis écrit, dans une seule transaction (spec, « Réimport »).
- **Fraîcheur.** Sont considérés comme absents les événements hors de `[importeLe − 1 jour, couvreJusquA]`. Au-delà de sept jours depuis l'import, la Revue affiche une ligne unique invitant à réimporter.
- **Export.** L'agenda n'y figure pas : c'est une copie d'une source externe, réimportable, et non une donnée de l'utilisateur. Le `lisezMoi` de l'export le dit.

### 4. Durée estimée : un nouveau dérivé, dans le cœur et dans l'analyse

- `ElementJson` gagne `duree` (`COURTE` ≈ 5 min, `MOYENNE` ≈ 20 min, `LONGUE` ≈ 60 min ou plus, ou `null`), `dureeConfiance` et `dureeIndice`, au même titre que le poids.
- L'analyse locale les déduit du verbe :
  - `COURTE` : envoyer, répondre, confirmer, valider, transmettre, réserver, appeler, rappeler, relancer ;
  - `LONGUE` : préparer, rédiger, analyser, concevoir, relire un document, écrire ;
  - un nombre de minutes ou d'heures explicite (« 10 minutes », « deux heures ») prime.
- Sans indice, la durée reste `null`.
- Le formulaire « Ajuster » de la Revue gagne un choix de durée. Une durée corrigée porte `dureeConfiance: 1`, et `corrigeParHumain` la protège déjà de la ré-analyse (`remplacerElements`).
- Côté cœur, `ElementJson` et `ElementDerive` gagnent la durée. Sur la surface, l'analyse distante n'y touche pas : elle ne juge que le type et la sphère.

*Pourquoi trois paliers.* Une estimation en minutes serait faussement précise, comme le score continu que la décision 5 de `zenote-core` refuse. Trois paliers suffisent à décider « tient ou ne tient pas » dans un créneau.

### 5. Maintenant : un contexte d'agenda transmis au classement

`ContexteMaintenant` gagne :
- `minutesAvantProchaineReunion: Int?` ;
- `libelleProchaineReunion: String?` ;
- `sortieDeSequenceMinutes: Int?` : la durée de la dernière séquence de réunions enchaînées, si elle vient de se terminer.

Une nouvelle entrée de l'API, `maintenantAvecContexte(elementsJson, contexteJson)`, laisse `maintenant(elementsJson, aujourdhui)` intact. Les règles, dans `Priorisation` :
- **Filtre de temps.** Avec `minutesAvantProchaineReunion = m`, un élément ne reste que si sa durée est sûre (confiance ≥ `SEUIL_CONFIANCE`) et tient dans `m` : `COURTE` si `m < 20`, `MOYENNE` ou moins si `m < 60`. Une durée inconnue n'est gardée que si `m ≥ 30`.
- **Récupération.** Si `sortieDeSequenceMinutes ≥ 180` et que la séquence s'est terminée il y a moins de 45 minutes, seuls les éléments `COURTE` sûrs restent.
- **Classement.** L'ordre entre les éléments restants ne change pas (poids, puis urgence). Le créneau protégé n'est pas proposé pendant un créneau court ni pendant la récupération.
- **Réponse.** Elle dit la raison du filtre (« 7 minutes avant “Point équipe” : seuls les éléments courts ») et le nombre d'éléments écartés, pour que Maintenant puisse dire « rien qui tienne » (spec, « Rien qui tienne »).

Une réunion, pour ces règles, est un événement minuté, non annulé, qui n'est pas « toute la journée ». Deux réunions sont enchaînées si moins de 15 minutes les séparent.

*Alternative écartée.* Filtrer côté surface. Le classement appartient au cœur (décision 5 de `zenote-core`). Les natives devront appliquer les mêmes règles avec l'agenda du système.

### 6. Échéancier : reconnaître un signal dans les événements

`Echeancier.quand` gagne un paramètre `evenements: List<EvenementConnu>`, vide par défaut, ce qui garde le comportement actuel.
- **« je vois *X* ».** C'est le premier événement futur, après `poseLe`, dont un participant ou le titre nomme *X*. La comparaison se fait en texte plié, et le nom complet prime sur le prénom seul, selon la règle de `Resolution`. L'échéance devient `Observable` cinq minutes avant le début.
- **« avant *titre* » ou « au prochain *titre* ».** C'est la première occurrence future dont le titre plié contient *titre*.
- **Fin de réunion.** Un rappel devenu actionnable pendant une réunion n'est livré qu'au point de rupture `FIN_DE_REUNION` de cette réunion, et marqué en retard. `Regles.rappels` reçoit les événements (`evenementsJson`, paramètre ajouté) et vide la file sur `FIN_DE_REUNION` si `maintenant` suit de moins de 30 minutes la fin d'une réunion, sur `REPRISE_APPAREIL` sinon.
- **Sans correspondance.** Le signal reste `Substituee`. L'explication dit alors « aucun événement de l'agenda ne concerne Karim » au lieu de « l'agenda n'est pas branché » (spec, « Personne absente de l'agenda »).

Le déclencheur reste une phrase, sans migration de `planDeclencheur`. La Revue propose en plus « Avant “Point équipe” » pour les événements des sept prochains jours qui concernent l'interlocuteur de l'élément.

### 7. Moments de réunion : une fonction du cœur, un bandeau de surface

Nouvelle entrée de l'API : `momentsDeReunion(evenementsJson, maintenant, capturesJson, elementsJson, rattachesJson)`. Les captures et les éléments servent à reconstruire la mémoire du briefing ; les rattachés portent les dépôts et les captures déjà faites pour une réunion. Elle rend au plus un moment de chaque sorte, l'après d'abord :
- `AVANT` : une réunion commence dans 10 minutes ou moins. Le moment porte le briefing (`Briefings.avant`, rendu en JSON avec les fiches) et, à 2 minutes ou moins, la proposition de dépose.
- `APRES` : une réunion s'est terminée il y a 60 minutes ou moins, et aucune autre ne commence dans les 5 minutes. Le moment porte la dépose faite avant, s'il y en a une, et la proposition de vidage rattachée.
- Si une réunion suit immédiatement, le moment `APRES` est reporté à la fin de l'enchaînement (spec, « Proposition non intrusive »).

Côté surface, Maintenant affiche ce moment en tête, dans un bandeau. Il est recalculé à l'ouverture, au retour sur l'onglet (`visibilitychange`) et chaque minute tant que l'écran est visible.
- **Dépose.** C'est une capture écrite ou dictée courte, marquée `depose: evenementId`. Elle vit comme une capture ordinaire, analysée et en Revue, et le bandeau `APRES` la rend telle quelle.
- **Vidage.** Il ouvre la capture avec `agenda: { evenementId, titre, participants }` déjà posé. Il ne démarre jamais le micro : l'utilisateur appuie (spec, « Aucun enregistrement implicite »).
- **Rattachement.** Toute capture faite pendant une réunion, ou dans les 15 minutes qui suivent sa fin, porte `agenda`, qui rejoint `Capture` sur la surface (`ContexteAgenda` existe déjà dans le cœur).

### 8. Vérification sous horloge simulée

- Unitaires : lecteur `.ics` (fuseaux, récurrences, annulations, fichier illisible) ; stockage (réimport, effacement, scellement) ; règles du cœur (tests Kotlin JVM et JS, comme aujourd'hui) ; enveloppes TS.
- Bout-en-bout : un `.ics` est généré au lancement, relativement à une horloge figée par `page.clock.install`. Il est importé par le vrai champ de fichier, puis l'horloge est avancée pour traverser « 7 minutes avant », « 2 minutes avant », « fin de réunion » et « sortie de trois heures de réunions ». La vérification réseau stricte reste en place et couvre le parcours avec agenda.

## Risks / Trade-offs

- **[L'agenda vieillit entre deux imports]** → La couverture est affichée, un avertissement unique est donné à sept jours, et rien n'est déduit au-delà. Si le réimport pèse à l'usage, c'est l'argument pour l'abonnement par URL (Open Questions).
- **[Récurrences ou fuseaux mal compris décalent une réunion]** → Seul un sous-ensemble est accepté, le reste est compté et affiché. Fixtures réelles exportées de Google Agenda et d'Outlook dans les tests, avec un fuseau Windows. Un événement dont la date ne se résout pas est écarté, pas approximé.
- **[Sans notification, les moments de réunion passent inaperçus si l'application est fermée]** → Assumé et écrit dans « Vos données », comme la limite actuelle des rappels. Le moment `APRES` reste visible une heure pour qu'une réouverture tardive le trouve encore.
- **[Heuristique de durée trop grossière]** → Durée inconnue plutôt que devinée, correction en un geste, et seuil de confiance. Un élément de durée inconnue n'est simplement pas proposé dans un créneau court. L'usage réel (8.3) dira si les paliers tiennent.
- **[Faux positif « je vois Marc » sur un autre Marc]** → Même règle que la mémoire : le nom complet prime, et un prénom seul partagé par deux personnes connues n'accroche rien, en le disant.
- **[Le cœur doit être reconstruit, et Maven Central a déjà répondu 429 en session cloud]** → Les tâches du cœur passent en premier. Leur vérification exige `sync-core-js.sh` et les tests Kotlin. Si la construction reste impossible, l'application est arrêtée et signalée, sans recopier les règles en TypeScript.
- **[La base passe en version 4]** → La migration ne fait qu'ajouter un magasin, sans toucher aux magasins existants. Test de montée depuis une base v3 remplie.

## Migration Plan

1. Cœur : durée dans le modèle, `maintenantAvecContexte`, `Echeancier` et `rappels` avec événements, `momentsDeReunion`. `maintenant` et `rappels` gardent leur comportement quand aucun événement n'est passé.
2. Surface sans écran : lecteur `.ics`, magasin `evenements` (v4), durée dans l'analyse locale.
3. Écrans : bloc « Agenda » dans « Vos données », Maintenant (filtre et bandeau), Revue (durée ajustable, déclencheurs d'agenda, avertissement de fraîcheur), rattachement des captures.
4. Bout-en-bout sous horloge simulée, puis cocher dans `zenote-core` 5.4 (volet temps), 5.5, 6.1 et 6.2, en renvoyant aux tests. 5.14 est notée pour son volet dégradé.

Retour arrière : effacer l'agenda ramène exactement au comportement antérieur. Le magasin v4 vide est inerte.

## Open Questions

- **Abonnement par URL.** Faut-il, plus tard, relire un agenda par son adresse secrète iCal via la fonction Netlify, éteint par défaut et avec le même consentement que l'analyse distante ? À trancher après quelques semaines d'usage, selon ce que coûte le réimport manuel. Cela ne change ni cette spec ni ces tâches : ce serait une autre source pour le même magasin.
- **Paliers de durée et seuils de temps** (20/60 minutes, 3 heures, 45 minutes de récupération). Ce sont des valeurs de départ. L'usage réel peut les ajuster sans changer la spec.
