package app.zenote.core.recherche

import app.zenote.core.model.Capture
import app.zenote.core.model.CaptureId
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.TypeElement
import app.zenote.core.model.Verdict
import app.zenote.core.texte.Texte
import kotlinx.datetime.LocalDate

/**
 * La recherche locale : par mots et par personne, sur les données présentes, sans réseau.
 *
 * Deux exigences la contraignent entièrement (spec `recherche`) :
 *
 *  - **Réponse fondée sur la source.** Toute réponse cite les éléments sur lesquels
 *    elle se fonde. Une réponse sans citation n'existe pas ici : la structure
 *    [Reponse] la rend impossible à formuler.
 *  - **Absence assumée.** Quand rien ne correspond, le système le dit. Il ne produit
 *    aucune réponse plausible non fondée — c'est le risque numéro un du produit, une
 *    seule affirmation inventée coûtant plus que dix bonnes réponses.
 */

/**
 * Le texte d'une capture pas encore structurée, réduit à ce que la recherche lit.
 *
 * La recherche n'a besoin ni de l'audio ni du mode de capture. Passer la [Capture]
 * entière obligerait les surfaces à reconstruire un objet du domaine — avec ses
 * invariants, comme « une capture vocale référence son audio » — pour une lecture qui
 * n'en fait rien. Ce type-là, elles peuvent l'écrire honnêtement.
 */
data class TexteSource(
    val captureId: CaptureId,
    val texte: String,
    /** Horodatage lisible, tel qu'il sera montré dans la justification. */
    val quand: String,
    /**
     * Le jour de la capture, tel que l'utilisateur l'a vécu.
     *
     * Il est fourni par la surface et non déduit de [quand] : un horodatage est en
     * temps universel, et une capture de 23 h 30 y tombe le lendemain. Chercher « hier »
     * ne doit pas dépendre du fuseau de la machine qui a écrit la donnée. Absent, la
     * capture est simplement hors de portée d'un repère temporel — jamais rattachée
     * au hasard à une période.
     */
    val jour: LocalDate? = null,
)

/** Ce qu'une capture donne à lire à la recherche. */
fun Capture.texteSource(): TexteSource =
    TexteSource(captureId = id, texte = texteBrut, quand = capturedAt.toString())

/** De quoi une réponse se réclame. Toujours rattachable à une capture. */
data class Citation(
    val captureId: CaptureId,
    val extrait: String,
    /** Pourquoi cet élément est cité — jamais un score. */
    val pourquoi: String,
    val elementId: ElementId? = null,
)

/**
 * Une réponse de recherche.
 *
 * @param enonce ce qui est affiché en tête. Quand [fondee] est `false`, il dit
 *   explicitement qu'il n'y a rien, et [citations] est vide.
 * @param indisponibleHorsLigne les capacités que l'absence de réseau met en pause.
 *   Elles sont signalées, pas masquées.
 * @param nonPrisEnCompte ce que la question demandait et que le produit ne sait pas
 *   faire — par construction, pas par panne. Le dire est la seule façon honnête de
 *   répondre à moitié : sans cette liste, l'utilisateur croit que sa question entière
 *   a été honorée et lit les résultats de travers.
 */
data class Reponse(
    val question: String,
    val enonce: String,
    val citations: List<Citation>,
    val indisponibleHorsLigne: List<String> = emptyList(),
    val nonPrisEnCompte: List<String> = emptyList(),
) {
    val fondee: Boolean get() = citations.isNotEmpty()
}

object RechercheLocale {

    const val ABSENCE: String =
        "Rien à ce sujet dans ce qui a été capturé."

    /** Ce qui demande le réseau, et se signale comme en pause quand il manque. */
    val CAPACITES_RESEAU: List<String> = listOf(
        "analyse des captures pas encore traitées",
        "reformulation de la réponse en langage naturel",
    )

    /** Combien de lignes une réponse cite au maximum. Au-delà, ce n'est plus une réponse. */
    const val MAX_CITATIONS: Int = 10

    /**
     * Recherche par mots, sur les éléments et sur le texte brut de leurs captures.
     *
     * @param reseau `false` en mode avion : les résultats locaux sont rendus, et les
     *   capacités réseau signalées comme temporairement indisponibles.
     */
    fun parMots(
        requete: String,
        elements: List<ElementResolu>,
        captures: List<TexteSource> = emptyList(),
        reseau: Boolean = false,
        max: Int = MAX_CITATIONS,
    ): Reponse {
        val indisponibles = if (reseau) emptyList() else CAPACITES_RESEAU

        val surElements = elements
            .map { it to Texte.recouvrement(requete, it.texte) }
            .filter { it.second > 0.0 }
            .map { (element, note) ->
                note to Citation(
                    captureId = element.captureId,
                    extrait = element.texte,
                    pourquoi = "élément « ${libelle(element.type)} » contenant les mots cherchés",
                    elementId = element.id,
                )
            }

        // Les captures dont aucun élément n'a été retenu, mais dont le texte brut
        // répond : on ne perd pas ce qui n'a pas encore été structuré.
        val dejaCitees = surElements.map { it.second.captureId }.toSet()
        val surCaptures = captures
            .filter { it.captureId !in dejaCitees }
            .map { it to Texte.recouvrement(requete, it.texte) }
            .filter { it.second > 0.0 }
            .map { (source, note) ->
                note to Citation(
                    captureId = source.captureId,
                    extrait = source.texte,
                    pourquoi = "capture du ${source.quand} contenant les mots cherchés",
                )
            }

        val citations = (surElements + surCaptures)
            .sortedWith(
                compareByDescending<Pair<Double, Citation>> { it.first }
                    .thenBy { it.second.captureId.value }
                    .thenBy { it.second.elementId?.value ?: "" },
            )
            .take(max)
            .map { it.second }

        return reponse(requete, citations, indisponibles)
    }

    /**
     * Recherche par question : les mots, plus le repère temporel qu'elle porte.
     *
     * Spec `recherche` — « Repère temporel flou ». « Le truc dont j'ai parlé en voiture
     * la semaine dernière » ne se cherche pas comme « le truc en voiture semaine
     * dernière » : les mots du repère sont retirés avant la recherche, sinon
     * « semaine » ramène tout ce qui parle de semaines.
     *
     * Trois cas :
     *  - aucun repère → la recherche par mots, inchangée ;
     *  - un repère et des mots → les captures de la période qui portent ces mots ;
     *  - un repère seul → tout ce qui a été capturé pendant la période. C'est
     *    exactement ce que quelqu'un veut quand il ne se rappelle que le moment.
     *
     * Le contexte de capture évoqué — « en voiture » — n'est jamais deviné : il est
     * signalé comme non pris en compte. ZeNote n'enregistre pas où l'on était.
     */
    fun parQuestion(
        requete: String,
        elements: List<ElementResolu>,
        captures: List<TexteSource> = emptyList(),
        aujourdhui: LocalDate,
        reseau: Boolean = false,
        max: Int = MAX_CITATIONS,
    ): Reponse {
        val ecarte = listOfNotNull(
            RepereTemporel.contexteEvoque(requete)?.let { RepereTemporel.CONTEXTE_INCONNU },
        )
        val repere = RepereTemporel.lire(requete, aujourdhui)
            ?: return parMots(requete, elements, captures, reseau, max).avec(ecarte)

        val dansLaPeriode = captures.filter { it.jour != null && it.jour in repere.periode }
        val idsPeriode = dansLaPeriode.map { it.captureId }.toSet()
        val elementsPeriode = elements.filter { it.captureId in idsPeriode }
        val reste = RepereTemporel.sansRepere(requete, repere)

        val parLesMots =
            if (reste.isBlank()) null else parMots(reste, elementsPeriode, dansLaPeriode, reseau, max)

        // Quand les mots ne ramènent rien mais que la période, elle, contient quelque
        // chose, on présente la période entière. La question de la spec est « le truc
        // dont j'ai parlé la semaine dernière » : « truc » ne figure dans aucune
        // capture, et c'est bien le point — l'utilisateur ne se rappelle que le moment.
        // Répondre « rien » alors qu'on a huit captures de cette semaine-là serait faux.
        val motsMuets = parLesMots == null || parLesMots.citations.isEmpty()
        val brut =
            if (motsMuets) tout(dansLaPeriode, elementsPeriode, repere.periode, max) else parLesMots!!

        val enonce = when {
            brut.citations.isEmpty() -> "Rien de capturé ${repere.periode.libelle}."
            motsMuets && !reste.isBlank() ->
                "Aucun de ces mots dans les captures de ${repere.periode.libelle} ; " +
                    "voici les ${brut.citations.size} qu'elle contient."
            else -> "${brut.citations.size} élément(s) de ${repere.periode.libelle}, " +
                "chacun rattaché à sa capture source."
        }

        return brut.copy(
            question = requete,
            enonce = enonce,
            indisponibleHorsLigne = if (reseau) emptyList() else CAPACITES_RESEAU,
            nonPrisEnCompte = ecarte,
        )
    }

    /** Tout ce qu'une période contient, quand la question ne porte que le moment. */
    private fun tout(
        captures: List<TexteSource>,
        elements: List<ElementResolu>,
        periode: Periode,
        max: Int,
    ): Reponse {
        val surElements = elements.map { element ->
            Citation(
                captureId = element.captureId,
                extrait = element.texte,
                pourquoi = "${libelle(element.type)} de ${periode.libelle}",
                elementId = element.id,
            )
        }
        val dejaCitees = surElements.map { it.captureId }.toSet()
        val surCaptures = captures
            .filter { it.captureId !in dejaCitees }
            .map {
                Citation(
                    captureId = it.captureId,
                    extrait = it.texte,
                    pourquoi = "capture du ${it.quand}",
                )
            }

        val citations = (surElements + surCaptures)
            .sortedWith(compareBy({ it.captureId.value }, { it.elementId?.value ?: "" }))
            .take(max)
        return reponse("", citations, emptyList())
    }

    private fun Reponse.avec(ecarte: List<String>): Reponse =
        if (ecarte.isEmpty()) this else copy(nonPrisEnCompte = ecarte)

    /**
     * Recherche par personne : ce qui a été promis à quelqu'un, et ce qu'on attend
     * d'elle. Les éléments clos sont rendus aussi, en le disant.
     */
    fun parPersonne(
        personne: String,
        elements: List<ElementResolu>,
        reseau: Boolean = false,
        max: Int = MAX_CITATIONS,
    ): Reponse {
        val indisponibles = if (reseau) emptyList() else CAPACITES_RESEAU

        val citations = elements
            .filter { it.interlocuteur != null && Texte.memeNom(it.interlocuteur, personne) }
            .sortedWith(compareBy({ etatOrdinal(it.verdict) }, { it.id.value }))
            .take(max)
            .map { element ->
                Citation(
                    captureId = element.captureId,
                    extrait = element.texte,
                    pourquoi = "${libelle(element.type)} ${etat(element.verdict)} envers $personne",
                    elementId = element.id,
                )
            }

        return reponse("ce qui est en cours avec $personne", citations, indisponibles)
    }

    private fun reponse(
        question: String,
        citations: List<Citation>,
        indisponibles: List<String>,
    ): Reponse = Reponse(
        question = question,
        enonce = if (citations.isEmpty()) ABSENCE else {
            "${citations.size} élément(s) trouvé(s), chacun rattaché à sa capture source."
        },
        citations = citations,
        indisponibleHorsLigne = indisponibles,
    )

    private fun libelle(type: TypeElement): String = when (type) {
        TypeElement.TACHE -> "tâche"
        TypeElement.ENGAGEMENT -> "engagement"
        TypeElement.ATTENTE -> "attente"
        TypeElement.INFORMATION -> "information"
        TypeElement.DECISION -> "décision"
        TypeElement.IDEE -> "idée"
    }

    private fun etat(verdict: Verdict): String = when (verdict) {
        Verdict.ACCEPTE -> "ouvert"
        Verdict.EN_ATTENTE -> "pas encore passé en Revue"
        Verdict.UN_JOUR -> "clos, classé « un jour »"
        Verdict.REJETE -> "clos"
    }

    /** Les éléments ouverts d'abord ; les clos après, mais rendus. */
    private fun etatOrdinal(verdict: Verdict): Int = when (verdict) {
        Verdict.ACCEPTE -> 0
        Verdict.EN_ATTENTE -> 1
        Verdict.UN_JOUR -> 2
        Verdict.REJETE -> 3
    }
}
