/**
 * Created by ericanderson on 1/15/16.
 */
var User = require('../models/user');

function deleteUser(id){

    User.findById(id).remove().exec(function(err){
        if(err){
            console.log('Error removing user ' + err);
        }
    });

}

module.exports = deleteUser;