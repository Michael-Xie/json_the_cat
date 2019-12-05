const request = require('request');
const args = process.argv;
const [, , breed] = args;

const searchBreed = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

const printSearchResult = function(result) {
  for (let breed of result) {
    console.log(`${breed.description}`);
  }
};

request(searchBreed, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    let breedInfo = JSON.parse(body);
    breedInfo.length > 0 ? printSearchResult(breedInfo) : console.log(`${breed} not found. Try again.`);
  }
});


