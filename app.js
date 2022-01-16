import request from 'postman-request';


const url = 'http://api.weatherstack.com/current?access_key=2c2924b29f5d3025759b82df5c01ed9c&query=37.8267,-122.4233'


request({url:url},(error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})