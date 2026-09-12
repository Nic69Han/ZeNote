package app.zenote.core.js

import app.zenote.core.api.Regles

/**
 * Le pont vers le navigateur. Trois fonctions, un contrat JSON, aucun état.
 *
 * La PWA détient les données (IndexedDB) et appelle ces règles ; les applications
 * natives appelleront les mêmes, en JVM. C'est ce qui garantit qu'un même jeu de
 * données donne le même classement sur toutes les surfaces.
 */
@JsExport
@JsName("ZeNoteRegles")
object ZeNoteRegles {

    /** Vue Maintenant : `[ElementJson]` + date ISO → `[PropositionJson]`. */
    fun maintenant(elementsJson: String, aujourdhui: String): String =
        Regles.maintenant(elementsJson, aujourdhui)

    /** File de Revue : `[ElementJson]` + date ISO → `RevueJson`. */
    fun revue(elementsJson: String, aujourdhui: String): String =
        Regles.revue(elementsJson, aujourdhui)

    /** Ancrage : texte source + `[ElementJson]` → `AncrageJson`. */
    fun filtrerAncrage(texteSource: String, elementsJson: String): String =
        Regles.filtrerAncrage(texteSource, elementsJson)

    /** Version du contrat, pour que la surface puisse vérifier qu'elle parle au bon cœur. */
    val version: String = "1"
}
