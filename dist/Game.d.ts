import { Player } from "./Player";
import { Round } from "./Round";
export type Phase = "cards" | "play" | "complete";
export interface Game {
    id: string;
    title: string;
    creator: string;
    phase: Phase;
    round?: Round;
    players: Record<string, Player>;
    cardCounts: Record<string, number>;
}
export type GameData = Omit<Game, "id">;
export declare const playerIds: (game: GameData) => string[];
export declare const playerCount: (game: GameData) => number;
export declare const player: (game: GameData, playerId: string) => Player;
export declare const hand: (game: GameData, player?: string) => string[];
export declare const winners: (game: GameData) => Player[];
export declare const nextJudge: (game: GameData) => string;
