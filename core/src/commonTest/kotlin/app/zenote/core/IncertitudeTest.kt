package app.zenote.core

import app.zenote.core.api.AncrageJson
import app.zenote.core.api.ElementJson
import app.zenote.core.api.PassageIncertainJson
import app.zenote.core.api.Regles
import app.zenote.core.api.RevueJson
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * Ce qu'on fait d'un passage mal entendu.
 *
 * Spec `transcription` — « Passage inaudible » : un passage de faible confiance est
 * marqué, et aucun élément structuré n'est créé à partir de ce seul passage sans
 * confirmation. La conséquence à éviter est précise : une tâche que personne n'a
 * dite, née d'un mot mal reconnu, acceptée en Revue comme les autres parce que rien
 * ne la distinguait. Une fois acceptée, plus rien ne la rattrape.
 *
 * La lecture retenue est stricte des deux côtés — et les tests le vérifient dans les
 * deux sens, parce que marquer trop est un défaut aussi : une confirmation demandée
 * sur des éléments dont on est sûr s'use jusqu'à ne plus rien vouloir dire.
 */
class IncertitudeTest {

    private val json = Json { ignoreUnknownKeys = true; encodeDefaults = true }

    //                     0123456789...
    private val texte = "rappeler le couvreur et voir pour la salle"
    //                   0       8  11       20 23
    /** « pour la salle » : la fin de la phrase, celle que le micro a mal prise. */
    private val finIncertaine = listOf(PassageIncertainJson(debutCar = 28, finCar = 41))

    private fun element(id: String, debut: Int, fin: Int) = ElementJson(
        id = id,
        captureId = "c-1",
        type = "TACHE",
        texte = texte.substring(debut, fin),
        debutCar = debut,
        finCar = fin,
    )

    private fun ancrer(
        elements: List<ElementJson>,
        incertains: List<PassageIncertainJson> = finIncertaine,
    ): AncrageJson = json.decodeFromString(
        AncrageJson.serializer(),
        Regles.filtrerAncrage(
            texte,
            json.encodeToString(ListSerializer(ElementJson.serializer()), elements),
            json.encodeToString(ListSerializer(PassageIncertainJson.serializer()), incertains),
        ),
    )

    @Test
    fun `un élément né du seul passage mal entendu est marqué`() {
        val retenus = ancrer(listOf(element("e-1", 28, 41))).retenus

        assertEquals(1, retenus.size, "il est retenu, pas jeté : la note existe")
        assertTrue(retenus.single().transcriptionIncertaine)
    }

    @Test
    fun `un élément né d'un passage bien entendu n'est pas marqué`() {
        val retenus = ancrer(listOf(element("e-1", 0, 20))).retenus
        assertFalse(retenus.single().transcriptionIncertaine)
    }

    @Test
    fun `un élément qui déborde sur du bien entendu n'est pas marqué`() {
        // Il ne vient pas que de là : le marquer userait la confirmation pour rien.
        val retenus = ancrer(listOf(element("e-1", 20, 41))).retenus
        assertFalse(retenus.single().transcriptionIncertaine)
    }

    @Test
    fun `sans passage incertain, rien n'est marqué`() {
        val retenus = ancrer(listOf(element("e-1", 28, 41)), incertains = emptyList()).retenus
        assertFalse(retenus.single().transcriptionIncertaine)
    }

    @Test
    fun `le marquage ne dispense pas de l'ancrage`() {
        // Un élément que rien ne rattache au texte reste écarté, incertain ou non :
        // l'ancrage est une condition d'existence, le doute une condition de confiance.
        val horsTexte = element("e-1", 0, 10).copy(debutCar = 5_000, finCar = 5_010)
        val rendu = ancrer(listOf(horsTexte))
        assertEquals(0, rendu.retenus.size)
        assertEquals(1, rendu.ecartes.size)
    }

    @Test
    fun `un élément marqué passe par la confirmation en Revue`() {
        // C'est là que le marquage produit son effet : la Revue le présente comme à
        // confirmer, et l'acceptation groupée n'est plus proposée.
        val marque = ancrer(listOf(element("e-1", 28, 41))).retenus.single()

        val revue = json.decodeFromString(
            RevueJson.serializer(),
            Regles.revue(
                json.encodeToString(ListSerializer(ElementJson.serializer()), listOf(marque)),
                "2026-09-21",
            ),
        )

        val entree = revue.groupes.flatMap { it.entrees }.single { it.element.id == "e-1" }
        assertTrue(entree.aConfirmer, "un élément né d'un passage mal entendu se confirme")
    }

    @Test
    fun `un élément sûr ne demande pas de confirmation`() {
        val sur = ancrer(listOf(element("e-1", 0, 20))).retenus.single()

        val revue = json.decodeFromString(
            RevueJson.serializer(),
            Regles.revue(
                json.encodeToString(ListSerializer(ElementJson.serializer()), listOf(sur)),
                "2026-09-21",
            ),
        )

        assertFalse(
            revue.groupes.flatMap { it.entrees }.single { it.element.id == "e-1" }.aConfirmer,
        )
    }

    @Test
    fun `plusieurs passages incertains se combinent`() {
        val morcele = listOf(
            PassageIncertainJson(debutCar = 28, finCar = 33),
            PassageIncertainJson(debutCar = 33, finCar = 41),
        )
        val retenus = ancrer(listOf(element("e-1", 28, 41)), incertains = morcele).retenus
        assertTrue(retenus.single().transcriptionIncertaine, "deux morceaux couvrent tout l'ancrage")
    }

    @Test
    fun `un trou de certitude au milieu suffit à ne pas marquer`() {
        val troue = listOf(
            PassageIncertainJson(debutCar = 28, finCar = 32),
            PassageIncertainJson(debutCar = 35, finCar = 41),
        )
        val retenus = ancrer(listOf(element("e-1", 28, 41)), incertains = troue).retenus
        assertFalse(retenus.single().transcriptionIncertaine)
    }
}
