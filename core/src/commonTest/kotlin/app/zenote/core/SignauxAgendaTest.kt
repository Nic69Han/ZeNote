package app.zenote.core

import app.zenote.core.rappels.Echeance
import app.zenote.core.rappels.Echeancier
import app.zenote.core.rappels.EvenementConnu
import app.zenote.core.rappels.SignauxAgenda
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Change `agenda-local`, tâche 1.3 — les signaux d'un plan reconnus dans l'agenda.
 *
 * Spec `agenda` — « Déclencheurs reconnus dans l'agenda ».
 */
class SignauxAgendaTest {

    /** Lundi 21 septembre 2026, 9 h 30 : le moment où les plans sont posés. */
    private val poseLe = LocalDateTime(2026, 9, 21, 9, 30)

    private fun a(jour: Int, heure: Int, minute: Int = 0) = LocalDateTime(2026, 9, jour, heure, minute)

    private fun evenement(
        id: String,
        titre: String,
        debut: LocalDateTime,
        minutes: Int = 30,
        participants: List<String> = emptyList(),
    ) = EvenementConnu(
        id = id,
        titre = titre,
        debut = debut.toInstant(TimeZone.UTC),
        fin = debut.toInstant(TimeZone.UTC).plus(kotlin.time.Duration.parse("${minutes}m")),
        participants = participants,
    )

    private val agenda = listOf(
        // Avant la pose du plan : ne compte pas.
        evenement("passe", "Point Marc", a(21, 8), participants = listOf("Marc Dupont")),
        evenement("comite", "Comité budget", a(22, 10), participants = listOf("Marc Dupont", "claire.martin@exemple.fr")),
        evenement("point-lundi-1", "Point équipe", a(28, 9)),
        evenement("point-mardi", "Point équipe", a(22, 14)),
        evenement("dej", "Déjeuner avec Sophie", a(23, 12)),
    )

    @Test
    fun `scénario « Rappel lié à une personne » — juste avant la réunion où elle participe`() {
        val echeance = Echeancier.quand("quand je vois Marc", poseLe, agenda)

        // Cinq minutes avant le comité de mardi, pas le point de ce matin, déjà passé.
        assertEquals(Echeance.Observable(a(22, 9, 55), enRetardApres = a(22, 10)), echeance)
        assertFalse(Echeancier.estArrive(echeance, a(22, 9, 54)))
        assertTrue(Echeancier.estArrive(echeance, a(22, 9, 55)))
    }

    @Test
    fun `une personne se reconnaît aussi à son adresse, ou au titre qui la nomme`() {
        assertEquals(
            Echeance.Observable(a(22, 9, 55), enRetardApres = a(22, 10)),
            Echeancier.quand("quand je vois Claire Martin", poseLe, agenda),
        )
        assertEquals(
            Echeance.Observable(a(23, 11, 55), enRetardApres = a(23, 12)),
            Echeancier.quand("quand je vois Sophie", poseLe, agenda),
        )
    }

    @Test
    fun `scénario « Rappel lié à un événement récurrent » — la prochaine occurrence, jour compris`() {
        // « du lundi » se lit sur la date : le point du mardi ne compte pas.
        assertEquals(
            Echeance.Observable(a(28, 8, 55), enRetardApres = a(28, 9)),
            Echeancier.quand("avant le point du lundi", poseLe, agenda),
        )
        // Sans jour, la première occurrence venue.
        assertEquals(
            Echeance.Observable(a(22, 13, 55), enRetardApres = a(22, 14)),
            Echeancier.quand("au prochain point d’équipe", poseLe, agenda),
        )
    }

    @Test
    fun `scénario « Personne absente de l'agenda » — ramené à la reprise, en disant pourquoi`() {
        val echeance = Echeancier.quand("quand je vois Karim", poseLe, agenda)

        assertTrue(echeance is Echeance.Substituee)
        assertEquals(
            "Aucun événement de l'agenda ne concerne Karim : ramené à la reprise de l'appareil.",
            (echeance as Echeance.Substituee).explication,
        )
        assertTrue(Echeancier.estArrive(echeance, poseLe))
    }

    @Test
    fun `un prénom que portent deux personnes de l'agenda n'accroche rien, et le nom complet si`() {
        val deuxMarc = agenda + evenement("autre", "Revue", a(22, 8), participants = listOf("Marc Leroy"))

        val prenom = Echeancier.quand("quand je vois Marc", poseLe, deuxMarc)
        assertTrue(prenom is Echeance.Substituee)
        assertTrue((prenom as Echeance.Substituee).explication.contains("Marc Dupont, Marc Leroy"), prenom.explication)

        assertEquals(
            Echeance.Observable(a(22, 7, 55), enRetardApres = a(22, 8)),
            Echeancier.quand("quand je vois Marc Leroy", poseLe, deuxMarc),
        )
    }

    @Test
    fun `un moment libre n'est pas un événement, et l'absence d'agenda ne change rien`() {
        val libre = Echeancier.quand("au prochain créneau libre", poseLe, agenda)
        assertEquals(Echeance.Substituee(SignauxAgenda.SIGNAL_HORS_AGENDA), libre)

        // Sans agenda : exactement la substitution d'avant.
        assertEquals(
            Echeance.Substituee(Echeancier.SIGNAL_NON_OBSERVABLE),
            Echeancier.quand("quand je vois Marc", poseLe),
        )
        // Les signaux déjà observables le restent, agenda ou pas.
        assertEquals(Echeancier.quand("ce soir", poseLe), Echeancier.quand("ce soir", poseLe, agenda))
    }

    @Test
    fun `un événement sans correspondance est dit par son nom`() {
        val echeance = Echeancier.quand("avant le comité de direction", poseLe, agenda)
        assertEquals(
            Echeance.Substituee(
                "Aucun événement « comité de direction » dans l'agenda connu : ramené à la reprise de l'appareil.",
            ),
            echeance,
        )
    }
}
