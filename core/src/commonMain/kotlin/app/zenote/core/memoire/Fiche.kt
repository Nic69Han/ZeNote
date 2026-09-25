package app.zenote.core.memoire

import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict

/**
 * La fiche d'une entité : ce qui est ouvert, et ce qui a été décidé la concernant.
 *
 * Elle n'est jamais renseignée par l'utilisateur — elle se déduit de ce qui a été
 * capturé. Chaque ligne renvoie à sa capture source : c'est la même exigence
 * d'ancrage que pour l'extraction, appliquée à la restitution.
 */

/** Une ligne de fiche. Elle porte toujours de quoi remonter à l'origine. */
data class LigneFiche(
    val elementId: ElementId,
    val captureId: CaptureId,
    val type: TypeElement,
    val texte: String,
    val verdict: Verdict,
)

data class FicheEntite(
    val entite: Entite,
    /** Engagements en cours envers elle, attentes à son égard, tâches la concernant. */
    val ouverts: List<LigneFiche>,
    /** Les décisions communes. */
    val decide: List<LigneFiche>,
    /** Les derniers échanges, du plus récent au plus ancien. */
    val derniersEchanges: List<Mention>,
) {
    val vide: Boolean get() = ouverts.isEmpty() && decide.isEmpty()
}

object Fiches {

    /** Combien d'échanges récents la fiche montre. Au-delà, c'est de l'archive. */
    const val DERNIERS_ECHANGES: Int = 5

    /**
     * Construit la fiche d'une entité.
     *
     * @return `null` si l'entité est inconnue de la mémoire.
     */
    fun de(memoire: Memoire, entiteId: EntiteId, elements: List<ElementResolu>): FicheEntite? {
        val entite = memoire.entite(entiteId) ?: return null
        val rattaches = memoire.elementsDe(entiteId).toSet()

        val lignes = elements
            .filter { it.id in rattaches }
            .sortedBy { it.id.value }
            .map { LigneFiche(it.id, it.captureId, it.type, it.texte, it.verdict) }

        return FicheEntite(
            entite = entite,
            // Reste ouvert ce qui n'a pas été écarté : accepté, ou pas encore tranché.
            ouverts = lignes.filter {
                it.type != TypeElement.DECISION &&
                    it.verdict != Verdict.REJETE &&
                    it.verdict != Verdict.UN_JOUR
            },
            decide = lignes.filter { it.type == TypeElement.DECISION },
            derniersEchanges = entite.mentions
                .sortedWith(compareByDescending<Mention> { it.a }.thenBy { it.captureId.value })
                .take(DERNIERS_ECHANGES),
        )
    }
}
