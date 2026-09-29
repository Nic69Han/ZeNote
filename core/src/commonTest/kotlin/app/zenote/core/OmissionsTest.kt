package app.zenote.core

import app.zenote.core.texte.NatureOmission
import app.zenote.core.texte.Omissions
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Ce qu'un élément a perdu de la phrase dont il a été découpé.
 *
 * Spec `provenance` — « Omissions signalées ». Le cas qui a motivé la règle : « Il ne
 * faut surtout pas, et j'insiste, envoyer le devis » se découpe sur la charnière
 * « , et j' », et le second passage est fidèle à la capture tout en disant le
 * contraire. La moitié de ces tests vérifie qu'on le voit ; l'autre moitié, qu'on ne
 * voit rien là où rien n'a été perdu — un signalement qui crie au loup se fait
 * ignorer, et c'est alors la négation perdue qui passe.
 */
class OmissionsTest {

    private val devis = "Il ne faut surtout pas, et j'insiste, envoyer le devis"

    /** Les bornes du passage `extrait` dans `texte` : le découpage les donne à la PWA. */
    private fun bornes(texte: String, extrait: String): Pair<Int, Int> {
        val debut = texte.indexOf(extrait)
        check(debut >= 0) { "« $extrait » n'est pas dans « $texte »" }
        return debut to debut + extrait.length
    }

    private fun omissions(texte: String, extrait: String) =
        bornes(texte, extrait).let { (debut, fin) -> Omissions.dans(texte, debut, fin) }

    @Test
    fun `scénario « Négation perdue au découpage » — ne et pas sont signalés à leur place`() {
        val manques = omissions(devis, "j'insiste, envoyer le devis")

        val negations = manques.filter { it.nature == NatureOmission.NEGATION }
        assertEquals(listOf("ne", "pas"), negations.map { it.mots })
        // Les positions sont celles de la capture : l'écran surligne, il ne recopie pas.
        for (negation in negations) {
            assertEquals(negation.mots, devis.substring(negation.debutCar, negation.finCar))
        }
    }

    @Test
    fun `la phrase de la négation perdue est la capture entière quand rien ne la ponctue`() {
        val (debut, fin) = bornes(devis, "j'insiste, envoyer le devis")

        val phrase = Omissions.phraseDe(devis, debut, fin)

        assertEquals(devis, devis.substring(phrase.debut, phrase.fin))
    }

    @Test
    fun `scénario « Nombre perdu » — trois est signalé, sans être une négation`() {
        val texte = "Il faut relancer les devis, trois devis sont en retard"

        val manques = omissions(texte, "relancer les devis")

        assertEquals(1, manques.size)
        assertEquals(NatureOmission.NOMBRE, manques.single().nature)
        assertEquals("trois", manques.single().mots)
    }

    @Test
    fun `un chiffre perdu est un nombre perdu`() {
        val texte = "Réserver la salle pour 15 personnes, puis appeler le traiteur"

        val manques = omissions(texte, "appeler le traiteur")

        assertEquals(listOf("15"), manques.map { it.mots })
        assertEquals(NatureOmission.NOMBRE, manques.single().nature)
    }

    @Test
    fun `un et une sont des articles, pas des nombres`() {
        val texte = "Il faut un devis, appeler Karim"

        assertTrue(omissions(texte, "appeler Karim").none { it.nature == NatureOmission.NOMBRE })
    }

    @Test
    fun `scénario « Rien de perdu » — toutes les marques sont dans le passage`() {
        val texte = "Je ne dois pas envoyer les trois devis à Karim avant vendredi"

        assertEquals(emptyList(), omissions(texte, texte))
    }

    @Test
    fun `une marque déjà dans le passage n'est pas perdue, même répétée dans la phrase`() {
        val texte = "Ne pas envoyer le devis, et surtout pas avant vendredi"

        // Le passage porte « pas » : la phrase le redit ailleurs, rien n'est perdu de ce côté.
        val manques = omissions(texte, "surtout pas avant vendredi")

        assertTrue(manques.none { it.mots.equals("pas", ignoreCase = true) })
        assertEquals(listOf("Ne"), manques.filter { it.nature == NatureOmission.NEGATION }.map { it.mots })
    }

    @Test
    fun `scénario « Pas de faux signalement hors de la phrase » — une négation voisine n'est pas une omission`() {
        val texte = "Je ne suis pas disponible mardi. Envoyer le devis à Karim."

        val manques = omissions(texte, "Envoyer le devis à Karim.")

        assertEquals(emptyList(), manques)
    }

    @Test
    fun `le saut de ligne borne la phrase comme un point`() {
        val texte = "Ne rien signer\nrelancer le notaire"

        assertEquals(emptyList(), omissions(texte, "relancer le notaire"))
    }

    @Test
    fun `un nom perdu est signalé quand il n'ouvre pas la phrase`() {
        val texte = "Demain, il faut dire à Karim de relancer le fournisseur"

        val manques = omissions(texte, "relancer le fournisseur")

        assertEquals(listOf("Karim"), manques.map { it.mots })
        assertEquals(NatureOmission.NOM, manques.single().nature)
    }

    @Test
    fun `un nom en tête de phrase n'est pas compté`() {
        val texte = "Karim voudrait le devis, envoyer le devis"

        assertEquals(emptyList(), omissions(texte, "envoyer le devis"))
    }

    @Test
    fun `un prénom et un nom perdus ne font qu'une omission`() {
        val texte = "Il faut prévenir Marc Dupuis, relancer le fournisseur"

        val manques = omissions(texte, "relancer le fournisseur")

        assertEquals(listOf("Marc Dupuis"), manques.map { it.mots })
    }

    @Test
    fun `la comparaison plie la casse et les accents`() {
        val texte = "Dire à Éric que non, et prévenir éric"

        // « éric » est dans le passage : « Éric » n'est pas perdu.
        assertTrue(omissions(texte, "prévenir éric").none { it.nature == NatureOmission.NOM })
    }

    @Test
    fun `des bornes qui ne tiennent pas dans le texte ne disent rien`() {
        assertEquals(emptyList(), Omissions.dans("ne pas envoyer", 5, 400))
        assertEquals(emptyList(), Omissions.dans("ne pas envoyer", -3, 4))
        assertEquals(emptyList(), Omissions.dans("ne pas envoyer", 4, 4))
    }

    @Test
    fun `la phrase d'un passage couvre la ponctuation qui la ferme`() {
        val texte = "Première phrase. Ne pas envoyer le devis ! Troisième phrase."
        val (debut, fin) = bornes(texte, "envoyer le devis")

        val phrase = Omissions.phraseDe(texte, debut, fin)

        assertEquals("Ne pas envoyer le devis !", texte.substring(phrase.debut, phrase.fin))
    }
}
