package app.zenote.core.rappels

import app.zenote.core.texte.Texte
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime
import kotlin.time.Duration.Companion.minutes

/**
 * Les signaux d'un plan que l'agenda permet de reconnaître.
 *
 * Spec `agenda` — « Déclencheurs reconnus dans l'agenda » ; change `agenda-local`,
 * décision 6. Deux formes :
 * - « je vois *X* » : le premier événement après la pose du plan dont *X* est
 *   participant ou que le titre nomme ;
 * - « avant *T* », « au prochain *T* » : le premier événement dont le titre porte *T*.
 *   Un jour de la semaine (« le point du lundi ») se lit sur la date de l'événement
 *   plutôt que dans son titre.
 *
 * Le rappel devient actionnable [AVANCE_MINUTES] avant le début : juste avant la
 * réunion, pas pendant.
 *
 * Ce qui ne se reconnaît pas n'est pas deviné. Le signal reste substitué à la reprise
 * de l'appareil, avec une explication qui dit ce qui a manqué.
 */
object SignauxAgenda {

    /** Le rappel arrive ce temps avant le début de l'événement. */
    const val AVANCE_MINUTES: Int = 5

    const val SIGNAL_HORS_AGENDA: String =
        "ZeNote ne sait pas reconnaître ce signal dans l'agenda, et la position n'est pas collectée."

    private val PERSONNE = Regex("""\bje (?:vois|verrai|croise|retrouve) (.+)$""")
    private val EVENEMENT = Regex("""\b(?:avant|au debut d[eu]|au prochain|a la prochaine)\s+(.+)$""")

    /** Des signaux qui désignent un moment libre, pas un événement de l'agenda. */
    private val PAS_UN_EVENEMENT = setOf("creneau", "premier")

    private val JOURS = mapOf(
        "lundi" to DayOfWeek.MONDAY,
        "mardi" to DayOfWeek.TUESDAY,
        "mercredi" to DayOfWeek.WEDNESDAY,
        "jeudi" to DayOfWeek.THURSDAY,
        "vendredi" to DayOfWeek.FRIDAY,
        "samedi" to DayOfWeek.SATURDAY,
        "dimanche" to DayOfWeek.SUNDAY,
    )

    /**
     * L'échéance d'un signal lu dans l'agenda, ou `null` si ce signal n'a pas la forme
     * d'un signal d'agenda — l'appelant garde alors sa propre substitution.
     *
     * @param poseLe seul un événement postérieur à la pose du plan peut le déclencher.
     */
    fun reconnaitre(
        declencheur: String,
        poseLe: LocalDateTime,
        evenements: List<EvenementConnu>,
    ): Echeance? {
        // `plier` garde la longueur : les positions trouvées dans le texte plié
        // désignent les mêmes caractères dans le texte d'origine.
        val plie = Texte.plier(declencheur)
        val apres = poseLe.toInstant(TimeZone.UTC)
        val candidats = evenements.filter { it.debut > apres }.sortedWith(compareBy({ it.debut }, { it.id }))

        PERSONNE.find(plie)?.let { m ->
            val nom = finDe(declencheur, m.groupValues[1])
            return personne(nom, candidats, evenements)
        }
        EVENEMENT.find(plie)?.let { m ->
            val titre = finDe(declencheur, m.groupValues[1])
            // « au prochain point » vise une fois ; « avant le point du lundi », chaque fois.
            return evenement(titre, candidats, unique = plie.contains("prochain"))
        }
        return null
    }

    private fun personne(
        nom: String,
        candidats: List<EvenementConnu>,
        tous: List<EvenementConnu>,
    ): Echeance {
        val cherche = Texte.mots(nom)
        if (cherche.isEmpty()) return Echeance.Substituee(SIGNAL_HORS_AGENDA)

        if (cherche.size == 1) {
            // Un prénom seul que portent deux personnes de l'agenda n'accroche rien :
            // choisir en silence, c'est se tromper une fois sur deux sans le dire.
            val homonymes = tous.flatMap { e -> e.participants.map { nomLisible(it) } }
                .filter { Texte.mots(it).size >= 2 && Texte.mots(it).first() == cherche.first() }
                .distinctBy { Texte.plier(it) }
            if (homonymes.size >= 2) {
                return Echeance.Substituee(
                    "Deux personnes s'appellent $nom dans l'agenda (${homonymes.sorted().joinToString(", ")}) : " +
                        "précisez le nom dans le plan. En attendant, ramené à la reprise de l'appareil.",
                )
            }
        }

        val trouve = candidats.firstOrNull { e ->
            e.participants.any { concerne(Texte.mots(nomLisible(it)), cherche) } ||
                Texte.mots(e.titre).containsAll(cherche)
        } ?: return Echeance.Substituee(
            "Aucun événement de l'agenda ne concerne $nom : ramené à la reprise de l'appareil.",
        )
        return avant(trouve)
    }

    private fun evenement(titre: String, candidats: List<EvenementConnu>, unique: Boolean): Echeance? {
        val mots = Texte.mots(titre)
        if (mots.isEmpty() || mots.any { it in PAS_UN_EVENEMENT }) return null

        val jour = mots.firstNotNullOfOrNull { JOURS[it] }
        val cherche = mots.filter { it !in JOURS }
        val correspondants = candidats.filter { e ->
            (cherche.isEmpty() || Texte.mots(e.titre).containsAll(cherche)) &&
                (jour == null || e.debut.toLocalDateTime(TimeZone.UTC).dayOfWeek == jour)
        }
        val trouve = correspondants.firstOrNull() ?: return Echeance.Substituee(
            "Aucun événement « ${sansArticle(titre)} » dans l'agenda connu : ramené à la reprise de l'appareil.",
        )
        // Change `rappels-recurrents` : un événement récurrent ramène le rappel avant
        // chacune de ses occurrences connues, tant que le plan n'est pas clos.
        if (trouve.recurrent && !unique) {
            val occurrences = correspondants.filter { it.recurrent && Texte.memeNom(it.titre, trouve.titre) }
            return Echeance.Recurrente(occurrences.map { fenetre(it) })
        }
        return avant(trouve)
    }

    /**
     * La fenêtre d'une occurrence : dès [AVANCE_MINUTES] avant le début, et jusqu'à
     * [SORTIE_MINUTES] après la fin — pendant la réunion le rappel est retenu, et c'est à
     * sa sortie qu'il est livré, en retard. Au-delà, il attend l'occurrence suivante.
     */
    private fun fenetre(e: EvenementConnu): Echeance.Fenetre = Echeance.Fenetre(
        quand = (e.debut - AVANCE_MINUTES.minutes).toLocalDateTime(TimeZone.UTC),
        enRetardApres = e.debut.toLocalDateTime(TimeZone.UTC),
        fin = (e.fin + SORTIE_MINUTES.minutes).toLocalDateTime(TimeZone.UTC),
    )

    /** Le temps, après la fin d'une occurrence, pendant lequel on en sort encore. */
    const val SORTIE_MINUTES: Int = 30

    /**
     * Le rappel se présente [AVANCE_MINUTES] avant le début. Il n'est en retard qu'une
     * fois la réunion commencée : arriver quatre minutes avant n'est pas un retard.
     */
    private fun avant(e: EvenementConnu): Echeance.Observable = Echeance.Observable(
        quand = (e.debut - AVANCE_MINUTES.minutes).toLocalDateTime(TimeZone.UTC),
        enRetardApres = e.debut.toLocalDateTime(TimeZone.UTC),
    )

    /**
     * Un participant concerne-t-il le nom cherché ?
     *
     * Nom complet : tous ses mots doivent y être. Prénom seul : le premier mot du
     * participant, ou le participant réduit à ce prénom.
     */
    private fun concerne(participant: List<String>, cherche: List<String>): Boolean = when {
        participant.isEmpty() -> false
        cherche.size >= 2 -> participant.containsAll(cherche)
        else -> participant.first() == cherche.first()
    }

    /** « marc.dupont@exemple.fr » se lit « marc dupont » ; un nom se lit tel quel. */
    private fun nomLisible(participant: String): String =
        if ('@' in participant) {
            participant.substringBefore('@').replace('.', ' ').replace('_', ' ').replace('-', ' ')
        } else {
            participant
        }

    private val ARTICLE = Regex("""^(?:le|la|les|l['’]|du|des|de la)\s*""", RegexOption.IGNORE_CASE)

    /** « le comité de direction » se dit « comité de direction » entre guillemets. */
    private fun sansArticle(titre: String): String = titre.replaceFirst(ARTICLE, "").ifBlank { titre }

    /**
     * Le passage d'origine qui correspond à la fin pliée [plie] : les deux motifs
     * s'ancrent en fin de texte, et le pliage garde la longueur.
     */
    private fun finDe(texte: String, plie: String): String =
        texte.substring(texte.length - plie.length).trim().trimEnd('.', ',', ';', '!', '?').trim()
}
