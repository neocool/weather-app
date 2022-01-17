import request from 'postman-request';

const url = 'http://api.weatherstack.com/current?access_key=2c2924b29f5d3025759b82df5c01ed9c&query=37.8267,-122.4233'


export const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?'+ 'access_key=2c2924b29f5d3025759b82df5c01ed9c' + '&query=' +  encodeURIComponent(latitude + ',' + longitude)+ '&units=f'

    request({url:url,json:true},(error,{body}={}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        }else if (body.error){
            callback('unable to find location',undefined)
        }else{   
            const {weather_descriptions:descriptions, temperature , precip } = body.current
            callback(undefined, descriptions[0] + '. It is currently ' + temperature + ' degress out. There is a ' + precip + '% chance of rain.')  
        }    
    })

}