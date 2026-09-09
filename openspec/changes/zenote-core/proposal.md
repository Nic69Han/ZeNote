## Why

Un manager surbooké n'a pas de problème de mémoire : il a un problème de **coût de capture** et de **coût de décision**. Il ne note pas parce que noter coûte 30 secondes et une décision de rangement au moment exact où il n'en a ni le temps ni la disponibilité mentale ; et quand il regarde sa liste, il attaque ce qui crie le plus fort plutôt que ce qui compte le plus — un biais documenté (« mere urgency effect », [Zhu, Yang & Hsee 2018](https://academic.oup.com/jcr/article-abstract/45/3/673/4847790)).

ZeNote attaque les deux : **capturer coûte un geste et zéro décision**, **décider est fait une fois par jour sur 2 minutes**, et **savoir quoi faire maintenant est une seule vue à trois lignes**. Tout le reste — transcription, compréhension, rattachement au bon projet, planification, rappel — est porté par le système, jamais par l'utilisateur au moment de la capture.

Le pari central est un principe issu de la recherche sur la mémoire prospective : ce n'est pas la note qui libère l'esprit, c'est **le plan attaché à la note** (quand / où / à quel signal). Un plan spécifique supprime les pensées intrusives liées à une tâche inachevée aussi efficacement que de l'avoir faite ([Masicampo & Baumeister 2011](https://users.wfu.edu/masicaej/MasicampoBaumeister2011JPSP.pdf)). Une note sans plan est une dette mentale ; une note avec plan est une dette payée.

## What Changes

Création du produit ZeNote (greenfield). Il n'existe pas de code : ce changement définit le comportement complet du produit v1.

**Trois surfaces, pas une de plus.** Toute fonctionnalité qui ne tient pas dans l'une des trois est hors périmètre v1.

1. **Capturer** — un geste, zéro champ, zéro choix. Appui long → on parle → on relâche → c'est enregistré. Fonctionne hors ligne, écran verrouillé, en marchant, en voiture. Équivalent clavier sur PC (raccourci global). Le retour est immédiat et explicite : *« c'est à moi maintenant, tu peux oublier »*.
2. **La Revue** — un rendez-vous quotidien de 2 minutes, le seul moment où l'utilisateur range. Le système présente ce qu'il a compris de chaque capture brute ; l'utilisateur valide, corrige ou reporte d'un geste. Le rangement est **groupé et différé**, jamais imposé au moment de la capture.
3. **Maintenant** — une vue qui répond à une seule question : *quoi faire là, tout de suite*. Trois éléments maximum, dont un créneau structurellement réservé à l'important-non-urgent.

**Les capacités de fond, invisibles :**

- **Transcription fidèle puis nettoyée**, l'audio d'origine et la transcription brute étant conservés et consultables — aucune reformulation par l'IA n'est irréversible.
- **Mémoire de contexte** : une note dictée en 4 secondes (« voir avec Marc pour le budget avant vendredi ») est résolue contre la mémoire du système — quel Marc, quel budget, quel projet, quel vendredi — avec un niveau de confiance explicite et une demande de confirmation en dessous d'un seuil.
- **Rappels situés** plutôt que rappels horaires : « quand je vois Marc », « en arrivant au bureau », « avant le point du lundi ». Fondé sur les intentions d'implémentation ([Gollwitzer](http://pham315.pbworks.com/f/McDaniel+2008.pdf)) et les rappels contextuels ([Place-Its](https://www.researchgate.net/publication/221568777_Place-Its_A_Study_of_Location-Based_Reminders_on_Mobile_Phones)).
- **Livraison aux points de rupture** : les rappels et suggestions arrivent aux transitions (fin de réunion, arrivée, déplacement), pas au milieu d'une tâche ([Iqbal & Bailey](https://dl.acm.org/doi/10.1145/1240624.1240732), [Mark et al. 2008](https://ics.uci.edu/~gmark/chi08-mark.pdf)).
- **Mode réunion** : 20 secondes avant (« je pose ce que j'ai en tête »), 40 secondes après (« je vide »), pour absorber le résidu attentionnel du changement de tâche ([Leroy 2009](https://www.sciencedirect.com/science/article/abs/pii/S0749597809000399)).
- **Priorisation par conséquence**, pas par priorité inventée : l'utilisateur ne choisit jamais « P1/P2/P3 » ; le système déduit le poids de ce qui se passe si ce n'est pas fait, et le confirme en Revue.
- **Une seule vie** : perso et pro dans le même flux de capture, séparés par contexte à la restitution, jamais par deux applications.

**Ce que ZeNote ne fait pas (v1)** — refus explicites, pour tenir la promesse de simplicité :

- pas d'enregistrement continu ni de journal de vie (leçon [MyLifeBits](https://dl.acm.org/doi/10.1145/1107458.1107460) : tout capturer rend tout introuvable) ;
- pas d'éditeur de documents, pas de wiki, pas de liens bidirectionnels, pas de dossiers ;
- pas de collaboration, de partage ni de multi-utilisateur ;
- pas de tableaux de bord de productivité ni de statistiques de complétion ;
- pas de sous-tâches, dépendances, estimations ni gestion de projet.

## Capabilities

### New Capabilities

- `capture` : entrée vocale et écrite sans friction ni décision, disponible partout et hors ligne, avec une garantie de non-perte.
- `transcription` : conversion parole → texte, nettoyage des disfluences, conservation de l'audio et du texte brut.
- `extraction` : compréhension d'une capture (intention, tâches, engagements, échéances, personnes) avec traçabilité vers le passage source et confiance explicite.
- `memoire` : mémoire personnelle persistante (personnes, projets, sujets récurrents, décisions) et résolution des références implicites d'une note.
- `revue` : la boucle de validation humaine quotidienne — file de captures non traitées, propositions du système, correction d'un geste.
- `priorisation` : calcul et présentation de l'ordre de travail, avec protection explicite de l'important-non-urgent.
- `rappels` : rappels temporels et situés (lieu, personne, événement, transition), livrés à un moment opportun.
- `reunions` : rituels d'avant et d'après réunion, et traitement d'un compte rendu ou d'une transcription de réunion.
- `recherche` : retrouver une note, un engagement ou une décision par le langage naturel, y compris hors ligne.
- `donnees` : propriété des données, chiffrement, fonctionnement hors ligne, export, suppression, et périmètre de ce qui est envoyé au modèle.

### Modified Capabilities

Aucune : le dépôt ne contient aucune spécification existante.

## Impact

- **Nouveau produit** : dépôt vide aujourd'hui (seul l'outillage agent est en place). Ce changement crée l'intégralité du périmètre fonctionnel v1.
- **Surfaces** : application mobile (capture, revue, maintenant, rappels) et application de bureau/web (capture par raccourci global, revue, recherche). Le téléphone est la surface de capture primaire, le PC la surface de traitement.
- **Dépendances externes** : un moteur de reconnaissance vocale, un modèle de langage pour l'extraction et la résolution de contexte, un magasin de données local chiffré, une synchronisation entre appareils. Les choix techniques sont arbitrés dans `design.md`.
- **Contraintes fortes** : la capture doit fonctionner sans réseau et sans latence perceptible ; aucune donnée ne doit être perdue même si la transcription ou l'extraction échoue ; toute action du système sur les données de l'utilisateur doit être annulable.
- **Hypothèses à confirmer** (consignées, non bloquantes) : utilisateur unique, français comme langue principale avec anglais en second, plateformes iOS et Web/desktop en premier, traitement IA côté serveur avec possibilité de refus par capture.
