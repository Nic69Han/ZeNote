package app.zenote.core

import app.zenote.core.api.RappelsDuMomentJson
import app.zenote.core.api.Regles
import app.zenote.core.rappels.Echeance
import app.zenote.core.rappels.Echeancier
import app.zenote.core.rappels.EvenementConnu
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Change `rappels-recurrents` — spec `rappels`, « Rappel lié à un événement récurrent » :
 * présenté avant **chaque** occurrence tant qu'il n'est pas clos.
 */
class RappelsRecurrentsTest {

    private val poseLe = LocalDateTime(2026, 9, 21, 9, 30)

    private fun a(mois: Int, jour: Int, heure: Int, minute: Int = 0) = LocalDateTime(2026, mois, jour, heure, minute)

    private fun point(mois: Int, jour: Int) = EvenementConnu(
        id = "point-$mois-$jour",
        titre = "Point équipe",
        debut = a(mois, jour, 9).toInstant(TimeZone.UTC),
        fin = a(mois, jour, 9, 30).toInstant(TimeZone.UTC),
        recurrent = true,
    )

    /** Trois lundis : 28 septembre, 5 et 12 octobre. */
    private val agenda = listOf(point(9, 28), point(10, 5), point(10, 12))

    @Test
    fun `« avant le point du lundi » revient à chaque occurrence, et attend entre deux`() {
        val echeance = Echeancier.quand("avant le point du lundi", poseLe, agenda)
        assertTrue(echeance is Echeance.Recurrente)
        assertEquals(3, echeance.fenetres.size)

        assertFalse(Echeancier.estArrive(echeance, a(9, 28, 8, 54)))
        assertTrue(Echeancier.estArrive(echeance, a(9, 28, 8, 55)))
        assertTrue(Echeancier.estArrive(echeance, a(9, 28, 9, 59)), "à la sortie de la réunion, encore dû")
        assertFalse(Echeancier.estArrive(echeance, a(9, 28, 10, 0)))
        assertFalse(Echeancier.estArrive(echeance, a(10, 2, 12, 0)), "entre deux occurrences, rien")
        assertTrue(Echeancier.estArrive(echeance, a(10, 5, 8, 56)))
        assertTrue(Echeancier.estArrive(echeance, a(10, 12, 8, 57)))
    }

    @Test
    fun `« au prochain point » ne vise qu'une fois, récurrent ou non`() {
        assertEquals(
            Echeance.Observable(a(9, 28, 8, 55), enRetardApres = a(9, 28, 9)),
            Echeancier.quand("au prochain point d’équipe", poseLe, agenda),
        )
    }

    private val json = Json { ignoreUnknownKeys = true }

    private val elements = """[{"id":"prep","captureId":"c-1","type":"TACHE","texte":"Préparer les chiffres",
        "debutCar":0,"finCar":21,"planDeclencheur":"avant le point du lundi","planAction":"Préparer les chiffres",
        "verdict":"ACCEPTE","corrigeParHumain":false}]"""
    private val suivis = """[{"elementId":"prep","planPoseLe":"2026-09-21T09:30","foisIgnore":0}]"""
    private val evenements = """[
        {"id":"p1","titre":"Point équipe","debut":"2026-09-28T09:00","fin":"2026-09-28T09:30","recurrent":true},
        {"id":"p2","titre":"Point équipe","debut":"2026-10-05T09:00","fin":"2026-10-05T09:30","recurrent":true}
    ]"""

    private fun rappels(instant: String): RappelsDuMomentJson =
        json.decodeFromString(RappelsDuMomentJson.serializer(), Regles.rappels(elements, instant, suivis, evenements))

    @Test
    fun `scénario « Rappel lié à un événement récurrent » — chaque lundi, et pas entre deux`() {
        assertEquals(listOf("prep"), rappels("2026-09-28T08:56").rappels.map { it.elementId })
        assertFalse(rappels("2026-09-28T08:56").rappels.single().enRetard)
        // Pendant le point, retenu ; à sa sortie, livré en retard.
        assertTrue(rappels("2026-09-28T09:10").rappels.isEmpty())
        val sortie = rappels("2026-09-28T09:35")
        assertEquals("FIN_DE_REUNION", sortie.point)
        assertTrue(sortie.rappels.single().enRetard)
        // Le mercredi, rien : l'occurrence est passée, la suivante n'est pas venue.
        assertTrue(rappels("2026-09-30T12:00").rappels.isEmpty())
        // Le lundi suivant, de nouveau.
        assertEquals(listOf("prep"), rappels("2026-10-05T08:58").rappels.map { it.elementId })
    }
}
