"use strict";
/*
import express from 'express'
import cors from 'cors'
const fetch = require("node-fetch");
const  request  =  require ( 'request' ) ;

import { WebhookClient } from 'dialogflow-fulfillment'
// intent method imports
import { fallback } from './intents/fallback'
import { welcome } from './intents/welcome'
import { departure } from './intents/Departure'
import { arrival } from './intents/arrival'
import { weather } from './intents/weather'
import { help } from './intents/help'
import { distance } from './intents/distance'

const app = express()

const PORT: number = 8080

app.use(
    cors({ origin: '*' }),
    express.json(),
)

// Map of intent-name to their respective method
const intents = new Map<string, (agent: any) => void>()

// Set specific intent-name to it's respective method
intents.set('Default Fallback Intent', fallback)
intents.set('Default Welcome Intent', welcome)
intents.set('Departure', departure)
intents.set('Arrival', arrival)
intents.set('Weather', weather)
intents.set('Help', help)
intents.set('Distance', distance)



var array:any = []
var array2:any = []



app.post('/', async (req, res) => {
    const agent: any = new WebhookClient({ request: req, response: res })
    var requestBody = req.body
    var requestedCity = requestBody.queryResult.parameters['geo-city']
    var wrongInput = requestBody.queryResult.action
    var response = ""
    var responseVar = {}
    
    if (wrongInput=="input.welcome" ){

    }

    else if(wrongInput=="input.unknown" || requestedCity == undefined){
  
    }
    else{
    var link3 = encodeURI('http://api.openweathermap.org/data/2.5/weather?q='+ requestedCity +'&units=Metric&appid=e033d33be97df555c5734d85d49b460a')
    

    async function fetchData(){
        const res = await fetch(link3);
        const data = await res.json();
        const data2 = await data.weather[0].description
        const data3 = await data.main.temp
        array.push(data2)
        array2.push(data3)
        var weatherDescription = array.slice(-1)[0]
        var temperature = array2.slice(-1)[0].toString()
            return "The current temperature in "+ requestedCity +" is  "+ temperature + " degrees Celsius with " + weatherDescription
    }
        let result = await fetchData()
        response = result
        responseVar = {
                        'fulfillmentText':response
        }

        module.exports.array = array;
        return res.json(responseVar)
}

    await agent.handleRequest(intents)
    
})






app.listen(PORT, () => console.log(`Server started on port: ${PORT}!`))


    
*/ 
