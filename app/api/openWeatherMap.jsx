var axios = require('axios');

const OPEN_WATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9ff036e2ba5c21eebdc36bd7c560545f&units=metric';

//http://api.openweathermap.org/data/2.5/weather?q=Novi%20Sad,sr&appid=9ff036e2ba5c21eebdc36bd7c560545f&units=metric

module.exports = {
    getTemp:function (cityName) {
        var encodedLocation = encodeURIComponent(cityName);
        var requestUrl = `${OPEN_WATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.response.data.message);
        });
    }
}
