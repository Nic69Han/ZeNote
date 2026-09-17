package app.zenote.core.rappels

import app.zenote.core.model.ElementId
import app.zenote.core.texte.Texte

/**
 * Un rappel : un élément, un signal, et rien d'autre.
 *
 * Il ne porte pas d'heure. C'est délibéré : l'heure est un attribut du signal quand le
 * signal est une date, pas une propriété du rappel. Voir [Declencheur].
 */
data class RappelId(val value: String) {
    init { require(value.isNotBlank()) { "Un identifiant de rappel ne peut pas être vide." } }

    override fun toString(): String = value
}

data class Rappel(
    val id: RappelId,
    val elementId: ElementId,
    val texte: String,
    val declencheur: Declencheur,
    /**
     * `true` quand l'utilisateur l'a marqué critique, ou qu'une conséquence immédiate
     * est en jeu. Seul cas qui court-circuite la file d'opportunité et les plages de
     * silence.
     */
    val critique: Boolean = false,
) {
    init { require(texte.isNotBlank()) { "Un rappel sans texte n'a rien à rappeler." } }
}

object Rappels {

    /**
     * Les rappels qu'un événement d'agenda fait devenir actionnables, présentés juste
     * avant lui.
     *
     * Trois façons d'accrocher : la personne présente à la réunion, l'événement lui-même,
     * ou l'événement récurrent dont c'est une occurrence.
     */
    fun avant(evenement: EvenementConnu, rappels: List<Rappel>): List<Rappel> = rappels
        .filter { rappel ->
            when (val d = rappel.declencheur) {
                is Declencheur.Personne ->
                    evenement.participants.any { Texte.memeNom(it, d.nom) }

                is Declencheur.Evenement -> d.evenementId == evenement.id

                // Un récurrent se reconnaît à son titre, occurrence après occurrence :
                // il reste accroché tant qu'il n'est pas clos.
                is Declencheur.EvenementRecurrent ->
                    evenement.recurrent && Texte.memeNom(d.titre, evenement.titre)

                is Declencheur.Transition -> false
            }
        }
        .sortedBy { it.id.value }
}
