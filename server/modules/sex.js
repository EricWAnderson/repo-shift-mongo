var random = require('./random');

function determineSex(){
    var num = random(0, 2);

    if(num == 0){
        return 'Male';
    } else if (num == 1) {
        return 'Female';
    } else {
        return 'Other';
    }
}

module.exports = determineSex;