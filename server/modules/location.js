var random = require('./random');

var locations = ['West Des Moines, Iowa', 'Acapulco, Mexico', 'Fargo, North Dakota', 'Ortonville, Minnesota', 'Minneapolis, Minnesota', 'Norman, Oklahoma', 'Melbourne, Florida'];

function generateLocations(){
    return locations[random(0, locations.length - 1)];
}

module.exports = generateLocations;