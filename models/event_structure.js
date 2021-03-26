const mongoose = require('mongoose')


let schema=mongoose.Schema({
    ids:[]
})
module.exports = mongoose.model('event',schema)