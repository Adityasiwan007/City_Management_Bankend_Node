const mongoose = require('mongoose')


let schema=mongoose.Schema({
    cloudcover: Number,
    "conditions": String,
    "datetime": Number,
    "datetimeStr": String,
    "dew": Number,
    "heatindex": String,
    "humidity": Number,
    "info": String,
    "maxt": Number,
    "mint": Number,
    "precip": Number,
    "precipcover": Number,
    "sealevelpressure": Number,
    "snow": Number,
    "snowdepth": Number,
    "solarenergy": Number,
    "solarradiation": Number,
    "temp": Number,
    "visibility": Number,
    "wdir": Number,
    "weathertype": String,
    "wgust": String,
    "windchill": Number,
    "wspd": Number
})
module.exports = mongoose.model('w_data',schema)