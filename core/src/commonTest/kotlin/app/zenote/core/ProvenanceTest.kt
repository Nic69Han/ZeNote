package app.zenote.core

import app.zenote.core.api.ElementJson
import app.zenote.core.api.OmissionElementJson
import app.zenote.core.api.PropositionJson
import app.zenote.core.api.Regles
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * La provenance, éprouvée depuis l'extérieur : ce qui traverse le JSON.
 *
 * Les règles sont couvertes par `OmissionsTest` et `PriorisationTest`. Ce qui se
 * casse ici est le fil : une omission calculée mais mal encodée, ou une raison
 * scindée en deux dans le domaine et recollée en route, ne protégerait personne.
 */
class ProvenanceTest {

    private val json = Json { ignoreUnknownKeys = true; encodeDefaults = true }

    private fun encoder(elements: List<ElementJson>): String =
        json.encodeToString(ListSerializer(ElementJson.serializer()), elements)

    private val devis = "Il ne faut surtout pas, et j'insiste, envoyer le devis"
    private val passage = "j'insiste, envoyer le devis"

    private fun elementDuDevis(id: String = "e-1", debut: Int = devis.indexOf(passage)) = ElementJson(
        id = id,
        captureId = "c-1",
        type = "TACHE",
        texte = "J'insiste, envoyer le devis",
        debutCar = debut,
        finCar = debut + passage.length,
    )

    private fun propositionsDe(element: ElementJson): PropositionJson =
        json.decodeFromString(
            ListSerializer(PropositionJson.serializer()),
            Regles.maintenant(encoder(listOf(element)), "2026-09-29"),
        ).single()

    @Test
    fun `Regles omissions rend la phrase entière et les mots manquants à leur place`() {
        val rendu = Regles.omissions(devis, encoder(listOf(elementDuDevis())))

        val omission = json.decodeFromString(ListSerializer(OmissionElementJson.serializer()), rendu).single()
        assertEquals("e-1", omission.elementId)
        assertEquals(devis, omission.phrase)
        assertEquals(0, omission.debutPhrase)
        assertEquals(devis.length, omission.finPhrase)
        assertEquals(listOf("NEGATION", "NEGATION"), omission.manques.map { it.nature })
        assertEquals(listOf("ne", "pas"), omission.manques.map { it.mots })
        for (manque in omission.manques) {
            assertEquals(manque.mots, devis.substring(manque.debutCar, manque.finCar))
        }
    }

    @Test
    fun `un élément qui n'a rien perdu ne figure pas dans la réponse`() {
        val entier = elementDuDevis().copy(texte = devis, debutCar = 0, finCar = devis.length)

        assertEquals("[]", Regles.omissions(devis, encoder(listOf(entier))))
    }

    @Test
    fun `un élément dont les bornes dépassent la capture n'est pas évalué`() {
        val ancien = elementDuDevis().copy(debutCar = 10, finCar = 9_000)

        assertEquals("[]", Regles.omissions(devis, encoder(listOf(ancien))))
    }

    @Test
    fun `la raison d'une proposition est rendue en deux morceaux, et raison reste entière`() {
        val proposition = propositionsDe(
            ElementJson(
                id = "e-2",
                captureId = "c-1",
                type = "TACHE",
                texte = "Envoyer le devis à Karim",
                debutCar = 0,
                finCar = 24,
                echeance = "2026-09-30",
                poids = "FORT",
                poidsIndice = "sinon le chantier est bloqué",
                verdict = "ACCEPTE",
            ),
        )

        assertEquals("sinon le chantier est bloqué", proposition.raisonDite)
        assertEquals("échéance demain", proposition.raisonDeduite)
        assertEquals("sinon le chantier est bloqué — échéance demain", proposition.raison)
    }

    @Test
    fun `sans indice de poids, rien n'est présenté comme dit`() {
        val proposition = propositionsDe(
            ElementJson(
                id = "e-3",
                captureId = "c-1",
                type = "TACHE",
                texte = "Envoyer le devis à Karim",
                debutCar = 0,
                finCar = 24,
                verdict = "ACCEPTE",
            ),
        )

        assertNull(proposition.raisonDite)
        assertEquals("sans échéance", proposition.raisonDeduite)
        // La phrase de repli, elle, est écrite par le système et reste dans `raison`.
        assertTrue(proposition.raison.contains("à confirmer en Revue"))
    }
}
