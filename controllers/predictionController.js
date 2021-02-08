const { JsonWebTokenError } = require('jsonwebtoken');
const fetch = require('node-fetch');

let url = "http://54.146.140.144/get-temp-predictions";
let url2="http://54.146.140.144/get-rainfall-predictions";
let settings = { method: "Get" };
let JSON,JSON2
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });

    
fetch(url2, settings)
.then(res => res.json())
.then((json) => {
    JSON2=json
});


exports.getPrediction = async (req, res) => {
    return res.json({tempPrediction:JSON,
    rainfallPrediction:JSON2});
  };
