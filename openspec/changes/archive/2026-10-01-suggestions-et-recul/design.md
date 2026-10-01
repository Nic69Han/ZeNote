# Design

## Context

- `passePertinent` (`app/src/services/echos.ts`) rend `Echo { captureId, extrait, pourquoi }` ; `capturer.ts` n'affiche que l'extrait, pendant `DUREE_RAPPEL_PASSE_MS`, puis l'efface. Aucune action n'est proposée : la spec `recherche` de `zenote-core` exige une suggestion ignorable.
- `echosDe` alimente en Revue « Cette note renvoie à quelque chose. S'agit-il de : » avec `pourquoi` par piste : la raison y est déjà.
- Un élément fait porte `faitLe` ; un élément abandonné porte `faitLe` **et** `verdict: 'REJETE'` (`abandonner`, `services/rappels.ts`) ; « un jour » = `verdict: 'UN_JOUR'`. `aRevoirObjets` (cœur) rend ce qui n'avance plus (écarté trois fois, dormant).
- Les écrans en retrait sont déclarés dans `ECRANS_RETRAIT` (`main.ts`).

## Decisions

### 1. Utilisée ou ignorée : un signal honnête

Pour le passé pertinent, qui ne propose aucune action, on ajoute à la ligne un lien « Voir » (ouvre la capture citée dans la recherche, par personne ou par extrait). **Utilisée** = « Voir » touché ; **ignorée** = effacée sans avoir été touchée. Pour les pistes d'échange, utilisée = une piste choisie ; ignorée = la carte décidée sans choisir de piste. On ne compte rien d'autre : ni temps passé, ni défilement.

### 2. Retenue par sorte, dans les réglages

`retenue: Record<Sorte, { ignoreesDAffilee: number; presentationsSautees: number }>` avec `Sorte = 'PASSE_PERTINENT' | 'PISTES_ECHANGE'`. Ce ne sont que des compteurs, pas du contenu : les réglages non scellés conviennent. `doitPresenter(sorte)` : intervalle 1 sous 3 ignorées, 2 de 3 à 5, 4 de 6 à 8, 8 au-delà ; `noterIgnoree`, `noterUtilisee` (remise à zéro), `revenirAuRythmeNormal`. Fonctions pures sur l'état, testées sans base.

Les pistes d'échange sont une question, pas une interruption : la retenue n'y cache jamais une piste déjà choisie (`captureLiee`), elle n'espace que la proposition.

### 3. La semaine, calculée, pas stockée

`services/semaine.ts` : `bilan(elements, jusquA, jours = 7)` → `{ avance: [], lache: [], bloque: [] }` : avancé = `faitLe` dans la période et verdict différent de `REJETE` ; lâché = abandonné dans la période, ou passé à « un jour » (on ne connaît pas la date du passage à « un jour » : on retient `vuLe` ou `planPoseLe` quand ils tombent dans la période, sinon on s'abstient) ; bloqué = ce qu'`aRevoirObjets` rend aujourd'hui. Chaque ligne cite le texte de l'élément et, pour « bloqué », le motif du cœur.

Vocabulaire : titres « Ce qui a avancé », « Ce que vous avez lâché — c'est aussi décider », « Ce qui n'avance plus ». Un groupe vide dit « Rien cette semaine. », sans commentaire. Aucune couleur d'alerte.

Réglage `semaineVueLe: string | null`. La Revue affiche une ligne « Votre semaine, en deux minutes » avec un lien quand la dernière consultation date de 7 jours ou plus (ou jamais, dès qu'une semaine d'usage existe) ; ouvrir l'écran pose `semaineVueLe`.

## Risks / Trade-offs

- Un « Voir » ajouté transforme une ligne sans action en ligne avec action ; elle reste ignorable et s'efface seule.
- L'écran semaine peut sembler vide la première semaine : il le dit simplement.
