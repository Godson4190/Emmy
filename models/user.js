var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    email: { type: String, unique: true, required: true },
    password: String,
    retypePassword: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);