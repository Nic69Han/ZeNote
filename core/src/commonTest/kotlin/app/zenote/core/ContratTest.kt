package app.zenote.core

import app.zenote.core.api.RelanceJson
import app.zenote.core.api.Regles
import app.zenote.core.api.RevueJson
import app.zenote.core.model.Decision
import app.zenote.core.model.ElementDerive
import app.zenote.core.model.Verdict
import app.zenote.core.revue.Arriere
import kotlinx.datetime.Instant
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Le contrat de fil, éprouvé depuis l'extérieur.
 *
 * Les règles elles-mêmes sont déjà couvertes par les tests de domaine. Ce qui est en
 * jeu ici est différent et se casse autrement : une décision prise dans le cœur
 * n'arrive à l'écran que si elle traverse le JSON. Une réduction de Revue calculée
 * mais non transmise ne protège personne.
 */
class ContratTest {

    private val json = Json { ignoreUnknownKeys = true }
    private val jour = LE_MARDI.toString()

    /** Un élément en attente, dérivé de la capture d'exemple. */
    private fun enAttente(derive: ElementDerive) = resolu(derive)

    private fun encoder(elements: List<app.zenote.core.model.ElementResolu>): String {
        // On passe par le même chemin que la surface : un tableau d'ElementJson.
        val dtos = elements.map {
            app.zenote.core.api.ElementJson(
                id = it.id.value,
                captureId = it.captureId.value,
                type = it.type.name,
                texte = it.texte,
                debutCar = it.passage.debutCar,
                finCar = it.passage.finCar,
                echeance = it.echeance?.toString(),
                poids = it.poids?.name,
                interlocuteur = it.interlocuteur,
                verdict = it.verdict.name,
            )
        }
        return json.encodeToString(ListSerializer(app.zenote.core.api.ElementJson.serializer()), dtos)
    }

    @Test
    fun `une file qui tient en une Revue n'est pas annoncée comme réduite`() {
        val rendu = Regles.revue(encoder(listOf(enAttente(tacheBudget()))), jour)
        val revue = json.decodeFromString(RevueJson.serializer(), rendu)

        assertEquals(1, revue.total)
        assertTrue(!revue.reduite)
        assertEquals(0, revue.demeurentEnFile)
        assertEquals("", revue.motifReduction)
    }

    @Test
    fun `un arriéré volumineux arrive réduit à l'écran, et le reste est compté`() {
        val debordement = Arriere.CHARGE_TRAITABLE + 5
        val file = (1..debordement).map {
            enAttente(tacheBudget(captureId = "c-" + it.toString().padStart(3, '0')))
        }

        val revue = json.decodeFromString(RevueJson.serializer(), Regles.revue(encoder(file), jour))
        val presentees = revue.groupes.sumOf { it.entrees.size }

        assertEquals(debordement, revue.total, "le total dit la file entière, pas ce qui est montré")
        assertEquals(Arriere.CHARGE_TRAITABLE, presentees)
        assertTrue(revue.reduite)
        assertEquals(5, revue.demeurentEnFile)
        // Le motif est celui du cœur : l'écran n'a pas à inventer sa propre phrase.
        assertTrue(revue.motifReduction.isNotBlank())
        assertTrue(revue.motifReduction.contains("demeure"), revue.motifReduction)
    }

    @Test
    fun `une attente acceptée et sans nouvelle remonte en relance, avec ses options`() {
        val attente = attenteRetourKarim(echeance = LE_MARDI)
        val accepte = resolu(
            attente,
            Decision(attente.id, Verdict.ACCEPTE, Instant.parse("2026-09-01T09:00:00Z")),
        )

        // Trois semaines plus tard, sans nouvelle : le délai habituel est dépassé.
        val rendu = Regles.relances(encoder(listOf(accepte)), "2026-09-29", "[]", "{}")
        val relances = json.decodeFromString(ListSerializer(RelanceJson.serializer()), rendu)

        assertEquals(1, relances.size)
        assertEquals(attente.id.value, relances[0].elementId)
        assertEquals("ATTENTE", relances[0].type)
        assertEquals("Karim", relances[0].interlocuteur)
        assertTrue(relances[0].motif.isNotBlank())
        assertEquals(listOf("RELANCER", "PROLONGER", "CLORE"), relances[0].options)
    }

    @Test
    fun `une attente encore dans le délai ne remonte pas`() {
        val attente = attenteRetourKarim(echeance = LE_MARDI)
        val accepte = resolu(
            attente,
            Decision(attente.id, Verdict.ACCEPTE, Instant.parse("2026-09-01T09:00:00Z")),
        )

        val rendu = Regles.relances(encoder(listOf(accepte)), LE_MARDI.toString(), "[]", "{}")
        assertEquals("[]", rendu)
    }

    @Test
    fun `un élément pas encore décidé n'est jamais relancé`() {
        val rendu = Regles.relances(
            encoder(listOf(enAttente(attenteRetourKarim(echeance = LE_MARDI)))),
            "2026-09-29",
            "[]",
            "{}",
        )
        assertEquals("[]", rendu, "relancer sur ce qui n'a pas été décidé serait du bruit")
    }

    @Test
    fun `le motif ne prête ni un genre à la personne ni une mesure au délai par défaut`() {
        val attente = attenteRetourKarim(echeance = LE_MARDI)
        val accepte = resolu(
            attente,
            Decision(attente.id, Verdict.ACCEPTE, Instant.parse("2026-09-01T09:00:00Z")),
        )
        val elements = encoder(listOf(accepte))

        val parDefaut = json.decodeFromString(
            ListSerializer(RelanceJson.serializer()),
            Regles.relances(elements, "2026-09-29", "[]", "{}"),
        )[0].motif
        val observe = json.decodeFromString(
            ListSerializer(RelanceJson.serializer()),
            Regles.relances(elements, "2026-09-29", "[]", """{"Karim":2}"""),
        )[0].motif

        // Un prénom ne dit pas le genre de la personne : la phrase n'en suppose aucun.
        for (motif in listOf(parDefaut, observe)) {
            assertTrue(!motif.contains(" elle"), motif)
            assertTrue(!motif.contains(" lui"), motif)
        }
        // Et un repli n'est pas une observation.
        assertTrue(parDefaut.contains("par défaut"), parDefaut)
        assertTrue(!parDefaut.contains("observé"), parDefaut)
        assertTrue(observe.contains("habituel pour Karim"), observe)
    }

    @Test
    fun `le délai observé pour une personne l'emporte sur le délai par défaut`() {
        val attente = attenteRetourKarim(echeance = LE_MARDI)
        val accepte = resolu(
            attente,
            Decision(attente.id, Verdict.ACCEPTE, Instant.parse("2026-09-01T09:00:00Z")),
        )
        val elements = encoder(listOf(accepte))
        // Quatre jours après l'échéance : sous le délai par défaut de sept jours,
        // mais au-delà d'un délai observé de deux jours pour Karim.
        val quatreJoursApres = "2026-09-12"

        val sansObservation = Regles.relances(elements, quatreJoursApres, "[]", "{}")
        val avecObservation = Regles.relances(elements, quatreJoursApres, "[]", """{"Karim":2}""")

        assertEquals("[]", sansObservation)
        assertTrue(avecObservation.contains(attente.id.value), avecObservation)
    }
}
