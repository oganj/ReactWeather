var React = require('react');

var WeatherMessage = ({temp, cityName}) => {
        return (
            <div>
                <h3>It's {temp} °C in {cityName}</h3>
            </div>
        )
    };

module.exports = WeatherMessage;