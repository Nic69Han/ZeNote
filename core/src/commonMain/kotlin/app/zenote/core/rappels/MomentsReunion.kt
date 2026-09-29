package app.zenote.core.rappels

import app.zenote.core.memoire.Memoire
import app.zenote.core.model.ElementResolu
import kotlinx.datetime.Instant
import kotlin.time.Duration.Companion.minutes

/**
 * Les deux rituels de la réunion : avant, et après.
 *
 * Spec `reunions` — « Dépose avant réunion », « Vidage après réunion » ; spec `rappels`
 * — « Briefing avant événement » ; change `agenda-local`, décision 7. L'enchaînement
 * des réunions est le moment où l'on perd le plus : avant, on dépose ce qu'on quitte
 * et l'on voit ce qui est ouvert avec les participants ; après, on retrouve sa dépose
 * et l'on vide ce que la réunion a laissé.
 *
 * Rien ici ne démarre un enregistrement : ce sont des propositions, que l'utilisateur
 * prend d'un geste ou laisse passer.
 */
enum class TypeMoment { AVANT, APRES }

/**
 * Une capture déjà rattachée à une réunion.
 *
 * @param depose `true` pour une dépose faite avant la réunion.
 * @param creeLe le moment de la capture, pour savoir si le vidage a déjà été fait.
 */
data class Rattache(
    val captureId: String,
    val evenementId: String,
    val depose: Boolean,
    val texte: String,
    val creeLe: Instant,
)

/**
 * Un moment de réunion à proposer.
 *
 * @param evenement pour [TypeMoment.AVANT], la réunion qui vient ; pour
 *   [TypeMoment.APRES], la dernière d'un enchaînement qui vient de finir.
 * @param precedentes les réunions enchaînées avant [evenement], le cas échéant.
 * @param minutes avant le début ([TypeMoment.AVANT]) ou depuis la fin ([TypeMoment.APRES]).
 */
data class MomentReunion(
    val type: TypeMoment,
    val evenement: EvenementConnu,
    val precedentes: List<EvenementConnu> = emptyList(),
    val minutes: Int,
    val proposerDepose: Boolean = false,
    val briefing: Briefing? = null,
    val depose: Rattache? = null,
    val proposerVidage: Boolean = false,
)

object MomentsReunion {

    /** Le briefing apparaît à partir de ce délai avant le début. */
    const val BRIEFING_AVANT_MINUTES: Int = 10

    /** La dépose est proposée à partir de ce délai avant le début. */
    const val DEPOSE_AVANT_MINUTES: Int = 2

    /** Après la fin, le moment reste proposé ce temps, pour une réouverture tardive. */
    const val APRES_PENDANT_MINUTES: Int = 60

    /**
     * Une réunion qui commence moins de ce temps après la fin d'une autre l'enchaîne :
     * le vidage de la première attend la fin de l'enchaînement.
     */
    const val ENCHAINEMENT_MINUTES: Int = 5

    /**
     * Les moments à proposer à [maintenant] : au plus un après (le plus récent) puis
     * au plus un avant (le plus proche), dans cet ordre.
     */
    fun a(
        maintenant: Instant,
        evenements: List<EvenementConnu>,
        memoire: Memoire,
        elements: List<ElementResolu>,
        rattaches: List<Rattache>,
    ): List<MomentReunion> {
        val reunions = evenements.filter { it.estReunion }.sortedWith(compareBy({ it.debut }, { it.id }))
        return listOfNotNull(
            apres(maintenant, reunions, rattaches),
            avant(maintenant, reunions, memoire, elements, rattaches),
        )
    }

    private fun avant(
        maintenant: Instant,
        reunions: List<EvenementConnu>,
        memoire: Memoire,
        elements: List<ElementResolu>,
        rattaches: List<Rattache>,
    ): MomentReunion? {
        val prochaine = reunions.firstOrNull {
            it.debut > maintenant && it.debut - maintenant <= BRIEFING_AVANT_MINUTES.minutes
        } ?: return null
        val minutes = (prochaine.debut - maintenant).inWholeMinutes.toInt()
        val dejaDeposee = rattaches.any { it.depose && it.evenementId == prochaine.id }
        val briefing = Briefings.avant(prochaine, memoire, elements)
        val proposerDepose = minutes <= DEPOSE_AVANT_MINUTES && !dejaDeposee

        // Un moment qui n'a rien à dire ne s'affiche pas.
        if (briefing == null && !proposerDepose) return null
        return MomentReunion(
            type = TypeMoment.AVANT,
            evenement = prochaine,
            minutes = minutes,
            proposerDepose = proposerDepose,
            briefing = briefing,
        )
    }

    private fun apres(
        maintenant: Instant,
        reunions: List<EvenementConnu>,
        rattaches: List<Rattache>,
    ): MomentReunion? {
        val enchainement = enchainements(reunions).lastOrNull { chaine ->
            val fin = chaine.maxOf { it.fin }
            fin <= maintenant && maintenant - fin <= APRES_PENDANT_MINUTES.minutes
        } ?: return null

        val fin = enchainement.maxOf { it.fin }
        val derniere = enchainement.last { it.fin == fin }
        val ids = enchainement.map { it.id }.toSet()
        val depose = rattaches
            .filter { it.depose && it.evenementId in ids }
            .minByOrNull { it.creeLe }
        val vidageFait = rattaches.any { !it.depose && it.evenementId in ids && it.creeLe >= fin }

        return MomentReunion(
            type = TypeMoment.APRES,
            evenement = derniere,
            precedentes = enchainement.filter { it !== derniere },
            minutes = (maintenant - fin).inWholeMinutes.toInt(),
            depose = depose,
            proposerVidage = !vidageFait,
        )
    }

    /** Les réunions groupées par enchaînement, dans l'ordre. */
    fun enchainements(reunions: List<EvenementConnu>): List<List<EvenementConnu>> {
        val resultat = mutableListOf<MutableList<EvenementConnu>>()
        for (reunion in reunions) {
            val courante = resultat.lastOrNull()
            val finCourante = courante?.maxOf { it.fin }
            if (courante != null && finCourante != null &&
                reunion.debut - finCourante < ENCHAINEMENT_MINUTES.minutes
            ) {
                courante += reunion
            } else {
                resultat += mutableListOf(reunion)
            }
        }
        return resultat
    }
}
