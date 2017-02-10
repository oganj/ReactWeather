/**
 * Created by OgnjenVulic on 1/16/2017.
 */

import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var {Link, IndexLink} = require('react-router');
import {Tabs, Tab} from 'material-ui/Tabs';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
var FontAwesome = require('react-fontawesome');

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        var cityName = this.refs.search.value;
        var encodedCityName = encodeURIComponent(cityName);

        if(cityName.length > 0){
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedCityName;
        }
    },
    getInitialState: function () {
        return{
            drawerOpen:false
        }
    },
    handleToggle: function (e) {
        e.preventDefault();
        this.setState({drawerOpen: !this.state.drawerOpen});
    },

    render:function(){
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div >
            <AppBar title="Coning" onTouchTap={this.handleToggle} >
                
               
            </AppBar>
               
                 
                <Drawer docked={false} 
                    open={this.state.drawerOpen}
                    onRequestChange={(drawerOpen) => {
                        this.setState({drawerOpen})
                    }}>
                    <AppBar title="Coning" onTouchTap={this.handleToggle} />
                    <MenuItem><Link to="/examples">Projekat</Link></MenuItem>
                    <MenuItem><Link to="/about">Konstrukcija</Link></MenuItem>
                </Drawer>

            </div>
            </MuiThemeProvider>
            // <div className="top-bar">
            //     <div className="top-bar-left">
            //         <ul className="menu">
            //             <li className="menu-text">React Weather app </li>
            //             <li>
            //                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            //             </li>
            //             <li>
            //                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            //             </li>
            //             <li>
            //                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            //             </li>
            //         </ul>
            //     </div>
            //     <div className="top-bar-right">
            //         <form onSubmit={this.onSearch}>
            //             <ul className="menu">
            //                 <li>
            //                     <input type="search" ref="search" placeholder="Search weather by city name"/>
            //                 </li>
            //                 <li>
            //                     <input type="submit" className="button" value="Get Weather"/>
            //                 </li>
            //             </ul>
            //         </form>
            //     </div>
            // </div>
        );
    }
});

module.exports = Nav;
