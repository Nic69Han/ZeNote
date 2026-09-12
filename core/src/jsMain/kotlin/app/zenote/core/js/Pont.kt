package app.zenote.core.js

import app.zenote.core.api.Regles

/**
 * Le pont vers le navigateur. Cinq fonctions, un contrat JSON, aucun état.
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

    /** Recherche par mots : `[ElementJson]` + `[CaptureJson]` → `ReponseJson`. */
    fun rechercherParMots(
        requete: String,
        elementsJson: String,
        capturesJson: String,
        reseau: Boolean,
    ): String = Regles.rechercherParMots(requete, elementsJson, capturesJson, reseau)

    /** Recherche par personne : nom + `[ElementJson]` → `ReponseJson`. */
    fun rechercherParPersonne(personne: String, elementsJson: String, reseau: Boolean): String =
        Regles.rechercherParPersonne(personne, elementsJson, reseau)

    /**
     * Version du contrat, pour que la surface puisse vérifier qu'elle parle au bon cœur.
     *
     * Passée à « 2 » avec l'ajout de la recherche : une surface qui l'attend et ne
     * trouve que « 1 » parle à un cœur sans ces fonctions, et doit le dire au lieu de
     * planter à l'appel.
     */
    val version: String = "2"
}
