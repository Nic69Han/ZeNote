package app.zenote.core.memoire

import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.Sphere
import kotlinx.datetime.Instant

/**
 * Les entités de la mémoire : ce qui permet à une note dictée en quatre secondes et
 * pleine de sous-entendus d'être comprise comme un collègue proche la comprendrait.
 *
 * Aucune entité ne se saisit à la main. Elles naissent des captures, s'enrichissent à
 * chaque mention, et se corrigent après coup (fusion, renommage, séparation,
 * suppression). C'est la seule façon de ne rien demander à l'utilisateur au moment de
 * la capture, qui doit rester gratuite.
 */
enum class TypeEntite {
    PERSONNE,
    PROJET,
    ORGANISATION,
    LIEU,
    EVENEMENT_RECURRENT,
    SUJET,
}

data class EntiteId(val value: String) {
    init { require(value.isNotBlank()) { "Un identifiant d'entité ne peut pas être vide." } }

    override fun toString(): String = value
}

/**
 * Une apparition de l'entité dans une capture. C'est l'unité d'historique : elle porte
 * toujours de quoi remonter à la source.
 */
data class Mention(
    val captureId: CaptureId,
    val a: Instant,
    val extrait: String,
    val elementId: ElementId? = null,
) {
    init { require(extrait.isNotBlank()) { "Une mention sans extrait n'est pas consultable." } }
}

data class Entite(
    val id: EntiteId,
    val type: TypeEntite,
    val nom: String,
    val alias: Set<String> = emptySet(),
    val mentions: List<Mention> = emptyList(),
    val sphere: Sphere? = null,
) {
    init { require(nom.isNotBlank()) { "Une entité sans nom n'est pas désignable." } }

    /** La dernière fois qu'on en a parlé. Sert à la récence de la récupération. */
    val derniereMention: Instant?
        get() = mentions.maxByOrNull { it.a }?.a

    /** Combien de fois on en a parlé. Sert à l'importance. */
    val frequence: Int get() = mentions.size
}
