var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
   <Router history={hashHistory}>
       <Route path="/" component={Main}>
           <Route path="about" component={About}/>
           <Route path="examples" component={Examples}/>
           <IndexRoute component={Weather}/>
       </Route>

   </Router>,
    document.getElementById('app')
);