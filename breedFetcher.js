const request = require("request");
const fetchBreedDescription = (breedName, callback) => {
  const website = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(`${website}${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    let info = JSON.parse(body);
    if (!info[0]) {
      callback("Cat not found.");
    } else {
      callback(null, info[0]["description"]);
    }
  });
};

module.exports = { fetchBreedDescription };
