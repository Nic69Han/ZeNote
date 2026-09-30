/**
 * La retenue : se faire plus rare quand une suggestion ne sert pas.
 *
 * Spec `suggestions-proactives` — « Retenue après suggestions ignorées » : « Trois
 * fois ignorée », « Utilisée à nouveau » et « Rythme dit dans les réglages ».
 *
 * Les fonctions de l'état sont pures : ce qui suit les exerce sans base. La fin du
 * fichier vérifie seulement que l'état survit dans les réglages, et que deux
 * écritures simultanées ne s'écrasent pas.
 */

import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  doitPresenter,
  intervalle,
  lireRetenue,
  noterIgnoree,
  noterUtilisee,
  normaliser,
  presenterMaintenant,
  remettreRythmeNormal,
  retenueInitiale,
  revenirAuRythmeNormal,
  rythme,
  signalerIgnoree,
  signalerUtilisee,
  type EtatRetenue,
  type SorteSuggestion,
} from '../src/services/retenue.ts';
import { lireReglages, toutEffacer } from '../src/stockage/depot.ts';

const PASSE: SorteSuggestion = 'PASSE_PERTINENT';
const PISTES: SorteSuggestion = 'PISTES_ECHANGE';

/** Laisse passer `n` présentations d'affilée, sans y toucher. */
function ignorer(etat: EtatRetenue, sorte: SorteSuggestion, n: number): EtatRetenue {
  let courant = etat;
  for (let i = 0; i < n; i += 1) courant = noterIgnoree(courant, sorte);
  return courant;
}

/** Joue `occasions` occasions ; chaque présentation faite est aussitôt ignorée. */
function jouer(
  etat: EtatRetenue,
  sorte: SorteSuggestion,
  occasions: number,
): { presentees: number; etat: EtatRetenue } {
  let courant = etat;
  let presentees = 0;
  for (let i = 0; i < occasions; i += 1) {
    const decision = doitPresenter(courant, sorte);
    courant = decision.etat;
    if (decision.presenter) {
      presentees += 1;
      courant = noterIgnoree(courant, sorte);
    }
  }
  return { presentees, etat: courant };
}

describe('avant trois présentations ignorées', () => {
  it('chaque occasion se présente', () => {
    let etat = retenueInitiale();
    for (let ignorees = 0; ignorees < 3; ignorees += 1) {
      const decision = doitPresenter(etat, PASSE);
      expect(decision.presenter).toBe(true);
      etat = noterIgnoree(decision.etat, PASSE);
    }
  });

  it('et le rythme est dit normal', () => {
    expect(rythme(retenueInitiale(), PASSE)).toMatchObject({ intervalle: 1, espacee: false });
  });
});

describe('Trois fois ignorée', () => {
  it('le suivant n’est présenté qu’une fois sur deux occasions', () => {
    const etat = ignorer(retenueInitiale(), PASSE, 3);
    // Deux occasions à la suite : l'une se tait, l'autre se présente.
    const premiere = doitPresenter(etat, PASSE);
    const seconde = doitPresenter(premiere.etat, PASSE);
    expect([premiere.presenter, seconde.presenter].filter(Boolean)).toHaveLength(1);
  });

  it('sur dix occasions, cinq se présentent', () => {
    const etat = ignorer(retenueInitiale(), PASSE, 3);
    // On ne note rien d'ignoré ici : le rythme reste celui du seuil franchi.
    let courant = etat;
    let presentees = 0;
    for (let i = 0; i < 10; i += 1) {
      const decision = doitPresenter(courant, PASSE);
      courant = decision.etat;
      if (decision.presenter) presentees += 1;
    }
    expect(presentees).toBe(5);
  });

  it('une occasion sautée n’est pas une présentation ignorée', () => {
    const etat = ignorer(retenueInitiale(), PASSE, 3);
    const sautee = doitPresenter(etat, PASSE);
    expect(sautee.presenter).toBe(false);
    expect(sautee.etat[PASSE].ignoreesDAffilee).toBe(3);
  });

  it('les sortes ne se contaminent pas', () => {
    const etat = ignorer(retenueInitiale(), PASSE, 5);
    expect(rythme(etat, PASSE).intervalle).toBe(2);
    expect(rythme(etat, PISTES).intervalle).toBe(1);
    expect(doitPresenter(etat, PISTES).presenter).toBe(true);
  });

  it('les paliers suivent le nombre de présentations ignorées', () => {
    expect([0, 2, 3, 5, 6, 8, 9, 40].map(intervalle)).toEqual([1, 1, 2, 2, 4, 4, 8, 8]);
  });
});

describe('Utilisée à nouveau', () => {
  it('une seule suggestion utilisée rétablit le rythme normal', () => {
    let etat = ignorer(retenueInitiale(), PASSE, 7);
    expect(rythme(etat, PASSE).intervalle).toBe(4);

    etat = noterUtilisee(etat, PASSE);
    expect(rythme(etat, PASSE)).toMatchObject({ intervalle: 1, espacee: false });
    expect(etat[PASSE]).toEqual({ ignoreesDAffilee: 0, presentationsSautees: 0 });
    // Et chaque occasion se présente de nouveau (trois, avant que le seuil soit rejoint).
    expect(jouer(etat, PASSE, 3).presentees).toBe(3);
  });

  it('utiliser une sorte ne rétablit pas l’autre', () => {
    let etat = ignorer(ignorer(retenueInitiale(), PASSE, 4), PISTES, 4);
    etat = noterUtilisee(etat, PASSE);
    expect(rythme(etat, PISTES).intervalle).toBe(2);
  });
});

describe('le plafond', () => {
  it('ne descend jamais sous une présentation sur huit', () => {
    // Beaucoup de présentations ignorées, puis seize occasions : deux passent.
    const etat = ignorer(retenueInitiale(), PASSE, 30);
    expect(rythme(etat, PASSE).intervalle).toBe(8);

    let courant = etat;
    let presentees = 0;
    for (let i = 0; i < 16; i += 1) {
      const decision = doitPresenter(courant, PASSE);
      courant = decision.etat;
      if (decision.presenter) presentees += 1;
    }
    expect(presentees).toBe(2);
  });

  it('et l’espacement s’accentue à mesure que les présentations sont ignorées', () => {
    const { presentees: aDeux } = jouer(ignorer(retenueInitiale(), PASSE, 3), PASSE, 2);
    // Trois ignorées → une sur deux ; six → une sur quatre ; neuf → une sur huit.
    expect(aDeux).toBe(1);
    expect(rythme(ignorer(retenueInitiale(), PASSE, 6), PASSE).intervalle).toBe(4);
    expect(rythme(ignorer(retenueInitiale(), PASSE, 9), PASSE).intervalle).toBe(8);
  });
});

describe('Rythme dit dans les réglages', () => {
  it('une sorte espacée le dit en clair, sans reproche', () => {
    const etat = ignorer(retenueInitiale(), PASSE, 3);
    const { libelle, espacee } = rythme(etat, PASSE);
    expect(espacee).toBe(true);
    expect(libelle).toMatch(/une fois sur deux/);
    expect(libelle).not.toMatch(/ignor|négligé|oubli|trop/i);
  });

  it('et revenir au rythme normal remet tout à zéro', () => {
    const etat = ignorer(ignorer(retenueInitiale(), PASSE, 7), PISTES, 4);
    expect(revenirAuRythmeNormal(etat, PASSE)[PASSE].ignoreesDAffilee).toBe(0);
    expect(revenirAuRythmeNormal(etat, PASSE)[PISTES].ignoreesDAffilee).toBe(4);
    expect(revenirAuRythmeNormal(etat)).toEqual(retenueInitiale());
  });
});

describe('un état relu des réglages', () => {
  it('absent, partiel ou absurde, il repart de zéro sans rien casser', () => {
    expect(normaliser(undefined)).toEqual(retenueInitiale());
    expect(normaliser({ PASSE_PERTINENT: { ignoreesDAffilee: 4 } })[PASSE]).toEqual({
      ignoreesDAffilee: 4,
      presentationsSautees: 0,
    });
    expect(normaliser({ PASSE_PERTINENT: { ignoreesDAffilee: -2, presentationsSautees: 'x' } })[PASSE])
      .toEqual({ ignoreesDAffilee: 0, presentationsSautees: 0 });
  });
});

describe('dans les réglages', () => {
  beforeEach(async () => {
    await toutEffacer();
  });

  it('l’état survit à la relecture', async () => {
    await signalerIgnoree(PASSE);
    await signalerIgnoree(PASSE);
    await signalerIgnoree(PASSE);
    expect((await lireRetenue())[PASSE].ignoreesDAffilee).toBe(3);
    expect(rythme((await lireReglages()).retenue, PASSE).intervalle).toBe(2);
  });

  it('deux écritures simultanées ne s’écrasent pas', async () => {
    await Promise.all([
      signalerIgnoree(PASSE),
      signalerIgnoree(PASSE),
      signalerIgnoree(PISTES),
      presenterMaintenant(PASSE),
    ]);
    const etat = await lireRetenue();
    expect(etat[PASSE].ignoreesDAffilee).toBe(2);
    expect(etat[PISTES].ignoreesDAffilee).toBe(1);
  });

  it('utilisée puis remise à zéro, tout revient', async () => {
    for (let i = 0; i < 4; i += 1) await signalerIgnoree(PASSE);
    await signalerIgnoree(PISTES);
    await signalerUtilisee(PASSE);
    expect((await lireRetenue())[PASSE].ignoreesDAffilee).toBe(0);
    expect((await lireRetenue())[PISTES].ignoreesDAffilee).toBe(1);

    await remettreRythmeNormal();
    expect(await lireRetenue()).toEqual(retenueInitiale());
  });

  it('la présentation décidée suit la cadence enregistrée', async () => {
    for (let i = 0; i < 3; i += 1) await signalerIgnoree(PASSE);
    const decisions = [
      await presenterMaintenant(PASSE),
      await presenterMaintenant(PASSE),
    ];
    expect(decisions.filter(Boolean)).toHaveLength(1);
  });
});
