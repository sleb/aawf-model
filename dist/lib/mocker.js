"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mocker = void 0;
const mocker = (base) => (obj = {}) => (Object.assign(Object.assign({}, base), obj));
exports.mocker = mocker;
//# sourceMappingURL=mocker.js.map