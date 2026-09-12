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
import kotlinx.datetime.LocalDate
import kotlinx.serialization.builtins.ListSerializer
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

        val entrees = enAttente.map { dto ->
            val resolu = dto.versResolu()
            EntreeRevueJson(
                element = dto,
                aConfirmer = dto.aConfirmer(),
                planManquant = resolu.planManquant,
                urgence = Priorisation.urgence(resolu.echeance, date).name,
            )
        }

        // Les captures sont présentées dans l'ordre de leur entrée la plus pressante ;
        // à l'intérieur d'un groupe, l'urgent puis l'incertain d'abord.
        val groupes = entrees
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
            RevueJson(groupes = groupes, total = entrees.size),
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

    // ------------------------------------------------------------------ interne

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
