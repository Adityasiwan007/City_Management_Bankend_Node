const fetch = require('node-fetch');

let url = "https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=4e4430ec0cbff179ef35047b4a05fd178d18b37f";
let settings = { method: "Get" };
let JSON
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });


exports.getData = async (req, res) => {
    return res.json(JSON);
  };

  