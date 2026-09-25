package app.zenote.core.revue

import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Poids
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import kotlinx.datetime.LocalDate

/**
 * Ce qui remonte en Revue parce que la vue Maintenant n'en fait plus rien.
 *
 * Deux situations, différentes par la cause et semblables par le symptôme : un
 * élément qui reste là sans avancer, et qu'aucune insistance ne débloquera.
 *
 *  - **écarté plusieurs fois** : on l'a vu passer, on l'a repoussé, et on
 *    recommencera. Le proposer une quatrième fois à l'identique n'use que
 *    l'utilisateur. Ce n'est pas le moment qui cloche, c'est l'élément — trop gros,
 *    mal formulé, ou plus d'actualité.
 *  - **dormant** : personne ne l'a touché depuis longtemps, alors que son poids dit
 *    qu'il compte. Un élément lourd qui dort est le signe d'un blocage, pas d'un
 *    oubli, et la seule chose utile est de demander ce qui bloque.
 *
 * ## Ce que ce module refuse de faire
 *
 * Il ne relance pas, ne compte pas les retards, et ne reproche rien. Le motif est
 * toujours un constat sur l'élément — « écarté trois fois », « sans avancée depuis
 * trois semaines » — jamais sur celui qui ne l'a pas fait. C'est la règle de forme
 * du produit, et c'est aussi la seule façon qu'une remontée soit lue plutôt
 * qu'évitée.
 *
 * Il ne décide pas non plus quoi faire : il pose les issues et s'arrête. Découper,
 * planifier, déléguer, abandonner — ce sont des arbitrages qui demandent de savoir
 * pourquoi ça bloque, et personne d'autre que l'utilisateur ne le sait.
 */

/** Pourquoi un élément remonte. */
enum class MotifRevoir { ECARTE_PLUSIEURS_FOIS, DORMANT }

/** Ce qu'on peut faire d'un élément qui n'avance pas. */
enum class IssueRevoir { REFORMULER, DECOUPER, PLANIFIER, DELEGUER, ABANDONNER }

/** Un élément remonté, avec le constat qui l'explique et les issues proposées. */
data class ElementARevoir(
    val element: ElementResolu,
    val motif: MotifRevoir,
    /** Le constat, affichable tel quel. Jamais un reproche. */
    val explication: String,
    val issues: List<IssueRevoir>,
)

/** Ce que la surface a retenu d'un élément entre deux Revues. */
data class SuiviElement(
    val elementId: String,
    /** Combien de fois il a été écarté dans la vue Maintenant. */
    val ecarteFois: Int = 0,
    /** Le dernier jour où on y a touché, en ISO. Absent : jamais depuis sa création. */
    val vuLe: LocalDate? = null,
)

object ARevoir {

    /**
     * Au-delà, proposer le même élément à l'identique n'apprend plus rien.
     *
     * Trois, comme pour les rappels, et pour la même raison : deux fois peut être un
     * mauvais moment, trois fois est une constante.
     */
    const val ECARTS_AVANT_REMONTEE: Int = 3

    /**
     * Depuis combien de jours sans y toucher un élément dort, selon son poids.
     *
     * « Une durée anormale au regard de leur poids », dit la spec. Ce qui est anormal
     * pour une chose dont dépend quelqu'un d'autre ne l'est pas pour une idée à
     * explorer : remonter les deux au même rythme ferait de la Revue une liste de
     * rappels, c'est-à-dire ce que le produit refuse d'être.
     */
    fun dormanceEnJours(poids: Poids?): Int = when (poids) {
        Poids.FORT -> 14
        Poids.MOYEN -> 30
        else -> 60
    }

    /**
     * Les éléments à revoir, les plus lourds d'abord.
     *
     * Un élément qui relève des deux motifs ne remonte qu'une fois, sous celui qui
     * dit le plus : avoir été écarté trois fois est un fait plus précis que dormir.
     */
    fun aRevoir(
        elements: List<ElementResolu>,
        suivis: List<SuiviElement>,
        aujourdhui: LocalDate,
    ): List<ElementARevoir> {
        val parId = suivis.associateBy { it.elementId }

        return elements
            .asSequence()
            .filter { it.verdict != Verdict.REJETE && it.type.actionnable }
            .mapNotNull { element ->
                val suivi = parId[element.id.value] ?: SuiviElement(element.id.value)
                ecarteTropSouvent(element, suivi) ?: dormant(element, suivi, aujourdhui)
            }
            .sortedWith(
                compareByDescending<ElementARevoir> { ordinalPoids(it.element.poids) }
                    // Départage stable : deux Revues du même jour présentent le même ordre.
                    .thenBy { it.element.id.value },
            )
            .toList()
    }

    private fun ecarteTropSouvent(element: ElementResolu, suivi: SuiviElement): ElementARevoir? {
        if (suivi.ecarteFois < ECARTS_AVANT_REMONTEE) return null
        return ElementARevoir(
            element = element,
            motif = MotifRevoir.ECARTE_PLUSIEURS_FOIS,
            explication = "écarté ${suivi.ecarteFois} fois : ce n'est sans doute pas le bon découpage",
            issues = listOf(IssueRevoir.REFORMULER, IssueRevoir.DECOUPER, IssueRevoir.ABANDONNER),
        )
    }

    private fun dormant(
        element: ElementResolu,
        suivi: SuiviElement,
        aujourdhui: LocalDate,
    ): ElementARevoir? {
        // Un élément qu'on n'a pas encore accepté n'est pas bloqué : il attend son
        // tour en Revue, ce qui est sa place normale.
        if (element.verdict != Verdict.ACCEPTE) return null
        val depuis = suivi.vuLe ?: return null
        val jours = aujourdhui.toEpochDays() - depuis.toEpochDays()
        val seuil = dormanceEnJours(element.poids)
        if (jours < seuil) return null

        return ElementARevoir(
            element = element,
            motif = MotifRevoir.DORMANT,
            explication = "sans avancée depuis ${jours} jours",
            issues = listOf(
                IssueRevoir.DECOUPER,
                IssueRevoir.PLANIFIER,
                IssueRevoir.DELEGUER,
                IssueRevoir.ABANDONNER,
            ),
        )
    }

    private fun ordinalPoids(poids: Poids?): Int = when (poids) {
        Poids.FORT -> 3
        Poids.MOYEN -> 2
        Poids.FAIBLE -> 1
        null -> 0
    }
}
