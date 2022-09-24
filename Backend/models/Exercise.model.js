const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  name: String,
  calories_per_hour: Number,
  duration_minutes: Number,
  total_calories: Number,
});

const ExerciseModel = mongoose.model("exercise", exerciseSchema);

module.exports = ExerciseModel;
