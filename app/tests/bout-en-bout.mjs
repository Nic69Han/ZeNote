/**
 * Vérification bout en bout, dans un vrai navigateur, sur l'application construite.
 *
 *   npm run build && node tests/bout-en-bout.mjs
 *
 * Ce que ce script prouve, et qu'aucun test unitaire ne peut prouver seul :
 * la chaîne complète tient — capture, écriture en base, analyse, Revue, décision,
 * puis vue Maintenant — avec le vrai cœur Kotlin compilé en JavaScript, et les
 * données survivent à un rechargement de page.
 */
import { chromium } from 'playwright';
import { cheminNavigateur } from './navigateur.mjs';
import { servir } from './servir.mjs';

// Réglable, pour que plusieurs copies du dépôt vérifient en même temps sans se
// disputer le port.
const PORT = Number(process.env.ZENOTE_PORT ?? 4178);

// Par défaut la vérification porte sur le `dist/` local, servi ici même. En
// passant ZENOTE_URL, les mêmes constats s'appliquent au site déployé : c'est
// ainsi qu'on prouve que la mise en ligne vaut ce que vaut la construction.
const CIBLE = process.env.ZENOTE_URL?.replace(/\/$/, '');

const constats = [];
function verifier(intitule, condition, detail = '') {
  constats.push({ intitule, ok: Boolean(condition), detail });
  console.log(`${condition ? '  ok  ' : ' ÉCHEC'} ${intitule}${detail ? ` — ${detail}` : ''}`);
}

// Le point d'analyse distante, simulé : il répond comme la fonction sans clé tant
// qu'on ne lui demande pas de juger. Contre un site publié (CIBLE), c'est la vraie
// fonction qui répond, et seuls les contrôles qui n'en dépendent pas s'appliquent.
const simulation = {
  mode: 'non-configure',
  analyser(corps) {
    if (this.mode !== 'repondre') return { statut: 503, corps: { motif: 'non-configure' } };
    return {
      statut: 200,
      corps: {
        modele: 'simulation',
        reponses: corps.passages.map(() => ({
          type: 'TACHE',
          typeConfiance: 0.9,
          sphere: 'PROFESSIONNEL',
          sphereConfiance: 0.9,
        })),
      },
    };
  },
};
const serveur = CIBLE ? null : await servir(PORT, simulation);
const adresse = CIBLE ?? `http://localhost:${PORT}`;
console.log(`Vérification sur ${adresse}`);
const mandataire = process.env.HTTPS_PROXY ?? process.env.https_proxy;
const navigateur = await chromium.launch({
  executablePath: cheminNavigateur(),
  args: [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    // Un micro simulé, accordé sans question : c'est ce qui rend le chemin vocal
    // vérifiable ici. Sans lui, la moitié du produit ne serait jamais exercée.
    '--use-fake-device-for-media-stream',
    '--use-fake-ui-for-media-stream',
    // Le micro simulé joue une vraie phrase française, en boucle. C'est ce qui rend
    // la chaîne vocale entière vérifiable : appuyer, parler, relâcher — et retrouver
    // les mots en Revue, transcrits sur l'appareil.
    `--use-file-for-fake-audio-capture=${new URL('./donnees/phrase-couvreur.wav', import.meta.url).pathname}`,
  ],
  // Sur un poste derrière un mandataire, viser un site en ligne exige de passer
  // par lui ; le serveur local de secours, lui, doit rester joignable en direct.
  ...(CIBLE && mandataire ? { proxy: { server: mandataire, bypass: 'localhost,127.0.0.1' } } : {}),
});
const contexte = await navigateur.newContext({
  viewport: { width: 420, height: 900 },
  permissions: ['microphone'],
});
// Ce qui permet de prouver l'ordre : « écrit d'abord, confirmé ensuite ».
//
// La promesse de capture ne vaut que dans ce sens-là. Confirmer sur l'intention —
// dès le relâchement, avant que la base ait accepté — rendrait le produit agréable
// et menteur : on range sa tête en croyant que ZeNote tient la note, et il ne la
// tient pas. L'inversion ne se voit pas à l'œil nu, elle ne coûte qu'une ligne, et
// aucune des vérifications précédentes ne l'attrape.
//
// Deux faits sont donc relevés dans la page, au plus près de ce qu'ils sont :
//
//  - la transaction d'écriture d'une capture au moment où elle devient durable,
//    c'est-à-dire à son événement `complete` — pas à l'appel de `put`, qui ne
//    garantit rien ;
//  - la confirmation telle que le corps la reçoit : la vibration à trois temps de
//    « c'est à moi ». Le motif la distingue du signal de début et de celui d'échec,
//    qui sont eux aussi des vibrations.
await contexte.addInitScript(() => {
  window.__journal = [];
  const noter = (quoi) => window.__journal.push({ quoi, t: performance.now() });

  for (const methode of ['put', 'add']) {
    const origine = IDBObjectStore.prototype[methode];
    IDBObjectStore.prototype[methode] = function (...args) {
      const requete = origine.apply(this, args);
      if (this.name === 'captures') {
        this.transaction.addEventListener('complete', () => noter('capture-durable'));
      }
      return requete;
    };
  }

  // Défini plutôt qu'enveloppé : sur un ordinateur, `navigator.vibrate` peut ne pas
  // exister, et le produit l'appelle alors en option — sans notre spectateur, la
  // confirmation ne laisserait aucune trace observable.
  Object.defineProperty(navigator, 'vibrate', {
    configurable: true,
    value: (motif) => {
      const forme = Array.isArray(motif) ? motif.join('-') : String(motif);
      if (forme === '24-40-24') noter('confirmation');
      return true;
    },
  });
});

const page = await contexte.newPage();

// Un authentificateur virtuel : l'équivalent d'une empreinte digitale, piloté par le
// test. Sans lui, la voie « authentification de l'appareil » du chiffrement ne serait
// vérifiable sur aucune machine sans doigt.
const cdp = await contexte.newCDPSession(page);
await cdp.send('WebAuthn.enable');
await cdp.send('WebAuthn.addVirtualAuthenticator', {
  options: {
    protocol: 'ctap2',
    ctap2Version: 'ctap2_1',
    transport: 'internal',
    hasResidentKey: true,
    hasUserVerification: true,
    isUserVerified: true,
    automaticPresenceSimulation: true,
    hasPrf: true,
  },
});

// Tout ce que la page tente d'envoyer ailleurs que chez elle. La promesse du produit
// — réglage d'analyse distante éteint, rien ne sort — ne vaut que si
// elle se mesure ; une page peut affirmer n'importe quoi dans son écran de confiance.
const sorties = [];
// Ce qui part vers le point d'analyse, sur l'origine : la seule sortie de texte
// permise, et seulement réglage allumé (change `analyse-typesafe`, tâche 4.2).
const analyses = [];
page.on('request', (r) => {
  if (new URL(r.url()).pathname === '/api/analyser') {
    analyses.push({ methode: r.method(), corps: r.postData() ?? '' });
  }
});
page.on('request', (r) => {
  const hote = new URL(r.url()).host;
  if (hote && hote !== `localhost:${PORT}` && !r.url().startsWith('data:') && !r.url().startsWith('blob:')) {
    sorties.push(`${r.method()} ${r.url()}`);
  }
});

const erreurs = [];
page.on('pageerror', (e) => erreurs.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error') erreurs.push(m.text());
});

try {
  await page.goto(`${adresse}/`, { waitUntil: 'networkidle' });

  // --- La coquille s'affiche, un seul écran à la fois -----------------------
  // L'application rend son premier écran après un aller-retour IndexedDB. « networkidle »
  // dit que le réseau s'est tu, pas que l'application est prête : sur une machine lente,
  // le constat tombait avant le premier rendu. L'attente est une précondition, pas un
  // assouplissement — le constat qui suit reste « exactement un écran visible », et
  // l'absence de rendu échoue maintenant en le disant au lieu de se déguiser.
  const rendu = await page
    .locator('.ecran')
    .first()
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  verifier("l'application rend son premier écran", rendu);

  const visibles = await page.locator('.ecran:visible').count();
  verifier('un seul écran visible à la fois', visibles === 1, `${visibles} visible(s)`);

  // --- Capture écrite : aucun champ de rangement demandé --------------------
  await page.getByRole('button', { name: /écrire plutôt/i }).click();
  const zone = page.locator('textarea').first();
  await zone.fill(
    "Voir avec Marc pour le budget avant vendredi, c'est urgent. " +
      "Et j'ai dit à Karim que je lui envoie le planning.",
  );
  await page.getByRole('button', { name: /^déposer$/i }).click();
  await page.waitForTimeout(800);

  const champsRangement = await page
    .locator('input[name="projet"], input[name="dossier"], select[name="priorite"]')
    .count();
  verifier('aucun champ de rangement à la capture', champsRangement === 0);

  // --- La capture survit à un rechargement ---------------------------------
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const texteCapturer = await page.locator('body').innerText();
  verifier(
    'la capture survit au rechargement',
    /budget|Marc/i.test(texteCapturer),
    'retrouvée dans les dernières captures',
  );

  // --- La Revue propose ce qui a été compris -------------------------------
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(600);
  const texteRevue = await page.locator('body').innerText();
  verifier('la Revue présente des éléments à décider', /budget|planning/i.test(texteRevue));

  // --- Accepter : une tâche ne sort pas de la Revue sans plan ---------------
  const accepter = page.locator('.bouton--accepter').first();
  const peutAccepter = await accepter.count();
  verifier('un élément se décide depuis la Revue', peutAccepter > 0);

  await accepter.click();
  await page.waitForTimeout(400);

  // Accepter une tâche doit réclamer un plan, pas la ranger en silence.
  const planDemande = await page.locator('.plan__question:visible').count();
  verifier('accepter une tâche réclame un plan', planDemande > 0);

  await page.locator('.bouton--plan').first().click();
  await page.waitForTimeout(600);

  // --- Maintenant : jamais plus de trois ------------------------------------
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(600);
  const cartes = await page.locator('.proposition').count();
  verifier(
    'Maintenant propose l’élément accepté, et jamais plus de trois',
    cartes >= 1 && cartes <= 3,
    `${cartes} carte(s)`,
  );

  const texteMaintenant = await page.locator('body').innerText();
  verifier(
    'aucun compteur de tâches restantes',
    !/\b\d+\s+(t[âa]ches?|restantes?)\b/i.test(texteMaintenant),
  );

  // --- La justification dit la conséquence, pas seulement une date ----------
  const raisons = await page.locator('.proposition__raison').allInnerTexts();
  verifier(
    'chaque proposition justifie par la conséquence',
    raisons.length > 0 && raisons.every((r) => r.includes('—')),
    raisons[0] ?? 'aucune proposition',
  );

  verifier('aucune erreur JavaScript en console', erreurs.length === 0, erreurs.slice(0, 2).join(' | '));

  await page.screenshot({ path: 'captures-ecran/bout-en-bout-maintenant.png', fullPage: true });

  // --- Une attente sans nouvelle remonte d'elle-même ------------------------
  // C'est la moitié du produit que l'utilisateur ne peut pas réclamer : il a
  // précisément oublié ce qu'il attend. Semé directement en base, parce que le
  // scénario demande une échéance vieille de plusieurs semaines.
  await page.evaluate(async () => {
    const base = await new Promise((ok, ko) => {
      const r = indexedDB.open('zenote');
      r.onsuccess = () => ok(r.result);
      r.onerror = () => ko(r.error);
    });
    await new Promise((ok, ko) => {
      const t = base.transaction(['captures', 'elements'], 'readwrite');
      t.objectStore('captures').put({
        id: 'c-attente', creeLe: '2026-01-05T09:00:00.000Z', source: 'ECRITE',
        texte: "Karim doit m'envoyer le planning", etatTranscription: 'OK',
        dureeMs: null, audio: null, incomplete: false, analysee: true,
      });
      t.objectStore('elements').put({
        id: 'e-attente', captureId: 'c-attente', type: 'ATTENTE',
        texte: 'Retour de Karim sur le planning', debutCar: 0, finCar: 20,
        echeance: '2026-01-10', interlocuteur: 'Karim', verdict: 'ACCEPTE',
        corrigeParHumain: false,
      });
      t.oncomplete = () => ok();
      t.onerror = () => ko(t.error);
    });
  });

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(700);

  const relances = await page.locator('.relance').count();
  verifier('une attente sans nouvelle remonte en Revue', relances >= 1, `${relances} relance(s)`);

  const motifRelance = await page.locator('.relance__motif').first().innerText();
  verifier(
    'la relance dit depuis quand, sans reprocher ni supposer un genre',
    /sans nouvelle/i.test(motifRelance) && !/ elle| lui/.test(motifRelance),
    motifRelance,
  );

  await page.locator('.relance .bouton--clore').first().click();
  await page.waitForTimeout(700);
  const restantes = await page.locator('.relance').count();
  verifier(
    'une relance traitée ne remonte plus',
    restantes === relances - 1,
    `${restantes} restante(s)`,
  );

  // --- Parler, relâcher, retrouver les mots ----------------------------------
  // La promesse entière du produit, mesurée : l'appui enregistre, la transcription
  // se fait sur l'appareil, l'analyse produit des éléments, la Revue les présente.
  // Le micro simulé joue « Rappeler le couvreur pour le devis du toit avant
  // vendredi » en boucle ; on tient assez longtemps pour en capter une entière.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);
  await page.locator('.bouton-capture').focus();
  // Le journal repart vide ici : ce qui a été écrit plus tôt dans le parcours
  // satisferait l'ordre sans rien dire de cette capture-ci.
  await page.evaluate(() => {
    window.__journal.length = 0;
  });
  await page.keyboard.down(' ');
  await page.waitForTimeout(6500);
  await page.keyboard.up(' ');

  // La confirmation suit l'écriture en base — quelques dizaines de millisecondes —
  // et doit arriver alors que la transcription, elle, n'a pas encore rendu son texte.
  let confirmation = '';
  let etatPendantConfirmation = '';
  for (let essai = 0; essai < 40 && !/c'est à moi/i.test(confirmation); essai += 1) {
    await page.waitForTimeout(100);
    confirmation = await page.locator('.message').innerText().catch(() => '');
  }
  etatPendantConfirmation =
    (await page.locator('.journal__ligne').first().getAttribute('data-etat')) ?? '';
  verifier(
    'relâcher confirme aussitôt, avant toute transcription',
    /c'est à moi/i.test(confirmation) && etatPendantConfirmation === 'en-cours',
    `${confirmation} — journal : ${etatPendantConfirmation}`,
  );

  // Et dans cet ordre-là, qui est la promesse elle-même.
  const journalOrdre = await page.evaluate(() => window.__journal);
  // L'ordre se lit sur le journal, pas sur les horloges : les deux faits peuvent
  // tomber dans la même milliseconde, et une comparaison de dates laisserait alors
  // passer l'inversion exacte que cette vérification existe pour attraper.
  const rangDurable = journalOrdre.findIndex((e) => e.quoi === 'capture-durable');
  const rangSignal = journalOrdre.findIndex((e) => e.quoi === 'confirmation');
  const durable = journalOrdre[rangDurable];
  const signale = journalOrdre[rangSignal];
  verifier(
    'la confirmation n’est pas émise avant que la capture soit durablement écrite',
    rangDurable !== -1 && rangSignal !== -1 && rangDurable < rangSignal,
    durable && signale
      ? `écrite à ${Math.round(durable.t)} ms, confirmée à ${Math.round(signale.t)} ms`
      : `écriture ${durable ? 'vue' : 'jamais vue'}, confirmation ${signale ? 'vue' : 'jamais vue'}`,
  );
  verifier(
    'et le corps ne reçoit ce signal qu’une fois, pour une capture',
    journalOrdre.filter((e) => e.quoi === 'confirmation').length === 1,
    `${journalOrdre.filter((e) => e.quoi === 'confirmation').length} signal(aux)`,
  );

  // La transcription tourne en arrière-plan : on attend que la dernière ligne du
  // journal porte du texte reconnu — jusqu'à une minute, le moteur en WebAssembly
  // n'étant pas pressé sur une machine de test.
  let texteJournal = '';
  for (let essai = 0; essai < 120; essai += 1) {
    await page.waitForTimeout(500);
    const ligne = page.locator('.journal__ligne').first();
    if ((await ligne.getAttribute('data-etat')) === 'transcrite') {
      texteJournal = await ligne.locator('.journal__texte').innerText();
      break;
    }
  }
  verifier(
    'la parole est transcrite sur l’appareil, sans réseau',
    /couvreur/i.test(texteJournal),
    texteJournal || 'aucune transcription en une minute',
  );

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1000);
  const groupesParole = await page.locator('.groupe', { hasText: 'couvreur' }).count();
  verifier(
    'et ce qui a été dit arrive en Revue, en éléments à trancher',
    groupesParole >= 1,
    `${groupesParole} groupe(s)`,
  );

  // --- Une dictée que rien n'a transcrite ne disparaît pas --------------------
  // C'est le cas réel : la reconnaissance vocale du navigateur ne rend rien, aucun
  // élément n'est produit, et la Revue affichait « rien à ranger » alors qu'une
  // capture attendait. La promesse « tu peux oublier » se cassait en silence.
  await page.evaluate(async () => {
    const base = await new Promise((ok, ko) => {
      const r = indexedDB.open('zenote');
      r.onsuccess = () => ok(r.result);
      r.onerror = () => ko(r.error);
    });
    await new Promise((ok, ko) => {
      const t = base.transaction('captures', 'readwrite');
      t.objectStore('captures').put({
        id: 'c-muette', creeLe: new Date().toISOString(), source: 'VOCALE',
        texte: '', etatTranscription: 'ECHEC', dureeMs: 6000,
        audio: new Blob([new Uint8Array([26, 69, 223, 163])], { type: 'audio/webm' }),
        incomplete: false, analysee: false, essaisTranscription: 1,
      });
      t.oncomplete = () => ok();
      t.onerror = () => ko(t.error);
    });
  });

  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(700);

  const ligneMuette = page.locator('.souffrance__ligne[data-capture="c-muette"]');
  verifier(
    'une dictée non transcrite apparaît en Revue au lieu de disparaître',
    (await ligneMuette.count()) === 1,
    `${await ligneMuette.count()} ligne(s)`,
  );

  const audioMuette = await ligneMuette.locator('audio').getAttribute('src');
  verifier(
    "son enregistrement est immédiatement écoutable",
    typeof audioMuette === 'string' && audioMuette.startsWith('blob:'),
    audioMuette ?? 'aucune source posée',
  );

  const motif = await ligneMuette.locator('.souffrance__motif').innerText();
  verifier(
    'la raison est dite sans reprocher quoi que ce soit',
    /reconnu|transcrire|interrompu/i.test(motif) && !/erreur|échec/i.test(motif),
    motif,
  );

  await ligneMuette.locator('.souffrance__champ').fill('Relancer le notaire pour la promesse.');
  await ligneMuette.locator('.bouton--plein').click();
  await page.waitForTimeout(1200);

  verifier(
    'reprise à la main, la capture disparaît des captures en souffrance',
    (await page.locator('.souffrance__ligne[data-capture="c-muette"]').count()) === 0,
  );

  const reprise = await page.locator('.groupe', { hasText: 'notaire' }).count();
  verifier(
    'et rejoint la file de la Revue comme les autres',
    reprise === 1,
    `${reprise} groupe(s)`,
  );

  // --- Remonter à l'audio d'origine ------------------------------------------
  // Spec `transcription` — « Conservation de la source ». C'est le recours quand la
  // reconnaissance vocale se trompe : tant que l'enregistrement est atteignable, la
  // note n'est pas perdue, seulement mal lue. L'audio semé ici n'est pas décodable —
  // ce qui se vérifie est le câblage : chargement différé, puis source posée.
  await page.evaluate(async () => {
    const base = await new Promise((ok, ko) => {
      const r = indexedDB.open('zenote');
      r.onsuccess = () => ok(r.result);
      r.onerror = () => ko(r.error);
    });
    await new Promise((ok, ko) => {
      const t = base.transaction(['captures', 'elements'], 'readwrite');
      t.objectStore('captures').put({
        id: 'c-vocale', creeLe: new Date().toISOString(), source: 'VOCALE',
        texte: 'Prévenir le plombier pour la fuite de la cave.', etatTranscription: 'OK',
        dureeMs: 12000, audio: new Blob([new Uint8Array([26, 69, 223, 163])], { type: 'audio/webm' }),
        incomplete: false, analysee: true,
      });
      t.objectStore('elements').put({
        id: 'e-vocale', captureId: 'c-vocale', type: 'TACHE',
        texte: 'Prévenir le plombier', debutCar: 0, finCar: 20,
        debutMs: 4000, finMs: 9000, verdict: 'EN_ATTENTE', corrigeParHumain: false,
      });
      t.oncomplete = () => ok();
      t.onerror = () => ko(t.error);
    });
  });

  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(700);

  const groupeVocal = page.locator('.groupe', { hasText: 'plombier' }).first();
  const repli = groupeVocal.locator('details.source');

  const avantOuverture = await repli.locator('audio').getAttribute('src');
  verifier(
    "l'audio n'est chargé qu'une fois la source ouverte",
    avantOuverture === null,
    avantOuverture ?? 'aucune source posée',
  );

  await repli.locator('summary').click();
  await page.waitForTimeout(400);
  const apresOuverture = await repli.locator('audio').getAttribute('src');
  verifier(
    "la source ouverte donne accès à l'enregistrement d'origine",
    typeof apresOuverture === 'string' && apresOuverture.startsWith('blob:'),
    apresOuverture ?? 'aucune source posée',
  );

  const libelleEcoute = await groupeVocal.locator('.bouton--ecouter').first().innerText();
  verifier(
    'un élément renvoie au moment où il a été dit',
    /écouter ce passage/i.test(libelleEcoute) && /4 s/.test(libelleEcoute),
    libelleEcoute,
  );

  // La source doit être atteignable depuis tout élément dérivé — donc aussi depuis
  // Maintenant, là où l'on est sur le point de faire la chose.
  await groupeVocal.locator('.bouton--accepter').first().click();
  await page.waitForTimeout(400);
  await groupeVocal.locator('.bouton--plan').first().click();
  await page.waitForTimeout(600);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(700);

  const carteVocale = page.locator('.proposition', { hasText: 'plombier' }).first();
  const sourceDansMaintenant = await carteVocale.locator('details.source').count();
  verifier(
    'Maintenant renvoie lui aussi à ce qui avait été dit',
    sourceDansMaintenant === 1,
    `${sourceDansMaintenant} renvoi(s)`,
  );

  // --- Retrouver par le moment, pas par les mots -----------------------------
  // Le scénario de la spec `recherche` : « le truc dont j'ai parlé en voiture la
  // semaine dernière ». Aucun de ces mots ne figure dans la capture — c'est le
  // point même : on ne se rappelle que le moment. Et la moitié qu'on ne sait pas
  // faire — où l'on était — doit être dite, pas devinée.
  const jourISO = (d) =>
    new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
  const maintenantReel = new Date();
  // Le mercredi de la semaine civile précédente : toujours dans l'intervalle, quel
  // que soit le jour où le test tourne.
  const lundiDeCetteSemaine = new Date(maintenantReel);
  lundiDeCetteSemaine.setDate(
    maintenantReel.getDate() - ((maintenantReel.getDay() + 6) % 7),
  );
  const mercrediDernier = new Date(lundiDeCetteSemaine);
  mercrediDernier.setDate(lundiDeCetteSemaine.getDate() - 5);

  await page.evaluate(async ([isoAvant, isoAujourdhui]) => {
    const base = await new Promise((ok, ko) => {
      const r = indexedDB.open('zenote');
      r.onsuccess = () => ok(r.result);
      r.onerror = () => ko(r.error);
    });
    await new Promise((ok, ko) => {
      const t = base.transaction('captures', 'readwrite');
      t.objectStore('captures').put({
        id: 'c-semaine-derniere', creeLe: isoAvant, source: 'ECRITE',
        texte: 'Le devis du toit, à rappeler.', etatTranscription: 'OK',
        dureeMs: null, audio: null, incomplete: false, analysee: true,
      });
      t.objectStore('captures').put({
        id: 'c-cette-semaine', creeLe: isoAujourdhui, source: 'ECRITE',
        texte: 'Penser aux pneus.', etatTranscription: 'OK',
        dureeMs: null, audio: null, incomplete: false, analysee: true,
      });
      t.oncomplete = () => ok();
      t.onerror = () => ko(t.error);
    });
  }, [`${jourISO(mercrediDernier)}T14:00:00`, `${jourISO(maintenantReel)}T09:00:00`]);

  await page.locator('.retrait__lien[data-ecran="recherche"]').click();
  await page.waitForTimeout(500);
  await page
    .locator('.quete--mots .quete__champ')
    .fill("le truc dont j'ai parlé en voiture la semaine dernière");
  await page.locator('.quete--mots button[type="submit"]').click();
  await page.waitForTimeout(700);

  const extraits = await page.locator('.citation__extrait').allInnerTexts();
  verifier(
    'une question qui ne donne que le moment retrouve la bonne capture',
    extraits.length === 1 && /devis du toit/.test(extraits[0]),
    extraits.join(' | ') || 'aucune citation',
  );

  const ecartee = await page.locator('.ecartee').count();
  const texteEcartee = ecartee > 0 ? await page.locator('.ecartee').innerText() : '';
  verifier(
    'ce que le produit ne sait pas faire est dit, pas deviné',
    ecartee === 1 && /position|lieu/i.test(texteEcartee),
    texteEcartee || 'aucune mention',
  );

  // --- Quitter l'écran pendant un enregistrement ne perd rien -----------------
  // « Aucune capture perdue » est l'une des trois promesses mesurables du produit.
  // Elle se vérifie là où elle casse : en changeant d'écran, le doigt encore appuyé.
  const compterCaptures = () =>
    page.evaluate(async () => {
      const base = await new Promise((ok, ko) => {
        const r = indexedDB.open('zenote');
        r.onsuccess = () => ok(r.result);
        r.onerror = () => ko(r.error);
      });
      return await new Promise((ok, ko) => {
        const d = base.transaction('captures', 'readonly').objectStore('captures').getAll();
        d.onsuccess = () => ok(d.result.length);
        d.onerror = () => ko(d.error);
      });
    });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);
  const avant = await compterCaptures();

  // Le chemin clavier est le même geste que l'appui long : maintenir, puis relâcher.
  await page.locator('.bouton-capture, #vue button').first().focus();
  await page.keyboard.down(' ');
  // Assez long pour que l'enregistreur produise réellement un extrait : en dessous,
  // c'est le test qui est trop pressé, pas le produit qui perd la capture.
  await page.waitForTimeout(1600);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.keyboard.up(' ');

  // L'écriture est asynchrone : on attend qu'elle aboutisse plutôt que de parier sur
  // un délai. Si elle n'aboutit jamais, la boucle rend l'ancien compte et le constat
  // échoue — c'est bien la capture perdue qui est mesurée, pas la patience du test.
  let apres = avant;
  for (let essai = 0; essai < 40 && apres === avant; essai += 1) {
    await page.waitForTimeout(100);
    apres = await compterCaptures();
  }
  verifier(
    "quitter l'écran pendant un enregistrement ne perd pas la capture",
    apres === avant + 1,
    `${avant} capture(s) avant, ${apres} après`,
  );

  // --- Les plans reviennent, et ceux qui ne passent pas changent de forme -----
  // Spec `rappels`. Un plan attaché en Revue doit revenir à un point de rupture —
  // ici, la reprise de l'application — en une seule notification groupée. Et s'il est
  // écarté trois fois, il cesse de se représenter à l'identique.

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const bande = page.locator('#rappels .rappels');
  verifier(
    'un plan attaché en Revue revient à la reprise de l’application',
    (await bande.count()) === 1,
    `${await bande.count()} bande(s) de rappel`,
  );

  const signal = await bande.locator('.rappels__signal').first().innerText();
  verifier(
    'le rappel dit à quel signal il était accroché',
    /«.+»/.test(signal),
    signal,
  );

  // Trois fois écarté : chaque reprise est un point de rupture.
  for (let fois = 0; fois < 3; fois += 1) {
    await page.locator('#rappels .bouton--discret').click();
    await page.waitForTimeout(500);
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
  }

  verifier(
    'écarté trois fois, le rappel cesse de se représenter à l’identique',
    (await page.locator('#rappels .rappels').count()) === 0,
    `${await page.locator('#rappels .rappels').count()} bande(s) restante(s)`,
  );

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(900);

  const escalade = page.locator('.escalades__ligne').first();
  verifier(
    'il remonte en Revue au lieu de disparaître',
    (await page.locator('.escalades__ligne').count()) >= 1,
    `${await page.locator('.escalades__ligne').count()} escalade(s)`,
  );

  // La Revue se re-rend quand ses lectures aboutissent : lire sans réessayer peut
  // tomber entre deux rendus, sur une ligne déjà détachée. On attend le premier
  // bouton — le locator se résout à nouveau — avant de lire les trois.
  const boutonsEscalade = escalade.locator('.escalades__actions .bouton');
  await boutonsEscalade.first().waitFor({ state: 'visible' });
  const issues = await boutonsEscalade.allInnerTexts();
  verifier(
    'avec les trois sorties : replanifier, déléguer, abandonner',
    /replanifier/i.test(issues.join(' ')) &&
      /déléguer/i.test(issues.join(' ')) &&
      /abandonner/i.test(issues.join(' ')),
    issues.join(' · '),
  );

  const motifEscalade = await escalade.locator('.escalades__motif').innerText();
  verifier(
    'le motif est un constat sur le rappel, pas un reproche',
    /ignor/i.test(motifEscalade) && !/vous avez|auriez|oublié/i.test(motifEscalade),
    motifEscalade,
  );

  // Après 18 h, « ce soir » est déjà échu pour tous les plans posés dans ce parcours :
  // la bande en groupe plusieurs, et les écarter les escalade tous. Ce qui est vérifié
  // est donc le sort de l'escalade replanifiée, pas le compte total.
  const escaladeReplanifiee = await escalade.getAttribute('data-element');
  await escalade.locator('.escalades__actions .bouton').first().click();
  await page.waitForTimeout(900);
  const restante = page.locator(`.escalades__ligne[data-element="${escaladeReplanifiee}"]`);
  verifier(
    'replanifier le sort de l’escalade',
    (await restante.count()) === 0,
    `${await page.locator('.escalades__ligne').count()} escalade(s) restante(s), dont ${await restante.count()} replanifiée`,
  );

  // --- La transcription lisible, et ce qui a été dit --------------------------
  // Spec `transcription` — « Suppression des hésitations » et « Reformulation
  // réversible ». Le jeu annoté qui prouve que rien de porteur ne disparaît vit dans
  // le cœur (`DisfluencesTest`) ; ce qui se vérifie ici est l'autre moitié, celle que
  // le cœur ne peut pas voir : que la Revue montre bien la version lisible, et que le
  // brut reste atteignable au lieu d'être remplacé.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: /écrire plutôt/i }).click();
  await page.locator('.zone-ecrite').fill(
    "euh il faut que je je rappelle Sophie euh avant vendredi pour le devis de 1500 euros",
  );
  await page.getByRole('button', { name: /^déposer$/i }).click();
  await page.waitForTimeout(900);

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(900);

  // L'analyse tourne en arrière-plan, et le bloc source est replié : la Revue le
  // présente refermé pour ne pas répéter la transcription sous chaque élément.
  const source = page.locator('details.source', { hasText: /rappelle Sophie/i }).first();
  const vu = await source
    .waitFor({ state: 'attached', timeout: 20_000 })
    .then(() => true)
    .catch(() => false);
  if (vu) {
    await source.locator('.source__resume').click();
    await page.waitForTimeout(300);
  }
  const bloc = source.locator('.source__transcription');
  const lisible = vu ? await bloc.locator('.source__texte').innerText() : '';
  verifier(
    'la Revue montre la transcription sans les hésitations',
    vu && lisible !== '' && !/\beuh\b/i.test(lisible) && !/\bje je\b/i.test(lisible),
    lisible || 'transcription lisible non trouvée',
  );
  verifier(
    'et sans rien perdre du nom, du chiffre ni de la date',
    /Sophie/.test(lisible) && /1500/.test(lisible) && /vendredi/i.test(lisible),
    lisible,
  );

  await bloc.locator('.source__bascule').click();
  const brut = await bloc.locator('.source__texte').innerText();
  verifier(
    'ce qui a été dit reste atteignable, mot pour mot',
    /\beuh\b/i.test(brut) && /\bje je\b/i.test(brut),
    brut,
  );

  // --- Garder une capture sur l'appareil -------------------------------------
  // Spec `analyse-distante` — « Capture non transmissible ». Le choix se pose sur la
  // source, en Revue, et sa trace reste en tête de la source une fois refermée.
  await source.locator('.source__transmission').click();
  await page.waitForTimeout(600);
  const gardee = page.locator('details.source', { hasText: /rappelle Sophie/i }).first();
  const mention = await gardee
    .locator('.source__local')
    .innerText()
    .catch(() => '');
  verifier(
    'une capture marquée « ne pas envoyer » apparaît comme analysée sur l’appareil',
    /analysée sur l’appareil/i.test(mention),
    mention || 'mention absente',
  );
  if (!(await gardee.evaluate((d) => d.open))) await gardee.locator('.source__resume').click();
  verifier(
    'et l’interrupteur dit qu’il est enclenché',
    (await gardee.locator('.source__transmission').getAttribute('aria-pressed')) === 'true',
  );

  // Les exclusions de sphère se posent dans « Vos données », réglage éteint compris.
  await page.locator('.retrait__lien[data-ecran="reglages"]').click();
  await page.waitForTimeout(600);
  await page.getByRole('checkbox', { name: /notes personnelles/i }).check();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(300);
  await page.locator('.retrait__lien[data-ecran="reglages"]').click();
  await page.waitForTimeout(600);
  verifier(
    'l’exclusion d’une sphère survit à un changement d’écran',
    await page.getByRole('checkbox', { name: /notes personnelles/i }).isChecked(),
  );
  await page.getByRole('checkbox', { name: /notes personnelles/i }).uncheck();
  await page.waitForTimeout(300);

  // Change `analyse-typesafe`, tâche 4.1 : allumer sans confirmer laisse éteint.
  await page.getByRole('button', { name: /allumer l’analyse distante/i }).click();
  const explication = await page.locator('.analyse-distante__confirmation').innerText();
  verifier(
    'allumer l’analyse distante dit d’abord ce qui part, vers qui, et ce qui ne part jamais',
    /Ce qui part/.test(explication) && /TypeSafe/.test(explication) && /Ce qui ne part jamais/.test(explication),
  );
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(300);
  await page.locator('.retrait__lien[data-ecran="reglages"]').click();
  await page.waitForTimeout(600);
  verifier(
    'sans confirmation, l’analyse distante reste éteinte',
    /éteinte/.test(await page.locator('.analyse-distante__etat').innerText()) &&
      /L’analyse se fait sur cet appareil/.test(await page.locator('.faits').innerText()),
  );
  await page.getByRole('button', { name: /allumer l’analyse distante/i }).click();
  await page.getByRole('button', { name: /^allumer$/i }).click();
  await page.waitForTimeout(600);
  verifier(
    'confirmée, elle s’allume, et « Ce qui quitte l’appareil » le dit en tête',
    /allumée/.test(await page.locator('.analyse-distante__etat').innerText()) &&
      /Le texte de vos notes part/.test(await page.locator('.faits .fait__titre').first().innerText()),
  );
  await page.getByRole('button', { name: /éteindre l’analyse distante/i }).click();
  await page.waitForTimeout(600);
  verifier(
    'et s’éteint d’un geste',
    /éteinte/.test(await page.locator('.analyse-distante__etat').innerText()),
  );
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(600);

  // --- L'analyse distante ------------------------------------------------------
  // Change `analyse-typesafe`, tâche 4.2. Réglage éteint, rien ne part. Allumé, rien
  // ne part pour une capture gardée ; pour les autres, un seul `POST /api/analyser`
  // de l'origine, qui ne porte que des passages.
  verifier(
    'réglage éteint, aucune requête d’analyse n’est partie',
    analyses.length === 0,
    analyses.map((a) => a.methode).join(' | ') || 'aucune',
  );

  // Ces captures ne servent qu'ici : elles sont retirées à la fin de la section,
  // pour ne pas allonger la file que les vérifications suivantes comptent.
  const capturesDistantes = [];
  const gardeeId = await page.evaluate(async () => {
    await window.__zenote.ecrireReglage('analyseDistante', true);
    const capture = await window.__zenote.capturer({
      texte: 'Rendez-vous chez l’ophtalmologue pour Léa.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.majCapture(capture.id, { transmissible: false });
    await window.__zenote.traiterFileAnalyse();
    return capture.id;
  });
  capturesDistantes.push(gardeeId);
  verifier('réglage allumé, une capture gardée ne part pas', analyses.length === 0);

  simulation.mode = 'repondre';
  const phraseDistante = 'Préparer le budget du client pour le comité. Appeler Marc demain matin.';
  capturesDistantes.push(
    await page.evaluate(async (texte) => {
      const capture = await window.__zenote.capturer({ texte, source: 'ECRITE', etatTranscription: 'OK' });
      await window.__zenote.traiterFileAnalyse();
      return capture.id;
    }, phraseDistante),
  );
  const envoi = analyses[0];
  let corpsEnvoye = null;
  try {
    corpsEnvoye = JSON.parse(envoi?.corps ?? '');
  } catch {
    corpsEnvoye = null;
  }
  verifier(
    'réglage allumé, une seule requête part, vers POST /api/analyser de l’origine',
    analyses.length === 1 && envoi.methode === 'POST',
    `${analyses.length} requête(s)`,
  );
  verifier(
    'et elle ne porte que des passages de la note — ni audio, ni date, ni identifiant',
    corpsEnvoye !== null &&
      Object.keys(corpsEnvoye).join() === 'passages' &&
      corpsEnvoye.passages.length > 0 &&
      corpsEnvoye.passages.every((p) => typeof p === 'string' && phraseDistante.includes(p)) &&
      !/\d{4}-\d{2}-\d{2}|cap-|el-|audio/i.test(envoi.corps),
    envoi?.corps ?? 'rien',
  );
  if (!CIBLE) {
    await page.locator('.nav__lien[data-onglet="maintenant"]').click();
    await page.waitForTimeout(300);
    await page.locator('.nav__lien[data-onglet="revue"]').click();
    await page.waitForTimeout(900);
    const origineDistante = await page
      .locator('.entree', { hasText: /budget du client pour le comité/i })
      .locator('.entree__indice')
      .first()
      .innerText()
      .catch(() => '');
    verifier(
      'l’élément jugé à distance le dit',
      /Origine : service d’analyse distant \(simulation\)/.test(origineDistante),
      origineDistante || 'origine absente',
    );
  }

  // Le repli : le service ne répond pas, la note est analysée ici, la Revue le dit
  // une fois, et chaque élément garde son origine.
  simulation.mode = 'non-configure';
  capturesDistantes.push(
    await page.evaluate(async () => {
      const capture = await window.__zenote.capturer({
        texte: 'Relire le contrat du fournisseur avant la réunion.',
        source: 'ECRITE',
        etatTranscription: 'OK',
      });
      await window.__zenote.traiterFileAnalyse();
      return capture.id;
    }),
  );
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(900);
  const avis = await page.locator('.avis-repli').allInnerTexts();
  verifier(
    'un repli de l’analyse distante est dit une seule fois en Revue',
    avis.length === 1 && /1 note a été analysée sur l’appareil/.test(avis[0]),
    avis.join(' | ') || 'aucun avis',
  );
  const origine = await page
    .locator('.entree', { hasText: /contrat du fournisseur/i })
    .locator('.entree__indice')
    .first()
    .innerText()
    .catch(() => '');
  verifier(
    'et l’élément dit d’où vient son analyse',
    /Origine : analyse sur l’appareil/.test(origine),
    origine || 'origine absente',
  );
  await page.evaluate(() => window.__zenote.ecrireReglage('analyseDistante', false));
  const avantExtinction = analyses.length;
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(600);
  verifier(
    'réglage éteint, analyser sur l’appareil n’est plus un repli à signaler',
    (await page.locator('.avis-repli').count()) === 0,
  );
  await page.evaluate(async (ids) => {
    for (const id of ids) await window.__zenote.supprimerCapture(id);
  }, capturesDistantes);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(600);

  // --- Un passage mal entendu -------------------------------------------------
  // Spec `transcription` — « Passage inaudible ». Faire mal entendre un vrai micro
  // n'est pas reproductible ; ce qui l'est, c'est la suite : une capture dont la
  // transcription porte un passage douteux, et ce que les écrans en font. La règle
  // qui décide (tout l'ancrage dans du douteux, ou non) est vérifiée dans le cœur.
  // Deux choses dans la même capture : sans cela, l'absence du bouton « tout
  // accepter » ne prouverait rien — il n'est jamais proposé sur un élément seul.
  const phraseDouteuse =
    'rappeler le carreleur pour le devis. Envoyer le planning à Sophie avant vendredi.';
  await page.evaluate(async (phrase) => {
    const capture = await window.__zenote.capturer({
      texte: phrase,
      source: 'VOCALE',
      etatTranscription: 'OK',
    });
    await window.__zenote.majCapture(capture.id, {
      passagesIncertains: [{ debutCar: 0, finCar: phrase.length }],
    });
    await window.__zenote.traiterFileAnalyse();
  }, phraseDouteuse);

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(900);

  const douteuse = page.locator('details.source', { hasText: /carreleur/i }).first();
  const vueDouteuse = await douteuse
    .waitFor({ state: 'attached', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  if (vueDouteuse) {
    await douteuse.locator('.source__resume').click();
    await page.waitForTimeout(300);
  }
  const souligne = vueDouteuse
    ? await douteuse.locator('.source__incertain').first().innerText().catch(() => '')
    : '';
  verifier(
    'un passage mal entendu est souligné dans la transcription',
    souligne.includes('carreleur'),
    souligne || 'aucun passage souligné',
  );

  const groupeDouteux = page.locator('.groupe', { hasText: /carreleur/i }).first();
  const aConfirmer = await groupeDouteux.locator('.badge--doute').count();
  verifier(
    'et ce qui en découle est présenté à confirmer, pas comme acquis',
    aConfirmer > 0,
    `${aConfirmer} élément(s) à confirmer`,
  );
  const combien = await groupeDouteux.locator('.entree').count();
  const toutAccepter = await groupeDouteux.locator('.bouton--groupe').count();
  verifier(
    'l’acceptation groupée n’est pas proposée sur un groupe douteux',
    combien > 1 && toutAccepter === 0,
    `${combien} élément(s), ${toutAccepter} bouton(s) « tout accepter »`,
  );

  // --- Corriger, et ne plus avoir à le refaire ---------------------------------
  // Spec `transcription` — « Vocabulaire personnel ». Ce que le moteur fait du
  // lexique se vérifie en unitaire ; ce qui se vérifie ici est le geste complet :
  // corriger depuis la Revue réécrit la capture, la réanalyse, et retient le mot.
  await douteuse.locator('.correction__ouvrir').click();
  await page.waitForTimeout(200);
  await douteuse.locator('.correction__zone').fill(
    phraseDouteuse.replace('carreleur', 'couvreur'),
  );
  await douteuse.locator('.correction__valider').click();
  await page.waitForTimeout(1200);

  // La Revue se re-rend après la correction, et le bloc source repart replié.
  const corrigee = page
    .locator('details.source', { hasText: /Envoyer le planning/i })
    .first();
  const vueCorrigee = await corrigee
    .waitFor({ state: 'attached', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  if (vueCorrigee) {
    await corrigee.locator('.source__resume').click();
    await page.waitForTimeout(300);
  }
  const apresCorrection = vueCorrigee
    ? await corrigee.locator('.source__texte').innerText().catch(() => '')
    : '';
  verifier(
    'corriger une transcription la réécrit, sans toucher à l’enregistrement',
    /couvreur/i.test(apresCorrection) && !/carreleur/i.test(apresCorrection),
    apresCorrection || 'capture corrigée introuvable',
  );

  const retenu = await page.evaluate(
    () =>
      new Promise((ok) => {
        const requete = indexedDB.open('zenote');
        requete.onsuccess = () => {
          const base = requete.result;
          const lecture = base.transaction('lexique', 'readonly').objectStore('lexique').getAll();
          lecture.onsuccess = () => ok(JSON.stringify(lecture.result));
          lecture.onerror = () => ok('');
        };
        requete.onerror = () => ok('');
      }),
  );
  verifier(
    'et le mot corrigé est retenu pour les prochaines transcriptions',
    /carreleur/.test(retenu) && /couvreur/.test(retenu),
    retenu || 'lexique vide',
  );

  // --- Une échéance floue ne devient pas une date -----------------------------
  // Spec `extraction` — « Expression floue ». Le calcul est vérifié en unitaire ;
  // ce qui se vérifie ici est ce que l'écran en fait, parce que c'est là que
  // l'erreur ferait mal : un horizon présenté comme une date se lit comme une
  // promesse, et le produit la dirait en retard.
  await page.evaluate(async () => {
    const capture = await window.__zenote.capturer({
      texte: 'relancer Thomas sur le contrat dans les prochaines semaines',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.traiterFileAnalyse();
    return capture.id;
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(900);

  const floue = page.locator('.entree', { hasText: /Thomas/i }).first();
  const vueFloue = await floue
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const horizon = vueFloue
    ? await floue.locator('.badge--horizon').innerText().catch(() => '')
    : '';
  const dates = vueFloue ? await floue.locator('.badge--echeance').count() : -1;
  verifier(
    'une expression floue donne un horizon, pas une date',
    /sans date ferme/i.test(horizon) && dates === 0,
    `${horizon || 'aucun horizon'} — ${dates} badge(s) de date`,
  );

  const indice = vueFloue ? await floue.locator('.entree__indice').innerText() : '';
  verifier(
    'et l’expression dite reste visible sur l’élément',
    /prochaines semaines/i.test(indice),
    indice || 'aucune justification',
  );

  // --- Le filtre de sphère ------------------------------------------------------
  // Spec `memoire` — « Filtrage à la restitution ». La règle est vérifiée en
  // unitaire ; ce qui se vérifie ici est le vrai écran, parce que le filtre est
  // précisément le genre de chose dont on ne remarque pas qu'elle ne marche plus.
  await page.evaluate(async () => {
    await window.__zenote.capturer({
      texte: 'prendre rendez-vous chez le dentiste pour Camille',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.traiterFileAnalyse();
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(900);

  const avantFiltre = await page.locator('.entree').count();
  await page.locator('.spheres__choix[data-sphere="PROFESSIONNEL"]').click();
  await page.waitForTimeout(700);
  const apresFiltre = await page.locator('.entree').count();
  const dentiste = await page.locator('.entree', { hasText: /dentiste/i }).count();
  verifier(
    'filtrer sur une sphère retire ce qui n’en est pas',
    apresFiltre < avantFiltre && dentiste === 0,
    `${avantFiltre} élément(s) sans filtre, ${apresFiltre} en professionnel`,
  );

  const masques = await page.locator('.spheres__masques').innerText().catch(() => '');
  verifier(
    'et dit combien d’éléments sont de côté, pour qu’on ne les croie pas perdus',
    /de c[ôo]t[ée]/i.test(masques),
    masques || 'rien n’est dit',
  );

  await page.locator('.spheres__choix[data-sphere="TOUT"]').click();
  await page.waitForTimeout(700);
  const revenus = await page.locator('.entree').count();
  verifier(
    'lever le filtre rend tout : rien n’avait été déplacé',
    revenus === avantFiltre,
    `${revenus} élément(s), contre ${avantFiltre} avant`,
  );

  // --- « Quel Marc ? » -----------------------------------------------------------
  // Spec `memoire` — « Ambiguïté non résolue ». Le classement appartient au cœur ;
  // ce qui se vérifie ici est que la mémoire, reconstruite depuis les notes, remonte
  // bien jusqu'à l'écran, et que la question s'y pose au lieu d'un choix silencieux.
  await page.evaluate(async () => {
    for (const texte of [
      'voir le budget Atlas avec Marc Dupuis',
      'organiser le déménagement des bureaux avec Marc Lefevre',
      'voir avec Marc pour le budget Atlas',
    ]) {
      await window.__zenote.capturer({ texte, source: 'ECRITE', etatTranscription: 'OK' });
    }
    await window.__zenote.traiterFileAnalyse();
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  const question = page.locator('.reference').first();
  const posee = await question
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const intitule = posee ? await question.locator('.reference__question').innerText() : '';
  verifier(
    'un prénom est résolu par le sujet, et proposé au lieu d’être appliqué',
    /sans doute Marc Dupuis/i.test(intitule),
    intitule || 'aucune proposition',
  );

  const noms = posee ? await question.locator('.reference__choix').allInnerTexts() : [];
  const appuis = posee ? await question.locator('.reference__appui').allInnerTexts() : [];
  verifier(
    'en disant sur quoi il s’est appuyé, et sans écarter l’autre candidat',
    noms.length > 1 && (appuis[0] ?? '').includes('budget'),
    `${noms.join(' · ')} — ${appuis[0] ?? 'sans appui'}`,
  );

  if (posee) {
    await question.locator('.reference__choix').first().click();
    await page.waitForTimeout(900);
  }
  const questionsRestantes = await page.locator('.reference').count();
  verifier(
    'confirmer la proposition la fait disparaître',
    posee && questionsRestantes === 0,
    posee ? `${questionsRestantes} question(s) restante(s)` : 'aucune question n’avait été posée',
  );

  // --- « Le truc dont on a parlé » -----------------------------------------------
  // Spec `memoire` — « Référence à un échange passé ». La recherche est vérifiée
  // ailleurs ; ce qui se vérifie ici est qu'une note qui renvoie à autre chose se
  // reconnaît, que les pistes sont proposées sans être retenues d'office, et que le
  // rattachement, une fois posé, se lit.
  await page.evaluate(async () => {
    await window.__zenote.capturer({
      // Une vraie conséquence : sans quoi la Revue, réduite aux douze éléments les
      // plus lourds, laisserait ces deux notes dans la file et rien ne s'afficherait.
      texte: 'point avec Sophie sur le chiffrage du chantier de Bron, sinon le chantier est bloqué',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.capturer({
      texte: 'reprendre le truc dont on a parlé avec Sophie, sinon le chantier est bloqué',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.traiterFileAnalyse();
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  const renvoi = page
    .locator('details.source', { hasText: /le truc dont on a parl/i })
    .first();
  const vuRenvoi = await renvoi
    .waitFor({ state: 'attached', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  if (vuRenvoi) {
    await renvoi.locator('.source__resume').click();
    await page.waitForTimeout(300);
  }
  const pistes = vuRenvoi ? await renvoi.locator('.renvoi__choix').allInnerTexts() : [];
  verifier(
    'une note qui renvoie à un échange passé propose les pistes',
    pistes.length > 0 && pistes.some((p) => /chiffrage|Sophie/i.test(p)),
    pistes.join(' · ') || 'aucune piste proposée',
  );

  if (pistes.length > 0) {
    await renvoi.locator('.renvoi__choix').first().click();
    await page.waitForTimeout(1000);
  }
  const rattachee = page
    .locator('details.source', { hasText: /le truc dont on a parl/i })
    .first();
  const ouverte = await rattachee
    .waitFor({ state: 'attached', timeout: 10_000 })
    .then(() => true)
    .catch(() => false);
  if (ouverte) {
    await rattachee.locator('.source__resume').click();
    await page.waitForTimeout(300);
  }
  const pose = ouverte
    ? await rattachee.locator('.renvoi--pose').innerText().catch(() => '')
    : '';
  verifier(
    'et le rattachement retenu se lit sur la capture',
    /suite de/i.test(pose) && /chiffrage/i.test(pose),
    pose || 'aucun rattachement affiché',
  );

  // --- Écarter, et ce qui remonte au bout de trois fois --------------------------
  // Spec `priorisation` — « Élément écarté » et « Rejets répétés ». Écarter doit
  // laisser l'élément actif ; le compte, lui, vivait en mémoire et disparaissait au
  // rechargement. Le geste marchait donc parfaitement, et ne déclenchait jamais rien.
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(700);

  const avantEcart = await page.locator('.proposition').first().innerText().catch(() => '');
  const peutEcarter = await page
    .locator('.proposition .bouton')
    .filter({ hasText: /pas maintenant/i })
    .count();

  // Trois fois le même élément, et non trois éléments une fois chacun : écarter fait
  // place au suivant, donc sans revenir on écarterait toute la pile. Le rechargement
  // est ce qui ramène la proposition en tête — c'est aussi ce qui se passe quand on
  // rouvre l'application le lendemain.
  let ecarteTrois = false;
  if (peutEcarter > 0) {
    for (let fois = 0; fois < 3; fois += 1) {
      const bouton = page
        .locator('.proposition .bouton')
        .filter({ hasText: /pas maintenant/i })
        .first();
      if ((await bouton.count()) === 0) break;
      await bouton.click();
      await page.waitForTimeout(500);
      ecarteTrois = fois === 2;
      if (fois < 2) {
        await page.reload({ waitUntil: 'networkidle' });
        await page.waitForTimeout(700);
        await page.locator('.nav__lien[data-onglet="maintenant"]').click();
        await page.waitForTimeout(700);
      }
    }
  }
  const apresEcart = await page.locator('.proposition').first().innerText().catch(() => '');
  verifier(
    'écarter laisse la place au suivant',
    peutEcarter > 0 && avantEcart !== apresEcart,
    peutEcarter > 0 ? 'la proposition en tête a changé' : 'rien à écarter',
  );

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  const remontee = page.locator('.arevoir__ligne').first();
  const remonte = await remontee
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const motifRemontee = remonte ? await remontee.locator('.arevoir__motif').innerText() : '';
  verifier(
    'écarté trois fois, l’élément remonte en Revue — le compte a survécu au rechargement',
    /écart[ée]\s+\d+\s+fois/i.test(motifRemontee),
    motifRemontee || 'rien n’est remonté',
  );

  const issuesRemontee = remonte
    ? await remontee.locator('.arevoir__issue').allInnerTexts()
    : [];
  verifier(
    'avec de quoi le reprendre autrement, pas pour le redemander',
    /reformuler/i.test(issuesRemontee.join(' ')) &&
      /découper/i.test(issuesRemontee.join(' ')) &&
      /abandonner/i.test(issuesRemontee.join(' ')),
    issuesRemontee.join(' · ') || 'aucune issue',
  );

  if (remonte) {
    await remontee.locator('.arevoir__champ').fill('appeler le notaire ; relire la promesse');
    await remontee.locator('.arevoir__issue[data-issue="DECOUPER"]').click();
    await page.waitForTimeout(1000);
  }
  const apresDecoupe = await page.locator('.arevoir__ligne').count();
  verifier(
    'découper le sort de la remontée',
    remonte && apresDecoupe === 0,
    remonte ? `${apresDecoupe} remontée(s) restante(s)` : 'rien n’avait remonté',
  );

  // --- Le créneau protégé --------------------------------------------------------
  // Spec `priorisation` — « Créneau tenu » et « Renoncement explicite ». La règle de
  // sélection est vérifiée dans le cœur ; ce qui se vérifie ici est que le créneau
  // s'ouvre à l'heure dite et que passer outre ne coûte ni friction ni commentaire.
  //
  // Il faut d'abord quelque chose qui mérite le créneau : lourd, accepté, et sans
  // échéance. Tout ce que le parcours a produit jusqu'ici a une date — c'est
  // précisément le genre d'élément que le créneau n'accueille pas.
  await page.evaluate(async () => {
    await window.__zenote.capturer({
      texte: 'préparer la reprise du dossier Atlas, sinon tout le chantier est bloqué',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.traiterFileAnalyse();
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  const aAccepter = page.locator('.entree', { hasText: /reprise du dossier Atlas/i }).first();
  const trouvee = await aAccepter
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  if (trouvee) {
    await aAccepter.locator('.bouton--accepter').click();
    await page.waitForTimeout(400);
    const plan = aAccepter.locator('.bouton--plan').first();
    if ((await plan.count()) > 0) {
      await plan.click();
      await page.waitForTimeout(800);
    }
  }

  // L'heure est posée sur celle du navigateur : attendre neuf heures du matin pour
  // vérifier un créneau de neuf heures ne serait pas un test.
  await page.evaluate(
    (heure) =>
      new Promise((ok) => {
        const requete = indexedDB.open('zenote');
        requete.onsuccess = () => {
          const magasin = requete.result
            .transaction('reglages', 'readwrite')
            .objectStore('reglages');
          magasin.put({ cle: 'creneauProtegeDebut', valeur: heure });
          magasin.put({ cle: 'creneauRenoncements', valeur: 0 });
          magasin.put({ cle: 'creneauVuLe', valeur: null });
          magasin.transaction.oncomplete = () => ok(true);
        };
        requete.onerror = () => ok(false);
      }),
    `${String(new Date().getHours()).padStart(2, '0')}:00`,
  );

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(900);

  const creneau = page.locator('.creneau').first();
  const ouvert = await creneau
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const propose = ouvert ? await creneau.locator('.creneau__texte').innerText() : '';
  verifier(
    'le créneau protégé s’ouvre à l’heure dite, avec ce qui compte',
    ouvert && propose.trim().length > 0,
    propose || 'aucun créneau',
  );

  const passer = ouvert ? await creneau.locator('.creneau__passe').count() : 0;
  verifier(
    'passer outre est un bouton comme un autre, sans friction',
    passer === 1,
    `${passer} bouton(s) pour passer`,
  );

  if (passer === 1) {
    await creneau.locator('.creneau__passe').click();
    await page.waitForTimeout(800);
  }
  const renoncements = await page.evaluate(
    () =>
      new Promise((ok) => {
        const requete = indexedDB.open('zenote');
        requete.onsuccess = () => {
          const lecture = requete.result
            .transaction('reglages', 'readonly')
            .objectStore('reglages')
            .get('creneauRenoncements');
          lecture.onsuccess = () => ok(lecture.result?.valeur ?? 0);
          lecture.onerror = () => ok(-1);
        };
        requete.onerror = () => ok(-1);
      }),
  );
  verifier(
    'le renoncement est retenu, sans un mot de reproche',
    renoncements === 1,
    `${renoncements} renoncement(s) compté(s)`,
  );

  // --- Importer un compte rendu de réunion ---------------------------------------
  // Spec `reunions` — « Compte rendu importé » et « Engagement extrait à confirmer ».
  // L'extraction est vérifiée en unitaire ; ce qui se vérifie ici est le geste, et
  // surtout que rien n'en sort comme un engagement ferme.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: /importer un compte rendu/i }).click();
  await page.waitForTimeout(300);
  await page.locator('.bloc-import input.champ').fill('Nicolas');
  await page.locator('.bloc-import textarea').fill(
    [
      'Réunion chantier du 22 septembre',
      // Une conséquence explicite sur chaque ligne : la Revue est réduite aux douze
      // éléments les plus lourds, et le parcours en a déjà produit davantage.
      '- Nicolas : envoyer le planning révisé au maître d’ouvrage, sinon le chantier est bloqué',
      '- Sophie : relancer le fournisseur sur le chiffrage du lot 3, sinon tout est bloqué',
    ].join('\n'),
  );
  await page.locator('.bloc-import .bouton--plein').click();
  await page.waitForTimeout(1200);

  const retourImport = await page.locator('.import__retour').innerText().catch(() => '');
  verifier(
    'un compte rendu importé rend des éléments, sans perdre le document',
    /\d+ élément/i.test(retourImport) && /gardé entier/i.test(retourImport),
    retourImport || 'aucun retour',
  );

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  const monEngagement = page.locator('.entree', { hasText: /planning révisé/i }).first();
  const vuEngagement = await monEngagement
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const typeEngagement = vuEngagement
    ? await monEngagement.locator('.badge--type').innerText()
    : '';
  const douteEngagement = vuEngagement
    ? await monEngagement.locator('.badge--doute').count()
    : 0;
  verifier(
    'ce que j’ai promis arrive comme engagement, à confirmer',
    /engagement/i.test(typeEngagement) && douteEngagement === 1,
    `${typeEngagement || 'type introuvable'} — ${douteEngagement} marque(s) « à confirmer »`,
  );

  const sonAttente = page.locator('.entree', { hasText: /relancer le fournisseur/i }).first();
  const vuAttente = await sonAttente
    .waitFor({ state: 'visible', timeout: 10_000 })
    .then(() => true)
    .catch(() => false);
  const badgesAttente = vuAttente ? await sonAttente.locator('.badge').allInnerTexts() : [];
  verifier(
    'ce que les autres ont promis arrive comme attente, portée par eux',
    /attente/i.test(badgesAttente.join(' ')) && /sophie/i.test(badgesAttente.join(' ')),
    badgesAttente.join(' · ') || 'aucune attente',
  );

  // --- Aucun enregistrement à l'insu des participants ----------------------------
  // Spec `reunions`. Deux constats opposés, et le second compte autant : le micro ne
  // s'ouvre que sur un geste, et quand il est ouvert, cela se voit — y compris après
  // avoir changé d'écran, puisque l'enregistrement, lui, continue.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);

  const voyantAuRepos = await page.locator('.voyant-enregistrement:visible').count();
  verifier(
    'au repos, aucun voyant : rien n’enregistre',
    voyantAuRepos === 0,
    `${voyantAuRepos} voyant(s) au repos`,
  );

  await page.getByRole('button', { name: /^enregistrer une réunion$/i }).click();
  await page.waitForTimeout(900);
  const voyantPendant = await page.locator('.voyant-enregistrement:visible').count();
  verifier(
    'l’enregistrement de réunion ne part que sur un geste, et se voit',
    voyantPendant === 1,
    `${voyantPendant} voyant(s) pendant l’enregistrement`,
  );

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(700);
  const voyantAilleurs = await page.locator('.voyant-enregistrement:visible').count();
  verifier(
    'et reste visible après avoir changé d’écran, puisque le micro continue',
    voyantAilleurs === 1,
    `${voyantAilleurs} voyant(s) sur un autre écran`,
  );

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: /arrêter l’enregistrement/i }).click();
  await page.waitForTimeout(1500);
  const voyantApres = await page.locator('.voyant-enregistrement:visible').count();
  verifier(
    'arrêté, le voyant s’éteint',
    voyantApres === 0,
    `${voyantApres} voyant(s) après l’arrêt`,
  );

  // --- Le passé qui remonte tout seul --------------------------------------------
  // Spec `recherche` — « Élément passé pertinent proposé » et « Suggestion
  // ignorable ». Ce qui compte ici n'est pas qu'il parle, mais qu'il ne dérange pas :
  // aucune action, aucune réponse attendue, et la capture n'a rien attendu.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(400);
  if ((await page.locator('.bloc-ecrit:visible').count()) === 0) {
    await page.getByRole('button', { name: /écrire plutôt/i }).click();
    await page.waitForTimeout(200);
  }
  await page.locator('.zone-ecrite').fill(
    'relancer le fournisseur sur le chiffrage du chantier de Bron',
  );
  await page.getByRole('button', { name: /^déposer$/i }).click();
  await page.waitForTimeout(1500);

  const rappelPasse = await page.locator('.passe:visible').innerText().catch(() => '');
  verifier(
    'un sujet déjà traité fait remonter le passé, discrètement',
    /déjà dit/i.test(rappelPasse) && /chiffrage|chantier/i.test(rappelPasse),
    rappelPasse || 'rien n’est remonté',
  );

  // Change `suggestions-et-recul` : la ligne porte désormais un lien « Voir », le seul
  // signal honnête d'une suggestion utilisée. Il ne demande rien et ne ferme rien —
  // la ligne s'efface seule. Ce qui reste interdit : un bouton, donc une chose à fermer.
  const boutonsDansLeRappel = await page.locator('.passe button').count();
  const liensDansLeRappel = await page.locator('.passe a').allInnerTexts();
  verifier(
    'sans rien à fermer ni à décider : une suggestion qu’on doit fermer interrompt',
    boutonsDansLeRappel === 0 && liensDansLeRappel.length === 1 && /^voir$/i.test(liensDansLeRappel[0]),
    `${boutonsDansLeRappel} bouton(s), lien(s) : ${liensDansLeRappel.join(', ') || 'aucun'}`,
  );

  const confirmationTenue = await page.locator('.message').innerText().catch(() => '');
  verifier(
    'et la capture, elle, a été confirmée sans attendre ce rappel',
    /c'est à moi/i.test(confirmationTenue),
    confirmationTenue,
  );

  // --- Les fiches ----------------------------------------------------------------
  // Spec `memoire` — « Fiche personne » et « Synthèse par projet ». Avant d'appeler
  // quelqu'un, la question est toujours la même : qu'est-ce qui traîne entre nous ?
  // Elle se répond en relisant six mois de notes, ce que personne ne fait.
  await page.locator('.retrait__lien[data-ecran="personnes"]').click();
  await page.waitForTimeout(1200);

  const fiche = page.locator('.fiche', { hasText: /Sophie/i }).first();
  const vueFiche = await fiche
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const ouverts = vueFiche
    ? await fiche.locator('.fiche__ouvert .fiche__texte').allInnerTexts()
    : [];
  verifier(
    'une fiche dit ce qui traîne avec quelqu’un, sans rien avoir à renseigner',
    vueFiche && ouverts.length > 0 && ouverts.every((o) => o.trim().length > 3),
    ouverts.slice(0, 2).join(' · ') || 'aucune ligne ouverte',
  );

  const echanges = vueFiche ? await fiche.locator('.fiche__echange').count() : 0;
  verifier(
    'et cite les derniers échanges, chacun renvoyant à sa capture',
    echanges > 0,
    `${echanges} échange(s) cité(s)`,
  );

  // --- Supprimer, et se raviser ---------------------------------------------------
  // Spec `donnees` — « Suppression d'une capture » et « Fenêtre d'annulation ». Un
  // geste irréversible à un doigt d'un bouton ordinaire finit toujours par être fait
  // par erreur, et « êtes-vous sûr ? » ne protège personne : on répond oui sans lire.
  // Le bouton « Supprimer » vit sur les captures en souffrance — celles dont rien
  // n'est sorti. C'est là que la suppression a un sens : ailleurs, il y a une note.
  await page.evaluate(async () => {
    const capture = await window.__zenote.capturer({
      texte: '',
      source: 'VOCALE',
      etatTranscription: 'ECHEC',
    });
    await window.__zenote.majCapture(capture.id, {
      etatTranscription: 'ECHEC',
      essaisTranscription: 3,
    });
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(200);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  const avantSuppression = await page.locator('.souffrance__actions').count();
  let supprime = false;
  if (avantSuppression > 0) {
    await page
      .locator('.souffrance__actions .bouton--supprimer')
      .first()
      .click();
    await page.waitForTimeout(1000);
    supprime = true;
  }

  const bandeAnnulation = await page.locator('.annulation:visible').count();
  verifier(
    'supprimer laisse une bande pour se raviser',
    supprime && bandeAnnulation === 1,
    supprime
      ? `${bandeAnnulation} bande(s) d’annulation`
      : 'aucune capture en souffrance à supprimer',
  );

  if (supprime && bandeAnnulation === 1) {
    await page.locator('.annulation__bouton').click();
    await page.waitForTimeout(1200);
  }
  const apresAnnulation = await page.locator('.souffrance__actions').count();
  verifier(
    'et annuler remet vraiment la capture',
    supprime && apresAnnulation === avantSuppression,
    supprime
      ? `${apresAnnulation} capture(s) en souffrance, contre ${avantSuppression} avant`
      : 'suppression non exercée',
  );

  // --- Suggestions avec leur raison, et retour sur la semaine ---------------------
  // Change `suggestions-et-recul`. Les deux capacités comptent des présentations
  // ignorées, des dates et des groupes : un parcours qui a déjà décidé des dizaines
  // d'éléments et laissé courir des minuteries d'effacement fausserait chaque
  // décompte. Elles se vérifient donc dans un contexte neuf, à base vide, qui ne
  // touche en rien la suite du parcours (le chiffrement relit la base du premier).
  {
    const contexteNeuf = await navigateur.newContext({
      viewport: { width: 420, height: 900 },
      permissions: ['microphone'],
    });
    const neuve = await contexteNeuf.newPage();
    // Ce contexte-là non plus ne parle à personne.
    neuve.on('request', (r) => {
      const hote = new URL(r.url()).host;
      if (hote && hote !== `localhost:${PORT}` && !r.url().startsWith('data:') && !r.url().startsWith('blob:')) {
        sorties.push(`${r.method()} ${r.url()}`);
      }
    });
    neuve.on('pageerror', (e) => erreurs.push(String(e)));
    neuve.on('console', (m) => {
      if (m.type() === 'error') erreurs.push(m.text());
    });

    await neuve.goto(`${adresse}/`, { waitUntil: 'networkidle' });
    await neuve
      .locator('.ecran')
      .first()
      .waitFor({ state: 'visible', timeout: 15_000 })
      .catch(() => {});

    /** Dépose une note et l'analyse, sans passer par l'écran (aucune suggestion). */
    const deposer = (texte) =>
      neuve.evaluate(async (t) => {
        const c = await window.__zenote.capturer({ texte: t, source: 'ECRITE', etatTranscription: 'OK' });
        await window.__zenote.traiterFileAnalyse();
        return c.id;
      }, texte);
    /** Dépose une note par l'écran Capturer : c'est là que le passé se propose. */
    const deposerParEcran = async (texte) => {
      await neuve.locator('.zone-ecrite').fill(texte);
      await neuve.getByRole('button', { name: /^déposer$/i }).click();
      await neuve.waitForTimeout(1500);
    };
    const retenue = () => neuve.evaluate(async () => (await window.__zenote.lireReglages()).retenue);
    const poserRetenue = (etat) =>
      neuve.evaluate((e) => window.__zenote.ecrireReglage('retenue', e), etat);
    const neutre = { ignoreesDAffilee: 0, presentationsSautees: 0 };
    const ouvrir = async (ecran) => {
      await neuve.locator(`[data-onglet="${ecran}"], [data-ecran="${ecran}"]`).first().click();
      await neuve.waitForTimeout(1200);
    };
    /** Quitter puis revenir : le seul moyen de remonter un écran déjà affiché. */
    const rouvrirRevue = async () => {
      await ouvrir('capturer');
      await ouvrir('revue');
    };
    const sansDebordement = () =>
      neuve.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      );
    const jourLocal = (avant = 0) =>
      neuve.evaluate((n) => {
        const d = new Date();
        d.setDate(d.getDate() - n);
        const p = (v) => String(v).padStart(2, '0');
        return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
      }, avant);

    // ---- Le passé, avec sa raison ------------------------------------------------
    // Spec `suggestions-proactives` — « Passé pertinent expliqué ».
    await deposer('point avec Sophie sur le chiffrage du chantier de Bron, sinon le chantier est bloqué');
    await ouvrir('capturer');
    if ((await neuve.locator('.bloc-ecrit:visible').count()) === 0) {
      await neuve.getByRole('button', { name: /écrire plutôt/i }).click();
      await neuve.waitForTimeout(200);
    }
    await deposerParEcran('relancer le fournisseur sur le chiffrage du chantier de Bron');

    const ligneExplicative = neuve.locator('.passe:visible');
    const texteExtrait = await ligneExplicative.locator('.passe__texte').innerText().catch(() => '');
    const texteRaison = await ligneExplicative.locator('.passe__raison').innerText().catch(() => '');
    verifier(
      'Passé pertinent expliqué : la ligne montre l’extrait de la note passée et la raison du rapprochement',
      /déjà dit/i.test(texteExtrait) && /chiffrage|chantier/i.test(texteExtrait) && texteRaison.trim().length > 0,
      `${texteExtrait} — ${texteRaison}`,
    );

    // Elle s'efface d'elle-même, et c'est cette absence de geste qui la fait compter
    // comme ignorée : rien d'autre (ni temps passé, ni défilement) n'est mesuré.
    const effacee = await neuve
      .locator('.passe')
      .waitFor({ state: 'hidden', timeout: 20_000 })
      .then(() => true)
      .catch(() => false);
    await neuve.waitForTimeout(300);
    const apresEffacement = await retenue();
    verifier(
      'et elle s’efface d’elle-même ; effacée sans avoir été touchée, elle est comptée ignorée',
      effacee && apresEffacement.PASSE_PERTINENT.ignoreesDAffilee === 1,
      `${apresEffacement.PASSE_PERTINENT.ignoreesDAffilee} ignorée(s) d’affilée`,
    );

    // ---- Trois fois ignorée, puis utilisée ---------------------------------------
    // « Voir » est le seul geste qui compte comme utilisation.
    await poserRetenue({ PASSE_PERTINENT: { ignoreesDAffilee: 3, presentationsSautees: 0 }, PISTES_ECHANGE: neutre });
    await deposerParEcran('reprendre le chiffrage du chantier de Bron avec le fournisseur');
    const premiereOccasion = await neuve.locator('.passe:visible').count();
    await deposerParEcran('relancer le chiffrage du chantier de Bron avec le fournisseur demain');
    const secondeOccasion = await neuve.locator('.passe:visible').count();
    verifier(
      'Trois fois ignorée : le rappel suivant n’est présenté qu’une fois sur deux occasions',
      premiereOccasion === 0 && secondeOccasion === 1,
      `occasion 1 : ${premiereOccasion} ligne(s) ; occasion 2 : ${secondeOccasion} ligne(s)`,
    );

    await neuve.locator('.passe__voir').click();
    await neuve.waitForTimeout(1500);
    const versRecherche = await neuve.evaluate(() => location.hash);
    const questionPosee = await neuve.locator('#quete-mots').inputValue().catch(() => '');
    const citations = await neuve.locator('.citation').count();
    verifier(
      '« Voir » mène à la Recherche avec la note citée, question déjà posée',
      versRecherche === '#recherche' && /chiffrage/i.test(questionPosee) && citations > 0,
      `${versRecherche} · question « ${questionPosee.slice(0, 40)} » · ${citations} citation(s)`,
    );
    const apresVoir = await retenue();
    verifier(
      'Utilisée à nouveau : ouvrir un rappel pendant que la sorte est espacée rétablit le rythme normal',
      apresVoir.PASSE_PERTINENT.ignoreesDAffilee === 0 && apresVoir.PASSE_PERTINENT.presentationsSautees === 0,
      JSON.stringify(apresVoir.PASSE_PERTINENT),
    );

    // ---- Le rythme, dit dans les réglages ----------------------------------------
    await poserRetenue({ PASSE_PERTINENT: { ignoreesDAffilee: 3, presentationsSautees: 0 }, PISTES_ECHANGE: neutre });
    await ouvrir('reglages');
    const suggestionPasse = neuve.locator('.suggestion[data-sorte="PASSE_PERTINENT"]');
    const dit = await suggestionPasse.innerText().catch(() => '');
    const boutonRythme = suggestionPasse.locator('.suggestion__retour');
    verifier(
      'Rythme dit dans les réglages : la sorte espacée le dit en clair, sans reproche, et propose de revenir au rythme normal',
      /une fois sur deux/i.test(dit) &&
        (await boutonRythme.count()) === 1 &&
        !/ignor|négligé|oubli/i.test(dit) &&
        (await neuve.locator('.suggestion[data-sorte="PISTES_ECHANGE"]').getAttribute('data-espacee')) === 'false',
      dit.replace(/\s+/g, ' '),
    );
    await boutonRythme.click();
    await neuve.waitForTimeout(600);
    const apresRetour = await retenue();
    verifier(
      'le geste des réglages rétablit le rythme normal',
      (await suggestionPasse.getAttribute('data-espacee')) === 'false' &&
        apresRetour.PASSE_PERTINENT.ignoreesDAffilee === 0,
      JSON.stringify(apresRetour.PASSE_PERTINENT),
    );

    // ---- Les pistes d'échange en Revue : même comptage ----------------------------
    // Ignorée = la carte décidée sans choisir de piste ; utilisée = une piste choisie.
    await poserRetenue({ PASSE_PERTINENT: neutre, PISTES_ECHANGE: neutre });
    await deposer('point avec Karim sur le devis Delta du chantier Omega, sinon le chantier est bloqué');
    await deposer('reprendre le truc dont on a parlé avec Karim sur le devis Delta, sinon le chantier est bloqué');
    await rouvrirRevue();

    const carteB = neuve
      .locator('.groupe')
      .filter({ has: neuve.locator('details.source', { hasText: /reprendre le truc dont/i }) });
    const pistesB = await carteB.locator('.renvoi__choix').count();
    if (pistesB > 0) {
      await carteB.locator('.source__resume').click();
      await neuve.waitForTimeout(300);
    }
    verifier(
      'les pistes d’échange arrivent avec leur raison, comme avant',
      pistesB > 0 && (await carteB.locator('.renvoi__pourquoi').first().innerText()).trim().length > 0,
      `${pistesB} piste(s)`,
    );
    for (let garde = 0; garde < 6 && (await carteB.locator('.bouton--unjour').count()) > 0; garde += 1) {
      await carteB.locator('.bouton--unjour').first().click();
      await neuve.waitForTimeout(500);
    }
    const apresCarteDecidee = await retenue();
    verifier(
      'une carte décidée sans choisir de piste compte pour une suggestion ignorée',
      (await carteB.count()) === 0 && apresCarteDecidee.PISTES_ECHANGE.ignoreesDAffilee === 1,
      `${apresCarteDecidee.PISTES_ECHANGE.ignoreesDAffilee} ignorée(s) d’affilée`,
    );

    await deposer('rappeler le truc dont on a parlé avec Karim sur le devis Delta, sinon le chantier est bloqué');
    await rouvrirRevue();
    const carteC = neuve
      .locator('.groupe')
      .filter({ has: neuve.locator('details.source', { hasText: /rappeler le truc dont/i }) });
    const choixC = carteC.locator('.renvoi__choix');
    if ((await choixC.count()) > 0) {
      await carteC.locator('.source__resume').click();
      await neuve.waitForTimeout(300);
      await choixC.first().click();
      await neuve.waitForTimeout(1000);
    }
    const apresPiste = await retenue();
    verifier(
      'choisir une piste est une suggestion utilisée : le rythme normal revient',
      apresPiste.PISTES_ECHANGE.ignoreesDAffilee === 0 &&
        // La source est repliée après le rendu : on lit le texte, pas ce qui s'affiche.
        /suite de/i.test(await carteC.locator('.renvoi--pose').textContent().catch(() => '')),
      JSON.stringify(apresPiste.PISTES_ECHANGE),
    );

    // Espacées, les pistes ne se posent qu'une fois sur deux ; celle déjà choisie se lit toujours.
    await poserRetenue({ PASSE_PERTINENT: neutre, PISTES_ECHANGE: { ignoreesDAffilee: 3, presentationsSautees: 0 } });
    await deposer('noter le truc dont on a parlé avec Karim sur le devis Delta, sinon le chantier est bloqué');
    await rouvrirRevue();
    const carteD = neuve
      .locator('.groupe')
      .filter({ has: neuve.locator('details.source', { hasText: /noter le truc dont/i }) });
    const piste1 = await carteD.locator('.renvoi__choix').count();
    const choisieToujoursLue = await neuve
      .locator('.groupe')
      .filter({ has: neuve.locator('details.source', { hasText: /rappeler le truc dont/i }) })
      .locator('.renvoi--pose')
      .count();
    await rouvrirRevue();
    const piste2 = await carteD.locator('.renvoi__choix').count();
    verifier(
      'espacées, les pistes ne se posent qu’une fois sur deux occasions — sans jamais cacher une piste déjà choisie',
      piste1 === 0 && piste2 > 0 && choisieToujoursLue === 1,
      `visite 1 : ${piste1} piste(s) ; visite 2 : ${piste2} piste(s) ; piste choisie lue : ${choisieToujoursLue}`,
    );

    // ---- La semaine ---------------------------------------------------------------
    // Spec `retour-semaine`. Base vidée : le contexte est jetable.
    await neuve.evaluate(() => window.__zenote.toutEffacer());
    await ouvrir('semaine');
    const videsAffiches = await neuve.locator('.semaine__vide').allInnerTexts();
    verifier(
      'Groupe vide : un groupe sans rien dit « Rien cette semaine. », sans autre commentaire',
      videsAffiches.length === 3 && videsAffiches.every((t) => t.trim() === 'Rien cette semaine.'),
      videsAffiches.join(' | '),
    );

    const ids = {};
    for (const [cle, texte] of [
      ['fait1', 'Omega : envoyer le récapitulatif au comité'],
      ['fait2', 'Sigma : relire le contrat du prestataire'],
      ['abandon', 'Kappa : appeler le fournisseur pour la remise'],
      ['ecarte', 'Delta : refaire le budget du trimestre'],
      ['ancien', 'Zeta : classer les archives du service'],
    ]) {
      ids[cle] = await deposer(texte);
    }
    const aujourdhuiLocal = await jourLocal(0);
    const ilYaDix = await jourLocal(10);
    const ilYaHuit = await jourLocal(8);
    const textes = await neuve.evaluate(
      async ({ ids, aujourdhuiLocal, ilYaDix }) => {
        const tous = await window.__zenote.listerElements();
        const premier = (captureId) => tous.find((e) => e.captureId === captureId);
        const poser = async (cle, ajustement) => {
          const e = premier(ids[cle]);
          if (!e) return null;
          await window.__zenote.majElement(e.id, { type: 'TACHE', ...ajustement });
          return e.texte;
        };
        return {
          fait1: await poser('fait1', { verdict: 'ACCEPTE', faitLe: aujourdhuiLocal }),
          fait2: await poser('fait2', { verdict: 'ACCEPTE', faitLe: aujourdhuiLocal }),
          abandon: await poser('abandon', { verdict: 'REJETE', faitLe: new Date().toISOString() }),
          ecarte: await poser('ecarte', { verdict: 'ACCEPTE', ecarteFois: 3, vuLe: aujourdhuiLocal }),
          ancien: await poser('ancien', { verdict: 'ACCEPTE', faitLe: ilYaDix }),
        };
      },
      { ids, aujourdhuiLocal, ilYaDix },
    );

    // Signal : pas de ligne tant qu'il n'y a pas de semaine d'usage ni d'ouverture ancienne.
    await ouvrir('revue');
    const ligneTropTot = await neuve.locator('.invitation-semaine').count();

    await neuve.evaluate((jour) => window.__zenote.ecrireReglage('semaineVueLe', jour), ilYaHuit);
    await rouvrirRevue();
    const lignes = neuve.locator('.invitation-semaine');
    const ligneSemaine = await lignes.count();
    const lienSemaine = ligneSemaine === 1 ? await lignes.locator('a').getAttribute('href') : null;
    verifier(
      'Signal hebdomadaire : la Revue affiche une ligne qui mène à la semaine quand l’écran n’a pas été ouvert depuis sept jours',
      ligneTropTot === 0 && ligneSemaine === 1 && lienSemaine === '#semaine',
      `avant : ${ligneTropTot} ligne(s) ; après : ${ligneSemaine} ligne(s), lien ${lienSemaine}`,
    );
    verifier(
      'et la Revue ne déborde pas de l’écran, ligne comprise',
      await sansDebordement(),
      'aucun défilement horizontal',
    );

    await lignes.locator('a').click();
    await neuve.waitForTimeout(1200);
    const groupeDe = (cle) => neuve.locator(`.semaine__groupe[data-groupe="${cle}"]`);
    const texteGroupe = async (cle) => (await groupeDe(cle).innerText().catch(() => ''));
    const avance = await texteGroupe('avance');
    const lache = await texteGroupe('lache');
    const bloque = await texteGroupe('bloque');
    verifier(
      'Semaine ordinaire : deux tâches faites, une abandonnée et une écartée trois fois vont chacune dans leur groupe',
      textes.fait1 &&
        textes.fait2 &&
        textes.abandon &&
        textes.ecarte &&
        avance.includes(textes.fait1) &&
        avance.includes(textes.fait2) &&
        !avance.includes(textes.abandon) &&
        lache.includes(textes.abandon) &&
        !lache.includes(textes.fait1) &&
        bloque.includes(textes.ecarte) &&
        !avance.includes(textes.ancien) &&
        /Ce qui a avancé/.test(avance) &&
        /Ce que vous avez lâché/.test(lache) &&
        /Ce qui n’avance plus/.test(bloque),
      JSON.stringify(textes),
    );

    const ecranSemaine = await neuve.locator('.ecran--semaine').innerText();
    verifier(
      'Aucun chiffre de performance : pas de %, de taux, de série ni de comparaison dans l’écran',
      !/%|pourcent|taux|série|d’affilée|semaine dernière|par rapport/i.test(ecranSemaine),
      'aucune de ces formes dans l’écran',
    );
    verifier(
      'et l’écran de la semaine ne déborde pas non plus',
      await sansDebordement(),
      'aucun défilement horizontal',
    );

    await neuve.locator('.semaine__zone').fill('le fournisseur B tient ses délais');
    await neuve.getByRole('button', { name: /^noter$/i }).click();
    await neuve.waitForTimeout(1200);
    const notee = await neuve.evaluate(async () => {
      const captures = await window.__zenote.listerCaptures();
      const c = captures.find((x) => x.texte === 'le fournisseur B tient ses délais');
      return c ? { source: c.source, etat: c.etatTranscription } : null;
    });
    verifier(
      'Chose à retenir : la réponse à la question finale est enregistrée comme une capture écrite',
      notee?.source === 'ECRITE' && notee?.etat === 'OK',
      JSON.stringify(notee),
    );

    await ouvrir('revue');
    await rouvrirRevue();
    verifier(
      'la ligne disparaît une fois l’écran de la semaine ouvert',
      (await neuve.locator('.invitation-semaine').count()) === 0,
      `${await neuve.locator('.invitation-semaine').count()} ligne(s)`,
    );

    await contexteNeuf.close();
  }

  // --- Provenance : ce qui a été dit, ce qui en est déduit --------------------
  // Spec `provenance`. Deux promesses, vérifiées sur le vrai écran : chaque
  // déduction arrive avec les mots dont elle vient (et le système ne se fait jamais
  // passer pour l'utilisateur), et une négation perdue au découpage ne devient pas
  // une tâche sans que la phrase entière ait été lue.
  //
  // Le cas d'école : « il ne faut surtout pas, et j'insiste, envoyer le devis » se
  // découpe sur « , et j' » et donne « j'insiste, envoyer le devis » — fidèle à la
  // capture, contraire à ce qui a été dit. Chaque capture porte une conséquence
  // (« sinon le chantier est bloqué ») : la Revue ne montre que les douze éléments les
  // plus lourds ou les plus pressés.
  const elementsEnBase = () =>
    page.evaluate(async () => {
      const base = await new Promise((ok, ko) => {
        const r = indexedDB.open('zenote');
        r.onsuccess = () => ok(r.result);
        r.onerror = () => ko(r.error);
      });
      return await new Promise((ok, ko) => {
        const d = base.transaction('elements', 'readonly').objectStore('elements').getAll();
        d.onsuccess = () => ok(d.result);
        d.onerror = () => ko(d.error);
      });
    });
  const elementDe = async (debutTexte) =>
    (await elementsEnBase()).find((e) => (e.texte ?? '').toLowerCase().startsWith(debutTexte));
  const deposer = (texte, source = 'ECRITE') =>
    page.evaluate(
      async ([t, s]) => {
        const capture = await window.__zenote.capturer({
          texte: t,
          source: s,
          etatTranscription: 'OK',
        });
        await window.__zenote.traiterFileAnalyse();
        return capture.id;
      },
      [texte, source],
    );
  const carteRevue = (motif) => page.locator('.entree', { hasText: motif }).first();

  const capturesProvenance = [];
  capturesProvenance.push(
    await deposer(
      "il ne faut surtout pas, et j'insiste, envoyer le devis demain sinon le chantier est bloqué",
      'VOCALE',
    ),
    await deposer('il faut relancer les devis demain, sinon le chantier est bloqué puis trois devis sont en retard'),
    await deposer(
      'je ne suis pas disponible mardi. Renvoyer la facture avant demain, sinon le chantier est bloqué.',
    ),
    await deposer(
      'ne jamais valider le budget, et je transmets la facture aujourd’hui sinon le chantier est bloqué',
    ),
  );
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);

  // Scénario « Négation perdue au découpage »
  const passageNie = carteRevue(/j'insiste, envoyer le devis/i);
  const vuPassageNie = await passageNie
    .waitFor({ state: 'visible', timeout: 10_000 })
    .then(() => true)
    .catch(() => false);
  const dansLaCarte = vuPassageNie ? await passageNie.locator('.entree__texte').innerText() : '';
  verifier(
    'le passage source est dans la carte, cité comme dit',
    /^vous avez dit\s+«\s*j'insiste, envoyer le devis demain sinon le chantier est bloqué\s*»$/i.test(
      dansLaCarte.trim(),
    ),
    dansLaCarte || 'carte introuvable',
  );

  const badgesDeduits = vuPassageNie
    ? await passageNie.locator('.badges .badge:not(.badge--doute)').count()
    : 0;
  const marquesDeduit = vuPassageNie
    ? await passageNie.locator('.badges .badge:not(.badge--doute) .deduit__marque').count()
    : -1;
  verifier(
    'chaque attribut déduit porte la mention « déduit »',
    badgesDeduits >= 2 && marquesDeduit === badgesDeduits,
    `${marquesDeduit} mention(s) pour ${badgesDeduits} attribut(s)`,
  );

  const justification = vuPassageNie ? await passageNie.locator('.entree__indice').innerText() : '';
  verifier(
    'le poids déduit n’est pas mis dans la bouche de l’utilisateur',
    /Poids\s*:.*déduit/.test(justification) && !/«.*bloque quelqu’?'?un d’?'?autre.*»/.test(justification),
    justification || 'aucune justification',
  );

  verifier(
    'la Revue le présente à confirmer',
    vuPassageNie && (await passageNie.locator('.badge--doute').count()) === 1,
    'badge « à confirmer »',
  );
  const phraseEntiere = vuPassageNie ? await passageNie.locator('.omission__phrase').innerText() : '';
  const motsEnEvidence = vuPassageNie
    ? await passageNie.locator('.omission__phrase mark').allInnerTexts()
    : [];
  verifier(
    'avec la phrase entière et « ne … pas » mis en évidence',
    /il ne faut surtout pas, et j'insiste, envoyer le devis/i.test(phraseEntiere) &&
      motsEnEvidence.join(' … ') === 'ne … pas',
    `${motsEnEvidence.join(' … ') || 'aucun mot en évidence'} dans « ${phraseEntiere.trim()} »`,
  );

  // Scénario « Rien de perdu » et « Pas de faux signalement hors de la phrase »
  const sansRien = carteRevue(/Renvoyer la facture avant demain/i);
  const vuSansRien = await sansRien
    .waitFor({ state: 'visible', timeout: 5_000 })
    .then(() => true)
    .catch(() => false);
  verifier(
    'aucun signalement quand rien n’est perdu, ni pour une négation d’une autre phrase',
    vuSansRien && (await sansRien.locator('.omission, .entree__omission').count()) === 0,
    vuSansRien ? 'aucun signalement' : 'carte introuvable',
  );

  // Scénario « Nombre perdu »
  const nombrePerdu = carteRevue(/relancer les devis/i);
  const vuNombre = await nombrePerdu
    .waitFor({ state: 'visible', timeout: 5_000 })
    .then(() => true)
    .catch(() => false);
  const noteNombre = vuNombre ? await nombrePerdu.locator('.entree__omission').innerText() : '';
  verifier(
    'un nombre perdu est signalé : la phrase d’origine dit aussi « trois »',
    /la phrase d’origine dit aussi\s+«\s*trois\s*»/i.test(noteNombre),
    noteNombre || 'aucun signalement',
  );
  verifier(
    'et l’élément reste décidable sans confirmation supplémentaire',
    vuNombre &&
      (await nombrePerdu.locator('.omission--negation').count()) === 0 &&
      (await nombrePerdu.locator('.bouton--accepter').count()) === 1,
    'aucun bloc de confirmation',
  );

  // Accepter, sans avoir lu la phrase entière, ne fait rien : ni plan, ni verdict.
  if (vuPassageNie) {
    await passageNie.locator('.bouton--accepter').click();
    await page.waitForTimeout(400);
  }
  const avantConfirmation = await elementDe("j'insiste, envoyer le devis");
  verifier(
    'accepter avant de confirmer ne pose ni plan ni verdict, donc aucun rappel',
    vuPassageNie &&
      (await passageNie.locator('.plan:visible').count()) === 0 &&
      avantConfirmation?.verdict === 'EN_ATTENTE' &&
      !avantConfirmation?.planDeclencheur,
    `${avantConfirmation?.verdict ?? 'élément introuvable'}, plan : ${avantConfirmation?.planDeclencheur ?? 'aucun'}`,
  );

  // Confirmer la phrase entière lève l'omission, puis le plan s'ouvre comme d'habitude.
  if (vuPassageNie) {
    await passageNie.locator('.omission__confirmer').click();
    await page.waitForTimeout(900);
  }
  const apresConfirmation = carteRevue(/j'insiste, envoyer le devis/i);
  verifier(
    'confirmer la phrase entière lève l’obligation, sans rien accepter',
    vuPassageNie &&
      (await apresConfirmation.locator('.omission--negation').count()) === 0 &&
      (await apresConfirmation.locator('.badge--doute').count()) === 0 &&
      (await elementDe("j'insiste, envoyer le devis"))?.verdict === 'EN_ATTENTE',
    'plus de bloc « négation perdue », toujours en attente',
  );
  if (vuPassageNie) {
    await apresConfirmation.locator('.bouton--accepter').click();
    await page.waitForTimeout(300);
    await apresConfirmation.locator('.plan .bouton--plan', { hasText: 'Ce soir' }).click();
    await page.waitForTimeout(900);
  }
  const accepte = await elementDe("j'insiste, envoyer le devis");
  verifier(
    'l’élément confirmé s’accepte avec son plan, et retient qu’il a été lu en entier',
    accepte?.verdict === 'ACCEPTE' &&
      accepte?.planDeclencheur === 'ce soir' &&
      accepte?.omissionLevee === true,
    `${accepte?.verdict ?? 'introuvable'}, ${accepte?.planDeclencheur ?? 'sans plan'}`,
  );

  // Reprendre la phrase entière : le passage s'élargit, la négation n'est plus perdue.
  const negationJamais = carteRevue(/je transmets la facture/i);
  const vuJamais = await negationJamais
    .waitFor({ state: 'visible', timeout: 5_000 })
    .then(() => true)
    .catch(() => false);
  if (vuJamais) {
    await negationJamais.locator('.omission__reprendre').click();
    await page.waitForTimeout(900);
  }
  const carteElargie = carteRevue(/valider le budget, et je transmets/i);
  const texteReprise = vuJamais ? await carteElargie.locator('.entree__texte').innerText().catch(() => '') : '';
  verifier(
    'reprendre la phrase entière élargit le passage, et plus rien ne manque',
    /ne jamais valider le budget, et je transmets la facture/i.test(texteReprise) &&
      (await carteElargie.locator('.omission--negation').count()) === 0,
    texteReprise || 'passage non élargi',
  );

  // Scénario « Raison d'une proposition »
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(900);
  const propositionDevis = page.locator('.proposition', { hasText: /j'insiste, envoyer le devis/i });
  // Maintenant ne montre que trois choses : on écarte, pour la session, ce qui passe devant.
  for (let essai = 0; essai < 12 && (await propositionDevis.count()) === 0; essai += 1) {
    const autre = page.locator('.proposition .bouton--discret', { hasText: 'Pas maintenant' }).first();
    if ((await autre.count()) === 0) break;
    await autre.click();
    await page.waitForTimeout(250);
  }
  const vuProposition = (await propositionDevis.count()) === 1;
  const texteProposition = vuProposition ? await propositionDevis.locator('.proposition__texte').innerText() : '';
  verifier(
    'Maintenant cite les mots exacts : « sinon le chantier est bloqué » est dit par l’utilisateur',
    /^vous avez dit\s+«.*sinon le chantier est bloqué\s*»$/i.test(texteProposition.trim()),
    texteProposition || 'proposition introuvable',
  );
  const raisonProposition = vuProposition ? await propositionDevis.locator('.proposition__raison').innerText() : '';
  const urgenceDeduite = vuProposition
    ? await propositionDevis.locator('.proposition__raison .deduit', { hasText: /échéance demain/ }).count()
    : 0;
  verifier(
    'et l’urgence tirée de l’échéance est marquée déduite, séparément de la citation',
    urgenceDeduite === 1 &&
      /échéance demain\s+déduit/.test(raisonProposition) &&
      (await propositionDevis
        .locator('.proposition__raison .deduit', { hasText: /échéance demain/ })
        .locator('.dit')
        .count()) === 0 &&
      !/[«»]/.test(raisonProposition) &&
      raisonProposition.includes('—'),
    raisonProposition || 'aucune raison',
  );

  // Scénario « Énoncé de recherche »
  await page.locator('.retrait__lien[data-ecran="recherche"]').click();
  await page.waitForTimeout(500);
  await page.locator('.quete--mots .quete__champ').fill('chantier bloqué');
  await page.locator('.quete--mots button[type="submit"]').click();
  await page.waitForTimeout(700);
  const enonce = await page.locator('.reponse__enonce').innerText().catch(() => '');
  const provenanceReponse = await page.locator('.reponse__provenance').innerText().catch(() => '');
  const introCitation = await page.locator('.citation__intro').first().innerText().catch(() => '');
  verifier(
    'l’énoncé de recherche est marqué déduit, sans guillemets',
    /déduit/.test(provenanceReponse) && enonce.trim() !== '' && !/[«»]/.test(enonce),
    `${enonce.trim()} — ${provenanceReponse.trim()}`,
  );
  verifier(
    'seules les citations des captures sont présentées comme dites par l’utilisateur',
    /vous avez dit/i.test(introCitation) && (await page.locator('.reponse__enonce .dit').count()) === 0,
    introCitation || 'aucune citation',
  );

  for (const id of capturesProvenance) {
    await page.evaluate((c) => window.__zenote.supprimerCapture(c), id);
  }

  // --- Écouter vite, situer par des repères, retrouver ce qu'on a cherché ----------
  // Change `ecoute-et-retrouvailles`. Trois promesses qui se vérifient dans un vrai
  // navigateur : le lecteur règle bien sa vitesse (`playbackRate`) et saute réellement
  // les pauses d'un vrai fichier décodé ; une citation est située par une décision de
  // l'utilisateur ; une question déjà posée se relance d'un appui et s'oublie.
  {
    const ouvrirRecherche = async () => {
      await page.locator('.retrait__lien[data-ecran="recherche"]').click();
      await page.waitForTimeout(500);
    };
    const chercher = async (question) => {
      await page.locator('.quete--mots .quete__champ').fill(question);
      await page.locator('.quete--mots button[type="submit"]').click();
      await page.waitForTimeout(800);
    };
    const recentes = () => page.locator('.recente__requete').allInnerTexts();

    // Un vrai fichier WAV : une seconde de voix, deux secondes et demie de silence,
    // une seconde de voix. `decodeAudioData` du navigateur le décode pour de bon.
    // La Revue n'en montre que les douze entrées les plus lourdes : la note porte une
    // conséquence, comme celles du compte rendu importé plus haut.
    await page.evaluate(async () => {
      const f = 8000;
      const segments = [[1, true], [2.5, false], [1, true]];
      const n = segments.reduce((total, [duree]) => total + Math.round(duree * f), 0);
      const tampon = new ArrayBuffer(44 + n * 2);
      const v = new DataView(tampon);
      const ecrire = (decalage, texte) => {
        for (let i = 0; i < texte.length; i += 1) v.setUint8(decalage + i, texte.charCodeAt(i));
      };
      ecrire(0, 'RIFF');
      v.setUint32(4, 36 + n * 2, true);
      ecrire(8, 'WAVE');
      ecrire(12, 'fmt ');
      v.setUint32(16, 16, true);
      v.setUint16(20, 1, true);
      v.setUint16(22, 1, true);
      v.setUint32(24, f, true);
      v.setUint32(28, f * 2, true);
      v.setUint16(32, 2, true);
      v.setUint16(34, 16, true);
      ecrire(36, 'data');
      v.setUint32(40, n * 2, true);
      let position = 44;
      for (const [duree, voix] of segments) {
        for (let i = 0; i < Math.round(duree * f); i += 1) {
          const valeur = voix ? Math.round(0.5 * 32767 * Math.sin((2 * Math.PI * 440 * i) / f)) : 0;
          v.setInt16(position, valeur, true);
          position += 2;
        }
      }
      await window.__zenote.capturer({
        texte: 'Confirmer le devis du toiturier avant mardi, sinon le chantier est bloqué.',
        source: 'VOCALE',
        etatTranscription: 'OK',
        audio: new Blob([tampon], { type: 'audio/wav' }),
        dureeMs: 4500,
      });
      await window.__zenote.traiterFileAnalyse();
    });

    /** Une empreinte des octets de l'audio stocké, lue dans la base sans passer par l'application. */
    const empreinteAudio = () =>
      page.evaluate(async () => {
        const base = await new Promise((ok, ko) => {
          const r = indexedDB.open('zenote');
          r.onsuccess = () => ok(r.result);
          r.onerror = () => ko(r.error);
        });
        const lignes = await new Promise((ok, ko) => {
          const d = base.transaction('captures', 'readonly').objectStore('captures').getAll();
          d.onsuccess = () => ok(d.result);
          d.onerror = () => ko(d.error);
        });
        const ligne = lignes.find((l) => /toiturier/.test(l.texte ?? ''));
        const octets = new Uint8Array(await ligne.audio.arrayBuffer());
        let empreinte = 2166136261;
        for (const o of octets) empreinte = Math.imul(empreinte ^ o, 16777619) >>> 0;
        return `${octets.length} octets, empreinte ${empreinte}`;
      });
    const audioAvant = await empreinteAudio();

    // Dans la Revue : les trois vitesses, et 1,5× lu dans la page.
    await page.locator('.nav__lien[data-onglet="capturer"]').click();
    await page.waitForTimeout(300);
    await page.locator('.nav__lien[data-onglet="revue"]').click();
    await page.waitForTimeout(1000);
    const groupeToiturier = page.locator('.groupe', { hasText: 'toiturier' }).first();
    const vuToiturier = await groupeToiturier
      .waitFor({ state: 'visible', timeout: 10_000 })
      .then(() => true)
      .catch(() => false);
    verifier('la note vocale à écouter arrive en Revue', vuToiturier);

    const repliToiturier = groupeToiturier.locator('details.source').first();
    await repliToiturier.locator('summary').click();
    await page.waitForTimeout(400);
    const vitessesProposees = await repliToiturier.locator('.lecteur__vitesse').allInnerTexts();
    verifier(
      'le lecteur propose 1×, 1,5× et 2×',
      vitessesProposees.join(' ') === '1× 1,5× 2×',
      vitessesProposees.join(' '),
    );
    const vitesseAvant = await repliToiturier.locator('audio').evaluate((a) => a.playbackRate);

    await repliToiturier.locator('.lecteur__vitesse[data-vitesse="1.5"]').click();
    const lueRevue = await repliToiturier
      .locator('audio')
      .evaluate((a) => ({ vitesse: a.playbackRate, hauteur: a.preservesPitch }));
    verifier(
      'Écoute à 1,5× : la lecture se fait à une fois et demie la vitesse, voix non déformée',
      vitesseAvant === 1 && lueRevue.vitesse === 1.5 && lueRevue.hauteur === true,
      `${vitesseAvant}× puis ${lueRevue.vitesse}×, hauteur préservée : ${lueRevue.hauteur}`,
    );

    // Un autre écran : l'écoute suivante démarre à 1,5×.
    await ouvrirRecherche();
    await chercher('toiturier');
    const repliRecherche = page.locator('.citation details.source').first();
    await repliRecherche.locator('summary').click();
    await page.waitForTimeout(500);
    const vitesseRecherche = await repliRecherche.locator('audio').evaluate((a) => a.playbackRate);
    verifier(
      'l’écoute suivante, sur un autre écran, démarre à 1,5×',
      vitesseRecherche === 1.5,
      `${vitesseRecherche}×`,
    );

    // Et après un rechargement : la vitesse est dans les réglages, pas seulement en mémoire.
    await page.reload({ waitUntil: 'networkidle' });
    await ouvrirRecherche();
    await chercher('toiturier');
    await page.locator('.citation details.source summary').first().click();
    await page.waitForTimeout(800);
    const vitesseRechargee = await page
      .locator('.citation details.source audio')
      .first()
      .evaluate((a) => a.playbackRate);
    verifier(
      'la vitesse choisie survit à un rechargement',
      vitesseRechargee === 1.5,
      `${vitesseRechargee}×`,
    );

    // Silences : d'abord éteints, la lecture traverse la pause ; puis raccourcis, elle la saute.
    const lecteurRecherche = page.locator('.citation details.source .lecteur').first();
    const lire = (attenteMs) =>
      lecteurRecherche.locator('audio').evaluate(async (audio, attente) => {
        audio.pause();
        audio.currentTime = 0;
        await audio.play().catch(() => {});
        await new Promise((ok) => setTimeout(ok, attente));
        const mesure = { t: audio.currentTime, fini: audio.ended, joue: !audio.paused || audio.ended };
        audio.pause();
        return mesure;
      }, attenteMs);

    const sansRaccourci = await lire(1700);
    verifier(
      'sans raccourcir les silences, la lecture traverse la pause',
      sansRaccourci.t > 0.5 && sansRaccourci.t < 3 && !sansRaccourci.fini,
      `${sansRaccourci.t.toFixed(2)} s après 1,7 s d'écoute à 1,5×`,
    );

    await lecteurRecherche.locator('.lecteur__silences').click();
    const pretes = await page
      .waitForFunction(
        () => document.querySelector('.citation .lecteur')?.getAttribute('data-silences') === 'pret',
        null,
        { timeout: 15_000 },
      )
      .then(() => true)
      .catch(() => false);
    verifier(
      'l’interrupteur décode l’enregistrement à la demande et trouve la pause',
      pretes &&
        (await lecteurRecherche.locator('.lecteur__silences').getAttribute('aria-pressed')) === 'true',
      (await lecteurRecherche.locator('.lecteur__etat').innerText().catch(() => '')) || 'pas prêt',
    );

    // Une lecture ordinaire ne fait aucun saut : tout repositionnement observé après le
    // départ est celui du lecteur. La pause court de 1 s à 3,5 s ; on doit atterrir à
    // 150 ms de sa fin, soit 3,35 s.
    const sauts = await lecteurRecherche.locator('audio').evaluate(async (audio) => {
      audio.pause();
      audio.currentTime = 0;
      const vus = [];
      audio.addEventListener('seeking', () => vus.push(audio.currentTime));
      await audio.play().catch(() => {});
      const debutAttente = performance.now();
      while (!audio.ended && audio.currentTime < 3.6 && performance.now() - debutAttente < 8000) {
        await new Promise((ok) => setTimeout(ok, 50));
      }
      return { vus, t: audio.currentTime, fini: audio.ended };
    });
    const atterrissage = sauts.vus.find((position) => position > 3.3 && position < 3.4);
    verifier(
      'Pause longue sautée : la lecture passe la pause de deux secondes et demie en 300 ms environ',
      atterrissage !== undefined,
      atterrissage !== undefined
        ? `saut vers ${atterrissage.toFixed(2)} s, pause de 1 s à 3,5 s`
        : `aucun saut vers 3,35 s (repositionnements : ${sauts.vus.join(', ') || 'aucun'})`,
    );
    await lecteurRecherche.locator('audio').evaluate((audio) => audio.pause());

    const audioApres = await empreinteAudio();
    verifier(
      'Enregistrement intact : l’audio stocké est identique, octet pour octet',
      audioAvant === audioApres,
      audioApres,
    );
    // Éteint pour la suite : les lecteurs suivants ne décodent plus rien.
    await lecteurRecherche.locator('.lecteur__silences').click();

    // --- Repères : une citation située par une décision acceptée -------------------
    // Dates fixes, loin de tout ce que le parcours a semé : le 12 mars 2025 une
    // décision acceptée, le 14 une note qui la suit ; en novembre 2024, une note isolée.
    await page.evaluate(async () => {
      const base = await new Promise((ok, ko) => {
        const r = indexedDB.open('zenote');
        r.onsuccess = () => ok(r.result);
        r.onerror = () => ko(r.error);
      });
      await new Promise((ok, ko) => {
        const t = base.transaction(['captures', 'elements'], 'readwrite');
        t.objectStore('captures').put({
          id: 'c-repere-decision', creeLe: '2025-03-12T10:00:00', source: 'ECRITE',
          texte: 'On passe au fournisseur B.', etatTranscription: 'OK',
          dureeMs: null, audio: null, incomplete: false, analysee: true,
        });
        t.objectStore('elements').put({
          id: 'e-repere-decision', captureId: 'c-repere-decision', type: 'DECISION',
          texte: 'On passe au fournisseur B.', debutCar: 0, finCar: 26,
          verdict: 'ACCEPTE', corrigeParHumain: false,
        });
        t.objectStore('captures').put({
          id: 'c-repere-suite', creeLe: '2025-03-14T15:00:00', source: 'ECRITE',
          texte: 'Le ralentisseur devant l’école, à signaler à la mairie.',
          etatTranscription: 'OK', dureeMs: null, audio: null, incomplete: false, analysee: true,
        });
        t.objectStore('captures').put({
          id: 'c-repere-isolee', creeLe: '2024-11-05T10:00:00', source: 'ECRITE',
          texte: 'La girouette du toit est tordue.', etatTranscription: 'OK',
          dureeMs: null, audio: null, incomplete: false, analysee: true,
        });
        t.oncomplete = () => ok();
        t.onerror = () => ko(t.error);
      });
    });

    await page.locator('.nav__lien[data-onglet="capturer"]').click();
    await page.waitForTimeout(300);
    await ouvrirRecherche();
    await chercher('ralentisseur');
    const mentionRepere = await page.locator('.citation__repere').first().innerText().catch(() => '');
    verifier(
      'une citation est située par une décision acceptée',
      /^deux jours après la décision .On passe au fournisseur B\.?./.test(mentionRepere),
      mentionRepere || 'aucune mention de repère',
    );
    const frise = await page.locator('.frise .frise__repere').allInnerTexts();
    verifier(
      'la frise compacte montre le repère de la période',
      frise.some((libelle) => /décision .On passe au fournisseur B/.test(libelle)),
      frise.join(' | ') || 'aucune frise',
    );

    await chercher('girouette');
    const citationIsolee = await page.locator('.citation').count();
    const reperesIsoles = await page.locator('.citation__repere, .frise').count();
    verifier(
      'Aucun repère proche : la citation ne porte aucune mention de repère',
      citationIsolee === 1 && reperesIsoles === 0,
      `${citationIsolee} citation(s), ${reperesIsoles} mention(s)`,
    );

    // --- Recherches passées ---------------------------------------------------------
    const proposees = await recentes();
    verifier(
      'les dernières questions sont proposées sous les champs, la plus récente d’abord',
      proposees.slice(0, 3).join(' | ') === 'girouette | ralentisseur | toiturier',
      proposees.join(' | '),
    );

    await page.locator('.recente__relancer', { hasText: 'ralentisseur' }).click();
    await page.waitForTimeout(800);
    const relance = await page.locator('.citation__extrait').allInnerTexts();
    const champRelance = await page.locator('.quete--mots .quete__champ').inputValue();
    verifier(
      'Relancer une recherche : un appui remet la question et relance la recherche',
      champRelance === 'ralentisseur' && relance.length === 1 && /ralentisseur/.test(relance[0]),
      `${champRelance} → ${relance.join(' | ') || 'aucune citation'}`,
    );

    await chercher('  RALENTISSEUR ');
    const apresDoublon = await recentes();
    verifier(
      'Doublon : la même question, à la casse près, n’apparaît qu’une fois, en tête',
      apresDoublon.filter((q) => /ralentisseur/i.test(q)).length === 1 && /ralentisseur/i.test(apresDoublon[0]),
      apresDoublon.join(' | '),
    );

    await page.locator('.recente', { hasText: 'toiturier' }).locator('.recente__oublier').click();
    await page.waitForTimeout(500);
    await page.reload({ waitUntil: 'networkidle' });
    await ouvrirRecherche();
    const apresOubli = await recentes();
    verifier(
      'Oublier une question : elle n’est plus proposée, y compris après rechargement',
      !apresOubli.some((q) => /toiturier/.test(q)) && apresOubli.some((q) => /ralentisseur/i.test(q)),
      apresOubli.join(' | '),
    );

    await page.locator('.recentes__tout').click();
    await page.waitForTimeout(500);
    verifier(
      'Tout oublier vide la liste',
      (await page.locator('.recente').count()) === 0 && (await page.locator('.recentes').isHidden()),
      `${await page.locator('.recente').count()} question(s)`,
    );

    // Une question est laissée en mémoire : la vérification du chiffrement, plus bas,
    // regarde la base à la recherche d'une question lisible.
    await chercher('ralentisseur');
    verifier(
      'une question posée après « Tout oublier » est retenue de nouveau',
      (await recentes()).join('|') === 'ralentisseur',
    );
  }

  // =========================================================================
  // Change `reprise-et-delestage` : reprendre après un décrochage, vider sa tête le
  // soir, commencer par un premier geste. Un seul bloc, dans l'ordre des trois
  // capacités. Les heures se posent sur des données datées d'hier ou sur l'horloge du
  // navigateur (`page.clock`) : rien n'attend qu'il soit vraiment dix heures deux.
  // =========================================================================

  // --- Où j'en étais : la note de reprise -----------------------------------------
  // Spec `reprise` — « Poser une note de reprise », « Retour après une réunion »,
  // « Reprise marquée », « Une seule note à la fois » et « Envoyer en Revue ».
  const hierA = (heures, minutes) => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    d.setHours(heures, minutes, 0, 0);
    return d.toISOString();
  };
  /** Les captures marquées reprise, la plus récente d'abord. */
  const notesDeReprise = () =>
    page.evaluate(async () =>
      (await window.__zenote.listerCaptures())
        .filter((c) => c.reprise)
        .map((c) => ({
          id: c.id,
          texte: c.texte,
          source: c.source,
          aAudio: c.aAudio,
          analysee: c.analysee,
          reprise: c.reprise,
        })),
    );
  const elementsDe = (captureId) =>
    page.evaluate(
      async (id) => (await window.__zenote.listerElements()).filter((e) => e.captureId === id).length,
      captureId,
    );

  // Une dictée : « Je m'arrête là », puis le bouton maintenu. Le même chemin
  // d'écriture qu'une capture ordinaire, marqué reprise.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);
  await page.locator('.bouton--reprise').click();
  await page.locator('.bouton-capture').focus();
  await page.keyboard.down(' ');
  await page.waitForTimeout(6500);
  await page.keyboard.up(' ');
  let confirmationDictee = '';
  for (let essai = 0; essai < 40 && !/retrouverez/i.test(confirmationDictee); essai += 1) {
    await page.waitForTimeout(100);
    confirmationDictee = await page.locator('.message').innerText().catch(() => '');
  }
  const notesApresDictee = await notesDeReprise();
  const dictee = notesApresDictee.find((n) => n.source === 'VOCALE');
  verifier(
    'une note de reprise dictée est écrite avec son audio, marquée reprise et confirmée',
    Boolean(dictee?.aAudio) && /retrouverez/i.test(confirmationDictee),
    confirmationDictee || 'aucune confirmation',
  );
  verifier(
    'le geste « Je m’arrête là » se désarme après la capture qui l’emploie',
    (await page.locator('.bouton--reprise').getAttribute('aria-pressed')) === 'false',
  );

  // La transcription tourne sur l'appareil ; puis l'analyse passe sur la note, et ne
  // doit en tirer aucun élément.
  for (let essai = 0; essai < 120; essai += 1) {
    await page.waitForTimeout(500);
    const etat = await page
      .locator(`.journal__ligne[data-capture="${dictee?.id}"]`)
      .getAttribute('data-etat', { timeout: 2000 })
      .catch(() => null);
    if (etat === 'transcrite' || etat === 'a-reprendre') break;
  }
  await page.evaluate(() => window.__zenote.traiterFileAnalyse());
  const dicteeApres = (await notesDeReprise()).find((n) => n.id === dictee?.id);
  verifier(
    'la note dictée est transcrite, marquée analysée, et n’a produit aucun élément',
    Boolean(dicteeApres?.analysee) && (await elementsDe(dictee?.id)) === 0,
    `${dicteeApres?.texte || '(texte non reconnu)'} — ${await elementsDe(dictee?.id)} élément(s)`,
  );

  // Une note écrite : le scénario de la spec, mot pour mot.
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    window.__journal.length = 0;
  });
  await page.locator('.bouton--reprise').click();
  await page.locator('.zone-ecrite').fill('reprendre au paragraphe 3 du budget, sinon le chantier est bloqué');
  await page.locator('.bloc-ecrit .bouton--plein').click();
  let confirmationNote = '';
  for (let essai = 0; essai < 40 && !/retrouverez/i.test(confirmationNote); essai += 1) {
    await page.waitForTimeout(100);
    confirmationNote = await page.locator('.message').innerText().catch(() => '');
  }
  const journalReprise = await page.evaluate(() => window.__journal);
  const rangEcrite = journalReprise.findIndex((e) => e.quoi === 'capture-durable');
  const rangConfirmee = journalReprise.findIndex((e) => e.quoi === 'confirmation');
  verifier(
    'la note de reprise est confirmée comme une capture : écrite d’abord, confirmée ensuite',
    /retrouverez/i.test(confirmationNote) &&
      rangEcrite !== -1 &&
      rangConfirmee !== -1 &&
      rangEcrite < rangConfirmee,
    `${confirmationNote} — écriture n°${rangEcrite}, confirmation n°${rangConfirmee}`,
  );

  await page.evaluate(() => window.__zenote.traiterFileAnalyse());
  const noteEcrite = (await notesDeReprise()).find((n) => /paragraphe 3/.test(n.texte));
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(1200);
  const entreesDeLaNote = await page.locator('.entree', { hasText: /paragraphe 3/i }).count();
  verifier(
    'aucun élément n’est tiré de la note de reprise pour la Revue',
    Boolean(noteEcrite?.analysee) && entreesDeLaNote === 0 && (await elementsDe(noteEcrite?.id)) === 0,
    `${entreesDeLaNote} entrée(s) en Revue, note analysée : ${noteEcrite?.analysee}`,
  );

  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(800);
  verifier(
    'juste après l’avoir posée, la note ne s’affiche pas : on n’est pas revenu',
    (await page.locator('.reprise').count()) === 0,
  );

  // Le retour : la note date d'hier, l'application est rouverte. La plus récente seule
  // s'affiche, l'autre reste une capture ordinaire.
  await page.evaluate(
    async ([idEcrite, idDictee, ecrite, dictee]) => {
      await window.__zenote.majCapture(idEcrite, { reprise: { poseeLe: ecrite, reprisLe: null } });
      await window.__zenote.majCapture(idDictee, { reprise: { poseeLe: dictee, reprisLe: null } });
    },
    [noteEcrite?.id, dictee?.id, hierA(10, 2), hierA(9, 30)],
  );
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(900);

  const cartesReprise = await page.locator('.reprise').count();
  const carte = page.locator('.reprise').first();
  const texteCarte = cartesReprise > 0 ? await carte.innerText() : '';
  verifier(
    'au retour, Maintenant affiche « Où vous en étiez » avec la note citée et son heure de pose',
    cartesReprise === 1 &&
      /Où vous en étiez/.test(texteCarte) &&
      texteCarte.includes('« reprendre au paragraphe 3 du budget, sinon le chantier est bloqué »') &&
      /posée hier à 10 h 02/.test(texteCarte),
    texteCarte.replace(/\s+/g, ' ').slice(0, 160) || 'aucune carte',
  );
  verifier(
    'et seule la plus récente des deux notes est affichée',
    cartesReprise === 1 && !/couvreur/i.test(texteCarte),
    `${cartesReprise} carte(s)`,
  );
  const enTete = await page.evaluate(() => {
    const carte = document.querySelector('.reprise');
    const suivante = document.querySelector('.proposition, .creneau');
    return carte && suivante
      ? Boolean(carte.compareDocumentPosition(suivante) & Node.DOCUMENT_POSITION_FOLLOWING)
      : Boolean(carte);
  });
  verifier('la carte est en tête de Maintenant', enTete);

  // « C'est reparti » : la carte disparaît, la note reste retrouvable.
  await carte.locator('.reprise__reparti').click();
  await page.waitForTimeout(700);
  verifier('« C’est reparti » retire la carte', (await page.locator('.reprise').count()) === 0);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(800);
  verifier(
    'et elle ne revient pas, ni ne fait ressortir la note plus ancienne',
    (await page.locator('.reprise').count()) === 0,
  );
  await page.locator('.retrait__lien[data-ecran="recherche"]').click();
  await page.waitForTimeout(400);
  await page.locator('.quete--mots .quete__champ').fill('paragraphe budget');
  await page.locator('.quete--mots button[type="submit"]').click();
  await page.waitForTimeout(800);
  verifier(
    'la note reprise reste retrouvable par la recherche',
    (await page.locator(`.citation[data-capture="${noteEcrite?.id}"]`).count()) === 1,
    (await page.locator('.citation__extrait').allInnerTexts()).join(' | ') || 'aucune citation',
  );

  // « Garder pour la Revue » : une note avec audio (posée comme la dictée la pose),
  // dont la carte offre l'enregistrement, devient une capture ordinaire.
  const idNoteGardee = await page.evaluate(async (poseeLe) => {
    const capture = await window.__zenote.capturer({
      texte: 'Relancer le géomètre pour le bornage avant ce soir, sinon le chantier est bloqué.',
      source: 'VOCALE',
      etatTranscription: 'OK',
      audio: new Blob([new Uint8Array([26, 69, 223, 163])], { type: 'audio/webm' }),
      reprise: true,
    });
    await window.__zenote.majCapture(capture.id, { reprise: { poseeLe, reprisLe: null } });
    await window.__zenote.traiterFileAnalyse();
    return capture.id;
  }, hierA(11, 0));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  await page.waitForTimeout(900);
  const carteAudio = page.locator('.reprise');
  verifier(
    'la carte offre l’audio de la note quand il existe',
    (await carteAudio.count()) === 1 && (await carteAudio.locator('audio').count()) === 1,
  );
  await carteAudio.locator('.reprise__revue').click();
  await page.waitForTimeout(1500);
  verifier('« Garder pour la Revue » retire la carte', (await page.locator('.reprise').count()) === 0);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  const entreeGardee = await page
    .locator('.entree', { hasText: /géomètre/i })
    .first()
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  verifier(
    'et ses éléments apparaissent en Revue, comme ceux d’une capture ordinaire',
    entreeGardee && (await elementsDe(idNoteGardee)) >= 1,
    `${await elementsDe(idNoteGardee)} élément(s)`,
  );

  // --- Vider sa tête le soir --------------------------------------------------------
  // Spec `delestage-du-soir` — « Invite du soir facultative » et « Dépôt digne de
  // confiance ». L'heure du soir est celle de l'horloge du navigateur (`page.clock`),
  // sur une page à part : rien n'attend qu'il soit vraiment vingt-deux heures, et
  // l'horloge simulée ne touche pas au reste du parcours.
  const instantSoir = (jour, heures, minutes = 0) => new Date(2026, 8, jour, heures, minutes);
  const pageSoir = await contexte.newPage();
  const erreursSoir = [];
  pageSoir.on('pageerror', (e) => erreursSoir.push(String(e)));
  await pageSoir.clock.install({ time: instantSoir(29, 22, 10) });
  await pageSoir.goto(`${adresse}/`, { waitUntil: 'networkidle' });
  await pageSoir.locator('.ecran--capture').waitFor({ state: 'visible', timeout: 15_000 });
  await pageSoir.waitForTimeout(600);
  const inviteVisible = () => pageSoir.locator('.invite-soir:visible').count();
  const rouvrirCapture = async () => {
    await pageSoir.reload({ waitUntil: 'networkidle' });
    await pageSoir.locator('.ecran--capture').waitFor({ state: 'visible', timeout: 15_000 });
    await pageSoir.waitForTimeout(600);
  };

  verifier(
    'réglage éteint par défaut : aucune invite du soir à 22 h 10',
    (await pageSoir.evaluate(() => new Date().getHours())) === 22 && (await inviteVisible()) === 0,
    `heure simulée ${await pageSoir.evaluate(() => new Date().toTimeString().slice(0, 5))}`,
  );

  // Le bloc de réglage : éteint et à 21 h 00 sur une installation neuve.
  await pageSoir.locator('.retrait__lien[data-ecran="reglages"]').click();
  await pageSoir.locator('.bloc--delestage').waitFor({ state: 'visible', timeout: 15_000 });
  const caseSoir = pageSoir.locator('.bloc--delestage input[name="delestage-soir"]');
  verifier(
    'le réglage « Vider sa tête le soir » est éteint, proposé pour 21 h 00',
    !(await caseSoir.isChecked()) &&
      (await pageSoir.locator('.bloc--delestage input[type="time"]').inputValue()) === '21:00',
  );
  await caseSoir.check();
  await pageSoir.waitForTimeout(400);
  const reglagesSoir = () => pageSoir.evaluate(() => window.__zenote.lireReglages());
  verifier(
    'allumé, il retient l’interrupteur et l’heure',
    (await reglagesSoir()).delestageSoir === true && (await reglagesSoir()).delestageHeure === '21:00',
  );

  // Invite dans la soirée : sur l'écran de capture, avec la consigne de précision.
  await pageSoir.locator('.nav__lien[data-onglet="capturer"]').click();
  await pageSoir.locator('.invite-soir').waitFor({ state: 'visible', timeout: 15_000 });
  const texteInvite = await pageSoir.locator('.invite-soir').innerText();
  verifier(
    'à 22 h 10, l’invite apparaît sur l’écran de capture avec la consigne de précision',
    /quoi, pour qui, quand/i.test(texteInvite) && /pas ce soir/i.test(texteInvite),
    texteInvite.replace(/\s+/g, ' ').slice(0, 140),
  );
  verifier(
    'sans reproche ni compte de soirées manquées',
    !/\d+\s+soir|manqu|oubli|retard|encore/i.test(texteInvite),
  );

  // Jamais ailleurs.
  let invitesAilleurs = 0;
  for (const ecran of ['revue', 'maintenant']) {
    await pageSoir.locator(`.nav__lien[data-onglet="${ecran}"]`).click();
    await pageSoir.waitForTimeout(500);
    invitesAilleurs += await pageSoir.locator('.invite-soir').count();
  }
  for (const ecran of ['recherche', 'personnes', 'reglages']) {
    await pageSoir.locator(`.retrait__lien[data-ecran="${ecran}"]`).click();
    await pageSoir.waitForTimeout(500);
    invitesAilleurs += await pageSoir.locator('.invite-soir').count();
  }
  verifier('l’invite n’apparaît sur aucun autre écran', invitesAilleurs === 0, `${invitesAilleurs} ailleurs`);

  // « Pas ce soir » : retirée, y compris après minuit, mais pas la soirée suivante.
  await pageSoir.locator('.nav__lien[data-onglet="capturer"]').click();
  await pageSoir.locator('.invite-soir').waitFor({ state: 'visible', timeout: 15_000 });
  await pageSoir.locator('.invite-soir__pas-ce-soir').click();
  await pageSoir.waitForTimeout(400);
  const retiree = (await inviteVisible()) === 0;
  await rouvrirCapture();
  const retireeAuRechargement = (await inviteVisible()) === 0;
  await pageSoir.clock.setSystemTime(instantSoir(30, 0, 20));
  await rouvrirCapture();
  const retireeApresMinuit =
    (await pageSoir.evaluate(() => new Date().getDate())) === 30 && (await inviteVisible()) === 0;
  verifier(
    '« Pas ce soir » retire l’invite, au rechargement comme après minuit',
    retiree && retireeAuRechargement && retireeApresMinuit,
    `retirée ${retiree}, rechargée ${retireeAuRechargement}, après minuit ${retireeApresMinuit}`,
  );
  await pageSoir.clock.setSystemTime(instantSoir(30, 21, 30));
  await rouvrirCapture();
  verifier(
    'et elle revient à la soirée suivante, sans rien avoir compté',
    (await inviteVisible()) === 1,
  );

  // Liste du lendemain déposée : capture ordinaire, confirmée « lâchable », en Revue.
  await pageSoir.locator('.invite-soir__deposer').click();
  await pageSoir
    .locator('.zone-ecrite')
    .fill('Demain matin avant dix heures, appeler Karim pour le devis du toit, sinon le chantier est bloqué.');
  await pageSoir.evaluate(() => {
    window.__journal.length = 0;
  });
  await pageSoir.locator('.bloc-ecrit .bouton--plein').click();
  let confirmationSoir = '';
  for (let essai = 0; essai < 40 && !/lâcher/i.test(confirmationSoir); essai += 1) {
    await pageSoir.waitForTimeout(100);
    confirmationSoir = await pageSoir.locator('.message').innerText().catch(() => '');
  }
  const journalSoir = await pageSoir.evaluate(() => window.__journal);
  const rangEcriteSoir = journalSoir.findIndex((e) => e.quoi === 'capture-durable');
  const rangConfirmeeSoir = journalSoir.findIndex((e) => e.quoi === 'confirmation');
  verifier(
    'la liste déposée est confirmée « Écrit. Vous pouvez le lâcher jusqu’à demain. », écrite d’abord',
    confirmationSoir === "Écrit. Vous pouvez le lâcher jusqu'à demain." &&
      rangEcriteSoir !== -1 &&
      rangConfirmeeSoir !== -1 &&
      rangEcriteSoir < rangConfirmeeSoir,
    `${confirmationSoir} — écriture n°${rangEcriteSoir}, confirmation n°${rangConfirmeeSoir}`,
  );
  await pageSoir.waitForTimeout(500);
  verifier('l’invite se retire une fois la liste déposée', (await inviteVisible()) === 0);
  await rouvrirCapture();
  await pageSoir.clock.setSystemTime(instantSoir(30, 23, 55));
  await rouvrirCapture();
  const revueSoir = await pageSoir.evaluate(() => window.__zenote.lireReglages());
  verifier(
    'elle ne réapparaît pas ce soir-là',
    (await inviteVisible()) === 0 && revueSoir.delestageVuLe === '2026-09-30',
    `vue le ${revueSoir.delestageVuLe}`,
  );
  const reglagesBruts = await pageSoir.evaluate(async () => JSON.stringify(await window.__zenote.lireReglages()));
  verifier(
    'et les réglages ne portent aucun texte de la note',
    !/Karim|devis|chantier/i.test(reglagesBruts),
  );

  // Le lendemain matin : les éléments de la liste sont en Revue, comme ceux de toute capture.
  await pageSoir.clock.setSystemTime(instantSoir(31, 8, 0));
  await pageSoir.goto(`${adresse}/#revue`, { waitUntil: 'networkidle' });
  const entreeSoir = await pageSoir
    .locator('.entree', { hasText: /appeler Karim pour le devis du toit/i })
    .first()
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  verifier('les éléments de la liste sont en Revue le lendemain', entreeSoir);
  verifier('aucune erreur JavaScript pendant la soirée simulée', erreursSoir.length === 0, erreursSoir.slice(0, 2).join(' | '));
  // Le parcours suivant ne doit pas hériter d'une invite allumée sur l'horloge réelle.
  await pageSoir.evaluate(() => window.__zenote.ecrireReglage('delestageSoir', false));
  await pageSoir.close();

  // --- Premier geste --------------------------------------------------------------
  // Spec `premier-geste` — « Tâche floue », « Tâche déjà concrète », « Geste laissé
  // vide » et « Geste fait ». Les deux tâches portent une conséquence (« sinon le
  // chantier est bloqué ») et une échéance du jour : la Revue ne montre que les douze
  // entrées les plus lourdes, et Maintenant trois — un test sans conséquence ne
  // verrait jamais sa carte.
  const elementsParTexte = (motif) =>
    page.evaluate(
      async (source) =>
        (await window.__zenote.listerElements()).filter((e) => new RegExp(source, 'i').test(e.texte)),
      motif.source,
    );
  await page.evaluate(async () => {
    await window.__zenote.capturer({
      texte: 'Il faut avancer sur le budget 2027 avant ce soir, sinon le chantier est bloqué.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.capturer({
      texte: 'Appeler le prestataire pour le devis du parking avant ce soir, sinon le chantier est bloqué.',
      source: 'ECRITE',
      etatTranscription: 'OK',
    });
    await window.__zenote.traiterFileAnalyse();
  });

  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(300);
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  const entreeFloue = page.locator('.entree', { hasText: /budget 2027/i }).first();
  const entreeConcrete = page.locator('.entree', { hasText: /devis du parking/i }).first();
  const lesDeuxVisibles = await Promise.all(
    [entreeFloue, entreeConcrete].map((entree) =>
      entree
        .waitFor({ state: 'visible', timeout: 15_000 })
        .then(() => true)
        .catch(() => false),
    ),
  );
  verifier('les deux tâches de l’essai sont en Revue', lesDeuxVisibles.every(Boolean), lesDeuxVisibles.join(' / '));

  // Tâche floue : la zone de plan demande un premier geste, avant les déclencheurs.
  await entreeFloue.locator('.bouton--accepter').click();
  await page.waitForTimeout(400);
  const gesteFloue = entreeFloue.locator('.geste__etiquette');
  const champFloue = entreeFloue.locator('.geste__champ');
  const ordreFloue = await entreeFloue.evaluate((entree) => {
    const geste = entree.querySelector('.geste');
    const plan = entree.querySelector('.bouton--plan');
    return Boolean(geste && plan && geste.compareDocumentPosition(plan) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  verifier(
    'une tâche floue (« avancer sur… ») : la zone de plan demande un premier geste, avant les déclencheurs',
    (await gesteFloue.isVisible()) && /Premier geste \(deux minutes\)/.test(await gesteFloue.innerText()) && ordreFloue,
  );
  verifier(
    'le champ est vide : le système ne rédige jamais le geste',
    (await champFloue.inputValue()) === '',
  );
  await champFloue.fill("ouvrir le tableur et relire l'onglet charges");
  await entreeFloue.locator('.bouton--plan').first().click();
  await page.waitForTimeout(800);
  const [elementFlou] = await elementsParTexte(/budget 2027/);
  verifier(
    'le geste saisi est enregistré comme action du plan',
    elementFlou?.planAction === "ouvrir le tableur et relire l'onglet charges" &&
      elementFlou?.verdict === 'ACCEPTE',
    String(elementFlou?.planAction),
  );

  // Tâche concrète : aucune demande, un lien discret pour en préciser un.
  await entreeConcrete.locator('.bouton--accepter').click();
  await page.waitForTimeout(400);
  const champConcrete = entreeConcrete.locator('.geste__etiquette');
  const lienPreciser = entreeConcrete.locator('.geste__preciser');
  verifier(
    'une tâche déjà concrète : aucun premier geste demandé, un lien discret permet d’en préciser un',
    !(await champConcrete.isVisible()) && (await lienPreciser.isVisible()),
  );
  await lienPreciser.click();
  verifier(
    'le lien ouvre le même champ',
    (await champConcrete.isVisible()) && !(await lienPreciser.isVisible()),
  );

  // Geste laissé vide : le plan reste le texte de la tâche.
  await entreeConcrete.locator('.bouton--plan').first().click();
  await page.waitForTimeout(800);
  const [elementConcret] = await elementsParTexte(/devis du parking/);
  verifier(
    'geste laissé vide : l’action du plan est le texte de la tâche',
    elementConcret?.verdict === 'ACCEPTE' && elementConcret?.planAction === elementConcret?.texte,
    String(elementConcret?.planAction),
  );

  // Maintenant : le geste est la chose à faire, la tâche dessous.
  await page.locator('.nav__lien[data-onglet="maintenant"]').click();
  const carteFloue = page.locator('.proposition', { hasText: /budget 2027/i }).first();
  const carteVisible = await carteFloue
    .waitFor({ state: 'visible', timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  const texteCarteFloue = carteVisible ? await carteFloue.innerText() : '';
  verifier(
    'Maintenant affiche « Commencer par » le geste, avec le texte de la tâche',
    carteVisible &&
      /Commencer par : « ouvrir le tableur et relire l'onglet charges »/.test(texteCarteFloue) &&
      /budget 2027/.test(texteCarteFloue),
    texteCarteFloue.replace(/\s+/g, ' ').slice(0, 200) || 'aucune carte',
  );
  const carteConcrete = page.locator('.proposition', { hasText: /devis du parking/i }).first();
  verifier(
    'et rien de tel sur une tâche sans premier geste',
    !(await carteConcrete.locator('.proposition__geste').count()) &&
      !(await carteConcrete.locator('.bouton--geste-fait').count()),
  );

  // Geste fait : la tâche reste active, le geste suivant se note s'il existe.
  await carteFloue.locator('.bouton--geste-fait').click();
  await page.waitForTimeout(700);
  const apresGeste = page.locator('.proposition', { hasText: /budget 2027/i }).first();
  const [elementApresGeste] = await elementsParTexte(/budget 2027/);
  verifier(
    'geste fait : la tâche reste active, et un champ facultatif propose le geste suivant',
    (await apresGeste.count()) === 1 &&
      !elementApresGeste?.faitLe &&
      (await apresGeste.locator('.geste-suite input').isVisible()) &&
      /Et ensuite/.test(await apresGeste.locator('.geste-suite').innerText()) &&
      (await apresGeste.locator('.proposition__geste').count()) === 0,
    `faitLe : ${elementApresGeste?.faitLe ?? 'absent'}`,
  );
  await apresGeste.locator('.geste-suite input').fill('envoyer le résumé à Sophie');
  await apresGeste.locator('.geste-suite__noter').click();
  await page.waitForTimeout(700);
  const apresSuite = page.locator('.proposition', { hasText: /budget 2027/i }).first();
  const [elementApresSuite] = await elementsParTexte(/budget 2027/);
  verifier(
    'le geste suivant devient « Commencer par », sans clore la tâche',
    /Commencer par : « envoyer le résumé à Sophie »/.test(await apresSuite.innerText()) &&
      !elementApresSuite?.faitLe &&
      elementApresSuite?.gestesFaits?.length === 1,
    String(elementApresSuite?.planAction),
  );
  // Et le geste suivant est facultatif : « Plus tard » laisse la tâche telle quelle.
  await apresSuite.locator('.bouton--geste-fait').click();
  await page.waitForTimeout(600);
  await page
    .locator('.proposition', { hasText: /budget 2027/i })
    .first()
    .locator('.geste-suite__plus-tard')
    .click();
  await page.waitForTimeout(600);
  const [elementApresPlusTard] = await elementsParTexte(/budget 2027/);
  verifier(
    'sans geste suivant, la tâche garde son texte pour action et reste active',
    (await page.locator('.geste-suite').count()) === 0 &&
      elementApresPlusTard?.planAction === elementApresPlusTard?.texte &&
      !elementApresPlusTard?.faitLe,
  );
  await page
    .locator('.proposition', { hasText: /budget 2027/i })
    .first()
    .locator('.bouton--accepter')
    .click();
  await page.waitForTimeout(700);
  const [elementClos] = await elementsParTexte(/budget 2027/);
  verifier('la tâche n’est close que par « C’est fait »', Boolean(elementClos?.faitLe));

  // --- Chiffrer : un appareil perdu ne livre rien ----------------------------
  // Spec `donnees` — « Appareil perdu ». Tout ce qui précède a produit de vraies
  // notes ; on chiffre maintenant, et on va lire la base comme le ferait quelqu'un
  // qui a pris le téléphone.

  /** Tout ce que la base contient réellement, lu sans passer par l'application. */
  const baseEnClair = () =>
    page.evaluate(async () => {
      const base = await new Promise((ok, ko) => {
        const r = indexedDB.open('zenote');
        r.onsuccess = () => ok(r.result);
        r.onerror = () => ko(r.error);
      });
      const lire = (magasin) =>
        new Promise((ok, ko) => {
          const d = base.transaction(magasin, 'readonly').objectStore(magasin).getAll();
          d.onsuccess = () => ok(d.result);
          d.onerror = () => ko(d.error);
        });
      const tout = [await lire('captures'), await lire('elements')];
      return JSON.stringify(tout, (_c, v) => {
        if (v instanceof ArrayBuffer) return new TextDecoder().decode(v);
        if (ArrayBuffer.isView(v)) return new TextDecoder().decode(v.buffer);
        return v;
      });
    });

  const avantChiffrement = await baseEnClair();
  verifier(
    'avant chiffrement, la base se lit à livre ouvert',
    /couvreur|notaire|planning/i.test(avantChiffrement),
    `${avantChiffrement.length} caractères lisibles`,
  );

  /** Les questions retenues (change `ecoute-et-retrouvailles`), lues sans passer par l'application. */
  const recherchesEnClair = () =>
    page.evaluate(async () => {
      const base = await new Promise((ok, ko) => {
        const r = indexedDB.open('zenote');
        r.onsuccess = () => ok(r.result);
        r.onerror = () => ko(r.error);
      });
      const lignes = await new Promise((ok, ko) => {
        const d = base.transaction('recherches', 'readonly').objectStore('recherches').getAll();
        d.onsuccess = () => ok(d.result);
        d.onerror = () => ko(d.error);
      });
      return JSON.stringify(lignes, (_c, v) => {
        if (v instanceof ArrayBuffer) return new TextDecoder().decode(v);
        if (ArrayBuffer.isView(v)) return new TextDecoder().decode(v.buffer);
        return v;
      });
    });

  const recherchesAvant = await recherchesEnClair();
  verifier(
    'avant chiffrement, les questions retenues se lisent à livre ouvert',
    /ralentisseur/.test(recherchesAvant),
    `${recherchesAvant.length} caractères lisibles`,
  );

  await page.locator('.retrait__lien[data-ecran="reglages"]').click();
  await page.waitForTimeout(600);

  const parAppareil = page.locator('.bloc--chiffrement .bouton--plein').first();
  const libelleActivation = await parAppareil.innerText();
  verifier(
    'le déverrouillage par l’appareil est proposé quand l’appareil sait le faire',
    /cet appareil/i.test(libelleActivation),
    libelleActivation,
  );

  const danger = await page.locator('.chiffrement__danger').innerText();
  verifier(
    'ce qu’on risque est écrit avant le bouton, pas après',
    /définitivement illisibles/i.test(danger),
    danger.slice(0, 80) + '…',
  );

  await parAppareil.click();
  await page.waitForTimeout(2500);

  const apresChiffrement = await baseEnClair();
  verifier(
    'après chiffrement, plus une phrase ne se lit dans la base',
    !/couvreur|notaire|planning|pneus/i.test(apresChiffrement),
    `${apresChiffrement.length} caractères, aucun mot des notes`,
  );

  const recherchesApres = await recherchesEnClair();
  verifier(
    'Chiffrement : coffre actif, aucune question retenue ne se lit dans la base',
    recherchesApres.length > 2 && !/ralentisseur/i.test(recherchesApres),
    `${recherchesApres.length} caractères, aucune question lisible`,
  );

  // Un appareil perdu, c'est une application rouverte : rien en mémoire.
  await page.reload({ waitUntil: 'networkidle' });
  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(800);

  const verrou = await page.locator('.ecran--verrou').count();
  verifier(
    'à la réouverture, la Revue demande l’authentification',
    verrou === 1,
    `${verrou} écran(s) de verrou`,
  );

  // Et pendant ce temps, capturer marche — c'est toute la forme du coffre.
  await page.locator('.nav__lien[data-onglet="capturer"]').click();
  await page.waitForTimeout(500);
  await page.locator('.bouton--discret', { hasText: 'Écrire plutôt' }).click();
  await page.locator('.zone-ecrite').fill('note déposée coffre fermé');
  await page.locator('.bloc-ecrit .bouton--plein').click();
  await page.waitForTimeout(800);

  const confirme = await page.locator('.message').innerText();
  verifier(
    'capturer ne demande jamais de déverrouiller',
    /c'est à moi/i.test(confirme),
    confirme,
  );
  const baseVerrouillee = await baseEnClair();
  verifier(
    'et la note déposée est chiffrée aussitôt, sans clé dépliée',
    !baseVerrouillee.includes('note déposée coffre fermé'),
    'aucun mot de la note dans la base',
  );

  await page.locator('.nav__lien[data-onglet="revue"]').click();
  await page.waitForTimeout(600);
  await page.locator('.ecran--verrou .bouton--plein').first().click();
  await page.waitForTimeout(2000);

  const revueRouverte = await page.locator('.ecran--revue').count();
  const contenuRevue = await page.locator('#vue').innerText();
  verifier(
    'l’authentification de l’appareil rouvre les notes',
    revueRouverte === 1 && /note déposée coffre fermé|couvreur|notaire/i.test(contenuRevue),
    revueRouverte === 1 ? 'Revue rendue, notes lisibles' : 'la Revue ne s’est pas rouverte',
  );

  const minuteriesVivantes = await page.evaluate(
    () => document.querySelectorAll('.ecran').length,
  );
  verifier(
    'aucune donnée ne quitte l’appareil pendant tout le parcours',
    sorties.length === 0,
    sorties.slice(0, 3).join(' | ') || 'aucune requête sortante',
  );
  verifier(
    'et, réglage éteint, plus aucune requête d’analyse n’est partie',
    analyses.length === avantExtinction,
    `${analyses.length - avantExtinction} de plus`,
  );

  verifier(
    "l'écran quitté est bien démonté",
    minuteriesVivantes === 1,
    `${minuteriesVivantes} écran(s) dans le document`,
  );
} finally {
  await navigateur.close();
  serveur?.close();
}

const echecs = constats.filter((c) => !c.ok);
console.log(`\n${constats.length - echecs.length}/${constats.length} vérifications passées`);
process.exit(echecs.length === 0 ? 0 : 1);
