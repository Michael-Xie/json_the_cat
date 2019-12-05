const request = require('request');

const searchBreed = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  request(searchBreed+breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let breedInfo = JSON.parse(body);
      if (breedInfo.length > 0) {
        callback(null, breedInfo[0].description)
      } else {
        callback(`${breedName} not found`, null)
      } 
    }

  })
};

module.exports = { fetchBreedDescription };


