package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.Decision
import app.zenote.core.model.Deduit
import app.zenote.core.model.ElementDerive
import app.zenote.core.model.Poids
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.revue.Arriere
import app.zenote.core.revue.FileRevue
import app.zenote.core.revue.OptionRelance
import app.zenote.core.revue.Relance
import app.zenote.core.revue.Suivi
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

/**
 * Tâches 4.17 et 5.13 — l'arriéré sans pression, et la relance.
 *
 * L'arriéré est le moment où le produit se perd le plus facilement : un compteur de
 * retard suffit à faire décrocher. Ces tests vérifient donc autant la forme que le
 * fond — ce qui est proposé, et ce qui n'est jamais dit.
 */
class ArriereEtRelanceTest {

    private val a = Instant.parse("2026-09-08T18:51:00Z")

    // ------------------------------------------------------------------- arriéré

    @Test
    fun `scénario « Arriéré volumineux » — une Revue réduite, le reste intact`() {
        val file = fileDe(30)

        val reduite = Arriere.revueReduite(file, charge = 12)

        assertTrue(reduite.reduite)
        assertEquals(12, reduite.retenues.size)
        assertEquals(18, reduite.demeurentEnFile.size)
        assertEquals(
            file.map { it.id }.toSet(),
            (reduite.retenues + reduite.demeurentEnFile).map { it.id }.toSet(),
            "Rien n'est supprimé ni dégradé : la somme reste la file de départ.",
        )
    }

    @Test
    fun `la Revue réduite retient d'abord les plus lourds`() {
        val leger = entree("l", Poids.FAIBLE)
        val lourd = entree("h", Poids.FORT)
        val moyen = entree("m", Poids.MOYEN)

        val reduite = Arriere.revueReduite(listOf(leger, moyen, lourd), charge = 1)

        assertEquals(lourd.id, reduite.retenues.single().id)
    }

    @Test
    fun `scénario « Retard sans pression » — aucun compteur culpabilisant`() {
        val reduite = Arriere.revueReduite(fileDe(30), charge = 12)

        listOf("retard", "en retard", "oubli", "échec", "vous n'avez pas").forEach { interdit ->
            assertFalse(
                reduite.motif.lowercase().contains(interdit),
                "Le motif ne doit pas contenir « $interdit » : ${reduite.motif}",
            )
        }
    }

    @Test
    fun `une file qui tient en une Revue n'est pas réduite`() {
        val reduite = Arriere.revueReduite(fileDe(5), charge = 12)

        assertFalse(reduite.reduite)
        assertTrue(reduite.demeurentEnFile.isEmpty())
    }

    @Test
    fun `l'arriéré se regroupe par thème pour rester traitable`() {
        val file = FileRevue.file(
            listOf(
                resolu(engagementPlanning()),
                resolu(attenteRetourKarim()),
                resolu(tacheBudget()),
            ),
            LE_MARDI,
        )

        val themes = Arriere.grouperParTheme(file)

        assertEquals(listOf("Karim", "divers"), themes.map { it.theme })
        assertEquals(2, themes.first().entrees.size)
    }

    // ------------------------------------------------------------------- relance

    @Test
    fun `scénario « Attente sans nouvelle » — au-delà du délai habituel, la relance remonte`() {
        val attente = resolu(attenteRetourKarim(), Decision(attenteRetourKarim().id, Verdict.ACCEPTE, a))

        val propositions = Relance.aRelancer(
            elements = listOf(attente),
            aujourdhui = LocalDate(2026, 9, 20),
            suivis = listOf(Suivi(attente.id, LocalDate(2026, 9, 1))),
            delaisObserves = mapOf("Karim" to 4),
        )

        val proposition = propositions.singleOrNull()
        assertNotNull(proposition)
        assertTrue(proposition.motif.contains("Karim"))
        assertTrue(proposition.motif.contains("délai habituel"))
        assertEquals(
            listOf(OptionRelance.RELANCER, OptionRelance.PROLONGER, OptionRelance.CLORE),
            proposition.options,
            "Relancer, prolonger ou clôturer : trois gestes, pas un formulaire.",
        )
    }

    @Test
    fun `une attente encore dans le délai habituel ne remonte pas`() {
        val attente = resolu(attenteRetourKarim(), Decision(attenteRetourKarim().id, Verdict.ACCEPTE, a))

        val propositions = Relance.aRelancer(
            elements = listOf(attente),
            aujourdhui = LocalDate(2026, 9, 3),
            suivis = listOf(Suivi(attente.id, LocalDate(2026, 9, 1))),
            delaisObserves = mapOf("Karim" to 4),
        )

        assertTrue(propositions.isEmpty())
    }

    @Test
    fun `le délai habituel est par personne, avec un repli quand rien n'est observé`() {
        assertEquals(4, Relance.delaiHabituel("karim", mapOf("Karim" to 4)))
        assertEquals(
            Relance.DELAI_PAR_DEFAUT_JOURS,
            Relance.delaiHabituel("Sophie", mapOf("Karim" to 4)),
        )
        assertEquals(Relance.DELAI_PAR_DEFAUT_JOURS, Relance.delaiHabituel(null, emptyMap()))
    }

    @Test
    fun `un engagement dont l'échéance approche remonte en Revue`() {
        val derive = engagementAvecEcheance(LE_VENDREDI)
        val engagement = resolu(derive, Decision(derive.id, Verdict.ACCEPTE, a))

        val proches = Relance.aRelancer(listOf(engagement), aujourdhui = LE_MARDI)
        assertEquals(1, proches.size)
        assertTrue(proches.single().motif.contains("Karim"))

        val lointains = Relance.aRelancer(listOf(engagement), aujourdhui = LocalDate(2026, 9, 1))
        assertTrue(lointains.isEmpty(), "Une échéance lointaine n'a rien à faire en Revue.")
    }

    @Test
    fun `un élément pas encore passé en Revue n'est jamais relancé`() {
        val derive = engagementAvecEcheance(LE_VENDREDI)

        assertTrue(Relance.aRelancer(listOf(resolu(derive)), aujourdhui = LE_MARDI).isEmpty())
    }

    // ----------------------------------------------------------------- outillage

    private fun engagementAvecEcheance(echeance: LocalDate) = ElementDerive(
        captureId = CaptureId("c-001"),
        type = TypeElement.ENGAGEMENT,
        texte = "Envoyer le planning à Karim",
        passage = passage("j'ai dit à Karim que je lui envoie le planning"),
        echeance = Deduit(echeance, 0.9, "« avant vendredi »"),
        poids = Deduit(Poids.MOYEN, 0.81, "engagement pris envers Karim"),
        interlocuteur = Deduit("Karim", 0.95, "nommé explicitement"),
    )

    /** Une entrée de Revue synthétique, identifiée par son passage. */
    private fun entree(cle: String, poids: Poids) = FileRevue.entree(
        resolu(
            ElementDerive(
                captureId = CaptureId("c-$cle"),
                type = TypeElement.INFORMATION,
                texte = "Élément $cle",
                passage = passage("le budget"),
                poids = Deduit(poids, 0.9, "conséquence $cle"),
            ),
        ),
        LE_MARDI,
    )

    private fun fileDe(combien: Int) = (1..combien).map { i ->
        entree(i.toString().padStart(2, '0'), Poids.entries[i % 3])
    }
}
