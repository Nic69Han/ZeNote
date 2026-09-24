# ZeNote

Capturer en un geste, ranger une fois par jour, savoir quoi faire maintenant.

**L'application est en ligne : https://zenote-app.netlify.app**
Ouvrez-la sur le téléphone, puis « Ajouter à l'écran d'accueil ». Elle s'installe et fonctionne
hors ligne. Vos notes vivent dans le navigateur, sur l'appareil : rien n'est stocké sur un serveur,
pas de compte, pas de mesure d'audience. L'**analyse** se fait sur l'appareil ; une analyse
distante (TypeSafe), éteinte par défaut, peut être allumée dans « Vos données » : seul le texte des
passages part alors, jamais l'audio ni les dates. La **dictée** aussi reste sur l'appareil : l'audio est
transcrit par un moteur embarqué (Vosk, en WebAssembly, modèle français de 40 Mo téléchargé une
fois), jamais envoyé nulle part. Le **chiffrement** s'active depuis « Vos données » : les notes
deviennent illisibles sans votre empreinte, votre visage ou votre phrase de passe — sans que
capturer ne demande jamais rien. L'écran « Vos données » détaille tout cela, y compris ce qui
dérange.

## Ce que c'est

Un outil de prise de notes pour quelqu'un dont les journées sont pleines de réunions et dont
la mémoire lâche, au travail comme ailleurs.

Le pari n'est pas de mieux ranger. Il est que deux coûts précis empêchent de noter et de s'y
retrouver : noter réclame cinq décisions de rangement au pire moment, et regarder une liste
fait choisir l'urgent contre l'important — le « mere urgency effect » (Zhu, Yang & Hsee, 2018).

Le pivot vient de la mémoire prospective : ce n'est pas la note qui libère l'esprit, c'est le
plan attaché à la note. Un plan « quand / où » précis fait taire les pensées intrusives d'une
tâche inachevée aussi complètement que de l'avoir faite (Masicampo & Baumeister, 2011). D'où la
règle qui tient le produit : **rien ne sort de la Revue sans un plan, un « un jour » assumé, ou
une suppression.**

## Les trois surfaces

| Surface | Ce qu'on y fait | Ce qu'on n'y fait jamais |
|---|---|---|
| **Capturer** | Appuyer, parler ou écrire, c'est déposé | Choisir un dossier, un projet, une priorité |
| **La Revue** | Trancher ce qui a été compris, une fois par jour | Relire tout l'historique |
| **Maintenant** | Voir au plus trois choses, chacune justifiée | Compter ce qui reste |

### Les rappels

Un plan attaché en Revue revient à vous. Le point de rupture est la **reprise de
l'application** après une absence : une bande unique, groupée, au-dessus de l'écran en
cours — jamais au milieu d'une tâche, jamais plus d'une par reprise. Écartée trois fois,
elle cesse de se représenter à l'identique et remonte en Revue avec trois sorties :
replanifier, déléguer (l'élément devient une attente, suivie par les relances) ou
abandonner.

Deux limites, dites plutôt que masquées. « Quand je vois Karim » n'est pas observable
tant que l'agenda n'est pas branché : le rappel est alors ramené à votre retour, et
l'écran l'écrit. Et **ZeNote ne vous notifiera pas application fermée** — une page web ne
se réveille pas seule, il lui faudrait un serveur, et il n'y en a pas.

### Le chiffrement

Il est proposé, jamais imposé : il crée une manière de tout perdre qui n'existait pas avant, et
l'écran le dit avant le bouton. Une fois activé, un **coffre à deux clés** sépare écrire et lire.

| | |
|---|---|
| **Écrire** | La clé publique reste en clair et ne sait que chiffrer. Capturer ne demande donc aucune authentification, coffre fermé compris — la promesse « un geste » tient entière. |
| **Lire** | La clé privée est enveloppée sous l'authentification de l'appareil (WebAuthn, empreinte / visage / code) ou sous une phrase de passe (PBKDF2-SHA-256, 600 000 itérations). Sans elle, rien ne s'ouvre. |

Chaque valeur est scellée par ECIES sur P-256 : paire éphémère, ECDH avec la clé publique du
coffre, HKDF-SHA-256, puis AES-GCM 256. Deux notes identiques ne se ressemblent pas une fois
scellées. Restent lisibles sans authentification les identifiants et le lien élément → capture,
dont la base a besoin pour fonctionner : on sait donc combien de notes existent, pas ce qu'elles
disent.

Quand la reconnaissance vocale du navigateur ne rend rien, la capture n'est pas perdue et
ne disparaît pas non plus : elle remonte **en tête de la Revue**, avec son enregistrement
prêt à écouter et un champ pour écrire ce qui avait été dit. Elle repart alors dans
l'analyse comme si la transcription avait marché.

Depuis chacun de ces écrans, un repli « source » rend la transcription brute **et
l'enregistrement d'origine**. C'est le recours quand la reconnaissance vocale se trompe :
tant que l'audio est atteignable, la note n'est pas perdue, seulement mal lue. La lecture
démarre au passage de l'élément — position estimée à partir du texte, et dite comme telle.

Deux écrans en retrait, atteints depuis l'en-tête : **Rechercher** et **Vos données**. On ne
les traverse pas dans une journée de travail — les y mettre diluerait les trois surfaces.

**Rechercher** accepte le moment autant que les mots : « le truc dont j'ai parlé la semaine
dernière », « avant-hier », « il y a trois jours ». C'est souvent tout ce dont on se souvient
d'une note. La lecture du repère est locale et lexicale — aucun modèle distant. En revanche
ZeNote ne sait pas *où* vous étiez : une question qui évoque le contexte de capture (« en
voiture ») reçoit les captures de la période, et le dit — la moitié qu'il ne sait pas faire
est déclarée, jamais devinée.

## L'essayer en local

```bash
cd app
npm ci
npm run dev          # http://localhost:5173
```

La capture vocale enregistre au micro, écrit l'audio en base, puis le transcrit sur l'appareil
en arrière-plan — quelques secondes, sans réseau. Elle ne dépend plus de la reconnaissance vocale
du navigateur, qui sur Android réclame le micro pour elle seule et n'entendait rien pendant
l'enregistrement. Quand rien n'est reconnu, la capture remonte en tête de la Revue avec son
audio, à écrire. La capture écrite fonctionne partout.

```bash
npm run build                    # construit dist/
npx vitest run                   # tests unitaires
node tests/bout-en-bout.mjs      # constats dans un vrai navigateur sur dist/
ZENOTE_URL=https://… node tests/bout-en-bout.mjs   # les mêmes, sur un site déployé
```

## La mettre en ligne

```bash
ZENOTE_CHEMIN_MANDATAIRE="…" bash scripts/deployer.sh
```

Le script n'envoie que ce que git a enregistré. Ce détour n'est pas cosmétique : l'outil de
téléversement expédie le répertoire courant tel quel, sans tenir compte de `.gitignore`, et
emporterait `app/node_modules` — des dépendances compilées pour la machine de développement,
sur quoi la construction chez l'hébergeur échoue.

## Où sont les décisions

La spécification produit complète, ses dix capacités et le tableau reliant chaque mécanique à
un résultat de recherche publié vivent dans `openspec/changes/zenote-core/`. Le refus explicite
de certaines fonctionnalités (pas de lifelog, pas de wiki, pas de collaboration, pas de
géolocalisation, pas de statistiques de productivité) est dans `proposal.md` : c'est là que se
lit ce que le produit ne sera pas.

---

# Environnement de développement

Assisté par agent, prêt à l'emploi : **OpenSpec** (workflow spec-driven), **RTK**
(compression des sorties shell), **Caveman** (compression des réponses) et **TypeSafe**
(jugements IA typés).

## Installation

```bash
bash scripts/setup-env.sh
export PATH="$HOME/.local/bin:$PATH"   # si rtk n'est pas trouvé
```

Le script est idempotent : il installe `rtk` dans `~/.local/bin`, `openspec` via npm global,
vérifie que la skill `caveman` est bien présente dans le dépôt, et installe le plugin
`typesafe@typesafe-ai` via la CLI `claude`.

## Les quatre outils

| Outil | Rôle | Source |
|-------|------|--------|
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | Développement piloté par les specs : proposition → specs → tâches → implémentation → archive | npm `@fission-ai/openspec` |
| [RTK](https://github.com/rtk-ai/rtk) | Proxy CLI qui filtre/compresse la sortie des commandes avant qu'elle n'entre dans le contexte (jusqu'à −90 % de sortie bash) | binaire Rust |
| [Caveman](https://github.com/amanattar/caveman-claude-skill) | Style de réponse ultra-compressé (~−75 % de tokens en sortie) sans perte de contenu technique | skill vendorée |
| [TypeSafe](https://github.com/typesafe-ai/skills) | Jugements IA typés (modèles System One / Jev) composables comme des primitives de code : routage, classement, extraction, vérification | plugin `typesafe@typesafe-ai` |

### OpenSpec

Commandes disponibles dans Claude Code :

```
/opsx:explore    explorer une idée avant de la figer
/opsx:propose    créer une change (proposal.md, specs/, design.md, tasks.md)
/opsx:apply      implémenter les tâches
/opsx:update     mettre à jour une change en cours
/opsx:sync       resynchroniser les specs
/opsx:archive    archiver une change terminée
```

Arborescence :

```
openspec/
  config.yaml         # contexte projet + règles par artefact (à compléter)
  specs/              # specs actives
  changes/archive/    # changes archivées
```

### RTK

Le hook `PreToolUse` de `.claude/settings.json` réécrit automatiquement les commandes Bash
(`git status` → `rtk git status`). Le hook est protégé : si `rtk` n'est pas installé, il ne
fait rien et les commandes passent normalement.

- Instructions d'usage : bloc `<!-- rtk-instructions -->` dans `CLAUDE.md`
- Filtres projet : `.rtk/filters.toml`
- Statistiques : `rtk gain`

Le hook ne s'applique qu'à l'outil Bash. `Read`, `Grep` et `Glob` ne passent pas par RTK :
utiliser `rtk read`, `rtk grep`, `rtk find` pour en bénéficier.

### Caveman

Skill vendorée dans `.claude/skills/caveman/SKILL.md`. Niveaux : `lite`, `full` (défaut),
`ultra`, plus les variantes `wenyan-*`.

```
/caveman ultra     activer
stop caveman       revenir au style normal
```

Le code, les commits et les PR restent rédigés normalement quel que soit le niveau.

### TypeSafe

Plugin déclaré dans `.claude/settings.json` (marketplace `typesafe-ai/skills`), donc activé
pour quiconque ouvre le dépôt avec Claude Code. Installation manuelle si besoin :

```
claude plugin marketplace add typesafe-ai/skills
claude plugin install typesafe@typesafe-ai
```

Pour un autre agent, une seule des deux méthodes suffit :

```
npx skills add typesafe-ai/skills --skill typesafe-ai
```

La skill s'active quand une fonctionnalité réclame un jugement sémantique typé — router une
requête, classer des candidats, extraire une valeur, vérifier une affirmation — plutôt qu'un
prompt LLM suivi d'un parsing maison. Les docs vivantes
(<https://docs.typesafe.ai/llms.txt>) font foi. Aucune clé API TypeSafe n'est configurée dans
le projet à ce jour ; une intégration réelle devra garder ses identifiants côté serveur.

## Le cœur métier

Le socle partagé entre les surfaces vit dans `core/`, en Kotlin Multiplatform, compilé vers
JVM (Android et Windows demain) et vers JavaScript (la PWA aujourd'hui).

```bash
./gradlew :core:build          # compile et teste les deux cibles
./gradlew :core:jvmTest        # les tests JVM seuls
bash scripts/sync-core-js.sh   # recompile le cœur en JS et le dépose dans app/vendor/
```

La PWA n'exécute pas une copie des règles en TypeScript : elle charge le cœur compilé. C'est
ce qui garantit qu'un même jeu de données donne le même classement sur toutes les surfaces —
et que les tests du cœur valent pour l'écran.

Le modèle de données est en trois couches, et c'est l'invariant qui tient tout :

| Couche | Contenu | Règle |
|---|---|---|
| **Source** — `model/Source.kt` | Audio, texte brut, horodatage, contexte d'agenda | Immuable. Rien ne la modifie. |
| **Dérivé** — `model/Derive.kt` | Ce que le modèle a compris, avec sa confiance et son indice | Reconstructible. Une ré-analyse la remplace intégralement. |
| **Humain** — `model/Humain.kt` | Ce que l'utilisateur a validé ou corrigé en Revue | Fait autorité. Jamais écrasé par une ré-analyse. |

`store/CaptureStore.kt` fait respecter ces règles ; `model/Resolu.kt` compose les trois
couches en la vue que les écrans consomment. `priorisation/Priorisation.kt` porte le
classement de la vue Maintenant.

Deux garanties sont dans le cœur plutôt que dans l'interface, parce qu'elles ne doivent
dépendre d'aucun écran : **aucun élément sans passage source** (un élément que le modèle
a inventé ne peut pas être construit) et **aucune analyse distante sur une capture
marquée privée**.

## Structure du dépôt

```
.claude/
  settings.json            # hook RTK + plugin TypeSafe
  commands/opsx/           # slash commands OpenSpec
  skills/openspec-*/       # skills OpenSpec
  skills/caveman/          # skill Caveman
.rtk/filters.toml          # filtres RTK spécifiques au projet
openspec/                  # specs et changes
core/                      # le cœur métier, Kotlin Multiplatform
app/                       # la PWA : trois surfaces + recherche et données
scripts/setup-env.sh       # installateur des outils
scripts/sync-core-js.sh    # cœur Kotlin → JavaScript, déposé dans app/vendor/
scripts/deployer.sh        # mise en ligne, depuis une copie propre du dépôt
CLAUDE.md                  # instructions agent (bloc RTK)
```
