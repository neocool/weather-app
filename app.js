import * as Geocode from './utils/geocode.js'
import * as Forecast from './utils/forecast.js'

const address = process.argv[2]

const getWeather = (address) => {
    Geocode.geocode(address, (error, {latitude,longitude,location}={}) => {
        if (error){
            console.log(error)
        }
        else{            
            Forecast.forecast(latitude,longitude, (error,data)=> {
                if (error){
                    return console.log(error)
                }
                console.log('Location:',location )                
                console.log('Weather:', data)
            })
        }
    })

}


if (!address){
    console.log("Please provide an address")
}else{
    getWeather(address)
}
