const fetch = require('node-fetch');

let url = "http://3.82.248.105/get-traffic-data";
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

  