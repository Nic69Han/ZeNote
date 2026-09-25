package app.zenote.core

import app.zenote.core.model.Decision
import app.zenote.core.model.Poids
import app.zenote.core.model.Verdict
import app.zenote.core.priorisation.ContexteMaintenant
import app.zenote.core.priorisation.Priorisation
import app.zenote.core.priorisation.Urgence
import app.zenote.core.store.CaptureStore
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Tâche 5.1 — le moteur de classement.
 *
 * Les deux premiers tests reprennent mot pour mot les scénarios de la spécification
 * `priorisation`.
 */
class PriorisationTest {

    private val decideA = Instant.parse("2026-09-08T18:51:00Z")
    private val contexte = ContexteMaintenant(aujourdhui = LE_MARDI)

    /** Prépare un magasin où tous les éléments passés sont acceptés. */
    private fun magasinAvec(vararg elements: app.zenote.core.model.ElementDerive): CaptureStore {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, *elements))
        store.elements(capture.id).forEach {
            store.decider(Decision(it.id, Verdict.ACCEPTE, decideA))
        }
        return store
    }

    @Test
    fun `scénario « Urgent mais léger » — le poids fort n'est pas relégué`() {
        // Un élément de poids faible arrive à échéance dans l'heure…
        val leger = tacheBudget(
            poids = Poids.FAIBLE,
            indice = "relance de courtoisie",
            echeance = LE_MARDI,
        )
        // …et un élément de poids fort arrive à échéance demain.
        val lourd = engagementPlanning(poids = Poids.FORT)
        val store = magasinAvec(leger, lourd)

        val classement = Priorisation.classer(store.tousElements(), contexte)

        assertEquals(2, classement.size)
        assertEquals(
            "Envoyer le planning à Karim",
            classement.first().element.texte,
            "Un urgent-léger ne passe pas devant un important.",
        )
    }

    @Test
    fun `scénario « Justification lisible » — la raison dit la conséquence, pas la date`() {
        val store = magasinAvec(tacheBudget())

        val proposition = Priorisation.classer(store.tousElements(), contexte).single()

        assertTrue(
            proposition.raison.startsWith("budget arbitré en comité"),
            "La justification commence par ce qui se passe si ce n'est pas fait : ${proposition.raison}",
        )
        assertTrue(proposition.raison.contains("échéance"))
    }

    @Test
    fun `une échéance du jour monte l'élément d'un cran, sans dépasser le poids fort`() {
        val moyenAujourdhui = tacheBudget(poids = Poids.MOYEN, echeance = LE_MARDI)
        val fortPlusTard = engagementPlanning(poids = Poids.FORT)
        val store = magasinAvec(moyenAujourdhui, fortPlusTard)

        val classement = Priorisation.classer(store.tousElements(), contexte)

        // Le moyen du jour est monté à fort : il rejoint le fort, sans le dépasser.
        assertEquals(Poids.FORT, classement[0].poidsEffectif)
        assertEquals(Poids.FORT, classement[1].poidsEffectif)
        // À poids effectif égal, c'est l'urgence qui départage.
        assertEquals(Urgence.AUJOURD_HUI, classement[0].urgence)
        assertEquals("Voir le budget avec Marc", classement[0].element.texte)
    }

    @Test
    fun `la vue Maintenant ne propose jamais plus de trois éléments`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        // Cinq éléments distincts, découpés sur cinq passages différents du texte.
        val extraits = listOf("Faut que", "je vois avec Marc", "le budget", "avant vendredi", "le planning")
        val elements = extraits.mapIndexed { i, extrait ->
            app.zenote.core.model.ElementDerive(
                captureId = capture.id,
                type = app.zenote.core.model.TypeElement.TACHE,
                texte = "Tâche $i",
                passage = passage(extrait),
                poids = app.zenote.core.model.Deduit(Poids.MOYEN, 0.8, "conséquence $i"),
            )
        }
        store.analyser(analyseDe(capture, *elements.toTypedArray()))
        store.elements(capture.id).forEach { store.decider(Decision(it.id, Verdict.ACCEPTE, decideA)) }

        assertEquals(5, Priorisation.classer(store.tousElements(), contexte).size)
        assertEquals(3, Priorisation.maintenant(store.tousElements(), contexte).size)
    }

    @Test
    fun `un élément encore en attente de Revue n'apparaît pas dans Maintenant`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        store.analyser(analyseDe(capture, tacheBudget(), engagementPlanning()))
        // Un seul des deux est accepté.
        val premier = store.elements(capture.id).first()
        store.decider(Decision(premier.id, Verdict.ACCEPTE, decideA))

        val classement = Priorisation.classer(store.tousElements(), contexte)

        assertEquals(1, classement.size)
        assertEquals(premier.id, classement.single().element.id)
    }

    @Test
    fun `un élément classé « un jour » sort des vues actives`() {
        val store = magasinAvec(tacheBudget())
        val tache = store.tousElements().single()
        store.decider(Decision(tache.id, Verdict.UN_JOUR, decideA))

        assertTrue(Priorisation.classer(store.tousElements(), contexte).isEmpty())
    }

    @Test
    fun `un type non actionnable ne rejoint jamais Maintenant`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        val information = app.zenote.core.model.ElementDerive(
            captureId = capture.id,
            type = app.zenote.core.model.TypeElement.INFORMATION,
            texte = "Le budget a été arbitré en juin",
            passage = passage("le budget"),
            poids = app.zenote.core.model.Deduit(Poids.FORT, 0.9, "décision structurante"),
        )
        store.analyser(analyseDe(capture, information))
        store.elements(capture.id).forEach { store.decider(Decision(it.id, Verdict.ACCEPTE, decideA)) }

        assertTrue(Priorisation.classer(store.tousElements(), contexte).isEmpty())
    }

    @Test
    fun `le classement est stable d'un appel à l'autre`() {
        val store = magasinAvec(tacheBudget(poids = Poids.MOYEN), engagementPlanning(poids = Poids.MOYEN))

        val premier = Priorisation.classer(store.tousElements(), contexte).map { it.element.id }
        val second = Priorisation.classer(store.tousElements(), contexte).map { it.element.id }

        assertEquals(premier, second)
    }

    @Test
    fun `les tranches d'urgence suivent l'échéance`() {
        val aujourdhui = LocalDate(2026, 9, 8)
        assertEquals(Urgence.AUCUNE, Priorisation.urgence(null, aujourdhui))
        assertEquals(Urgence.DEPASSEE, Priorisation.urgence(LocalDate(2026, 9, 7), aujourdhui))
        assertEquals(Urgence.AUJOURD_HUI, Priorisation.urgence(aujourdhui, aujourdhui))
        assertEquals(Urgence.DEMAIN, Priorisation.urgence(LocalDate(2026, 9, 9), aujourdhui))
        assertEquals(Urgence.CETTE_SEMAINE, Priorisation.urgence(LocalDate(2026, 9, 15), aujourdhui))
        assertEquals(Urgence.PLUS_TARD, Priorisation.urgence(LocalDate(2026, 10, 1), aujourdhui))

        assertTrue(Urgence.DEPASSEE.presse)
        assertTrue(Urgence.AUJOURD_HUI.presse)
        assertFalse(Urgence.DEMAIN.presse)
    }

    @Test
    fun `un élément sans poids déduit reste proposé, en le disant`() {
        val store = CaptureStore()
        val capture = captureVoiture()
        store.enregistrer(capture)
        val sansPoids = app.zenote.core.model.ElementDerive(
            captureId = capture.id,
            type = app.zenote.core.model.TypeElement.TACHE,
            texte = "Voir le budget avec Marc",
            passage = passage("je vois avec Marc pour le budget avant vendredi"),
        )
        store.analyser(analyseDe(capture, sansPoids))
        store.elements(capture.id).forEach { store.decider(Decision(it.id, Verdict.ACCEPTE, decideA)) }

        val proposition = Priorisation.classer(store.tousElements(), contexte).single()

        assertEquals(Poids.MOYEN, proposition.poidsEffectif)
        assertTrue(proposition.raison.contains("à confirmer en Revue"))
    }
}
