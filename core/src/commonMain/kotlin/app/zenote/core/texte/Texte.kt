package app.zenote.core.texte

/**
 * Le peu de traitement de texte dont le cœur a besoin : plier les accents et la casse,
 * puis découper en mots comparables.
 *
 * C'est volontairement rudimentaire. Une lemmatisation sérieuse appartient au modèle,
 * pas au socle : ici on cherche seulement à ce que « Réunion », « reunion » et
 * « RÉUNION » soient le même mot, pour que la déduplication d'entités et la recherche
 * hors ligne restent prévisibles et testables sans dépendance externe.
 */
internal object Texte {

    private const val ACCENTUEES = "àáâãäåçèéêëìíîïñòóôõöùúûüýÿ"
    private const val PLIEES = "aaaaaaceeeeiiiinooooouuuuyy"

    /**
     * Les mots trop fréquents pour discriminer quoi que ce soit. Liste courte et
     * assumée : en retirer trop ferait disparaître des requêtes légitimes comme
     * « le truc dont on a parlé ».
     */
    private val VIDES = setOf(
        "le", "la", "les", "un", "une", "des", "du", "de", "au", "aux", "et", "ou",
        "a", "à", "en", "dans", "sur", "pour", "par", "avec", "que", "qui", "quoi",
        "ce", "cet", "cette", "ces", "se", "sa", "son", "ses", "mon", "ma", "mes",
        "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles",
        "est", "sont", "ai", "as", "ont", "etait", "ete", "pas", "ne", "plus",
    )

    /** Minuscules, accents pliés : la forme sous laquelle deux mots se comparent. */
    fun plier(texte: String): String = buildString(texte.length) {
        texte.lowercase().forEach { c ->
            val i = ACCENTUEES.indexOf(c)
            append(if (i >= 0) PLIEES[i] else c)
        }
    }

    /** Découpe en mots pliés, sans les mots vides ni les fragments d'un seul caractère. */
    fun mots(texte: String): List<String> = plier(texte)
        .map { if (it.isLetterOrDigit()) it else ' ' }
        .joinToString("")
        .split(' ')
        .filter { it.length > 1 && it !in VIDES }

    /** Les mots distincts, pour comparer deux textes sans se laisser porter par une répétition. */
    fun sac(texte: String): Set<String> = mots(texte).toSet()

    /**
     * Part des mots de la requête que le texte porte réellement, entre 0 et 1.
     *
     * On rapporte au nombre de mots de la **requête**, pas à l'union : une capture
     * longue ne doit pas être pénalisée pour avoir dit autre chose en plus.
     */
    fun recouvrement(requete: String, texte: String): Double {
        val demandes = sac(requete)
        if (demandes.isEmpty()) return 0.0
        val presents = sac(texte)
        return demandes.count { it in presents }.toDouble() / demandes.size
    }

    /** `true` si les deux désignent la même chose une fois la casse et les accents pliés. */
    fun memeNom(a: String, b: String): Boolean = plier(a.trim()) == plier(b.trim())
}
