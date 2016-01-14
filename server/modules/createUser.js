var age = require('./age');
var location = require('./location');
var name = require('./name');
var sex = require('./sex');
var twitter = require('./twitter');
var User = require('../models/user');

function createUser(){
    var user = new User({
        name: name(),
        age: age(),
        sex: sex(),
        twitter: twitter(),
        location: location()
    });
    return user;
}

module.exports = createUser;