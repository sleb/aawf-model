export interface Game {
  id: string;
  title: string;
  creator: string;
  phase: "cards" | "play" | "complete";
  cardCounts: Map<string, number>;
}

export type GameData = Omit<Game, "id">;
