package app.zenote.core.api

import app.zenote.core.model.CaptureId
import app.zenote.core.model.Deduit
import app.zenote.core.model.ElementDerive
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Passage
import app.zenote.core.model.Plan
import app.zenote.core.model.Poids
import app.zenote.core.model.Sphere
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.priorisation.ContexteMaintenant
import app.zenote.core.priorisation.Priorisation
import app.zenote.core.rappels.Declencheur
import app.zenote.core.rappels.Echeance
import app.zenote.core.rappels.Echeancier
import app.zenote.core.rappels.FileOpportunite
import app.zenote.core.rappels.Livraison
import app.zenote.core.rappels.PointDeRupture
import app.zenote.core.rappels.Rappel
import app.zenote.core.rappels.RappelId
import app.zenote.core.recherche.RechercheLocale
import app.zenote.core.revue.Arriere
import app.zenote.core.revue.FileRevue
import app.zenote.core.revue.Relance
import app.zenote.core.revue.Suivi
import app.zenote.core.recherche.Reponse
import app.zenote.core.recherche.TexteSource
import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.json.Json

/**
 * Les règles du produit, exposées aux surfaces par un contrat JSON.
 *
 * Le cœur est **sans état** vu d'ici : la surface détient les données et les passe à
 * chaque appel. C'est ce qui permet à la PWA de tout garder en local, et à une
 * application native de faire le même appel sur les mêmes règles.
 */
object Regles {

    private val json = Json {
        ignoreUnknownKeys = true
        encodeDefaults = true
    }

    /**
     * La vue Maintenant : au plus trois éléments, chacun avec sa justification.
     *
     * @param elementsJson tableau d'[ElementJson]
     * @param aujourdhui date ISO `AAAA-MM-JJ`
     * @return tableau de [PropositionJson]
     */
    fun maintenant(elementsJson: String, aujourdhui: String): String {
        val elements = decoder(elementsJson)
        val propositions = Priorisation.maintenant(
            elements = elements.map { it.versResolu() },
            contexte = ContexteMaintenant(LocalDate.parse(aujourdhui)),
        ).map { p ->
            PropositionJson(
                elementId = p.element.id.value,
                texte = p.element.texte,
                raison = p.raison,
                poidsEffectif = p.poidsEffectif.name,
                urgence = p.urgence.name,
            )
        }
        return json.encodeToString(ListSerializer(PropositionJson.serializer()), propositions)
    }

    /**
     * La file de Revue : ce qui attend une décision, groupé par capture source pour
     * que l'utilisateur n'ait à relire la source qu'une fois, et ordonné pour que
     * l'urgent et l'incertain passent devant.
     *
     * @return un [RevueJson]
     */
    fun revue(elementsJson: String, aujourdhui: String): String {
        val date = LocalDate.parse(aujourdhui)
        val enAttente = decoder(elementsJson).filter { it.verdict == Verdict.EN_ATTENTE.name }

        // La file passe d'abord par le domaine : c'est lui qui sait ce qu'une Revue
        // absorbe, et ce qu'il vaut mieux laisser en file plutôt que de le déverser.
        val parId = enAttente.associateBy { it.id }
        val entrees = enAttente.map { FileRevue.entree(it.versResolu(), date) }
        val reduction = Arriere.revueReduite(entrees)

        val retenues = reduction.retenues.map { entree ->
            val dto = parId.getValue(entree.id.value)
            EntreeRevueJson(
                element = dto,
                aConfirmer = entree.aConfirmer,
                planManquant = entree.planAFournir,
                urgence = entree.urgence.name,
            )
        }

        // Les captures sont présentées dans l'ordre de leur entrée la plus pressante ;
        // à l'intérieur d'un groupe, l'urgent puis l'incertain d'abord.
        val groupes = retenues
            .groupBy { it.element.captureId }
            .map { (captureId, dansLeGroupe) ->
                GroupeRevueJson(
                    captureId = captureId,
                    entrees = dansLeGroupe.sortedWith(
                        compareBy<EntreeRevueJson> { urgenceOrdinale(it.urgence) }
                            .thenByDescending { it.aConfirmer }
                            .thenBy { it.element.id },
                    ),
                )
            }
            .sortedWith(
                compareBy<GroupeRevueJson> { groupe ->
                    groupe.entrees.minOf { urgenceOrdinale(it.urgence) }
                }.thenBy { it.captureId },
            )

        return json.encodeToString(
            RevueJson.serializer(),
            RevueJson(
                groupes = groupes,
                total = entrees.size,
                reduite = reduction.reduite,
                motifReduction = if (reduction.reduite) reduction.motif else "",
                demeurentEnFile = reduction.demeurentEnFile.size,
            ),
        )
    }

    /**
     * Ce que la Revue du jour doit remonter d'elle-même : un engagement dont
     * l'échéance approche, une attente restée sans nouvelle au-delà du délai habituel
     * de la personne concernée.
     *
     * C'est la moitié du produit que l'utilisateur ne peut pas réclamer, puisqu'il l'a
     * précisément oubliée.
     *
     * @param suivisJson tableau de [SuiviJson] — la dernière nouvelle connue par attente
     * @param delaisJson objet JSON `{ "personne": jours }`, délais habituels observés
     * @return tableau de [RelanceJson]
     */
    fun relances(
        elementsJson: String,
        aujourdhui: String,
        suivisJson: String,
        delaisJson: String,
    ): String {
        val suivis = json
            .decodeFromString(ListSerializer(SuiviJson.serializer()), suivisJson)
            .map { Suivi(ElementId(it.elementId), LocalDate.parse(it.derniereNouvelle)) }
        val delais = json
            .decodeFromString(MapSerializer(String.serializer(), Int.serializer()), delaisJson)

        val propositions = Relance.aRelancer(
            elements = decoder(elementsJson).map { it.versResolu() },
            aujourdhui = LocalDate.parse(aujourdhui),
            suivis = suivis,
            delaisObserves = delais,
        ).map { p ->
            RelanceJson(
                elementId = p.element.id.value,
                texte = p.element.texte,
                type = p.element.type.name,
                interlocuteur = p.element.interlocuteur,
                echeance = p.element.echeance?.toString(),
                motif = p.motif,
                options = p.options.map { it.name },
            )
        }

        return json.encodeToString(ListSerializer(RelanceJson.serializer()), propositions)
    }

    /**
     * Ce qu'un point de rupture doit présenter, et ce qui remonte en Revue.
     *
     * Le produit n'a qu'un point de rupture observable depuis un navigateur : la
     * reprise de l'appareil, c'est-à-dire le retour dans l'application après une
     * pause. Fin de réunion et fin de créneau demandent l'agenda, qui n'est pas
     * branché — ils viendront avec lui, sans rien changer ici.
     *
     * Trois règles sont tenues par [FileOpportunite], et pas réécrites ici : une
     * seule notification par point de rupture, les rappels groupés dedans, et
     * l'escalade en Revue au bout de trois fois ignoré. Les compteurs d'ignorés sont
     * rejoués depuis ce que la surface a retenu — la file est une machine à états
     * pure, et la rejouer donne exactement l'état où on l'avait laissée.
     *
     * @param elementsJson tableau d'[ElementJson]
     * @param maintenant date-heure locale `AAAA-MM-JJTHH:MM`
     * @param suivisJson tableau de [SuiviRappelJson]
     * @return un [RappelsDuMomentJson]
     */
    fun rappels(elementsJson: String, maintenant: String, suivisJson: String): String {
        val instant = LocalDateTime.parse(maintenant)
        // La file raisonne en `Instant` ; elle ne fait que comparer les siens entre
        // eux. Les lire tous dans le même fuseau suffit donc, et évite de faire entrer
        // une question de fuseau là où il n'y en a pas.
        val a = instant.toInstant(TimeZone.UTC)

        val suivis = json
            .decodeFromString(ListSerializer(SuiviRappelJson.serializer()), suivisJson)
            .associateBy { it.elementId }

        // Seuls les éléments acceptés qui portent un plan sont des rappels : le plan
        // est ce qui transforme une note en quelque chose qui doit revenir.
        val candidats = decoder(elementsJson)
            .map { it.versResolu() }
            .filter { it.verdict == Verdict.ACCEPTE && it.plan != null }
            .sortedBy { it.id.value }

        val file = FileOpportunite()
        val rappels = candidats.map { element ->
            element to Rappel(
                id = RappelId(element.id.value),
                elementId = element.id,
                texte = element.plan!!.action.ifBlank { element.texte },
                declencheur = Declencheur.Transition(PointDeRupture.REPRISE_APPAREIL),
            )
        }

        // Rejouer les ignorés d'abord : un rappel déjà escaladé doit l'être à nouveau
        // avant qu'on tente de le déposer, sinon il repasserait une fois de trop.
        for ((element, rappel) in rappels) {
            repeat(suivis[element.id.value]?.foisIgnore ?: 0) { file.ignorer(rappel) }
        }

        val substitutions = mutableMapOf<String, String>()
        val retards = mutableSetOf<String>()
        for ((element, rappel) in rappels) {
            val suivi = suivis[element.id.value] ?: continue
            val echeance = Echeancier.quand(
                declencheur = element.plan!!.declencheur,
                poseLe = LocalDateTime.parse(suivi.planPoseLe),
            )
            if (!Echeancier.estArrive(echeance, instant)) continue

            when (echeance) {
                is Echeance.Substituee -> substitutions[element.id.value] = echeance.explication
                is Echeance.Observable -> if (echeance.quand < instant) retards += element.id.value
            }
            file.deposer(rappel, a)
        }

        val notification = file.vider(PointDeRupture.REPRISE_APPAREIL, a)
        val parId = candidats.associateBy { it.id.value }

        return json.encodeToString(
            RappelsDuMomentJson.serializer(),
            RappelsDuMomentJson(
                titre = notification?.titre ?: "",
                rappels = notification?.rappels.orEmpty().map { r ->
                    RappelLivreJson(
                        elementId = r.elementId.value,
                        texte = r.texte,
                        declencheur = parId[r.elementId.value]?.plan?.declencheur ?: "",
                        substitution = substitutions[r.elementId.value] ?: "",
                        enRetard = r.elementId.value in retards,
                    )
                },
                escalades = file.escalades().map { e ->
                    EscaladeJson(
                        elementId = e.rappel.elementId.value,
                        texte = e.rappel.texte,
                        motif = e.motif,
                        options = e.options.map { it.name },
                    )
                },
            ),
        )
    }

    /**
     * L'ancrage : ne garde que les éléments dont le passage se relit vraiment dans le
     * texte source. C'est le filet entre le modèle et l'écran.
     *
     * Les éléments écartés sont rendus avec leur raison, pour être traçables plutôt
     * que disparaître en silence.
     *
     * @return un [AncrageJson]
     */
    fun filtrerAncrage(texteSource: String, elementsJson: String): String {
        val retenus = mutableListOf<ElementJson>()
        val ecartes = mutableListOf<EcarteJson>()

        decoder(elementsJson).forEach { dto ->
            val raison = raisonDeRejet(dto, texteSource)
            if (raison == null) retenus += dto else ecartes += EcarteJson(dto.texte, raison)
        }

        return json.encodeToString(
            AncrageJson.serializer(),
            AncrageJson(retenus = retenus, ecartes = ecartes),
        )
    }

    /**
     * Recherche par mots, sur les éléments et sur le texte des captures pas encore
     * structurées. Rien ne sort de l'appareil : c'est une lecture de ce qui est là.
     *
     * @param capturesJson tableau de [CaptureJson] — les captures encore non analysées
     *   comptent, sinon la recherche mentirait par omission à qui vient de dicter
     * @param reseau `false` en mode avion : les résultats locaux sont rendus quand même,
     *   et ce qui est en pause est signalé plutôt que masqué
     * @return un [ReponseJson]
     */
    fun rechercherParMots(
        requete: String,
        elementsJson: String,
        capturesJson: String,
        reseau: Boolean,
    ): String = rendre(
        RechercheLocale.parMots(
            requete = requete,
            elements = decoder(elementsJson).map { it.versResolu() },
            captures = sources(capturesJson),
            reseau = reseau,
        ),
    )

    /**
     * Recherche par question : les mots, plus le repère temporel qu'elle porte —
     * « la semaine dernière », « avant-hier », « il y a trois jours ».
     *
     * @return un [ReponseJson]
     */
    fun rechercherParQuestion(
        requete: String,
        elementsJson: String,
        capturesJson: String,
        aujourdhui: String,
        reseau: Boolean,
    ): String = rendre(
        RechercheLocale.parQuestion(
            requete = requete,
            elements = decoder(elementsJson).map { it.versResolu() },
            captures = sources(capturesJson),
            aujourdhui = LocalDate.parse(aujourdhui),
            reseau = reseau,
        ),
    )

    /** Les captures telles que la recherche les lit. */
    private fun sources(capturesJson: String): List<TexteSource> = json
        .decodeFromString(ListSerializer(CaptureJson.serializer()), capturesJson)
        .map {
            TexteSource(
                captureId = CaptureId(it.id),
                texte = it.texte,
                quand = it.creeLe,
                // Une date que la surface n'a pas fournie n'est pas devinée depuis
                // l'horodatage : elle serait juste la plupart du temps, et fausse le
                // soir, ce qui est la pire des combinaisons pour une recherche.
                jour = it.jour?.let(LocalDate::parse),
            )
        }

    /**
     * Recherche par personne : ce qui a été promis à quelqu'un, et ce qu'on attend
     * d'elle. Les éléments clos sont rendus aussi, en le disant.
     *
     * @return un [ReponseJson]
     */
    fun rechercherParPersonne(
        personne: String,
        elementsJson: String,
        reseau: Boolean,
    ): String = rendre(
        RechercheLocale.parPersonne(
            personne = personne,
            elements = decoder(elementsJson).map { it.versResolu() },
            reseau = reseau,
        ),
    )

    // ------------------------------------------------------------------ interne

    private fun rendre(reponse: Reponse): String = json.encodeToString(
        ReponseJson.serializer(),
        ReponseJson(
            question = reponse.question,
            enonce = reponse.enonce,
            fondee = reponse.fondee,
            citations = reponse.citations.map {
                CitationJson(
                    captureId = it.captureId.value,
                    extrait = it.extrait,
                    pourquoi = it.pourquoi,
                    elementId = it.elementId?.value,
                )
            },
            indisponibleHorsLigne = reponse.indisponibleHorsLigne,
            nonPrisEnCompte = reponse.nonPrisEnCompte,
        ),
    )


    private fun decoder(elementsJson: String): List<ElementJson> =
        json.decodeFromString(ListSerializer(ElementJson.serializer()), elementsJson)

    private fun raisonDeRejet(dto: ElementJson, texteSource: String): String? = when {
        dto.texte.isBlank() -> "élément sans texte"
        dto.debutCar < 0 || dto.finCar <= dto.debutCar -> "passage source vide ou incohérent"
        dto.finCar > texteSource.length -> "passage source absent du texte de la capture"
        runCatching { TypeElement.valueOf(dto.type) }.isFailure -> "type inconnu : ${dto.type}"
        else -> null
    }

    private fun urgenceOrdinale(nom: String): Int =
        runCatching { app.zenote.core.priorisation.Urgence.valueOf(nom).ordinal }
            .getOrDefault(Int.MAX_VALUE)

    private fun ElementJson.aConfirmer(): Boolean = listOfNotNull(
        echeanceConfiance,
        poidsConfiance,
        interlocuteurConfiance,
    ).any { it < app.zenote.core.model.SEUIL_CONFIANCE }

    /** Traduit le format de fil vers le domaine, décisions humaines déjà appliquées. */
    private fun ElementJson.versResolu(): ElementResolu {
        val derive = ElementDerive(
            captureId = CaptureId(captureId),
            type = TypeElement.valueOf(type),
            texte = texte,
            passage = Passage(debutCar, finCar, debutMs, finMs),
            echeance = echeance?.let {
                Deduit(LocalDate.parse(it), echeanceConfiance ?: 1.0, echeanceIndice ?: "fourni")
            },
            poids = poids?.let {
                Deduit(Poids.valueOf(it), poidsConfiance ?: 1.0, poidsIndice ?: "fourni")
            },
            interlocuteur = interlocuteur?.let {
                Deduit(it, interlocuteurConfiance ?: 1.0, "nommé")
            },
            sphere = sphere?.let { Deduit(Sphere.valueOf(it), 1.0, "déduit") },
            plan = planDeclencheur?.let { d ->
                planAction?.let { a -> Deduit(Plan(d, a), 1.0, "plan posé en Revue") }
            },
        )
        return ElementResolu(
            id = ElementId(id),
            captureId = derive.captureId,
            type = derive.type,
            texte = derive.texte,
            passage = derive.passage,
            echeance = derive.echeance?.valeur,
            poids = derive.poids?.valeur,
            interlocuteur = derive.interlocuteur?.valeur,
            sphere = derive.sphere?.valeur,
            plan = derive.plan?.valeur,
            verdict = Verdict.valueOf(verdict),
            aConfirmer = aConfirmer(),
            corrigeParHumain = corrigeParHumain,
            indicePoids = if (corrigeParHumain && poids != null) "poids fixé à la main" else poidsIndice,
        )
    }
}
