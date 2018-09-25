export interface Card {
    CardID?: number;
    Term: string;
    Definition: string;
    DeckIndex?: number;

    CreateTime?: Date;
    ModifyTime?: Date;
    LastReviewed?: Date;
    NumberTimesReviewed?: number;
}