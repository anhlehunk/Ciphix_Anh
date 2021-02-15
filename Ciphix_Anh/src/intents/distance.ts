// Intent name: Distance
//The distance and flight duration of the flight between Rotterdam and Washington.
var dis = '7809 km'
var dur = '9 hours and 41 minutes'


export const distance = (conv: any) => {
    
    return conv.add(
        'The flight distance from Rotterdam to Washington is '+ dis + ' . The flight duration is ' + dur +"."
    )

    
}