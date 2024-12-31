"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Game_1 = require("./Game");
const mocker_1 = require("./lib/mocker");
const mockGame = (0, mocker_1.mocker)({
    id: "any-id",
    cardCounts: {},
    creator: "any-creator",
    phase: "cards",
    players: {},
    title: "any-title",
});
const mockPlayer = (0, mocker_1.mocker)({ hand: [], name: "any-name", score: 0 });
(0, globals_1.describe)("playerIds", () => {
    (0, globals_1.describe)("when empty", () => {
        (0, globals_1.it)("should return []", () => {
            (0, globals_1.expect)((0, Game_1.playerIds)(mockGame())).toHaveLength(0);
        });
    });
    (0, globals_1.describe)("when non-empty", () => {
        (0, globals_1.it)("should return IDs", () => {
            const ids = ["abc", "def"];
            (0, globals_1.expect)(new Set((0, Game_1.playerIds)(mockGame({
                players: ids.reduce((acc, id) => (Object.assign({ [id]: mockPlayer({ name: id }) }, acc)), {}),
            })))).toEqual(new Set(ids));
        });
    });
});
(0, globals_1.describe)("winners", () => {
    (0, globals_1.describe)("when one player has highest score", () => {
        (0, globals_1.it)("should find a single winner", () => {
            const winner = mockPlayer({ name: "player#2", score: 15 });
            const game = mockGame({
                players: {
                    "id#1": mockPlayer({ name: "player#1", score: 11 }),
                    "id#2": winner,
                    "id#3": mockPlayer({ name: "player#3", score: 10 }),
                    "id#4": mockPlayer({ name: "player#4", score: 1 }),
                    "id#5": mockPlayer({ name: "player#5", score: 3 }),
                    "id#6": mockPlayer({ name: "player#6", score: 0 }),
                },
            });
            (0, globals_1.expect)((0, Game_1.winners)(game)).toEqual([winner]);
        });
    });
    (0, globals_1.describe)("when multiple players have the highest score", () => {
        (0, globals_1.it)("should find all winners", () => {
            const winner1 = mockPlayer({ name: "player#2", score: 15 });
            const winner2 = mockPlayer({ name: "player#3", score: 15 });
            const game = mockGame({
                players: {
                    "id#1": mockPlayer({ name: "player#1", score: 11 }),
                    "id#2": winner1,
                    "id#3": winner2,
                    "id#4": mockPlayer({ name: "player#4", score: 1 }),
                    "id#5": mockPlayer({ name: "player#5", score: 3 }),
                    "id#6": mockPlayer({ name: "player#6", score: 0 }),
                },
            });
            (0, globals_1.expect)(new Set((0, Game_1.winners)(game))).toEqual(new Set([winner1, winner2]));
        });
    });
});
(0, globals_1.describe)("playerCount", () => {
    (0, globals_1.it)("should return number of players", () => {
        const playerIds = ["123", "456"];
        const players = playerIds.reduce((acc, id) => (Object.assign({ [id]: mockPlayer({ name: id }) }, acc)), {});
        (0, globals_1.expect)((0, Game_1.playerCount)(mockGame({ players }))).toBe(playerIds.length);
    });
});
(0, globals_1.describe)("playerCardCounts", () => {
    (0, globals_1.it)("should return card count for each player", () => {
        const game = mockGame({
            players: {
                "id#1": mockPlayer({ hand: ["card#1", "card#2"] }),
                "id#2": mockPlayer({ hand: ["card#4", "card#5"] }),
                "id#3": mockPlayer({ hand: ["card#6", "card#7", "card#8"] }),
            },
        });
        (0, globals_1.expect)((0, Game_1.playerCardCounts)(game)).toEqual({
            "id#1": 2,
            "id#2": 2,
            "id#3": 3,
        });
    });
});
//# sourceMappingURL=Game.test.js.map