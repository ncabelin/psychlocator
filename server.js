var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database');
var port = process.env.PORT || 8080;
var ip = process.env.IP;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// connect to mLab
mongoose.connect(database.url);

app.use(methodOverride('_method'));
// static files access
app.use(express.static(__dirname + '/public'));
// add ability to parse form
app.use(bodyParser.urlencoded({'extended': 'true'}));
// add ability to parse json
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// load the routes
require('./app/routes')(app);

app.listen(port, ip, function() {
  console.log('started server at ' + port);
});
