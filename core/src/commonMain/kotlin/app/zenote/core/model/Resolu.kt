package app.zenote.core.model

import kotlinx.datetime.LocalDate

/**
 * La composition des trois couches, telle que les écrans la consomment : le dérivé,
 * recouvert par ce que l'humain a décidé.
 *
 * Rien n'est stocké sous cette forme — c'est une vue, recalculée à la demande.
 */
data class ElementResolu(
    val id: ElementId,
    val captureId: CaptureId,
    val type: TypeElement,
    val texte: String,
    val passage: Passage,
    val echeance: LocalDate?,
    val poids: Poids?,
    val interlocuteur: String?,
    val sphere: Sphere?,
    val plan: Plan?,
    val verdict: Verdict,
    val aConfirmer: Boolean,
    val corrigeParHumain: Boolean,
    /**
     * Ce sur quoi le poids se fonde — la conséquence si ce n'est pas fait. C'est ce
     * texte que la vue Maintenant affiche en justification, jamais un score.
     */
    val indicePoids: String?,
    /** Le palier de durée estimé, ou `null` s'il est inconnu. */
    val duree: Duree? = null,
    /**
     * `true` quand la durée est assez sûre pour décider qu'un élément tient dans un
     * créneau : au-dessus du seuil, ou fixée à la main.
     */
    val dureeSure: Boolean = false,
) {
    /**
     * Un élément accepté sans plan ni classement « un jour » est incomplet : il est
     * signalé à la Revue suivante (spec `revue` — « Élément sans plan signalé »).
     */
    val planManquant: Boolean
        get() = verdict == Verdict.ACCEPTE && type.actionnable && plan == null

    companion object {
        fun de(derive: ElementDerive, decision: Decision?): ElementResolu = ElementResolu(
            id = derive.id,
            captureId = derive.captureId,
            type = derive.type,
            texte = derive.texte,
            passage = derive.passage,
            echeance = decision?.echeance ?: derive.echeance?.valeur,
            poids = decision?.poids ?: derive.poids?.valeur,
            interlocuteur = decision?.interlocuteur ?: derive.interlocuteur?.valeur,
            sphere = decision?.sphere ?: derive.sphere?.valeur,
            plan = decision?.plan ?: derive.plan?.valeur,
            verdict = decision?.verdict ?: Verdict.EN_ATTENTE,
            // Un champ corrigé par l'humain n'est plus « à confirmer », quelle qu'ait
            // été la confiance du modèle.
            aConfirmer = derive.aConfirmer && decision == null,
            corrigeParHumain = decision?.corrige ?: false,
            indicePoids = if (decision?.poids != null) {
                "poids fixé à la main"
            } else {
                derive.poids?.indice
            },
            duree = derive.duree?.valeur,
            dureeSure = derive.duree?.sûr ?: false,
        )
    }
}
