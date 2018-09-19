export interface Deck {
    DeckID?: number;
    UserID?: number;
    Title: string;
    Description: string;
    PercentComplete?: number;
    CreateTime?: Date;
    ModifyTime?: Date;
    LastReviewed?: Date;
}