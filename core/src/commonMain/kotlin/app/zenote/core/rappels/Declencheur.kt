package app.zenote.core.rappels

import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Plan
import app.zenote.core.texte.Texte
import kotlinx.datetime.Instant

/**
 * Les signaux auxquels un rappel s'accroche.
 *
 * Le fondement est l'intention d'implémentation — « quand *signal*, je fais *action* » —
 * qui améliore fortement la mémoire prospective là où une heure seule échoue
 * (`design.md` — Gollwitzer ; McDaniel et al. 2008). Le déclencheur vaut donc mieux
 * que l'heure, et l'heure n'est qu'un repli.
 *
 * **La position géographique n'est pas un déclencheur** et n'est pas collectée : elle
 * est hors périmètre v1. Un déclencheur de lieu formulé par l'utilisateur est ramené
 * au signal disponible le plus proche, en le disant — voir [Declencheurs.ramenerLieu].
 */
sealed interface Declencheur {

    /** La formulation affichée, telle qu'elle apparaît dans le plan. */
    val libelle: String

    /** « quand je vois Marc ». */
    data class Personne(val nom: String) : Declencheur {
        init { require(nom.isNotBlank()) { "Un déclencheur de personne sans nom n'en est pas un." } }
        override val libelle: String get() = "je vois $nom"
    }

    /** Un événement précis de l'agenda. */
    data class Evenement(val evenementId: String, val titre: String) : Declencheur {
        init { require(evenementId.isNotBlank()) { "Un événement déclencheur doit être identifié." } }
        override val libelle: String get() = "commence « $titre »"
    }

    /** Un événement qui revient — « avant le point du lundi ». */
    data class EvenementRecurrent(val titre: String) : Declencheur {
        init { require(titre.isNotBlank()) { "Un événement récurrent sans titre n'est pas repérable." } }
        override val libelle: String get() = "revient « $titre »"
    }

    /** Une transition d'usage : la fin d'une activité, la reprise de l'appareil. */
    data class Transition(val point: PointDeRupture) : Declencheur {
        override val libelle: String get() = point.libelle
    }
}

/**
 * Les frontières d'activité auxquelles on a le droit d'interrompre.
 *
 * Une interruption arrivant à une frontière de sous-tâche coûte bien moins cher qu'au
 * milieu (`design.md` — Iqbal & Bailey). C'est la seule justification de cette liste :
 * elle n'est pas extensible par confort.
 */
enum class PointDeRupture {
    FIN_DE_REUNION,
    FIN_DE_CRENEAU,
    REPRISE_APPAREIL,
    ;

    internal val libelle: String
        get() = when (this) {
            FIN_DE_REUNION -> "la réunion se termine"
            FIN_DE_CRENEAU -> "le créneau d'agenda se termine"
            REPRISE_APPAREIL -> "je reprends l'appareil"
        }
}

/** Un événement d'agenda tel que le cœur le lit : en local, et en lecture seule. */
data class EvenementConnu(
    val id: String,
    val titre: String,
    val debut: Instant,
    val fin: Instant,
    val lieu: String? = null,
    val participants: List<String> = emptyList(),
    val recurrent: Boolean = false,
) {
    init {
        require(id.isNotBlank()) { "Un événement d'agenda sans identifiant n'est pas rattachable." }
        require(fin > debut) { "Un événement d'agenda finit après avoir commencé." }
    }
}

/** Un déclencheur de substitution, avec ce qui est dit à l'utilisateur pour l'expliquer. */
data class RepliDeclencheur(val declencheur: Declencheur, val explication: String)

object Declencheurs {

    /** Ce que le système répond quand on lui demande un déclencheur de position. */
    const val POSITION_INDISPONIBLE: String =
        "Le déclencheur de position n'est pas disponible."

    /**
     * Ramène un déclencheur de lieu au déclencheur disponible le plus proche.
     *
     * Priorité à un événement d'agenda qui se tient à ce lieu — c'est le meilleur
     * substitut de la position, et il est déjà lu localement. À défaut, la première
     * reprise de l'appareil.
     */
    fun ramenerLieu(lieu: String, evenements: List<EvenementConnu> = emptyList()): RepliDeclencheur {
        require(lieu.isNotBlank()) { "Un déclencheur de lieu sans lieu n'a rien à ramener." }
        val voulu = Texte.plier(lieu)

        val surPlace = evenements
            .filter { it.lieu != null && Texte.plier(it.lieu).contains(voulu) }
            // Le plus proche dans le temps ; départage stable par identifiant.
            .sortedWith(compareBy({ it.debut }, { it.id }))
            .firstOrNull()

        return if (surPlace != null) {
            RepliDeclencheur(
                declencheur = Declencheur.Evenement(surPlace.id, surPlace.titre),
                explication = "$POSITION_INDISPONIBLE Rappel rattaché à l'événement " +
                    "« ${surPlace.titre} », qui se tient à $lieu.",
            )
        } else {
            RepliDeclencheur(
                declencheur = Declencheur.Transition(PointDeRupture.REPRISE_APPAREIL),
                explication = "$POSITION_INDISPONIBLE Rappel rattaché à la première " +
                    "reprise de l'appareil dans la plage habituelle.",
            )
        }
    }
}

/**
 * La fabrique de plans : « quand *signal*, je fais *action* ».
 *
 * L'ordre de préférence est celui de la spec `rappels` — « Signal préféré à l'heure » :
 * un événement d'agenda avec la personne, puis la personne seule, puis l'événement
 * récurrent, et l'heure seulement en dernier recours.
 */
object Plans {

    fun proposer(element: ElementResolu, evenements: List<EvenementConnu> = emptyList()): Plan {
        val action = element.texte
        val interlocuteur = element.interlocuteur

        val avecLaPersonne = interlocuteur?.let { qui ->
            evenements
                .filter { evt -> evt.participants.any { Texte.memeNom(it, qui) } }
                .sortedWith(compareBy({ it.debut }, { it.id }))
                .firstOrNull()
        }

        val declencheur = when {
            avecLaPersonne != null -> "je retrouve $interlocuteur à « ${avecLaPersonne.titre} »"
            interlocuteur != null -> Declencheur.Personne(interlocuteur).libelle
            element.echeance != null -> "on est le ${element.echeance}"
            else -> Declencheur.Transition(PointDeRupture.REPRISE_APPAREIL).libelle
        }
        return Plan(declencheur, action)
    }

    /**
     * `true` si le plan s'appuie sur un signal du monde plutôt que sur une date.
     * Sert à vérifier qu'on n'a pas laissé une heure prendre la place d'un signal.
     */
    fun reposeSurUnSignal(plan: Plan): Boolean = !plan.declencheur.startsWith("on est le ")
}
