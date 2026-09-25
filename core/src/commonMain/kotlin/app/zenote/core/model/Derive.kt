package app.zenote.core.model

import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate

/**
 * Couche 2 sur 3 : le dérivé. Reconstructible et jetable.
 *
 * Tout ce que produit l'analyse vit ici, avec la version de modèle qui l'a produit.
 * Une ré-analyse remplace intégralement cette couche sans toucher ni à la source
 * ni aux décisions humaines. Voir `design.md` — Décision 2.
 */

/** Seuil en dessous duquel une déduction devient une question posée en Revue. */
const val SEUIL_CONFIANCE: Double = 0.75

/**
 * Une valeur déduite par le modèle, avec sa confiance et l'indice qui la fonde.
 *
 * @param indice ce sur quoi le modèle s'est appuyé, affichable tel quel à l'utilisateur.
 */
data class Deduit<out T>(
    val valeur: T,
    val confiance: Double,
    val indice: String,
) {
    init {
        require(confiance in 0.0..1.0) { "La confiance est une probabilité entre 0 et 1." }
        require(indice.isNotBlank()) { "Une déduction sans indice n'est pas justifiable." }
    }

    val sûr: Boolean get() = confiance >= SEUIL_CONFIANCE
}

enum class TypeElement {
    /** L'utilisateur doit agir. */
    TACHE,

    /** L'utilisateur a promis quelque chose à quelqu'un. */
    ENGAGEMENT,

    /** Quelqu'un doit quelque chose à l'utilisateur. */
    ATTENTE,

    /** À retenir, sans action. */
    INFORMATION,

    /** Un choix arrêté et sa raison. */
    DECISION,

    /** À explorer un jour. */
    IDEE,
    ;

    /** Seuls ces deux types peuvent apparaître dans la vue Maintenant. */
    val actionnable: Boolean get() = this == TACHE || this == ENGAGEMENT
}

/**
 * Le poids : ce qui se passe si ce n'est pas fait. Trois niveaux, jamais demandés à
 * l'utilisateur, toujours déduits d'un indice et corrigeables. Voir `design.md` —
 * Décision 5.
 */
enum class Poids { FAIBLE, MOYEN, FORT }

enum class Sphere { PROFESSIONNEL, PERSONNEL }

/**
 * Le temps qu'un élément demande, en trois paliers.
 *
 * Une estimation en minutes serait faussement précise, comme le score continu que la
 * décision 5 refuse. Trois paliers suffisent à répondre à la seule question qu'on lui
 * pose : cet élément tient-il dans le temps qui reste avant la prochaine réunion ?
 * (Change `agenda-local`, décision 4.)
 *
 * @param minutes l'ordre de grandeur retenu pour le palier, pas une promesse.
 */
enum class Duree(val minutes: Int) {
    /** Quelques minutes : envoyer, répondre, confirmer. */
    COURTE(5),

    /** Une vingtaine de minutes. */
    MOYENNE(20),

    /** Une heure ou plus : préparer, rédiger, analyser. */
    LONGUE(60),
}

/**
 * Un plan d'exécution, formulé en intention d'implémentation : « quand [declencheur],
 * je fais [action] ». C'est lui, et non la note, qui ferme la boucle mentale.
 */
data class Plan(val declencheur: String, val action: String) {
    init {
        require(declencheur.isNotBlank()) { "Un plan sans déclencheur n'en est pas un." }
        require(action.isNotBlank()) { "Un plan sans action n'en est pas un." }
    }

    override fun toString(): String = "Quand $declencheur, $action"
}

data class ElementId(val value: String) {
    override fun toString(): String = value
}

/**
 * Un élément extrait d'une capture.
 *
 * Son identifiant est déterministe — capture, passage, type — pour qu'une ré-analyse
 * qui retrouve le même passage retombe sur le même identifiant, et donc que la
 * décision humaine déjà prise reste attachée.
 */
data class ElementDerive(
    val captureId: CaptureId,
    val type: TypeElement,
    val texte: String,
    val passage: Passage,
    val echeance: Deduit<LocalDate>? = null,
    val poids: Deduit<Poids>? = null,
    val interlocuteur: Deduit<String>? = null,
    val sphere: Deduit<Sphere>? = null,
    val plan: Deduit<Plan>? = null,
    val duree: Deduit<Duree>? = null,
) {
    init {
        require(texte.isNotBlank()) { "Un élément sans texte n'a rien à proposer." }
    }

    val id: ElementId =
        ElementId("$captureId:${passage.debutCar}-${passage.finCar}:$type")

    /**
     * `true` dès qu'une déduction passe sous le seuil : l'élément est alors présenté
     * comme une question à confirmer, et aucun rappel n'est planifié dessus.
     *
     * La durée n'y entre pas : une durée incertaine n'est pas présentée comme un fait,
     * elle retire seulement l'élément des créneaux courts. En faire une question
     * changerait la Revue de tous ceux qui n'ont pas d'agenda, sans rien leur apporter.
     */
    val aConfirmer: Boolean
        get() = listOfNotNull(echeance, poids, interlocuteur, sphere, plan).any { !it.sûr }
}

enum class OrigineAnalyse {
    /** Exécutée sur l'appareil. Seule origine permise pour une capture privée. */
    LOCALE,

    /** Exécutée par un service distant. */
    DISTANTE,
}

/**
 * Le résultat complet d'une passe d'analyse sur une capture. Remplace intégralement
 * la précédente : il n'y a jamais deux analyses concurrentes pour une même capture.
 */
class Analyse private constructor(
    val captureId: CaptureId,
    val origine: OrigineAnalyse,
    val versionModele: String,
    val analyseA: Instant,
    val texteNettoye: String,
    val elements: List<ElementDerive>,
) {
    companion object {
        /**
         * Construit une analyse en refusant tout élément non rattachable à la capture.
         *
         * @throws IllegalArgumentException si un élément cite un passage qui déborde du
         *   texte brut, ou qui appartient à une autre capture. C'est la garantie
         *   d'ancrage : un élément que le modèle a inventé n'atteint jamais l'écran.
         */
        fun de(
            capture: Capture,
            origine: OrigineAnalyse,
            versionModele: String,
            analyseA: Instant,
            texteNettoye: String,
            elements: List<ElementDerive>,
        ): Analyse {
            elements.forEach { element ->
                require(element.captureId == capture.id) {
                    "L'élément ${element.id} ne se rattache pas à la capture ${capture.id}."
                }
                require(element.passage.tientDans(capture)) {
                    "L'élément ${element.id} cite un passage absent du texte source."
                }
            }
            val doublons = elements.groupBy { it.id }.filterValues { it.size > 1 }.keys
            require(doublons.isEmpty()) { "Éléments en double dans l'analyse : $doublons." }

            return Analyse(
                captureId = capture.id,
                origine = origine,
                versionModele = versionModele,
                analyseA = analyseA,
                texteNettoye = texteNettoye,
                elements = elements.toList(),
            )
        }
    }
}
