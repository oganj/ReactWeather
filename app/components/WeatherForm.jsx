var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};

        var name= this.refs.cityName.value;

        if(name.length > 0){
            this.refs.cityName.value = '';
            updates.cityName = name;
        }

        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="cityName" placeholder="Entere city name"/>
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        )
    }
});

module.exports = WeatherForm;
