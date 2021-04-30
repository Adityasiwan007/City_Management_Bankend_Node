const fetch = require('node-fetch');

let url = "https://api.waqi.info//map/bounds/?latlng=53.438027,-6.465774,53.271271,-6.093580&token=6bcfce6dc7b7e60a29aefc22f649a96ee0f6ce0d";
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

  