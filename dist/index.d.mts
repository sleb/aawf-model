interface Card {
    id: string;
    nounPhrase: string;
    contributor: string;
}
type CardData = Omit<Card, "id">;
interface CreateCardRequest {
    nounPhrase: string;
    gameId: string;
}
interface DeleteCardRequest {
    cardId: string;
}

interface Game {
    id: string;
    title: string;
    creator: string;
    phase: "cards" | "play" | "complete";
    players: Record<string, string>;
    cardCounts: Record<string, number>;
}
type GameData = Omit<Game, "id">;
interface CreateGameRequest {
    title: string;
    name: string;
}
interface StartGameRequest {
    gameId: string;
}

export type { Card, CardData, CreateCardRequest, CreateGameRequest, DeleteCardRequest, Game, GameData, StartGameRequest };
