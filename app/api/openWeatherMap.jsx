var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

module.exports ={
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message){
        //throw new Error(err.res.data.message);
        throw new Error ('Unable to fetch city');
      } else {
        return res.data.main.temp;
      }
    },function(err){
      throw new Error('City not found' , err.es.data.message);
    });
  }
}
