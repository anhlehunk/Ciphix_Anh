"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fetch = require("node-fetch");
const request = require('request');
const dialogflow_fulfillment_1 = require("dialogflow-fulfillment");
// intent method imports
const fallback_1 = require("./intents/fallback");
const welcome_1 = require("./intents/welcome");
const Departure_1 = require("./intents/Departure");
const arrival_1 = require("./intents/arrival");
const weather_1 = require("./intents/weather");
const help_1 = require("./intents/help");
const distance_1 = require("./intents/distance");
const forecast_1 = require("./intents/forecast");
const app = express_1.default();
const PORT = 8080;
app.use(cors_1.default({ origin: '*' }), express_1.default.json());
// Map of intent-name to their respective method
const intents = new Map();
// Set specific intent-name to it's respective method
intents.set('Default Fallback Intent', fallback_1.fallback);
intents.set('Default Welcome Intent', welcome_1.welcome);
intents.set('Departure', Departure_1.departure);
intents.set('Arrival', arrival_1.arrival);
intents.set('Weather', weather_1.weather);
intents.set('Help', help_1.help);
intents.set('Distance', distance_1.distance);
intents.set('Forecast', forecast_1.forecast);
// Lists that is required in later functions to store values, and to later use as output for the chatbot
var array = [];
var array2 = [];
var cityForecast = [];
app.post('/', async (req, res) => {
    const agent = new dialogflow_fulfillment_1.WebhookClient({ request: req, response: res });
    //request the JSON data
    var requestBody = req.body;
    //extract the needed values, in this case, the requested city and a date
    var requestedCity = requestBody.queryResult.parameters['geo-city'];
    var requestedDate = requestBody.queryResult.parameters['date-time'];
    //wrongInput is a variable to check if the action is the 'correct' one(An action that requires an API request)
    var wrongInput = requestBody.queryResult.action;
    //Variables where the respones will be stored later
    var response = "";
    var responseVar = {};
    //Nothing will happen if the action is not the 'correct' one(an action that doesn't require a request from the API)
    if (wrongInput == "input.welcome" || wrongInput == "input.unknown" || requestedCity == undefined) {
    }
    //If the request contains a date(so requestedDate is not empty), the forecast data will be fetched, because the user is asking for weather data on a given moment in time.
    else if (requestedDate != "") {
        //URL to request from API
        var linkForecast = encodeURI('http://api.openweathermap.org/data/2.5/forecast?q=' + requestedCity + '&units=Metric&appid=e033d33be97df555c5734d85d49b460a');
        //Function to fetcht the data from the API
        async function fetchForecast() {
            const res = await fetch(linkForecast);
            const data = await res.json();
            //This API provides a forecast of 5 days, in 3 hour intervals. So in total the API returns 40 arrays of information:
            //Every 8th array is the information of a new day. To get the data for every new day, the data of each 8th day starting from
            //0 will be fetched(0th day, 8th day, 16th day...)
            for (let i = 0; i < data.list.length; i += 8) {
                const temporaryDate = new Date(data.list[i].dt_txt).toDateString();
                const temporaryDescription = data.list[i].weather[0].description;
                const temporaryTemp = data.list[i].main.temp;
                //For each one of the 5 days, a string will be stored in the list cityForecast. These strings will be used later for the output.
                cityForecast.push("Date: " + temporaryDate + " : weather: " + temporaryTemp + " degrees Celsius with " + temporaryDescription);
            }
            //returns a string with the information as output
            return "The weather forecast for 5 days for " + requestedCity + " is: \n" +
                cityForecast[0] + ".\n" +
                cityForecast[1] + ".\n" +
                cityForecast[2] + ".\n" +
                cityForecast[3] + ".\n" +
                cityForecast[4];
        }
        //Empty the list cityForecast
        cityForecast = [];
        //run the function and return the information as output for the user to see.
        let result = await fetchForecast();
        response = result;
        responseVar = {
            'fulfillmentText': response
        };
        return res.json(responseVar);
    }
    else {
        //If the user request contains only a city, a current weather description will be returned
        var linkCurrent = encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + requestedCity + '&units=Metric&appid=e033d33be97df555c5734d85d49b460a');
        //Function to fetch the current weather data from the requested city
        async function fetchData() {
            const res = await fetch(linkCurrent);
            const data = await res.json();
            //Fetches the temperature and the weather description and stores it temporarily in a list
            const data2 = await data.weather[0].description;
            const data3 = await data.main.temp;
            array.push(data2);
            array2.push(data3);
            //Fetches the stored data from the list and returns a string
            var weatherDescription = array.slice(-1)[0];
            var temperature = array2.slice(-1)[0].toString();
            return "The current temperature in " + requestedCity + " is  " + temperature + " degrees Celsius with " + weatherDescription + ".";
        }
        //Runs the function and returns a string as output for the user to see
        let result = await fetchData();
        response = result;
        responseVar = {
            'fulfillmentText': response
        };
        return res.json(responseVar);
    }
    await agent.handleRequest(intents);
});
app.listen(PORT, () => console.log(`Server started on port: ${PORT}!`));
