"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Round_1 = require("./Round");
const mocker_1 = require("./lib/mocker");
const mockRound = (0, mocker_1.mocker)({
    cards: {},
    id: "any-id",
    judge: "any-judge",
    winner: null,
});
(0, globals_1.describe)("Round", () => {
    (0, globals_1.describe)("playerForCard", () => {
        (0, globals_1.it)("should return the player who played a given card", () => {
            const cardId = "card#1";
            const playerId = "player#1";
            (0, globals_1.expect)((0, Round_1.playerForCard)(mockRound({
                cards: {
                    [playerId]: cardId,
                    "player#2": "card#3",
                    "player#3": "card#8",
                },
            }), cardId)).toEqual(playerId);
        });
    });
});
//# sourceMappingURL=Round.test.js.map