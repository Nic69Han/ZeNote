package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Passage
import app.zenote.core.model.Poids
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.revue.ARevoir
import app.zenote.core.revue.IssueRevoir
import app.zenote.core.revue.MotifRevoir
import app.zenote.core.revue.SuiviElement
import kotlinx.datetime.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Ce qui remonte en Revue parce que Maintenant n'en fait plus rien.
 *
 * Les deux situations se ressemblent par le symptôme — un élément qui reste là — et
 * diffèrent par ce qu'il faut en faire. Un élément écarté trois fois est mal
 * découpé ou plus d'actualité ; un élément lourd qui dort depuis trois semaines est
 * bloqué par autre chose. Proposer les mêmes issues aux deux serait plus simple, et
 * ne servirait ni l'un ni l'autre.
 *
 * Ce qui est vérifié ici autant que le reste : ce qui **ne** remonte **pas**. Une
 * Revue qui se remplit de remontées devient la corvée que tout le produit cherche à
 * éviter, et l'on cesse de l'ouvrir.
 */
class ARevoirTest {

    private val aujourdhui = LocalDate.parse("2026-09-22")

    private fun element(
        id: String,
        poids: Poids? = Poids.FORT,
        verdict: Verdict = Verdict.ACCEPTE,
        type: TypeElement = TypeElement.TACHE,
    ) = ElementResolu(
        id = ElementId(id),
        captureId = CaptureId("c-1"),
        type = type,
        texte = "préparer le dossier de reprise",
        passage = Passage(0, 30),
        echeance = null,
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
    fun `un element ecarte trois fois remonte, avec ses issues`() {
        val remontees = ARevoir.aRevoir(
            elements = listOf(element("e-1")),
            suivis = listOf(SuiviElement("e-1", ecarteFois = 3)),
            aujourdhui = aujourdhui,
        )

        assertEquals(1, remontees.size)
        assertEquals(MotifRevoir.ECARTE_PLUSIEURS_FOIS, remontees.single().motif)
        assertEquals(
            listOf(IssueRevoir.REFORMULER, IssueRevoir.DECOUPER, IssueRevoir.ABANDONNER),
            remontees.single().issues,
        )
    }

    @Test
    fun `deux ecarts ne suffisent pas`() {
        // Deux fois peut être un mauvais moment. Trois est une constante.
        val remontees = ARevoir.aRevoir(
            listOf(element("e-1")),
            listOf(SuiviElement("e-1", ecarteFois = 2)),
            aujourdhui,
        )
        assertTrue(remontees.isEmpty())
    }

    @Test
    fun `le motif est un constat sur l'element, pas un reproche`() {
        val remontee = ARevoir.aRevoir(
            listOf(element("e-1")),
            listOf(SuiviElement("e-1", ecarteFois = 4)),
            aujourdhui,
        ).single()

        assertTrue(remontee.explication.contains("écarté 4 fois"))
        for (reproche in listOf("vous", "auriez", "oublié", "retard")) {
            assertTrue(
                !remontee.explication.contains(reproche),
                "« $reproche » n'a rien à faire dans « ${remontee.explication} »",
            )
        }
    }

    @Test
    fun `une tache lourde sans avancee depuis deux semaines remonte`() {
        val remontee = ARevoir.aRevoir(
            listOf(element("e-1", poids = Poids.FORT)),
            listOf(SuiviElement("e-1", vuLe = LocalDate.parse("2026-09-01"))),
            aujourdhui,
        ).single()

        assertEquals(MotifRevoir.DORMANT, remontee.motif)
        assertEquals(
            listOf(
                IssueRevoir.DECOUPER,
                IssueRevoir.PLANIFIER,
                IssueRevoir.DELEGUER,
                IssueRevoir.ABANDONNER,
            ),
            remontee.issues,
        )
    }

    @Test
    fun `la meme anciennete ne reveille pas un element leger`() {
        // « Anormale au regard de leur poids » : remonter une idée à explorer au même
        // rythme qu'un engagement ferait de la Revue une liste de rappels.
        val remontees = ARevoir.aRevoir(
            listOf(element("e-1", poids = Poids.FAIBLE)),
            listOf(SuiviElement("e-1", vuLe = LocalDate.parse("2026-09-01"))),
            aujourdhui,
        )
        assertTrue(remontees.isEmpty())
    }

    @Test
    fun `un element touche hier ne dort pas`() {
        val remontees = ARevoir.aRevoir(
            listOf(element("e-1")),
            listOf(SuiviElement("e-1", vuLe = LocalDate.parse("2026-09-21"))),
            aujourdhui,
        )
        assertTrue(remontees.isEmpty())
    }

    @Test
    fun `un element pas encore accepte ne dort pas, il attend son tour`() {
        val remontees = ARevoir.aRevoir(
            listOf(element("e-1", verdict = Verdict.EN_ATTENTE)),
            listOf(SuiviElement("e-1", vuLe = LocalDate.parse("2026-08-01"))),
            aujourdhui,
        )
        assertTrue(remontees.isEmpty())
    }

    @Test
    fun `un element rejete ne remonte jamais`() {
        val remontees = ARevoir.aRevoir(
            listOf(element("e-1", verdict = Verdict.REJETE)),
            listOf(SuiviElement("e-1", ecarteFois = 9, vuLe = LocalDate.parse("2026-01-01"))),
            aujourdhui,
        )
        assertTrue(remontees.isEmpty())
    }

    @Test
    fun `une information ne remonte pas, il n'y a rien a y faire avancer`() {
        val remontees = ARevoir.aRevoir(
            listOf(element("e-1", type = TypeElement.INFORMATION)),
            listOf(SuiviElement("e-1", ecarteFois = 5)),
            aujourdhui,
        )
        assertTrue(remontees.isEmpty())
    }

    @Test
    fun `l'ecart l'emporte sur la dormance, il dit quelque chose de plus precis`() {
        val remontee = ARevoir.aRevoir(
            listOf(element("e-1")),
            listOf(SuiviElement("e-1", ecarteFois = 3, vuLe = LocalDate.parse("2026-01-01"))),
            aujourdhui,
        ).single()

        assertEquals(MotifRevoir.ECARTE_PLUSIEURS_FOIS, remontee.motif)
    }

    @Test
    fun `les plus lourds d'abord, et l'ordre ne bouge pas`() {
        val elements = listOf(
            element("e-1", poids = Poids.MOYEN),
            element("e-2", poids = Poids.FORT),
            element("e-3", poids = Poids.FORT),
        )
        val suivis = elements.map { SuiviElement(it.id.value, ecarteFois = 3) }

        val ordre = ARevoir.aRevoir(elements, suivis, aujourdhui).map { it.element.id.value }

        assertEquals(listOf("e-2", "e-3", "e-1"), ordre)
    }

    @Test
    fun `sans suivi, rien ne remonte`() {
        assertTrue(ARevoir.aRevoir(listOf(element("e-1")), emptyList(), aujourdhui).isEmpty())
    }
}
