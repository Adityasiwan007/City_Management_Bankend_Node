const mongoose = require('mongoose')


let schema=mongoose.Schema({
    date:Date,
    data:{}
})
module.exports = mongoose.model('history_structure',schema)