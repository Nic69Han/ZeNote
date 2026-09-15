package app.zenote.core.memoire

import app.zenote.core.model.Capture
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.Sphere
import app.zenote.core.texte.Texte

/**
 * Le magasin des entités.
 *
 * Trois règles le gouvernent, toutes tirées de la spec `memoire` :
 *
 *  1. **Création automatique.** Une entité apparaît parce qu'une capture l'a
 *     mentionnée, jamais parce que l'utilisateur l'a saisie.
 *  2. **Pas de doublon.** Une entité déjà connue, sous n'importe quelle casse ou
 *     accentuation, est enrichie et non recréée.
 *  3. **Correction annulable.** Fusionner, renommer, séparer, supprimer se propagent
 *     aux éléments rattachés — et s'annulent, intégralement.
 *
 * L'annulation est faite par instantané complet plutôt que par opération inverse :
 * c'est plus coûteux en mémoire et beaucoup plus difficile à casser. Sur un magasin
 * d'un seul utilisateur, l'arbitrage est évident.
 */

/** Le jeton qui permet de revenir en arrière sur une correction. */
data class Annulation(val jeton: String, val libelle: String)

/** Le résultat d'une correction : ce qu'elle a produit, et de quoi la défaire. */
data class Correction(val annulation: Annulation, val entite: Entite?)

class Memoire {

    private val entites = LinkedHashMap<EntiteId, Entite>()

    /** Quel élément parle de quelles entités. C'est ce qui se propage aux corrections. */
    private val rattachements = LinkedHashMap<ElementId, MutableSet<EntiteId>>()

    private val instantanes = LinkedHashMap<String, Instantane>()
    private var compteurEntite = 0
    private var compteurJeton = 0

    private class Instantane(
        val entites: Map<EntiteId, Entite>,
        val rattachements: Map<ElementId, Set<EntiteId>>,
    )

    // --------------------------------------------------------------------- lecture

    fun entite(id: EntiteId): Entite? = entites[id]

    fun entites(): List<Entite> = entites.values.toList()

    /** Retrouve une entité par son nom ou l'un de ses alias, casse et accents pliés. */
    fun trouver(type: TypeEntite, nom: String): Entite? {
        val cherche = Texte.plier(nom.trim())
        return entites.values.firstOrNull { candidate ->
            candidate.type == type &&
                (Texte.plier(candidate.nom) == cherche ||
                    candidate.alias.any { Texte.plier(it) == cherche })
        }
    }

    fun entitesDe(elementId: ElementId): List<Entite> =
        rattachements[elementId].orEmpty().mapNotNull { entites[it] }.sortedBy { it.id.value }

    fun elementsDe(entiteId: EntiteId): List<ElementId> = rattachements
        .filterValues { entiteId in it }
        .keys
        .sortedBy { it.value }

    // -------------------------------------------------------------------- écriture

    /**
     * Enregistre une mention. Crée l'entité si elle est inconnue, l'enrichit sinon.
     *
     * Une mention identique — même capture, même élément, même extrait — n'est pas
     * ajoutée deux fois : rejouer une analyse ne doit pas gonfler l'historique.
     */
    fun observer(
        type: TypeEntite,
        nom: String,
        mention: Mention,
        sphere: Sphere? = null,
    ): Entite {
        val existante = trouver(type, nom)
        val entite = existante ?: Entite(
            id = EntiteId("ent-${(++compteurEntite).toString().padStart(4, '0')}"),
            type = type,
            nom = nom.trim(),
            sphere = sphere,
        )

        val deja = entite.mentions.any {
            it.captureId == mention.captureId &&
                it.elementId == mention.elementId &&
                it.extrait == mention.extrait
        }
        val enrichie = entite.copy(
            mentions = if (deja) entite.mentions else entite.mentions + mention,
            sphere = entite.sphere ?: sphere,
        )
        entites[enrichie.id] = enrichie
        mention.elementId?.let { rattacher(it, enrichie.id) }
        return enrichie
    }

    fun rattacher(elementId: ElementId, entiteId: EntiteId) {
        require(entiteId in entites) { "Rattachement à une entité inconnue : $entiteId." }
        rattachements.getOrPut(elementId) { linkedSetOf() }.add(entiteId)
    }

    /** Apprend un autre nom pour une entité — surnom, forme abrégée, acronyme. */
    fun apprendreAlias(id: EntiteId, alias: String): Entite {
        val entite = requireNotNull(entites[id]) { "Entité inconnue : $id." }
        val enrichie = entite.copy(alias = entite.alias + alias.trim())
        entites[id] = enrichie
        return enrichie
    }

    /**
     * Alimente la mémoire depuis une capture analysée.
     *
     * Ce que la v1 en tire : les interlocuteurs (personnes), les participants de
     * l'agenda (personnes) et le titre de l'événement quand il y en a un (événement
     * récurrent). Tout le reste attendra que l'extraction sache nommer projets et
     * sujets — rien ici n'est deviné.
     */
    fun observerDepuis(capture: Capture, elements: List<ElementResolu>) {
        elements
            .filter { it.captureId == capture.id }
            .sortedBy { it.id.value }
            .forEach { element ->
                element.interlocuteur?.takeIf { it.isNotBlank() }?.let { qui ->
                    observer(
                        type = TypeEntite.PERSONNE,
                        nom = qui,
                        mention = Mention(capture.id, capture.capturedAt, element.texte, element.id),
                        sphere = element.sphere,
                    )
                }
            }

        capture.agenda?.let { agenda ->
            agenda.participants.sorted().forEach { qui ->
                observer(
                    type = TypeEntite.PERSONNE,
                    nom = qui,
                    mention = Mention(capture.id, capture.capturedAt, agenda.titre ?: qui),
                )
            }
            agenda.titre?.takeIf { it.isNotBlank() }?.let { titre ->
                observer(
                    type = TypeEntite.EVENEMENT_RECURRENT,
                    nom = titre,
                    mention = Mention(capture.id, capture.capturedAt, titre),
                )
            }
        }
    }

    // ------------------------------------------------------------------ correction

    /**
     * Fusionne deux entités désignant la même chose : l'historique est réuni, les
     * éléments rattachés pointent vers celle qu'on garde, et l'ancien nom devient un
     * alias pour que la prochaine mention retombe bien.
     */
    fun fusionner(gardee: EntiteId, absorbee: EntiteId): Correction {
        val a = requireNotNull(entites[gardee]) { "Entité inconnue : $gardee." }
        val b = requireNotNull(entites[absorbee]) { "Entité inconnue : $absorbee." }
        require(gardee != absorbee) { "Fusionner une entité avec elle-même n'a pas de sens." }
        require(a.type == b.type) { "On ne fusionne pas une ${a.type} avec une ${b.type}." }

        val annulation = photographier("fusion de « ${b.nom} » dans « ${a.nom} »")
        val reunie = a.copy(
            alias = a.alias + b.alias + b.nom,
            mentions = (a.mentions + b.mentions).sortedWith(
                compareBy({ it.a }, { it.captureId.value }, { it.extrait }),
            ),
            sphere = a.sphere ?: b.sphere,
        )
        entites[gardee] = reunie
        entites.remove(absorbee)
        rattachements.values.forEach { liens ->
            if (liens.remove(absorbee)) liens.add(gardee)
        }
        return Correction(annulation, reunie)
    }

    fun renommer(id: EntiteId, nouveauNom: String): Correction {
        val entite = requireNotNull(entites[id]) { "Entité inconnue : $id." }
        require(nouveauNom.isNotBlank()) { "Renommer vers un nom vide n'est pas une correction." }

        val annulation = photographier("renommage de « ${entite.nom} » en « $nouveauNom »")
        // L'ancien nom reste en alias : les captures déjà écrites l'emploient encore.
        val renommee = entite.copy(nom = nouveauNom.trim(), alias = entite.alias + entite.nom)
        entites[id] = renommee
        return Correction(annulation, renommee)
    }

    /**
     * Sépare une entité en deux : les éléments désignés partent vers une entité neuve,
     * avec les mentions qui les portent. Le reste ne bouge pas.
     */
    fun separer(
        id: EntiteId,
        nouveauNom: String,
        elementsDeplaces: Set<ElementId>,
    ): Correction {
        val entite = requireNotNull(entites[id]) { "Entité inconnue : $id." }
        require(elementsDeplaces.isNotEmpty()) { "Une séparation sans élément ne sépare rien." }

        val annulation = photographier("séparation de « ${entite.nom} » vers « $nouveauNom »")
        val (partent, restent) = entite.mentions.partition { it.elementId in elementsDeplaces }

        val neuve = Entite(
            id = EntiteId("ent-${(++compteurEntite).toString().padStart(4, '0')}"),
            type = entite.type,
            nom = nouveauNom.trim(),
            mentions = partent,
            sphere = entite.sphere,
        )
        entites[id] = entite.copy(mentions = restent)
        entites[neuve.id] = neuve
        elementsDeplaces.forEach { element ->
            rattachements[element]?.let { liens ->
                if (liens.remove(id)) liens.add(neuve.id)
            }
        }
        return Correction(annulation, neuve)
    }

    /**
     * Supprime une entité et ses rattachements.
     *
     * Les captures et les éléments, eux, ne bougent pas : la couche source est
     * immuable, et supprimer une entité ne supprime pas ce qui l'a fait naître.
     */
    fun supprimer(id: EntiteId): Correction {
        val entite = requireNotNull(entites[id]) { "Entité inconnue : $id." }
        val annulation = photographier("suppression de « ${entite.nom} »")
        entites.remove(id)
        rattachements.values.forEach { it.remove(id) }
        rattachements.entries.removeAll { it.value.isEmpty() }
        return Correction(annulation, null)
    }

    /**
     * Défait une correction, dans l'état exact d'avant.
     *
     * @return `false` si le jeton est inconnu ou déjà consommé.
     */
    fun annuler(annulation: Annulation): Boolean {
        val photo = instantanes.remove(annulation.jeton) ?: return false
        entites.clear()
        entites.putAll(photo.entites)
        rattachements.clear()
        photo.rattachements.forEach { (element, liens) ->
            rattachements[element] = LinkedHashSet(liens)
        }
        return true
    }

    private fun photographier(libelle: String): Annulation {
        val jeton = "ann-${(++compteurJeton).toString().padStart(4, '0')}"
        instantanes[jeton] = Instantane(
            entites = LinkedHashMap(entites),
            rattachements = rattachements.mapValues { LinkedHashSet(it.value) },
        )
        return Annulation(jeton, libelle)
    }
}
