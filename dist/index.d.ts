interface Card {
    id: string;
    nounPhrase: string;
    contributor: string;
}
type CardData = Omit<Card, "id">;

interface Game {
    id: string;
    title: string;
    creator: string;
    phase: "cards" | "play" | "complete";
    cardCounts: Record<string, number>;
}
type GameData = Omit<Game, "id">;

export type { Card, CardData, Game, GameData };
