"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerCardCounts = exports.nextJudge = exports.winners = exports.hand = exports.player = exports.playerCount = exports.playerIds = void 0;
const playerIds = (game) => {
    return Object.keys(game.players).sort();
};
exports.playerIds = playerIds;
const playerCount = (game) => {
    return (0, exports.playerIds)(game).length;
};
exports.playerCount = playerCount;
const player = (game, playerId) => game.players[playerId];
exports.player = player;
const hand = (game, player = game.creator) => {
    return game.players[player].hand;
};
exports.hand = hand;
const winners = (game) => {
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
    }, []);
};
exports.winners = winners;
const nextJudge = (game) => {
    var _a;
    const ids = (0, exports.playerIds)(game);
    switch (ids.length) {
        case 0:
            throw "zero players!?";
        case 1:
            return ids[0];
    }
    const currentJudge = (_a = game.round) === null || _a === void 0 ? void 0 : _a.judge;
    if (!currentJudge) {
        return ids[0];
    }
    const index = ids.findIndex((playerId) => playerId === currentJudge);
    if (index < 0) {
        throw "unknown current judge";
    }
    return ids[(index + 1) % ids.length];
};
exports.nextJudge = nextJudge;
const playerCardCounts = (game) => {
    return Object.fromEntries(Object.entries(game.players).map(([playerId, player]) => [
        playerId,
        player.hand.length,
    ]));
};
exports.playerCardCounts = playerCardCounts;
//# sourceMappingURL=Game.js.map