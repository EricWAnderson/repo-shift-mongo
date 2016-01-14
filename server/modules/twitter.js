var random = require('./random');

var userTwitter = ['@hax0r1337', '@dev_master', '@pass_cracker', '@fun_sunshine', '@fluffy', '@kittyfoofoo', '@fred'];

function generateTwitterHandle(){
    return userTwitter[random(0, userTwitter.length - 1)];
}

module.exports = generateTwitterHandle;