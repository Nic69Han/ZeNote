#!/usr/bin/env bash
# Met l'application en ligne chez l'hébergeur.
#
#   ZENOTE_CHEMIN_MANDATAIRE="https://…/proxy/…" bash scripts/deployer.sh
#
# Pourquoi ce détour par une copie propre : l'outil de téléversement envoie le
# répertoire courant tel quel, sans tenir compte de `.gitignore`. Depuis l'arbre
# de travail il emporte donc `app/node_modules` — 145 Mo de dépendances déjà
# installées, compilées pour cette machine — et la construction chez l'hébergeur
# échoue dessus. On lui donne donc exactement ce que git a enregistré, rien de plus.
set -euo pipefail

RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE="${ZENOTE_SITE:-1f488820-1b0f-48d1-967a-a8e97df7a70b}"

if [ -z "${ZENOTE_CHEMIN_MANDATAIRE:-}" ]; then
  echo "Il manque ZENOTE_CHEMIN_MANDATAIRE : le chemin de téléversement fourni" >&2
  echo "par l'hébergeur. Il est temporaire et ne doit jamais être versionné." >&2
  exit 1
fi

if [ -n "$(git -C "$RACINE" status --porcelain)" ]; then
  echo "L'arbre de travail a des modifications non enregistrées." >&2
  echo "Seul ce que git connaît part en ligne : committez d'abord." >&2
  exit 1
fi

COPIE="$(mktemp -d)"
trap 'rm -rf "$COPIE"' EXIT

echo "==> Copie propre de $(git -C "$RACINE" rev-parse --short HEAD)"
git -C "$RACINE" archive HEAD | tar -x -C "$COPIE"

# La copie exportée n'a pas de `.git` : la construction chez l'hébergeur ne saurait
# donc pas quel commit elle sert. On le lui écrit, exactement sous la forme que
# `app/vite.config.ts` lit depuis git quand le dépôt est là — les deux
# constructions produisent alors les mêmes octets, donc le même nom de fichier, ce
# qui permet de vérifier que ce qui est en ligne est bien le paquet testé ici.
git -C "$RACINE" log -1 --format='%h %cd' --date=format:'%Y-%m-%d %H:%M' > "$COPIE/app/.version"
echo "==> Version servie : $(cat "$COPIE/app/.version")"

echo "==> Téléversement et construction chez l'hébergeur"
cd "$COPIE"
npx -y @netlify/mcp@latest --site-id "$SITE" --proxy-path "$ZENOTE_CHEMIN_MANDATAIRE"
