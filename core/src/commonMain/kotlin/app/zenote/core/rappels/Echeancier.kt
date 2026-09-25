package app.zenote.core.rappels

import app.zenote.core.texte.Texte
import kotlinx.datetime.DateTimeUnit
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.LocalTime
import kotlinx.datetime.plus

/**
 * Quand un plan devient actionnable.
 *
 * Un plan est une intention d'implémentation — « quand *signal*, je fais *action* »
 * ([Plans]). Encore faut-il savoir reconnaître le signal quand il arrive, sinon le
 * plan est une phrase rangée quelque part et rien de plus : c'était exactement l'état
 * du produit avant ce module, avec des plans écrits en Revue que rien ne rapportait
 * jamais.
 *
 * ## Ce qui est observable, et ce qui ne l'est pas
 *
 * Deux signaux se reconnaissent sans rien demander à personne : un moment de la
 * journée (« ce soir », « demain matin ») et une date. Tous les autres — « quand je
 * vois Karim », « au prochain point d'équipe » — supposent de savoir où l'on est et
 * qui l'on voit. Cela demande l'agenda, qui n'est pas branché, et la position, que le
 * produit refuse de collecter.
 *
 * Ces signaux-là ne sont donc **pas devinés** : ils sont ramenés au seul point de
 * rupture qu'une application web observe honnêtement, la reprise de l'appareil, et
 * l'écran le dit. C'est l'idiome que [Declencheurs.ramenerLieu] applique déjà au
 * lieu : substituer en l'annonçant, plutôt que de faire semblant ou de se taire.
 */

/** Le moment où un signal se produit, et ce qu'il faut en dire. */
sealed interface Echeance {

    /**
     * Le signal est observable : il se produit à cet instant précis.
     *
     * @param enRetardApres au-delà, le rappel arrive après le signal. Par défaut le
     *   signal lui-même ; pour une réunion, son début, alors que le rappel est dû un peu
     *   avant.
     */
    data class Observable(
        val quand: LocalDateTime,
        val enRetardApres: LocalDateTime = quand,
    ) : Echeance

    /**
     * Le signal n'est pas observable par ce produit. Le rappel s'accroche à la
     * prochaine reprise de l'appareil.
     *
     * @param explication ce qui est montré à l'utilisateur, en toutes lettres.
     */
    data class Substituee(val explication: String) : Echeance
}

object Echeancier {

    /** À partir de quelle heure « ce soir » a commencé. */
    val DEBUT_DE_SOIREE: LocalTime = LocalTime(18, 0)

    /** À partir de quelle heure « demain matin » a commencé. */
    val DEBUT_DE_MATINEE: LocalTime = LocalTime(7, 0)

    const val SIGNAL_NON_OBSERVABLE: String =
        "ZeNote ne sait pas encore reconnaître ce signal : aucun agenda n'est importé, " +
            "et la position n'est pas collectée."

    /**
     * Quand le signal d'un plan se produit.
     *
     * @param declencheur la formulation telle que l'utilisateur l'a choisie ou écrite.
     * @param poseLe le moment où le plan a été attaché. « Ce soir » dit un soir précis :
     *   celui du jour où on l'a dit, pas celui où on relit.
     * @param evenements l'agenda connu, s'il y en a un. Vide, rien ne change : les
     *   signaux de personne et d'événement restent substitués (change `agenda-local`).
     */
    fun quand(
        declencheur: String,
        poseLe: LocalDateTime,
        evenements: List<EvenementConnu> = emptyList(),
    ): Echeance {
        val plie = Texte.plier(declencheur)

        if (plie.contains("ce soir")) {
            return Echeance.Observable(LocalDateTime(poseLe.date, DEBUT_DE_SOIREE))
        }
        if (plie.contains("demain matin")) {
            return Echeance.Observable(
                LocalDateTime(poseLe.date.plus(1, DateTimeUnit.DAY), DEBUT_DE_MATINEE),
            )
        }
        // « on est le AAAA-MM-JJ » : la forme que `Plans.proposer` produit quand il ne
        // trouve aucun signal meilleur qu'une date.
        DATE.find(plie)?.let { trouve ->
            val (annee, mois, jour) = trouve.destructured
            return Echeance.Observable(
                LocalDateTime(annee.toInt(), mois.toInt(), jour.toInt(), 0, 0),
            )
        }

        if (evenements.isNotEmpty()) {
            return SignauxAgenda.reconnaitre(declencheur, poseLe, evenements)
                ?: Echeance.Substituee(SignauxAgenda.SIGNAL_HORS_AGENDA)
        }
        return Echeance.Substituee(SIGNAL_NON_OBSERVABLE)
    }

    /**
     * Le signal s'est-il produit à [maintenant] ?
     *
     * Un signal substitué est vrai à chaque reprise : c'est tout ce qu'on peut en dire
     * honnêtement, et la file d'opportunité se charge ensuite de ne pas en faire du
     * harcèlement — une notification par point de rupture, et une escalade en Revue
     * au bout de trois fois ignoré.
     */
    fun estArrive(echeance: Echeance, maintenant: LocalDateTime): Boolean = when (echeance) {
        is Echeance.Substituee -> true
        is Echeance.Observable -> echeance.quand <= maintenant
    }

    private val DATE = Regex("""(\d{4})-(\d{2})-(\d{2})""")
}
