/**
 * Le lecteur d'agenda iCalendar (`.ics`), entièrement sur l'appareil.
 *
 * Change `agenda-local`, décisions 1 et 2 ; spec `agenda` — « Import d'un agenda sur
 * l'appareil ». Il ne lit que ce qu'il comprend, et dit le reste :
 * - `VEVENT` : `UID`, `SUMMARY`, `DTSTART`, `DTEND` ou `DURATION`, `LOCATION`,
 *   `ATTENDEE`, `ORGANIZER`, `RRULE`, `EXDATE`, `RECURRENCE-ID`, `STATUS` ;
 * - récurrences `DAILY`, `WEEKLY` (`BYDAY`) et `MONTHLY` (`BYMONTHDAY`, ou `BYDAY` avec
 *   rang), avec `INTERVAL`, `COUNT` et `UNTIL` ;
 * - fuseaux : temps universel (`…Z`), `TZID` IANA ou Windows (table ci-dessous),
 *   heure flottante prise dans le fuseau de l'appareil.
 *
 * Une règle de récurrence non comprise laisse l'occurrence d'origine seule, en le
 * comptant. Une date qui ne se résout pas écarte l'événement : une réunion décalée
 * d'une heure est pire qu'une réunion absente.
 *
 * Les occurrences sortent développées, en heure locale de l'appareil
 * (`AAAA-MM-JJTHH:MM`) : le cœur n'a ni fuseau à connaître ni règle à rejouer.
 */

import type { EvenementJson } from '../core/regles.ts';

/** Jours couverts avant la date d'import : la réunion de la veille peut encore se vider. */
export const HORIZON_AVANT_JOURS = 1;
/** Jours couverts après la date d'import. */
export const HORIZON_APRES_JOURS = 60;
/** Garde-fou contre une règle qui ne s'arrêterait jamais. */
const OCCURRENCES_MAX_PAR_EVENEMENT = 1000;

export interface ResultatLecture {
  /** Les occurrences comprises dans l'horizon, dans l'ordre chronologique. */
  evenements: EvenementJson[];
  /** Combien d'événements le fichier contenait (hors exceptions d'une série). */
  lus: number;
  /** Ce qui a été écarté, par raison. */
  ecartes: { raison: string; nombre: number }[];
  /** Combien d'événements récurrents ont été importés sans leurs répétitions. */
  recurrencesNonComprises: number;
  /** Bornes de l'horizon, en heure locale `AAAA-MM-JJTHH:MM`. */
  couvreDepuis: string;
  couvreJusqua: string;
}

/** Le fichier n'est pas un agenda iCalendar. */
export class AgendaIllisible extends Error {
  constructor(message = 'Ce fichier n’est pas un agenda iCalendar (.ics).') {
    super(message);
    this.name = 'AgendaIllisible';
  }
}

/**
 * Les fuseaux qu'Outlook nomme à la manière de Windows, vers leur nom IANA. Seuls les
 * plus courants : un nom absent de cette table écarte l'événement, en le disant.
 */
const FUSEAUX_WINDOWS: Record<string, string> = {
  'Romance Standard Time': 'Europe/Paris',
  'W. Europe Standard Time': 'Europe/Berlin',
  'Central Europe Standard Time': 'Europe/Budapest',
  'Central European Standard Time': 'Europe/Warsaw',
  'GMT Standard Time': 'Europe/London',
  'Greenwich Standard Time': 'Atlantic/Reykjavik',
  'E. Europe Standard Time': 'Europe/Chisinau',
  'FLE Standard Time': 'Europe/Kiev',
  'GTB Standard Time': 'Europe/Bucharest',
  'Morocco Standard Time': 'Africa/Casablanca',
  'W. Central Africa Standard Time': 'Africa/Lagos',
  'Eastern Standard Time': 'America/New_York',
  'Central Standard Time': 'America/Chicago',
  'Mountain Standard Time': 'America/Denver',
  'Pacific Standard Time': 'America/Los_Angeles',
  'Atlantic Standard Time': 'America/Halifax',
  'Canada Central Standard Time': 'America/Regina',
  'Tokyo Standard Time': 'Asia/Tokyo',
  'China Standard Time': 'Asia/Shanghai',
  'India Standard Time': 'Asia/Kolkata',
  'Arabian Standard Time': 'Asia/Dubai',
  'AUS Eastern Standard Time': 'Australia/Sydney',
  'Reunion Standard Time': 'Indian/Reunion',
  'SA Pacific Standard Time': 'America/Bogota',
  UTC: 'UTC',
};

const RAISON_FUSEAU = 'fuseau horaire non reconnu';
const RAISON_DATE = 'date illisible';
const RAISON_ANNULE = 'annulé';

// ---------------------------------------------------------------- lignes

interface Propriete {
  nom: string;
  params: Record<string, string>;
  valeur: string;
}

/** Recolle les lignes pliées : une ligne qui commence par une espace continue la précédente. */
function deplier(texte: string): string[] {
  const lignes: string[] = [];
  for (const brute of texte.replace(/\r\n?/g, '\n').split('\n')) {
    if ((brute.startsWith(' ') || brute.startsWith('\t')) && lignes.length > 0) {
      lignes[lignes.length - 1] += brute.slice(1);
    } else if (brute !== '') {
      lignes.push(brute);
    }
  }
  return lignes;
}

/** `NOM;PARAM=val;PARAM2="v:al":valeur` — les deux-points entre guillemets ne coupent pas. */
function lirePropriete(ligne: string): Propriete | null {
  let entreGuillemets = false;
  let coupe = -1;
  for (let i = 0; i < ligne.length; i++) {
    const c = ligne[i];
    if (c === '"') entreGuillemets = !entreGuillemets;
    else if (c === ':' && !entreGuillemets) {
      coupe = i;
      break;
    }
  }
  if (coupe < 0) return null;
  const [nom, ...params] = ligne.slice(0, coupe).split(';');
  const lus: Record<string, string> = {};
  for (const p of params) {
    const egal = p.indexOf('=');
    if (egal > 0) lus[p.slice(0, egal).toUpperCase()] = p.slice(egal + 1).replace(/^"|"$/g, '');
  }
  return { nom: nom.toUpperCase(), params: lus, valeur: ligne.slice(coupe + 1) };
}

function texteEchappe(valeur: string): string {
  return valeur.replace(/\\n/gi, '\n').replace(/\\([,;\\])/g, '$1').trim();
}

// ---------------------------------------------------------------- temps

/** Une heure murale, sans fuseau. Les calculs de calendrier se font dessus. */
interface Murale {
  a: number;
  mo: number;
  j: number;
  h: number;
  mi: number;
}

const MS_JOUR = 86_400_000;

function versUtcNaif(m: Murale): number {
  return Date.UTC(m.a, m.mo - 1, m.j, m.h, m.mi);
}

function depuisUtcNaif(t: number): Murale {
  const d = new Date(t);
  return { a: d.getUTCFullYear(), mo: d.getUTCMonth() + 1, j: d.getUTCDate(), h: d.getUTCHours(), mi: d.getUTCMinutes() };
}

const formateurs = new Map<string, Intl.DateTimeFormat>();

function formateur(fuseau: string): Intl.DateTimeFormat {
  let f = formateurs.get(fuseau);
  if (!f) {
    f = new Intl.DateTimeFormat('en-US', {
      timeZone: fuseau,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    formateurs.set(fuseau, f);
  }
  return f;
}

/** L'heure murale d'un instant dans un fuseau. */
function muraleDans(fuseau: string, instant: number): Murale {
  const parts = Object.fromEntries(formateur(fuseau).formatToParts(new Date(instant)).map((p) => [p.type, p.value]));
  return { a: +parts.year, mo: +parts.month, j: +parts.day, h: +parts.hour, mi: +parts.minute };
}

/**
 * L'instant d'une heure murale dans un fuseau. Deux passes suffisent, y compris aux
 * changements d'heure : on corrige le décalage de l'instant trouvé.
 */
function instantDans(fuseau: string, m: Murale): number {
  const naif = versUtcNaif(m);
  const decalage1 = versUtcNaif(muraleDans(fuseau, naif)) - naif;
  let t = naif - decalage1;
  const decalage2 = versUtcNaif(muraleDans(fuseau, t)) - t;
  if (decalage2 !== decalage1) t = naif - decalage2;
  return t;
}

function fuseauValide(fuseau: string): boolean {
  try {
    formateur(fuseau);
    return true;
  } catch {
    return false;
  }
}

/** Le fuseau IANA d'un `TZID`, ou `null` s'il n'est pas reconnu. */
function resoudreFuseau(tzid: string): string | null {
  const nom = tzid.replace(/^\//, '').trim();
  if (fuseauValide(nom)) return nom;
  const windows = FUSEAUX_WINDOWS[nom];
  return windows && fuseauValide(windows) ? windows : null;
}

/** Une date lue : son heure murale, son fuseau, et si elle est « toute la journée ». */
interface DateLue {
  murale: Murale;
  fuseau: string;
  journee: boolean;
}

class DateNonResolue extends Error {
  constructor(readonly raison: string) {
    super(raison);
  }
}

function lireDate(p: Propriete, fuseauAppareil: string): DateLue {
  const v = p.valeur.trim();
  const jour = /^(\d{4})(\d{2})(\d{2})$/.exec(v);
  if (jour || p.params.VALUE === 'DATE') {
    const m = jour ?? /^(\d{4})(\d{2})(\d{2})/.exec(v);
    if (!m) throw new DateNonResolue(RAISON_DATE);
    return { murale: { a: +m[1], mo: +m[2], j: +m[3], h: 0, mi: 0 }, fuseau: fuseauAppareil, journee: true };
  }
  const dt = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})?(Z)?$/.exec(v);
  if (!dt) throw new DateNonResolue(RAISON_DATE);
  const murale = { a: +dt[1], mo: +dt[2], j: +dt[3], h: +dt[4], mi: +dt[5] };
  if (dt[7]) return { murale, fuseau: 'UTC', journee: false };
  if (p.params.TZID) {
    const fuseau = resoudreFuseau(p.params.TZID);
    if (!fuseau) throw new DateNonResolue(RAISON_FUSEAU);
    return { murale, fuseau, journee: false };
  }
  // Heure flottante : celle de l'appareil, par définition.
  return { murale, fuseau: fuseauAppareil, journee: false };
}

/** `P1D`, `PT1H30M`, `P1W`… en millisecondes, ou `null`. */
function lireDuree(valeur: string): number | null {
  const m = /^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(valeur.trim());
  if (!m) return null;
  const [, signe, s, j, h, mi, se] = m;
  const ms = ((+(s ?? 0) * 7 + +(j ?? 0)) * 24 * 3600 + +(h ?? 0) * 3600 + +(mi ?? 0) * 60 + +(se ?? 0)) * 1000;
  return signe === '-' ? -ms : ms;
}

/** Un instant en heure locale de l'appareil, `AAAA-MM-JJTHH:MM`. */
function enLocal(instant: number, fuseauAppareil: string): string {
  const m = muraleDans(fuseauAppareil, instant);
  const d2 = (n: number) => String(n).padStart(2, '0');
  return `${m.a}-${d2(m.mo)}-${d2(m.j)}T${d2(m.h)}:${d2(m.mi)}`;
}

// ---------------------------------------------------------------- récurrence

const JOURS_ICS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

/** Lundi = 0 … dimanche = 6. */
function jourSemaine(m: Murale): number {
  return (new Date(versUtcNaif(m)).getUTCDay() + 6) % 7;
}

interface Regle {
  freq: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  intervalle: number;
  compte: number | null;
  /** Instant limite, inclus. */
  jusqua: number | null;
  parJour: { rang: number | null; jour: number }[];
  parJourDuMois: number[];
}

const PARTIES_COMPRISES = new Set(['FREQ', 'INTERVAL', 'COUNT', 'UNTIL', 'BYDAY', 'BYMONTHDAY', 'WKST']);

/** La règle, ou `null` si une de ses parties n'est pas comprise. */
function lireRegle(valeur: string, depart: DateLue): Regle | null {
  const parts = Object.fromEntries(
    valeur.split(';').filter(Boolean).map((p) => {
      const [k, v] = p.split('=');
      return [k.toUpperCase(), v ?? ''];
    }),
  );
  if (Object.keys(parts).some((k) => !PARTIES_COMPRISES.has(k))) return null;
  if (parts.FREQ !== 'DAILY' && parts.FREQ !== 'WEEKLY' && parts.FREQ !== 'MONTHLY') return null;

  const intervalle = parts.INTERVAL ? Number(parts.INTERVAL) : 1;
  if (!Number.isInteger(intervalle) || intervalle < 1) return null;
  // Un début de semaine autre que lundi ne change le résultat qu'avec un intervalle.
  if (parts.WKST && parts.WKST !== 'MO' && intervalle > 1 && parts.FREQ === 'WEEKLY') return null;

  const parJour: Regle['parJour'] = [];
  for (const brut of parts.BYDAY ? parts.BYDAY.split(',') : []) {
    const m = /^([+-]?\d{1,2})?(MO|TU|WE|TH|FR|SA|SU)$/.exec(brut);
    if (!m) return null;
    const rang = m[1] ? Number(m[1]) : null;
    if (rang !== null && parts.FREQ !== 'MONTHLY') return null;
    parJour.push({ rang, jour: JOURS_ICS.indexOf(m[2]) });
  }
  const parJourDuMois = parts.BYMONTHDAY ? parts.BYMONTHDAY.split(',').map(Number) : [];
  if (parJourDuMois.some((n) => !Number.isInteger(n) || n === 0 || n < -31 || n > 31)) return null;
  if (parJourDuMois.length > 0 && parts.FREQ !== 'MONTHLY') return null;
  if (parJourDuMois.length > 0 && parJour.length > 0) return null;

  let jusqua: number | null = null;
  if (parts.UNTIL) {
    try {
      const u = lireDate({ nom: 'UNTIL', params: {}, valeur: parts.UNTIL }, depart.fuseau);
      const fin = u.journee ? { ...u.murale, h: 23, mi: 59 } : u.murale;
      jusqua = instantDans(u.journee ? depart.fuseau : u.fuseau, fin);
    } catch {
      return null;
    }
  }
  const compte = parts.COUNT ? Number(parts.COUNT) : null;
  if (compte !== null && (!Number.isInteger(compte) || compte < 1)) return null;
  return { freq: parts.FREQ, intervalle, compte, jusqua, parJour, parJourDuMois };
}

function joursDansMois(a: number, mo: number): number {
  return new Date(Date.UTC(a, mo, 0)).getUTCDate();
}

/** Les jours d'un mois qu'une règle mensuelle retient, triés. */
function joursDuMois(regle: Regle, a: number, mo: number, depart: Murale): number[] {
  const n = joursDansMois(a, mo);
  if (regle.parJourDuMois.length > 0) {
    return [...new Set(regle.parJourDuMois.map((j) => (j > 0 ? j : n + 1 + j)).filter((j) => j >= 1 && j <= n))].sort(
      (x, y) => x - y,
    );
  }
  if (regle.parJour.length > 0) {
    const jours: number[] = [];
    for (const { rang, jour } of regle.parJour) {
      const occurrences: number[] = [];
      for (let j = 1; j <= n; j++) if (jourSemaine({ a, mo, j, h: 0, mi: 0 }) === jour) occurrences.push(j);
      if (rang === null) jours.push(...occurrences);
      else {
        const choisi = rang > 0 ? occurrences[rang - 1] : occurrences[occurrences.length + rang];
        if (choisi !== undefined) jours.push(choisi);
      }
    }
    return [...new Set(jours)].sort((x, y) => x - y);
  }
  return depart.j <= n ? [depart.j] : [];
}

/**
 * Les heures murales de départ des occurrences, dans l'ordre, depuis le départ, en
 * s'arrêtant à `COUNT`, à `UNTIL` ou à la fin de l'horizon.
 */
function* occurrences(regle: Regle, depart: DateLue, finHorizon: number): Generator<Murale> {
  const d = depart.murale;
  const instant = (m: Murale) => instantDans(depart.fuseau, m);
  let produites = 0;
  const depasse = (m: Murale) => {
    const t = instant(m);
    return t > finHorizon || (regle.jusqua !== null && t > regle.jusqua);
  };
  const departNaif = versUtcNaif(d);

  for (let periode = 0; produites < OCCURRENCES_MAX_PAR_EVENEMENT; periode++) {
    let candidats: Murale[];
    if (regle.freq === 'DAILY') {
      candidats = [depuisUtcNaif(departNaif + periode * regle.intervalle * MS_JOUR)];
    } else if (regle.freq === 'WEEKLY') {
      const lundi = departNaif - jourSemaine(d) * MS_JOUR + periode * regle.intervalle * 7 * MS_JOUR;
      const jours = regle.parJour.length > 0 ? [...new Set(regle.parJour.map((p) => p.jour))].sort() : [jourSemaine(d)];
      candidats = jours.map((j) => depuisUtcNaif(lundi + j * MS_JOUR));
    } else {
      const indice = d.mo - 1 + periode * regle.intervalle;
      const a = d.a + Math.floor(indice / 12);
      const mo = (indice % 12) + 1;
      candidats = joursDuMois(regle, a, mo, d).map((j) => ({ a, mo, j, h: d.h, mi: d.mi }));
    }
    // Premier mois ou première semaine : rien avant le départ.
    candidats = candidats
      .map((m) => ({ ...m, h: d.h, mi: d.mi }))
      .filter((m) => versUtcNaif(m) >= departNaif);

    for (const m of candidats) {
      if (depasse(m)) return;
      if (regle.compte !== null && produites >= regle.compte) return;
      produites++;
      yield m;
    }
    // Une période sans candidat (un 31 en février) ne doit pas faire boucler à vide.
    if (periode > OCCURRENCES_MAX_PAR_EVENEMENT * 4) return;
  }
}

// ---------------------------------------------------------------- lecture

interface Brut {
  proprietes: Propriete[];
}

function une(b: Brut, nom: string): Propriete | undefined {
  return b.proprietes.find((p) => p.nom === nom);
}

function toutes(b: Brut, nom: string): Propriete[] {
  return b.proprietes.filter((p) => p.nom === nom);
}

function personne(p: Propriete): string | null {
  const cn = p.params.CN?.trim();
  if (cn) return cn;
  const adresse = p.valeur.replace(/^mailto:/i, '').trim();
  return adresse || null;
}

export interface OptionsLecture {
  /** La date d'import, qui fixe l'horizon. Par défaut, maintenant. */
  maintenant?: Date;
  /** Le fuseau de l'appareil, IANA. Par défaut, celui du navigateur. */
  fuseauAppareil?: string;
}

/**
 * Lit un agenda iCalendar.
 *
 * @throws AgendaIllisible si le texte n'est pas un agenda iCalendar.
 */
export function lireAgenda(texte: string, options: OptionsLecture = {}): ResultatLecture {
  const lignes = deplier(texte);
  if (!lignes.some((l) => l.trim().toUpperCase() === 'BEGIN:VCALENDAR')) throw new AgendaIllisible();

  const fuseauAppareil = options.fuseauAppareil ?? Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'UTC';
  const maintenant = (options.maintenant ?? new Date()).getTime();
  // L'horizon part de minuit, heure de l'appareil, la veille de l'import.
  const aujourdhui = muraleDans(fuseauAppareil, maintenant);
  // En heure murale : ajouter 60 × 24 h franchirait un changement d'heure de travers.
  const jourNaif = versUtcNaif({ ...aujourdhui, h: 0, mi: 0 });
  const debutHorizon = instantDans(fuseauAppareil, depuisUtcNaif(jourNaif - HORIZON_AVANT_JOURS * MS_JOUR));
  const finHorizon = instantDans(fuseauAppareil, {
    ...depuisUtcNaif(jourNaif + HORIZON_APRES_JOURS * MS_JOUR),
    h: 23,
    mi: 59,
  });

  // Les VEVENT, et eux seuls : un VTIMEZONE ou un VALARM imbriqué n'y entre pas.
  const bruts: Brut[] = [];
  let courant: Brut | null = null;
  let profondeur = 0;
  for (const ligne of lignes) {
    const p = lirePropriete(ligne);
    if (!p) continue;
    if (p.nom === 'BEGIN') {
      if (p.valeur.toUpperCase() === 'VEVENT' && !courant) {
        courant = { proprietes: [] };
        profondeur = 0;
      } else if (courant) profondeur++;
      continue;
    }
    if (p.nom === 'END') {
      if (courant && profondeur === 0 && p.valeur.toUpperCase() === 'VEVENT') {
        bruts.push(courant);
        courant = null;
      } else if (courant) profondeur--;
      continue;
    }
    if (courant && profondeur === 0) courant.proprietes.push(p);
  }

  const ecartes = new Map<string, number>();
  const ecarter = (raison: string) => ecartes.set(raison, (ecartes.get(raison) ?? 0) + 1);

  // Les exceptions d'une série (RECURRENCE-ID) remplacent une occurrence précise.
  const exceptions = new Map<string, Map<number, Brut>>();
  const series: Brut[] = [];
  for (const b of bruts) {
    const rid = une(b, 'RECURRENCE-ID');
    if (rid) {
      const uid = une(b, 'UID')?.valeur ?? '';
      try {
        const d = lireDate(rid, fuseauAppareil);
        const parUid = exceptions.get(uid) ?? new Map<number, Brut>();
        parUid.set(instantDans(d.fuseau, d.murale), b);
        exceptions.set(uid, parUid);
      } catch (e) {
        ecarter(e instanceof DateNonResolue ? e.raison : RAISON_DATE);
      }
    } else {
      series.push(b);
    }
  }

  const evenements: EvenementJson[] = [];
  let recurrencesNonComprises = 0;

  /** Une occurrence : son début et sa fin en instants, et le VEVENT qui la décrit. */
  const ajouter = (b: Brut, debut: number, fin: number, journee: boolean, recurrent: boolean) => {
    if (fin <= debut) fin = debut + 60_000;
    if (fin < debutHorizon || debut > finHorizon) return;
    const uid = une(b, 'UID')?.valeur ?? `sans-uid-${evenements.length}`;
    const debutLocal = enLocal(debut, fuseauAppareil);
    const participants = [...toutes(b, 'ORGANIZER'), ...toutes(b, 'ATTENDEE')]
      .map(personne)
      .filter((n): n is string => n !== null);
    const lieu = une(b, 'LOCATION');
    evenements.push({
      id: `${uid}#${debutLocal}`,
      titre: texteEchappe(une(b, 'SUMMARY')?.valeur ?? '') || '(sans titre)',
      debut: debutLocal,
      fin: enLocal(fin, fuseauAppareil),
      lieu: lieu ? texteEchappe(lieu.valeur) || null : null,
      participants: [...new Set(participants)],
      recurrent,
      journeeEntiere: journee,
    });
  };

  const bornes = (b: Brut): { depart: DateLue; debut: number; duree: number } => {
    const dtstart = une(b, 'DTSTART');
    if (!dtstart) throw new DateNonResolue(RAISON_DATE);
    const depart = lireDate(dtstart, fuseauAppareil);
    const debut = instantDans(depart.fuseau, depart.murale);
    const dtend = une(b, 'DTEND');
    const dureeProp = une(b, 'DURATION');
    let duree: number;
    if (dtend) {
      const fin = lireDate(dtend, fuseauAppareil);
      duree = instantDans(fin.fuseau, fin.murale) - debut;
    } else if (dureeProp) {
      const d = lireDuree(dureeProp.valeur);
      if (d === null) throw new DateNonResolue(RAISON_DATE);
      duree = d;
    } else {
      duree = depart.journee ? MS_JOUR : 0;
    }
    return { depart, debut, duree };
  };

  for (const b of series) {
    if ((une(b, 'STATUS')?.valeur ?? '').toUpperCase() === 'CANCELLED') {
      ecarter(RAISON_ANNULE);
      continue;
    }
    let lu: ReturnType<typeof bornes>;
    try {
      lu = bornes(b);
    } catch (e) {
      ecarter(e instanceof DateNonResolue ? e.raison : RAISON_DATE);
      continue;
    }
    const { depart, debut, duree } = lu;
    const uid = une(b, 'UID')?.valeur ?? '';
    const rrule = une(b, 'RRULE');

    if (!rrule) {
      ajouter(b, debut, debut + duree, depart.journee, false);
      continue;
    }

    const regle = lireRegle(rrule.valeur, depart);
    if (!regle) {
      // Seule l'occurrence d'origine : inventer des répétitions serait pire.
      recurrencesNonComprises++;
      ajouter(b, debut, debut + duree, depart.journee, true);
      continue;
    }

    const exclues = new Set<number>();
    for (const ex of toutes(b, 'EXDATE')) {
      for (const valeur of ex.valeur.split(',')) {
        try {
          const d = lireDate({ ...ex, valeur }, fuseauAppareil);
          exclues.add(instantDans(d.fuseau, d.murale));
        } catch {
          // Une exclusion illisible n'exclut rien ; l'occurrence reste, c'est le moindre mal.
        }
      }
    }
    const remplacees = exceptions.get(uid) ?? new Map<number, Brut>();

    for (const m of occurrences(regle, depart, finHorizon)) {
      const t = instantDans(depart.fuseau, m);
      if (exclues.has(t) || remplacees.has(t)) continue;
      ajouter(b, t, t + duree, depart.journee, true);
    }
    for (const exception of remplacees.values()) {
      if ((une(exception, 'STATUS')?.valeur ?? '').toUpperCase() === 'CANCELLED') continue;
      try {
        const e = bornes(exception);
        ajouter(exception, e.debut, e.debut + e.duree, e.depart.journee, true);
      } catch (err) {
        ecarter(err instanceof DateNonResolue ? err.raison : RAISON_DATE);
      }
    }
  }

  // Une exception dont la série est absente du fichier reste un événement à part entière.
  const uidsDeSerie = new Set(series.map((b) => une(b, 'UID')?.valeur ?? ''));
  for (const [uid, parInstant] of exceptions) {
    if (uidsDeSerie.has(uid)) continue;
    for (const exception of parInstant.values()) {
      if ((une(exception, 'STATUS')?.valeur ?? '').toUpperCase() === 'CANCELLED') continue;
      try {
        const e = bornes(exception);
        ajouter(exception, e.debut, e.debut + e.duree, e.depart.journee, false);
      } catch (err) {
        ecarter(err instanceof DateNonResolue ? err.raison : RAISON_DATE);
      }
    }
  }

  evenements.sort((a, b) => a.debut.localeCompare(b.debut) || a.id.localeCompare(b.id));
  return {
    evenements,
    lus: series.length,
    ecartes: [...ecartes].map(([raison, nombre]) => ({ raison, nombre })),
    recurrencesNonComprises,
    couvreDepuis: enLocal(debutHorizon, fuseauAppareil),
    couvreJusqua: enLocal(finHorizon, fuseauAppareil),
  };
}
