package app.zenote.core.rappels

import kotlinx.datetime.Instant

/**
 * La file d'opportunité : une notification par point de rupture, jamais à l'heure due.
 *
 * `design.md` — Décision 9. Notifier à l'heure due reproduit le défaut des rappels
 * existants : arriver au pire moment et être balayé. Les rappels non critiques
 * attendent donc une frontière d'activité, et repartent groupés en **une seule**
 * notification.
 *
 * Trois exceptions et une escalade :
 *  - un rappel critique court-circuite la file, plage de silence comprise ;
 *  - une plage de silence retient tout le reste jusqu'à sa fin ;
 *  - un rappel ignoré [IGNORES_AVANT_ESCALADE] fois cesse d'être représenté à
 *    l'identique et remonte en Revue.
 */

/** Une plage pendant laquelle rien ne sonne, hormis le critique. */
data class PlageSilence(val debut: Instant, val fin: Instant) {
    init { require(fin > debut) { "Une plage de silence finit après avoir commencé." } }

    fun contient(instant: Instant): Boolean = instant >= debut && instant < fin
}

/** Ce que la file répond quand un rappel devient actionnable. */
sealed interface Livraison {
    /** Présenté sans attendre : un critique. */
    data class Immediate(val rappel: Rappel, val motif: String) : Livraison

    /** Mis en file, en attente du prochain point de rupture. */
    data class MiseEnFile(val rappel: Rappel, val motif: String) : Livraison

    /** Refusé : ce rappel a été escaladé, il ne se représente plus à l'identique. */
    data class Escaladee(val escalade: Escalade) : Livraison
}

/**
 * L'unique notification émise à un point de rupture.
 *
 * @param enRetard les rappels devenus actionnables avant ce point : leur retard est
 *   signalé, sans en faire un reproche.
 */
data class Notification(
    val point: PointDeRupture,
    val emiseA: Instant,
    val rappels: List<Rappel>,
    val enRetard: List<RappelId>,
) {
    init { require(rappels.isNotEmpty()) { "Une notification sans rappel n'a rien à dire." } }

    val titre: String
        get() = if (rappels.size == 1) rappels.single().texte
        else "${rappels.size} choses à voir maintenant"
}

/** Ce que la Revue propose d'un rappel qui ne passe pas. */
enum class OptionEscalade { REPLANIFIER, DELEGUER, ABANDONNER }

data class Escalade(
    val rappel: Rappel,
    val motif: String,
    val options: List<OptionEscalade> = listOf(
        OptionEscalade.REPLANIFIER,
        OptionEscalade.DELEGUER,
        OptionEscalade.ABANDONNER,
    ),
)

class FileOpportunite(private val silences: List<PlageSilence> = emptyList()) {

    companion object {
        /** Au-delà, répéter à l'identique ne sert plus qu'à user l'utilisateur. */
        const val IGNORES_AVANT_ESCALADE: Int = 3
    }

    /** Les rappels en attente, avec le moment où ils sont devenus actionnables. */
    private val enFile = LinkedHashMap<RappelId, Pair<Rappel, Instant>>()
    private val ignores = LinkedHashMap<RappelId, Int>()
    private val escalades = LinkedHashMap<RappelId, Escalade>()

    /** Dépose un rappel devenu actionnable. */
    fun deposer(rappel: Rappel, a: Instant): Livraison {
        escalades[rappel.id]?.let { return Livraison.Escaladee(it) }

        if (rappel.critique) {
            return Livraison.Immediate(
                rappel = rappel,
                motif = "rappel critique : présenté sans attendre un point de rupture",
            )
        }

        enFile[rappel.id] = rappel to a
        return Livraison.MiseEnFile(
            rappel = rappel,
            motif = "en attente du prochain point de rupture",
        )
    }

    /**
     * Vide la file à un point de rupture, en **une** notification.
     *
     * @return `null` si la file est vide, ou si l'instant tombe dans une plage de
     *   silence — les rappels y sont alors retenus jusqu'à sa fin.
     */
    fun vider(point: PointDeRupture, a: Instant): Notification? {
        if (silences.any { it.contient(a) }) return null
        if (enFile.isEmpty()) return null

        val livres = enFile.values.toList()
        enFile.clear()

        return Notification(
            point = point,
            emiseA = a,
            rappels = livres.map { it.first }.sortedBy { it.id.value },
            enRetard = livres.filter { it.second < a }
                .map { it.first.id }
                .sortedBy { it.value },
        )
    }

    /**
     * Enregistre qu'un rappel a été ignoré.
     *
     * @return l'escalade quand le seuil est atteint : le rappel quitte alors la file et
     *   n'y revient plus. La Revue en fait ce qu'elle veut — replanifier, déléguer,
     *   abandonner.
     */
    fun ignorer(rappel: Rappel): Escalade? {
        escalades[rappel.id]?.let { return it }

        val compte = (ignores[rappel.id] ?: 0) + 1
        ignores[rappel.id] = compte
        if (compte < IGNORES_AVANT_ESCALADE) return null

        enFile.remove(rappel.id)
        val escalade = Escalade(
            rappel = rappel,
            motif = "ignoré $compte fois : ce rappel ne se représente plus à l'identique",
        )
        escalades[rappel.id] = escalade
        return escalade
    }

    fun foisIgnore(id: RappelId): Int = ignores[id] ?: 0

    /** Ce qui attend un point de rupture, dans l'ordre de dépôt. */
    fun enAttente(): List<Rappel> = enFile.values.map { it.first }

    /** Ce que la Revue doit reprendre, ordre stable. */
    fun escalades(): List<Escalade> = escalades.values.sortedBy { it.rappel.id.value }
}
