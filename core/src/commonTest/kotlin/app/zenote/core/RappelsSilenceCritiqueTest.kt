package app.zenote.core

import app.zenote.core.api.RappelsDuMomentJson
import app.zenote.core.api.Regles
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Change `rappels-silence-critique`, tâches 1.1 et 1.2.
 *
 * Spec `rappels` — « Plage de silence respectée », « Rappel critique immédiat », et
 * les exigences ajoutées par la change : plage déclarée, rappel critique.
 */
class RappelsSilenceCritiqueTest {

    private val json = Json { ignoreUnknownKeys = true }

    private fun element(
        id: String,
        texte: String,
        critique: Boolean = false,
        poids: String? = null,
        echeance: String? = null,
    ) = """
        {"id":"$id","captureId":"c-1","type":"TACHE","texte":"$texte",
         "debutCar":0,"finCar":${texte.length},
         "planDeclencheur":"quand je reprends","planAction":"$texte",
         ${poids?.let { "\"poids\":\"$it\"," } ?: ""}
         ${echeance?.let { "\"echeance\":\"$it\"," } ?: ""}
         "verdict":"ACCEPTE","corrigeParHumain":false${if (critique) ",\"critique\":true" else ""}}
    """.trimIndent()

    private fun suivis(vararg ids: String) =
        ids.joinToString(",", "[", "]") { """{"elementId":"$it","planPoseLe":"2026-09-21T08:00","foisIgnore":0}""" }

    /** La plage de 22:00 à 07:00, vue depuis la nuit du 21 au 22. */
    private val nuit = """[{"debut":"2026-09-21T22:00","fin":"2026-09-22T07:00"}]"""

    private fun rappels(
        elements: String,
        suivis: String,
        instant: String,
        silences: String = "[]",
        evenements: String = "[]",
    ): RappelsDuMomentJson = json.decodeFromString(
        RappelsDuMomentJson.serializer(),
        Regles.rappels(elements, instant, suivis, evenements, silences),
    )

    @Test
    fun `scénario « Rappel retenu pendant la nuit » — rien n'est présenté, et l'on sait jusqu'à quand`() {
        val r = rappels("[${element("livre", "Rendre le livre")}]", suivis("livre"), "2026-09-21T23:30", nuit)
        assertTrue(r.rappels.isEmpty())
        assertEquals("", r.titre)
        assertEquals(1, r.retenus)
        assertEquals("2026-09-22T07:00", r.silenceJusqua)
    }

    @Test
    fun `scénario « Rappel présenté à la fin de la plage » — livré à 07 h`() {
        val r = rappels("[${element("livre", "Rendre le livre")}]", suivis("livre"), "2026-09-22T07:00", nuit)
        assertEquals(listOf("livre"), r.rappels.map { it.elementId })
        assertNull(r.silenceJusqua)
    }

    @Test
    fun `scénario « Critique pendant la plage de silence » — le critique passe, le reste attend`() {
        val elements = "[${element("livre", "Rendre le livre")},${element("four", "Couper le four", critique = true)}]"
        val r = rappels(elements, suivis("livre", "four"), "2026-09-21T23:30", nuit)
        assertEquals(listOf("four"), r.rappels.map { it.elementId })
        assertTrue(r.rappels.single().critique)
        assertEquals("Couper le four", r.titre)
        assertEquals(1, r.retenus)
        assertEquals("2026-09-22T07:00", r.silenceJusqua)
    }

    @Test
    fun `scénario « Critique marqué par l'utilisateur » — présenté pendant une réunion`() {
        val comite = """[{"id":"comite","titre":"Comité","debut":"2026-09-21T10:00","fin":"2026-09-21T11:00"}]"""
        val elements = "[${element("livre", "Rendre le livre")},${element("four", "Couper le four", critique = true)}]"
        val r = rappels(elements, suivis("livre", "four"), "2026-09-21T10:30", evenements = comite)
        assertEquals(listOf("four"), r.rappels.map { it.elementId })
        assertEquals("Comité", r.reunionEnCours)
        assertEquals(1, r.retenus, "le non critique attend la fin de la réunion")
    }

    @Test
    fun `scénario « Conséquence immédiate » — poids fort échu aujourd'hui, pas demain`() {
        val elements = "[" +
            element("auj", "Envoyer le contrat", poids = "FORT", echeance = "2026-09-21") + "," +
            element("dem", "Signer l'avenant", poids = "FORT", echeance = "2026-09-22") + "," +
            element("moy", "Ranger le bureau", poids = "MOYEN", echeance = "2026-09-20") +
            "]"
        val r = rappels(elements, suivis("auj", "dem", "moy"), "2026-09-21T23:30", nuit)
        assertEquals(listOf("auj"), r.rappels.map { it.elementId })
        assertTrue(r.rappels.single().critique)
        assertEquals(2, r.retenus)
    }

    @Test
    fun `scénario « Plage éteinte » — sortie identique à l'appel d'avant`() {
        val elements = "[${element("livre", "Rendre le livre")}]"
        val avant = Regles.rappels(elements, "2026-09-21T23:30", suivis("livre"))
        assertEquals(avant, Regles.rappels(elements, "2026-09-21T23:30", suivis("livre"), "[]", "[]"))
        val r = json.decodeFromString(RappelsDuMomentJson.serializer(), avant)
        assertEquals(listOf("livre"), r.rappels.map { it.elementId })
        assertFalse(r.rappels.single().critique)
        assertNull(r.silenceJusqua)
    }

    @Test
    fun `un élément ancien sans le champ critique se décode, non critique`() {
        val ancien = """[{"id":"a","captureId":"c","type":"TACHE","texte":"Appeler","debutCar":0,"finCar":7,
            "planDeclencheur":"quand je reprends","planAction":"Appeler","verdict":"ACCEPTE"}]"""
        val r = rappels(ancien, suivis("a"), "2026-09-21T12:00")
        assertFalse(r.rappels.single().critique)
    }
}
