export interface Etiquette {
  passage: string;
  type: string;
  sphere: string;
}
export interface Prediction {
  type: string;
  typeConfiance: number;
  sphere: string;
  modele?: string;
}
export interface Mesures {
  passages: number;
  exactitudeType: number | null;
  exactitudeSphere: number | null;
  parType: Record<string, { precision: number | null; rappel: number | null; attendus: number }>;
  confusion: Record<string, Record<string, number>>;
  seuils: { seuil: number; precisionAuDessus: number | null; questionsEnRevue: number | null }[];
}
export declare const TYPES: string[];
export declare const SPHERES: string[];
export declare const SEUILS: number[];
export declare function lireEtiquettes(texte: string): Etiquette[];
export declare function predireLocal(etiquettes: Etiquette[]): Prediction[];
export declare function predireDistant(
  etiquettes: Etiquette[],
  dependances: import('../../netlify/functions/analyser/traitement.ts').Dependances,
  delais?: number[],
): Promise<Prediction[]>;
export declare function mesurer(etiquettes: Etiquette[], predictions: Prediction[]): Mesures;
export declare function rapport(moteurs: Record<string, Mesures>): string;
