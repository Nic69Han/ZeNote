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

@Serializable
data class RevueJson(
    val groupes: List<GroupeRevueJson>,
    val total: Int,
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
)
