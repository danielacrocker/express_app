const mongoose = require('mongoose');

const Schema = mongoose.Schemal;

const UserSchema = new Schema({
    name: String,
    email: String
})

const User = mongoose.model("User", UserSchema)

module.exports = User