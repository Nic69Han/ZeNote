package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Passage
import app.zenote.core.recherche.RechercheLocale
import app.zenote.core.recherche.RepereTemporel
import app.zenote.core.recherche.TexteSource
import kotlinx.datetime.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Le repère temporel flou, vu depuis la question que l'utilisateur pose.
 *
 * Un mercredi de référence : 2026-09-16. La semaine civile qui le contient va du
 * lundi 14 au dimanche 20 ; la précédente, du lundi 7 au dimanche 13.
 */
class RepereTemporelTest {

    private val mercredi = LocalDate(2026, 9, 16)

    @Test
    fun `la semaine derniere est la semaine civile precedente`() {
        val repere = RepereTemporel.lire("le truc de la semaine dernière", mercredi)
        assertNotNull(repere)
        assertEquals(LocalDate(2026, 9, 7), repere.periode.du)
        assertEquals(LocalDate(2026, 9, 13), repere.periode.au)
        assertEquals("la semaine dernière", repere.periode.libelle)
    }

    @Test
    fun `cette semaine part du lundi et va au dimanche`() {
        val repere = RepereTemporel.lire("ce que j'ai dit cette semaine", mercredi)
        assertNotNull(repere)
        assertEquals(LocalDate(2026, 9, 14), repere.periode.du)
        assertEquals(LocalDate(2026, 9, 20), repere.periode.au)
    }

    @Test
    fun `avant-hier est lu avant hier`() {
        val repere = RepereTemporel.lire("la note d'avant-hier", mercredi)
        assertNotNull(repere)
        assertEquals("avant-hier", repere.periode.libelle)
        assertEquals(LocalDate(2026, 9, 14), repere.periode.du)
    }

    @Test
    fun `un jour de la semaine designe la derniere occurrence passee`() {
        val repere = RepereTemporel.lire("ce qu'on a décidé lundi dernier", mercredi)
        assertNotNull(repere)
        assertEquals(LocalDate(2026, 9, 14), repere.periode.du)
        assertEquals(repere.periode.du, repere.periode.au)
    }

    @Test
    fun `mercredi dernier remonte d'une semaine entiere`() {
        // Le jour même n'est pas « mercredi dernier » : sinon la question ne
        // distinguerait plus aujourd'hui de la semaine passée.
        val repere = RepereTemporel.lire("mercredi dernier", mercredi)
        assertNotNull(repere)
        assertEquals(LocalDate(2026, 9, 9), repere.periode.du)
    }

    @Test
    fun `le mois dernier est le mois civil precedent`() {
        val repere = RepereTemporel.lire("la décision du mois dernier", mercredi)
        assertNotNull(repere)
        assertEquals(LocalDate(2026, 8, 1), repere.periode.du)
        assertEquals(LocalDate(2026, 8, 31), repere.periode.au)
    }

    @Test
    fun `il y a trois jours ouvre une fenetre, pas un point`() {
        val repere = RepereTemporel.lire("le truc d'il y a trois jours", mercredi)
        assertNotNull(repere)
        assertEquals(LocalDate(2026, 9, 12), repere.periode.du)
        assertEquals(LocalDate(2026, 9, 14), repere.periode.au)
    }

    @Test
    fun `la fenetre ne depasse jamais aujourd'hui`() {
        val repere = RepereTemporel.lire("il y a 1 jour", mercredi)
        assertNotNull(repere)
        assertEquals(mercredi, repere.periode.au)
    }

    @Test
    fun `une question sans repere n'en invente pas`() {
        assertNull(RepereTemporel.lire("qu'est-ce que j'ai promis à Karim", mercredi))
        assertNull(RepereTemporel.lire("il y a beaucoup à faire", mercredi))
    }

    @Test
    fun `les mots du repere sortent de la recherche`() {
        val repere = RepereTemporel.lire("le devis dont j'ai parlé la semaine dernière", mercredi)
        assertNotNull(repere)
        val reste = RepereTemporel.sansRepere("le devis dont j'ai parlé la semaine dernière", repere)
        assertTrue(reste.contains("devis"), reste)
        assertFalse(reste.contains("semaine"), reste)
        assertFalse(reste.contains("derniere"), reste)
    }

    @Test
    fun `le contexte de capture est reconnu pour etre ecarte, pas honore`() {
        assertEquals("en voiture", RepereTemporel.contexteEvoque("le truc dont j'ai parlé en voiture"))
        assertNull(RepereTemporel.contexteEvoque("le truc dont j'ai parlé à Karim"))
    }

    // ------------------------------------------------- la recherche, de bout en bout

    private fun capture(id: String, texte: String, jour: LocalDate) =
        TexteSource(CaptureId(id), texte, quand = jour.toString(), jour = jour)

    private fun element(id: String, captureId: String, texte: String) = ElementResolu(
        id = ElementId(id),
        captureId = CaptureId(captureId),
        type = TypeElement.INFORMATION,
        texte = texte,
        passage = Passage(0, texte.length),
        echeance = null,
        poids = null,
        interlocuteur = null,
        sphere = null,
        plan = null,
        verdict = Verdict.ACCEPTE,
        aConfirmer = false,
        corrigeParHumain = false,
        indicePoids = null,
    )

    @Test
    fun `la question de la spec rend les captures de la periode et ecarte le contexte`() {
        val captures = listOf(
            capture("c-1", "le devis du toit à rappeler", LocalDate(2026, 9, 10)),
            capture("c-2", "penser aux pneus", LocalDate(2026, 9, 15)),
        )

        val reponse = RechercheLocale.parQuestion(
            requete = "le truc dont j'ai parlé en voiture la semaine dernière",
            elements = emptyList(),
            captures = captures,
            aujourdhui = mercredi,
        )

        assertEquals(1, reponse.citations.size)
        assertEquals("c-1", reponse.citations.single().captureId.value)
        assertTrue(reponse.enonce.contains("la semaine dernière"), reponse.enonce)
        assertEquals(listOf(RepereTemporel.CONTEXTE_INCONNU), reponse.nonPrisEnCompte)
    }

    @Test
    fun `une capture sans jour connu n'est jamais rattachee a une periode au hasard`() {
        val sansJour = TexteSource(CaptureId("c-9"), "le devis du toit", quand = "inconnu")

        val reponse = RechercheLocale.parQuestion(
            requete = "le devis la semaine dernière",
            elements = emptyList(),
            captures = listOf(sansJour),
            aujourdhui = mercredi,
        )

        assertFalse(reponse.fondee)
        assertTrue(reponse.enonce.contains("Rien de capturé"), reponse.enonce)
    }

    @Test
    fun `un repere sans mots rend tout ce que la periode contient`() {
        val captures = listOf(
            capture("c-1", "le devis du toit", LocalDate(2026, 9, 10)),
            capture("c-2", "rappeler Karim", LocalDate(2026, 9, 11)),
            capture("c-3", "hors période", LocalDate(2026, 9, 15)),
        )

        val reponse = RechercheLocale.parQuestion(
            requete = "la semaine dernière",
            elements = emptyList(),
            captures = captures,
            aujourdhui = mercredi,
        )

        assertEquals(2, reponse.citations.size)
        assertEquals(listOf("c-1", "c-2"), reponse.citations.map { it.captureId.value })
    }

    @Test
    fun `les elements de la periode passent devant leurs captures`() {
        val captures = listOf(capture("c-1", "le devis du toit à rappeler", LocalDate(2026, 9, 10)))
        val elements = listOf(element("e-1", "c-1", "rappeler le couvreur pour le devis"))

        val reponse = RechercheLocale.parQuestion(
            requete = "devis la semaine dernière",
            elements = elements,
            captures = captures,
            aujourdhui = mercredi,
        )

        assertEquals("e-1", reponse.citations.first().elementId?.value)
    }

    @Test
    fun `sans repere la question retombe sur les mots, contexte signale`() {
        val captures = listOf(capture("c-1", "le devis du toit", LocalDate(2026, 9, 10)))

        val reponse = RechercheLocale.parQuestion(
            requete = "le devis dont j'ai parlé en voiture",
            elements = emptyList(),
            captures = captures,
            aujourdhui = mercredi,
        )

        assertTrue(reponse.fondee)
        assertEquals(listOf(RepereTemporel.CONTEXTE_INCONNU), reponse.nonPrisEnCompte)
    }
}
