# ZeNote

Environnement de développement assisté par agent, prêt à l'emploi : **OpenSpec** (workflow
spec-driven), **RTK** (compression des sorties shell) et **Caveman** (compression des réponses).

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

Le socle partagé entre les surfaces vit dans `core/`, en Kotlin Multiplatform. Seule la
cible JVM est déclarée pour l'instant : elle couvre Android et le poste Windows.

```bash
./gradlew :core:build      # compile et lance les tests
./gradlew :core:jvmTest    # les tests seuls
```

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
scripts/setup-env.sh       # installateur des outils
CLAUDE.md                  # instructions agent (bloc RTK)
```
