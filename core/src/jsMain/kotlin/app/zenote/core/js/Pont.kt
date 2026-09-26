package app.zenote.core.js

import app.zenote.core.api.Regles

/**
 * Le pont vers le navigateur. Des fonctions pures, un contrat JSON, aucun état.
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

    /**
     * Vue Maintenant selon l'agenda : `[ElementJson]` + `ContexteMaintenantJson` →
     * `MaintenantJson`. Sans événement, mêmes propositions que [maintenant].
     */
    fun maintenantAvecContexte(elementsJson: String, contexteJson: String): String =
        Regles.maintenantAvecContexte(elementsJson, contexteJson)

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

    /**
     * Rappels avec l'agenda : comme [rappels], plus `[EvenementJson]`. La fin d'une
     * réunion devient un point de rupture, et rien de non critique n'est livré pendant.
     */
    fun rappelsAvecAgenda(
        elementsJson: String,
        maintenant: String,
        suivisJson: String,
        evenementsJson: String,
    ): String = Regles.rappels(elementsJson, maintenant, suivisJson, evenementsJson)

    /**
     * Rappels avec l'agenda et les plages de silence : comme [rappelsAvecAgenda], plus
     * `[PlageSilenceJson]`. Les critiques passent sans attendre, silence compris.
     */
    fun rappelsAvecContexte(
        elementsJson: String,
        maintenant: String,
        suivisJson: String,
        evenementsJson: String,
        silencesJson: String,
    ): String = Regles.rappels(elementsJson, maintenant, suivisJson, evenementsJson, silencesJson)

    /**
     * Moments de réunion : `[EvenementJson]` + heure locale + `[CaptureJson]` +
     * `[ElementJson]` + `[RattacheJson]` → `MomentsJson`. Briefing et dépose avant,
     * reprise et vidage après.
     */
    fun momentsDeReunion(
        evenementsJson: String,
        maintenant: String,
        capturesJson: String,
        elementsJson: String,
        rattachesJson: String,
    ): String = Regles.momentsDeReunion(evenementsJson, maintenant, capturesJson, elementsJson, rattachesJson)

    /**
     * Références à résoudre : `[CaptureJson]` + `[ElementJson]` → `[ResolutionJson]`.
     *
     * La mémoire est reconstruite à chaque appel depuis ce que la surface détient :
     * c'est une couche dérivée, rien n'est stocké et rien n'est à migrer.
     */
    fun referencesAResoudre(
        capturesJson: String,
        elementsJson: String,
        maintenant: String,
    ): String = Regles.referencesAResoudre(capturesJson, elementsJson, maintenant)

    /**
     * Éléments qui n'avancent plus : `[ElementJson]` + `[SuiviElementJson]` → `[ARevoirJson]`.
     *
     * Écartés plusieurs fois, ou dormants au regard de leur poids. Les plus lourds
     * d'abord.
     */
    fun aRevoir(elementsJson: String, suivisJson: String, aujourdhui: String): String =
        Regles.aRevoir(elementsJson, suivisJson, aujourdhui)

    /**
     * Créneau protégé : `[ElementJson]` + date → l'identifiant retenu, ou `""`.
     *
     * Un élément de poids fort sans échéance proche. Un urgent de poids faible ne
     * peut pas le remplacer : c'est exactement celui-là qui gagne tous les autres
     * jours.
     */
    fun creneauProtege(elementsJson: String, aujourdhui: String): String =
        Regles.creneauProtege(elementsJson, aujourdhui)

    /** Ce que la Revue dit d'un créneau décliné trop souvent, ou `""`. */
    fun signalCreneau(renoncementsDAffilee: Int): String =
        Regles.signalCreneau(renoncementsDAffilee)

    /**
     * Fiches des personnes : `[CaptureJson]` + `[ElementJson]` → `[FicheJson]`.
     *
     * Ce qui est ouvert, ce qui a été décidé, les derniers échanges. Jamais
     * renseignées à la main : elles se déduisent de ce qui a été capturé.
     */
    fun fiches(capturesJson: String, elementsJson: String): String =
        Regles.fiches(capturesJson, elementsJson)

    /** Recherche par personne : nom + `[ElementJson]` → `ReponseJson`. */
    fun rechercherParPersonne(personne: String, elementsJson: String, reseau: Boolean): String =
        Regles.rechercherParPersonne(personne, elementsJson, reseau)

    /**
     * Version du contrat, pour que la surface puisse vérifier qu'elle parle au bon cœur.
     *
     * Passée à « 14 » avec l'agenda (`maintenantAvecContexte`, `rappelsAvecAgenda`,
     * `momentsDeReunion`). Une surface qui attend cette version et en trouve une plus
     * ancienne parle à un cœur sans ces fonctions, et doit le dire au lieu de planter à
     * l'appel.
     */
    val version: String = "14"
}
