package app.zenote.core

import app.zenote.core.memoire.Memoire
import app.zenote.core.memoire.Mention
import app.zenote.core.memoire.TypeEntite
import app.zenote.core.model.CaptureId
import app.zenote.core.model.Decision
import app.zenote.core.model.ElementId
import app.zenote.core.model.Verdict
import app.zenote.core.rappels.Briefings
import app.zenote.core.rappels.Declencheur
import app.zenote.core.rappels.Declencheurs
import app.zenote.core.rappels.EvenementConnu
import app.zenote.core.rappels.FileOpportunite
import app.zenote.core.rappels.Livraison
import app.zenote.core.rappels.OptionEscalade
import app.zenote.core.rappels.PlageSilence
import app.zenote.core.rappels.PointDeRupture
import app.zenote.core.rappels.Plans
import app.zenote.core.rappels.Rappel
import app.zenote.core.rappels.RappelId
import app.zenote.core.rappels.Rappels
import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Tâches 5.8 à 5.12 — les déclencheurs et la livraison.
 *
 * Le fil conducteur : le signal vaut mieux que l'heure, et l'instant de livraison
 * vaut mieux que l'instant d'échéance. Ce qui est vérifié ici, c'est qu'on ne
 * notifie ni au milieu d'une activité, ni deux fois, ni indéfiniment.
 */
class RappelsTest {

    private val debutReunion = Instant.parse("2026-09-08T09:00:00Z")
    private val finReunion = Instant.parse("2026-09-08T10:00:00Z")

    private val reunionMarc = EvenementConnu(
        id = "evt-001",
        titre = "Point budget",
        debut = debutReunion,
        fin = finReunion,
        lieu = "Bureau",
        participants = listOf("Marc"),
    )

    private val pointDuLundi = EvenementConnu(
        id = "evt-lundi-42",
        titre = "Point du lundi",
        debut = Instant.parse("2026-09-14T08:00:00Z"),
        fin = Instant.parse("2026-09-14T08:30:00Z"),
        recurrent = true,
    )

    private fun rappel(
        id: String,
        declencheur: Declencheur,
        critique: Boolean = false,
    ) = Rappel(
        id = RappelId(id),
        elementId = ElementId("c-001:0-5:TACHE"),
        texte = "Parler du budget ($id)",
        declencheur = declencheur,
        critique = critique,
    )

    // -------------------------------------------------------------- déclencheurs

    @Test
    fun `scénario « Rappel lié à une personne » — présenté juste avant la réunion avec elle`() {
        val pourMarc = rappel("r-marc", Declencheur.Personne("Marc"))
        val pourSophie = rappel("r-sophie", Declencheur.Personne("Sophie"))

        val declenches = Rappels.avant(reunionMarc, listOf(pourMarc, pourSophie))

        assertEquals(listOf(pourMarc), declenches)
    }

    @Test
    fun `scénario « Rappel lié à un événement récurrent » — à chaque occurrence`() {
        val avantLePoint = rappel("r-lundi", Declencheur.EvenementRecurrent("point du lundi"))

        assertEquals(listOf(avantLePoint), Rappels.avant(pointDuLundi, listOf(avantLePoint)))
        // L'occurrence suivante, identifiant différent, même titre : toujours accroché.
        val occurrenceSuivante = pointDuLundi.copy(id = "evt-lundi-43")
        assertEquals(listOf(avantLePoint), Rappels.avant(occurrenceSuivante, listOf(avantLePoint)))
        // Un événement ponctuel du même nom ne déclenche pas un récurrent.
        assertTrue(Rappels.avant(reunionMarc, listOf(avantLePoint)).isEmpty())
    }

    @Test
    fun `scénario « Déclencheur de lieu ramené » — vers l'événement d'agenda à ce lieu`() {
        val repli = Declencheurs.ramenerLieu("bureau", listOf(reunionMarc))

        assertEquals(Declencheur.Evenement("evt-001", "Point budget"), repli.declencheur)
        assertTrue(
            repli.explication.contains(Declencheurs.POSITION_INDISPONIBLE),
            "Le repli doit dire que la position n'est pas disponible : ${repli.explication}",
        )
    }

    @Test
    fun `sans événement à ce lieu, le repli est la reprise de l'appareil`() {
        val repli = Declencheurs.ramenerLieu("la gare", listOf(reunionMarc))

        assertEquals(
            Declencheur.Transition(PointDeRupture.REPRISE_APPAREIL),
            repli.declencheur,
        )
        assertTrue(repli.explication.contains(Declencheurs.POSITION_INDISPONIBLE))
    }

    @Test
    fun `scénario « Signal préféré à l'heure » — le plan s'appuie sur la personne`() {
        val element = resolu(engagementPlanning())
        val reunionKarim = reunionMarc.copy(id = "evt-002", participants = listOf("Karim"))

        val plan = Plans.proposer(element, listOf(reunionKarim))

        assertTrue(Plans.reposeSurUnSignal(plan))
        assertTrue(plan.declencheur.contains("Karim"))
        assertTrue(plan.declencheur.contains("Point budget"))
        assertEquals("Envoyer le planning à Karim", plan.action)
    }

    @Test
    fun `l'heure n'est qu'un repli quand aucun signal n'est disponible`() {
        val element = resolu(tacheBudget())

        val plan = Plans.proposer(element, evenements = emptyList())

        assertFalse(Plans.reposeSurUnSignal(plan), "Faute de signal, on retombe sur la date.")
        assertTrue(plan.declencheur.contains(LE_VENDREDI.toString()))
    }

    // --------------------------------------------------------- file d'opportunité

    @Test
    fun `scénario « Report à la fin de la réunion » — et le retard est signalé`() {
        val file = FileOpportunite()
        val r = rappel("r-1", Declencheur.Personne("Marc"))

        val livraison = file.deposer(r, a = Instant.parse("2026-09-08T09:20:00Z"))
        assertTrue(livraison is Livraison.MiseEnFile, "Rien n'interrompt une réunion en cours.")

        val notification = file.vider(PointDeRupture.FIN_DE_REUNION, finReunion)

        assertNotNull(notification)
        assertEquals(listOf(r), notification.rappels)
        assertEquals(listOf(RappelId("r-1")), notification.enRetard)
    }

    @Test
    fun `scénario « Plusieurs rappels simultanés » — une seule notification, groupée`() {
        val file = FileOpportunite()
        val trois = listOf("r-1", "r-2", "r-3").map { rappel(it, Declencheur.Personne("Marc")) }
        trois.forEach { file.deposer(it, debutReunion) }

        val notification = file.vider(PointDeRupture.FIN_DE_REUNION, finReunion)

        assertNotNull(notification)
        assertEquals(3, notification.rappels.size)
        assertEquals("3 choses à voir maintenant", notification.titre)
        assertNull(
            file.vider(PointDeRupture.FIN_DE_REUNION, finReunion),
            "Au plus une notification par point de rupture.",
        )
    }

    @Test
    fun `scénario « Rappel critique immédiat » — la file est court-circuitée`() {
        val file = FileOpportunite()
        val urgent = rappel("r-critique", Declencheur.Personne("Marc"), critique = true)

        val livraison = file.deposer(urgent, debutReunion)

        assertTrue(livraison is Livraison.Immediate)
        assertTrue(file.enAttente().isEmpty(), "Un critique ne passe pas par la file.")
    }

    @Test
    fun `scénario « Plage de silence respectée » — retenu jusqu'à la fin de la plage`() {
        val nuit = PlageSilence(
            debut = Instant.parse("2026-09-08T20:00:00Z"),
            fin = Instant.parse("2026-09-09T06:00:00Z"),
        )
        val file = FileOpportunite(listOf(nuit))
        val r = rappel("r-1", Declencheur.Personne("Marc"))
        file.deposer(r, Instant.parse("2026-09-08T21:00:00Z"))

        assertNull(
            file.vider(PointDeRupture.REPRISE_APPAREIL, Instant.parse("2026-09-08T22:30:00Z")),
            "Aucune notification pendant une plage de silence.",
        )
        assertEquals(listOf(r), file.enAttente(), "Le rappel est retenu, pas perdu.")

        val apres = file.vider(PointDeRupture.REPRISE_APPAREIL, Instant.parse("2026-09-09T07:00:00Z"))
        assertNotNull(apres)
        assertEquals(listOf(r), apres.rappels)
    }

    @Test
    fun `un rappel critique traverse aussi la plage de silence`() {
        val nuit = PlageSilence(
            debut = Instant.parse("2026-09-08T20:00:00Z"),
            fin = Instant.parse("2026-09-09T06:00:00Z"),
        )
        val file = FileOpportunite(listOf(nuit))

        val livraison = file.deposer(
            rappel("r-critique", Declencheur.Personne("Marc"), critique = true),
            Instant.parse("2026-09-08T21:00:00Z"),
        )

        assertTrue(livraison is Livraison.Immediate)
    }

    // ------------------------------------------------------------------ escalade

    @Test
    fun `scénario « Rappel ignoré trois fois » — il remonte en Revue au lieu de se répéter`() {
        val file = FileOpportunite()
        val r = rappel("r-1", Declencheur.Personne("Marc"))
        file.deposer(r, debutReunion)

        assertNull(file.ignorer(r))
        assertNull(file.ignorer(r))
        val escalade = file.ignorer(r)

        assertNotNull(escalade, "Au troisième refus, on cesse de représenter à l'identique.")
        assertEquals(
            listOf(OptionEscalade.REPLANIFIER, OptionEscalade.DELEGUER, OptionEscalade.ABANDONNER),
            escalade.options,
        )
        assertTrue(file.enAttente().isEmpty(), "Il quitte la file d'opportunité.")

        // Redéposé, il n'est plus livré à l'identique : il appartient à la Revue.
        val redepot = file.deposer(r, finReunion)
        assertTrue(redepot is Livraison.Escaladee)
        assertEquals(listOf(escalade), file.escalades())
    }

    // ------------------------------------------------------------------ briefing

    @Test
    fun `scénario « Briefing avant réunion » — les éléments ouverts liés aux participants`() {
        val memoire = Memoire()
        val capture = captureVoiture()
        val engagement = resolu(
            engagementPlanning(),
            Decision(engagementPlanning().id, Verdict.ACCEPTE, debutReunion),
        )
        memoire.observerDepuis(capture, listOf(engagement))

        val reunionKarim = reunionMarc.copy(id = "evt-003", participants = listOf("Karim"))
        val briefing = Briefings.avant(reunionKarim, memoire, listOf(engagement))

        assertNotNull(briefing)
        assertEquals(1, briefing.ouverts.size)
        assertEquals(CaptureId("c-001"), briefing.ouverts.single().captureId)
    }

    @Test
    fun `scénario « Aucun élément à rappeler » — aucun briefing n'est présenté`() {
        val memoire = Memoire()
        memoire.observer(
            TypeEntite.PERSONNE,
            "Sophie",
            Mention(CaptureId("c-001"), debutReunion, "vue à la cantine"),
        )
        val reunionSophie = reunionMarc.copy(id = "evt-004", participants = listOf("Sophie"))

        assertNull(Briefings.avant(reunionSophie, memoire, elements = emptyList()))
    }
}
