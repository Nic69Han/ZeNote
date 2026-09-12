package app.zenote.core

import app.zenote.core.model.Analyse
import app.zenote.core.model.Audio
import app.zenote.core.model.Capture
import app.zenote.core.model.CaptureId
import app.zenote.core.model.Deduit
import app.zenote.core.model.Decision
import app.zenote.core.model.ElementDerive
import app.zenote.core.model.ElementResolu
import app.zenote.core.model.ModeCapture
import app.zenote.core.model.OrigineAnalyse
import app.zenote.core.model.Passage
import app.zenote.core.model.Plan
import app.zenote.core.model.Poids
import app.zenote.core.model.TypeElement
import kotlinx.datetime.Instant
import kotlinx.datetime.LocalDate

/** La capture d'exemple du dossier de conception : six secondes, deux sujets mêlés. */
const val TEXTE_VOITURE: String =
    "Faut que je vois avec Marc pour le budget avant vendredi, " +
        "et j'ai dit à Karim que je lui envoie le planning."

val LE_MARDI: LocalDate = LocalDate(2026, 9, 8)
val LE_VENDREDI: LocalDate = LocalDate(2026, 9, 11)

fun passage(extrait: String, dans: String = TEXTE_VOITURE): Passage {
    val debut = dans.indexOf(extrait)
    require(debut >= 0) { "Extrait absent du texte de test : « $extrait »" }
    return Passage(debut, debut + extrait.length)
}

fun captureVoiture(
    id: String = "c-001",
    transmissible: Boolean = true,
): Capture = Capture(
    id = CaptureId(id),
    capturedAt = Instant.parse("2026-09-08T06:12:00Z"),
    mode = ModeCapture.VOCALE,
    texteBrut = TEXTE_VOITURE,
    audio = Audio(chemin = "captures/$id.opus", dureeMs = 6_200),
    appareil = "telephone",
    transmissible = transmissible,
)

fun tacheBudget(
    captureId: String = "c-001",
    poids: Poids = Poids.FORT,
    indice: String = "budget arbitré en comité, décision bloquante pour l'équipe",
    echeance: LocalDate? = LE_VENDREDI,
): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.TACHE,
    texte = "Voir le budget avec Marc",
    passage = passage("je vois avec Marc pour le budget avant vendredi"),
    echeance = echeance?.let { Deduit(it, 0.92, "« avant vendredi », capture faite un mardi") },
    poids = Deduit(poids, 0.88, indice),
)

fun engagementPlanning(
    captureId: String = "c-001",
    poids: Poids = Poids.MOYEN,
): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.ENGAGEMENT,
    texte = "Envoyer le planning à Karim",
    passage = passage("j'ai dit à Karim que je lui envoie le planning"),
    poids = Deduit(poids, 0.81, "engagement pris envers Karim"),
    interlocuteur = Deduit("Karim", 0.95, "nommé explicitement"),
)

fun analyseDe(
    capture: Capture,
    vararg elements: ElementDerive,
    origine: OrigineAnalyse = OrigineAnalyse.DISTANTE,
    versionModele: String = "modele-1",
): Analyse = Analyse.de(
    capture = capture,
    origine = origine,
    versionModele = versionModele,
    analyseA = Instant.parse("2026-09-08T18:50:00Z"),
    texteNettoye = capture.texteBrut,
    elements = elements.toList(),
)

// ---------------------------------------------------------------------------------
// Ajouts pour la Revue, les rappels, la mémoire et la recherche.
// ---------------------------------------------------------------------------------

/** Une information : type non actionnable, donc aucun plan à réclamer en Revue. */
fun informationBudget(captureId: String = "c-001"): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.INFORMATION,
    texte = "Le budget est arbitré en comité",
    passage = passage("le budget"),
    poids = Deduit(Poids.MOYEN, 0.9, "cadre les arbitrages de l'équipe"),
)

/** Une décision arrêtée, pour les fiches d'entité et la recherche. */
fun decisionPrestataire(captureId: String = "c-001"): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.DECISION,
    texte = "Prestataire A écarté : délais annoncés intenables",
    passage = passage("Faut que"),
    interlocuteur = Deduit("Karim", 0.95, "nommé explicitement"),
)

/** Une attente envers un tiers : quelqu'un doit quelque chose à l'utilisateur. */
fun attenteRetourKarim(
    captureId: String = "c-001",
    echeance: LocalDate? = null,
): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.ATTENTE,
    texte = "Retour de Karim sur le planning",
    passage = passage("le planning"),
    echeance = echeance?.let { Deduit(it, 0.9, "date annoncée par Karim") },
    interlocuteur = Deduit("Karim", 0.95, "nommé explicitement"),
)

/** Une tâche déjà repartie avec un plan : éligible à l'acceptation groupée. */
fun tachePlanifiee(captureId: String = "c-001"): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.TACHE,
    texte = "Envoyer le planning",
    passage = passage("je lui envoie le planning"),
    poids = Deduit(Poids.MOYEN, 0.85, "attendu par Karim"),
    interlocuteur = Deduit("Karim", 0.95, "nommé explicitement"),
    plan = Deduit(
        Plan("je vois Karim", "je lui donne le planning"),
        0.9,
        "Karim est au point de lundi",
    ),
)

/** Une tâche dont l'échéance est incertaine : elle doit être posée en question. */
fun tacheIncertaine(captureId: String = "c-001"): ElementDerive = ElementDerive(
    captureId = CaptureId(captureId),
    type = TypeElement.TACHE,
    texte = "Relancer sur le budget",
    passage = passage("pour le budget"),
    echeance = Deduit(LE_VENDREDI, 0.4, "« bientôt », expression floue"),
    poids = Deduit(Poids.FAIBLE, 0.8, "relance de courtoisie"),
)

/** La vue résolue d'un dérivé, décision humaine éventuelle appliquée. */
fun resolu(derive: ElementDerive, decision: Decision? = null): ElementResolu =
    ElementResolu.de(derive, decision)
