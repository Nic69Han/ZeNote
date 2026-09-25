package app.zenote.core

import app.zenote.core.api.MaintenantJson
import app.zenote.core.api.PropositionJson
import app.zenote.core.api.Regles
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Change `agenda-local`, tâche 1.2 — Maintenant selon le temps que l'agenda laisse.
 *
 * Spec `agenda` — « Classement selon le temps avant la prochaine réunion » et
 * « Charge de la journée ». Tout passe par l'entrée publique, comme la surface.
 */
class AgendaMaintenantTest {

    private val json = Json { ignoreUnknownKeys = true }

    private val texte = "Envoyer le devis. Relire la note. Préparer le budget. Trier les mails."

    /** Quatre tâches acceptées, du plus lourd au plus léger pour qu'aucune n'en cache une autre. */
    private val elements: String = listOf(
        tache("courte", "Envoyer le devis", "FORT", ""","duree":"COURTE","dureeConfiance":0.9"""),
        tache("moyenne", "Relire la note", "FORT", ""","duree":"MOYENNE","dureeConfiance":0.9"""),
        tache("longue", "Préparer le budget", "FORT", ""","duree":"LONGUE","dureeConfiance":0.9"""),
        tache("inconnue", "Trier les mails", "MOYEN", ""),
    ).joinToString(",", "[", "]")

    private fun tache(id: String, extrait: String, poids: String, extra: String): String {
        val debut = texte.indexOf(extrait)
        return """{"id":"$id","captureId":"c-1","type":"TACHE","texte":"$extrait",""" +
            """"debutCar":$debut,"finCar":${debut + extrait.length},""" +
            """"poids":"$poids","poidsConfiance":0.9,"poidsIndice":"indice","verdict":"ACCEPTE"$extra}"""
    }

    private fun evenement(id: String, titre: String, debut: String, fin: String, extra: String = ""): String =
        """{"id":"$id","titre":"$titre","debut":"2026-09-21T$debut","fin":"2026-09-21T$fin"$extra}"""

    private fun maintenant(heure: String, vararg evenements: String): MaintenantJson = json.decodeFromString(
        MaintenantJson.serializer(),
        Regles.maintenantAvecContexte(
            elements,
            """{"maintenant":"2026-09-21T$heure","evenements":${evenements.joinToString(",", "[", "]")}}""",
        ),
    )

    private fun ids(m: MaintenantJson) = m.propositions.map { it.elementId }.toSet()

    private val pointEquipe = evenement("r-1", "Point équipe", "11:00", "11:30")

    @Test
    fun `scénario « Créneau court » — à sept minutes, seul le court et sûr est proposé`() {
        val m = maintenant("10:53", pointEquipe)

        assertEquals(setOf("courte"), ids(m))
        assertEquals(3, m.ecartes)
        assertEquals(7, m.minutesAvantReunion)
        assertTrue(m.raison.contains("7 minutes avant « Point équipe »"), m.raison)
        assertTrue(m.creneauProtegeSuspendu)
    }

    @Test
    fun `une durée inconnue n'est admise qu'à partir de trente minutes, et ce qui dépasse reste écarté`() {
        val a25 = maintenant("10:35", pointEquipe)
        assertEquals(setOf("courte", "moyenne"), ids(a25))

        val a40 = maintenant("10:20", pointEquipe)
        assertEquals(setOf("courte", "moyenne", "inconnue"), ids(a40))
        assertFalse("longue" in ids(a40))
    }

    @Test
    fun `scénario « Rien qui tienne » — zéro proposition, mais des écartés, et la raison dite`() {
        val m = maintenant("10:59", pointEquipe)

        // Une minute : même le court ne tient pas.
        assertTrue(m.propositions.isEmpty())
        assertEquals(4, m.ecartes)
        assertTrue(m.raison.contains("1 minute avant « Point équipe »"), m.raison)
    }

    @Test
    fun `scénario « Temps retrouvé » — la réunion passée, tout revient`() {
        val m = maintenant("12:00", pointEquipe)

        assertEquals(3, m.propositions.size)
        assertEquals(0, m.ecartes)
        assertEquals("", m.raison)
        assertFalse(m.creneauProtegeSuspendu)
    }

    @Test
    fun `scénario « Journée dense » — au sortir de trois heures de réunions, le court d'abord`() {
        val sequence = arrayOf(
            evenement("s-1", "Comité", "09:00", "10:30"),
            // Dix minutes d'écart : la séquence continue.
            evenement("s-2", "Revue projet", "10:40", "11:30"),
            evenement("s-3", "Client", "11:30", "12:10"),
        )

        val justeApres = maintenant("12:20", *sequence)
        assertEquals(setOf("courte"), ids(justeApres))
        assertTrue(justeApres.raison.contains("3 h 10 de réunions enchaînées"), justeApres.raison)

        // Les éléments exigeants sont replacés plus tard, pas perdus.
        val plusTard = maintenant("13:00", *sequence)
        assertEquals(3, plusTard.propositions.size)
        assertEquals("", plusTard.raison)
    }

    @Test
    fun `deux réunions séparées d'un vrai trou ne font pas une séquence`() {
        val m = maintenant(
            "12:20",
            evenement("a", "Comité", "08:00", "10:00"),
            evenement("b", "Client", "10:30", "12:10"),
        )
        assertEquals("", m.raison)
    }

    @Test
    fun `un événement « toute la journée » ne raccourcit aucun créneau`() {
        val conge = """{"id":"j","titre":"Salon","debut":"2026-09-21T00:00","fin":"2026-09-22T00:00","journeeEntiere":true}"""
        val m = maintenant("10:53", conge)
        assertEquals(3, m.propositions.size)
        assertEquals(null, m.minutesAvantReunion)
    }

    @Test
    fun `sans agenda, exactement les propositions de maintenant`() {
        val m = maintenant("10:53")
        val avant = json.decodeFromString(
            ListSerializer(PropositionJson.serializer()),
            Regles.maintenant(elements, "2026-09-21"),
        )
        assertEquals(avant, m.propositions)
        assertEquals("", m.raison)
    }

    @Test
    fun `un événement mal formé est ignoré plutôt que de faire tomber l'écran`() {
        val casse = evenement("x", "À l'envers", "11:00", "10:00")
        assertEquals(3, maintenant("10:53", casse).propositions.size)
    }
}
