import { Card } from "./Card";
import { Player } from "./Player";
export interface Round {
    id: string;
    judge: string;
    cards: Record<string, string>;
    adjective?: string;
    winner: string | null;
}
export type RoundData = Omit<Round, "id">;
export interface RoundResult {
    winningCard: Card;
    winningPlayer: Player;
}
export declare const playerForCard: ({ cards }: RoundData, cardId: string) => string;
