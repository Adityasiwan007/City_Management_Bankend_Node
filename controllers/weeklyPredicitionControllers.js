const { JsonWebTokenError } = require('jsonwebtoken');
const fetch = require('node-fetch');

let url ="http://3.82.248.105/get-temp-weekly";
let url2="http://3.82.248.105/get-rain-weekly";
let url3="http://3.82.248.105/get-humidity-weekly";
let url4="http://3.82.248.105/get-cloud-weekly";
let url5="http://3.82.248.105/get-wind-weekly";
let settings = { method: "Get" };
let JSON,JSON2,JSON3,JSON4,JSON5;
//let cloud=['Sunny','Partially Cloudy','Clody','Raining','Sunny'],icon=['w01d','w03d','w09d','w13d','w50d'],i
let cloud=[],icon=[]
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
    for(i=0;i<5;i++)
    {
        if(JSON4[i]<=30)
        {
            cloud.push('Sunny')
            icon.push('w01d')
        }
        else if(JSON[i]>30 && JSON[i]<=50)
        {
            cloud.push('Partially Cloudy')
            icon.push('w02d')
        }
        else if(JSON4[i]>50 && JSON4[i]<=80)
        {
            cloud.push('Clody')
            icon.push('w04d')
        }
        else
        {
            cloud.push('Raining')
            icon.push('w09d')
        }
    }
    console.log(cloud);
});

fetch(url5, settings)
.then(res => res.json())
.then((json) => {
    JSON5=json
});



exports.getWeekly = async (req, res) => {
    return res.json({tempWeekly:JSON,
    rainWeekly:JSON2,
    humidityWeekly:JSON3,
    cloudWeekly:JSON4,
    windWeekly:JSON5,
    cloudString:cloud,
    icon:icon});
  };
