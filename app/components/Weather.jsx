/**
 * Created by OgnjenVulic on 1/16/2017.
 */
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getDefaultProps: function () {
        return{
            cityName:'Pozarevac',
            temp: 15
        }
    },
    getInitialState: function () {
        return{
            isLoading:false
        }
    },
    handleSearch: function (updates) {
        var that = this;

        this.setState({isLoading: true});


        openWeatherMap.getTemp(updates.cityName).then(function(temp){
             updates.temp = temp;
             that.setState(updates);
             that.setState({isLoading: false});
        }, function (errorMessage) {
            debugger;
            alert(errorMessage);
            that.setState({isLoading: false});
        })

    },
    render: function () {
        var {isLoading, temp, cityName} = this.state;

        function renderMessage() {
            if(isLoading){
                return <h3 className="text-center">Fetching message...</h3>
            } else if (temp && location){
                return <WeatherMessage cityName={cityName} temp={temp}/>;
            }
        }

        return (
            <div>

                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onNewData={this.handleSearch}/>

                {renderMessage()}

            </div>
        );
    }
});

module.exports = Weather;