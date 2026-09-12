/**
 * Repérage des dates relatives en français.
 *
 * PROVISOIRE au même titre que le reste de `analyse/` : cet analyseur local sera
 * remplacé par un appel à un modèle. Il reste volontairement honnête — chaque
 * déduction porte l'indice qui la fonde et une confiance basse quand elle devine.
 */

export interface EcheanceDeduite {
  /** Date ISO `AAAA-MM-JJ`. */
  date: string;
  confiance: number;
  /** Le bout de phrase qui a produit la date, affichable tel quel. */
  indice: string;
}

const JOUR_MS = 86_400_000;

/** Date ISO d'un `Date` lu en UTC. */
export function isoDe(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function decaler(isoJour: string, jours: number): string {
  return isoDe(new Date(Date.parse(`${isoJour}T00:00:00Z`) + jours * JOUR_MS));
}

/** 0 = dimanche, 1 = lundi… conformément à `Date#getUTCDay`. */
export function jourSemaine(isoJour: string): number {
  return new Date(`${isoJour}T00:00:00Z`).getUTCDay();
}

/** Prochaine occurrence d'un jour de semaine, strictement après `aujourdhui`. */
export function prochainJour(aujourdhui: string, cible: number): string {
  const ecart = (cible - jourSemaine(aujourdhui) + 7) % 7;
  return decaler(aujourdhui, ecart === 0 ? 7 : ecart);
}

const JOURS: Record<string, number> = {
  dimanche: 0,
  lundi: 1,
  mardi: 2,
  mercredi: 3,
  jeudi: 4,
  vendredi: 5,
  samedi: 6,
};

const MOIS: Record<string, number> = {
  janvier: 1,
  février: 2,
  fevrier: 2,
  mars: 3,
  avril: 4,
  mai: 5,
  juin: 6,
  juillet: 7,
  août: 8,
  aout: 8,
  septembre: 9,
  octobre: 10,
  novembre: 11,
  décembre: 12,
  decembre: 12,
};

const CHIFFRES: Record<string, number> = {
  un: 1,
  une: 1,
  deux: 2,
  trois: 3,
  quatre: 4,
  cinq: 5,
  six: 6,
  sept: 7,
  huit: 8,
  neuf: 9,
  dix: 10,
  quinze: 15,
};

/** Enlève les accents et passe en minuscules, pour comparer sans piège. */
export function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

/** Dernier jour du mois d'une date ISO. */
function finDeMois(isoJour: string): string {
  const d = new Date(`${isoJour}T00:00:00Z`);
  return isoDe(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)));
}

/**
 * Première échéance repérée dans un passage, ou `null`.
 *
 * L'ordre des règles va du plus explicite au plus vague : une date écrite vaut mieux
 * qu'un « la semaine prochaine », et la confiance rendue le dit.
 */
export function repererEcheance(passage: string, aujourdhui: string): EcheanceDeduite | null {
  const t = normaliser(passage);

  // 1. Date explicite : « le 12 mars », « le 3 avril ».
  const explicite = /\ble\s+(\d{1,2})(?:er)?\s+([a-z]+)/.exec(t);
  if (explicite && MOIS[explicite[2]]) {
    const jour = Number(explicite[1]);
    const mois = MOIS[explicite[2]];
    const annee = new Date(`${aujourdhui}T00:00:00Z`).getUTCFullYear();
    let date = `${annee}-${String(mois).padStart(2, '0')}-${String(jour).padStart(2, '0')}`;
    // Une date déjà passée dans l'année désigne l'année suivante.
    if (date < aujourdhui) date = `${annee + 1}${date.slice(4)}`;
    return { date, confiance: 0.95, indice: explicite[0] };
  }

  // 2. Repères absolus du calendrier parlé.
  if (/\bapres[- ]demain\b/.test(t)) {
    return { date: decaler(aujourdhui, 2), confiance: 0.9, indice: 'après-demain' };
  }
  if (/\bdemain\b/.test(t)) {
    return { date: decaler(aujourdhui, 1), confiance: 0.9, indice: 'demain' };
  }
  if (/\b(aujourd'?hui|ce soir|ce matin|cet apres-midi|dans la journee)\b/.test(t)) {
    const m = /\b(aujourd'?hui|ce soir|ce matin|cet apres-midi|dans la journee)\b/.exec(t)!;
    return { date: aujourdhui, confiance: 0.9, indice: m[1] };
  }

  // 3. Durée relative : « dans trois jours », « dans deux semaines ».
  const dans = /\bdans\s+([a-z]+|\d+)\s+(jours?|semaines?|mois)\b/.exec(t);
  if (dans) {
    const n = /^\d+$/.test(dans[1]) ? Number(dans[1]) : CHIFFRES[dans[1]];
    if (n) {
      const jours = dans[2].startsWith('semaine') ? n * 7 : dans[2] === 'mois' ? n * 30 : n;
      return { date: decaler(aujourdhui, jours), confiance: 0.85, indice: dans[0] };
    }
  }

  // 4. Jour de semaine nommé. Une préposition d'échéance (« avant », « d'ici »,
  //    « pour ») rend la déduction nettement plus sûre qu'un jour cité seul.
  const jour = /\b(avant|d'?ici|pour|au plus tard)?\s*(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\b/.exec(t);
  if (jour) {
    const prefixe = jour[1];
    return {
      date: prochainJour(aujourdhui, JOURS[jour[2]]),
      confiance: prefixe ? 0.8 : 0.6,
      indice: jour[0].trim(),
    };
  }

  // 5. Bornes de période.
  if (/\b(fin de (la )?semaine|avant la fin de la semaine)\b/.test(t)) {
    return { date: prochainJour(aujourdhui, 5), confiance: 0.7, indice: 'fin de semaine' };
  }
  if (/\bce week-?end\b/.test(t)) {
    return { date: prochainJour(aujourdhui, 6), confiance: 0.8, indice: 'ce week-end' };
  }
  if (/\b(la )?semaine prochaine\b/.test(t)) {
    return { date: prochainJour(aujourdhui, 1), confiance: 0.6, indice: 'la semaine prochaine' };
  }
  if (/\bfin (du )?mois\b/.test(t)) {
    return { date: finDeMois(aujourdhui), confiance: 0.7, indice: 'fin du mois' };
  }
  if (/\b(le )?mois prochain\b/.test(t)) {
    return { date: decaler(aujourdhui, 30), confiance: 0.5, indice: 'le mois prochain' };
  }

  return null;
}
