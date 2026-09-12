type Nullable<T> = T | null | undefined
export declare namespace app.zenote.core.js {
    const ZeNoteRegles: {
        maintenant(elementsJson: string, aujourdhui: string): string;
        revue(elementsJson: string, aujourdhui: string): string;
        filtrerAncrage(texteSource: string, elementsJson: string): string;
        get version(): string;
    };
}
export as namespace zenote_core;