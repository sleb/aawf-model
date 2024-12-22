import { describe, expect, it } from "@jest/globals";
import { playerForCard, Round } from "./Round";
import { mocker } from "./lib/mocker";

const mockRound = mocker<Round>({
  cards: {},
  id: "any-id",
  judge: "any-judge",
  winner: null,
});

describe("Round", () => {
  describe("playerForCard", () => {
    it("should return the player who played a given card", () => {
      const cardId = "card#1";
      const playerId = "player#1";
      expect(
        playerForCard(
          mockRound({
            cards: {
              [playerId]: cardId,
              "player#2": "card#3",
              "player#3": "card#8",
            },
          }),
          cardId,
        ),
      ).toEqual(playerId);
    });
  });
});
