package app.zenote.core.js

import app.zenote.core.api.Regles

/**
 * Le pont vers le navigateur. Neuf fonctions, un contrat JSON, aucun état.
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

    /** Transcription lisible : texte brut → texte sans hésitations, brut inchangé. */
    fun transcriptionLisible(brut: String): String = Regles.transcriptionLisible(brut)

    /**
     * Ancrage : texte source + `[ElementJson]` → `AncrageJson`.
     *
     * `passagesIncertainsJson` est un `[PassageIncertainJson]` — les morceaux que la
     * reconnaissance vocale a mal entendus. Un élément qui n'en vient que de là est
     * retenu mais marqué, pour passer par la confirmation de l'utilisateur.
     */
    fun filtrerAncrage(
        texteSource: String,
        elementsJson: String,
        passagesIncertainsJson: String,
    ): String = Regles.filtrerAncrage(texteSource, elementsJson, passagesIncertainsJson)

    /** Relances du jour : `[ElementJson]` + `[SuiviJson]` + délais → `[RelanceJson]`. */
    fun relances(
        elementsJson: String,
        aujourdhui: String,
        suivisJson: String,
        delaisJson: String,
    ): String = Regles.relances(elementsJson, aujourdhui, suivisJson, delaisJson)

    /** Recherche par mots : `[ElementJson]` + `[CaptureJson]` → `ReponseJson`. */
    fun rechercherParMots(
        requete: String,
        elementsJson: String,
        capturesJson: String,
        reseau: Boolean,
    ): String = Regles.rechercherParMots(requete, elementsJson, capturesJson, reseau)

    /**
     * Recherche par question : mots + repère temporel flou → `ReponseJson`.
     *
     * `[ElementJson]` + `[CaptureJson]` + date ISO du jour.
     */
    fun rechercherParQuestion(
        requete: String,
        elementsJson: String,
        capturesJson: String,
        aujourdhui: String,
        reseau: Boolean,
    ): String = Regles.rechercherParQuestion(requete, elementsJson, capturesJson, aujourdhui, reseau)

    /**
     * Rappels d'un point de rupture : `[ElementJson]` + date-heure locale +
     * `[SuiviRappelJson]` → `RappelsDuMomentJson`.
     */
    fun rappels(elementsJson: String, maintenant: String, suivisJson: String): String =
        Regles.rappels(elementsJson, maintenant, suivisJson)

    /** Recherche par personne : nom + `[ElementJson]` → `ReponseJson`. */
    fun rechercherParPersonne(personne: String, elementsJson: String, reseau: Boolean): String =
        Regles.rechercherParPersonne(personne, elementsJson, reseau)

    /**
     * Version du contrat, pour que la surface puisse vérifier qu'elle parle au bon cœur.
     *
     * Passée à « 7 » avec les passages incertains : `filtrerAncrage` prend un
     * argument de plus. Une surface qui attend cette version et en trouve une plus
     * ancienne parle à un cœur sans ces fonctions, et doit le dire au lieu de
     * planter à l'appel.
     */
    val version: String = "7"
}
