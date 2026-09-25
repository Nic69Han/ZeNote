/**
 * L'import d'un compte rendu de réunion.
 *
 * Spec `reunions` — « Traitement d'un compte rendu externe ». Un compte rendu arrive
 * toujours après coup, écrit par quelqu'un d'autre, et contient le mélange habituel :
 * ce qu'on a promis, ce que les autres ont promis, et le reste. Relu deux jours plus
 * tard, il fait dix écrans et l'on n'y retrouve pas ses propres engagements — qui
 * sont pourtant la seule raison de l'ouvrir.
 *
 * ## La distinction qui compte
 *
 * Ce que l'utilisateur doit faire devient un **engagement** ; ce que les autres
 * doivent faire devient une **attente** envers eux. Ce n'est pas une nuance de
 * vocabulaire : les premiers se font, les secondes se surveillent, et les mélanger
 * donne une liste de tâches qu'on ne peut pas terminer.
 *
 * L'attribution se lit dans la forme du compte rendu — « Sophie : relancer le
 * client », « Action Marc — envoyer le devis » — et le nom de l'utilisateur, qu'il
 * fournit à l'import, tranche de quel côté tombe chaque ligne. Sans ce nom, aucune
 * ligne n'est attribuée : deviner ferait porter à quelqu'un des engagements qui ne
 * sont pas les siens, ce qui est exactement la panne qu'on répare.
 *
 * ## Rien n'est inventé
 *
 * Chaque élément garde les bornes exactes de sa ligne dans le compte rendu, et passe
 * par la règle d'ancrage du cœur, qui écarte tout ce qui ne s'y rattache pas. Une
 * ligne qu'on ne sait pas lire ne produit rien plutôt que de produire une
 * approximation.
 */

import { analyser, evaluerPoids, identifiant } from '../analyse/index.ts';
import { repererEcheance } from '../analyse/dates.ts';
import { filtrerAncrageObjets, type ElementJson } from '../core/regles.ts';
import { plier } from './lexique.ts';
import { capturer } from './pipeline.ts';
import { majCapture, remplacerElements } from '../stockage/depot.ts';

/** Ce qu'un import a produit, et ce qu'il a écarté. */
export interface ImportCompteRendu {
  elements: ElementJson[];
  /** Les lignes qu'aucune règle n'a su rattacher, dites telles quelles. */
  ecartes: string[];
}

/**
 * Les formes sous lesquelles un compte rendu attribue une ligne.
 *
 * Volontairement peu nombreuses : ce sont celles qu'on trouve dans un compte rendu
 * écrit à la main ou rendu par un outil de réunion. Une liste large attribuerait des
 * lignes ordinaires au premier mot capitalisé venu.
 */
const ATTRIBUTIONS = [
  // « Sophie : relancer le client » ou « Sophie — relancer le client »
  /^\s*(?:action\s+)?([A-ZÉÈÊÀÂÇÎÔÛ][\p{L}'’-]+(?:\s+[A-ZÉÈÊÀÂÇÎÔÛ][\p{L}'’-]+)?)\s*[:—–-]\s*(.+)$/u,
  // « Action pour Sophie : relancer le client »
  /^\s*action\s+(?:pour|de)\s+([A-ZÉÈÊÀÂÇÎÔÛ][\p{L}'’-]+(?:\s+[A-ZÉÈÊÀÂÇÎÔÛ][\p{L}'’-]+)?)\s*[:—–-]?\s*(.+)$/iu,
];

/** Les marques de première personne : la ligne est celle de qui lit. */
const PREMIERE_PERSONNE = /^\s*(?:je\s|j['’]|moi\s|il\s+faut\s+que\s+je\s|je\s+dois\s)/i;

/** Les puces et numéros qui ouvrent une ligne de compte rendu, sans rien dire. */
const PUCE = /^\s*(?:[-*•–—]|\d+[.)])\s*/;

/**
 * Découpe le compte rendu en lignes, avec leurs bornes exactes dans le texte.
 *
 * Les bornes portent sur le texte d'origine, puce comprise dans le calcul mais
 * exclue du contenu : c'est ce qui permet à l'ancrage de retrouver la ligne, et à
 * l'écran de la citer sans son tiret.
 */
function lignes(texte: string): { contenu: string; debutCar: number; finCar: number }[] {
  const trouvees: { contenu: string; debutCar: number; finCar: number }[] = [];
  let position = 0;

  for (const brute of texte.split('\n')) {
    const debutLigne = position;
    position += brute.length + 1;

    const sansPuce = brute.replace(PUCE, '');
    const decalage = brute.length - sansPuce.length;
    const contenu = sansPuce.trim();
    if (contenu.length < 3) continue;

    const debutCar = debutLigne + decalage + (sansPuce.length - sansPuce.trimStart().length);
    trouvees.push({ contenu, debutCar, finCar: debutCar + contenu.length });
  }
  return trouvees;
}

/**
 * Qui porte cette ligne, ou `null`.
 *
 * Le texte de l'élément reste la ligne entière, nom compris : c'est lui qui doit se
 * retrouver mot pour mot dans le compte rendu pour que l'ancrage le laisse passer.
 * Retirer le nom ferait une phrase plus jolie et un ancrage faux.
 */
function attribution(ligne: string): string | null {
  for (const motif of ATTRIBUTIONS) {
    const trouve = motif.exec(ligne);
    if (trouve) return trouve[1];
  }
  return null;
}

/**
 * Un élément de compte rendu, avec les mêmes déductions qu'une capture dictée.
 *
 * « Selon les mêmes règles que pour une capture vocale », dit la spec, et cela vaut
 * pour le poids et l'échéance autant que pour l'ancrage : un engagement importé sans
 * poids tomberait au fond de la Revue, c'est-à-dire nulle part.
 */
function deduit(
  ligne: { contenu: string; debutCar: number; finCar: number },
  captureId: string,
  aujourdhui: string,
): ElementJson {
  const poids = evaluerPoids(ligne.contenu);
  const echeance = repererEcheance(ligne.contenu, aujourdhui);

  return {
    id: identifiant('el'),
    captureId,
    type: 'TACHE',
    texte: ligne.contenu,
    debutCar: ligne.debutCar,
    finCar: ligne.finCar,
    echeance: echeance?.date ?? null,
    echeanceConfiance: echeance?.confiance ?? null,
    echeanceIndice: echeance?.indice ?? null,
    horizon: echeance?.horizon ?? null,
    poids: poids.poids,
    poidsConfiance: poids.confiance,
    poidsIndice: poids.indice,
    verdict: 'EN_ATTENTE',
    corrigeParHumain: false,
    issuDeReunion: true,
  };
}

/**
 * Extrait d'un compte rendu ce qui concerne l'utilisateur, et ce qu'il attend.
 *
 * @param monNom le nom sous lequel l'utilisateur apparaît dans le compte rendu.
 *   Vide : aucune ligne n'est attribuée, et tout passe par les règles ordinaires.
 */
export function importerCompteRendu(
  texte: string,
  monNom: string,
  captureId: string,
  aujourdhui: string,
): ImportCompteRendu {
  const moi = plier(monNom.trim());
  const candidats: ElementJson[] = [];
  const ecartes: string[] = [];

  for (const ligne of lignes(texte)) {
    const qui = attribution(ligne.contenu);
    const estMoi = qui !== null && moi !== '' && plier(qui) === moi;
    const premierePersonne = PREMIERE_PERSONNE.test(ligne.contenu);

    if (qui !== null && !estMoi) {
      // Quelqu'un d'autre s'est engagé : c'est une attente, pas une tâche.
      candidats.push({
        ...deduit(ligne, captureId, aujourdhui),
        type: 'ATTENTE',
        interlocuteur: qui,
        interlocuteurConfiance: 0.9,
      });
      continue;
    }

    if (estMoi || premierePersonne) {
      candidats.push({ ...deduit(ligne, captureId, aujourdhui), type: 'ENGAGEMENT' });
      continue;
    }

    // Ni attribuée ni à la première personne : les règles ordinaires s'appliquent,
    // sur cette ligne seule et avec ses bornes réelles dans le compte rendu.
    const ordinaire = analyser(ligne.contenu, captureId, aujourdhui);
    if (ordinaire.elements.length === 0) {
      ecartes.push(ligne.contenu);
      continue;
    }
    for (const element of ordinaire.elements) {
      candidats.push({
        ...element,
        debutCar: ligne.debutCar + element.debutCar,
        finCar: Math.min(ligne.debutCar + element.finCar, ligne.finCar),
        issuDeReunion: true,
      });
    }
  }

  // Le même filet que pour une capture vocale : rien n'atteint l'écran sans passage
  // source vérifié. Une ligne qu'on a mal découpée disparaît ici plutôt que de
  // produire un engagement que le compte rendu ne porte pas.
  const ancrage = filtrerAncrageObjets(texte, candidats);
  return {
    elements: ancrage.retenus,
    ecartes: [...ecartes, ...ancrage.ecartes.map((e) => e.texte)],
  };
}

/**
 * Dépose un compte rendu : une capture, et les éléments qui en sortent.
 *
 * La capture est écrite d'abord et marquée analysée : le compte rendu est la source,
 * et l'analyse ordinaire n'a rien à y refaire — elle le relirait comme une note
 * dictée, sans attribution, et remplacerait ce qui vient d'être extrait.
 */
export async function deposerCompteRendu(
  texte: string,
  monNom: string,
  aujourdhui: string,
): Promise<{ captureId: string; elements: number; ecartes: string[] }> {
  const capture = await capturer({
    texte,
    source: 'ECRITE',
    etatTranscription: 'OK',
  });

  const rendu = importerCompteRendu(texte, monNom, capture.id, aujourdhui);
  await remplacerElements(capture.id, rendu.elements);
  await majCapture(capture.id, { analysee: true });

  return { captureId: capture.id, elements: rendu.elements.length, ecartes: rendu.ecartes };
}
