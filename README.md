# ZeNote

Capturer en un geste, ranger une fois par jour, savoir quoi faire maintenant.

**L'application est en ligne : https://zenote-app.netlify.app**
Ouvrez-la sur le téléphone, puis « Ajouter à l'écran d'accueil ». Elle s'installe et fonctionne
hors ligne. Vos notes vivent dans le navigateur, sur l'appareil : il n'y a pas de serveur ZeNote,
pas de compte, pas de mesure d'audience. Une seule réserve, et elle compte : la **dictée** confie
l'audio à la reconnaissance vocale du navigateur, qui sur Chrome est un service distant de
l'éditeur. La capture écrite, elle, n'appelle rien. L'écran « Vos données » détaille tout cela,
y compris ce qui dérange — le stockage local n'est pas chiffré.

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

Deux écrans en retrait, atteints depuis l'en-tête : **Rechercher** et **Vos données**. On ne
les traverse pas dans une journée de travail — les y mettre diluerait les trois surfaces.

## L'essayer en local

```bash
cd app
npm ci
npm run dev          # http://localhost:5173
```

La capture vocale utilise la reconnaissance vocale du navigateur : elle demande le micro, et
fonctionne sur Chrome et Edge. La capture écrite fonctionne partout.

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
(compression des sorties shell) et **Caveman** (compression des réponses).

## Installation

```bash
bash scripts/setup-env.sh
export PATH="$HOME/.local/bin:$PATH"   # si rtk n'est pas trouvé
```

Le script est idempotent : il installe `rtk` dans `~/.local/bin`, `openspec` via npm global,
et vérifie que la skill `caveman` est bien présente dans le dépôt.

## Les trois outils

| Outil | Rôle | Source |
|-------|------|--------|
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | Développement piloté par les specs : proposition → specs → tâches → implémentation → archive | npm `@fission-ai/openspec` |
| [RTK](https://github.com/rtk-ai/rtk) | Proxy CLI qui filtre/compresse la sortie des commandes avant qu'elle n'entre dans le contexte (jusqu'à −90 % de sortie bash) | binaire Rust |
| [Caveman](https://github.com/amanattar/caveman-claude-skill) | Style de réponse ultra-compressé (~−75 % de tokens en sortie) sans perte de contenu technique | skill vendorée |

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
  settings.json            # hook RTK
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
