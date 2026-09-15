package app.zenote.core.recherche

import app.zenote.core.texte.Texte
import kotlinx.datetime.DatePeriod
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.LocalDate
import kotlinx.datetime.isoDayNumber
import kotlinx.datetime.minus
import kotlinx.datetime.plus

/**
 * Le repère temporel flou d'une question.
 *
 * Spec `recherche` — « Repère temporel flou » : l'utilisateur demande « le truc dont
 * j'ai parlé en voiture la semaine dernière ». Il ne donne pas une date, il donne un
 * repère : *la semaine dernière*. Personne ne retient la date d'une note ; on retient
 * à peu près quand.
 *
 * Ce module ne fait qu'une chose, et la fait entièrement hors ligne : transformer ce
 * repère en un intervalle de jours. Ce qu'il ne reconnaît pas, il ne l'invente pas —
 * il rend `null`, et la recherche retombe sur les mots. C'est la même règle que
 * partout ailleurs ici : mieux vaut ne rien affirmer qu'affirmer à peu près.
 */

/** Un intervalle de jours, bornes comprises. */
data class Periode(val du: LocalDate, val au: LocalDate, val libelle: String) {
    init {
        require(du <= au) { "Une période dont le début suit la fin ne désigne aucun jour." }
    }

    operator fun contains(jour: LocalDate): Boolean = jour >= du && jour <= au
}

/**
 * Ce qu'une question porte de temporel.
 *
 * @param expression les mots exacts qui ont servi à la lire, retirés de la requête
 *   avant la recherche par mots : chercher « semaine » dans le texte des captures
 *   ramènerait tout ce qui parle de semaines, ce que l'utilisateur n'a pas demandé.
 */
data class Repere(val periode: Periode, val expression: String)

object RepereTemporel {

    /**
     * Les contextes de capture que la question peut évoquer — « en voiture », « en
     * réunion ». ZeNote ne les connaît pas : l'arbitrage du produit exclut la
     * géolocalisation, et aucun signal d'activité n'est collecté. Ils sont détectés
     * pour une seule raison : le dire. Rendre des résultats en laissant croire que
     * cette moitié de la question a été honorée serait la pire des réponses.
     */
    private val CONTEXTES_DE_CAPTURE: List<String> = listOf(
        "en voiture", "dans le train", "dans l avion", "en marchant", "en reunion",
        "au bureau", "a la maison", "au telephone", "en visio", "dans le metro",
    )

    const val CONTEXTE_INCONNU: String =
        "le contexte de capture (le lieu, l'activité) : ZeNote ne l'enregistre pas — " +
            "aucun signal de position n'est collecté"

    /**
     * La requête réduite à ses mots, apostrophes et traits d'union devenus des espaces.
     *
     * [Texte.mots] ne convient pas ici : il écarte les mots vides, et « il y a trois
     * jours » n'est plus rien une fois « il », « y » et « a » retirés. Un repère se lit
     * sur la phrase entière, pas sur ses mots porteurs.
     */
    private fun aplatir(requete: String): String = " " + Texte.plier(requete)
        .map { if (it.isLetterOrDigit()) it else ' ' }
        .joinToString("")
        .split(' ')
        .filter { it.isNotEmpty() }
        .joinToString(" ") + " "

    /** Le contexte de capture évoqué par la question, s'il y en a un. */
    fun contexteEvoque(requete: String): String? {
        val plie = aplatir(requete)
        return CONTEXTES_DE_CAPTURE.firstOrNull { plie.contains(" $it ") }
    }

    /**
     * Le repère temporel d'une question, ou `null` si elle n'en porte pas.
     *
     * Les formes sont essayées de la plus précise à la plus large, pour que « la
     * semaine dernière » ne soit pas lue comme « dernière » seul.
     */
    fun lire(requete: String, aujourdhui: LocalDate): Repere? {
        val plie = aplatir(requete)
        for ((expression, calcul) in formes) {
            if (plie.contains(" $expression ")) return Repere(calcul(aujourdhui), expression)
        }
        return depuisCompte(plie, aujourdhui)
    }

    /** La requête débarrassée des mots du repère : ce qui reste à chercher. */
    fun sansRepere(requete: String, repere: Repere): String {
        val motsDuRepere = Texte.mots(repere.expression).toSet()
        return Texte.mots(requete).filterNot { it in motsDuRepere }.joinToString(" ")
    }

    // ------------------------------------------------------------------ interne

    private fun jour(date: LocalDate, libelle: String) = Periode(date, date, libelle)

    /** La semaine civile — du lundi au dimanche — contenant [date]. */
    private fun semaineDe(date: LocalDate, libelle: String): Periode {
        val lundi = date.minus(DatePeriod(days = date.dayOfWeek.isoDayNumber - 1))
        return Periode(lundi, lundi.plus(DatePeriod(days = 6)), libelle)
    }

    /** Le mois civil contenant [date]. */
    private fun moisDe(date: LocalDate, libelle: String): Periode {
        val premier = LocalDate(date.year, date.month, 1)
        return Periode(premier, premier.plus(DatePeriod(months = 1)).minus(DatePeriod(days = 1)), libelle)
    }

    /** Le dernier [jourVoulu] strictement antérieur à [date]. */
    private fun dernier(date: LocalDate, jourVoulu: DayOfWeek, libelle: String): Periode {
        var recul = date.dayOfWeek.isoDayNumber - jourVoulu.isoDayNumber
        if (recul <= 0) recul += 7
        return jour(date.minus(DatePeriod(days = recul)), libelle)
    }

    /**
     * Les formes fixes, dans l'ordre d'essai. L'ordre compte : « avant hier » doit
     * être reconnu avant « hier », et « la semaine derniere » avant « la semaine ».
     */
    private val formes: List<Pair<String, (LocalDate) -> Periode>> = listOf(
        "avant hier" to { d -> jour(d.minus(DatePeriod(days = 2)), "avant-hier") },
        "hier" to { d -> jour(d.minus(DatePeriod(days = 1)), "hier") },
        "aujourd hui" to { d -> jour(d, "aujourd'hui") },
        "ce matin" to { d -> jour(d, "aujourd'hui") },
        "cet apres midi" to { d -> jour(d, "aujourd'hui") },

        "semaine derniere" to { d -> semaineDe(d.minus(DatePeriod(days = 7)), "la semaine dernière") },
        "semaine passee" to { d -> semaineDe(d.minus(DatePeriod(days = 7)), "la semaine dernière") },
        "cette semaine" to { d -> semaineDe(d, "cette semaine") },
        "week end dernier" to { d ->
            val samedi = dernier(d, DayOfWeek.SATURDAY, "").du
            Periode(samedi, samedi.plus(DatePeriod(days = 1)), "le week-end dernier")
        },

        "mois dernier" to { d -> moisDe(LocalDate(d.year, d.month, 1).minus(DatePeriod(days = 1)), "le mois dernier") },
        "mois passe" to { d -> moisDe(LocalDate(d.year, d.month, 1).minus(DatePeriod(days = 1)), "le mois dernier") },
        "ce mois ci" to { d -> moisDe(d, "ce mois-ci") },

        "lundi dernier" to { d -> dernier(d, DayOfWeek.MONDAY, "lundi dernier") },
        "mardi dernier" to { d -> dernier(d, DayOfWeek.TUESDAY, "mardi dernier") },
        "mercredi dernier" to { d -> dernier(d, DayOfWeek.WEDNESDAY, "mercredi dernier") },
        "jeudi dernier" to { d -> dernier(d, DayOfWeek.THURSDAY, "jeudi dernier") },
        "vendredi dernier" to { d -> dernier(d, DayOfWeek.FRIDAY, "vendredi dernier") },
        "samedi dernier" to { d -> dernier(d, DayOfWeek.SATURDAY, "samedi dernier") },
        "dimanche dernier" to { d -> dernier(d, DayOfWeek.SUNDAY, "dimanche dernier") },
    )

    private val CHIFFRES: Map<String, Int> = mapOf(
        "un" to 1, "une" to 1, "deux" to 2, "trois" to 3, "quatre" to 4, "cinq" to 5,
        "six" to 6, "sept" to 7, "huit" to 8, "neuf" to 9, "dix" to 10, "quinze" to 15,
    )

    /**
     * « il y a trois jours », « il y a 2 semaines », « il y a un mois ».
     *
     * L'intervalle rendu n'est pas le jour exact mais une fenêtre autour : quelqu'un
     * qui dit « il y a trois jours » ne certifie pas le jour. Une fenêtre d'un jour
     * de part et d'autre rattrape l'approximation sans noyer la réponse.
     */
    private fun depuisCompte(plie: String, aujourdhui: LocalDate): Repere? {
        val marqueurs = listOf("il y a", "ca fait", "il y avait")
        val marqueur = marqueurs.firstOrNull { plie.contains(" $it ") } ?: return null
        val apres = plie.substringAfter(" $marqueur ").trim().split(" ")
        if (apres.size < 2) return null

        val combien = apres[0].toIntOrNull() ?: CHIFFRES[apres[0]] ?: return null
        if (combien <= 0) return null
        val unite = apres[1]

        val (recul, nom) = when {
            unite.startsWith("jour") -> DatePeriod(days = combien) to "jour"
            unite.startsWith("semaine") -> DatePeriod(days = combien * 7) to "semaine"
            unite.startsWith("mois") -> DatePeriod(months = combien) to "mois"
            else -> return null
        }

        val centre = aujourdhui.minus(recul)
        val marge = if (nom == "jour") 1 else 3
        return Repere(
            periode = Periode(
                du = centre.minus(DatePeriod(days = marge)),
                au = minOf(centre.plus(DatePeriod(days = marge)), aujourdhui),
                libelle = "il y a environ $combien $nom" + if (combien > 1 && nom != "mois") "s" else "",
            ),
            expression = "$marqueur ${apres[0]} $unite",
        )
    }
}
