'use strict';
var React = require('react'),
	ReactDOM = require('react-dom'),
    {Router, Route} = require('react-router'),
    routes = require('./routes'),
    createBrowserHistory = require('history/lib/createBrowserHistory')
;

import App from './component/app'

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
     	</Route>
    </Router>
, document.getElementById("app"));
