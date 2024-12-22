"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerForCard = void 0;
const playerForCard = ({ cards }, cardId) => {
    var _a;
    const playerId = (_a = Object.entries(cards).find(([, id]) => id === cardId)) === null || _a === void 0 ? void 0 : _a[0];
    if (!playerId) {
        throw new Error(`no playerId found for cardId: ${cardId}`);
    }
    return playerId;
};
exports.playerForCard = playerForCard;
//# sourceMappingURL=Round.js.map