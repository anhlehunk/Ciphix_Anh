"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecast = void 0;
// Intent name: Forecast
const forecast = (conv) => {
    return conv.add('To view the 5-day forecast of any city, give me a city and any date(e.g. Moscow tomorrow).');
};
exports.forecast = forecast;
