package app.zenote.core.api

import kotlinx.serialization.Serializable

/**
 * Le format de fil entre le cœur et les surfaces.
 *
 * Volontairement plat et sans généricité : c'est un contrat qui doit rester stable
 * pendant que le domaine évolue. Les surfaces (PWA aujourd'hui, Android et Windows
 * demain) ne connaissent que ces objets, jamais les classes du domaine.
 */

@Serializable
data class ElementJson(
    val id: String,
    val captureId: String,
    /** TACHE, ENGAGEMENT, ATTENTE, INFORMATION, DECISION, IDEE */
    val type: String,
    val texte: String,
    val debutCar: Int,
    val finCar: Int,
    val debutMs: Long? = null,
    val finMs: Long? = null,
    /** Date ISO `AAAA-MM-JJ`. */
    val echeance: String? = null,
    val echeanceConfiance: Double? = null,
    val echeanceIndice: String? = null,
    /** FAIBLE, MOYEN, FORT */
    val poids: String? = null,
    val poidsConfiance: Double? = null,
    val poidsIndice: String? = null,
    val interlocuteur: String? = null,
    val interlocuteurConfiance: Double? = null,
    /** PROFESSIONNEL, PERSONNEL */
    val sphere: String? = null,
    val planDeclencheur: String? = null,
    val planAction: String? = null,
    /** EN_ATTENTE, ACCEPTE, UN_JOUR, REJETE */
    val verdict: String = "EN_ATTENTE",
    /** `true` quand l'utilisateur a corrigé un champ à la main. */
    val corrigeParHumain: Boolean = false,
)

@Serializable
data class PropositionJson(
    val elementId: String,
    val texte: String,
    /** Ce qui se passe si ce n'est pas fait, puis l'échéance. Jamais un score. */
    val raison: String,
    val poidsEffectif: String,
    val urgence: String,
)

@Serializable
data class EntreeRevueJson(
    val element: ElementJson,
    /** `true` si une déduction est sous le seuil : à poser en question, pas en fait. */
    val aConfirmer: Boolean,
    /** `true` si accepté mais sans plan ni classement « un jour ». */
    val planManquant: Boolean,
    val urgence: String,
)

@Serializable
data class GroupeRevueJson(
    val captureId: String,
    val entrees: List<EntreeRevueJson>,
)

/**
 * Une relance proposée en Revue : un engagement dont l'échéance approche, ou une
 * attente restée sans nouvelle au-delà du délai habituel de la personne.
 *
 * [motif] dit pourquoi elle remonte maintenant. Jamais un reproche, un constat.
 */
@Serializable
data class RelanceJson(
    val elementId: String,
    val texte: String,
    /** ENGAGEMENT ou ATTENTE. */
    val type: String,
    val interlocuteur: String? = null,
    val echeance: String? = null,
    val motif: String,
    /** RELANCER, PROLONGER, CLORE. */
    val options: List<String>,
)

/** La dernière nouvelle connue sur une attente, telle que la surface la retient. */
@Serializable
data class SuiviJson(val elementId: String, val derniereNouvelle: String)

@Serializable
data class RevueJson(
    val groupes: List<GroupeRevueJson>,
    val total: Int,
    /**
     * `true` quand la file dépassait ce qu'une Revue absorbe et a donc été réduite.
     * Les groupes ne portent alors que les entrées retenues ; le reste demeure en
     * file, intact — d'où [demeurentEnFile], qui n'est pas un retard mais un reste.
     */
    val reduite: Boolean = false,
    /** La phrase que le cœur propose pour expliquer la réduction. */
    val motifReduction: String = "",
    /** Combien d'entrées demeurent en file, non présentées aujourd'hui. */
    val demeurentEnFile: Int = 0,
)

@Serializable
data class AncrageJson(
    val retenus: List<ElementJson>,
    /** Les éléments écartés faute de passage source, avec la raison. */
    val ecartes: List<EcarteJson>,
)

@Serializable
data class EcarteJson(
    val texte: String,
    val raison: String,
)

/**
 * Une capture telle que la surface la passe à la recherche.
 *
 * Réduite à ce que la recherche lit : ni audio, ni mode. La surface n'a donc pas à
 * reconstruire un objet du domaine pour poser une question.
 */
@Serializable
data class CaptureJson(
    val id: String,
    val texte: String,
    /** Horodatage ISO complet, tel qu'il sera cité dans la justification. */
    val creeLe: String,
    /**
     * Le jour de la capture vu par l'utilisateur, en ISO (`AAAA-MM-JJ`).
     *
     * Distinct de [creeLe], qui est en temps universel : une capture de 23 h 30 y tombe
     * le lendemain. C'est la surface qui sait dans quel fuseau son porteur vit, elle
     * seule peut le dire. Absent, la capture reste hors de portée des questions à
     * repère temporel — jamais rattachée à une période au hasard.
     */
    val jour: String? = null,
)

/** Ce dont une réponse de recherche se réclame. Jamais un score. */
@Serializable
data class CitationJson(
    val captureId: String,
    val extrait: String,
    val pourquoi: String,
    val elementId: String? = null,
)

/**
 * Une réponse de recherche.
 *
 * [fondee] est `false` quand rien ne correspond : [enonce] le dit alors explicitement
 * et [citations] est vide. Une réponse sans citation ne peut pas exister autrement —
 * c'est ce qui empêche l'écran d'afficher une affirmation que rien ne porte.
 */
@Serializable
data class ReponseJson(
    val question: String,
    val enonce: String,
    val fondee: Boolean,
    val citations: List<CitationJson>,
    val indisponibleHorsLigne: List<String> = emptyList(),
    /**
     * Ce que la question demandait et que le produit ne sait pas faire — par
     * construction, pas par panne. L'écran l'affiche : répondre à moitié sans le dire
     * laisse croire que la question entière a été honorée.
     */
    val nonPrisEnCompte: List<String> = emptyList(),
)
