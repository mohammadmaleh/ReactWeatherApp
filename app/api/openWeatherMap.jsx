let axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=cadb7540ea107cb0f6159a51813f59be&units=metric'
 module.exports = {
   getTemp: function(location){
     let encodedLocation =  encodeURIComponent(location);
     let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
     console.log(requestUrl)
    return axios.get(requestUrl).then(function(response){
       if (response.data.cod && response.data.message){
         throw new Error(response.data.message)
       }
       else {
         console.log(response)

         return response.data.main.temp;
       }
     },function(response){
       console.log(response)

       throw new Error(response)
     })
   }
 }
