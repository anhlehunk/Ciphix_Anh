"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fallback = void 0;
// Intent name: Default Fallback Intent
const fallback = (conv) => {
    return conv.add(`I'm sorry, i didn't understand your request. To have an overview of the information I can provide, type "help"`);
};
exports.fallback = fallback;
