package app.zenote.core

import app.zenote.core.api.MomentReunionJson
import app.zenote.core.api.MomentsJson
import app.zenote.core.api.Regles
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Change `agenda-local`, tâche 1.5 — les moments de réunion.
 *
 * Spec `agenda` — « Moments de réunion » : briefing et dépose avant, reprise et
 * vidage après, reportés si l'on enchaîne.
 */
class MomentsReunionTest {

    private val json = Json { ignoreUnknownKeys = true }

    private val captures = """[{"id":"c-1","texte":"J'ai promis à Marc le planning.","creeLe":"2026-09-18T08:00:00Z"}]"""
    private val elements = """[{"id":"e-1","captureId":"c-1","type":"ENGAGEMENT","texte":"Envoyer le planning à Marc",
        "debutCar":0,"finCar":31,"interlocuteur":"Marc","verdict":"ACCEPTE"}]"""

    private fun reunion(id: String, titre: String, debut: String, fin: String, participants: String = "[]") =
        """{"id":"$id","titre":"$titre","debut":"2026-09-21T$debut","fin":"2026-09-21T$fin","participants":$participants}"""

    private val comite = reunion("comite", "Comité", "10:00", "10:30", """["Marc Dupont"]""")
    private val inconnus = reunion("autre", "Point fournisseur", "10:00", "10:30", """["Paul Lemaire"]""")

    private fun moments(
        heure: String,
        vararg evenements: String,
        rattaches: String = "[]",
    ): List<MomentReunionJson> = json.decodeFromString(
        MomentsJson.serializer(),
        Regles.momentsDeReunion(
            evenements.joinToString(",", "[", "]"),
            "2026-09-21T$heure",
            captures,
            elements,
            rattaches,
        ),
    ).moments

    @Test
    fun `scénario « Briefing avant réunion » — l'ouvert avec les participants, renvoyant à sa capture`() {
        val m = moments("09:52", comite).single()

        assertEquals("AVANT", m.type)
        assertEquals(8, m.minutes)
        assertEquals(listOf("e-1"), m.briefing!!.ouverts.map { it.elementId })
        assertEquals("c-1", m.briefing!!.ouverts.single().captureId)
        assertFalse(m.proposerDepose, "à huit minutes, pas encore de dépose")
    }

    @Test
    fun `scénario « Aucun élément à rappeler » — pas de briefing, et rien à afficher avant deux minutes`() {
        assertTrue(moments("09:52", inconnus).isEmpty())
    }

    @Test
    fun `scénario « Dépose proposée » — à deux minutes, une dépose, même sans briefing`() {
        val m = moments("09:58", inconnus).single()
        assertEquals("AVANT", m.type)
        assertTrue(m.proposerDepose)
        assertNull(m.briefing)

        // Déjà faite : on ne la redemande pas.
        val deposee = """[{"captureId":"c-9","evenementId":"autre","depose":true,"texte":"Je reprends le devis","creeLe":"2026-09-21T09:58"}]"""
        assertTrue(moments("09:59", inconnus, rattaches = deposee).isEmpty())
    }

    @Test
    fun `scénarios « Reprise après réunion » et « Capture post-réunion contextualisée »`() {
        val deposee = """[{"captureId":"c-9","evenementId":"comite","depose":true,"texte":"Je reprends le devis à la ligne 12","creeLe":"2026-09-21T09:58"}]"""
        val m = moments("10:35", comite, rattaches = deposee).single()

        assertEquals("APRES", m.type)
        assertEquals(5, m.minutes)
        assertEquals("Je reprends le devis à la ligne 12", m.depose!!.texte)
        assertTrue(m.proposerVidage)
        assertEquals("comite", m.evenementId)
        assertEquals(listOf("Marc Dupont"), m.participants)
    }

    @Test
    fun `le vidage fait, il n'est plus proposé, et une heure après le moment passe`() {
        val vidage = """[{"captureId":"c-10","evenementId":"comite","texte":"Marc veut le budget","creeLe":"2026-09-21T10:32"}]"""
        assertFalse(moments("10:40", comite, rattaches = vidage).single().proposerVidage)
        assertTrue(moments("11:31", comite).isEmpty())
    }

    @Test
    fun `scénario « Proposition non intrusive » — on enchaîne, le vidage attend la fin de l'enchaînement`() {
        val client = reunion("client", "Client", "10:32", "11:00")
        val deposee = """[{"captureId":"c-9","evenementId":"comite","depose":true,"texte":"Devis ligne 12","creeLe":"2026-09-21T09:58"}]"""

        val entreDeux = moments("10:31", comite, client, rattaches = deposee)
        assertTrue(entreDeux.none { it.type == "APRES" }, "pas de vidage entre deux réunions enchaînées")

        val aLaFin = moments("11:05", comite, client, rattaches = deposee).single()
        assertEquals("APRES", aLaFin.type)
        assertEquals("client", aLaFin.evenementId)
        assertEquals(listOf("Comité"), aLaFin.precedentes)
        assertEquals("Devis ligne 12", aLaFin.depose!!.texte)
    }

    @Test
    fun `après une réunion et avant la suivante, les deux moments, l'après d'abord`() {
        val suivante = reunion("suivante", "Revue", "10:45", "11:15", """["Marc Dupont"]""")
        val m = moments("10:40", comite, suivante)
        assertEquals(listOf("APRES", "AVANT"), m.map { it.type })
    }

    @Test
    fun `sans agenda, aucun moment`() {
        assertTrue(moments("10:35").isEmpty())
    }
}
