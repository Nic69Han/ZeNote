package app.zenote.core

import app.zenote.core.api.Regles
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Change `agenda-local`, tâche 1.1 — la durée estimée voyage dans le contrat sans rien
 * changer à ce qui existait avant elle.
 */
class DureeTest {

    private val texte = "Envoyer le devis à Marc. Préparer le budget du comité."

    private fun element(id: String, extrait: String, extra: String = ""): String {
        val debut = texte.indexOf(extrait)
        return """{"id":"$id","captureId":"c-1","type":"TACHE","texte":"$extrait",""" +
            """"debutCar":$debut,"finCar":${debut + extrait.length},""" +
            """"poids":"FORT","poidsConfiance":0.9,"poidsIndice":"engage un client",""" +
            """"verdict":"ACCEPTE"$extra}"""
    }

    @Test
    fun `un élément ancien, sans durée, se décode et se classe comme avant`() {
        val ancien = "[${element("a", "Envoyer le devis à Marc")}]"
        val avecDuree = "[${element("a", "Envoyer le devis à Marc",
            ""","duree":"COURTE","dureeConfiance":0.8,"dureeIndice":"« envoyer »"""")}]"

        val sans = Regles.maintenant(ancien, "2026-09-21")
        assertTrue(sans.contains("\"elementId\":\"a\""))
        // La durée n'entre pas dans le classement sans contexte d'agenda.
        assertEquals(sans, Regles.maintenant(avecDuree, "2026-09-21"))
    }

    @Test
    fun `la durée traverse l'ancrage avec sa confiance et son indice`() {
        val elements = "[${element("b", "Préparer le budget du comité",
            ""","duree":"LONGUE","dureeConfiance":0.8,"dureeIndice":"« préparer »"""")}]"

        val ancrage = Regles.filtrerAncrage(texte, elements, "[]")

        assertTrue(ancrage.contains("\"duree\":\"LONGUE\""), ancrage)
        assertTrue(ancrage.contains("\"dureeConfiance\":0.8"), ancrage)
        assertTrue(ancrage.contains("« préparer »"), ancrage)
    }

    @Test
    fun `une durée inconnue de ce cœur est traitée comme absente, pas comme une erreur`() {
        val elements = "[${element("c", "Envoyer le devis à Marc", ""","duree":"ETERNITE"""")}]"
        assertTrue(Regles.maintenant(elements, "2026-09-21").contains("\"elementId\":\"c\""))
    }
}
