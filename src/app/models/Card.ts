export interface Card {
    CardID?: number;
    Term: string;
    Definition: string;
    DeckID?: number;

    CreateTime?: Date;
    ModifyTime?: Date;
    LastReviewed?: Date;
    NumberTimesReviewed?: number;
    LevelOfUnderstanding: number;
}