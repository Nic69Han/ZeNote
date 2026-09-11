package app.zenote.core.model

import kotlinx.datetime.Instant

/**
 * Couche 1 sur 3 : la source. Immuable.
 *
 * Rien de ce que produit l'analyse n'a le droit de modifier cette couche. C'est la
 * vérité de référence à laquelle tout élément extrait doit pouvoir être rattaché.
 * Voir `design.md` — Décision 2.
 */

data class CaptureId(val value: String) {
    init {
        require(value.isNotBlank()) { "Un identifiant de capture ne peut pas être vide." }
    }

    override fun toString(): String = value
}

enum class ModeCapture { VOCALE, ECRITE }

/** Référence vers le fichier audio d'origine, conservé tel quel. */
data class Audio(val chemin: String, val dureeMs: Long) {
    init {
        require(chemin.isNotBlank()) { "Le chemin de l'audio ne peut pas être vide." }
        require(dureeMs > 0) { "La durée de l'audio doit être positive." }
    }
}

/** Ce que l'agenda disait au moment de la capture. Seule source externe de la v1. */
data class ContexteAgenda(
    val evenementId: String?,
    val titre: String?,
    val participants: List<String> = emptyList(),
)

/**
 * Une capture telle qu'elle a été enregistrée : l'audio, le texte brut, et le contexte
 * du moment. Aucun champ ici n'est déduit par un modèle.
 *
 * @param transmissible `false` quand l'utilisateur a marqué la capture comme privée.
 *   Le magasin refuse alors toute analyse distante (voir [app.zenote.core.store.CaptureStore]).
 * @param incomplete `true` quand l'application a été arrêtée brutalement pendant
 *   l'enregistrement : la portion capturée est conservée et signalée comme telle.
 */
data class Capture(
    val id: CaptureId,
    val capturedAt: Instant,
    val mode: ModeCapture,
    val texteBrut: String,
    val audio: Audio? = null,
    val appareil: String = "inconnu",
    val agenda: ContexteAgenda? = null,
    val transmissible: Boolean = true,
    val incomplete: Boolean = false,
) {
    init {
        require(mode != ModeCapture.VOCALE || audio != null) {
            "Une capture vocale doit référencer son audio d'origine."
        }
        require(mode != ModeCapture.ECRITE || audio == null) {
            "Une capture écrite ne porte pas d'audio."
        }
    }
}

/**
 * Le passage exact d'où sort un élément : bornes dans le texte brut, et dans l'audio
 * quand il y en a un. Sans lui, aucun élément ne peut être créé.
 */
data class Passage(
    val debutCar: Int,
    val finCar: Int,
    val debutMs: Long? = null,
    val finMs: Long? = null,
) {
    init {
        require(debutCar >= 0) { "Le début du passage ne peut pas être négatif." }
        require(finCar > debutCar) { "Le passage doit couvrir au moins un caractère." }
        require((debutMs == null) == (finMs == null)) {
            "Les bornes audio vont par paire, ou pas du tout."
        }
        if (debutMs != null && finMs != null) {
            require(debutMs >= 0 && finMs > debutMs) { "Bornes audio incohérentes." }
        }
    }

    /** Extrait le texte du passage depuis la capture dont il est issu. */
    fun extraitDe(capture: Capture): String = capture.texteBrut.substring(debutCar, finCar)

    internal fun tientDans(capture: Capture): Boolean = finCar <= capture.texteBrut.length
}
