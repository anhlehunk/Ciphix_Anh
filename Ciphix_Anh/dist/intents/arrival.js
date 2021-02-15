"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrival = void 0;
// Intent name: Arrival
const fetch = require("node-fetch");
//Link to fetch data from the departure location Washington
var link = encodeURI('http://api.openweathermap.org/data/2.5/weather?q=Washington&units=Metric&appid=e033d33be97df555c5734d85d49b460a');
//List to store the value that is fetched from the API
var array = [];
//Function to extract the data from the API
async function fetchData() {
    const res = await fetch(link);
    const data = await res.json();
    //Extract the required data from the JSON data
    const weatherDescription = await data.weather[0].description;
    const temperature = await data.main.temp;
    return "The temperature from the arrival location Washington is "
        + temperature
        + " degrees Celsius and the weather description is as following: "
        + weatherDescription
        + ".";
}
//Runs the Async function store the value in a list.
fetchData().then(function (result) {
    array.push(result);
});
const arrival = (conv) => {
    //returns the value stored in the list
    return conv.add(array[0]);
};
exports.arrival = arrival;
