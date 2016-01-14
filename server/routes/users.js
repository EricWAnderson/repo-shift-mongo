/**
 * Created by ericanderson on 1/14/16.
 */
var express = require('express');
var path = require('path');
var User = require('../models/user');
var createUser = require('../modules/createUser');

var router = express.Router();

router.get('/', function(request, response){
    var userArray = [];

    for(var i = 0; i < 20; i++){
        var tempUser = createUser();

        tempUser.save(function(err){
            if(err) {
                throw err;
            }
        });

        userArray.push(tempUser);
    };

    response.send(userArray);

});

module.exports = router;