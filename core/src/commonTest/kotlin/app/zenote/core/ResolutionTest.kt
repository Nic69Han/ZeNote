package app.zenote.core

import app.zenote.core.memoire.Memoire
import app.zenote.core.memoire.Mention
import app.zenote.core.memoire.ResolutionReferences
import app.zenote.core.memoire.TypeEntite
import app.zenote.core.model.CaptureId
import kotlinx.datetime.Instant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * La résolution des références implicites.
 *
 * Spec `memoire` — « Résolution des références implicites », trois scénarios. Ce qui
 * se joue ici n'est pas la justesse moyenne mais l'asymétrie des erreurs.
 *
 * Choisir silencieusement le mauvais « Marc » attache une tâche à la mauvaise
 * personne. Rien ne le signale, et l'erreur se découvre au moment où l'on appelle
 * quelqu'un qui ne sait pas de quoi on parle. Poser une question de trop coûte deux
 * secondes en Revue. Les tests vérifient donc surtout ce que la résolution **refuse**
 * de trancher.
 */
class ResolutionTest {

    private val maintenant = Instant.parse("2026-09-22T09:00:00Z")

    private fun jours(n: Long): Instant = maintenant.minus(kotlin.time.Duration.parse("${n}d"))

    /** Une mémoire avec deux Marc : l'un sur le budget, l'autre sur le déménagement. */
    private fun deuxMarc(): Memoire {
        val memoire = Memoire()
        memoire.observer(
            TypeEntite.PERSONNE,
            "Marc Dupuis",
            Mention(CaptureId("c-1"), jours(2), "voir le budget du projet Atlas avec Marc"),
        )
        memoire.observer(
            TypeEntite.PERSONNE,
            "Marc Lefevre",
            Mention(CaptureId("c-2"), jours(40), "organiser le déménagement des bureaux avec Marc"),
        )
        return memoire
    }

    @Test
    fun `un prenom est resolu par le sujet dont on parle`() {
        val resolution = ResolutionReferences.resoudre(
            memoire = deuxMarc(),
            reference = "Marc",
            maintenant = maintenant,
            contexte = "voir avec Marc pour le budget",
            types = setOf(TypeEntite.PERSONNE),
        )

        assertNotNull(resolution.retenu, "un candidat se détache nettement")
        assertEquals("Marc Dupuis", resolution.retenu!!.entite.nom)
    }

    @Test
    fun `et la resolution dit sur quoi elle s'appuie`() {
        val resolution = ResolutionReferences.resoudre(
            deuxMarc(),
            "Marc",
            maintenant,
            "voir avec Marc pour le budget",
            setOf(TypeEntite.PERSONNE),
        )

        val appui = resolution.retenu!!.appui
        assertTrue(appui.contains("nommée"), "l'appui dit que le nom correspond : $appui")
        assertTrue(appui.contains("budget"), "l'appui cite ce sur quoi on la connaît : $appui")
    }

    @Test
    fun `les candidats sont classes, pas seulement filtres`() {
        val resolution = ResolutionReferences.resoudre(
            deuxMarc(),
            "Marc",
            maintenant,
            "voir avec Marc pour le budget",
            setOf(TypeEntite.PERSONNE),
        )

        assertEquals(2, resolution.candidats.size, "les deux Marc restent proposables")
        assertEquals("Marc Dupuis", resolution.candidats.first().entite.nom)
        assertTrue(resolution.candidats[0].score > resolution.candidats[1].score)
    }

    @Test
    fun `deux candidats a egalite posent une question au lieu de trancher`() {
        // Le cas dangereux : rien dans la capture ne départage. Un choix « sûr »
        // décidé par un millième d'écart est un choix pris au hasard.
        val memoire = Memoire()
        memoire.observer(
            TypeEntite.PERSONNE,
            "Marc Dupuis",
            Mention(CaptureId("c-1"), jours(3), "point hebdo avec Marc"),
        )
        memoire.observer(
            TypeEntite.PERSONNE,
            "Marc Lefevre",
            Mention(CaptureId("c-2"), jours(3), "point hebdo avec Marc"),
        )

        val resolution = ResolutionReferences.resoudre(
            memoire,
            "Marc",
            maintenant,
            "rappeler Marc",
            setOf(TypeEntite.PERSONNE),
        )

        assertNull(resolution.retenu, "aucun ne l'emporte")
        assertTrue(resolution.aQuestionner)
        assertEquals(2, resolution.candidats.size)
    }

    @Test
    fun `un seul candidat connu est retenu sans question`() {
        val memoire = Memoire()
        memoire.observer(
            TypeEntite.PERSONNE,
            "Sophie",
            Mention(CaptureId("c-1"), jours(1), "envoyer le chiffrage à Sophie"),
        )

        val resolution = ResolutionReferences.resoudre(
            memoire,
            "Sophie",
            maintenant,
            "relancer Sophie sur le chiffrage",
            setOf(TypeEntite.PERSONNE),
        )

        assertNotNull(resolution.retenu)
        assertFalse(resolution.aQuestionner)
    }

    @Test
    fun `une reference inconnue ne fabrique pas de candidat`() {
        val resolution = ResolutionReferences.resoudre(
            deuxMarc(),
            "Gwendoline",
            maintenant,
            "rappeler Gwendoline",
            setOf(TypeEntite.PERSONNE),
        )

        assertTrue(resolution.inconnue, "la mémoire ne connaît personne de ce nom")
        assertFalse(resolution.aQuestionner, "il n'y a rien à demander : il n'y a pas de choix")
        assertNull(resolution.retenu)
    }

    @Test
    fun `chercher une personne ne remonte pas un projet`() {
        val memoire = Memoire()
        memoire.observer(
            TypeEntite.PROJET,
            "Marc",
            Mention(CaptureId("c-1"), jours(1), "le projet Marc avance"),
        )

        val resolution = ResolutionReferences.resoudre(
            memoire,
            "Marc",
            maintenant,
            "voir avec Marc",
            types = setOf(TypeEntite.PERSONNE),
        )

        assertTrue(resolution.inconnue)
    }

    @Test
    fun `une reference a un sujet se resout comme un nom`() {
        // « le budget » : la référence n'est pas une personne, et la mémoire en garde
        // le fil comme du reste.
        val memoire = Memoire()
        memoire.observer(
            TypeEntite.SUJET,
            "budget",
            Mention(CaptureId("c-1"), jours(1), "le budget du projet Atlas est à revoir"),
        )

        val resolution = ResolutionReferences.resoudre(
            memoire,
            "budget",
            maintenant,
            "reprendre le budget",
            setOf(TypeEntite.SUJET),
        )

        assertNotNull(resolution.retenu)
        assertEquals("budget", resolution.retenu!!.entite.nom)
    }

    @Test
    fun `le classement est stable, deux appels donnent le meme ordre`() {
        val memoire = deuxMarc()
        val premier = ResolutionReferences.resoudre(memoire, "Marc", maintenant, "rappeler Marc")
        val second = ResolutionReferences.resoudre(memoire, "Marc", maintenant, "rappeler Marc")
        assertEquals(
            premier.candidats.map { it.entite.id },
            second.candidats.map { it.entite.id },
        )
    }

    @Test
    fun `une entite ancienne perd du terrain sans disparaitre`() {
        val memoire = deuxMarc()
        val resolution = ResolutionReferences.resoudre(
            memoire,
            "Marc",
            maintenant,
            "rappeler Marc",
            setOf(TypeEntite.PERSONNE),
        )

        // Marc Lefevre n'a pas été cité depuis quarante jours : il passe derrière,
        // mais reste proposable — c'est peut-être bien de lui qu'il s'agit.
        assertEquals("Marc Dupuis", resolution.candidats.first().entite.nom)
        assertTrue(resolution.candidats.any { it.entite.nom == "Marc Lefevre" })
    }
}
