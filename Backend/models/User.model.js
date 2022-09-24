const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  age: { type: Number },
  date: { type: String },
  currweight: { type: Number },
  initweight: { type: Number },
  goalweight: { type: Number },
  height: { type: Number },
  gender: { type: String },
  calories: { type: Number, default: 0 },
  friends: { type: Array, default: [] },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
