const mongoose = require("../db");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    class: String,
    password: String
});

var user=mongoose.model('users',userSchema);

module.exports = mongoose.model("Users", user);