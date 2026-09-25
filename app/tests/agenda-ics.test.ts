/**
 * Le lecteur d'agenda `.ics` — change `agenda-local`, tâche 2.1.
 *
 * Spec `agenda` — « Import d'un agenda sur l'appareil ». Les deux fixtures sont
 * rédigées au format que produisent Google Agenda et Outlook (en-têtes, lignes pliées,
 * `VTIMEZONE`, fuseau Windows, exceptions de série, alarmes imbriquées) ; ce ne sont
 * pas des exports de vrais comptes.
 */

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { AgendaIllisible, lireAgenda } from '../src/agenda/ics.ts';

const google = readFileSync(new URL('./fixtures/agenda-google.ics', import.meta.url), 'utf8');
const outlook = readFileSync(new URL('./fixtures/agenda-outlook.ics', import.meta.url), 'utf8');

/** Lundi 21 septembre 2026, 10 h à Paris : le moment de l'import. */
const MAINTENANT = new Date('2026-09-21T08:00:00Z');
const PARIS = { maintenant: MAINTENANT, fuseauAppareil: 'Europe/Paris' };

describe('un export de Google Agenda', () => {
  const lu = lireAgenda(google, PARIS);
  const titres = (titre: string) => lu.evenements.filter((e) => e.titre === titre);

  it('scénario « Import réussi » — titre, début, fin, lieu et participants', () => {
    const comite = titres('Comité budget');
    expect(comite).toHaveLength(1);
    expect(comite[0]).toMatchObject({
      debut: '2026-09-22T10:00',
      fin: '2026-09-22T11:00',
      participants: ['Claire Martin', 'marc.dupont@exemple.fr'],
      recurrent: false,
      journeeEntiere: false,
    });
    const point = lu.evenements.find((e) => e.titre === 'Point du lundi');
    expect(point).toMatchObject({ lieu: 'Salle Galilée, 3e étage', participants: ['Marc Dupont'] });
  });

  it('développe la série hebdomadaire, sans l’exclusion, avec l’exception, à l’heure même après le changement d’heure', () => {
    expect(titres('Point du lundi').map((e) => e.debut)).toEqual([
      '2026-09-21T09:00',
      '2026-10-12T09:00',
      '2026-10-19T09:00',
      // Passage à l'heure d'hiver le 25 octobre : toujours 9 h à Paris.
      '2026-10-26T09:00',
      '2026-11-02T09:00',
      '2026-11-09T09:00',
      '2026-11-16T09:00',
    ]);
    expect(titres('Point du lundi (décalé)').map((e) => e.debut)).toEqual(['2026-09-28T10:00']);
  });

  it('suit une règle mensuelle par rang, et s’arrête au compte', () => {
    expect(titres('COPIL').map((e) => e.debut)).toEqual(['2026-10-06T14:00', '2026-11-03T14:00']);
  });

  it('garde un événement « toute la journée » à part', () => {
    expect(titres('Salon VivaTech')[0]).toMatchObject({
      debut: '2026-09-24T00:00',
      fin: '2026-09-25T00:00',
      journeeEntiere: true,
    });
  });

  it('scénario « Récurrence non comprise » — l’occurrence d’origine seule, et c’est dit', () => {
    expect(titres('Anniversaire Léa').map((e) => e.debut)).toEqual(['2026-10-01T00:00']);
    expect(lu.recurrencesNonComprises).toBe(1);
  });

  it('écarte l’annulé et ce qui sort de l’horizon, en le comptant', () => {
    expect(titres('Point fournisseur')).toEqual([]);
    expect(titres('Réunion de juillet')).toEqual([]);
    expect(lu.ecartes).toEqual([{ raison: 'annulé', nombre: 1 }]);
    expect(lu.lus).toBe(7);
    expect(lu.couvreDepuis).toBe('2026-09-20T00:00');
    expect(lu.couvreJusqua).toBe('2026-11-20T23:59');
  });

  it('rend les heures dans le fuseau de l’appareil', () => {
    const newYork = lireAgenda(google, { maintenant: MAINTENANT, fuseauAppareil: 'America/New_York' });
    expect(newYork.evenements.find((e) => e.titre === 'Comité budget')?.debut).toBe('2026-09-22T04:00');
  });

  it('donne à chaque occurrence un identifiant stable et distinct', () => {
    const ids = lu.evenements.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(lireAgenda(google, PARIS).evenements.map((e) => e.id)).toEqual(ids);
  });
});

describe('un export d’Outlook', () => {
  const lu = lireAgenda(outlook, PARIS);

  it('lit un fuseau nommé à la manière de Windows, entre guillemets', () => {
    const revues = lu.evenements.filter((e) => e.titre === 'Revue projet');
    expect(revues.map((e) => [e.debut, e.fin])).toEqual([
      ['2026-09-23T11:00', '2026-09-23T11:30'],
      ['2026-09-24T11:00', '2026-09-24T11:30'],
      ['2026-09-25T11:00', '2026-09-25T11:30'],
    ]);
    expect(revues[0].participants).toEqual(['Moi', 'Sophie Bernard', 'Paul Lemaire']);
  });

  it('lit une durée à la place d’une fin', () => {
    const entretien = lu.evenements.find((e) => e.titre === 'Entretien annuel');
    expect(entretien).toMatchObject({ debut: '2026-09-29T09:00', fin: '2026-09-29T09:45' });
  });

  it('écarte un fuseau qu’il ne connaît pas plutôt que d’approximer l’heure', () => {
    expect(lu.evenements.some((e) => e.titre === 'Point partenaire')).toBe(false);
    expect(lu.ecartes).toEqual([{ raison: 'fuseau horaire non reconnu', nombre: 1 }]);
  });
});

describe('ce qui n’est pas un agenda', () => {
  it('scénario « Fichier illisible » — refusé, avec une erreur qui le dit', () => {
    expect(() => lireAgenda('Nom;Prénom\nDupont;Marc', PARIS)).toThrow(AgendaIllisible);
    expect(() => lireAgenda('', PARIS)).toThrow(AgendaIllisible);
  });

  it('prend une heure flottante dans le fuseau de l’appareil', () => {
    const flottant = [
      'BEGIN:VCALENDAR',
      'BEGIN:VEVENT',
      'UID:f',
      'DTSTART:20260922T150000',
      'DTEND:20260922T153000',
      'SUMMARY:Appel',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');
    expect(lireAgenda(flottant, PARIS).evenements[0]).toMatchObject({ debut: '2026-09-22T15:00', fin: '2026-09-22T15:30' });
  });
});
