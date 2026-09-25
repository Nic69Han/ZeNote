/**
 * Découpage d'une capture en passages.
 *
 * Une capture dictée arrive souvent sans ponctuation : on coupe donc aussi sur les
 * charnières orales (« puis », « ensuite », « par ailleurs »). Chaque passage garde
 * ses bornes exactes dans le texte source — c'est ce qui rend l'ancrage vérifiable.
 */

export interface Passage {
  texte: string;
  debutCar: number;
  finCar: number;
}

/** Charnières orales qui séparent deux sujets dans une même phrase. */
const CHARNIERES =
  /\s+(?:et\s+puis|puis|ensuite|par\s+ailleurs|d'autre\s+part|autre\s+chose|deuxi[èe]mement|troisi[èe]mement)\s+/giu;

const PONCTUATION = /[.!?;\n]+/g;

/**
 * Le « et » qui enchaîne deux sujets, et pas celui qui joint deux mots.
 *
 * Dicté, on relie tout : « rappeler Sophie pour le devis, et j'ai dit à Karim que je
 * lui envoie le planning, et au fait on a tranché ». Sans coupure là, trois choses
 * différentes deviennent un seul élément, typé au hasard de ce qui vient en dernier.
 *
 * Mais couper sur tout « , et » casserait une énumération — « le devis, et le
 * planning » n'est qu'une liste. La coupure n'a donc lieu que devant un début de
 * proposition : un sujet, ou une tournure impersonnelle. C'est ce qui distingue une
 * nouvelle idée d'un simple complément.
 */
const CHARNIERE_PROPOSITION =
  /,\s+(?:et\s+|puis\s+|ensuite\s+|alors\s+)(?=(?:au\s+fait\s+|du\s+coup\s+|sinon\s+)?(?:j['\u2019]|je\s|on\s|il\s|elle\s|ils\s|elles\s|faut\s|c['\u2019]est\s|[çc]a\s|n['\u2019]oublie))/giu;

/** Découpe `texte` en passages non vides, bornes comprises dans le texte d'origine. */
export function decouper(texte: string): Passage[] {
  const coupures = new Set<number>([0, texte.length]);
  /** Intervalles occupés par une charnière : ils n'appartiennent à aucun passage. */
  const charnieres: [number, number][] = [];

  for (const m of texte.matchAll(PONCTUATION)) {
    coupures.add(m.index + m[0].length);
  }
  for (const motif of [CHARNIERES, CHARNIERE_PROPOSITION]) {
    for (const m of texte.matchAll(motif)) {
      coupures.add(m.index);
      coupures.add(m.index + m[0].length);
      charnieres.push([m.index, m.index + m[0].length]);
    }
  }

  const bornes = [...coupures].sort((a, b) => a - b);
  const passages: Passage[] = [];

  for (let i = 0; i < bornes.length - 1; i += 1) {
    const depart = bornes[i];
    const arrivee = bornes[i + 1];
    if (charnieres.some(([d, f]) => d === depart && f === arrivee)) continue;

    const brut = texte.slice(depart, arrivee);
    const debutCar = depart + (brut.length - brut.trimStart().length);
    const finCar = arrivee - (brut.length - brut.trimEnd().length);
    const contenu = texte.slice(debutCar, finCar);

    // On ignore les fragments qui ne portent rien (ponctuation isolée, hésitation).
    if (!/\p{L}{3}/u.test(contenu)) continue;

    passages.push({ texte: contenu, debutCar, finCar });
  }

  return passages;
}
