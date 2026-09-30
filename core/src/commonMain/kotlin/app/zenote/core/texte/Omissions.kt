package app.zenote.core.texte

/** Ce que l'élément a laissé de côté. Seule la négation inverse une phrase. */
enum class NatureOmission {
    /** « ne », « pas », « jamais »… : sa perte retourne le sens de la phrase. */
    NEGATION,

    /** Un chiffre, ou un nombre écrit en lettres. */
    NOMBRE,

    /** Un mot à majuscule qui n'ouvre pas la phrase. */
    NOM,
}

/**
 * Une marque de la phrase d'origine qui manque à l'élément.
 *
 * [debutCar] et [finCar] sont des positions dans le texte de la capture — la même
 * référence que l'ancrage —, ce qui permet à l'écran de surligner le mot à sa place
 * dans la phrase entière plutôt que de le recopier.
 */
data class Omission(
    val nature: NatureOmission,
    val mots: String,
    val debutCar: Int,
    val finCar: Int,
)

/** Les bornes de la phrase d'une capture, dans le texte de la capture. */
data class Phrase(val debut: Int, val fin: Int)

/**
 * Ce qu'un élément a perdu de la phrase dont il a été découpé.
 *
 * Un élément est un passage exact de sa capture, mais le découpage se fait sur la
 * ponctuation et sur des charnières orales : « Il ne faut surtout pas, et j'insiste,
 * envoyer le devis » donne le passage « j'insiste, envoyer le devis ». Il est fidèle
 * — chaque mot y est bien dans la capture — et il dit le contraire de ce qui a été
 * dit. La règle d'ancrage ne peut pas le voir : elle vérifie que le passage existe, pas
 * qu'il n'a pas coupé la phrase là où se trouvait la négation.
 *
 * ## Ce qui est signalé
 *
 * Une marque — négation, nombre, nom propre — est une omission si elle est **dans la
 * phrase, hors du passage, et absente du passage** :
 *
 *  - la phrase est l'intervalle de la capture délimité par la ponctuation forte
 *    (`.`, `!`, `?`, `;` et le saut de ligne) qui contient le passage. Une négation
 *    d'une autre phrase n'a rien à voir avec cet élément ;
 *  - une marque déjà présente dans le passage n'est pas perdue, même si elle figure
 *    aussi ailleurs dans la phrase ;
 *  - les listes de négations et de nombres sont celles de [Marques], partagées avec le
 *    nettoyage des disfluences.
 *
 * ## Les limites assumées
 *
 *  - « un » et « une » ne sont pas comptés comme nombres : ce sont d'abord des
 *    articles, et signaler chacun ferait de chaque élément découpé un élément à lire
 *    deux fois.
 *  - Un nom propre est un mot à majuscule qui n'ouvre pas la phrase. Un mot capitalisé
 *    après un deux-points dicté passe pour un nom : c'est un faux positif, et il ne
 *    bloque rien (voir la décision 2 de la change `provenance-deductions`).
 *  - Aucun calcul sur un passage dont les bornes ne tiennent pas dans le texte : on
 *    n'affirme rien d'un élément dont on ne peut pas relire la source.
 */
object Omissions {

    /** La ponctuation qui termine une phrase, comme dans le découpage de la PWA. */
    private const val PONCTUATION_FORTE = ".!?;\n"

    /** « un » et « une » : des articles avant d'être des nombres. */
    private val ARTICLES = setOf("un", "une")

    /**
     * La phrase de [texte] qui contient le passage compris entre [debutCar] (inclus) et
     * [finCar] (exclu).
     *
     * Bornes rognées des espaces. Un passage à cheval sur plusieurs phrases donne
     * l'intervalle qui les couvre toutes.
     */
    fun phraseDe(texte: String, debutCar: Int, finCar: Int): Phrase {
        val debutPassage = debutCar.coerceIn(0, texte.length)
        val finPassage = finCar.coerceIn(debutPassage, texte.length)

        var debut = debutPassage
        while (debut > 0 && texte[debut - 1] !in PONCTUATION_FORTE) debut--

        var fin = finPassage
        // Un passage qui se termine sur sa ponctuation finit la phrase avec elle.
        val termineSurPonctuation = fin > debutPassage && texte[fin - 1] in PONCTUATION_FORTE
        if (!termineSurPonctuation) {
            while (fin < texte.length && texte[fin] !in PONCTUATION_FORTE) fin++
            while (fin < texte.length && texte[fin] in PONCTUATION_FORTE && texte[fin] != '\n') fin++
        }

        while (debut < fin && texte[debut].isWhitespace()) debut++
        while (fin > debut && texte[fin - 1].isWhitespace()) fin--
        return Phrase(debut, fin)
    }

    /**
     * Ce que le passage, de [debutCar] (inclus) à [finCar] (exclu), a perdu de [phrase],
     * dans l'ordre du texte.
     *
     * @param texte le texte de la capture, celui des positions
     * @return vide quand rien n'a été perdu — et le silence est alors la bonne réponse
     */
    fun dans(texte: String, phrase: Phrase, debutCar: Int, finCar: Int): List<Omission> {
        if (debutCar < 0 || finCar > texte.length || debutCar >= finCar) return emptyList()

        val mots = decouper(texte, phrase)
        if (mots.isEmpty()) return emptyList()

        val dansLePassage = mots
            .filter { it.debut >= debutCar && it.fin <= finCar }
            .map { it.forme }
            .toSet()
        val premier = mots.first()

        val omissions = mutableListOf<Omission>()
        for (mot in mots) {
            val horsDuPassage = mot.fin <= debutCar || mot.debut >= finCar
            if (!horsDuPassage || mot.forme in dansLePassage) continue

            val nature = when {
                mot.forme in Marques.NEGATIONS -> NatureOmission.NEGATION
                mot.forme.any { it.isDigit() } ||
                    (mot.forme in Marques.NOMBRES && mot.forme !in ARTICLES) -> NatureOmission.NOMBRE
                mot !== premier && mot.majuscule -> NatureOmission.NOM
                else -> continue
            }
            omissions += Omission(nature, texte.substring(mot.debut, mot.fin), mot.debut, mot.fin)
        }
        return grouperLesNoms(texte, omissions)
    }

    /** Le passage d'un élément, phrase comprise : le raccourci de l'appelant ordinaire. */
    fun dans(texte: String, debutCar: Int, finCar: Int): List<Omission> =
        dans(texte, phraseDe(texte, debutCar, finCar), debutCar, finCar)

    /** Un mot de la phrase, avec sa place et sa forme comparable. */
    private class Mot(val debut: Int, val fin: Int, val forme: String, val majuscule: Boolean)

    private fun decouper(texte: String, phrase: Phrase): List<Mot> {
        val mots = mutableListOf<Mot>()
        var i = phrase.debut
        while (i < phrase.fin) {
            if (!texte[i].isLetterOrDigit()) {
                i++
                continue
            }
            val debut = i
            while (i < phrase.fin && texte[i].isLetterOrDigit()) i++
            mots += Mot(
                debut = debut,
                fin = i,
                forme = Texte.plier(texte.substring(debut, i)),
                majuscule = texte[debut].isUpperCase(),
            )
        }
        return mots
    }

    /**
     * « Marc Dupuis » est un nom, pas deux : deux noms séparés par une simple espace
     * sont rendus d'un seul tenant.
     */
    private fun grouperLesNoms(texte: String, omissions: List<Omission>): List<Omission> {
        val groupees = mutableListOf<Omission>()
        for (omission in omissions) {
            val precedente = groupees.lastOrNull()
            val colle = precedente != null &&
                precedente.nature == NatureOmission.NOM &&
                omission.nature == NatureOmission.NOM &&
                texte.substring(precedente.finCar, omission.debutCar) == " "
            if (colle) {
                groupees[groupees.lastIndex] = precedente!!.copy(
                    mots = texte.substring(precedente.debutCar, omission.finCar),
                    finCar = omission.finCar,
                )
            } else {
                groupees += omission
            }
        }
        return groupees
    }
}
