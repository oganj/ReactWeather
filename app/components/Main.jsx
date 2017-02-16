/**
 * Created by OgnjenVulic on 1/16/2017.
 */
var React = require('react');
var Nav = require('Nav');

var Main = (props)=>{
        return (
            <div>
                <Nav/>
                <div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        );
};

module.exports = Main;