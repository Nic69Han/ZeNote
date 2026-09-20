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
    /**
     * L'expression qui a produit l'échéance, telle qu'elle a été dite.
     *
     * « avant vendredi » vaut mieux affiché que traduit en date seule : la date est
     * une déduction, l'expression est ce qui a été dit, et c'est elle qui permet de
     * voir d'un coup d'œil que la déduction est juste.
     */
    val echeanceIndice: String? = null,
    /**
     * L'horizon d'une expression floue, quand aucune date ferme n'est déductible.
     *
     * JOURS, SEMAINES ou MOIS. « Dans les prochaines semaines » ne donne pas de date,
     * et en inventer une serait pire que de n'en donner aucune : elle deviendrait une
     * échéance qu'on croit avoir promise. L'élément porte donc un horizon indicatif,
     * et reste sans échéance.
     */
    val horizon: String? = null,
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
    /**
     * `true` quand cet élément ne vient que d'un passage mal entendu.
     *
     * Posé par [Regles.filtrerAncrage], jamais par le modèle : c'est un fait sur la
     * transcription, pas une opinion sur le contenu. Un élément ainsi marqué passe
     * par la confirmation de l'utilisateur au lieu d'être créé tel quel.
     */
    val transcriptionIncertaine: Boolean = false,
)

/**
 * Un morceau de transcription que la reconnaissance vocale a mal entendu.
 *
 * Les bornes sont des positions de caractères dans la transcription brute — la même
 * référence que l'ancrage des éléments, ce qui permet de savoir lesquels en viennent.
 */
@Serializable
data class PassageIncertainJson(
    val debutCar: Int,
    val finCar: Int,
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

/** Ce que la surface retient d'un rappel entre deux ouvertures de l'application. */
@Serializable
data class SuiviRappelJson(
    val elementId: String,
    /** Le moment où le plan a été attaché, en heure locale (`AAAA-MM-JJTHH:MM`). */
    val planPoseLe: String,
    /** Combien de fois ce rappel a déjà été présenté puis écarté sans être traité. */
    val foisIgnore: Int = 0,
)

/** Un rappel présenté à un point de rupture. */
@Serializable
data class RappelLivreJson(
    val elementId: String,
    val texte: String,
    /** Le signal tel que l'utilisateur l'a formulé. */
    val declencheur: String,
    /**
     * Non vide quand ZeNote ne sait pas observer ce signal et l'a ramené à la reprise
     * de l'appareil. L'écran affiche cette phrase : un rappel qui arrive au mauvais
     * moment sans le dire est pire qu'un rappel absent.
     */
    val substitution: String = "",
    /** `true` si le signal s'était produit avant ce point de rupture. Un constat. */
    val enRetard: Boolean = false,
)

/** Un rappel qui ne se représente plus à l'identique, et que la Revue reprend. */
@Serializable
data class EscaladeJson(
    val elementId: String,
    val texte: String,
    val motif: String,
    /** REPLANIFIER, DELEGUER, ABANDONNER. */
    val options: List<String>,
)

/**
 * Ce qu'un point de rupture livre : une notification unique, et ce qui remonte en Revue.
 *
 * [titre] est vide quand il n'y a rien à présenter — et il n'y a alors rien à
 * afficher du tout. Une notification vide est une interruption sans contenu.
 */
@Serializable
data class RappelsDuMomentJson(
    val titre: String = "",
    val rappels: List<RappelLivreJson> = emptyList(),
    val escalades: List<EscaladeJson> = emptyList(),
)

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

/**
 * Un candidat à la résolution d'une référence, tel que la surface l'affiche.
 *
 * [appui] n'est pas un ornement : sans lui, l'utilisateur ne peut pas arbitrer entre
 * deux homonymes et se contente d'accepter le premier, ce qui revient à laisser le
 * système choisir silencieusement — précisément ce que la question évite.
 */
@Serializable
data class CandidatJson(
    val entiteId: String,
    val nom: String,
    val appui: String,
)

/**
 * Une référence d'un élément, et ce que la mémoire en dit.
 *
 * [retenu] n'est rempli que lorsqu'un candidat l'emporte nettement. Sinon la surface
 * pose la question, avec [candidats] déjà classés.
 */
@Serializable
data class ResolutionJson(
    val elementId: String,
    val reference: String,
    val retenu: CandidatJson? = null,
    val candidats: List<CandidatJson> = emptyList(),
    val aQuestionner: Boolean = false,
)

/**
 * Ce que la surface a retenu d'un élément entre deux Revues.
 *
 * Ces deux faits n'appartiennent pas au classement — ils disent ce qui s'est passé à
 * l'écran, pas ce que l'élément est. Ils voyagent donc à part, comme les suivis de
 * relance et de rappel.
 */
@Serializable
data class SuiviElementJson(
    val elementId: String,
    val ecarteFois: Int = 0,
    /** Dernier jour où l'on y a touché, en ISO `AAAA-MM-JJ`. */
    val vuLe: String? = null,
)

/** Un élément qui n'avance plus, le constat qui l'explique et les issues proposées. */
@Serializable
data class ARevoirJson(
    val elementId: String,
    val texte: String,
    /** ECARTE_PLUSIEURS_FOIS ou DORMANT. */
    val motif: String,
    /** Le constat, affichable tel quel. Jamais un reproche. */
    val explication: String,
    /** REFORMULER, DECOUPER, PLANIFIER, DELEGUER, ABANDONNER. */
    val issues: List<String>,
)
