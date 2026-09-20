type Nullable<T> = T | null | undefined
export declare namespace app.zenote.core.js {
    const ZeNoteRegles: {
        maintenant(elementsJson: string, aujourdhui: string): string;
        revue(elementsJson: string, aujourdhui: string): string;
        transcriptionLisible(brut: string): string;
        filtrerAncrage(texteSource: string, elementsJson: string, passagesIncertainsJson: string): string;
        relances(elementsJson: string, aujourdhui: string, suivisJson: string, delaisJson: string): string;
        rechercherParMots(requete: string, elementsJson: string, capturesJson: string, reseau: boolean): string;
        rechercherParQuestion(requete: string, elementsJson: string, capturesJson: string, aujourdhui: string, reseau: boolean): string;
        rappels(elementsJson: string, maintenant: string, suivisJson: string): string;
        rechercherParPersonne(personne: string, elementsJson: string, reseau: boolean): string;
        get version(): string;
    };
}
export as namespace zenote_core;