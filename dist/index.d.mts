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
interface StartGameRequest {
    gameId: string;
}

interface Game {
    id: string;
    title: string;
    creator: string;
    phase: "cards" | "play" | "complete";
    players: {
        uid: string;
        name: string;
    }[];
    cardCounts: Record<string, number>;
}
type GameData = Omit<Game, "id">;
interface CreateGameRequest {
    title: string;
    name: string;
}

export type { Card, CardData, CreateCardRequest, CreateGameRequest, Game, GameData, StartGameRequest };
