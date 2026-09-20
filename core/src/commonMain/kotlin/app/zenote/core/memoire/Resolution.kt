package app.zenote.core.memoire

import app.zenote.core.model.ElementId
import app.zenote.core.model.SEUIL_CONFIANCE
import app.zenote.core.texte.Texte
import kotlinx.datetime.Instant
import kotlin.math.min

/**
 * Résoudre ce qu'une note sous-entend : « Marc », « le budget », « ce truc dont on a
 * parlé mardi ».
 *
 * On ne dicte pas des notes complètes. On dit un prénom seul, un sujet par son
 * surnom, un événement par sa date. Un collègue proche comprend ; un outil qui ne
 * comprend pas rend la note inutilisable trois jours plus tard, quand le contexte
 * s'est évaporé.
 *
 * ## Deux façons de se tromper, et une seule est réparable
 *
 * Choisir silencieusement le mauvais « Marc » attache une tâche à la mauvaise
 * personne. Rien ne le signale, et l'erreur ne se découvre qu'au moment où l'on
 * appelle quelqu'un qui ne sait pas de quoi on parle. Poser la question de trop est
 * un coût visible et minime — deux secondes en Revue.
 *
 * La résolution ne tranche donc que lorsqu'un candidat l'emporte **nettement** : il
 * doit dépasser le seuil de confiance du produit, et devancer le suivant d'une marge.
 * Deux candidats presque à égalité ne sont pas une résolution à 51 %, c'est une
 * question.
 *
 * ## Sur quoi elle s'appuie, et pourquoi elle le dit
 *
 * Trois axes, les mêmes que la récupération de contexte : la **proximité de sujet**
 * entre ce qui est dit et ce qu'on sait de l'entité, la **récence** de la dernière
 * mention, la **fréquence** des mentions. Chaque candidat porte la phrase qui
 * explique son rang — sans elle, l'utilisateur ne peut pas arbitrer, et se contente
 * d'accepter, ce qui revient à choisir silencieusement.
 */

/** Un candidat à la résolution d'une référence, avec ce qui le place là. */
data class Candidat(
    val entite: Entite,
    val score: Double,
    val proximite: Double,
    val recence: Double,
    val frequence: Double,
    /** Vrai quand la référence est le nom de cette entité, ou l'un de ses alias. */
    val nomme: Boolean,
    /** Ce sur quoi le système s'est appuyé, affichable tel quel. */
    val appui: String,
)

/**
 * Ce qu'une référence a donné.
 *
 * [retenu] n'est pas nul seulement quand un candidat l'emporte nettement. Sinon, les
 * [candidats] sont rendus classés, et c'est à l'utilisateur de trancher en Revue.
 */
data class Resolution(
    val reference: String,
    val retenu: Candidat?,
    val candidats: List<Candidat>,
) {
    /** Vrai quand il faut poser la question plutôt que de choisir. */
    val aQuestionner: Boolean get() = retenu == null && candidats.size > 1

    /** Vrai quand la mémoire ne connaît rien qui ressemble à cette référence. */
    val inconnue: Boolean get() = candidats.isEmpty()
}

object ResolutionReferences {

    /** Au-delà, une mention ancienne ne pèse presque plus. Même demi-vie que la récupération. */
    private const val DEMI_VIE_JOURS: Double = 30.0

    /** À partir de combien de mentions une entité est pleinement installée. */
    private const val MENTIONS_POUR_FREQUENCE_PLEINE: Double = 5.0

    private const val POIDS_PROXIMITE = 0.5
    private const val POIDS_RECENCE = 0.3
    private const val POIDS_FREQUENCE = 0.2

    /**
     * De combien le premier doit devancer le second pour qu'on tranche sans demander.
     *
     * Sans cette marge, deux « Marc » à 0,76 et 0,75 donneraient une résolution
     * « sûre » décidée par un millième — c'est-à-dire par rien.
     */
    private const val MARGE_MINIMALE = 0.12

    /** En dessous, un candidat n'est pas un candidat : il partage un mot par hasard. */
    private const val PLANCHER_CANDIDAT = 0.05

    /**
     * Résout une référence contre la mémoire.
     *
     * @param reference ce qui est dit : un prénom, un sujet, un bout de phrase.
     * @param contexte le reste de la capture, qui départage deux homonymes — c'est
     *   « pour le budget » qui distingue deux Marc, pas le prénom.
     * @param types les types d'entités acceptables, ou vide pour tous. Chercher une
     *   personne parmi les projets produirait des candidats absurdes bien classés.
     * @param ignorerElement l'élément qu'on cherche à résoudre. Ses propres mentions
     *   sont écartées : la mémoire l'a déjà observé, et l'entité née de lui porterait
     *   exactement le nom cherché, à la date d'aujourd'hui. Elle gagnerait donc
     *   toujours, contre elle-même, et aucune ambiguïté ne serait jamais vue. On
     *   résout contre ce qu'on savait **avant** cette note.
     */
    fun resoudre(
        memoire: Memoire,
        reference: String,
        maintenant: Instant,
        contexte: String = "",
        types: Set<TypeEntite> = emptySet(),
        ignorerElement: ElementId? = null,
    ): Resolution {
        // Seules les entités qui **répondent au nom dit** sont des candidates. Une
        // entité simplement proche du sujet n'en est pas une : proposer « Sophie »
        // parce qu'elle travaille aussi sur le budget, quand la note dit « Marc »,
        // transformerait la question en devinette. La proximité de sujet sert à
        // classer les homonymes entre eux, pas à en fabriquer.
        //
        // Sont écartées aussi les entités qui n'existent **que** par la note qu'on
        // résout : elles portent exactement le nom cherché, à la date du jour, et
        // gagneraient toujours contre elles-mêmes. Aucune ambiguïté ne serait vue.
        val recherchees = memoire.entites()
            .filter { types.isEmpty() || it.type in types }
            .filter { nomme(it, reference) }
            .filter { entite ->
                entite.mentions.any { it.elementId == null || it.elementId != ignorerElement }
            }

        val candidats = recherchees
            .map { noter(it, reference, contexte, maintenant, ignorerElement) }
            .filter { it.score > PLANCHER_CANDIDAT }
            .sortedWith(
                compareByDescending<Candidat> { it.score }
                    // Départage stable : deux appels donnent le même classement.
                    .thenBy { it.entite.nom }
                    .thenBy { it.entite.id.value },
            )

        return Resolution(
            reference = reference,
            retenu = candidats.firstOrNull()?.takeIf { premier -> lEmporteNettement(premier, candidats) },
            candidats = candidats,
        )
    }

    /**
     * Le premier l'emporte-t-il assez pour qu'on ne demande pas ?
     *
     * Le seuil de confiance existe pour arbitrer entre des possibilités. Quand il n'y
     * en a qu'une et qu'elle porte le nom dit, il n'y a rien à arbitrer : demander
     * « est-ce bien Sophie ? » alors qu'on ne connaît qu'une Sophie use la question
     * jusqu'à ce qu'on l'accepte sans la lire.
     *
     * Dès qu'il y a un concurrent, les deux conditions s'appliquent. Dépasser le
     * seuil sans devancer le suivant, c'est être sûr de soi entre deux possibilités —
     * la pire des façons de se tromper.
     */
    private fun lEmporteNettement(premier: Candidat, tous: List<Candidat>): Boolean {
        val second = tous.getOrNull(1) ?: return premier.nomme || premier.score >= SEUIL_CONFIANCE
        if (premier.score < SEUIL_CONFIANCE && !(premier.nomme && !second.nomme)) return false
        return premier.score - second.score >= MARGE_MINIMALE
    }

    private fun noter(
        entite: Entite,
        reference: String,
        contexte: String,
        maintenant: Instant,
        ignorerElement: ElementId?,
    ): Candidat {
        val nomme = nomme(entite, reference)

        // Ce que la mémoire savait avant la note qu'on résout.
        val connues = entite.mentions.filter { it.elementId == null || it.elementId != ignorerElement }

        // La proximité de sujet se mesure sur ce que la capture dit autour de la
        // référence, comparé à ce qu'on sait déjà de cette entité. C'est elle qui
        // distingue deux homonymes : le prénom, lui, est le même.
        val surSesMentions = connues.maxOfOrNull {
            Texte.recouvrement(contexte, it.extrait)
        } ?: 0.0
        val proximite = if (nomme) maxOf(surSesMentions, 0.5) else surSesMentions

        val jours = connues.maxByOrNull { it.a }?.a
            ?.let { (maintenant - it).inWholeDays.toDouble() }
            ?: Double.MAX_VALUE
        val recence = if (jours <= 0.0) 1.0 else DEMI_VIE_JOURS / (DEMI_VIE_JOURS + jours)
        val frequence = min(1.0, connues.size / MENTIONS_POUR_FREQUENCE_PLEINE)

        val score = if (connues.isEmpty()) {
            // Ne subsiste que la note qu'on résout : ce n'est pas une connaissance.
            0.0
        } else {
            POIDS_PROXIMITE * proximite + POIDS_RECENCE * recence + POIDS_FREQUENCE * frequence
        }

        return Candidat(
            entite = entite,
            score = score,
            proximite = proximite,
            recence = recence,
            frequence = frequence,
            nomme = nomme,
            appui = appui(entite, nomme, surSesMentions, connues),
        )
    }

    /** Vrai si la référence désigne cette entité par son nom ou l'un de ses alias. */
    private fun nomme(entite: Entite, reference: String): Boolean {
        val cherchee = Texte.plier(reference.trim())
        if (cherchee.isEmpty()) return false
        if (Texte.plier(entite.nom) == cherchee) return true
        if (entite.alias.any { Texte.plier(it) == cherchee }) return true
        // « Marc Dupuis » répond à « Marc » : on nomme les gens par leur prénom.
        return Texte.plier(entite.nom).split(' ').any { it == cherchee }
    }

    /**
     * La phrase qui explique le rang.
     *
     * Sans elle, l'utilisateur ne peut pas arbitrer et se contente d'accepter — ce
     * qui revient exactement à ce qu'on voulait éviter : choisir silencieusement.
     */
    private fun appui(
        entite: Entite,
        nomme: Boolean,
        proximite: Double,
        connues: List<Mention>,
    ): String {
        val morceaux = mutableListOf<String>()
        if (nomme) morceaux += "nommée dans la capture"
        if (proximite > 0.0) {
            val extrait = connues.maxByOrNull { it.a }?.extrait?.take(60)
            if (extrait != null) morceaux += "déjà citée à propos de « $extrait »"
        }
        morceaux += when (connues.size) {
            0 -> "jamais mentionnée"
            1 -> "mentionnée une fois"
            else -> "mentionnée ${entite.frequence} fois"
        }
        return morceaux.joinToString(", ")
    }
}
