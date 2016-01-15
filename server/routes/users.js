/**
 * Created by ericanderson on 1/14/16.
 */
var express = require('express');
var path = require('path');
var User = require('../models/user');
var createUser = require('../modules/createUser');
var deleteUser = require('../modules/deleteUser');

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

router.delete('/delete/:id', function(request, response){
    //delete users
    deleteUser(request.params.id);

    //find remaining users, send back to client
    User.find({}).exec(function(err, users){
        if(err){
            console.log('error getting all users', err);
        }
        response.send(users);
    })
});

module.exports = router;