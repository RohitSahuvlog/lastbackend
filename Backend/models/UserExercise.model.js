const mongoose = require("mongoose");

const userExerciseSchema = mongoose.Schema({
  date: String,
  name: String,
  calories_per_hour: Number,
  duration_minutes: Number,
  total_calories: Number,
  email: String,
});

const UserExerciseModel = mongoose.model("userExercise", userExerciseSchema);

module.exports = UserExerciseModel;
