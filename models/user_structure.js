const mongoose = require('mongoose')


let schema=mongoose.Schema({
    UserName:String,
    Password:String,
    UserID:String,
    Permission:String
})
module.exports = mongoose.model('user_structure',schema)