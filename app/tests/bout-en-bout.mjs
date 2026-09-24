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

const PORT = 4178;

// Par défaut la vérification porte sur le `dist/` local, servi ici même. En
// passant ZENOTE_URL, les mêmes constats s'appliquent au site déployé : c'est
// ainsi qu'on prouve que la mise en ligne vaut ce que vaut la construction.
const CIBLE = process.env.ZENOTE_URL?.replace(/\/$/, '');

const constats = [];
function verifier(intitule, condition, detail = '') {
  constats.push({ intitule, ok: Boolean(condition), detail });
  console.log(`${condition ? '  ok  ' : ' ÉCHEC'} ${intitule}${detail ? ` — ${detail}` : ''}`);
}

const serveur = CIBLE ? null : await servir(PORT);
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
// — l'analyse se fait ici, rien n'est déposé sur un serveur ZeNote — ne vaut que si
// elle se mesure ; une page peut affirmer n'importe quoi dans son écran de confiance.
const sorties = [];
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

  const boutonsDansLeRappel = await page.locator('.passe button, .passe a').count();
  verifier(
    'sans rien à fermer ni à décider : une suggestion qu’on doit fermer interrompt',
    boutonsDansLeRappel === 0,
    `${boutonsDansLeRappel} action(s) dans la suggestion`,
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
