package app.zenote.core.store

import app.zenote.core.model.Analyse
import app.zenote.core.model.Capture
import app.zenote.core.model.CaptureId
import app.zenote.core.model.Decision
import app.zenote.core.model.ElementId
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.OrigineAnalyse

/**
 * Le magasin des trois couches. C'est lui qui fait respecter l'invariant central du
 * produit : une ré-analyse ne touche qu'au dérivé.
 *
 * Cette implémentation garde tout en mémoire. La persistance chiffrée (tâche 1.5)
 * viendra derrière la même interface, sans changer ces règles.
 */
class CaptureStore {

    private val sources = LinkedHashMap<CaptureId, Capture>()
    private val analyses = LinkedHashMap<CaptureId, Analyse>()
    private val decisions = LinkedHashMap<ElementId, Decision>()

    // ---------------------------------------------------------------- couche source

    /**
     * Enregistre une capture. Une capture déjà connue n'est jamais remplacée : la
     * source est immuable.
     */
    fun enregistrer(capture: Capture) {
        require(capture.id !in sources) {
            "La capture ${capture.id} existe déjà ; la couche source est immuable."
        }
        sources[capture.id] = capture
    }

    fun capture(id: CaptureId): Capture? = sources[id]

    fun captures(): List<Capture> = sources.values.toList()

    /** Les captures qui n'ont pas encore été analysées : le sas. */
    fun sas(): List<Capture> = sources.values.filter { it.id !in analyses }

    // --------------------------------------------------------------- couche dérivée

    /**
     * Pose ou remplace l'analyse d'une capture.
     *
     * Remplacer est l'opération normale : quand le modèle ou le contexte s'améliorent,
     * on rejoue l'analyse et l'historique en profite. Les décisions humaines déjà
     * prises restent en place et se rattachent aux éléments dont l'identifiant n'a
     * pas bougé.
     *
     * @throws IllegalArgumentException si la capture est inconnue, ou si une analyse
     *   distante est posée sur une capture que l'utilisateur a marquée privée.
     */
    fun analyser(analyse: Analyse) {
        val capture = sources[analyse.captureId]
        requireNotNull(capture) { "Analyse d'une capture inconnue : ${analyse.captureId}." }
        require(capture.transmissible || analyse.origine == OrigineAnalyse.LOCALE) {
            "La capture ${capture.id} est marquée privée : seule une analyse locale est permise."
        }
        analyses[analyse.captureId] = analyse
    }

    fun analyse(id: CaptureId): Analyse? = analyses[id]

    // --------------------------------------------------------------- couche humaine

    /**
     * Enregistre une décision. Elle prime sur le dérivé et survit à toute ré-analyse.
     */
    fun decider(decision: Decision) {
        decisions[decision.elementId] = decision
    }

    fun decision(id: ElementId): Decision? = decisions[id]

    /**
     * Les décisions dont l'élément a disparu de la dernière analyse — parce que le
     * modèle a redécoupé le passage autrement.
     *
     * Elles ne sont jamais supprimées en silence : le travail de l'utilisateur ne se
     * perd pas parce qu'un modèle a changé d'avis. À la Revue de les reproposer.
     */
    fun decisionsOrphelines(): List<Decision> {
        val vivants = analyses.values.flatMap { it.elements }.map { it.id }.toSet()
        return decisions.values.filter { it.elementId !in vivants }
    }

    // ----------------------------------------------------------------- composition

    /** Les éléments d'une capture, dérivé recouvert par les décisions humaines. */
    fun elements(captureId: CaptureId): List<ElementResolu> =
        analyses[captureId]?.elements.orEmpty()
            .map { ElementResolu.de(it, decisions[it.id]) }

    /** Tous les éléments connus, toutes captures confondues. */
    fun tousElements(): List<ElementResolu> =
        analyses.values.flatMap { analyse ->
            analyse.elements.map { ElementResolu.de(it, decisions[it.id]) }
        }
}
