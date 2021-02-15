"use strict";
// Intent name: Help
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
var text = "I am your Virtual Assistant, and I assist the pilots by providing you information.\
 The information I can provide you are the current weather description of any city or town, \
 the weather description of the departure or arrival location, the 5 day weather forecast for any city and the flight distance and duration.";
const help = (conv) => {
    return conv.add(text);
};
exports.help = help;
