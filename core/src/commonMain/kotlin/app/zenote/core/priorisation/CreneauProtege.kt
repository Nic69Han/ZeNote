package app.zenote.core.priorisation

import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Poids
import app.zenote.core.model.Verdict
import kotlinx.datetime.LocalDate

/**
 * Le créneau protégé : un moment de la journée que l'urgence n'a pas le droit de
 * prendre.
 *
 * Tout ce qui est urgent finit par passer devant. Ce qui compte vraiment — préparer
 * une reprise, refaire un budget, écrire la note qui décidera de l'année — n'a
 * jamais de date, donc n'est jamais urgent, donc n'arrive jamais. C'est le mécanisme
 * exact par lequel un agenda plein produit une année vide, et aucune liste de tâches
 * ne le corrige : elle ne fait que classer ce qui crie le plus fort.
 *
 * Un créneau protégé est la seule réponse connue qui ne demande pas de volonté : il
 * ne rend pas l'important plus urgent, il empêche l'urgent d'y entrer.
 *
 * ## La règle, et ce qu'elle refuse
 *
 * Pendant ce créneau, la proposition est un élément de **poids fort** dont
 * **l'échéance n'est pas proche**. Un élément urgent de poids faible ne peut pas le
 * remplacer, même s'il tombe aujourd'hui : c'est précisément lui qui gagnerait tous
 * les autres jours.
 *
 * S'il n'y a rien à y mettre, le créneau ne propose rien. Le remplir avec ce qui
 * traîne le viderait de son sens en une semaine, et l'on cesserait de le regarder.
 *
 * ## Passer outre
 *
 * Renoncer est toujours possible, et n'appelle aucun commentaire : un créneau qui
 * reproche se fait désactiver. Le renoncement est seulement compté, et au bout de
 * trois de suite la Revue le signale — non pour insister, mais parce qu'un créneau
 * qu'on saute chaque jour n'est pas au bon moment, et que cela se corrige.
 */
object CreneauProtege {

    /**
     * En deçà, une échéance est « proche » et l'élément n'a pas besoin du créneau :
     * l'urgence le fera remonter d'elle-même.
     */
    const val JOURS_AVANT_ECHEANCE_PROCHE: Int = 7

    /** Au-delà de ce nombre de renoncements d'affilée, la Revue le signale. */
    const val RENONCEMENTS_AVANT_SIGNAL: Int = 3

    /**
     * Ce que le créneau protégé propose, ou `null` s'il n'y a rien qui le mérite.
     *
     * Le plus lourd d'abord, puis le plus ancien : à poids égal, ce qui attend depuis
     * le plus longtemps a le plus besoin d'un créneau.
     */
    fun proposition(
        elements: List<ElementResolu>,
        aujourdhui: LocalDate,
    ): ElementResolu? = elements
        .filter { eligible(it, aujourdhui) }
        .sortedWith(compareBy({ ordreEcheance(it) }, { it.id.value }))
        .firstOrNull()

    /**
     * Vrai si cet élément a sa place dans le créneau.
     *
     * Les trois conditions sont indissociables : fort, accepté, et sans échéance
     * proche. Retirer la dernière laisserait entrer l'urgent, qui est exactement ce
     * contre quoi le créneau existe.
     */
    fun eligible(element: ElementResolu, aujourdhui: LocalDate): Boolean {
        if (element.verdict != Verdict.ACCEPTE) return false
        if (!element.type.actionnable) return false
        if (element.poids != Poids.FORT) return false
        val echeance = element.echeance ?: return true
        return echeance.toEpochDays() - aujourdhui.toEpochDays() > JOURS_AVANT_ECHEANCE_PROCHE
    }

    /** Sans échéance d'abord — c'est ce qui n'arrivera jamais tout seul. */
    private fun ordreEcheance(element: ElementResolu): Long =
        element.echeance?.toEpochDays()?.toLong() ?: Long.MIN_VALUE

    /** Vrai quand les renoncements répétés méritent d'être signalés en Revue. */
    fun aSignaler(renoncementsDAffilee: Int): Boolean =
        renoncementsDAffilee >= RENONCEMENTS_AVANT_SIGNAL

    /**
     * Ce que la Revue en dit. Un constat sur le créneau, pas sur la personne.
     *
     * « Vous avez sauté » ferait du créneau un dû. Ce n'en est pas un : c'est une
     * proposition, et si elle est systématiquement déclinée, c'est la proposition
     * qu'il faut changer.
     */
    fun signal(renoncementsDAffilee: Int): String =
        "Le créneau protégé est passé $renoncementsDAffilee fois sans être pris. " +
            "Il n'est peut-être pas au bon moment."
}
