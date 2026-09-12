package app.zenote.core

import app.zenote.core.model.Decision
import app.zenote.core.model.ElementDerive
import app.zenote.core.model.Verdict
import app.zenote.core.recherche.RechercheLocale
import app.zenote.core.recherche.Reponse
import app.zenote.core.recherche.texteSource
import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * La recherche locale, éprouvée sur les scénarios de la spec `recherche`.
 *
 * L'enjeu de ces tests n'est pas la pertinence du classement — un tri approximatif se
 * corrige. C'est l'affirmation non fondée : une réponse inventée coûte plus cher que
 * dix bonnes réponses, parce qu'elle retire à l'utilisateur la seule raison de faire
 * confiance à l'outil. D'où deux invariants vérifiés partout ici : toute réponse cite
 * ses sources, et l'absence se dit.
 */
class RechercheTest {

    private fun close(derive: ElementDerive, verdict: Verdict) = resolu(
        derive,
        Decision(
            elementId = derive.id,
            verdict = verdict,
            decideA = Instant.parse("2026-09-08T19:00:00Z"),
        ),
    )

    /** Aucune réponse ne doit exister sans ses sources : on le vérifie à chaque fois. */
    private fun toutEstCite(reponse: Reponse) {
        reponse.citations.forEach { citation ->
            assertTrue(citation.extrait.isNotBlank(), "une citation sans extrait ne cite rien")
            assertTrue(citation.pourquoi.isNotBlank(), "une citation doit dire pourquoi elle est là")
            assertTrue(
                citation.captureId.value.isNotBlank(),
                "une citation doit rester rattachable à sa capture source",
            )
        }
    }

    @Test
    fun `scénario « Question sur un engagement » — les engagements envers Karim, ouverts et clos`() {
        val ouvert = close(engagementPlanning(), Verdict.ACCEPTE)
        val clos = close(attenteRetourKarim(), Verdict.UN_JOUR)
        val ailleurs = resolu(tacheBudget())

        val reponse = RechercheLocale.parPersonne("Karim", listOf(ailleurs, clos, ouvert))

        assertTrue(reponse.fondee)
        toutEstCite(reponse)
        assertEquals(
            listOf(ouvert.id, clos.id),
            reponse.citations.map { it.elementId },
            "les éléments ouverts viennent d'abord, les clos suivent sans disparaître",
        )
        assertContains(reponse.citations[0].pourquoi, "ouvert")
        assertContains(reponse.citations[1].pourquoi, "clos")
    }

    @Test
    fun `un élément sans rapport avec la personne n'est jamais rattaché à elle`() {
        val reponse = RechercheLocale.parPersonne("Karim", listOf(resolu(tacheBudget())))

        assertFalse(reponse.fondee)
        assertEquals(RechercheLocale.ABSENCE, reponse.enonce)
    }

    @Test
    fun `le nom d'une personne se retrouve malgré la casse et les accents`() {
        val elements = listOf(close(engagementPlanning(), Verdict.ACCEPTE))

        listOf("karim", "KARIM", " Karim ").forEach { graphie ->
            assertTrue(
                RechercheLocale.parPersonne(graphie, elements).fondee,
                "« $graphie » devrait retrouver Karim",
            )
        }
    }

    @Test
    fun `scénario « Question sur une décision » — la décision et son passage source`() {
        val reponse = RechercheLocale.parMots(
            "prestataire écarté",
            listOf(resolu(decisionPrestataire()), resolu(tacheBudget())),
        )

        assertTrue(reponse.fondee)
        toutEstCite(reponse)
        assertContains(reponse.citations[0].extrait, "Prestataire A écarté")
        assertContains(reponse.citations[0].pourquoi, "décision")
        assertEquals(captureVoiture().id, reponse.citations[0].captureId)
    }

    @Test
    fun `une capture encore non structurée répond quand même`() {
        // Ce qui n'a pas encore été analysé ne doit pas être invisible : sinon la
        // recherche mentirait par omission à l'utilisateur pressé qui vient de dicter.
        val reponse = RechercheLocale.parMots(
            "planning",
            elements = emptyList(),
            captures = listOf(captureVoiture().texteSource()),
        )

        assertTrue(reponse.fondee)
        toutEstCite(reponse)
        assertContains(reponse.citations[0].pourquoi, "capture")
    }

    @Test
    fun `une capture déjà représentée par un de ses éléments n'est pas citée deux fois`() {
        val reponse = RechercheLocale.parMots(
            "planning",
            elements = listOf(resolu(engagementPlanning())),
            captures = listOf(captureVoiture().texteSource()),
        )

        assertEquals(1, reponse.citations.size, "l'élément suffit, la capture ferait doublon")
        assertEquals(engagementPlanning().id, reponse.citations[0].elementId)
    }

    @Test
    fun `scénario « Absence assumée » — rien n'est inventé quand rien ne correspond`() {
        val reponse = RechercheLocale.parMots(
            "réservation du van pour le déménagement",
            listOf(resolu(tacheBudget()), resolu(engagementPlanning())),
            captures = listOf(captureVoiture().texteSource()),
        )

        assertFalse(reponse.fondee)
        assertTrue(reponse.citations.isEmpty())
        assertEquals(RechercheLocale.ABSENCE, reponse.enonce)
    }

    @Test
    fun `scénario « Recherche en mode avion » — résultats locaux rendus, manques signalés`() {
        val horsLigne = RechercheLocale.parMots("budget", listOf(resolu(tacheBudget())), reseau = false)

        assertTrue(horsLigne.fondee, "la recherche locale n'attend pas le réseau")
        toutEstCite(horsLigne)
        assertEquals(
            RechercheLocale.CAPACITES_RESEAU,
            horsLigne.indisponibleHorsLigne,
            "ce qui est en pause se signale, au lieu d'être masqué",
        )
    }

    @Test
    fun `avec le réseau, plus rien n'est signalé comme en pause`() {
        val enLigne = RechercheLocale.parMots("budget", listOf(resolu(tacheBudget())), reseau = true)

        assertTrue(enLigne.indisponibleHorsLigne.isEmpty())
    }

    @Test
    fun `une réponse ne dépasse jamais le nombre de citations lisible d'un coup d'œil`() {
        val beaucoup = (1..30).map { resolu(tacheBudget(captureId = "c-" + it.toString().padStart(3, '0'))) }

        val reponse = RechercheLocale.parMots("budget", beaucoup)

        assertEquals(RechercheLocale.MAX_CITATIONS, reponse.citations.size)
    }

    @Test
    fun `le classement est stable d'un appel à l'autre`() {
        val elements = listOf(
            resolu(tacheBudget()),
            resolu(engagementPlanning()),
            resolu(informationBudget()),
        )

        val premier = RechercheLocale.parMots("budget planning", elements).citations
        val second = RechercheLocale.parMots("budget planning", elements.reversed()).citations

        assertEquals(premier.map { it.elementId }, second.map { it.elementId })
    }
}
