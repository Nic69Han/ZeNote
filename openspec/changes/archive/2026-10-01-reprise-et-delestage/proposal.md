# Proposal

## Why

Trois moments de la journée d'un manager débordé coûtent de la mémoire de travail, et ZeNote n'en couvre aucun :

1. **Le décrochage.** Se préparer pendant les quelques secondes qui précèdent une interruption fait reprendre plus vite ensuite (Trafton, Altmann et al., IJHCS 2003). Revenir à une tâche interrompue est la difficulté centrale du travail fragmenté (Czerwinski, Horvitz & Wilhite, CHI 2004). La dépose avant réunion de `zenote-core` (tâche 6.1) attend l'agenda ; un geste manuel « je m'arrête là » n'attend rien.
2. **Le soir.** Écrire cinq minutes une liste **précise** de ce qu'on fera les jours suivants fait s'endormir plus vite qu'écrire ce qu'on a déjà fait, et plus la liste est précise, plus l'effet est net (Scullin et al., JEP: General 2018, n = 57, polysomnographie). Déposer ne libère la mémoire que si l'on fait confiance au dépôt (Storm & Stone, Psychological Science 2015) : c'est la confirmation « écrit d'abord, confirmé ensuite » que ZeNote tient déjà.
3. **Le démarrage d'une tâche floue.** Découper en microtâches allonge un peu le temps total mais améliore le résultat et résiste mieux aux interruptions (Cheng, Teevan, Iqbal & Bernstein, CHI 2015). La Revue demande déjà « quand, ou à quel signal ? » ; elle ne demande jamais **par quoi commencer**, et `planAction` recopie le texte de la tâche.

## What Changes

- **Nouveau — Où j'en étais** : un bouton « Je m'arrête là » sur l'écran de capture enregistre une note de reprise (dictée ou écrite). Au retour dans l'application après une absence (le point de rupture « reprise » déjà observé, `ABSENCE_AVANT_REPRISE_MS`), Maintenant l'affiche en tête, mot pour mot, avec son audio. La note de reprise n'est pas analysée en éléments ; un geste l'envoie en Revue si on le souhaite.
- **Nouveau — Vider sa tête le soir** : réglage facultatif, **éteint par défaut**, avec une heure (21 h 00 proposée). Dans la soirée, l'écran de capture affiche une invite unique à dicter précisément ce qui attend demain ; « Pas ce soir » la retire jusqu'au lendemain. Les captures ainsi faites sont des captures ordinaires, confirmées comme les autres.
- **Nouveau — Premier geste** : quand une tâche acceptée est formulée sans action concrète (« gérer », « avancer sur », « préparer »…), la zone de plan de la Revue demande un premier geste de deux minutes. Le geste saisi devient `planAction` ; Maintenant l'affiche comme la chose à faire, et permet de noter le geste suivant.

Hors périmètre : toute notification système (une PWA ne se réveille pas seule), toute génération de texte de geste.

## Capabilities

### New Capabilities
- `reprise` : note de reprise avant décrochage et restitution au retour.
- `delestage-du-soir` : invite facultative du soir à déposer la liste précise du lendemain.
- `premier-geste` : premier geste concret demandé pour une tâche floue, et affiché à sa place.

### Modified Capabilities
Aucune dans `openspec/specs/`.

## Impact

- `app/src/stockage/depot.ts` (`Capture.reprise`, réglages `delestageSoir`, `delestageHeure`, `delestageVuLe`), `app/src/services/pipeline.ts` (la note de reprise n'est pas analysée), `app/src/ui/capturer.ts`, `app/src/ui/maintenant.ts`, `app/src/ui/revue.ts` (zone de plan), `app/src/ui/reglages.ts`, nouveau `app/src/services/reprise.ts` et `app/src/analyse/geste.ts`, `app/src/styles/ecrans.css`, export.
- Aucune évolution du cœur ni de la version de la base.
