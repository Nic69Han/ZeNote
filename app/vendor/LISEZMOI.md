# `vendor/` — code généré, à ne pas modifier à la main

`zenote-core/` est le cœur métier Kotlin compilé en JavaScript. Il est versionné
pour que l'application se construise et se déploie sans chaîne Kotlin — un
hébergeur statique n'a alors besoin que de Node.

Pour le régénérer après toute modification de `core/` :

```bash
bash scripts/sync-core-js.sh
```

Le script construit le cœur (tests JVM et navigateur inclus) puis dépose le
résultat ici. Toute retouche manuelle de ces fichiers serait écrasée au prochain
passage — et ferait diverger les règles entre les surfaces, ce que toute
l'architecture cherche à empêcher.
