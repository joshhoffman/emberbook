
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var expressJson = require('express-json');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

var app = express();

    //var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
    //app.engine('handlebars', handlebars.engine);
    //app.set('view engine', 'handlebars');
    
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'app'));
    app.use(favicon());
    app.use(morgan('dev'));
    app.use(expressJson());
    //app.use(express.urlencoded());
    app.use(methodOverride());
    app.use(cookieParser('your secret here'));
    app.use(session());
    //app.use(app.router);
    //app.use(require('less-middleware')(path.join(__dirname, '../../public')));
    app.use(express.static(path.join(__dirname, 'app')));
    
    // development only
    if ('development' == app.get('env')) {
      app.use(errorHandler());
    }

app.get('/', function(req, res) {
    console.log("!!!!!!");
    console.log(__dirname + '/app/index.html');
    fs.readFile(__dirname + '/app/index.html', 'utf8', function(err, text) {
        var file = text;
        res.send(file);
    });
});

app.get("/test", function(req, res) {
    res.send("test");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});