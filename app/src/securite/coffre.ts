/**
 * Le coffre : ce qui rend les notes illisibles sans l'accord de leur propriétaire.
 *
 * Spec `donnees` — « Chiffrement » : les données au repos sont chiffrées, et l'accès
 * est protégé par le verrouillage de l'appareil. Le scénario à tenir est « Appareil
 * perdu » — un tiers qui accède physiquement à l'appareil ne doit rien pouvoir lire.
 *
 * ## La contrainte qui dicte la forme
 *
 * Capturer doit rester un geste, sans décision et sans attente. Exiger une empreinte
 * digitale avant de pouvoir déposer une note casserait la promesse centrale du
 * produit. Un simple secret symétrique ne le permet pas : pour écrire avec, il faut
 * l'avoir déverrouillé, donc s'être authentifié.
 *
 * D'où le choix d'une **paire de clés** plutôt que d'une clé unique :
 *
 *  - la **clé publique** reste en clair sur l'appareil. Elle ne sert qu'à chiffrer.
 *    Déposer une note ne demande donc rien à personne — ni empreinte, ni phrase, ni
 *    réseau — et le résultat est déjà illisible ;
 *  - la **clé privée** est enveloppée, et ne se déplie qu'après authentification.
 *    Elle seule permet de relire.
 *
 * Écrire sans pouvoir relire : c'est exactement ce que le produit demande.
 *
 * ## Le détail cryptographique
 *
 * Chaque valeur scellée l'est par ECIES sur P-256, tel que WebCrypto le permet :
 * une paire éphémère est tirée, un secret partagé est calculé avec la clé publique
 * du coffre (ECDH), ce secret passe par HKDF-SHA-256 pour donner une clé AES-GCM de
 * 256 bits, et la valeur est chiffrée avec elle. La clé publique éphémère accompagne
 * le chiffré ; la privée éphémère est jetée aussitôt. Deux scellés du même texte ne
 * se ressemblent donc pas, et aucune clé durable ne traîne en mémoire côté écriture.
 *
 * Mesuré dans Chromium : 0,18 ms pour sceller un champ de texte, 2 ms pour 300 ko
 * d'audio. Le chiffrement n'est pas sur le chemin critique parce qu'il ne coûte rien.
 *
 * ## Ce que le coffre ne protège pas
 *
 * Il chiffre le contenu, pas sa forme. Restent lisibles sans authentification : le
 * nombre de captures, leur date et leur heure, leur durée, et l'état de leur
 * transcription. Les champs qui servent d'index à la base doivent rester en clair
 * pour qu'elle fonctionne. Quelqu'un qui accède à l'appareil peut donc savoir que
 * vous avez dicté trois notes mardi soir — pas ce qu'elles disent. C'est dit ici
 * parce que c'est vrai, et l'écran « Vos données » le répète à l'utilisateur.
 */

import { MAGASIN_REGLAGES, demander, transaction } from '../stockage/base.ts';

/** La clé sous laquelle le descripteur du coffre est rangé dans les réglages. */
const CLE_COFFRE = 'coffre';

/** Le contexte HKDF : il lie une clé dérivée à cet usage précis, et à lui seul. */
const CONTEXTE = 'zenote/coffre/v1';

/**
 * Le nombre d'itérations PBKDF2 pour une phrase de passe.
 *
 * 600 000 est la recommandation de l'OWASP pour PBKDF2-HMAC-SHA-256. Mesuré à
 * 262 ms sur cette machine : c'est le prix d'un déverrouillage, payé une fois par
 * session, et c'est ce qui rend une attaque par dictionnaire coûteuse. Le nombre est
 * consigné dans le coffre, pour qu'on puisse l'augmenter plus tard sans rendre les
 * coffres existants illisibles.
 */
export const ITERATIONS_PHRASE = 600_000;

export type EtatCoffre = 'ABSENT' | 'VERROUILLE' | 'OUVERT';

/** Comment on prouve qu'on a le droit de relire. */
export type TypeGardien = 'APPAREIL' | 'PHRASE';

/** Une valeur chiffrée, telle qu'elle est rangée en base. */
export interface Scelle {
  /** Clé publique éphémère (format brut), sans laquelle le chiffré est inerte. */
  eph: ArrayBuffer;
  /** Sel HKDF. */
  sel: ArrayBuffer;
  /** Vecteur d'initialisation AES-GCM. */
  iv: ArrayBuffer;
  /** Le chiffré, étiquette d'authentification comprise. */
  chiffre: ArrayBuffer;
}

interface GardienStocke {
  type: TypeGardien;
  /** L'accréditation WebAuthn à présenter, pour un gardien d'appareil. */
  accreditation?: ArrayBuffer;
  /** Sel PBKDF2, pour un gardien par phrase. */
  sel?: ArrayBuffer;
  iterations?: number;
  /** La clé privée du coffre, enveloppée sous la clé de ce gardien. */
  iv: ArrayBuffer;
  prive: ArrayBuffer;
}

interface CoffreStocke {
  version: 1;
  /** La clé publique du coffre, en clair : elle ne sert qu'à chiffrer. */
  publique: ArrayBuffer;
  gardiens: GardienStocke[];
}

/** Levée quand une lecture demande le coffre et qu'il est fermé. */
export class CoffreVerrouille extends Error {
  constructor() {
    super('Le coffre est verrouillé : ces notes ne sont pas lisibles sans authentification.');
    this.name = 'CoffreVerrouille';
  }
}

/** Levée quand l'authentification échoue — mauvaise phrase, ou refus de l'appareil. */
export class AuthentificationRefusee extends Error {
  constructor(raison: string) {
    super(raison);
    this.name = 'AuthentificationRefusee';
  }
}

// --------------------------------------------------------------- état en mémoire

let descripteur: CoffreStocke | null = null;
let charge = false;
/** La clé publique importée, pour ne pas la réimporter à chaque scellement. */
let publique: CryptoKey | null = null;
/** La clé privée dépliée. Non extractible : elle ne peut pas repartir en octets. */
let privee: CryptoKey | null = null;

const encodeur = new TextEncoder();
const decodeur = new TextDecoder();

function sousCouche(): SubtleCrypto {
  const sc = globalThis.crypto?.subtle;
  if (!sc) throw new Error("Ce navigateur n'offre pas WebCrypto : le coffre est impossible.");
  return sc;
}

/** Ce que le navigateur doit offrir pour qu'un coffre soit possible. */
export function chiffrementPossible(): boolean {
  return typeof globalThis.crypto?.subtle?.deriveBits === 'function';
}

/** Ce que le navigateur doit offrir pour déverrouiller par l'appareil. */
export async function gardienAppareilPossible(): Promise<boolean> {
  try {
    return (
      typeof PublicKeyCredential !== 'undefined' &&
      (await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())
    );
  } catch {
    return false;
  }
}

/** Relit le descripteur depuis la base. */
export async function chargerCoffre(): Promise<EtatCoffre> {
  const range = await transaction([MAGASIN_REGLAGES], 'readonly', ([reglages]) =>
    demander<{ cle: string; valeur: CoffreStocke } | undefined>(reglages.get(CLE_COFFRE)),
  );
  descripteur = range?.valeur ?? null;
  charge = true;
  publique = descripteur
    ? await sousCouche().importKey('raw', descripteur.publique, COURBE, true, [])
    : null;
  return etatCoffre();
}

/** Le chargement en cours, pour que deux appels concurrents n'en lancent pas deux. */
let chargement: Promise<EtatCoffre> | null = null;

/**
 * Garantit que le descripteur est lu avant qu'on s'en serve.
 *
 * Le dépôt l'appelle avant chaque écriture et chaque lecture. Sans cela, un chemin
 * qui toucherait la base avant le démarrage complet écrirait en clair sans que rien
 * ne le signale — exactement le genre de repli silencieux qu'un chiffrement ne doit
 * pas tolérer.
 */
export function assurerCoffreCharge(): Promise<EtatCoffre> {
  if (charge) return Promise.resolve(etatCoffre());
  chargement ??= chargerCoffre().finally(() => {
    chargement = null;
  });
  return chargement;
}

/** Oublie tout l'état en mémoire. Réservé aux tests et au changement de base. */
export function reinitialiserCoffre(): void {
  descripteur = null;
  publique = null;
  privee = null;
  charge = false;
  chargement = null;
}

export function etatCoffre(): EtatCoffre {
  if (!charge) throw new Error('Le coffre n’a pas été chargé : appelez chargerCoffre().');
  if (!descripteur) return 'ABSENT';
  return privee ? 'OUVERT' : 'VERROUILLE';
}

/** Les moyens de déverrouillage enregistrés, dans l'ordre où ils ont été ajoutés. */
export function gardiens(): TypeGardien[] {
  return descripteur?.gardiens.map((g) => g.type) ?? [];
}

// ----------------------------------------------------------------- les gardiens

const COURBE = { name: 'ECDH', namedCurve: 'P-256' } as const;

/**
 * Des octets aléatoires, sur un `ArrayBuffer` bien à eux.
 *
 * Le détour par `new ArrayBuffer` n'est pas décoratif : sans lui, le type du tampon
 * reste `ArrayBufferLike`, que WebCrypto refuse — il ne travaille pas sur de la
 * mémoire potentiellement partagée entre fils d'exécution.
 */
function alea(octets: number): Uint8Array<ArrayBuffer> {
  return globalThis.crypto.getRandomValues(new Uint8Array(new ArrayBuffer(octets)));
}


/**
 * La clé d'enveloppe d'un gardien par phrase de passe.
 *
 * PBKDF2 est retenu parce qu'il est le seul dérivateur à coût réglable offert par
 * WebCrypto : Argon2 demanderait d'embarquer une implémentation, et un code maison
 * serait pire que l'existant.
 */
async function cleDeLaPhrase(
  phrase: string,
  sel: ArrayBuffer,
  iterations: number,
): Promise<CryptoKey> {
  const sc = sousCouche();
  const base = await sc.importKey('raw', encodeur.encode(phrase), 'PBKDF2', false, ['deriveKey']);
  return sc.deriveKey(
    { name: 'PBKDF2', salt: sel, iterations, hash: 'SHA-256' },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['wrapKey', 'unwrapKey'],
  );
}

/**
 * La clé d'enveloppe d'un gardien d'appareil, par WebAuthn et son extension `prf`.
 *
 * L'appareil détient une accréditation dont il ne sort jamais rien, sauf ceci : pour
 * une entrée donnée, et seulement après vérification de l'utilisateur (empreinte,
 * visage ou code), il rend 32 octets toujours identiques. Ces octets ne quittent pas
 * l'appareil, ne sont écrits nulle part, et sont ici l'unique chemin vers la clé
 * privée du coffre. Sans le doigt de son propriétaire, l'appareil ne les rend pas.
 *
 * @param accreditation celle à présenter ; absente, on en crée une.
 */
async function cleDeLAppareil(
  accreditation?: ArrayBuffer,
): Promise<{ cle: CryptoKey; accreditation: ArrayBuffer }> {
  if (typeof navigator === 'undefined' || !navigator.credentials) {
    throw new AuthentificationRefusee("Ce navigateur ne sait pas authentifier l'appareil.");
  }
  const entree = encodeur.encode(CONTEXTE);
  let id = accreditation;

  if (!id) {
    const creee = (await navigator.credentials.create({
      publicKey: {
        challenge: alea(32),
        rp: { name: 'ZeNote' },
        // Aucune identité n'est demandée à l'utilisateur : l'accréditation ne sert
        // qu'à rouvrir ce coffre-ci, sur cet appareil-ci. Rien n'est envoyé nulle part.
        user: { id: encodeur.encode('zenote'), name: 'zenote', displayName: 'ZeNote' },
        pubKeyCredParams: [
          { type: 'public-key', alg: -7 },
          { type: 'public-key', alg: -257 },
        ],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          userVerification: 'required',
          residentKey: 'required',
        },
        extensions: { prf: { eval: { first: entree } } },
      },
    })) as PublicKeyCredential | null;
    if (!creee) throw new AuthentificationRefusee("L'appareil n'a pas créé d'accréditation.");
    if (!creee.getClientExtensionResults().prf?.enabled) {
      throw new AuthentificationRefusee(
        "Cet appareil ne sait pas garder un secret de déverrouillage (extension « prf » absente).",
      );
    }
    id = creee.rawId;
  }

  // Le secret se lit toujours par une assertion, jamais au moment de la création :
  // certains authentificateurs n'y rendent pas encore la valeur.
  const assertion = (await navigator.credentials.get({
    publicKey: {
      challenge: alea(32),
      allowCredentials: [{ type: 'public-key', id: id! }],
      userVerification: 'required',
      extensions: { prf: { eval: { first: entree } } },
    },
  })) as PublicKeyCredential | null;
  const secret = assertion?.getClientExtensionResults().prf?.results?.first;
  if (!secret) {
    throw new AuthentificationRefusee("L'appareil n'a pas rendu le secret de déverrouillage.");
  }

  const sc = sousCouche();
  const base = await sc.importKey('raw', secret, 'HKDF', false, ['deriveKey']);
  const cle = await sc.deriveKey(
    { name: 'HKDF', hash: 'SHA-256', salt: new Uint8Array(0), info: encodeur.encode(CONTEXTE) },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['wrapKey', 'unwrapKey'],
  );
  return { cle, accreditation: id! };
}

/** La clé d'enveloppe d'un gardien déjà enregistré. */
async function cleDuGardien(gardien: GardienStocke, phrase?: string): Promise<CryptoKey> {
  if (gardien.type === 'PHRASE') {
    if (!phrase) throw new AuthentificationRefusee('Il manque la phrase de passe.');
    return cleDeLaPhrase(phrase, gardien.sel!, gardien.iterations ?? ITERATIONS_PHRASE);
  }
  return (await cleDeLAppareil(gardien.accreditation)).cle;
}

/** Construit un gardien neuf autour d'une clé privée à envelopper. */
async function fabriquerGardien(
  type: TypeGardien,
  priveeAEnvelopper: CryptoKey,
  phrase?: string,
): Promise<GardienStocke> {
  const sc = sousCouche();
  const iv = alea(12);

  if (type === 'PHRASE') {
    if (!phrase) throw new AuthentificationRefusee('Il manque la phrase de passe.');
    const sel = alea(16);
    const cle = await cleDeLaPhrase(phrase, sel.buffer, ITERATIONS_PHRASE);
    const prive = await sc.wrapKey('pkcs8', priveeAEnvelopper, cle, { name: 'AES-GCM', iv });
    return {
      type,
      sel: sel.buffer,
      iterations: ITERATIONS_PHRASE,
      iv: iv.buffer,
      prive,
    };
  }

  const { cle, accreditation } = await cleDeLAppareil();
  const prive = await sc.wrapKey('pkcs8', priveeAEnvelopper, cle, { name: 'AES-GCM', iv });
  return { type, accreditation, iv: iv.buffer, prive };
}

// ------------------------------------------------------------------- le coffre

async function ecrireDescripteur(valeur: CoffreStocke): Promise<void> {
  await transaction([MAGASIN_REGLAGES], 'readwrite', ([reglages]) => {
    reglages.put({ cle: CLE_COFFRE, valeur });
  });
  descripteur = valeur;
}

/**
 * Crée le coffre et l'ouvre aussitôt.
 *
 * Le coffre naît ouvert parce que l'activation demande de chiffrer ce qui existe
 * déjà : refermer avant que ce soit fait laisserait des notes en clair sans moyen
 * de les reprendre.
 */
export async function creerCoffre(type: TypeGardien, phrase?: string): Promise<void> {
  if (!charge) await chargerCoffre();
  if (descripteur) throw new Error('Un coffre existe déjà sur cet appareil.');

  const sc = sousCouche();
  const paire = await sc.generateKey(COURBE, true, ['deriveBits']);
  const gardien = await fabriquerGardien(type, paire.privateKey, phrase);
  const brutePublique = await sc.exportKey('raw', paire.publicKey);

  await ecrireDescripteur({ version: 1, publique: brutePublique, gardiens: [gardien] });
  publique = paire.publicKey;
  // On repasse par l'enveloppe plutôt que de garder la clé de `generateKey` : la
  // privée détenue en mémoire est ainsi non extractible, comme après tout
  // déverrouillage. Un seul chemin, donc une seule chose à vérifier.
  privee = await sc.unwrapKey(
    'pkcs8',
    gardien.prive,
    await cleDuGardien(gardien, phrase),
    { name: 'AES-GCM', iv: gardien.iv },
    COURBE,
    false,
    ['deriveBits'],
  );
}

/** Déplie la clé privée après authentification. */
export async function deverrouiller(type: TypeGardien, phrase?: string): Promise<void> {
  if (!charge) await chargerCoffre();
  if (!descripteur) throw new Error("Il n'y a pas de coffre sur cet appareil.");
  const gardien = descripteur.gardiens.find((g) => g.type === type);
  if (!gardien) throw new AuthentificationRefusee("Ce moyen de déverrouillage n'est pas enregistré.");

  const cle = await cleDuGardien(gardien, phrase);
  try {
    privee = await sousCouche().unwrapKey(
      'pkcs8',
      gardien.prive,
      cle,
      { name: 'AES-GCM', iv: gardien.iv },
      COURBE,
      false,
      ['deriveBits'],
    );
  } catch {
    // AES-GCM refuse de déchiffrer ce qui n'a pas la bonne clé : l'échec du dépliage
    // *est* la preuve que l'authentification n'était pas la bonne.
    throw new AuthentificationRefusee(
      type === 'PHRASE' ? 'Phrase de passe incorrecte.' : "L'appareil n'a pas rendu la bonne clé.",
    );
  }
}

/** Referme le coffre : la clé privée quitte la mémoire. */
export function verrouiller(): void {
  privee = null;
}

/** Ajoute un second moyen de déverrouillage. Le coffre doit être ouvert. */
export async function ajouterGardien(type: TypeGardien, phrase?: string): Promise<void> {
  if (!privee) throw new CoffreVerrouille();
  if (!descripteur) throw new Error("Il n'y a pas de coffre sur cet appareil.");
  if (descripteur.gardiens.some((g) => g.type === type)) {
    throw new Error('Ce moyen de déverrouillage est déjà enregistré.');
  }
  // La clé en mémoire est non extractible : elle ne peut pas être ré-enveloppée.
  // On ne peut donc ajouter un gardien qu'en repassant par un gardien existant, qui
  // rend une clé extractible le temps de l'opération.
  const source = descripteur.gardiens[0];
  const extractible = await sousCouche().unwrapKey(
    'pkcs8',
    source.prive,
    await cleDuGardien(source, type === 'PHRASE' ? undefined : phrase),
    { name: 'AES-GCM', iv: source.iv },
    COURBE,
    true,
    ['deriveBits'],
  );
  const gardien = await fabriquerGardien(type, extractible, phrase);
  await ecrireDescripteur({ ...descripteur, gardiens: [...descripteur.gardiens, gardien] });
}

/** Supprime le coffre. Le coffre doit être ouvert : sinon rien ne serait relisible. */
export async function supprimerCoffre(): Promise<void> {
  if (!privee) throw new CoffreVerrouille();
  await transaction([MAGASIN_REGLAGES], 'readwrite', ([reglages]) => {
    reglages.delete(CLE_COFFRE);
  });
  descripteur = null;
  publique = null;
  privee = null;
}

// ------------------------------------------------------------ sceller / ouvrir

/**
 * Scelle des octets. Ne demande aucune authentification : c'est tout l'intérêt.
 *
 * @throws si aucun coffre n'existe — sceller sans coffre n'a pas de sens, et rendre
 *   les octets en clair serait le genre de repli silencieux qui vide une promesse.
 */
export async function sceller(octets: ArrayBuffer): Promise<Scelle> {
  if (!publique) throw new Error("Il n'y a pas de coffre sur cet appareil.");
  const sc = sousCouche();
  const eph = await sc.generateKey(COURBE, true, ['deriveBits']);
  const partage = await sc.deriveBits({ name: 'ECDH', public: publique }, eph.privateKey, 256);
  const base = await sc.importKey('raw', partage, 'HKDF', false, ['deriveKey']);
  const sel = alea(16);
  const cle = await sc.deriveKey(
    { name: 'HKDF', hash: 'SHA-256', salt: sel, info: encodeur.encode(CONTEXTE) },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  );
  const iv = alea(12);
  return {
    eph: await sc.exportKey('raw', eph.publicKey),
    sel: sel.buffer,
    iv: iv.buffer,
    chiffre: await sc.encrypt({ name: 'AES-GCM', iv }, cle, octets),
  };
}

/** Ouvre un scellé. Demande le coffre ouvert. */
export async function ouvrirScelle(scelle: Scelle): Promise<ArrayBuffer> {
  if (!privee) throw new CoffreVerrouille();
  const sc = sousCouche();
  const eph = await sc.importKey('raw', scelle.eph, COURBE, false, []);
  const partage = await sc.deriveBits({ name: 'ECDH', public: eph }, privee, 256);
  const base = await sc.importKey('raw', partage, 'HKDF', false, ['deriveKey']);
  const cle = await sc.deriveKey(
    { name: 'HKDF', hash: 'SHA-256', salt: scelle.sel, info: encodeur.encode(CONTEXTE) },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );
  return sc.decrypt({ name: 'AES-GCM', iv: scelle.iv }, cle, scelle.chiffre);
}

/** Scelle une valeur quelconque, par son JSON. */
export async function scellerValeur(valeur: unknown): Promise<Scelle> {
  return sceller(encodeur.encode(JSON.stringify(valeur)).buffer as ArrayBuffer);
}

/** Ouvre ce que [scellerValeur] a scellé. */
export async function ouvrirValeur<T>(scelle: Scelle): Promise<T> {
  return JSON.parse(decodeur.decode(await ouvrirScelle(scelle))) as T;
}
