# Design

## Context

Voir `proposal.md`. La file `FileOpportunite` porte déjà les deux règles :
- `deposer` rend `Livraison.Immediate` pour un critique ;
- `vider` rend `null` dans une plage de silence.

Mais `Regles.rappels` crée la file sans plage et ignore les livraisons immédiates. La surface appelle `rappels` ou `rappelsAvecAgenda`, et présente le résultat dans une bande à la reprise, à la fin d'une réunion (guet minute par minute) et en Revue.

## Goals / Non-Goals

**Goals :** faire tenir sur la surface web « Plage de silence respectée » et « Rappel critique immédiat », sans réécrire la file.

**Non-Goals :**
- Des notifications système quand l'application est fermée : une page web ne se réveille pas seule, et c'est déjà dit.
- Plusieurs plages de silence, ou une plage par jour de la semaine : une plage quotidienne suffit à la promesse, et le reste peut attendre.

## Decisions

### 1. Les plages sont calculées par la surface, en heure locale, et passées au cœur

Le réglage `silence` vaut `{ debut: 'HH:MM', fin: 'HH:MM' }` ou `null`. Pour un instant donné, la surface produit au plus deux plages concrètes, en `AAAA-MM-JJTHH:MM` locale :
- celle qui a commencé la veille ;
- celle qui commence le jour même.

Une plage qui passe minuit (22:00–07:00) finit le lendemain. Le cœur les reçoit en `silencesJson` et construit `FileOpportunite(silences)`. Il ne connaît ni réglage ni fuseau, comme pour l'agenda.

### 2. Critique : marqué à la main, ou poids fort échu

`ElementJson.critique` (booléen, `false` par défaut, lu sans erreur s'il manque) est posé par « Ajuster » en Revue, avec `corrigeParHumain`, ce qui le protège de la ré-analyse. Le cœur construit `Rappel(critique = element.critique || (poids == FORT && echeance <= date de l'instant))`.

C'est la seule lecture de « conséquence immédiate » qui ne devine rien : le poids fort est déjà l'expression d'une conséquence, et l'échéance du jour la rend immédiate.

### 3. Les critiques sont livrés avec la notification, jamais retenus

`Regles.rappels` collecte les `Livraison.Immediate` rendues par `deposer`, et les livre même quand `vider` rend `null` (plage de silence) ou n'est pas appelé (réunion en cours). La sortie reste **une** notification :
- critiques d'abord, puis la file vidée ;
- titre recalculé sur l'ensemble.

Cela garde « une notification par point de rupture ». Chaque `RappelLivreJson` porte `critique`.

Quand la plage retient la file, `silenceJusqua` donne la fin de la plage en cours, et `retenus` compte ce qui attend, comme pour une réunion.

### 4. La fin de la plage est guettée comme la fin d'une réunion

`main.ts` guette déjà chaque minute la fin d'une réunion, application visible. Le même guet présente les rappels quand l'heure de fin de la plage est atteinte, une fois par jour. Application fermée, la reprise suivante les présente : c'est le comportement actuel.

### 5. Une entrée JS de plus, les anciennes intactes

`rappelsAvecContexte(elements, maintenant, suivis, evenements, silences)` s'ajoute au pont. `rappels` et `rappelsAvecAgenda` restent, et rendent exactement la même chose qu'avant sans plage ni critique : un test le vérifie.

## Risks / Trade-offs

- **[Un critique présenté à chaque reprise tant qu'il n'est pas traité]** → C'est voulu. Il compte comme ignoré à chaque fois, et s'escalade au troisième comme les autres.
- **[Poids fort échu trop souvent critique]** → Seuls les éléments qui portent un plan sont des rappels. Le poids se corrige en Revue, et la case « Critique » ne force que le cas manuel.
- **[Changement d'heure]** → Les plages sont en heure murale locale, comme l'agenda. Une plage mal alignée d'une heure un jour par an est acceptable.
