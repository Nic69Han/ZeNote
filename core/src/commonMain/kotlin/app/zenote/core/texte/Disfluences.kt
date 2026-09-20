package app.zenote.core.texte

/**
 * La version lisible d'une transcription : les hésitations en moins, le sens intact.
 *
 * On parle en hésitant, en se reprenant, en répétant. Relu trois jours plus tard,
 * « euh je je dois euh rappeler le couvreur » coûte un effort qu'on n'a pas quand on
 * traite vingt notes d'affilée. La spec `transcription` demande donc une version
 * lisible — mais elle borne l'opération plus fort qu'elle ne la demande : sans
 * modifier le sens, sans ajouter d'information absente, et **sans supprimer de
 * contenu porteur de sens**.
 *
 * ## Le parti pris : timide, et explicitement
 *
 * Entre laisser passer une hésitation et effacer un mot qui comptait, les deux
 * erreurs ne se valent pas. La première se lit ; la seconde ne se voit pas, et fait
 * disparaître un « ne… pas », un nom, un chiffre, sans que personne ne le sache. Ce
 * nettoyeur ne retire donc que ce qu'il reconnaît avec certitude :
 *
 *  - les **bruits de langage** d'une liste fermée, qui ne veulent rien dire tout
 *    seuls (« euh », « hum », « ben »…), y compris allongés ;
 *  - les **répétitions immédiates** d'un mot ou d'un court groupe, à l'identique.
 *
 * Il ne tente ni les faux départs abandonnés en cours de route, ni les tournures
 * d'appui (« du coup », « en fait », « voilà »), qui sont souvent porteuses : « en
 * fait non » n'est pas « non », et « voilà » peut conclure. Ces cas-là demandent de
 * comprendre la phrase, donc un modèle ; ils appartiennent à l'extraction, qui
 * travaille de toute façon sur le brut.
 *
 * ## Ce qu'il ne touche jamais
 *
 * Aucune répétition n'est réduite si le groupe porte un chiffre, une négation ou un
 * mot qui commence par une majuscule. « non non » garde ses deux « non » : c'est
 * peut-être de l'insistance, et se tromper là-dessus inverse une phrase. « Martin
 * Martin » peut être un nom double. Un « 15 15 » peut être un numéro dicté.
 *
 * ## Et le brut reste
 *
 * Cette fonction ne remplace rien : elle rend une vue. La transcription brute est la
 * couche source, immuable, et c'est elle que l'extraction lit — les ancrages des
 * éléments sont des positions dans ce texte-là. Nettoyer avant d'extraire les
 * décalerait silencieusement.
 */
object Disfluences {

    /**
     * Les bruits de langage retirés, sous leur forme pliée et sans allongement.
     *
     * Liste fermée et courte, volontairement : chaque entrée est un mot qui, isolé,
     * ne dit rien. Tout ce qui pourrait dire quelque chose dans un contexte reste.
     */
    private val BRUITS = setOf(
        "euh", "heu", "eh", "hum", "hmm", "mmh", "mm", "hein", "ben", "bah", "beh",
    )

    /** Les mots dont la disparition changerait une phrase en son contraire. */
    private val NEGATIONS = setOf(
        "ne", "n", "pas", "non", "jamais", "rien", "aucun", "aucune", "ni", "sans",
    )

    /** Les nombres écrits en lettres, qu'une réduction de répétition abîmerait. */
    private val NOMBRES = setOf(
        "zero", "un", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit",
        "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
        "vingt", "trente", "quarante", "cinquante", "soixante", "cent", "cents",
        "mille", "million", "millions", "milliard", "milliards", "demi", "quart",
    )

    /** La plus longue répétition qu'on ose réduire : au-delà, ce n'est plus un bégaiement. */
    private const val GROUPE_MAX = 3

    /**
     * La version lisible du texte, hésitations et répétitions immédiates retirées.
     *
     * Rend le texte inchangé s'il n'y a rien à retirer — y compris le même objet de
     * chaîne, ce qui permet à l'appelant de savoir qu'il n'y a pas deux versions à
     * proposer.
     */
    fun lisible(brut: String): String {
        val jetons = decouper(brut)
        if (jetons.isEmpty()) return brut

        val sansBruits = jetons.filterNot { it.estBruit }
        val sansRepetitions = reduireRepetitions(sansBruits)
        if (sansRepetitions.size == jetons.size) return brut

        return recomposer(sansRepetitions)
    }

    /** Vrai si le nettoyage a quelque chose à retirer : inutile de proposer deux vues sinon. */
    fun aQuelqueChoseARetirer(brut: String): Boolean = lisible(brut) != brut

    /**
     * Un mot et ce qui le suit.
     *
     * La ponctuation voyage avec le mot qu'elle suit : réduire « je, je vais » ne doit
     * pas laisser une virgule orpheline devant le verbe.
     */
    private class Jeton(val mot: String, val suite: String) {
        /** La forme comparable : minuscules, accents pliés, ponctuation retirée. */
        val forme: String = Texte.plier(mot).filter { it.isLetterOrDigit() }

        /**
         * Un bruit de langage, et pas un mot qui lui ressemble.
         *
         * La majuscule tranche : « ben » est une hésitation, « Ben » est quelqu'un.
         * Sans cette réserve, un prénom disparaîtrait d'une note sans laisser de
         * trace — le genre d'erreur qu'on ne découvre qu'en cherchant la note.
         */
        val estBruit: Boolean = forme.isNotEmpty() &&
            mot.firstOrNull()?.isUpperCase() != true &&
            estAllongementDeBruit(forme)

        /** Un groupe qui porte ceci ne se réduit jamais : le risque n'est pas symétrique. */
        val intouchable: Boolean =
            mot.firstOrNull()?.isUpperCase() == true ||
                forme.any { it.isDigit() } ||
                forme in NEGATIONS ||
                forme in NOMBRES
    }

    /**
     * Vrai pour « euh » comme pour « euuuuh » : hésiter plus longtemps n'est pas dire
     * autre chose. La forme est réduite en écrasant les lettres répétées, puis
     * comparée à la liste fermée.
     */
    private fun estAllongementDeBruit(forme: String): Boolean {
        if (forme in BRUITS) return true
        val ecrasee = buildString {
            forme.forEach { c -> if (lastOrNull() != c) append(c) }
        }
        return ecrasee in BRUITS
    }

    private fun decouper(texte: String): List<Jeton> {
        val jetons = mutableListOf<Jeton>()
        var i = 0
        while (i < texte.length) {
            if (texte[i].isWhitespace()) {
                i++
                continue
            }
            val debut = i
            while (i < texte.length && !texte[i].isWhitespace()) i++
            val brut = texte.substring(debut, i)
            // La ponctuation de fin reste collée au mot ; le reste est du mot.
            val fin = brut.indexOfLast { it.isLetterOrDigit() } + 1
            jetons += if (fin > 0) {
                Jeton(brut.substring(0, fin), brut.substring(fin))
            } else {
                Jeton(brut, "")
            }
        }
        return jetons
    }

    /**
     * Retire les répétitions immédiates, du plus long groupe au plus court.
     *
     * Du plus long d'abord : « je vais je vais » doit se réduire en « je vais », pas
     * en « je vais je » par une réduction mot à mot qui laisserait un résidu.
     */
    private fun reduireRepetitions(jetons: List<Jeton>): List<Jeton> {
        var courant = jetons
        for (taille in GROUPE_MAX downTo 1) {
            courant = reduireGroupesDe(courant, taille)
        }
        return courant
    }

    private fun reduireGroupesDe(jetons: List<Jeton>, taille: Int): List<Jeton> {
        if (jetons.size < taille * 2) return jetons
        val garde = mutableListOf<Jeton>()
        var i = 0
        while (i < jetons.size) {
            val finGroupe = i + taille
            val finSuivant = finGroupe + taille
            val repetition = finSuivant <= jetons.size &&
                (i until finGroupe).all { jetons[it].forme == jetons[it + taille].forme } &&
                (i until finGroupe).none { jetons[it].forme.isEmpty() || jetons[it].intouchable }
            if (repetition) {
                // On garde la **seconde** occurrence : c'est elle qui porte la
                // ponctuation et la suite de la phrase.
                i += taille
            } else {
                garde += jetons[i]
                i++
            }
        }
        return garde
    }

    private fun recomposer(jetons: List<Jeton>): String =
        jetons.joinToString(" ") { it.mot + it.suite }.trim()
}
