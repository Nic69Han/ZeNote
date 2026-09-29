package app.zenote.core.rappels

import app.zenote.core.memoire.Entite
import app.zenote.core.memoire.Fiches
import app.zenote.core.memoire.LigneFiche
import app.zenote.core.memoire.Memoire
import app.zenote.core.memoire.TypeEntite
import app.zenote.core.model.ElementResolu
import app.zenote.core.texte.Texte

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
            .mapNotNull { participant(memoire, it) }
            .distinctBy { it.id }
            .mapNotNull { Fiches.de(memoire, it.id, elements) }

        val ouverts = fiches.flatMap { it.ouverts }.distinctBy { it.elementId }
            .sortedBy { it.elementId.value }
        val decide = fiches.flatMap { it.decide }.distinctBy { it.elementId }
            .sortedBy { it.elementId.value }

        if (ouverts.isEmpty() && decide.isEmpty()) return null
        return Briefing(evenement, ouverts, decide)
    }

    /**
     * La personne de la mémoire qu'un participant d'agenda désigne, ou `null`.
     *
     * L'agenda écrit « Marc Dupont » ou « marc.dupont@exemple.fr » là où les notes
     * disent « Marc ». Le nom exact prime ; à défaut, le prénom, mais seulement s'il ne
     * désigne qu'une personne connue — sinon on ne choisit pas (change `agenda-local`,
     * décision 6).
     */
    fun participant(memoire: Memoire, participant: String): Entite? {
        val lisible = if ('@' in participant) {
            participant.substringBefore('@').replace('.', ' ').replace('_', ' ').replace('-', ' ')
        } else {
            participant
        }
        memoire.trouver(TypeEntite.PERSONNE, lisible)?.let { return it }
        val prenom = Texte.mots(lisible).firstOrNull() ?: return null
        return memoire.entites()
            .filter { it.type == TypeEntite.PERSONNE && Texte.mots(it.nom).firstOrNull() == prenom }
            .singleOrNull()
    }
}
