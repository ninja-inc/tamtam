var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    Handlebars  = require('handlebars'),
    React          = require('react'),
    ReactDOMServer = require('react-dom/server'),
    path        = require('path'),

    createLocation = require('history/lib/createLocation'),
    createHistory = require('history'),
    {RoutingContext, match} = require('react-router')
;

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var routes = require('./routes')();
var template = Handlebars.compile(fs.readFileSync('./index.hbs').toString());

app.use(function(req, res) {
  var location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    
    if (redirectLocation) {
      console.log("redirect");
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    }
    else if (error){
      console.log("error");
      res.send(500, error.message)
    }
    else if (renderProps == null){
      console.log("404");
      res.send(404, 'Not found')
    }
    else {
      res.send(template({
        markup: ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>)
      }));
    }
  })
})
module.exports = app;
