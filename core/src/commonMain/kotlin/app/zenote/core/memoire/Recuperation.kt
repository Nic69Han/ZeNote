package app.zenote.core.memoire

import app.zenote.core.texte.Texte
import kotlinx.datetime.Instant
import kotlin.math.min

/**
 * La récupération de contexte : pertinence, récence, importance — et une borne.
 *
 * `design.md` — Décision 4 et le tableau des fondements : un contexte sélectionné bat
 * un historique complet, et coûte moins cher (Generative Agents, MemGPT, A-MEM).
 * L'historique complet n'est **jamais** transmis en bloc : c'est la leçon MyLifeBits,
 * tout capturer rend tout introuvable.
 *
 * Les trois axes sont rendus séparément, pas seulement agrégés : l'utilisateur doit
 * pouvoir afficher les éléments de mémoire qui ont produit une déduction, et sur quoi
 * ils l'ont emporté.
 */

/** Un morceau de mémoire retenu pour éclairer une capture. */
data class ExtraitMemoire(
    val entite: Entite,
    val mention: Mention,
    val pertinence: Double,
    val recence: Double,
    val importance: Double,
    val score: Double,
    /** Ce qui a fait retenir cet extrait, affichable tel quel. */
    val justification: String,
)

/**
 * Le contexte transmis à l'analyse. Borné par construction.
 *
 * @param totalDisponible ce que la mémoire contenait ; [tronque] dit si l'on a coupé.
 */
data class ContexteBorne(
    val extraits: List<ExtraitMemoire>,
    val borne: Int,
    val totalDisponible: Int,
) {
    init {
        require(extraits.size <= borne) { "Un contexte borné qui dépasse sa borne n'est pas borné." }
    }

    val tronque: Boolean get() = totalDisponible > extraits.size
}

object Recuperation {

    /** Combien de morceaux de mémoire accompagnent une capture, au maximum. */
    const val BORNE_PAR_DEFAUT: Int = 8

    /** Au-delà, une mention ancienne ne pèse presque plus. */
    private const val DEMI_VIE_JOURS: Double = 30.0

    /** À partir de combien de mentions une entité est considérée comme installée. */
    private const val MENTIONS_POUR_IMPORTANCE_PLEINE: Double = 5.0

    private const val POIDS_PERTINENCE = 0.5
    private const val POIDS_RECENCE = 0.3
    private const val POIDS_IMPORTANCE = 0.2

    /**
     * Sélectionne le contexte d'une capture.
     *
     * @param importances correction d'importance par entité, entre 0 et 1 — un projet
     *   portant des engagements ouverts pèse plus qu'un sujet cité une fois.
     */
    fun contexte(
        memoire: Memoire,
        requete: String,
        maintenant: Instant,
        borne: Int = BORNE_PAR_DEFAUT,
        importances: Map<EntiteId, Double> = emptyMap(),
    ): ContexteBorne {
        require(borne > 0) { "Un contexte de taille nulle n'éclaire rien." }

        val toutes = memoire.entites().flatMap { entite ->
            entite.mentions.map { entite to it }
        }

        val notes = toutes.map { (entite, mention) ->
            val pertinence = maxOf(
                Texte.recouvrement(requete, mention.extrait),
                Texte.recouvrement(requete, entite.nom + " " + entite.alias.joinToString(" ")),
            )
            val jours = (maintenant - mention.a).inWholeDays.toDouble()
            val recence = if (jours <= 0.0) 1.0 else DEMI_VIE_JOURS / (DEMI_VIE_JOURS + jours)
            val importance = importances[entite.id]
                ?: min(1.0, entite.frequence / MENTIONS_POUR_IMPORTANCE_PLEINE)

            val score = POIDS_PERTINENCE * pertinence +
                POIDS_RECENCE * recence +
                POIDS_IMPORTANCE * importance

            ExtraitMemoire(
                entite = entite,
                mention = mention,
                pertinence = pertinence,
                recence = recence,
                importance = importance,
                score = score,
                justification = justifier(entite, pertinence, recence, importance),
            )
        }

        val retenus = notes.sortedWith(
            compareByDescending<ExtraitMemoire> { it.score }
                // Départage stable : deux appels donnent le même contexte.
                .thenBy { it.entite.id.value }
                .thenBy { it.mention.captureId.value }
                .thenBy { it.mention.extrait },
        ).take(borne)

        return ContexteBorne(
            extraits = retenus,
            borne = borne,
            totalDisponible = notes.size,
        )
    }

    private fun justifier(
        entite: Entite,
        pertinence: Double,
        recence: Double,
        importance: Double,
    ): String = "« ${entite.nom} » — pertinence ${deuxDecimales(pertinence)}, " +
        "récence ${deuxDecimales(recence)}, importance ${deuxDecimales(importance)}"

    private fun deuxDecimales(valeur: Double): String {
        val centiemes = (valeur * 100).toInt()
        return "${centiemes / 100}.${(centiemes % 100).toString().padStart(2, '0')}"
    }
}
