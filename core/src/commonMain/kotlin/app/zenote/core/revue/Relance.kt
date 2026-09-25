package app.zenote.core.revue

import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.texte.Texte
import kotlinx.datetime.LocalDate
import kotlinx.datetime.daysUntil

/**
 * La relance : ce que la Revue remonte d'elle-même, sans que l'utilisateur ait à y penser.
 *
 * Deux cas, et deux seulement (spec `revue` — « Relance des engagements et des
 * attentes ») :
 *
 *  - un **engagement** dont l'échéance approche — ce qu'on a promis à quelqu'un ;
 *  - une **attente** envers un tiers restée sans nouvelle au-delà du délai habituel
 *    observé pour cette personne.
 *
 * Le délai est par personne parce qu'il n'a pas le même sens partout : trois jours
 * sans réponse d'un collègue proche n'est pas trois jours sans réponse d'un
 * fournisseur. Faute d'observation, on retombe sur [DELAI_PAR_DEFAUT_JOURS].
 */

/** La dernière fois qu'on a eu des nouvelles sur une attente. */
data class Suivi(val elementId: ElementId, val derniereNouvelle: LocalDate)

/** Ce que l'utilisateur peut faire d'un geste sur une relance proposée. */
enum class OptionRelance { RELANCER, PROLONGER, CLORE }

/**
 * Une relance proposée en Revue.
 *
 * @param motif dit pourquoi elle remonte maintenant — jamais un reproche, un constat.
 */
data class PropositionRelance(
    val element: ElementResolu,
    val motif: String,
    val options: List<OptionRelance> = listOf(
        OptionRelance.RELANCER,
        OptionRelance.PROLONGER,
        OptionRelance.CLORE,
    ),
)

object Relance {

    /** En deçà de quoi une échéance d'engagement est dite « qui approche ». */
    const val JOURS_ECHEANCE_PROCHE: Int = 3

    /**
     * Le délai retenu quand aucun délai n'a encore été observé pour la personne.
     *
     * `design.md` — Open Questions laisse ouvert le fait d'apprendre ce délai par
     * personne dès la v1 ; la signature l'accepte déjà, la valeur par défaut tient
     * lieu de repli.
     */
    const val DELAI_PAR_DEFAUT_JOURS: Int = 7

    /** Le délai habituel observé pour une personne, ou le repli. */
    fun delaiHabituel(personne: String?, observes: Map<String, Int>): Int {
        if (personne == null) return DELAI_PAR_DEFAUT_JOURS
        val trouve = observes.entries
            .filter { Texte.memeNom(it.key, personne) }
            .minByOrNull { it.key }
        return trouve?.value ?: DELAI_PAR_DEFAUT_JOURS
    }

    /**
     * Ce que la Revue du jour doit remonter.
     *
     * @param suivis la dernière nouvelle connue par attente ; une attente sans suivi
     *   est comptée depuis sa propre échéance, et ignorée si elle n'en a pas.
     * @param delaisObserves délai habituel par personne, en jours.
     */
    fun aRelancer(
        elements: List<ElementResolu>,
        aujourdhui: LocalDate,
        suivis: List<Suivi> = emptyList(),
        delaisObserves: Map<String, Int> = emptyMap(),
    ): List<PropositionRelance> {
        val parElement = suivis.associate { it.elementId to it.derniereNouvelle }

        return elements
            .filter { it.verdict == Verdict.ACCEPTE }
            .mapNotNull { element ->
                when (element.type) {
                    TypeElement.ENGAGEMENT -> engagement(element, aujourdhui)
                    TypeElement.ATTENTE -> attente(
                        element = element,
                        depuis = parElement[element.id] ?: element.echeance,
                        aujourdhui = aujourdhui,
                        delaisObserves = delaisObserves,
                    )

                    else -> null
                }
            }
            // Le plus en retard d'abord, puis un départage stable par identifiant.
            .sortedWith(compareBy({ it.element.echeance?.toString() ?: "9999" }, { it.element.id.value }))
    }

    private fun engagement(element: ElementResolu, aujourdhui: LocalDate): PropositionRelance? {
        val echeance = element.echeance ?: return null
        val jours = aujourdhui.daysUntil(echeance)
        if (jours > JOURS_ECHEANCE_PROCHE) return null
        val motif = when {
            jours < 0 -> "engagement dont l'échéance est passée de ${-jours} jour(s)"
            jours == 0 -> "engagement à tenir aujourd'hui"
            else -> "engagement à tenir dans $jours jour(s)"
        }
        val envers = element.interlocuteur?.let { " envers $it" } ?: ""
        return PropositionRelance(element, motif + envers)
    }

    private fun attente(
        element: ElementResolu,
        depuis: LocalDate?,
        aujourdhui: LocalDate,
        delaisObserves: Map<String, Int>,
    ): PropositionRelance? {
        if (depuis == null) return null
        val silence = depuis.daysUntil(aujourdhui)
        val delai = delaiHabituel(element.interlocuteur, delaisObserves)
        if (silence <= delai) return null
        val qui = element.interlocuteur ?: "cette personne"
        // Deux précautions dans cette phrase. Le délai n'est dit « observé » que s'il
        // l'a été : le rendre tel quel quand on est retombé sur le repli ferait passer
        // une valeur par défaut pour une mesure. Et rien n'y désigne la personne par un
        // genre — un prénom ne le donne pas, et se tromper là-dessus, sur l'écran de
        // quelqu'un qui relit ses engagements, se remarque.
        val observe = delaisObserves.keys.any { Texte.memeNom(it, element.interlocuteur ?: "") }
        val qualifie = if (observe) "au-delà du délai habituel pour $qui" else
            "au-delà du délai de relance par défaut"
        return PropositionRelance(
            element = element,
            motif = "sans nouvelle de $qui depuis $silence jours, $qualifie ($delai jours)",
        )
    }
}
