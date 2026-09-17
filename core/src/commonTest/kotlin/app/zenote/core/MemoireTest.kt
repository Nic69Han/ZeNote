package app.zenote.core

import app.zenote.core.memoire.Entite
import app.zenote.core.memoire.Fiches
import app.zenote.core.memoire.Memoire
import app.zenote.core.memoire.Mention
import app.zenote.core.memoire.Recuperation
import app.zenote.core.memoire.TypeEntite
import app.zenote.core.model.CaptureId
import app.zenote.core.model.Decision
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Tâches 4.7, 4.8, 4.11 et 6.10 — la mémoire d'entités.
 *
 * Ce qui se joue ici : comprendre une note de quatre secondes pleine de sous-entendus
 * sans jamais avoir demandé à l'utilisateur de renseigner quoi que ce soit — et
 * pouvoir se tromper, puisque toute correction se défait.
 */
class MemoireTest {

    private val a = Instant.parse("2026-09-08T06:12:00Z")

    private fun mention(capture: String, extrait: String, quand: Instant = a) =
        Mention(CaptureId(capture), quand, extrait)

    // ------------------------------------------------------- création et dédoublonnage

    @Test
    fun `scénario « Création automatique d'une entité » — née de la capture, rattachée à elle`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val engagement = resolu(engagementPlanning())

        memoire.observerDepuis(capture, listOf(engagement))

        val karim = memoire.trouver(TypeEntite.PERSONNE, "Karim")
        assertNotNull(karim, "Une personne inconnue mentionnée devient une entité.")
        assertEquals(TypeEntite.PERSONNE, karim.type)
        assertEquals(listOf(capture.id), karim.mentions.map { it.captureId })
        assertEquals(listOf(karim.id), memoire.entitesDe(engagement.id).map { it.id })
    }

    @Test
    fun `scénario « Enrichissement progressif » — la mention s'ajoute, aucun doublon n'est créé`() {
        val memoire = Memoire()
        memoire.observerDepuis(captureVoiture("c-001"), listOf(resolu(engagementPlanning("c-001"))))
        memoire.observerDepuis(captureVoiture("c-002"), listOf(resolu(engagementPlanning("c-002"))))

        val personnes = memoire.entites().filter { it.type == TypeEntite.PERSONNE }

        assertEquals(1, personnes.size, "Une entité déjà connue ne produit pas de doublon.")
        assertEquals(2, personnes.single().mentions.size, "L'historique s'allonge.")
    }

    @Test
    fun `la déduplication ne se laisse pas avoir par la casse ni par les accents`() {
        val memoire = Memoire()
        memoire.observer(TypeEntite.PROJET, "Rénovation", mention("c-001", "le projet"))
        memoire.observer(TypeEntite.PROJET, "renovation", mention("c-002", "le projet"))
        memoire.observer(TypeEntite.PROJET, "RÉNOVATION", mention("c-003", "le projet"))

        assertEquals(1, memoire.entites().size)
        assertEquals(3, memoire.entites().single().frequence)
    }

    @Test
    fun `une même mention rejouée ne gonfle pas l'historique`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val elements = listOf(resolu(engagementPlanning()))

        memoire.observerDepuis(capture, elements)
        memoire.observerDepuis(capture, elements)

        assertEquals(1, memoire.entites().single { it.type == TypeEntite.PERSONNE }.frequence)
    }

    @Test
    fun `deux entités de types différents portant le même nom coexistent`() {
        val memoire = Memoire()
        memoire.observer(TypeEntite.PERSONNE, "Mercure", mention("c-001", "vu Mercure"))
        memoire.observer(TypeEntite.PROJET, "Mercure", mention("c-001", "le projet Mercure"))

        assertEquals(2, memoire.entites().size)
    }

    // --------------------------------------------------------- récupération bornée

    @Test
    fun `scénario « Contexte borné » — l'historique complet n'est jamais transmis en bloc`() {
        val memoire = Memoire()
        repeat(40) { i ->
            memoire.observer(
                TypeEntite.SUJET,
                "sujet-$i",
                mention("c-$i", "une note à propos du sujet $i"),
            )
        }

        val contexte = Recuperation.contexte(memoire, "budget", a, borne = 8)

        assertEquals(8, contexte.extraits.size)
        assertEquals(40, contexte.totalDisponible)
        assertTrue(contexte.tronque, "Ce qui n'est pas transmis est signalé comme tel.")
    }

    @Test
    fun `la récupération combine pertinence, récence et importance`() {
        val memoire = Memoire()
        // Pertinent mais ancien.
        memoire.observer(
            TypeEntite.PROJET,
            "Budget",
            mention("c-001", "arbitrage du budget en comité", Instant.parse("2025-01-01T08:00:00Z")),
        )
        // Récent mais hors sujet.
        memoire.observer(
            TypeEntite.SUJET,
            "Cantine",
            mention("c-002", "changer de cantine", Instant.parse("2026-09-08T05:00:00Z")),
        )

        val contexte = Recuperation.contexte(memoire, "arbitrage du budget", a, borne = 2)

        assertEquals("Budget", contexte.extraits.first().entite.nom)
        assertTrue(contexte.extraits.first().pertinence > contexte.extraits.last().pertinence)
        assertTrue(
            contexte.extraits.last().recence > contexte.extraits.first().recence,
            "La récence joue bien dans l'autre sens.",
        )
    }

    @Test
    fun `scénario « Contexte inspectable » — chaque extrait dit ce qui l'a fait retenir`() {
        val memoire = Memoire()
        memoire.observer(TypeEntite.PROJET, "Budget", mention("c-001", "arbitrage du budget"))

        val extrait = Recuperation.contexte(memoire, "budget", a).extraits.single()

        assertTrue(extrait.justification.contains("pertinence"))
        assertTrue(extrait.justification.contains("récence"))
        assertTrue(extrait.justification.contains("importance"))
    }

    @Test
    fun `la récupération est déterministe d'un appel à l'autre`() {
        val memoire = Memoire()
        repeat(10) { i -> memoire.observer(TypeEntite.SUJET, "s$i", mention("c-$i", "note $i")) }

        val premier = Recuperation.contexte(memoire, "note", a, borne = 4).extraits.map { it.entite.id }
        val second = Recuperation.contexte(memoire, "note", a, borne = 4).extraits.map { it.entite.id }

        assertEquals(premier, second)
    }

    // --------------------------------------------------------------- corrections

    @Test
    fun `scénario « Fusion de doublons » — historiques réunis, rattachements repointés, annulable`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val engagement = resolu(engagementPlanning())
        memoire.observerDepuis(capture, listOf(engagement))
        val karim = memoire.trouver(TypeEntite.PERSONNE, "Karim")!!
        val doublon = memoire.observer(
            TypeEntite.PERSONNE,
            "K. Belkacem",
            mention("c-002", "relancé K. Belkacem"),
        )
        memoire.rattacher(engagement.id, doublon.id)

        val correction = memoire.fusionner(gardee = karim.id, absorbee = doublon.id)

        val reunie = memoire.entite(karim.id)!!
        assertEquals(1, memoire.entites().size)
        assertEquals(2, reunie.mentions.size, "L'historique des deux est réuni.")
        assertTrue("K. Belkacem" in reunie.alias, "L'ancien nom reste reconnaissable.")
        assertEquals(
            listOf(karim.id),
            memoire.entitesDe(engagement.id).map { it.id },
            "Les éléments rattachés pointent vers l'entité conservée.",
        )
        assertNull(memoire.entite(doublon.id))

        assertTrue(memoire.annuler(correction.annulation), "L'opération est annulable.")
        assertEquals(2, memoire.entites().size)
        assertEquals(1, memoire.entite(karim.id)!!.mentions.size)
        assertEquals(
            setOf(karim.id, doublon.id),
            memoire.entitesDe(engagement.id).map { it.id }.toSet(),
        )
    }

    @Test
    fun `un renommage se propage et laisse l'ancien nom en alias, annulable`() {
        val memoire = Memoire()
        val projet = memoire.observer(TypeEntite.PROJET, "Refonte", mention("c-001", "la refonte"))

        val correction = memoire.renommer(projet.id, "Refonte du portail")

        assertEquals("Refonte du portail", memoire.entite(projet.id)!!.nom)
        assertNotNull(
            memoire.trouver(TypeEntite.PROJET, "Refonte"),
            "Les captures déjà écrites emploient encore l'ancien nom.",
        )

        assertTrue(memoire.annuler(correction.annulation))
        assertEquals("Refonte", memoire.entite(projet.id)!!.nom)
    }

    @Test
    fun `une séparation déplace les éléments désignés et laisse le reste en place`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val engagement = resolu(engagementPlanning())
        val attente = resolu(attenteRetourKarim())
        memoire.observerDepuis(capture, listOf(engagement, attente))
        val karim = memoire.trouver(TypeEntite.PERSONNE, "Karim")!!
        assertEquals(2, karim.mentions.size)

        val correction = memoire.separer(karim.id, "Karim (fournisseur)", setOf(attente.id))

        val neuve: Entite = correction.entite!!
        assertEquals(1, neuve.mentions.size)
        assertEquals(1, memoire.entite(karim.id)!!.mentions.size)
        assertEquals(listOf(neuve.id), memoire.entitesDe(attente.id).map { it.id })
        assertEquals(listOf(karim.id), memoire.entitesDe(engagement.id).map { it.id })

        assertTrue(memoire.annuler(correction.annulation))
        assertEquals(1, memoire.entites().size)
        assertEquals(2, memoire.entite(karim.id)!!.mentions.size)
    }

    @Test
    fun `une suppression d'entité ne touche ni la capture ni ses éléments, et s'annule`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val engagement = resolu(engagementPlanning())
        memoire.observerDepuis(capture, listOf(engagement))
        val karim = memoire.trouver(TypeEntite.PERSONNE, "Karim")!!

        val correction = memoire.supprimer(karim.id)

        assertNull(memoire.entite(karim.id))
        assertTrue(memoire.entitesDe(engagement.id).isEmpty())
        // La couche source est intacte : l'élément et sa capture existent toujours.
        assertEquals(capture.id, engagement.captureId)

        assertTrue(memoire.annuler(correction.annulation))
        assertNotNull(memoire.entite(karim.id))
        assertEquals(listOf(karim.id), memoire.entitesDe(engagement.id).map { it.id })
    }

    @Test
    fun `un jeton d'annulation ne sert qu'une fois`() {
        val memoire = Memoire()
        val projet = memoire.observer(TypeEntite.PROJET, "Refonte", mention("c-001", "la refonte"))
        val correction = memoire.renommer(projet.id, "Refonte du portail")

        assertTrue(memoire.annuler(correction.annulation))
        assertFalse(memoire.annuler(correction.annulation))
    }

    // ------------------------------------------------------------ fiches d'entité

    @Test
    fun `scénario « Fiche personne » — ce qui est ouvert, ce qui a été décidé, et les sources`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val engagement = resolu(
            engagementPlanning(),
            Decision(engagementPlanning().id, Verdict.ACCEPTE, a),
        )
        val attente = resolu(attenteRetourKarim(), Decision(attenteRetourKarim().id, Verdict.ACCEPTE, a))
        val decision = resolu(decisionPrestataire())
        val abandonne = resolu(tachePlanifiee(), Decision(tachePlanifiee().id, Verdict.REJETE, a))
        val elements = listOf(engagement, attente, decision, abandonne)
        memoire.observerDepuis(capture, elements)

        val karim = memoire.trouver(TypeEntite.PERSONNE, "Karim")!!
        val fiche = Fiches.de(memoire, karim.id, elements)

        assertNotNull(fiche)
        assertEquals(
            setOf(TypeElement.ENGAGEMENT, TypeElement.ATTENTE),
            fiche.ouverts.map { it.type }.toSet(),
            "Les engagements en cours envers elle et les attentes à son égard.",
        )
        assertEquals(1, fiche.decide.size, "Les décisions communes.")
        assertTrue(
            (fiche.ouverts + fiche.decide).all { it.captureId == capture.id },
            "Chaque ligne renvoie à sa capture source.",
        )
        assertFalse(
            fiche.ouverts.any { it.verdict == Verdict.REJETE },
            "Ce qui a été écarté n'est plus ouvert.",
        )
        assertTrue(fiche.derniersEchanges.isNotEmpty())
    }

    @Test
    fun `la fiche d'une entité inconnue n'existe pas`() {
        assertNull(Fiches.de(Memoire(), app.zenote.core.memoire.EntiteId("ent-9999"), emptyList()))
    }
}
