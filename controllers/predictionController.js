const { JsonWebTokenError } = require('jsonwebtoken');
const fetch = require('node-fetch');

let url = "http://3.82.248.105/get-humidity-predictions";
let url2="http://3.82.248.105/get-wind-predictions";
let url3="http://3.82.248.105/get-cloudy-predictions";
let url4 = "http://3.82.248.105/get-temp-predictions";
let settings = { method: "Get" };
let JSON,JSON2,JSON3,JSON4

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

fetch(url3, settings)
.then(res => res.json())
.then((json) => {
    JSON3=json
});

fetch(url4, settings)
.then(res => res.json())
.then((json) => {
    JSON4=json
});

exports.getPrediction = async (req, res) => {
    return res.json({humidityPrediction:JSON,
    windPrediction:JSON2,
    cloudyPrediction:JSON3,
    tempPrediction:JSON4});
  };
