package app.zenote.core.model

import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate

/**
 * Couche 3 sur 3 : l'humain. Fait autorité.
 *
 * Ce que l'utilisateur a validé ou corrigé en Revue prime sur le dérivé et n'est
 * jamais écrasé par une ré-analyse. Voir `design.md` — Décision 2.
 */

enum class Verdict {
    /** Aucune décision prise : l'élément attend en Revue. */
    EN_ATTENTE,

    /** Retenu, et reparti avec un plan. */
    ACCEPTE,

    /** Écarté : sort des vues actives sans être supprimé. */
    UN_JOUR,

    /** Supprimé par l'utilisateur. La capture source, elle, reste intacte. */
    REJETE,
}

/**
 * La décision prise sur un élément, avec les corrections éventuelles.
 *
 * Un champ laissé à `null` signifie « je garde ce que le système a déduit » ; un champ
 * renseigné écrase la déduction, définitivement.
 */
data class Decision(
    val elementId: ElementId,
    val verdict: Verdict,
    val decideA: Instant,
    val echeance: LocalDate? = null,
    val poids: Poids? = null,
    val interlocuteur: String? = null,
    val sphere: Sphere? = null,
    val plan: Plan? = null,
) {
    init {
        require(verdict != Verdict.EN_ATTENTE) {
            "Une décision enregistrée ne peut pas être « en attente »."
        }
    }

    /** `true` si l'utilisateur a corrigé au moins un champ déduit. */
    val corrige: Boolean
        get() = echeance != null || poids != null || interlocuteur != null ||
            sphere != null || plan != null
}
