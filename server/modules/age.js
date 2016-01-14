var random = require('./random');

function age(){
    return random(0, 114);
}

console.log(age());

module.exports = age;