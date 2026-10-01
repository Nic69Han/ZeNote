# Design

## Context

- `lecteurAudio(capture)` (`app/src/ui/lecteur.ts`) rend un `<audio controls>` chargé à l'ouverture du repli, avec `allerA(ms)`. Il est utilisé par Revue, Maintenant et Recherche : l'améliorer une fois les améliore partout.
- L'audio est un `Blob` (MediaRecorder, souvent `audio/webm;codecs=opus`) déchiffré à la lecture.
- La recherche (`app/src/ui/recherche.ts`) affiche `ReponseJson` du cœur : énoncé, citations (`captureId`, `elementId`, extrait, pourquoi). Le repère temporel **de la question** existe (`RepereTemporel.kt`) ; les repères **de la frise** n'existent pas.
- Le lexique est stocké en une ligne scellée d'un magasin dédié, rescellée à l'activation du coffre (`reecrireLexique`). C'est le modèle à suivre.

## Decisions

### 1. Vitesse : `playbackRate` et `preservesPitch`

Trois boutons sous le lecteur (1×, 1,5×, 2×). La vitesse vit dans les réglages (`vitesseEcoute: 1 | 1.5 | 2`, 1 par défaut) : ce n'est pas un contenu de note. `preservesPitch = true` : une voix accélérée qui monte dans l'aigu se comprend mal.

### 2. Silences : carte de sauts, pas réécriture de l'audio

`audio/silences.ts` : `silences(echantillons: Float32Array, frequence, { seuil, dureeMin = 0.7, garde = 0.3 }) → { debut, fin }[]` par énergie RMS sur fenêtres de 20 ms, seuil relatif au niveau de parole (percentile). Le lecteur décode le blob une fois (`AudioContext.decodeAudioData`) quand l'interrupteur est allumé, puis, pendant la lecture, saute de `debut + garde/2` à `fin - garde/2` (surveillance par `requestAnimationFrame`). L'audio d'origine n'est jamais modifié ni réécrit. Si le décodage échoue, l'interrupteur se désactive avec « Silences non détectables pour cet enregistrement » ; la lecture reste possible.

*Alternative écartée* : produire un nouvel audio sans silences. Il faudrait le stocker ou le recalculer, et les positions `debutMs` des éléments ne correspondraient plus.

### 3. Repères tirés des notes seulement

`services/reperes.ts` : `reperesDepuis(captures, elements) → Repere[]` avec `Repere { jour, libelle, sorte: 'REUNION' | 'DECISION' | 'PREMIERE_MENTION' }` :
- réunion : capture issue de l'enregistrement de réunion ou d'un compte rendu importé ;
- décision : élément `DECISION` accepté ;
- première mention : premier jour où un interlocuteur apparaît.

`situer(jour, reperes) → string | null` choisit le repère le plus proche à ±3 jours (à égalité, le plus ancien) et formule « le jour de … », « la veille de … », « deux jours après … ». Pas de repère proche → rien (on n'affiche pas une date déguisée). Libellés : texte de la décision ou de la réunion tronqué à 50 caractères, cité entre guillemets. La réponse affiche aussi, au-dessus des citations, une frise compacte des jours concernés avec les repères de la période.

Pas d'agenda : l'arbitrage du produit l'autorise mais il n'est pas branché, et un repère inventé serait pire qu'aucun.

### 4. Recherches passées : magasin scellé, version 4

`MAGASIN_RECHERCHES = 'recherches'`, une ligne `{ id: 'recherches', scelle }` contenant `{ requete, mode: 'MOTS' | 'PERSONNE', derniereFois, fois }[]`, au plus 20, dédoublonnées sur la requête normalisée (casse, espaces). Rescellée à l'activation du coffre comme le lexique. Incluse dans « Tout effacer » et dans l'export (`recherches`). Sous les champs : les 5 plus récentes, un appui relance, un bouton « Oublier » par ligne et « Tout oublier ». Une question sans réponse fondée est retenue aussi : c'est souvent celle qu'on repose.

## Risks / Trade-offs

- Décodage lourd d'un long enregistrement de réunion → décodage à la demande seulement, résultat gardé pour la session.
- Migration 3 → 4 : `onupgradeneeded` ne crée que le magasin manquant ; test de montée de version avec des données existantes.
