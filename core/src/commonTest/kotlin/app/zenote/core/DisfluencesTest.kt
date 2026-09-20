package app.zenote.core

import app.zenote.core.texte.Disfluences
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Le nettoyage des disfluences, et surtout ce qu'il ne doit jamais emporter.
 *
 * Deux moitiés, et la seconde compte davantage. La première vérifie que les
 * hésitations partent — c'est le service rendu. La seconde vérifie, sur un jeu de
 * captures annotées, que rien de ce qui porte un fait ne disparaît. Une hésitation
 * oubliée se lit et agace ; une négation effacée retourne une phrase, et personne ne
 * s'en aperçoit avant d'avoir agi dessus.
 */
class DisfluencesTest {

    /**
     * Le jeu annoté : ce qui a été dit, et ce qui doit rester lisible.
     *
     * Les phrases sont écrites comme la reconnaissance vocale les rend — en
     * minuscules, sans ponctuation forte — parce que c'est sur celles-là que le
     * nettoyeur travaille réellement.
     */
    private val corpus = listOf(
        "euh rappeler le couvreur" to "rappeler le couvreur",
        "je je dois rappeler le couvreur" to "je dois rappeler le couvreur",
        "euuuuh il faut que je rappelle Karim" to "il faut que je rappelle Karim",
        "je vais je vais envoyer le devis" to "je vais envoyer le devis",
        "hum le budget est à revoir" to "le budget est à revoir",
        "ben voilà c'est fait" to "voilà c'est fait",
        "relancer Karim hein" to "relancer Karim",
        "euh hum euh appeler le notaire" to "appeler le notaire",
        "penser à euh réserver la salle" to "penser à réserver la salle",
        "le le devis du toit avant vendredi" to "le devis du toit avant vendredi",
    )

    /** Ce qui doit traverser le nettoyage intact, et la raison de s'en soucier. */
    private val aPreserver = listOf(
        "ne pas oublier le virement de 1500 euros avant le 15 mars",
        "Karim n'a jamais répondu sur le dossier Martin",
        "surtout ne rien envoyer à Sophie avant vendredi",
        "il n'y a aucun retour de Thomas depuis le 3 avril",
        "non non ce n'est pas la version de Camille",
        "deux devis à 1200 et 1350 euros, aucun signé",
        "le rendez-vous du 12 est déplacé au 19 janvier",
        "sans Marc on ne démarre pas lundi",
    )

    @Test
    fun `les hesitations partent`() {
        for ((dit, attendu) in corpus) {
            assertEquals(attendu, Disfluences.lisible(dit), "nettoyage de « $dit »")
        }
    }

    @Test
    fun `un texte sans hesitation ressort identique`() {
        val propre = "rappeler le couvreur pour le devis du toit avant vendredi"
        assertEquals(propre, Disfluences.lisible(propre))
        assertFalse(Disfluences.aQuelqueChoseARetirer(propre))
        assertTrue(Disfluences.aQuelqueChoseARetirer("euh rappeler le couvreur"))
    }

    @Test
    fun `aucun chiffre ne disparait`() {
        for (phrase in aPreserver) {
            val nettoye = Disfluences.lisible(phrase)
            for (nombre in Regex("\\d+").findAll(phrase).map { it.value }) {
                assertTrue(
                    nombre in nettoye,
                    "le nombre $nombre a disparu de « $phrase » → « $nettoye »",
                )
            }
        }
    }

    @Test
    fun `aucun nom propre ne disparait`() {
        for (phrase in aPreserver) {
            val nettoye = Disfluences.lisible(phrase)
            // Un mot capitalisé en milieu de phrase : c'est un nom, et c'est
            // exactement ce qu'on ne retrouve pas quand il manque.
            for (nom in Regex("(?<=.)\\b[A-Z][a-zé]+").findAll(phrase).map { it.value }) {
                assertTrue(nom in nettoye, "le nom $nom a disparu de « $phrase » → « $nettoye »")
            }
        }
    }

    @Test
    fun `aucune negation ne disparait, ni ne se dedouble`() {
        val negations = listOf("ne", "n'", "pas", "non", "jamais", "rien", "aucun", "sans")
        for (phrase in aPreserver) {
            val nettoye = Disfluences.lisible(phrase)
            for (mot in negations) {
                assertEquals(
                    occurrences(phrase, mot),
                    occurrences(nettoye, mot),
                    "« $mot » a changé de compte dans « $phrase » → « $nettoye »",
                )
            }
        }
    }

    @Test
    fun `aucune date ne disparait`() {
        val calendrier = listOf(
            "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche",
            "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
            "septembre", "octobre", "novembre", "décembre",
        )
        for (phrase in corpus.map { it.second } + aPreserver) {
            val nettoye = Disfluences.lisible(phrase)
            for (jour in calendrier) {
                assertEquals(
                    occurrences(phrase, jour),
                    occurrences(nettoye, jour),
                    "« $jour » a changé de compte dans « $phrase » → « $nettoye »",
                )
            }
        }
    }

    @Test
    fun `une insistance repetee reste, parce qu'elle peut vouloir dire quelque chose`() {
        // « non non » n'est pas un bégaiement, et le réduire dirait autre chose.
        assertEquals("non non ce n'est pas urgent", Disfluences.lisible("non non ce n'est pas urgent"))
        // Un nom doublé peut être un nom double ; un nombre doublé, un numéro dicté.
        assertEquals("prévenir Martin Martin", Disfluences.lisible("prévenir Martin Martin"))
        assertEquals("le code est 15 15", Disfluences.lisible("le code est 15 15"))
    }

    @Test
    fun `rien n'est ajoute`() {
        for (phrase in corpus.map { it.first } + aPreserver) {
            val nettoye = Disfluences.lisible(phrase)
            val motsDits = mots(phrase)
            for (mot in mots(nettoye)) {
                assertTrue(mot in motsDits, "« $mot » n'était pas dans « $phrase »")
            }
        }
    }

    @Test
    fun `un texte vide ou muet ne casse rien`() {
        assertEquals("", Disfluences.lisible(""))
        assertEquals("   ", Disfluences.lisible("   "))
        // Rien que des hésitations : il ne reste rien, et c'est la vérité.
        assertEquals("", Disfluences.lisible("euh euh hum"))
    }

    private fun mots(texte: String): List<String> =
        texte.lowercase().split(Regex("[^\\p{L}\\p{N}]+")).filter { it.isNotEmpty() }

    private fun occurrences(texte: String, mot: String): Int =
        Regex("(?<![\\p{L}])" + Regex.escape(mot) + "(?![\\p{L}])", RegexOption.IGNORE_CASE)
            .findAll(texte)
            .count()
}
