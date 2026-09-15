package app.zenote.core.revue

import app.zenote.core.model.Decision
import app.zenote.core.model.ElementId
import app.zenote.core.model.Plan
import app.zenote.core.model.Poids
import app.zenote.core.model.Sphere
import app.zenote.core.model.Verdict
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate

/**
 * La machine à états de la Revue quotidienne.
 *
 * Deux exigences de la spec `revue` la façonnent entièrement :
 *
 *  - **Interruption et reprise sans perte.** L'état complet tient dans [EtatRevue],
 *    qui se sérialise et se relit : quitter la Revue et y revenir, c'est reprendre à
 *    l'élément suivant avec les décisions déjà prises intactes.
 *  - **Bouclage du plan.** Une tâche ou un engagement accepté ne sort d'ici qu'avec
 *    un plan, un classement « un jour » ou une suppression. C'est le plan, pas la
 *    note, qui ferme la boucle mentale (`design.md` — Masicampo & Baumeister 2011) :
 *    accepter sans plan ne termine donc pas l'élément, cela pose une question.
 */

/** Les champs déduits que l'utilisateur corrige sur place, sans quitter l'écran. */
data class Ajustement(
    val echeance: LocalDate? = null,
    val poids: Poids? = null,
    val interlocuteur: String? = null,
    val sphere: Sphere? = null,
    val plan: Plan? = null,
) {
    /** `true` si rien n'a été touché : l'acceptation est alors « telle quelle ». */
    val vide: Boolean
        get() = echeance == null && poids == null && interlocuteur == null &&
            sphere == null && plan == null
}

/** Le geste unique par lequel une proposition est traitée. Il n'en existe pas d'autre. */
sealed interface Geste {
    /** Accepter la proposition sans y toucher. */
    data object AccepterTelQuel : Geste

    /** Accepter en corrigeant les champs déduits, sur le même écran. */
    data class Ajuster(val ajustement: Ajustement) : Geste

    /** Répondre à la question du plan posée par le bouclage. */
    data class Planifier(val plan: Plan) : Geste

    /** Remettre à la Revue suivante : l'élément reste en file, intact. */
    data object Reporter : Geste

    /** Sortir des vues actives sans supprimer. */
    data object ClasserUnJour : Geste

    /** Supprimer l'élément. La capture source, elle, reste intacte. */
    data object Supprimer : Geste
}

/** Ce que la Revue répond à un geste. */
sealed interface Suite {
    /** L'élément est tranché ; la Revue passe au suivant. */
    data class Traite(val decision: Decision) : Suite

    /**
     * L'élément est accepté mais rien ne dit quand il sera fait. La Revue ne passe
     * pas au suivant tant que la question n'a pas de réponse.
     */
    data class PlanRequis(val elementId: ElementId, val question: String) : Suite

    /** L'élément repart en file pour la Revue suivante, sans décision. */
    data class Reporte(val elementId: ElementId) : Suite

    /** Une acceptation groupée : toutes les décisions prises en une action. */
    data class Groupe(val decisions: List<Decision>) : Suite
}

/**
 * L'état d'une Revue en cours. Tout ce qu'il faut pour la reprendre à l'identique —
 * rien de plus, pour qu'une reprise ne puisse pas dépendre d'un état caché.
 */
data class EtatRevue(
    val restantes: List<ElementId>,
    val decisions: List<Decision>,
    val reportees: List<ElementId>,
    /** L'élément accepté dont on attend encore le plan, s'il y en a un. */
    val planAttenduPour: ElementId? = null,
    /** Les corrections déjà saisies sur cet élément, à ne pas perdre pendant la question. */
    val ajustementEnCours: Ajustement? = null,
)

class SessionRevue private constructor(
    private val toutes: List<EntreeRevue>,
    private var etat: EtatRevue,
) {

    private val parId: Map<ElementId, EntreeRevue> = toutes.associateBy { it.id }

    /** L'historique des états, pour que chaque geste reste annulable. */
    private val journal = ArrayDeque<EtatRevue>()

    companion object {
        fun ouvrir(entrees: List<EntreeRevue>): SessionRevue = SessionRevue(
            toutes = entrees,
            etat = EtatRevue(
                restantes = entrees.map { it.id },
                decisions = emptyList(),
                reportees = emptyList(),
            ),
        )

        /**
         * Reprend une Revue interrompue. Les entrées sont reconstruites depuis le
         * magasin ; l'état dit où l'on en était.
         */
        fun reprendre(entrees: List<EntreeRevue>, etat: EtatRevue): SessionRevue {
            val connus = entrees.map { it.id }.toSet()
            require(etat.restantes.all { it in connus }) {
                "L'état de Revue cite un élément absent de la file reconstruite."
            }
            return SessionRevue(entrees, etat)
        }
    }

    // ------------------------------------------------------------------- lecture

    /** L'élément à traiter, ou `null` quand la file est vidée. */
    fun courant(): EntreeRevue? = etat.restantes.firstOrNull()?.let { parId[it] }

    val terminee: Boolean get() = etat.restantes.isEmpty()

    /** Les décisions prises depuis l'ouverture, dans l'ordre où elles ont été prises. */
    val decisions: List<Decision> get() = etat.decisions

    /** Ce qui a été remis à la Revue suivante. */
    fun reportees(): List<EntreeRevue> = etat.reportees.mapNotNull { parId[it] }

    /** Ce qui attend encore, dans l'ordre de présentation. */
    fun restantes(): List<EntreeRevue> = etat.restantes.mapNotNull { parId[it] }

    /** L'état à écrire sur disque quand l'utilisateur quitte la Revue. */
    fun etat(): EtatRevue = etat

    /** `true` quand la Revue attend le plan d'un élément déjà accepté. */
    val enAttenteDePlan: Boolean get() = etat.planAttenduPour != null

    /** Les éléments qu'une acceptation groupée emporterait, dans l'ordre de la file. */
    fun eligiblesAcceptationGroupee(): List<EntreeRevue> =
        if (enAttenteDePlan) emptyList() else restantes().filter { it.acceptableEnGroupe }

    // -------------------------------------------------------------------- gestes

    /**
     * Applique un geste à l'élément courant.
     *
     * @throws IllegalStateException si la file est vide — il n'y a alors rien à traiter.
     */
    fun appliquer(geste: Geste, a: Instant): Suite {
        val entree = checkNotNull(courant()) { "La Revue est terminée : plus rien à traiter." }
        val avant = etat

        val suite = when (geste) {
            Geste.AccepterTelQuel -> accepter(entree, etat.ajustementEnCours ?: Ajustement(), a)
            is Geste.Ajuster -> accepter(entree, geste.ajustement, a)
            is Geste.Planifier ->
                accepter(entree, (etat.ajustementEnCours ?: Ajustement()).copy(plan = geste.plan), a)

            Geste.Reporter -> {
                etat = etat.copy(
                    restantes = etat.restantes.drop(1),
                    reportees = etat.reportees + entree.id,
                    planAttenduPour = null,
                    ajustementEnCours = null,
                )
                Suite.Reporte(entree.id)
            }

            Geste.ClasserUnJour -> trancher(entree, Verdict.UN_JOUR, a)
            Geste.Supprimer -> trancher(entree, Verdict.REJETE, a)
        }

        // On ne journalise que ce qui a réellement bougé : une question de plan reposée
        // à l'identique ne doit pas consommer un cran d'annulation.
        if (etat != avant) journal.addLast(avant)
        return suite
    }

    /**
     * Accepte en une action tout ce dont la confiance est haute sur tous les champs.
     *
     * Le reste de la file n'est pas touché : ce qui demandait une question la
     * demandera toujours. L'action entière s'annule d'un seul [annuler].
     */
    fun accepterTout(a: Instant): Suite.Groupe {
        check(!enAttenteDePlan) {
            "Une question de plan est ouverte : elle se referme avant toute acceptation groupée."
        }
        val eligibles = eligiblesAcceptationGroupee()
        if (eligibles.isEmpty()) return Suite.Groupe(emptyList())

        val avant = etat
        val nouvelles = eligibles.map { Decision(it.id, Verdict.ACCEPTE, a) }
        val emportes = eligibles.map { it.id }.toSet()
        etat = etat.copy(
            restantes = etat.restantes.filter { it !in emportes },
            decisions = etat.decisions + nouvelles,
        )
        journal.addLast(avant)
        return Suite.Groupe(nouvelles)
    }

    /**
     * Annule le dernier geste, groupé ou non.
     *
     * @return `false` s'il n'y avait rien à annuler.
     */
    fun annuler(): Boolean {
        val precedent = journal.removeLastOrNull() ?: return false
        etat = precedent
        return true
    }

    // ------------------------------------------------------------------- interne

    /**
     * Le bouclage du plan. Un actionnable sans plan ne se termine pas : il pose la
     * question, et l'élément reste courant jusqu'à ce qu'elle ait une réponse.
     */
    private fun accepter(entree: EntreeRevue, ajustement: Ajustement, a: Instant): Suite {
        val planEffectif = ajustement.plan ?: entree.element.plan
        if (entree.element.type.actionnable && planEffectif == null) {
            etat = etat.copy(planAttenduPour = entree.id, ajustementEnCours = ajustement)
            return Suite.PlanRequis(entree.id, question(entree))
        }
        val decision = Decision(
            elementId = entree.id,
            verdict = Verdict.ACCEPTE,
            decideA = a,
            echeance = ajustement.echeance,
            poids = ajustement.poids,
            interlocuteur = ajustement.interlocuteur,
            sphere = ajustement.sphere,
            plan = ajustement.plan,
        )
        avancer(decision)
        return Suite.Traite(decision)
    }

    private fun trancher(entree: EntreeRevue, verdict: Verdict, a: Instant): Suite {
        val decision = Decision(entree.id, verdict, a)
        avancer(decision)
        return Suite.Traite(decision)
    }

    private fun avancer(decision: Decision) {
        etat = etat.copy(
            restantes = etat.restantes.drop(1),
            decisions = etat.decisions + decision,
            planAttenduPour = null,
            ajustementEnCours = null,
        )
    }

    private fun question(entree: EntreeRevue): String =
        "Quand est-ce que « ${entree.element.texte} » se fait ? " +
            "Un moment, ou un signal déclencheur."
}
