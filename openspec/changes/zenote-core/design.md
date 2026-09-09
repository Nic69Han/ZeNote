## Context

Voir `proposal.md` — Why. Le dépôt est vide : aucune contrainte technique héritée, tout est arbitrable. Les contraintes qui pèsent réellement sur l'architecture sont celles de l'usage :

- **La capture est sacrée.** Elle doit démarrer en moins de 300 ms, fonctionner écran verrouillé et sans réseau, et ne jamais perdre une seconde d'audio. Cela impose un chemin de capture totalement découplé de tout le reste : pas d'appel réseau, pas d'accès à la base de contexte, pas de modèle, pas de rendu complexe.
- **Tout le reste peut attendre.** Transcription, extraction, résolution de contexte, replanification sont asynchrones et rejouables. Aucune de ces étapes n'est sur le chemin critique d'une interaction utilisateur.
- **L'IA se trompe.** Une extraction est une hypothèse, pas un fait. L'architecture doit rendre toute déduction annulable et traçable jusqu'au passage source, et doit permettre de rejouer une analyse quand le modèle ou le contexte s'améliore.
- **Un utilisateur, deux appareils.** Pas de multi-tenant, pas de collaboration, pas de temps réel partagé. Cela autorise une architecture nettement plus simple qu'un produit d'équipe.

### Fondements de recherche

Le produit n'est pas une liste de fonctionnalités : chaque mécanique répond à un résultat de recherche précis. Ce tableau est la justification des specs et doit être relu avant toute décision de conception qui les remettrait en cause.

| Résultat | Ce qu'il implique | Où c'est appliqué |
|---|---|---|
| **Effet de simple urgence** — à importance égale ou supérieure, on choisit la tâche urgente ([Zhu, Yang & Hsee 2018](https://academic.oup.com/jcr/article-abstract/45/3/673/4847790)) | Trier par échéance reproduit le biais du cerveau au lieu de le corriger | `priorisation` : poids et échéance séparés, créneau protégé pour l'important non urgent |
| **Le plan ferme la boucle** — un plan quand/où supprime les pensées intrusives aussi bien que l'exécution ([Masicampo & Baumeister 2011](https://users.wfu.edu/masicaej/MasicampoBaumeister2011JPSP.pdf)) | Une tâche sans plan reste une charge mentale ; c'est le plan, pas la note, qui libère | `revue` : aucune tâche ne sort de la Revue sans plan, « un jour » ou suppression |
| **Intentions d'implémentation** — « quand X, je fais Y » améliore fortement la mémoire prospective, y compris sous forte charge attentionnelle ([Gollwitzer ; McDaniel et al. 2008](http://pham315.pbworks.com/f/McDaniel+2008.pdf)) | Le déclencheur vaut mieux que l'heure | `rappels` : formulation « quand *signal*, je fais *action* » |
| **Rappels contextuels** — lieu, personne, activité battent l'alarme horaire pour les tâches situées ([Place-Its](https://www.researchgate.net/publication/221568777_Place-Its_A_Study_of_Location-Based_Reminders_on_Mobile_Phones)) | Le signal doit être ancré dans le monde | `rappels` : lieu, personne, événement d'agenda, transition |
| **Délestage cognitif** — on externalise selon sa *confiance*, pas selon son besoin réel ([Risko & Gilbert 2016](https://samgilbert.net/pubs/Risko2016TiCS.pdf) ; [Gilbert et al. 2020](https://samgilbert.net/pubs/Gilbert2020JEPG.pdf)) | Le bénéfice ne vient que si l'utilisateur *croit* que rien ne se perdra | `capture` : confirmation après écriture durable, garantie de non-perte |
| **Coût de l'interruption et résidu attentionnel** — reprise coûteuse, attention qui reste accrochée à la tâche quittée ([Mark et al. 2008](https://ics.uci.edu/~gmark/chi08-mark.pdf) ; [Leroy 2009](https://www.sciencedirect.com/science/article/abs/pii/S0749597809000399)) | Un plan de reprise avant de basculer réduit le résidu | `reunions` : dépose avant, reprise après |
| **Points de rupture** — une interruption arrivant à une frontière de sous-tâche coûte beaucoup moins ([Iqbal & Bailey](https://dl.acm.org/doi/10.1145/1240624.1240732)) | Différer une notification jusqu'à la transition suivante | `rappels` : livraison aux points de rupture, regroupement |
| **Externalisation situationnelle (GTD)** — le cerveau s'appuie sur l'environnement comme mémoire externe et déclencheur ([Heylighen & Vidal 2008](https://researchportal.vub.be/en/publications/getting-things-done-the-science-behind-stress-free-productivity)) | Séparer capture et organisation ; exécution opportuniste | Séparation capture / Revue / Maintenant |
| **Les gens savent prioriser** — ils ont des stratégies affûtées ; ce qui manque c'est la saisie et le rappel ([Bellotti et al. 2004](https://dl.acm.org/doi/10.1145/985692.985785)) | Ne pas construire un moteur de priorité prescriptif : proposer, justifier, laisser trancher | `priorisation` : proposition justifiée, jamais imposée |
| **Initiative mixte** — agir sous incertitude, minimiser le coût d'une mauvaise supposition ([Horvitz 1999](https://www.microsoft.com/en-us/research/publication/principles-mixed-initiative-user-interfaces/)) | Seuil de confiance, question plutôt qu'action, annulation systématique | `extraction` : seuil de confirmation ; `memoire` : ambiguïté posée en question |
| **Mémoire d'agent : pertinence + récence + importance** ([Generative Agents](https://arxiv.org/abs/2304.03442) ; [MemGPT](https://arxiv.org/abs/2310.08560) ; [A-MEM](https://arxiv.org/pdf/2502.12110)) | Un contexte sélectionné bat un historique complet, et coûte moins cher | `memoire` : récupération bornée par ces trois axes, consolidation périodique |
| **Agent de remémoration** — surfaçage périphérique et non intrusif du passé pertinent ([Rhodes](https://p13i.io/posts/2020/05/living-with-remembrance-agent/)) | Suggérer sans interrompre | `recherche` : rappel proactif discret et ignorable |
| **Leçon MyLifeBits** — tout capturer rend tout introuvable ([Gemmell & Bell](https://dl.acm.org/doi/10.1145/1107458.1107460)) | Refus explicite du journal de vie ; consolidation et décroissance | Non-objectifs ; `memoire` : consolidation et oubli |
| **Transcription et disfluences** — la reconnaissance vocale robuste ne rend pas un texte lisible ; le nettoyage est une étape distincte et faillible ([Whisper](https://cdn.openai.com/papers/whisper.pdf)) | Garder le brut comme référence, le nettoyé comme vue | `transcription` : conservation de la source |
| **Comptes rendus de réunion par modèle** — l'extraction d'actions est utile mais hallucine ; l'ancrage dans l'énoncé source est ce qui rend la sortie utilisable ([Recap system, PACM HCI 2025](https://arxiv.org/html/2307.15793)) | Aucun élément sans passage source | `extraction`, `reunions` : traçabilité obligatoire |

## Goals / Non-Goals

**Goals**

- Un chemin de capture isolé, testable seul, dont la latence et la durabilité sont mesurées à chaque version.
- Un pipeline d'analyse asynchrone, idempotent et **rejouable** : toute capture peut être ré-analysée sans effet de bord ni doublon.
- Un modèle de données où la capture brute est immuable et où tout ce que produit l'IA est une couche dérivée, jetable et reconstructible.
- Un socle métier unique partagé entre mobile et bureau, pour que la logique de priorisation ne diverge jamais entre les surfaces.
- Un coût d'analyse par capture maîtrisé et mesuré, la capture étant gratuite et illimitée.

**Non-Goals (niveau conception)**

- Pas d'inférence embarquée sur appareil en v1 pour l'extraction : trop coûteux en complexité pour le gain, hors cas où l'utilisateur refuse la transmission (voir décision 6).
- Pas de temps réel ni de collaboration : la synchronisation peut être en secondes, pas en millisecondes.
- Pas de moteur de règles configurable par l'utilisateur : la priorisation est expliquée, pas paramétrable.
- Pas d'intégration bidirectionnelle avec un gestionnaire de tâches tiers en v1 (lecture d'agenda seulement).

## Decisions

### 1. Local-first, la capture ne dépend de rien

**Choix.** Écriture locale durable immédiate (audio + entrée de file), confirmation émise après `fsync`. Tout le reste est une file de travail rejouée en arrière-plan.

*Alternative écartée* : envoi direct au serveur avec transcription en flux. Plus simple à écrire, mais la capture devient dépendante du réseau et de la latence — c'est exactement la promesse du produit qu'on casse. Retenu seulement comme optimisation opportuniste quand le réseau est déjà bon, jamais comme chemin nominal.

### 2. La capture brute est immuable ; tout le reste est dérivé

**Choix.** Trois couches distinctes :

- **Source** (immuable) : audio, transcription brute, horodatage, lieu, contexte d'agenda au moment de la capture.
- **Dérivé** (reconstructible) : transcription nettoyée, éléments extraits, champs déduits, liens vers la mémoire — chacun portant sa version de modèle, sa version de prompt et sa confiance.
- **Décidé par l'humain** (autorité) : toute correction, validation ou saisie de l'utilisateur, qui prime sur le dérivé et n'est jamais écrasée par une ré-analyse.

Une ré-analyse recalcule la couche dérivée sans jamais toucher aux deux autres. C'est ce qui rend le produit améliorable dans le temps : quand le modèle progresse, l'historique en profite.

*Alternative écartée* : un seul objet « note » modifié en place par l'IA. Impossible à corriger, à auditer, à rejouer.

### 3. Analyse en deux temps : rapide puis approfondie

**Choix.** Un premier passage court dès la transcription (type d'intention, découpage en segments, entités évidentes) pour que la Revue soit prête ; un second passage plus riche avant la Revue (résolution contre la mémoire, poids, plan proposé, rapprochement avec l'existant), groupé sur toutes les captures en attente pour partager le contexte.

Cela réduit le coût — le contexte de mémoire est chargé une fois pour tout le lot — et améliore la qualité : les captures d'une même journée s'éclairent mutuellement.

*Alternative écartée* : une analyse riche par capture, à la volée. Coût plus élevé, contexte plus pauvre, et aucune valeur pour l'utilisateur avant la Revue.

### 4. Mémoire : recherche hybride avec récence et importance

**Choix.** Un index vectoriel local **et** un index lexical, agrégés par un score combinant pertinence, récence et importance — importance dérivée du poids, de la fréquence de mention et de la présence d'engagements ouverts. Une synthèse par entité, régénérée quand l'entité change substantiellement, sert de contexte compact.

*Alternative écartée* : purement vectoriel. Échoue sur les noms propres, les acronymes et les identifiants — précisément le vocabulaire du manager. *Alternative écartée* : envoyer tout l'historique. Coût prohibitif et qualité dégradée par le bruit.

### 5. Poids par conséquence, sur une échelle grossière

**Choix.** Trois niveaux de poids seulement (`fort`, `moyen`, `faible`), déduits d'indices explicites (conséquence pour un tiers, irréversibilité, engagement pris, montant, effet en cascade), jamais demandés à l'utilisateur, toujours corrigeables en Revue. La justification affichée cite l'indice retenu.

*Alternative écartée* : score continu. Faussement précis, invérifiable par l'utilisateur, et impossible à justifier en une ligne.

### 6. Traitement distant par défaut, refus possible par capture

**Choix.** L'analyse s'exécute côté serveur, avec un interrupteur par capture et par sphère. Une capture marquée non transmissible reste capturée, transcrite localement si la plateforme le permet, consultable et recherchable — sans extraction. La reconnaissance vocale embarquée sert de repli hors ligne et pour ces captures.

*Alternative écartée* : tout embarqué. Qualité d'extraction et de résolution de contexte insuffisante pour tenir la promesse produit, sur un besoin — comprendre des sous-entendus — qui est justement ce qui demande le plus de capacité.

### 7. Un socle métier partagé, des interfaces natives

**Choix.** Un cœur unique (modèle de données, synchronisation, moteur de priorisation, file de travail) partagé entre les surfaces, avec des interfaces natives à chaque plateforme là où la latence et l'intégration système comptent — capture, widget, écran verrouillé, raccourci global.

Le choix précis de technologie (langage du cœur, encapsulation par plateforme) est arbitré à la première tâche d'implémentation, sur un prototype qui mesure la latence de capture. C'est cette mesure, pas une préférence, qui doit trancher.

### 8. Modèle de langage : capable par défaut, petit modèle pour le volume

**Choix.** Un modèle capable pour l'extraction, la résolution de contexte et la Revue — c'est là que se joue la qualité perçue. Un modèle plus petit et moins cher pour le volume mécanique : nettoyage des disfluences, découpage en segments, détection de sphère. Sorties structurées imposées et validées par schéma ; tout élément non rattachable à un passage source est rejeté avant d'atteindre l'utilisateur.

### 9. Notifications : une file d'opportunité, pas un déclencheur horaire

**Choix.** Les rappels non critiques entrent dans une file d'opportunité vidée à la détection d'un point de rupture (fin d'événement d'agenda, changement de lieu significatif, déverrouillage après inactivité), avec au plus une notification par point de rupture. Un rappel critique court-circuite la file.

*Alternative écartée* : notification à l'heure due. Reproduit le défaut des rappels existants — arriver au pire moment et être balayé.

## Risks / Trade-offs

| Risque | Mitigation |
|---|---|
| **L'extraction se trompe et l'utilisateur perd confiance** — le risque numéro un ; une seule tâche inventée coûte plus que dix bonnes extractions | Ancrage obligatoire dans le passage source ; seuil de confiance qui transforme le doute en question ; correction en un geste ; la source reste intacte |
| **La Revue devient une corvée et l'utilisateur décroche** | Plafond de temps assumé (2 min) ; acceptation groupée quand la confiance est haute ; arriéré regroupé par thème et jamais présenté comme une dette ; aucune notification culpabilisante |
| **La capture se dégrade** (latence, perte) et le produit perd sa raison d'être | Chemin de capture isolé de tout le reste ; latence et durabilité mesurées à chaque version ; le retour de confirmation vient de l'écriture, pas de l'intention |
| **Le coût par capture dérape** | Analyse groupée avec contexte partagé ; petit modèle pour le volume ; contexte borné par la sélection pertinence/récence/importance ; coût mesuré par capture dès le premier prototype |
| **Trop de contexte tue le contexte** (leçon MyLifeBits) | Consolidation par entité ; décroissance des éléments dormants ; refus du journal de vie |
| **Le lieu et l'agenda en continu épuisent la batterie et inquiètent** | Géorepérage à faible fréquence sur un petit nombre de lieux ; agenda lu en local ; chaque signal désactivable individuellement, le produit restant utilisable sans aucun d'eux |
| **La reconnaissance vocale échoue sur le vocabulaire métier** | Vocabulaire personnel issu de la mémoire ; apprentissage des corrections ; marquage des passages incertains plutôt que fausse certitude |
| **Divergence de logique entre mobile et bureau** | Moteur de priorisation dans le socle partagé, jamais réimplémenté par surface |
| **Le produit dérive vers un gestionnaire de projet** | Les non-objectifs du `proposal.md` sont une contrainte de conception : toute demande qui les rouvre passe par un nouveau change |

## Migration Plan

Produit neuf, aucune migration de données. La séquence de mise en service est en revanche une contrainte de conception :

1. **Prototype de capture seul**, mesuré : latence de démarrage, durabilité sous arrêt brutal, autonomie. S'il ne tient pas, l'architecture de capture est revue avant toute autre chose.
2. **Capture + transcription + file consultable.** À ce stade le produit est déjà utilisable comme dictaphone fiable — c'est le premier palier de valeur, et le premier test de confiance.
3. **Extraction + Revue**, sans aucun rappel automatique. L'utilisateur juge la qualité des propositions sans risque.
4. **Maintenant + rappels**, une fois la qualité d'extraction jugée suffisante sur des captures réelles.
5. **Réunions et rappel proactif** en dernier, car ces mécaniques ne valent que sur une mémoire déjà nourrie.

Repli : chaque palier reste utile si le suivant est abandonné. Le produit ne devient jamais inutilisable par la désactivation d'une couche haute.

## Open Questions

Ces points peuvent être tranchés pendant l'implémentation sans remettre en cause les specs ni le découpage des tâches :

- Le seuil de confiance déclenchant la confirmation doit être calibré sur des captures réelles ; l'ordre de grandeur initial et le mode de réglage sont à déterminer à l'usage.
- La durée au-delà de laquelle une attente envers un tiers est relancée doit-elle être apprise par personne dès la v1, ou partir d'une valeur unique puis s'affiner ?
- Le nombre et le rayon des lieux géorepérés utiles avant que le coût en batterie ne dépasse le bénéfice.
- La fréquence de régénération des synthèses par entité, arbitrée entre fraîcheur et coût.
