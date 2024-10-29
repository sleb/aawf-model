export interface Game {
  id: string;
  title: string;
  creator: string;
  phase: "cards" | "play" | "complete";
  players: [{ uid: string; name: string }];
  cardCounts: Record<string, number>;
}

export type GameData = Omit<Game, "id">;
