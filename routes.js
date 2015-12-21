var React = require('react'),
    ReactDOM = require('react-dom'),
    {Router, Route} = require('react-router')
;

import App from './component/app'

module.exports = function() {
  return (
      <Route path="/" component={App}>
      </Route>
  );
};
