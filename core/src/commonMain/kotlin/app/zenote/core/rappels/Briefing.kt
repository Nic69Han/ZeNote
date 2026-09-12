package app.zenote.core.rappels

import app.zenote.core.memoire.Fiches
import app.zenote.core.memoire.LigneFiche
import app.zenote.core.memoire.Memoire
import app.zenote.core.memoire.TypeEntite
import app.zenote.core.model.ElementResolu

/**
 * Le briefing avant réunion : ce qui est en attente avec les participants.
 *
 * Il se construit depuis les fiches d'entité, donc depuis ce qui a été capturé — rien
 * n'est demandé à l'utilisateur. Et quand il n'y a rien, il n'y a rien : un briefing
 * vide serait une interruption sans contenu, exactement ce que la spec interdit.
 */
data class Briefing(
    val evenement: EvenementConnu,
    val ouverts: List<LigneFiche>,
    val decide: List<LigneFiche>,
)

object Briefings {

    /**
     * Le briefing d'un événement, ou `null` si aucun élément ouvert n'y est lié.
     */
    fun avant(
        evenement: EvenementConnu,
        memoire: Memoire,
        elements: List<ElementResolu>,
    ): Briefing? {
        val fiches = evenement.participants
            .sorted()
            .mapNotNull { memoire.trouver(TypeEntite.PERSONNE, it) }
            .mapNotNull { Fiches.de(memoire, it.id, elements) }

        val ouverts = fiches.flatMap { it.ouverts }.distinctBy { it.elementId }
            .sortedBy { it.elementId.value }
        val decide = fiches.flatMap { it.decide }.distinctBy { it.elementId }
            .sortedBy { it.elementId.value }

        if (ouverts.isEmpty() && decide.isEmpty()) return null
        return Briefing(evenement, ouverts, decide)
    }
}
