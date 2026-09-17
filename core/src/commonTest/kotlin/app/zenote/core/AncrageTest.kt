package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.Deduit
import app.zenote.core.model.ElementDerive
import app.zenote.core.model.Passage
import app.zenote.core.model.Poids
import app.zenote.core.model.TypeElement
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * L'ancrage obligatoire dans le passage source.
 *
 * L'extraction par modèle hallucine ; c'est le rattachement à l'énoncé d'origine qui
 * rend la sortie utilisable. Un élément que rien ne rattache à la source est écarté
 * avant d'atteindre l'écran, pas signalé après coup.
 */
class AncrageTest {

    @Test
    fun `un élément citant un passage absent du texte est refusé`() {
        val capture = captureVoiture()
        val inventé = ElementDerive(
            captureId = capture.id,
            type = TypeElement.TACHE,
            texte = "Réserver la salle",
            // Passage qui déborde largement du texte brut.
            passage = Passage(debutCar = 5_000, finCar = 5_020),
        )

        val erreur = assertFailsWith<IllegalArgumentException> { analyseDe(capture, inventé) }
        assertTrue(erreur.message!!.contains("passage absent"))
    }

    @Test
    fun `un élément rattaché à une autre capture est refusé`() {
        val capture = captureVoiture(id = "c-001")
        val venuDAilleurs = tacheBudget(captureId = "c-999")

        assertFailsWith<IllegalArgumentException> { analyseDe(capture, venuDAilleurs) }
    }

    @Test
    fun `le passage d'un élément se relit dans le texte source`() {
        val capture = captureVoiture()
        val tache = tacheBudget()

        assertEquals(
            "je vois avec Marc pour le budget avant vendredi",
            tache.passage.extraitDe(capture),
        )
    }

    @Test
    fun `deux éléments identiques dans une même analyse sont refusés`() {
        val capture = captureVoiture()

        assertFailsWith<IllegalArgumentException> {
            analyseDe(capture, tacheBudget(), tacheBudget())
        }
    }

    @Test
    fun `un passage vide est impossible à construire`() {
        assertFailsWith<IllegalArgumentException> { Passage(debutCar = 10, finCar = 10) }
        assertFailsWith<IllegalArgumentException> { Passage(debutCar = 10, finCar = 3) }
    }

    @Test
    fun `une déduction sous le seuil marque l'élément à confirmer`() {
        val incertain = ElementDerive(
            captureId = CaptureId("c-001"),
            type = TypeElement.TACHE,
            texte = "Voir le budget avec Marc",
            passage = passage("je vois avec Marc pour le budget avant vendredi"),
            poids = Deduit(Poids.FORT, confiance = 0.40, indice = "formulation ambiguë"),
        )
        assertTrue(incertain.aConfirmer)

        val sûr = tacheBudget()
        assertFalse(sûr.aConfirmer)
    }

    @Test
    fun `une déduction sans indice est impossible à construire`() {
        assertFailsWith<IllegalArgumentException> {
            Deduit(Poids.FORT, confiance = 0.9, indice = "  ")
        }
    }
}
