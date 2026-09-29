/**
 * Le premier geste : à quelles formulations la Revue en demande un.
 *
 * La liste est fermée et testée des deux côtés. Mieux vaut ne pas demander que demander
 * à tort : les formulations concrètes ne doivent jamais déclencher la question, et c'est
 * ce côté-là qui protège de l'habitude de l'ignorer. Scénarios de la spec
 * `premier-geste` — « Tâche floue » et « Tâche déjà concrète ».
 */

import { describe, expect, it } from 'vitest';
import { demandeUnPremierGeste } from '../src/analyse/geste.ts';
import { premierGesteDe } from '../src/ui/premier-geste.ts';

const FLOUES = [
  'avancer sur le budget 2027',
  'Gérer le fournisseur de Bron',
  'Il faut que je m’occupe du recrutement',
  'Préparer la réunion de jeudi',
  'Finaliser le dossier Atlas',
  'Organiser l’offsite de novembre',
  'Régler le problème de planning',
  'Boucler le lot 3',
  'Voir pour les congés de l’été',
  'Réfléchir à la stratégie fournisseurs',
  'Faire le point sur le chantier',
  'Travailler sur la présentation du comité',
  'Penser à la formation de l’équipe',
  'Suivre le dossier de Marc',
  'Traiter les factures en retard',
  'Je dois avancer sur le budget, sinon le chantier est bloqué',
  'Il faut que j’avance sur le rapport annuel',
  'Il faut que je gère la relation avec le sous-traitant',
  'Il faut que je prépare la réunion avec Karim',
  'Je m’occupe du déménagement de l’équipe',
];

const CONCRETES = [
  'Appeler Karim pour le devis',
  'Envoyer le planning à Sophie avant vendredi',
  'Relire le contrat du fournisseur',
  'Rédiger le compte rendu de la réunion',
  'Réserver la salle pour jeudi',
  'Commander les badges',
  'Signer l’avenant',
  'Vérifier le budget avec Marc',
  'Rappeler le notaire demain matin',
  'Il faut que j’envoie la facture à la comptabilité',
  'Payer la cantine',
  'Penser à appeler Karim',
  'Voir pour envoyer le dossier au client',
  'Appeler Karim puis préparer la réunion',
  'Écrire à Marc pour finaliser le dossier',
  'Acheter du pain',
  'Le budget 2027',
  'Karim, le devis du toit',
  'Payer la facture du traiteur demain, c’est urgent',
];

describe('Tâche floue — le premier geste est demandé', () => {
  it.each(FLOUES)('demande un premier geste pour « %s »', (texte) => {
    expect(demandeUnPremierGeste(texte)).toBe(true);
  });

  it('en compte au moins dix, pour que la liste ne soit pas un échantillon de complaisance', () => {
    expect(FLOUES.length).toBeGreaterThanOrEqual(10);
  });
});

describe('Tâche déjà concrète — aucun premier geste demandé', () => {
  it.each(CONCRETES)('n’en demande pas pour « %s »', (texte) => {
    expect(demandeUnPremierGeste(texte)).toBe(false);
  });

  it('en compte au moins dix', () => {
    expect(CONCRETES.length).toBeGreaterThanOrEqual(10);
  });
});

describe('les bords de la liste', () => {
  it('ignore la casse, les accents et l’apostrophe typographique', () => {
    expect(demandeUnPremierGeste('GÉRER LE BUDGET')).toBe(true);
    expect(demandeUnPremierGeste('Il faut que je m’occupe du budget')).toBe(true);
    expect(demandeUnPremierGeste("Il faut que je m'occupe du budget")).toBe(true);
  });

  it('ne prend pas un nom pour un verbe : « la règle », « une traite »', () => {
    expect(demandeUnPremierGeste('Respecter la règle du jeu')).toBe(false);
    expect(demandeUnPremierGeste('Payer la traite avant le 15')).toBe(false);
  });

  it('ne prend pas « avancer » pour un flou quand il déplace quelque chose', () => {
    expect(demandeUnPremierGeste('Avancer le rendez-vous de jeudi')).toBe(false);
  });

  it('laisse le verbe concret décider quand il précède le verbe flou', () => {
    expect(demandeUnPremierGeste('Appeler Marc pour avancer sur le budget')).toBe(false);
  });

  it('laisse le verbe flou décider quand il précède, même si un concret suit', () => {
    expect(demandeUnPremierGeste('Avancer sur le budget puis envoyer le point à Sophie')).toBe(true);
  });

  it('ne demande rien à une phrase vide', () => {
    expect(demandeUnPremierGeste('')).toBe(false);
    expect(demandeUnPremierGeste('   ')).toBe(false);
  });
});

describe('Premier geste affiché au moment d’agir — quand il y en a un', () => {
  const texte = 'Avancer sur le budget 2027';

  it('est l’action du plan quand elle diffère du texte de la tâche', () => {
    expect(premierGesteDe({ texte, planAction: 'ouvrir le tableur et relire l’onglet charges' })).toBe(
      'ouvrir le tableur et relire l’onglet charges',
    );
  });

  it('n’existe pas quand le plan reprend la tâche telle quelle, ou n’a pas d’action', () => {
    expect(premierGesteDe({ texte, planAction: texte })).toBeNull();
    expect(premierGesteDe({ texte, planAction: `  ${texte} ` })).toBeNull();
    expect(premierGesteDe({ texte, planAction: '' })).toBeNull();
    expect(premierGesteDe({ texte, planAction: null })).toBeNull();
    expect(premierGesteDe({ texte })).toBeNull();
  });
});
