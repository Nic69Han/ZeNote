package app.zenote.core

import app.zenote.core.api.Regles
import app.zenote.core.rappels.Echeance
import app.zenote.core.rappels.Echeancier
import kotlinx.datetime.LocalDateTime
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Quand un plan revient, et ce qu'on en dit.
 *
 * Deux choses se vérifient ici. La première : « ce soir » désigne le soir du jour où
 * on l'a dit, et non celui où on relit — sans quoi un plan posé lundi reviendrait
 * chaque soir de la semaine. La seconde : un signal que ZeNote ne sait pas observer
 * n'est pas deviné, il est ramené à la reprise de l'appareil **en le disant**.
 */
class EcheancierTest {

    private val lundiMatin = LocalDateTime(2026, 9, 21, 9, 30)

    @Test
    fun `ce soir désigne le soir du jour où le plan a été posé`() {
        val echeance = Echeancier.quand("ce soir", lundiMatin)
        assertEquals(Echeance.Observable(LocalDateTime(2026, 9, 21, 18, 0)), echeance)

        assertFalse(Echeancier.estArrive(echeance, LocalDateTime(2026, 9, 21, 17, 59)))
        assertTrue(Echeancier.estArrive(echeance, LocalDateTime(2026, 9, 21, 18, 0)))
    }

    @Test
    fun `demain matin désigne le lendemain, pas le surlendemain`() {
        val echeance = Echeancier.quand("demain matin, au premier créneau", lundiMatin)
        assertEquals(Echeance.Observable(LocalDateTime(2026, 9, 22, 7, 0)), echeance)
    }

    @Test
    fun `une date se lit telle quelle`() {
        val echeance = Echeancier.quand("on est le 2026-10-03", lundiMatin)
        assertEquals(Echeance.Observable(LocalDateTime(2026, 10, 3, 0, 0)), echeance)
        assertFalse(Echeancier.estArrive(echeance, LocalDateTime(2026, 10, 2, 23, 0)))
    }

    @Test
    fun `un signal qu'on ne sait pas observer est ramené, et la raison est dite`() {
        for (declencheur in listOf(
            "quand je vois Karim",
            "au prochain créneau libre",
            "au prochain point d'équipe",
        )) {
            val echeance = Echeancier.quand(declencheur, lundiMatin)
            assertTrue(echeance is Echeance.Substituee, declencheur)
            assertTrue(
                (echeance as Echeance.Substituee).explication.contains("agenda"),
                "la raison doit nommer ce qui manque : $declencheur",
            )
            // Substitué veut dire : à la prochaine reprise, donc maintenant.
            assertTrue(Echeancier.estArrive(echeance, lundiMatin))
        }
    }

    // ------------------------------------------------ le pont, de bout en bout

    private fun element(
        id: String,
        texte: String,
        declencheur: String,
        verdict: String = "ACCEPTE",
    ) = """
        {"id":"$id","captureId":"c-1","type":"TACHE","texte":"$texte",
         "debutCar":0,"finCar":${texte.length},
         "planDeclencheur":"$declencheur","planAction":"$texte",
         "verdict":"$verdict","corrigeParHumain":false}
    """.trimIndent()

    private fun suivi(id: String, poseLe: String, foisIgnore: Int = 0) =
        """{"elementId":"$id","planPoseLe":"$poseLe","foisIgnore":$foisIgnore}"""

    @Test
    fun `plusieurs rappels d'un même point de rupture tiennent en une notification`() {
        val rendu = Regles.rappels(
            elementsJson = "[" + listOf(
                element("e-1", "rappeler le couvreur", "quand je vois Karim"),
                element("e-2", "relire le budget", "au prochain créneau libre"),
                element("e-3", "envoyer le devis", "ce soir"),
            ).joinToString(",") + "]",
            maintenant = "2026-09-21T19:00",
            suivisJson = "[" + listOf(
                suivi("e-1", "2026-09-21T09:00"),
                suivi("e-2", "2026-09-21T09:00"),
                suivi("e-3", "2026-09-21T09:00"),
            ).joinToString(",") + "]",
        )

        assertTrue(rendu.contains("\"titre\":\"3 choses à voir maintenant\""), rendu)
        assertEquals(3, Regex("\"elementId\"").findAll(rendu).count())
    }

    @Test
    fun `un seul rappel porte son propre texte pour titre`() {
        val rendu = Regles.rappels(
            elementsJson = "[" + element("e-1", "rappeler le couvreur", "ce soir") + "]",
            maintenant = "2026-09-21T19:00",
            suivisJson = "[" + suivi("e-1", "2026-09-21T09:00") + "]",
        )
        assertTrue(rendu.contains("\"titre\":\"rappeler le couvreur\""), rendu)
    }

    @Test
    fun `un signal qui n'est pas arrivé ne présente rien`() {
        val rendu = Regles.rappels(
            elementsJson = "[" + element("e-1", "envoyer le devis", "ce soir") + "]",
            // Le plan a été posé ce matin ; il est midi. Le soir n'est pas venu.
            maintenant = "2026-09-21T12:00",
            suivisJson = "[" + suivi("e-1", "2026-09-21T09:00") + "]",
        )
        assertTrue(rendu.contains("\"titre\":\"\""), rendu)
        assertTrue(rendu.contains("\"rappels\":[]"), rendu)
    }

    @Test
    fun `un élément sans plan, ou pas accepté, n'est pas un rappel`() {
        val sansPlan = """
            {"id":"e-1","captureId":"c-1","type":"TACHE","texte":"une note",
             "debutCar":0,"finCar":8,"verdict":"ACCEPTE","corrigeParHumain":false}
        """.trimIndent()
        val rendu = Regles.rappels(
            elementsJson = "[" + sansPlan + "," +
                element("e-2", "en attente", "ce soir", verdict = "EN_ATTENTE") + "]",
            maintenant = "2026-09-21T19:00",
            suivisJson = "[" + suivi("e-1", "2026-09-21T09:00") + "," +
                suivi("e-2", "2026-09-21T09:00") + "]",
        )
        assertTrue(rendu.contains("\"rappels\":[]"), rendu)
    }

    @Test
    fun `ignoré trois fois, le rappel cesse de revenir et passe en Revue`() {
        fun rendu(fois: Int) = Regles.rappels(
            elementsJson = "[" + element("e-1", "rappeler le couvreur", "ce soir") + "]",
            maintenant = "2026-09-21T19:00",
            suivisJson = "[" + suivi("e-1", "2026-09-21T09:00", foisIgnore = fois) + "]",
        )

        // Deux fois ignoré : il se représente encore, et rien n'a été escaladé.
        assertTrue(rendu(2).contains("\"titre\":\"rappeler le couvreur\""), rendu(2))
        assertTrue(rendu(2).contains("\"escalades\":[]"), rendu(2))

        // La troisième fois, il quitte la file et remonte avec ses trois options.
        val apres = rendu(3)
        assertTrue(apres.contains("\"rappels\":[]"), apres)
        assertTrue(apres.contains("REPLANIFIER"), apres)
        assertTrue(apres.contains("DELEGUER"), apres)
        assertTrue(apres.contains("ABANDONNER"), apres)
    }

    @Test
    fun `un rappel substitué le déclare, au lieu d'arriver sans prévenir`() {
        val rendu = Regles.rappels(
            elementsJson = "[" + element("e-1", "rappeler le couvreur", "quand je vois Karim") + "]",
            maintenant = "2026-09-21T19:00",
            suivisJson = "[" + suivi("e-1", "2026-09-21T09:00") + "]",
        )
        assertTrue(rendu.contains("agenda"), rendu)
        assertTrue(rendu.contains("quand je vois Karim"), rendu)
    }

    @Test
    fun `un retard est constaté, jamais reproché`() {
        val rendu = Regles.rappels(
            elementsJson = "[" + element("e-1", "envoyer le devis", "ce soir") + "]",
            // Trois jours après le soir prévu.
            maintenant = "2026-09-24T10:00",
            suivisJson = "[" + suivi("e-1", "2026-09-21T09:00") + "]",
        )
        assertTrue(rendu.contains("\"enRetard\":true"), rendu)
        for (reproche in listOf("retard de", "vous auriez", "oublié", "aurait dû")) {
            assertFalse(rendu.contains(reproche), "reproche trouvé : $reproche")
        }
    }
}
