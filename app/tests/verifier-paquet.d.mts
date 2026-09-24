export declare const MOTIFS_INTERDITS: string[];
export declare function chercherFuites(
  dossier: string,
  options?: { cle?: string },
): Promise<{ fichier: string; motif: string }[]>;
