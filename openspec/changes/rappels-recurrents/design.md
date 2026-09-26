# Design

## Context

Voir `proposal.md`. `Echeancier.quand` rend une `Echeance` : `Observable` (un instant) ou `Substituee` (ramené à la reprise). `Regles.rappels` dépose dans la file tout rappel dont l'échéance « est arrivée ». Pour un `Observable`, c'est vrai pour toujours une fois l'instant passé.

## Decisions

### 1. Une troisième forme d'échéance, faite de fenêtres

`Echeance.Recurrente(fenetres)`. Chaque fenêtre porte trois instants :
- `quand` : cinq minutes avant le début ;
- `enRetardApres` : le début ;
- `fin` : trente minutes après la fin, la même sortie que la fin de réunion de `agenda-local`.

`estArrive` est vrai seulement dans une fenêtre. C'est ce qui fait « revenir avant chaque occurrence » sans rien stocker : l'occurrence suivante a sa propre fenêtre.

*Alternative écartée* : reposer le plan après chaque occurrence. Cela demande d'écrire dans la base depuis le calcul des rappels, qui est aujourd'hui pur.

### 2. Récurrent si l'événement l'est, et si le signal ne dit pas « prochain »

La récurrence vient de l'agenda (`recurrent`, posé à la lecture du `.ics` quand l'occurrence naît d'une `RRULE`), pas d'une devinette sur la phrase. Seul « prochain » limite explicitement à une fois. Les occurrences retenues sont celles du même titre, et du même jour de la semaine quand le signal en nomme un.

### 3. L'escalade s'applique comme ailleurs

Un rappel récurrent écarté trois fois s'escalade en Revue, comme tout rappel. C'est le signe qu'il n'est plus à sa place.

## Risks / Trade-offs

- **[Fenêtre manquée]** Application fermée pendant toute la fenêtre : le rappel de cette semaine n'est pas vu. Il revient à l'occurrence suivante ; c'est la limite, déjà dite, d'une page qui ne se réveille pas seule.
