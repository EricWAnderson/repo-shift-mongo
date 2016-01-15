var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var mongoURI = "mongodb://localhost:27017/repo-shift-mongo-wednesday";
var mongoDB = mongoose.connect(mongoURI).connection;

app.use(express.static('server/public'));
app.use('/', index);
app.use('/user', users);

mongoDB.on('error', function(err){
   console.log(err);
});

mongoDB.once('open', function(){
   console.log('Connected to MongoDB');
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});