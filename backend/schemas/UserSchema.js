const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: String,
  email: String,
  mobile: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);