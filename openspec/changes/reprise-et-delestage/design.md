# Design

## Context

- `main.ts` observe déjà la reprise : ouverture de l'application, et retour visible après `ABSENCE_AVANT_REPRISE_MS` (30 min). Les rappels s'y présentent.
- Une capture passe par la file d'analyse (`traiterFileAnalyse`) qui produit des éléments pour la Revue.
- La zone de plan de la Revue (`rendreEntree`, `declencheurs`, `champLibrePlan`) enregistre `planDeclencheur`, `planAction: e.texte`, `planPoseLe`.
- Les réglages sont un magasin non scellé : n'y mettre aucun contenu de note.

## Decisions

### 1. La note de reprise est une capture marquée

`Capture.reprise?: { poseeLe: string; reprisLe?: string | null }`. Elle est écrite et confirmée comme toute capture (aucune perte possible), scellée comme elles, transcrite si dictée. La file d'analyse la marque analysée **sans produire d'élément** : c'est un marque-page, pas une liste de tâches ; la doubler en Revue ferait lire deux fois la même chose. « Garder pour la Revue » efface le marquage `reprise` et remet la capture dans la file d'analyse.

Seule la **dernière** note de reprise non reprise s'affiche. Une nouvelle note remplace l'affichage de l'ancienne, qui reste une capture ordinaire retrouvable.

### 2. Affichage au retour, dans Maintenant

`services/reprise.ts` : `noteDeReprise(captures)` rend la dernière note non reprise. Maintenant l'affiche en tête (« Où vous en étiez »), avec l'heure de pose, le texte cité et l'audio. « C'est reparti » pose `reprisLe`. La carte ne s'affiche que si la note date d'avant la dernière reprise observée, ou d'au moins `ABSENCE_AVANT_REPRISE_MS` : la voir juste après l'avoir dictée n'a pas de sens.

### 3. Invite du soir, sans insistance

Réglages : `delestageSoir: boolean` (faux par défaut), `delestageHeure: 'HH:MM'` ('21:00'), `delestageVuLe: string | null` (jour où l'invite a été écartée ou utilisée). Fenêtre : de l'heure réglée à 3 h 59 le lendemain matin, jour de référence = jour où la soirée a commencé. L'invite apparaît sur l'écran de capture, jamais ailleurs, une fois par soirée. La consigne demande de la précision (quoi, pour qui, quand) — c'est la précision qui porte l'effet mesuré. Après la capture, la confirmation dit « Écrit. Vous pouvez le lâcher jusqu'à demain. »

### 4. Premier geste

`analyse/geste.ts` : `demandeUnPremierGeste(texte): boolean`, vrai quand le verbe principal est dans une liste de verbes flous (gérer, s'occuper, avancer, préparer, finaliser, organiser, traiter, régler, suivre, boucler, voir pour, réfléchir, faire le point, travailler sur, penser à) et qu'aucun verbe d'action concret (`VERBES_ACTION` du lexique) ne précède. Liste fermée et testée : mieux vaut ne pas demander que demander à tort.

Dans la zone de plan, si vrai : un champ « Premier geste (deux minutes) » avant les déclencheurs ; laissé vide, `planAction` reste le texte de la tâche comme aujourd'hui. Si faux : un lien discret « Préciser un premier geste » ouvre le même champ. Maintenant affiche « Commencer par : « geste » » quand `planAction` diffère du texte, avec « Geste fait » qui ouvre un champ « Et ensuite ? » (facultatif) ; la tâche n'est close que par « C'est fait ».

## Risks / Trade-offs

- Liste de verbes flous incomplète → le lien discret reste disponible.
- Soirée qui passe minuit : la règle du jour de référence évite deux invites.
