"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = void 0;
// Intent name: Distance
//The distance and flight duration of the flight between Rotterdam and Washington.
var dis = '7809 km';
var dur = '9 hours and 41 minutes';
const distance = (conv) => {
    return conv.add('The flight distance from Rotterdam to Washington is ' + dis + ' . The flight duration is ' + dur + ".");
};
exports.distance = distance;
