export interface Game {
  id: string;
  title: string;
  creator: string;
  phase: "cards" | "play" | "complete";
  players: Record<string, string>;
  cardCounts: Record<string, number>;
}

export type GameData = Omit<Game, "id">;

export interface CreateGameRequest {
  title: string;
  name: string;
}

export interface StartGameRequest {
  gameId: string;
}
