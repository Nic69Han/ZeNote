package app.zenote.core.texte

/**
 * Les mots dont la disparition change le sens d'une phrase.
 *
 * Deux règles du cœur les surveillent, chacune à sa manière : le nettoyage des
 * disfluences ne réduit jamais une répétition qui en porte ([Disfluences]), et le
 * détecteur d'omissions signale ceux qu'un élément a perdus en route ([Omissions]).
 * La liste est écrite ici, une seule fois : deux copies finiraient par diverger, et
 * l'une des deux règles laisserait alors passer ce que l'autre attrape.
 *
 * Toutes les formes sont **pliées** (minuscules, sans accent) : on les compare à
 * `Texte.plier(mot)`.
 */
internal object Marques {

    /** Les mots dont la disparition changerait une phrase en son contraire. */
    val NEGATIONS: Set<String> = setOf(
        "ne", "n", "pas", "non", "jamais", "rien", "aucun", "aucune", "ni", "sans",
    )

    /** Les nombres écrits en lettres. */
    val NOMBRES: Set<String> = setOf(
        "zero", "un", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit",
        "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
        "vingt", "trente", "quarante", "cinquante", "soixante", "cent", "cents",
        "mille", "million", "millions", "milliard", "milliards", "demi", "quart",
    )
}
