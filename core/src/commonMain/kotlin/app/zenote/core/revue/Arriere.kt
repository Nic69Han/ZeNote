package app.zenote.core.revue

import app.zenote.core.model.Poids
import app.zenote.core.model.Sphere

/**
 * L'arriéré, et comment il est présenté.
 *
 * Le risque identifié dans `design.md` — Risks — est que la Revue devienne une corvée
 * et que l'utilisateur décroche. La réponse tenue ici est de forme, pas de fond :
 *
 *  - aucun compteur de retard, aucune marque d'échec, aucune notification insistante ;
 *  - quand la file dépasse ce qu'une session absorbe, on **propose** une Revue réduite
 *    aux éléments les plus lourds ou les plus urgents ;
 *  - le reste demeure en file, intact. Rien n'est dégradé, rien n'est supprimé.
 */

/** Un paquet d'entrées qui parlent de la même chose. */
data class GroupeTheme(val theme: String, val entrees: List<EntreeRevue>)

/**
 * Ce que la Revue propose quand l'arriéré déborde.
 *
 * @param motif la phrase affichée. Elle dit ce qui est proposé, jamais ce qui a été
 *   manqué.
 */
data class RevueReduite(
    val retenues: List<EntreeRevue>,
    val demeurentEnFile: List<EntreeRevue>,
    val motif: String,
) {
    val reduite: Boolean get() = demeurentEnFile.isNotEmpty()
}

object Arriere {

    /**
     * Ce qu'une Revue de deux minutes absorbe. Valeur volontairement ronde : elle sera
     * recalée sur l'usage réel (tâche 4.18), pas sur une intuition de conception.
     */
    const val CHARGE_TRAITABLE: Int = 12

    /**
     * Le thème d'une entrée : la personne concernée, à défaut la sphère, à défaut
     * « divers ». C'est ce qui permet de regrouper un arriéré sans demander à
     * l'utilisateur de l'avoir rangé à l'avance.
     */
    fun theme(entree: EntreeRevue): String = entree.element.interlocuteur
        ?: when (entree.element.sphere) {
            Sphere.PROFESSIONNEL -> "professionnel"
            Sphere.PERSONNEL -> "personnel"
            null -> "divers"
        }

    /** Regroupe l'arriéré par thème, thèmes triés pour que l'ordre ne bouge pas. */
    fun grouperParTheme(entrees: List<EntreeRevue>): List<GroupeTheme> = entrees
        .groupBy { theme(it) }
        .map { (theme, dedans) -> GroupeTheme(theme, dedans) }
        .sortedBy { it.theme }

    /**
     * Propose une Revue réduite quand la file dépasse [charge].
     *
     * Sont retenus les éléments les plus lourds, puis les plus urgents. Ce qui n'est
     * pas retenu reste dans [RevueReduite.demeurentEnFile] : la somme des deux est
     * toujours la file de départ.
     */
    fun revueReduite(
        entrees: List<EntreeRevue>,
        charge: Int = CHARGE_TRAITABLE,
    ): RevueReduite {
        require(charge > 0) { "Une Revue réduite à zéro élément n'a rien à proposer." }
        if (entrees.size <= charge) {
            return RevueReduite(
                retenues = entrees,
                demeurentEnFile = emptyList(),
                motif = "La file tient en une Revue.",
            )
        }

        val parImportance = entrees.sortedWith(
            compareByDescending<EntreeRevue> { (it.element.poids ?: Poids.MOYEN).ordinal }
                .thenBy { it.urgence.ordinal }
                .thenBy { it.id.value },
        )
        val retenues = parImportance.take(charge)
        val gardees = retenues.map { it.id }.toSet()

        return RevueReduite(
            // Les retenues repartent dans l'ordre de présentation d'origine : la
            // sélection change ce qui est proposé, pas la façon de le parcourir.
            retenues = entrees.filter { it.id in gardees },
            demeurentEnFile = entrees.filter { it.id !in gardees },
            motif = "Beaucoup de choses en attente. Voici les $charge plus lourdes ou " +
                "les plus pressées ; le reste demeure en file, intact.",
        )
    }
}
