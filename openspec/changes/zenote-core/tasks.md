Les groupes suivent les cinq paliers de mise en service décrits dans `design.md` — Migration Plan. Chaque palier laisse un produit utilisable seul ; on ne démarre le suivant qu'une fois le précédent tenu sur des usages réels.

## 1. Socle et arbitrages mesurés

- [ ] 1.1 Prototyper la capture vocale sur les deux plateformes candidates et mesurer le délai entre l'appui et le début effectif de l'enregistrement ; retenir la technologie dont la mesure reste sous 300 ms au 95e centile, appareil verrouillé et application non lancée
- [ ] 1.2 Décider la technologie du socle métier partagé à partir de la mesure 1.1 et consigner l'arbitrage et les chiffres dans `design.md` — Décisions
- [ ] 1.3 Mettre en place le dépôt du produit (structure socle + surfaces), la construction et les tests automatisés ; vérifier qu'une commande unique construit et teste les deux surfaces
- [ ] 1.4 Définir le schéma des trois couches de données — source immuable, dérivé reconstructible, décidé par l'humain — et vérifier par un test qu'une ré-analyse ne modifie ni la couche source ni la couche humaine
- [ ] 1.5 Mettre en place le stockage local chiffré et vérifier par un test que les données ne sont pas lisibles sans authentification de l'appareil

## 2. Palier 1 — Capture fiable

- [ ] 2.1 Implémenter la capture vocale par appui long avec écriture durable puis confirmation haptique et sonore ; vérifier par un test que la confirmation n'est jamais émise avant l'écriture effective
- [ ] 2.2 Implémenter la capture depuis l'écran verrouillé et le widget ; vérifier manuellement le scénario `capture` / « Capture depuis l'écran verrouillé » sur appareil réel
- [ ] 2.3 Implémenter le raccourci global de capture sur ordinateur avec restitution du focus à l'application précédente ; vérifier le scénario `capture` / « Capture au clavier sur ordinateur »
- [ ] 2.4 Implémenter la capture écrite sans champ obligatoire et vérifier qu'aucune demande de classement n'est présentée
- [ ] 2.5 Implémenter la capture mains libres depuis un accessoire connecté avec signaux sonores de début et de fin ; vérifier sur écouteurs réels
- [ ] 2.6 Implémenter la file de captures locale et la reprise après arrêt brutal ; vérifier par un test qui tue le processus pendant un enregistrement que la portion enregistrée est présente et marquée incomplète
- [ ] 2.7 Implémenter la gestion des échecs d'écriture (stockage plein, permission refusée) avec signal distinct du succès et action de récupération ; vérifier par des tests sur ces deux cas
- [ ] 2.8 Mettre en place la mesure automatique de la latence de capture et de l'autonomie à chaque version, avec seuil bloquant la publication ; vérifier que le seuil échoue quand on dégrade volontairement le chemin de capture

## 3. Palier 2 — Transcription et consultation

- [ ] 3.1 Intégrer la transcription automatique en file d'attente et vérifier le scénario `capture` / « Capture en mode avion » suivi de « Traitement au retour du réseau »
- [ ] 3.2 Conserver et rendre consultables l'audio d'origine et la transcription brute depuis tout élément dérivé ; vérifier le scénario `transcription` / « Remonter à l'audio d'origine », lecture démarrant au passage source
- [ ] 3.3 Implémenter le nettoyage des disfluences avec version brute conservée ; vérifier sur un jeu de captures annotées que noms propres, chiffres, dates et négations sont intégralement préservés
- [ ] 3.4 Implémenter le marquage des passages de faible confiance et vérifier qu'aucun élément structuré n'est créé à partir d'un seul passage incertain
- [ ] 3.5 Implémenter le vocabulaire personnel et l'apprentissage des corrections de transcription ; vérifier qu'un terme corrigé est correctement transcrit à l'occurrence suivante
- [ ] 3.6 Implémenter la détection de langue et le traitement des phrases mêlant français et anglais ; vérifier le scénario `transcription` / « Phrase mixte »
- [ ] 3.7 Implémenter la recherche locale par mots et par personne, disponible hors ligne ; vérifier le scénario `recherche` / « Recherche en mode avion »
- [ ] 3.8 Implémenter la synchronisation entre appareils avec conservation des deux versions en cas de conflit ; vérifier le scénario `donnees` / « Modification concurrente » et que la capture reste instantanée pendant une synchronisation

## 4. Palier 3 — Compréhension et Revue

- [ ] 4.1 Implémenter le découpage d'une capture longue en segments et la classification d'intention sur les six types ; vérifier le scénario `extraction` / « Capture multi-intentions »
- [ ] 4.2 Implémenter l'ancrage obligatoire de chaque élément dans son passage source, avec rejet de tout élément non rattachable ; vérifier par un test que la sortie du modèle non ancrée est écartée avant présentation
- [ ] 4.3 Implémenter le score de confiance par élément et par champ déduit, et le seuil transformant une déduction incertaine en question ; vérifier le scénario `extraction` / « Déduction incertaine posée en question »
- [ ] 4.4 Implémenter la conversion des expressions temporelles relatives et le refus d'inventer une date sur une expression floue ; vérifier les deux scénarios d'échéance de `extraction`
- [ ] 4.5 Implémenter la déduction du poids par conséquence sur trois niveaux, avec justification citant l'indice retenu ; vérifier qu'aucun choix de priorité n'est jamais demandé à l'utilisateur
- [ ] 4.6 Implémenter la détection des engagements pris et des attentes envers des tiers ; vérifier les deux scénarios correspondants de `extraction`
- [ ] 4.7 Construire la mémoire d'entités avec création automatique, déduplication et enrichissement ; vérifier qu'une entité déjà connue ne produit pas de doublon
- [ ] 4.8 Implémenter la récupération de contexte combinant pertinence, récence et importance, avec contexte borné et inspectable ; vérifier que l'historique complet n'est jamais transmis
- [ ] 4.9 Implémenter la résolution des références implicites avec candidats classés et question posée sous le seuil ; vérifier les trois scénarios de résolution de `memoire`
- [ ] 4.10 Implémenter la déduction de sphère et le filtrage à la restitution sans scission du flux de capture ; vérifier les deux scénarios de sphère de `memoire`
- [ ] 4.11 Implémenter les opérations de correction de la mémoire (fusion, renommage, séparation, suppression) avec propagation et annulation ; vérifier le scénario `memoire` / « Fusion de doublons »
- [ ] 4.12 Implémenter l'analyse en deux temps — passage court à la transcription, passage approfondi groupé avant la Revue — et mesurer le coût par capture sur un lot réel
- [ ] 4.13 Implémenter l'écran de Revue avec décision en un geste, acceptation groupée sous confiance haute et annulation ; vérifier les deux scénarios de décision de `revue`
- [ ] 4.14 Implémenter l'interruption et la reprise de Revue sans perte ; vérifier le scénario `revue` / « Revue interrompue »
- [ ] 4.15 Implémenter le bouclage du plan : aucune tâche ne sort de la Revue sans plan, classement « un jour » ou suppression ; vérifier le scénario `revue` / « Plan obligatoire »
- [ ] 4.16 Implémenter l'ordre de présentation en Revue (urgent et incertain d'abord, regroupement par source et par projet) ; vérifier les deux scénarios d'ordre de `revue`
- [ ] 4.17 Implémenter la gestion de l'arriéré sans pression : regroupement par thème, Revue réduite, aucune notification insistante ; vérifier les deux scénarios de file non traitée de `revue`
- [ ] 4.18 Mesurer sur des captures réelles le temps de traitement d'une Revue de charge normale et vérifier qu'il reste sous deux minutes

## 5. Palier 4 — Maintenant et rappels

- [ ] 5.1 Implémenter le moteur de classement combinant poids et échéance comme dimensions distinctes ; vérifier le scénario `priorisation` / « Urgent mais léger »
- [ ] 5.2 Implémenter la vue Maintenant à trois éléments maximum, chacun avec sa justification en une ligne, sans compteur ni liste complète ; vérifier les deux scénarios de la vue Maintenant
- [ ] 5.3 Implémenter le créneau protégé pour l'important non urgent et l'enregistrement des renoncements ; vérifier les deux scénarios de créneau de `priorisation`
- [ ] 5.4 Implémenter la lecture locale de l'agenda et l'adaptation du classement au temps disponible, au lieu et à l'appareil ; vérifier les deux scénarios de contexte d'exécution
- [ ] 5.5 Implémenter la prise en compte de la charge de la journée pour la charge cognitive des éléments proposés ; vérifier le scénario `priorisation` / « Journée dense »
- [ ] 5.6 Implémenter l'écartement d'un élément sans suppression ni report, et la remontée en Revue après rejets répétés ; vérifier les deux scénarios correspondants
- [ ] 5.7 Implémenter la détection des éléments dormants de poids fort et leur remontée en Revue ; vérifier le scénario `priorisation` / « Tâche dormante »
- [ ] 5.8 Implémenter les rappels situés par lieu, personne et événement d'agenda ; vérifier les trois scénarios de rappels situés
- [ ] 5.9 Implémenter la formulation des plans en « quand *signal*, je fais *action* » avec préférence au signal sur l'heure ; vérifier le scénario `rappels` / « Signal préféré à l'heure »
- [ ] 5.10 Implémenter la détection des points de rupture et la file d'opportunité, avec une notification au plus par point de rupture ; vérifier les scénarios de livraison et de regroupement de `rappels`
- [ ] 5.11 Implémenter le court-circuit des rappels critiques et les plages de silence ; vérifier les scénarios « Rappel critique immédiat » et « Plage de silence respectée »
- [ ] 5.12 Implémenter l'escalade d'un rappel ignoré à répétition vers la Revue ; vérifier le scénario `rappels` / « Rappel ignoré trois fois »
- [ ] 5.13 Implémenter la relance des engagements et des attentes en Revue ; vérifier le scénario `revue` / « Attente sans nouvelle »
- [ ] 5.14 Vérifier sur appareil réel que le géorepérage et la lecture d'agenda restent sous le budget d'autonomie fixé, et que la désactivation de chaque signal laisse le produit utilisable

## 6. Palier 5 — Réunions et remémoration

- [ ] 6.1 Implémenter la dépose avant réunion et la reprise après ; vérifier les deux scénarios de dépose de `reunions`
- [ ] 6.2 Implémenter le vidage post-réunion pré-contextualisé, reporté au point de rupture si l'utilisateur enchaîne ; vérifier les deux scénarios de vidage
- [ ] 6.3 Implémenter le briefing avant événement à partir des éléments ouverts liés aux participants ; vérifier les deux scénarios de briefing de `rappels`
- [ ] 6.4 Implémenter l'import d'un compte rendu externe avec séparation des engagements de l'utilisateur et de ceux des tiers ; vérifier les deux scénarios d'import de `reunions`
- [ ] 6.5 Implémenter la confirmation en Revue des engagements extraits d'une réunion avant toute planification de rappel ; vérifier le scénario correspondant
- [ ] 6.6 Implémenter l'enregistrement de réunion sur action explicite avec indicateur visible, et vérifier qu'aucun audio n'est enregistré sans cette action
- [ ] 6.7 Implémenter la recherche en langage naturel avec réponse citant ses sources et absence assumée ; vérifier les scénarios de `recherche` sur engagements, décisions et repère temporel flou
- [ ] 6.8 Implémenter le rappel proactif discret et ignorable du passé pertinent ; vérifier les deux scénarios de rappel proactif
- [ ] 6.9 Implémenter la consolidation par entité et la décroissance des éléments dormants sans suppression ; vérifier les deux scénarios de consolidation de `memoire`
- [ ] 6.10 Implémenter les fiches d'entité alimentées automatiquement ; vérifier le scénario `memoire` / « Fiche personne »

## 7. Confiance, données et sortie

- [ ] 7.1 Implémenter le marquage d'une capture comme non transmissible et l'exclusion d'une sphère entière de l'analyse distante ; vérifier par interception réseau qu'aucune donnée marquée ne sort de l'appareil
- [ ] 7.2 Implémenter la reconnaissance vocale embarquée comme repli hors ligne et pour les captures non transmissibles ; vérifier qu'une capture privée est transcrite sans appel réseau
- [ ] 7.3 Implémenter l'écran indiquant précisément quelles données quittent l'appareil et pour quel traitement ; vérifier que l'information correspond aux appels réellement émis
- [ ] 7.4 Implémenter l'export intégral en format ouvert et documenté avec liens de traçabilité préservés ; vérifier qu'un export est exploitable sans le produit
- [ ] 7.5 Implémenter la suppression d'une capture, d'une entité et du compte, avec fenêtre d'annulation et propagation distante dans un délai borné ; vérifier les deux scénarios de suppression de `donnees`
- [ ] 7.6 Implémenter la dégradation gracieuse en cas d'indisponibilité du service d'analyse ; vérifier le scénario `donnees` / « Service d'analyse indisponible »

## 8. Validation d'ensemble

- [ ] 8.1 Constituer un jeu d'évaluation de captures réelles annotées (intention, échéance, poids, entités, plan) et mesurer la qualité de l'extraction et de la résolution de contexte ; consigner le seuil de qualité en dessous duquel les rappels automatiques restent désactivés
- [ ] 8.2 Vérifier scénario par scénario chaque spécification de ce changement et consigner les écarts
- [ ] 8.3 Mener un usage réel continu d'au moins deux semaines et vérifier les trois promesses mesurables : capture sous 300 ms, Revue sous deux minutes, aucune capture perdue
- [ ] 8.4 Mesurer le coût d'analyse par capture sur cet usage réel et vérifier qu'il tient le budget fixé
