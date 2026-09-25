package app.zenote.core

import app.zenote.core.api.RappelsDuMomentJson
import app.zenote.core.api.Regles
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Change `agenda-local`, tâche 1.4 — les rappels avec l'agenda.
 *
 * Spec `agenda` — « Report à la fin de la réunion » ; la fin d'une réunion devient un
 * point de rupture, et rien de non critique n'est livré pendant.
 */
class RappelsAgendaTest {

    private val json = Json { ignoreUnknownKeys = true }

    private fun element(id: String, texte: String, declencheur: String) = """
        {"id":"$id","captureId":"c-1","type":"TACHE","texte":"$texte",
         "debutCar":0,"finCar":${texte.length},
         "planDeclencheur":"$declencheur","planAction":"$texte",
         "verdict":"ACCEPTE","corrigeParHumain":false}
    """.trimIndent()

    private val elements = "[${element("sophie", "Rendre le livre à Sophie", "quand je vois Sophie")}]"
    private val suivis = """[{"elementId":"sophie","planPoseLe":"2026-09-21T08:00","foisIgnore":0}]"""

    /** Un comité de 10 h à 11 h, et un déjeuner avec Sophie qui commence pendant. */
    private val agenda = """[
        {"id":"comite","titre":"Comité","debut":"2026-09-21T10:00","fin":"2026-09-21T11:00"},
        {"id":"dej","titre":"Déjeuner avec Sophie","debut":"2026-09-21T10:35","fin":"2026-09-21T10:50"}
    ]"""

    private fun rappels(heure: String, evenements: String = agenda): RappelsDuMomentJson =
        json.decodeFromString(
            RappelsDuMomentJson.serializer(),
            Regles.rappels(elements, "2026-09-21T$heure", suivis, evenements),
        )

    @Test
    fun `avant le signal, rien`() {
        val r = rappels("09:30")
        assertTrue(r.rappels.isEmpty())
        assertEquals("", r.titre)
    }

    @Test
    fun `scénario « Report à la fin de la réunion » — retenu pendant, livré à la fin, en retard`() {
        val pendant = rappels("10:40")
        assertTrue(pendant.rappels.isEmpty(), "rien de non critique pendant une réunion")
        assertEquals("Comité", pendant.reunionEnCours)
        assertEquals(1, pendant.retenus)

        val aLaFin = rappels("11:05")
        assertEquals(listOf("sophie"), aLaFin.rappels.map { it.elementId })
        assertEquals("FIN_DE_REUNION", aLaFin.point)
        assertTrue(aLaFin.rappels.single().enRetard, "le signal est passé pendant la réunion")
        assertEquals("", aLaFin.rappels.single().substitution)
    }

    @Test
    fun `juste avant la réunion où l'on voit Sophie, le rappel arrive sans retard`() {
        // Le déjeuner seul, sans le comité autour.
        val seul = """[{"id":"dej","titre":"Déjeuner avec Sophie","debut":"2026-09-21T12:00","fin":"2026-09-21T13:00"}]"""
        val r = rappels("11:56", seul)
        assertEquals(listOf("sophie"), r.rappels.map { it.elementId })
        assertEquals("REPRISE_APPAREIL", r.point)
        assertTrue(!r.rappels.single().enRetard)
    }

    @Test
    fun `sans agenda, la sortie est celle d'avant`() {
        val sans = Regles.rappels(elements, "2026-09-21T10:40", suivis)
        assertEquals(sans, Regles.rappels(elements, "2026-09-21T10:40", suivis, "[]"))
        val r = json.decodeFromString(RappelsDuMomentJson.serializer(), sans)
        assertEquals("REPRISE_APPAREIL", r.point)
        assertTrue(r.rappels.single().substitution.contains("aucun agenda"))
    }
}
