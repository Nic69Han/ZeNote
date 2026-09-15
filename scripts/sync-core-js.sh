#!/usr/bin/env bash
# Compile le cœur Kotlin vers JavaScript et le dépose dans la PWA.
#
#   bash scripts/sync-core-js.sh
#
# À relancer après toute modification de `core/`. La PWA importe le résultat depuis
# `app/vendor/zenote-core/` : c'est ainsi que le navigateur exécute exactement les
# mêmes règles que les futures applications natives.
set -euo pipefail

RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SORTIE="${RACINE}/core/build/dist/js/productionLibrary"
DESTINATION="${RACINE}/app/vendor/zenote-core"

# Chrome refuse de démarrer en root sans --no-sandbox ; les tests Karma du cœur en
# ont besoin. Le réglage est dans core/karma.config.d/.
export CHROME_BIN="${CHROME_BIN:-/opt/pw-browsers/chromium-1194/chrome-linux/chrome}"

echo "==> Construction du cœur (JVM + JS, tests inclus)"
cd "$RACINE"
./gradlew :core:build --no-daemon

if [ ! -f "${SORTIE}/zenote-core.js" ]; then
  echo "Échec : ${SORTIE}/zenote-core.js est absent après la construction." >&2
  exit 1
fi

echo "==> Dépôt dans ${DESTINATION#"$RACINE"/}"
rm -rf "$DESTINATION"
mkdir -p "$DESTINATION"
cp "${SORTIE}"/*.js "${SORTIE}"/*.d.ts "${SORTIE}"/package.json "$DESTINATION/"
# Les cartes de source ne servent qu'au débogage du cœur : inutile de les livrer.
# Il faut aussi retirer la ligne qui les réclame, sinon l'outillage de la PWA
# avertit à chaque construction qu'il ne les trouve pas.
rm -f "$DESTINATION"/*.js.map
for fichier in "$DESTINATION"/*.js; do
  sed -i '/^\/\/# sourceMappingURL=/d' "$fichier"
done

cat <<EOF

Cœur déposé. La PWA l'importe ainsi :

    import coeur from '../../vendor/zenote-core/zenote-core.js';
    const Regles = coeur.app.zenote.core.js.ZeNoteRegles;

Deux dépendances npm sont requises côté application, tirées par kotlinx-datetime :

    npm i @js-joda/core@3.2.0 format-util

EOF
