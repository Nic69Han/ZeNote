package app.zenote.core.priorisation

import app.zenote.core.model.Duree
import app.zenote.core.model.ElementResolu
import app.zenote.core.rappels.EvenementConnu
import kotlinx.datetime.Instant
import kotlin.time.Duration.Companion.minutes

/**
 * Le temps dont l'utilisateur dispose, tel que l'agenda le laisse voir.
 *
 * Spec `priorisation` — « Adaptation au contexte d'exécution » et « Charge et
 * énergie » ; change `agenda-local`, décision 5. Deux contraintes, et seulement deux :
 * la prochaine réunion approche, ou l'on sort d'une longue séquence de réunions.
 * Sans agenda, ni l'une ni l'autre n'existe, et le classement reste celui d'avant.
 *
 * @param minutesAvantReunion minutes avant le début de la prochaine réunion, ou
 *   `null` si aucune n'est connue.
 * @param prochaineReunion son titre, pour dire avant quoi.
 * @param sequenceTermineeMinutes la durée de la séquence de réunions qui vient de se
 *   terminer, quand elle impose une récupération ; `null` sinon.
 */
data class Disponibilite(
    val minutesAvantReunion: Int? = null,
    val prochaineReunion: String? = null,
    val sequenceTermineeMinutes: Int? = null,
) {
    /** Le créneau restant est trop court pour que tout y tienne. */
    val creneauCourt: Boolean
        get() = minutesAvantReunion != null && minutesAvantReunion < Disponibilites.CRENEAU_COURT_MINUTES

    /** On sort d'une longue séquence : l'énergie n'est pas celle du matin. */
    val recuperation: Boolean get() = sequenceTermineeMinutes != null

    /** Aucune contrainte : le classement s'applique tel quel. */
    val libre: Boolean get() = !creneauCourt && !recuperation

    companion object {
        /** Ce que vaut l'absence d'agenda : aucune contrainte. */
        val SANS_AGENDA: Disponibilite = Disponibilite()
    }
}

object Disponibilites {

    /** En deçà, la prochaine réunion restreint ce qui peut être proposé. */
    const val CRENEAU_COURT_MINUTES: Int = 60

    /** Deux réunions séparées de moins que cela sont enchaînées. */
    const val ECART_ENCHAINEMENT_MINUTES: Int = 15

    /** Une séquence au moins aussi longue appelle une récupération. */
    const val SEQUENCE_LONGUE_MINUTES: Int = 180

    /** Le temps de récupération après une séquence longue. */
    const val RECUPERATION_MINUTES: Int = 45

    /**
     * En deçà, un élément dont la durée est inconnue n'est pas proposé : on ne sait
     * pas s'il tient, et le commencer pour l'abandonner coûte plus que d'attendre.
     */
    const val INCONNUE_ADMISE_DES_MINUTES: Int = 30

    /**
     * Ce que l'agenda laisse à [maintenant].
     *
     * Une réunion en cours n'est pas « la prochaine » : ce qui compte est le temps
     * libre qui suivra, pas celui qu'on n'a déjà plus.
     */
    fun a(maintenant: Instant, evenements: List<EvenementConnu>): Disponibilite {
        val reunions = reunions(evenements)
        val prochaine = reunions.firstOrNull { it.debut >= maintenant }
        val sequence = sequences(reunions).lastOrNull { (debut, fin) ->
            fin <= maintenant &&
                maintenant - fin < RECUPERATION_MINUTES.minutes &&
                fin - debut >= SEQUENCE_LONGUE_MINUTES.minutes
        }
        return Disponibilite(
            minutesAvantReunion = prochaine?.let { (it.debut - maintenant).inWholeMinutes.toInt() },
            prochaineReunion = prochaine?.titre,
            sequenceTermineeMinutes = sequence?.let { (debut, fin) -> (fin - debut).inWholeMinutes.toInt() },
        )
    }

    /**
     * Cet élément peut-il être proposé dans ce contexte ?
     *
     * Une durée sûre tient si elle ne dépasse pas le temps restant. Une durée inconnue
     * ou incertaine n'est admise que dans un créneau d'au moins
     * [INCONNUE_ADMISE_DES_MINUTES]. En récupération, seul ce qui est court et sûr
     * l'est. Un élément écarté n'est pas repoussé : il revient dès que le temps le
     * permet, puisque rien n'est retenu d'un appel à l'autre.
     */
    fun tient(element: ElementResolu, disponibilite: Disponibilite): Boolean {
        val duree = element.duree?.takeIf { element.dureeSure }
        if (disponibilite.recuperation && duree != Duree.COURTE) return false
        val minutes = disponibilite.minutesAvantReunion ?: return true
        return if (duree != null) duree.minutes <= minutes else minutes >= INCONNUE_ADMISE_DES_MINUTES
    }

    /**
     * Ce que Maintenant dit de la contrainte en vigueur, ou une chaîne vide.
     *
     * Un filtre qu'on ne voit pas ferait croire que la liste est tout ce qu'il y a.
     */
    fun raison(disponibilite: Disponibilite): String {
        val phrases = mutableListOf<String>()
        disponibilite.sequenceTermineeMinutes?.let {
            phrases += "Vous sortez de ${enHeures(it)} de réunions enchaînées : des éléments courts d'abord."
        }
        if (disponibilite.creneauCourt) {
            val minutes = disponibilite.minutesAvantReunion ?: 0
            val avant = disponibilite.prochaineReunion?.let { " avant « $it »" } ?: " avant la prochaine réunion"
            phrases += "${enMinutes(minutes)}$avant : seuls les éléments qui tiennent dans ce temps."
        }
        return phrases.joinToString(" ")
    }

    /** Les réunions au sens de ces règles, dans l'ordre où elles arrivent. */
    fun reunions(evenements: List<EvenementConnu>): List<EvenementConnu> = evenements
        .filter { it.estReunion }
        .sortedWith(compareBy<EvenementConnu> { it.debut }.thenBy { it.id })

    /**
     * Les séquences de réunions enchaînées, chacune par son début et sa fin.
     *
     * Deux réunions séparées de moins de [ECART_ENCHAINEMENT_MINUTES] appartiennent à
     * la même séquence ; deux réunions qui se chevauchent aussi.
     */
    fun sequences(reunions: List<EvenementConnu>): List<Pair<Instant, Instant>> {
        val resultat = mutableListOf<Pair<Instant, Instant>>()
        var debut: Instant? = null
        var fin: Instant? = null
        for (reunion in reunions) {
            val finCourante = fin
            if (debut == null || finCourante == null ||
                reunion.debut - finCourante >= ECART_ENCHAINEMENT_MINUTES.minutes
            ) {
                if (debut != null && finCourante != null) resultat += debut to finCourante
                debut = reunion.debut
                fin = reunion.fin
            } else if (reunion.fin > finCourante) {
                fin = reunion.fin
            }
        }
        val dernierDebut = debut
        val derniereFin = fin
        if (dernierDebut != null && derniereFin != null) resultat += dernierDebut to derniereFin
        return resultat
    }

    private fun enMinutes(minutes: Int): String = if (minutes <= 1) "1 minute" else "$minutes minutes"

    private fun enHeures(minutes: Int): String {
        val heures = minutes / 60
        val reste = minutes % 60
        return if (reste == 0) "$heures h" else "$heures h ${reste.toString().padStart(2, '0')}"
    }
}
