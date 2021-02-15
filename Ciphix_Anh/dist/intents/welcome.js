"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
// Intent name: Default Welcome Intent
const welcome = (conv) => {
    return conv.add(`Hello, welcome aboard, this is the flight from Rotterdam to Washington. I am your Virtual Assistant, what can I help you with? To view what I can help you with, type "help".`);
};
exports.welcome = welcome;
