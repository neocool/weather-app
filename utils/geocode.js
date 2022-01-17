import request from 'postman-request';


export const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?' + 'access_key=f4617de4d8a6c718dc5ac84371686e1e&' + 'query=' + encodeURIComponent(address)

    request({url:url,json:true},(error,{body}={}) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)            
        }else if (body.data.length === 0){            
            callback('unable to find location. Try another search',undefined)
        }else{
            const {label:location,latitude,longitude} = body.data[0]            
            callback(undefined,{location: location, latitude:latitude, longitude: longitude})
        }
    })

}