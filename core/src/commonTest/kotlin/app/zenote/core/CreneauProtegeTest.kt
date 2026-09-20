package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Passage
import app.zenote.core.model.Poids
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.priorisation.CreneauProtege
import kotlinx.datetime.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Le créneau protégé.
 *
 * Ce qui compte vraiment n'a jamais de date, donc n'est jamais urgent, donc n'arrive
 * jamais — c'est le mécanisme par lequel un agenda plein produit une année vide. Le
 * créneau ne rend pas l'important plus urgent : il empêche l'urgent d'y entrer.
 *
 * Toute la valeur tient donc dans les refus. Ces tests vérifient d'abord ce qui
 * **n'a pas le droit** d'occuper le créneau — une seule exception suffirait à le
 * vider de son sens, parce qu'il y aura toujours quelque chose d'urgent.
 */
class CreneauProtegeTest {

    private val aujourdhui = LocalDate.parse("2026-09-22")

    private fun element(
        id: String,
        poids: Poids? = Poids.FORT,
        echeance: LocalDate? = null,
        verdict: Verdict = Verdict.ACCEPTE,
        type: TypeElement = TypeElement.TACHE,
    ) = ElementResolu(
        id = ElementId(id),
        captureId = CaptureId("c-1"),
        type = type,
        texte = "préparer la reprise du dossier",
        passage = Passage(0, 30),
        echeance = echeance,
        poids = poids,
        interlocuteur = null,
        sphere = null,
        plan = null,
        verdict = verdict,
        aConfirmer = false,
        corrigeParHumain = false,
        indicePoids = null,
    )

    @Test
    fun `le creneau propose un element lourd sans echeance`() {
        val propose = CreneauProtege.proposition(listOf(element("e-1")), aujourdhui)
        assertEquals(ElementId("e-1"), propose?.id)
    }

    @Test
    fun `un element urgent de poids faible ne prend pas le creneau`() {
        // C'est le cas entier : celui-là gagne tous les autres jours, et c'est
        // précisément pour lui que le créneau existe.
        val urgentLeger = element("e-1", poids = Poids.FAIBLE, echeance = aujourdhui)
        val importantSansDate = element("e-2", poids = Poids.FORT)

        val propose = CreneauProtege.proposition(listOf(urgentLeger, importantSansDate), aujourdhui)

        assertEquals(ElementId("e-2"), propose?.id)
    }

    @Test
    fun `un element lourd dont l'echeance est proche n'a pas besoin du creneau`() {
        // L'urgence le fera remonter d'elle-même. Le créneau est pour ce que rien ne
        // fait remonter.
        val bientot = element("e-1", echeance = LocalDate.parse("2026-09-25"))
        assertFalse(CreneauProtege.eligible(bientot, aujourdhui))
        assertNull(CreneauProtege.proposition(listOf(bientot), aujourdhui))
    }

    @Test
    fun `un element lourd a echeance lointaine, lui, y a sa place`() {
        val plusTard = element("e-1", echeance = LocalDate.parse("2026-11-01"))
        assertTrue(CreneauProtege.eligible(plusTard, aujourdhui))
    }

    @Test
    fun `sans rien qui le merite, le creneau ne propose rien`() {
        // Le remplir avec ce qui traîne le viderait de son sens en une semaine.
        val legers = listOf(
            element("e-1", poids = Poids.FAIBLE),
            element("e-2", poids = Poids.MOYEN),
        )
        assertNull(CreneauProtege.proposition(legers, aujourdhui))
    }

    @Test
    fun `ce qui n'est pas accepte n'entre pas dans le creneau`() {
        val enAttente = element("e-1", verdict = Verdict.EN_ATTENTE)
        assertNull(CreneauProtege.proposition(listOf(enAttente), aujourdhui))
    }

    @Test
    fun `une information n'entre pas non plus, il n'y a rien a y faire`() {
        val info = element("e-1", type = TypeElement.INFORMATION)
        assertNull(CreneauProtege.proposition(listOf(info), aujourdhui))
    }

    @Test
    fun `sans echeance d'abord, puis la plus lointaine`() {
        // À poids égal, ce que rien ne fera jamais remonter passe en premier.
        val elements = listOf(
            element("e-1", echeance = LocalDate.parse("2026-12-01")),
            element("e-2"),
            element("e-3", echeance = LocalDate.parse("2026-10-15")),
        )
        assertEquals(ElementId("e-2"), CreneauProtege.proposition(elements, aujourdhui)?.id)
    }

    @Test
    fun `le renoncement n'est signale qu'a la troisieme fois`() {
        assertFalse(CreneauProtege.aSignaler(1))
        assertFalse(CreneauProtege.aSignaler(2))
        assertTrue(CreneauProtege.aSignaler(3))
    }

    @Test
    fun `le signal porte sur le creneau, pas sur la personne`() {
        val phrase = CreneauProtege.signal(3)
        assertTrue(phrase.contains("pas au bon moment"))
        for (reproche in listOf("vous avez", "auriez", "devriez", "encore")) {
            assertFalse(phrase.contains(reproche), "« $reproche » n'a rien à faire dans « $phrase »")
        }
    }
}
