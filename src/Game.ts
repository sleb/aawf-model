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

export const playerIds = (game: GameData): string[] => {
  return Object.keys(game.players).sort();
};

export const playerCount = (game: GameData): number => {
  return playerIds(game).length;
};

export const player = (game: GameData, playerId: string): Player =>
  game.players[playerId];

export const hand = (
  game: GameData,
  player: string = game.creator,
): string[] => {
  return game.players[player].hand;
};

export const winners = (game: GameData): Player[] => {
  const players = Object.values(game.players);
  if (players.length === 0) {
    throw "no players";
  }

  return players.reduce((acc, player) => {
    if (acc.length === 0 || player.score > acc[0].score) {
      return [player];
    }

    if (player.score === acc[0].score) {
      return [player, ...acc];
    }

    return acc;
  }, [] as Player[]);
};

export const nextJudge = (game: GameData): string => {
  const ids = playerIds(game);
  switch (ids.length) {
    case 0:
      throw "zero players!?";
    case 1:
      return ids[0]!;
  }

  const currentJudge = game.round?.judge;
  if (!currentJudge) {
    return ids[0]!;
  }

  const index = ids.findIndex((playerId) => playerId === currentJudge);
  if (index < 0) {
    throw "unknown current judge";
  }

  return ids[(index + 1) % ids.length]!;
};