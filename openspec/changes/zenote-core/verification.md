# Vérification scénario par scénario

Ce document répond à la tâche 8.2 : passer les 112 scénarios des dix spécifications
de cette change, un par un, et **consigner les écarts**. Il est écrit pour être lu
par quelqu'un qui doit décider si le produit est utilisable, pas pour rassurer.

## Comment lire les marques

| Marque | Ce qu'elle veut dire |
| --- | --- |
| **tenu** | Un test nommé couvre le scénario. Il est indiqué. |
| **partiel** | Une moitié tient et l'autre non. L'écart est dit. |
| **non tenu** | Rien ne le couvre. La raison est dite, et elle n'est jamais « pas eu le temps ». |

Les tests cités existent et passent : 293 tests unitaires côté application, 12
fichiers de tests côté cœur, 87 vérifications de bout en bout dans un vrai
navigateur sur le paquet construit, et 4 sur l'arrêt brutal du processus.

Trois causes reviennent dans les « non tenu », et aucune ne se règle en écrivant du
code depuis ici :

- **surfaces natives** — Android et Windows ne sont pas construits ; la surface
  livrée est l'application web installable ;
- **agenda** — levée depuis par la change `agenda-local` : un agenda `.ics` s'importe
  et se lit sur l'appareil. Restent hors de portée d'une page web l'appareil courant
  et la répétition avant chaque occurrence (voir les lignes « partiel ») ;
- **analyse distante** — il n'y a pas de serveur ZeNote, donc ni transmission, ni
  interrupteur de transmission, ni synchronisation entre appareils.

---

## capture — 12 scénarios · 9 tenus, 0 partiels, 3 non tenus

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Capture depuis l'écran verrouillé | non tenu | Demande un service Android de premier plan (tâche 2.2). |
| Capture au clavier sur ordinateur | non tenu | Demande un agent résident Windows (tâche 2.3). |
| Aucune décision demandée | tenu | `bout-en-bout` : « aucun champ de rangement à la capture ». |
| Confirmation après écriture durable | tenu | `bout-en-bout` relève la fin de transaction et la vibration, et compare leur rang. Vérifié falsifiable : confirmer avant d'écrire fait tomber le constat. |
| Échec d'écriture signalé | tenu | `espace.test.ts` : quota et micro refusé, avec des issues différentes. |
| Capture en mode avion | tenu | `bout-en-bout` : « aucune requête sortante » sur tout le parcours, transcription comprise. |
| Traitement au retour du réseau | tenu | `pipeline.test.ts`. La file ne dépend pas du réseau : elle transcrit sur l'appareil. |
| Note écrite sans structuration | tenu | `bout-en-bout` : dépose écrite, aucun champ. |
| Capture longue segmentée | tenu | `intentions.test.ts` : la phrase du scénario produit trois éléments. |
| Arrêt brutal pendant l'enregistrement | tenu | `arret-brutal.mjs` tue réellement le navigateur au SIGKILL. |
| Échec de transcription | tenu | `pipeline.test.ts` et `bout-en-bout` : la capture remonte en Revue avec son audio. |
| Capture depuis un écouteur | non tenu | Demande un accessoire réel (tâche 2.5). |

## transcription — 10 scénarios · 8 tenus, 2 partiels

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Transcription sans intervention | tenu | `bout-en-bout` : une phrase dictée arrive en Revue sans action. |
| Délai de transcription visible | tenu | `bout-en-bout` : la Revue dit ce qui est en cours. |
| Remonter à l'audio d'origine | tenu | `bout-en-bout` : l'audio s'ouvre au passage source. |
| Reformulation réversible | tenu | `bout-en-bout` : version lisible affichée, brut atteignable d'un bouton. |
| Suppression des hésitations | tenu | `DisfluencesTest` sur un jeu annoté. |
| Aucune information ajoutée | tenu | `DisfluencesTest` : aucun mot du résultat qui ne soit dans la source. |
| Nom de projet correctement transcrit | partiel | Un terme **corrigé une fois** ressort juste ensuite (`lexique.test.ts`). Un nom déjà présent en mémoire mais jamais corrigé n'influence pas encore la reconnaissance : le modèle est figé et ne prend pas de vocabulaire. |
| Correction apprise | tenu | `lexique.test.ts` et `bout-en-bout`. |
| Phrase mixte | partiel | « Ne traduit rien » est tenu et vérifié (`langue.test.ts`). Transcrire correctement l'anglais dicté ne l'est pas : le modèle embarqué est français. |
| Passage inaudible | tenu | `IncertitudeTest` et `bout-en-bout` : souligné, et ce qui en découle est à confirmer. |

## extraction — 16 scénarios · 16 tenus

| Scénario | État | Ce qui le couvre |
| --- | --- | --- |
| Capture multi-intentions | tenu | `intentions.test.ts`. |
| Information sans action | tenu | `intentions.test.ts`. |
| Passage source affiché | tenu | `AncrageTest`, `bout-en-bout`. |
| Aucune invention | tenu | `AncrageTest` : un élément non rattachable est écarté avant l'écran. |
| Déduction incertaine posée en question | tenu | `RevueTest`, `bout-en-bout`. |
| Déduction sûre appliquée | tenu | `RevueTest`. |
| Expression relative | tenu | `echeances.test.ts` : « avant vendredi » dit un mardi. |
| Expression floue | tenu | `echeances.test.ts` et `bout-en-bout` : horizon, pas de date. |
| Poids indépendant de l'urgence | tenu | `PriorisationTest`. |
| Aucune priorité demandée | tenu | `bout-en-bout` : aucun choix de priorité nulle part. |
| Engagement envers un tiers | tenu | `engagements.test.ts`. |
| Attente envers un tiers | tenu | `engagements.test.ts`, avec le responsable. |
| Plan proposé avec la tâche | tenu | `RevueTest`, `bout-en-bout`. |
| Élément sans plan signalé | tenu | `RevueTest`. |
| Rejet d'une proposition | tenu | `bout-en-bout`. |
| Correction apprise | tenu | `RevueTest` : une correction humaine n'est pas écrasée par une ré-analyse. |

## memoire — 13 scénarios · 12 tenus, 1 partiel

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Création automatique d'une entité | tenu | `MemoireTest` ; la mémoire est reconstruite à chaque rendu depuis les notes. |
| Enrichissement progressif | tenu | `MemoireTest` : aucun doublon. |
| Prénom résolu par le contexte | tenu | `ResolutionTest`, `references.test.ts`, `bout-en-bout`. |
| Ambiguïté non résolue | tenu | `ResolutionTest` : deux candidats à égalité posent la question. |
| Référence à un échange passé | tenu | `echos.test.ts`, `bout-en-bout`. |
| Contexte borné | tenu | `MemoireTest` : l'historique complet n'est jamais transmis. |
| Contexte inspectable | partiel | Chaque candidat de résolution affiche ce sur quoi il est proposé. Le contexte d'une déduction d'analyse, lui, n'est pas encore inspectable depuis l'écran. |
| Synthèse par projet | tenu | L'écran « Les gens » : ce qui est ouvert, ce qui a été décidé, les derniers échanges. `bout-en-bout`. |
| Décroissance sans suppression | tenu | `passe.test.ts` : au-delà de cent vingt jours une note ne se propose plus d'elle-même, sauf si elle porte quelque chose d'ouvert. Rien n'est supprimé, la recherche la retrouve. |
| Fiche personne | tenu | `bout-en-bout` : chaque ligne renvoie à sa capture, et rien ne se renseigne à la main. |
| Déduction de la sphère | tenu | `spheres.test.ts`. |
| Filtrage à la restitution | tenu | `spheres.test.ts` et `bout-en-bout` : rien n'est déplacé ni dupliqué. |
| Fusion de doublons | tenu | `MemoireTest` dans le cœur ; sur la surface, change `fusion-personnes` : « Même personne que… » réunit deux fiches, « Annuler » ou « Séparer » les rend, la fusion tient à la ré-analyse et reste scellée par le coffre (`personnes.test.ts`, bout-en-bout « Deux fiches réunies », « Fusion annulée »). Renommer et séparer une fiche au-delà d'une fusion restent au cœur seul. |

## priorisation — 12 scénarios · 11 tenus, 1 partiel

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Trois éléments au plus | tenu | `PriorisationTest`, `bout-en-bout`. |
| Aucun élément pertinent | tenu | `PriorisationTest`. |
| Urgent mais léger | tenu | `PriorisationTest`. |
| Justification lisible | tenu | `bout-en-bout` : chaque proposition dit la conséquence retenue. |
| Créneau tenu | tenu | `CreneauProtegeTest`, `creneau.test.ts`, `bout-en-bout`. |
| Renoncement explicite | tenu | `bout-en-bout` : compté sans un mot de reproche. |
| Créneau court | tenu | Change `agenda-local` : `AgendaMaintenantTest`, `regles-agenda.test.ts`, `bout-en-bout` sous horloge figée. |
| Contexte inadapté | partiel | Le volet durée est tenu (`AgendaMaintenantTest` : un élément trop long ou de durée inconnue n'est pas proposé, et revient ensuite). Le volet appareil ne l'est pas : aucun élément ne dit de quel appareil il a besoin, et le deviner d'un mot serait inventer. |
| Journée dense | tenu | Change `agenda-local` : `AgendaMaintenantTest`, `bout-en-bout`. |
| Élément écarté | tenu | `arevoir.test.ts`, `bout-en-bout`. |
| Rejets répétés | tenu | `ARevoirTest`, `bout-en-bout` : le compte survit au rechargement. |
| Tâche dormante | tenu | `ARevoirTest` : seuil selon le poids. |

## rappels — 11 scénarios · 10 tenus, 1 partiel

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Rappel lié à une personne | tenu | Change `agenda-local` : `SignauxAgendaTest` (homonymes compris), `RappelsAgendaTest`, `bout-en-bout`. |
| Déclencheur de lieu ramené à un déclencheur disponible | tenu | `EcheancierTest`, `bout-en-bout` : le rappel dit à quel signal il était accroché et pourquoi il arrive autrement. |
| Rappel lié à un événement récurrent | partiel | `SignauxAgendaTest` : la prochaine occurrence après la pose du plan, jour de la semaine compris. Ensuite, le rappel reste dû à chaque point de rupture jusqu'à être traité ou escaladé, au lieu de revenir avant chaque occurrence. |
| Signal préféré à l'heure | tenu | `EcheancierTest`. |
| Report à la fin de la réunion | tenu | Change `agenda-local` : `RappelsAgendaTest`, `bout-en-bout` (retenu pendant, livré en retard après). |
| Rappel critique immédiat | tenu | Change `rappels-silence-critique`. Marqué dans « Ajuster », ou poids fort échu : présenté sans attendre, réunion et plage de silence comprises (`RappelsSilenceCritiqueTest`, `silence-critique.test.ts`, bout-en-bout « Critique pendant la plage de silence »). |
| Plusieurs rappels simultanés | tenu | `RappelsTest`, `bout-en-bout` : une bande unique, groupée. |
| Briefing avant réunion | tenu | Change `agenda-local` : `MomentsReunionTest` ; le bandeau « avant » de Maintenant le présente, chaque ligne renvoyant à sa capture. |
| Aucun élément à rappeler | tenu | `rappels.test.ts`. |
| Rappel ignoré trois fois | tenu | `bout-en-bout` : escalade en Revue avec ses trois sorties. |
| Plage de silence respectée | tenu | Change `rappels-silence-critique`. Plage quotidienne déclarée dans « Vos données » ; le non critique est retenu puis présenté à sa fin, ou à la reprise suivante (`RappelsSilenceCritiqueTest`, bout-en-bout « Rappel retenu pendant la nuit », « Rappel présenté à la fin de la plage »). Application fermée, rien ne sonne : c'est déjà le cas hors plage. |

## revue — 12 scénarios · 12 tenus

| Scénario | État | Ce qui le couvre |
| --- | --- | --- |
| Revue proposée au moment choisi | tenu | `RevueTest`. |
| Aucun rangement hors Revue | tenu | `bout-en-bout` : la capture ne demande rien. |
| Acceptation groupée | tenu | `RevueTest`, `bout-en-bout` : proposée seulement si tout est sûr. |
| Ajustement rapide | tenu | `bout-en-bout`. |
| Revue interrompue | tenu | `bout-en-bout` : reprise sans perte après rechargement. |
| Regroupement par source | tenu | `bout-en-bout` : un groupe par capture. |
| Urgent d'abord | tenu | `RevueTest`. |
| Plan obligatoire | tenu | `bout-en-bout` : accepter une tâche réclame un plan. |
| Classement « un jour » assumé | tenu | `bout-en-bout`. |
| Attente sans nouvelle | tenu | `ArriereEtRelanceTest`, `bout-en-bout`. |
| Retard sans pression | tenu | `bout-en-bout` : la relance dit depuis quand, sans reprocher. |
| Arriéré volumineux | tenu | `ArriereEtRelanceTest` : Revue réduite, le reste demeure en file. |

## recherche — 7 scénarios · 7 tenus

| Scénario | État | Ce qui le couvre |
| --- | --- | --- |
| Question sur un engagement | tenu | `RechercheTest`, `recherche.test.ts`. |
| Question sur une décision | tenu | `RechercheTest`. |
| Repère temporel flou | tenu | `RepereTemporelTest`, `bout-en-bout`. |
| Absence assumée | tenu | `recherche.test.ts` : une absence n'est jamais maquillée en suggestion. |
| Recherche en mode avion | tenu | `bout-en-bout` : aucune requête sortante. |
| Élément passé pertinent proposé | tenu | `passe.test.ts`, `bout-en-bout`. |
| Suggestion ignorable | tenu | `bout-en-bout` : rien à fermer, et la capture n'a pas attendu. |

## reunions — 9 scénarios · 9 tenus

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Dépose proposée | tenu | Change `agenda-local` : `MomentsReunionTest`, `bout-en-bout`. |
| Reprise après réunion | tenu | Change `agenda-local` : `MomentsReunionTest`, `bout-en-bout`. |
| Capture post-réunion contextualisée | tenu | Change `agenda-local` : `MomentsReunionTest`, `agenda-rattachement.test.ts`, `bout-en-bout`. |
| Proposition non intrusive | tenu | Change `agenda-local` : `MomentsReunionTest`, `bout-en-bout`. |
| Compte rendu importé | tenu | `reunion.test.ts`, `bout-en-bout` : engagements d'un côté, attentes de l'autre. |
| Aucun élément inventé | tenu | `reunion.test.ts` : l'ancrage écarte ce qui ne se rattache pas. |
| Engagement extrait à confirmer | tenu | `bout-en-bout` : marqué « à confirmer », aucun rappel possible avant. |
| Enregistrement explicite | tenu | `bout-en-bout` : voyant visible, y compris après changement d'écran. |
| Aucun enregistrement implicite | tenu | `bout-en-bout` : aucun voyant au repos ; aucun chemin n'ouvre le micro sans geste. |

## donnees — 10 scénarios · 6 tenus, 1 partiel, 3 non tenus

| Scénario | État | Ce qui le couvre, ou ce qui manque |
| --- | --- | --- |
| Utilisation complète hors ligne | tenu | `bout-en-bout` : tout le parcours sans une requête sortante. |
| Appareil perdu | tenu | `coffre.test.ts`, `bout-en-bout` : après chiffrement, pas un mot des notes dans la base. |
| Capture marquée privée | non tenu | Il n'y a pas d'analyse distante, donc rien à en exclure (tâche 7.1). L'interrupteur serait un bouton qui ne commande rien. |
| Sphère personnelle exclue | non tenu | Même cause. |
| Export complet | tenu | `export.test.ts` : tout sort, et ce qui ne sort pas est dit. |
| Suppression d'une capture | tenu | `suppression.test.ts` : la capture, son audio et ses éléments partent, et rien d'autre. |
| Fenêtre d'annulation | tenu | `suppression.test.ts` et `bout-en-bout` : trente secondes pour se raviser, et la bande disparaît avec la fenêtre. Fermer l'application la ferme aussi — limite assumée. |
| Modification concurrente | non tenu | Demande la synchronisation entre appareils (tâche 3.8). |
| Capture prioritaire | non tenu | Même cause : il n'y a pas de synchronisation pendant laquelle capturer. |
| Service d'analyse indisponible | partiel | Le moteur de transcription indisponible est traité et dit (`pipeline.test.ts`, écran de Revue). Un service **distant** d'analyse n'existe pas, donc son indisponibilité n'est pas un cas réel. |

---

## Compte

| | Tenus | Partiels | Non tenus |
| --- | --- | --- | --- |
| **112 scénarios** | **97** | **9** | **6** |

## Ce que ce tableau dit, et ce qu'il ne dit pas

Il dit qu'une note dictée est capturée sans rien demander, transcrite sur
l'appareil, découpée en éléments ancrés dans ce qui a été dit, présentée une fois en
Revue, rappelée au retour dans l'application, et retrouvée ensuite — sans qu'aucune
donnée ne quitte l'appareil, et sans qu'aucune capture ne se perde, y compris quand
le processus est tué en pleine phrase.

Il ne dit rien de l'usage réel. Les trois promesses mesurables du produit — capture
sous 300 ms, Revue sous deux minutes, aucune capture perdue — ne sont tenues ici que
par des mesures de laboratoire : la latence est mesurée à chaque publication et
bloque au-dessus du seuil, mais sur un micro simulé ; la Revue n'a jamais été
traversée sur des captures réelles ; et « aucune capture perdue » est vérifié sur un
arrêt brutal provoqué, pas sur une semaine de téléphone. C'est l'objet du palier 8,
et il demande quelqu'un qui s'en sert.
