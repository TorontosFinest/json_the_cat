const request = require("request");
const website = "https://api.thecatapi.com/v1/breeds/search?q=";
const args = process.argv.slice(2);
const getBreed = (breed) => {
  breed = args;
  request(`${website}${breed.slice(0, 3)}`, (error, response, body) => {
    let info = JSON.parse(body);
    if (error) {
      console.log("Error !" + error);
    } else if (!info.length) {
      console.log("Cat wasnt found.");
    } else {
      console.log(info[0]["description"]);
    }
  });
};

getBreed();
