package app.zenote.core.revue

import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Verdict
import app.zenote.core.priorisation.Priorisation
import app.zenote.core.priorisation.Urgence
import kotlinx.datetime.LocalDate

/**
 * L'ordre dans lequel la Revue présente ce qui attend une décision.
 *
 * Deux règles, tirées de la spec `revue` — « Ordre de présentation » :
 *
 *  1. Les éléments issus d'une même capture sont présentés **ensemble**, pour que la
 *     source ne soit relue qu'une fois. C'est ce qui rend une capture longue à trois
 *     sujets traitable en quelques secondes plutôt qu'en trois allers-retours.
 *  2. Entre les groupes, l'urgent passe devant ; à l'intérieur d'un groupe, l'urgent
 *     puis l'incertain.
 *
 * Le départage final se fait sur l'identifiant : deux appels donnent le même ordre.
 */

/** Une proposition en attente, avec ce qui justifie sa place dans la file. */
data class EntreeRevue(
    val element: ElementResolu,
    val urgence: Urgence,
    /** `true` si une déduction est sous le seuil : à poser en question, pas en fait. */
    val aConfirmer: Boolean,
    /**
     * `true` si l'acceptation de cet élément réclamera un plan — c'est le bouclage
     * décrit par la spec, vu depuis la file plutôt que depuis la décision.
     */
    val planAFournir: Boolean,
) {
    val id: ElementId get() = element.id

    /**
     * `true` quand l'élément peut partir dans une acceptation groupée : tous ses champs
     * déduits sont sûrs, et rien ne reste à demander. Un actionnable sans plan n'est
     * jamais éligible — il faut bien que quelqu'un réponde à la question du plan.
     */
    val acceptableEnGroupe: Boolean get() = !aConfirmer && !planAFournir
}

/** Les entrées nées d'une même capture, dans l'ordre où la Revue les présente. */
data class GroupeRevue(val captureId: CaptureId, val entrees: List<EntreeRevue>) {
    init {
        require(entrees.isNotEmpty()) { "Un groupe de Revue sans entrée n'a rien à présenter." }
    }
}

object FileRevue {

    /** Construit l'entrée de Revue d'un élément, à la date du jour donnée. */
    fun entree(element: ElementResolu, aujourdhui: LocalDate): EntreeRevue = EntreeRevue(
        element = element,
        urgence = Priorisation.urgence(element.echeance, aujourdhui),
        aConfirmer = element.aConfirmer,
        planAFournir = element.type.actionnable && element.plan == null,
    )

    /**
     * La file groupée par capture source. Seuls les éléments encore en attente de
     * décision y figurent : ce qui a déjà été tranché ne repasse pas.
     */
    fun groupes(elements: List<ElementResolu>, aujourdhui: LocalDate): List<GroupeRevue> =
        elements
            .filter { it.verdict == Verdict.EN_ATTENTE }
            .map { entree(it, aujourdhui) }
            .groupBy { it.element.captureId }
            .map { (captureId, dedans) ->
                GroupeRevue(
                    captureId = captureId,
                    entrees = dedans.sortedWith(ordreInterne),
                )
            }
            .sortedWith(
                // Un groupe vaut son entrée la plus pressante : une capture qui porte
                // une échéance du jour passe devant une capture sans échéance.
                compareBy<GroupeRevue> { groupe -> groupe.entrees.minOf { it.urgence.ordinal } }
                    .thenBy { it.captureId.value },
            )

    /** La même file, à plat : l'ordre exact de présentation, élément par élément. */
    fun file(elements: List<ElementResolu>, aujourdhui: LocalDate): List<EntreeRevue> =
        groupes(elements, aujourdhui).flatMap { it.entrees }

    private val ordreInterne =
        compareBy<EntreeRevue> { it.urgence.ordinal }
            .thenByDescending { it.aConfirmer }
            .thenBy { it.id.value }
}
