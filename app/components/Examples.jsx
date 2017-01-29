/**
 * Created by OgnjenVulic on 1/16/2017.
 */
var React = require('react');
var {Link} = require('react-router');

var Examples = (props)=>{
        return (
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>Here are few examples:</p>
                <ol>
                    <li>
                        <Link to="/?location=Novi Sad">Novi Sad</Link>
                    </li>
                    <li>
                        <Link to="/?location=New York">New York</Link>
                    </li>
                </ol>
            </div>
        );
    };

module.exports = Examples;