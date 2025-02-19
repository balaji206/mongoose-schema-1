const mongoose = require('mongoose');
const profileschema = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    age:{type:Number}
})

module.exports = mongoose.model("user",profileschema)

const activitytracking = new mongoose.Schema({
    lastlogin : {type:Date}
})
