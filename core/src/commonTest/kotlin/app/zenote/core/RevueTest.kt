package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.Plan
import app.zenote.core.model.Poids
import app.zenote.core.model.Verdict
import app.zenote.core.priorisation.Urgence
import app.zenote.core.revue.Ajustement
import app.zenote.core.revue.FileRevue
import app.zenote.core.revue.Geste
import app.zenote.core.revue.SessionRevue
import app.zenote.core.revue.Suite
import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Tâches 4.13 à 4.16 — la machine à états de la Revue.
 *
 * Les noms des tests reprennent les scénarios de la spec `revue`. Ce qui est vérifié
 * ici n'est pas une implémentation mais une promesse produit : on peut quitter la
 * Revue sans rien perdre, et aucune tâche n'en sort sans savoir quand elle se fait.
 */
class RevueTest {

    private val a = Instant.parse("2026-09-08T18:51:00Z")
    private val plan = Plan("je passe devant le bureau de Marc", "je lui parle du budget")

    // ------------------------------------------------------------- ordre de la file

    @Test
    fun `scénario « Regroupement par source » — les éléments d'une capture restent ensemble`() {
        val elements = listOf(
            resolu(tacheBudget(captureId = "c-002")),
            resolu(engagementPlanning(captureId = "c-001")),
            resolu(informationBudget(captureId = "c-002")),
            resolu(informationBudget(captureId = "c-001")),
        )

        val groupes = FileRevue.groupes(elements, LE_MARDI)

        assertEquals(2, groupes.size, "Une capture, un groupe.")
        groupes.forEach { groupe ->
            assertTrue(
                groupe.entrees.all { it.element.captureId == groupe.captureId },
                "La source n'est relue qu'une fois : le groupe ne mélange pas les captures.",
            )
        }
        // c-002 porte l'échéance du vendredi ; c-001 n'a rien de pressant.
        assertEquals(CaptureId("c-002"), groupes.first().captureId)
    }

    @Test
    fun `scénario « Urgent d'abord » — une échéance dans les 24 heures passe devant`() {
        val elements = listOf(
            resolu(engagementPlanning(captureId = "c-001")),
            resolu(tacheBudget(captureId = "c-002", echeance = LE_MARDI)),
        )

        val file = FileRevue.file(elements, LE_MARDI)

        assertEquals(Urgence.AUJOURD_HUI, file.first().urgence)
        assertEquals("Voir le budget avec Marc", file.first().element.texte)
        assertEquals(Urgence.AUCUNE, file.last().urgence)
    }

    @Test
    fun `dans un groupe, l'incertain passe devant à urgence égale`() {
        // Deux éléments sans échéance : seule l'incertitude peut les départager.
        val flou = app.zenote.core.model.ElementDerive(
            captureId = CaptureId("c-001"),
            type = app.zenote.core.model.TypeElement.INFORMATION,
            texte = "Quelque chose à propos du planning",
            passage = passage("le planning"),
            poids = app.zenote.core.model.Deduit(Poids.MOYEN, 0.4, "aucun indice de conséquence"),
        )
        val elements = listOf(resolu(engagementPlanning()), resolu(flou))

        val file = FileRevue.file(elements, LE_MARDI)

        assertEquals(Urgence.AUCUNE, file.first().urgence)
        assertEquals(Urgence.AUCUNE, file.last().urgence)
        assertTrue(file.first().aConfirmer, "Ce qui demande une question passe en premier.")
        assertEquals("Quelque chose à propos du planning", file.first().element.texte)
    }

    @Test
    fun `un élément déjà tranché ne repasse pas en Revue`() {
        val accepte = resolu(
            informationBudget(),
            app.zenote.core.model.Decision(informationBudget().id, Verdict.ACCEPTE, a),
        )

        assertTrue(FileRevue.file(listOf(accepte), LE_MARDI).isEmpty())
    }

    // ------------------------------------------------------------- bouclage du plan

    @Test
    fun `scénario « Plan obligatoire » — accepter une tâche sans plan pose la question`() {
        val session = ouvrir(tacheBudget())
        val courantAvant = session.courant()

        val suite = session.appliquer(Geste.AccepterTelQuel, a)

        val question = suite as? Suite.PlanRequis
        assertNotNull(question, "Une tâche acceptée sans plan ne termine pas : elle interroge.")
        assertTrue(question.question.contains("Quand"))
        assertEquals(
            courantAvant?.id,
            session.courant()?.id,
            "La Revue ne passe pas à l'élément suivant tant que la question est ouverte.",
        )
        assertTrue(session.enAttenteDePlan)
        assertTrue(session.decisions.isEmpty(), "Rien n'est enregistré tant que le plan manque.")

        val apres = session.appliquer(Geste.Planifier(plan), a)

        val traite = apres as? Suite.Traite
        assertNotNull(traite)
        assertEquals(Verdict.ACCEPTE, traite.decision.verdict)
        assertEquals(plan, traite.decision.plan)
        assertTrue(session.terminee)
        assertFalse(session.enAttenteDePlan)
    }

    @Test
    fun `un élément non actionnable ne réclame aucun plan`() {
        val session = ouvrir(informationBudget())

        val suite = session.appliquer(Geste.AccepterTelQuel, a)

        assertTrue(suite is Suite.Traite)
        assertTrue(session.terminee)
    }

    @Test
    fun `une tâche déjà planifiée par le modèle sort sans question`() {
        val session = ouvrir(tachePlanifiee())

        val suite = session.appliquer(Geste.AccepterTelQuel, a)

        val traite = suite as? Suite.Traite
        assertNotNull(traite)
        // Le plan déduit est conservé tel quel : la décision ne le réécrit pas.
        assertNull(traite.decision.plan, "Un champ non corrigé reste celui du dérivé.")
    }

    @Test
    fun `aucune tâche ne sort de la Revue sans plan, « un jour » ou suppression`() {
        val session = ouvrir(tacheBudget(), engagementPlanning(), informationBudget())

        session.appliquer(Geste.Planifier(plan), a)
        session.appliquer(Geste.ClasserUnJour, a)
        session.appliquer(Geste.Supprimer, a)

        assertTrue(session.terminee)
        assertEquals(3, session.decisions.size)
        session.decisions
            .filter { it.verdict == Verdict.ACCEPTE }
            .forEach { decision ->
                val derive = listOf(tacheBudget(), engagementPlanning(), informationBudget())
                    .single { it.id == decision.elementId }
                if (derive.type.actionnable) {
                    assertNotNull(
                        decision.plan ?: derive.plan?.valeur,
                        "Un actionnable accepté sort toujours avec un plan.",
                    )
                }
            }
    }

    @Test
    fun `scénario « Classement un jour assumé » — l'élément sort des vues actives sans être supprimé`() {
        val session = ouvrir(tacheBudget())

        val suite = session.appliquer(Geste.ClasserUnJour, a) as Suite.Traite

        assertEquals(Verdict.UN_JOUR, suite.decision.verdict)
        assertTrue(suite.decision.verdict != Verdict.REJETE)
    }

    // ------------------------------------------------------------ ajustement rapide

    @Test
    fun `scénario « Ajustement rapide » — les champs déduits se corrigent sur place`() {
        val session = ouvrir(tacheIncertaine())

        val suite = session.appliquer(
            Geste.Ajuster(Ajustement(echeance = LE_VENDREDI, poids = Poids.FORT, plan = plan)),
            a,
        ) as Suite.Traite

        assertEquals(LE_VENDREDI, suite.decision.echeance)
        assertEquals(Poids.FORT, suite.decision.poids)
        assertEquals(plan, suite.decision.plan)
        assertTrue(suite.decision.corrige)
    }

    @Test
    fun `un ajustement saisi avant la question de plan n'est pas perdu`() {
        val session = ouvrir(tacheBudget())

        session.appliquer(Geste.Ajuster(Ajustement(poids = Poids.FAIBLE)), a)
        val suite = session.appliquer(Geste.Planifier(plan), a) as Suite.Traite

        assertEquals(Poids.FAIBLE, suite.decision.poids, "La correction survit à la question.")
        assertEquals(plan, suite.decision.plan)
    }

    // --------------------------------------------------------- acceptation groupée

    @Test
    fun `scénario « Acceptation groupée » — tout ce qui est sûr part en une action, annulable`() {
        val session = ouvrir(informationBudget(), tachePlanifiee(), tacheIncertaine(), tacheBudget())

        val eligibles = session.eligiblesAcceptationGroupee().map { it.element.texte }
        assertEquals(
            setOf("Le budget est arbitré en comité", "Envoyer le planning"),
            eligibles.toSet(),
            "Sont éligibles les éléments sûrs sur tous leurs champs, et déjà planifiés.",
        )

        val groupe = session.accepterTout(a)

        assertEquals(2, groupe.decisions.size)
        assertTrue(groupe.decisions.all { it.verdict == Verdict.ACCEPTE })
        assertEquals(2, session.restantes().size, "Le reste de la file n'est pas touché.")

        assertTrue(session.annuler(), "L'acceptation groupée s'annule d'un geste.")
        assertTrue(session.decisions.isEmpty())
        assertEquals(4, session.restantes().size)
    }

    @Test
    fun `une tâche sans plan n'est jamais emportée par une acceptation groupée`() {
        val session = ouvrir(tacheBudget())

        assertTrue(session.eligiblesAcceptationGroupee().isEmpty())
        assertTrue(session.accepterTout(a).decisions.isEmpty())
        assertFalse(session.terminee)
    }

    @Test
    fun `un geste simple s'annule aussi`() {
        val session = ouvrir(informationBudget(), tachePlanifiee())

        session.appliquer(Geste.Supprimer, a)
        assertEquals(1, session.decisions.size)

        assertTrue(session.annuler())
        assertTrue(session.decisions.isEmpty())
        assertEquals(2, session.restantes().size)
        assertFalse(session.annuler(), "Il n'y a plus rien à annuler.")
    }

    // ------------------------------------------------------- interruption et reprise

    @Test
    fun `scénario « Revue interrompue » — les décisions tiennent, la reprise se fait au suivant`() {
        val elements = listOf(
            resolu(informationBudget()),
            resolu(tachePlanifiee()),
            resolu(tacheBudget()),
            resolu(engagementPlanning()),
        )
        val file = FileRevue.file(elements, LE_MARDI)
        val session = SessionRevue.ouvrir(file)

        session.appliquer(Geste.ClasserUnJour, a)
        session.appliquer(Geste.ClasserUnJour, a)
        val suivantAttendu = session.courant()?.id
        val etat = session.etat()

        // L'utilisateur ferme l'application ; la file est reconstruite au retour.
        val reprise = SessionRevue.reprendre(FileRevue.file(elements, LE_MARDI), etat)

        assertEquals(2, reprise.decisions.size, "Les décisions prises sont conservées.")
        assertEquals(suivantAttendu, reprise.courant()?.id, "La reprise se fait à l'élément suivant.")
        assertEquals(2, reprise.restantes().size, "Les propositions non traitées restent en file.")
    }

    @Test
    fun `une interruption au milieu d'une question de plan reprend sur la même question`() {
        val session = ouvrir(tacheBudget(), informationBudget())
        session.appliquer(Geste.Ajuster(Ajustement(poids = Poids.FORT)), a)

        val reprise = SessionRevue.reprendre(session.restantes() + session.reportees(), session.etat())

        assertTrue(reprise.enAttenteDePlan)
        val suite = reprise.appliquer(Geste.Planifier(plan), a) as Suite.Traite
        assertEquals(Poids.FORT, suite.decision.poids)
    }

    @Test
    fun `scénario « Reporter » — l'élément reste en file, sans décision`() {
        val session = ouvrir(tacheBudget(), informationBudget())

        val suite = session.appliquer(Geste.Reporter, a)

        assertTrue(suite is Suite.Reporte)
        assertTrue(session.decisions.isEmpty(), "Reporter n'est pas une décision.")
        assertEquals(1, session.reportees().size)
        assertEquals("Le budget est arbitré en comité", session.courant()?.element?.texte)
    }

    // ------------------------------------------------------------------- outillage

    private fun ouvrir(vararg derives: app.zenote.core.model.ElementDerive): SessionRevue =
        SessionRevue.ouvrir(FileRevue.file(derives.map { resolu(it) }, LE_MARDI))
}
