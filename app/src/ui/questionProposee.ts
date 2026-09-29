/**
 * La question qu'un écran dépose pour l'écran Recherche, le temps d'un changement d'écran.
 *
 * Spec `suggestions-proactives` — « Utilisée ou ignorée : un signal honnête ». Le lien
 * « Voir » du passé pertinent mène à la Recherche avec la note citée. Le mécanisme le
 * plus simple qui tienne : la Recherche sait déjà retrouver une note à partir de ses
 * mots, donc « Voir » lui dépose l'extrait comme question, et elle la pose d'elle-même
 * à l'ouverture. Ni identifiant dans l'adresse, ni écran de plus : la question est
 * consommée à la première lecture, en mémoire, et ne survit pas au rechargement.
 */

let enAttente: string | null = null;

/** Dépose la question que la Recherche posera à sa prochaine ouverture. */
export function proposerQuestion(question: string): void {
  enAttente = question.trim() === '' ? null : question.trim();
}

/** Rend la question déposée, une seule fois. */
export function prendreQuestionProposee(): string | null {
  const question = enAttente;
  enAttente = null;
  return question;
}
