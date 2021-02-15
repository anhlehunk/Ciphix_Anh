// Intent name: Help

var text =   "I am your Virtual Assistant, and I assist the pilots by providing you information.\
 The information I can provide you are the current weather description of any city or town, \
 the weather description of the departure or arrival location, the 5 day weather forecast for any city and the flight distance and duration."

export const help = (conv: any) => {

    return conv.add(

        text
      
        
    )

    
}