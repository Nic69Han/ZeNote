package app.zenote.core.priorisation

import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Poids
import app.zenote.core.model.Verdict
import kotlinx.datetime.LocalDate
import kotlinx.datetime.daysUntil

/**
 * Le classement de la vue Maintenant.
 *
 * La règle tient en deux lignes, et c'est volontaire : un score continu serait
 * faussement précis et invérifiable par l'utilisateur (`design.md` — Décision 5).
 *
 *  1. On classe par **poids**, pas par échéance. Trier par date reproduirait l'effet
 *     de simple urgence — la tendance à préférer une tâche urgente et sans valeur à
 *     une tâche importante (Zhu, Yang & Hsee 2018) — au lieu de le corriger.
 *  2. Une échéance dépassée ou du jour **monte l'élément d'un cran**, sans jamais lui
 *     permettre de dépasser un élément de poids fort.
 *
 * Conséquence recherchée : un urgent-léger ne passe jamais devant un important.
 */

/** À quelle distance l'échéance se trouve. L'ordre des constantes est l'ordre d'urgence. */
enum class Urgence {
    DEPASSEE,
    AUJOURD_HUI,
    DEMAIN,
    CETTE_SEMAINE,
    PLUS_TARD,
    AUCUNE,
    ;

    /** Les deux seuls cas qui font monter un élément d'un cran. */
    val presse: Boolean get() = this == DEPASSEE || this == AUJOURD_HUI

    internal val libelle: String
        get() = when (this) {
            DEPASSEE -> "échéance dépassée"
            AUJOURD_HUI -> "échéance aujourd'hui"
            DEMAIN -> "échéance demain"
            CETTE_SEMAINE -> "échéance cette semaine"
            PLUS_TARD -> "échéance plus tard"
            AUCUNE -> "sans échéance"
        }
}

/** Ce que le système sait du moment présent. */
data class ContexteMaintenant(val aujourdhui: LocalDate)

/**
 * Un élément proposé, avec la raison en une ligne pour laquelle il l'est.
 *
 * @param raison dit ce qui se passe si ce n'est pas fait — jamais seulement la date.
 */
data class Proposition(
    val element: ElementResolu,
    val raison: String,
    val poidsEffectif: Poids,
    val urgence: Urgence,
)

/**
 * La vue Maintenant, avec ce que la contrainte d'agenda a retiré.
 *
 * @param ecartes combien d'éléments classés ne tiennent pas dans le contexte — pour
 *   pouvoir dire « rien qui tienne » plutôt que « rien à faire ».
 * @param raison la contrainte en vigueur, en une phrase, ou une chaîne vide.
 */
data class ResultatMaintenant(
    val propositions: List<Proposition>,
    val ecartes: Int,
    val raison: String,
    val creneauProtegeSuspendu: Boolean,
)

object Priorisation {

    /** La vue Maintenant ne montre jamais plus de trois choses à la fois. */
    const val MAX_PROPOSITIONS: Int = 3

    /** Poids retenu quand le modèle n'a pas su en déduire un. */
    private val POIDS_PAR_DEFAUT = Poids.MOYEN

    fun urgence(echeance: LocalDate?, aujourdhui: LocalDate): Urgence {
        if (echeance == null) return Urgence.AUCUNE
        return when (aujourdhui.daysUntil(echeance)) {
            in Int.MIN_VALUE..-1 -> Urgence.DEPASSEE
            0 -> Urgence.AUJOURD_HUI
            1 -> Urgence.DEMAIN
            in 2..7 -> Urgence.CETTE_SEMAINE
            else -> Urgence.PLUS_TARD
        }
    }

    /**
     * Classe tous les éléments exécutables, du plus prioritaire au moins prioritaire.
     *
     * Sont retenus les éléments acceptés et actionnables — une tâche ou un engagement.
     * Un élément encore en attente de Revue n'a rien à faire ici : il n'a pas été
     * validé par l'utilisateur.
     */
    fun classer(
        elements: List<ElementResolu>,
        contexte: ContexteMaintenant,
    ): List<Proposition> = elements
        .filter { it.verdict == Verdict.ACCEPTE && it.type.actionnable }
        .map { element ->
            val urgence = urgence(element.echeance, contexte.aujourdhui)
            val poids = element.poids ?: POIDS_PAR_DEFAUT
            val effectif = if (urgence.presse) poids.dUnCranPlusHaut() else poids
            Proposition(
                element = element,
                raison = raison(element, urgence),
                poidsEffectif = effectif,
                urgence = urgence,
            )
        }
        .sortedWith(
            compareByDescending<Proposition> { it.poidsEffectif.ordinal }
                .thenBy { it.urgence.ordinal }
                // Départage stable, pour que deux appels donnent le même ordre.
                .thenBy { it.element.id.value },
        )

    /** Ce que la vue Maintenant affiche : au plus trois éléments. */
    fun maintenant(
        elements: List<ElementResolu>,
        contexte: ContexteMaintenant,
    ): List<Proposition> = classer(elements, contexte).take(MAX_PROPOSITIONS)

    /**
     * La vue Maintenant selon le temps que l'agenda laisse.
     *
     * Le classement ne change pas : on retire seulement ce qui ne tient pas, puis on
     * garde les trois premiers. Change `agenda-local`, décision 5.
     */
    fun maintenantSelon(
        elements: List<ElementResolu>,
        contexte: ContexteMaintenant,
        disponibilite: Disponibilite,
    ): ResultatMaintenant {
        val classement = classer(elements, contexte)
        val retenus = classement.filter { Disponibilites.tient(it.element, disponibilite) }
        return ResultatMaintenant(
            propositions = retenus.take(MAX_PROPOSITIONS),
            ecartes = classement.size - retenus.size,
            raison = Disponibilites.raison(disponibilite),
            // Le créneau protégé demande du temps et de l'attention : le proposer à sept
            // minutes d'une réunion, ou au sortir de trois heures de réunions, le
            // condamnerait à être sauté.
            creneauProtegeSuspendu = !disponibilite.libre,
        )
    }

    private fun raison(element: ElementResolu, urgence: Urgence): String {
        val consequence = element.indicePoids ?: "poids non déterminé, à confirmer en Revue"
        return "$consequence — ${urgence.libelle}"
    }

    private fun Poids.dUnCranPlusHaut(): Poids = when (this) {
        Poids.FAIBLE -> Poids.MOYEN
        Poids.MOYEN -> Poids.FORT
        Poids.FORT -> Poids.FORT
    }
}
