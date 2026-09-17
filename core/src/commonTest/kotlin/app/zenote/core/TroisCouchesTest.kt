package app.zenote.core

import app.zenote.core.model.CaptureId
import app.zenote.core.model.Decision
import app.zenote.core.model.OrigineAnalyse
import app.zenote.core.model.Poids
import app.zenote.core.model.Verdict
import app.zenote.core.store.CaptureStore
import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

/**
 * Tâche 1.4 — le schéma des trois couches.
 *
 * Ce que ces tests garantissent : une ré-analyse ne modifie ni la couche source ni
 * la couche humaine. C'est l'invariant qui rend le produit améliorable dans le temps.
 */
class TroisCouchesTest {

    private val decideA = Instant.parse("2026-09-08T18:51:00Z")

    @Test
    fun `la ré-analyse ne modifie pas la couche source`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, tacheBudget()))

        store.analyser(analyseDe(capture, tacheBudget(), engagementPlanning(), versionModele = "modele-2"))

        val apres = assertNotNull(store.capture(capture.id))
        assertEquals(capture, apres, "La capture d'origine doit être rigoureusement inchangée.")
        assertEquals(TEXTE_VOITURE, apres.texteBrut)
        assertEquals(capture.audio, apres.audio)
    }

    @Test
    fun `la ré-analyse ne perd pas la décision humaine`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, tacheBudget()))

        val tache = store.elements(capture.id).single()
        store.decider(
            Decision(
                elementId = tache.id,
                verdict = Verdict.ACCEPTE,
                decideA = decideA,
                poids = Poids.FAIBLE,
            ),
        )

        // Le modèle progresse et redéduit un poids fort : la correction humaine tient.
        store.analyser(
            analyseDe(
                capture,
                tacheBudget(poids = Poids.FORT, indice = "nouvelle déduction du modèle"),
                versionModele = "modele-2",
            ),
        )

        val apres = store.elements(capture.id).single()
        assertEquals(Verdict.ACCEPTE, apres.verdict)
        assertEquals(Poids.FAIBLE, apres.poids, "La couche humaine fait autorité sur le dérivé.")
        assertTrue(apres.corrigeParHumain)
        assertEquals("poids fixé à la main", apres.indicePoids)
    }

    @Test
    fun `la ré-analyse remplace intégralement le dérivé`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, tacheBudget(), engagementPlanning()))
        assertEquals(2, store.elements(capture.id).size)

        store.analyser(analyseDe(capture, tacheBudget(), versionModele = "modele-2"))

        assertEquals(1, store.elements(capture.id).size, "Le dérivé est remplacé, pas fusionné.")
        assertEquals("modele-2", assertNotNull(store.analyse(capture.id)).versionModele)
    }

    @Test
    fun `une décision dont l'élément disparaît devient orpheline, jamais perdue`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, tacheBudget(), engagementPlanning()))

        val engagement = store.elements(capture.id).single { it.texte.contains("planning") }
        store.decider(Decision(engagement.id, Verdict.ACCEPTE, decideA))
        assertTrue(store.decisionsOrphelines().isEmpty())

        // Le modèle redécoupe et ne retrouve plus ce passage.
        store.analyser(analyseDe(capture, tacheBudget(), versionModele = "modele-2"))

        val orphelines = store.decisionsOrphelines()
        assertEquals(1, orphelines.size, "Le travail de l'utilisateur ne disparaît pas en silence.")
        assertEquals(engagement.id, orphelines.single().elementId)
    }

    @Test
    fun `un identifiant d'élément est stable d'une analyse à l'autre`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)

        store.analyser(analyseDe(capture, tacheBudget()))
        val avant = store.elements(capture.id).single().id
        store.analyser(analyseDe(capture, tacheBudget(poids = Poids.MOYEN), versionModele = "modele-2"))
        val apres = store.elements(capture.id).single().id

        assertEquals(avant, apres, "Même capture, même passage, même type : même identifiant.")
    }

    @Test
    fun `la couche source refuse d'être écrasée`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)

        assertFailsWith<IllegalArgumentException> { store.enregistrer(capture) }
    }

    @Test
    fun `une capture marquée privée refuse toute analyse distante`() {
        val store = CaptureStore()
        val privee = captureVoiture(id = "c-privee", transmissible = false)
        store.enregistrer(privee)

        assertFailsWith<IllegalArgumentException> {
            store.analyser(analyseDe(privee, tacheBudget(captureId = "c-privee")))
        }

        // Mais elle reste analysable localement, donc consultable et recherchable.
        store.analyser(
            analyseDe(
                privee,
                tacheBudget(captureId = "c-privee"),
                origine = OrigineAnalyse.LOCALE,
            ),
        )
        assertEquals(1, store.elements(privee.id).size)
    }

    @Test
    fun `une capture non analysée reste dans le sas`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)

        assertEquals(listOf(capture), store.sas())

        store.analyser(analyseDe(capture, tacheBudget()))
        assertTrue(store.sas().isEmpty())
    }

    @Test
    fun `un élément accepté sans plan est signalé comme incomplet`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, tacheBudget()))

        val tache = store.elements(capture.id).single()
        assertFalse(tache.planManquant, "Tant qu'il n'est pas accepté, rien à signaler.")

        store.decider(Decision(tache.id, Verdict.ACCEPTE, decideA))
        assertTrue(store.elements(capture.id).single().planManquant)
    }

    @Test
    fun `analyser une capture inconnue échoue`() {
        val store = CaptureStore()
        val capture = captureVoiture()

        assertFailsWith<IllegalArgumentException> { store.analyser(analyseDe(capture, tacheBudget())) }
        assertEquals(null, store.capture(CaptureId("c-001")))
    }
}
