const express = require("express");
const ExerciseModel = require("../models/Exercise.model");
const UserExerciseModel = require("../models/UserExercise.model");

const exerciseRoutes = express.Router();

exerciseRoutes.get("/getExercise/:name", async (req, res) => {
  var regx = RegExp(req.params.name, "i");
  const searchExercise = await ExerciseModel.find({ name: regx });
  res.send(searchExercise);
});

// to add exercise to user data:-

exerciseRoutes.post("/userExercise", async (req, res) => {
  const {
    date,
    name,
    calories_per_hour,
    duration_minutes,
    total_calories,
    email,
  } = req.body;

  var today = new Date();
  var todays_date =
    today.getDate() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    today.getFullYear();

  const uesr_exercise = new UserExerciseModel({
    date: todays_date,
    name,
    calories_per_hour,
    duration_minutes,
    total_calories,
    email: "raju@gmail.com",
  });
  await uesr_exercise.save();
  res.send(uesr_exercise);
});

exerciseRoutes.get("/getexercise", async (req, res) => {
  // get the email from the token :-

  const uesr_exercise = await UserExerciseModel.find({
    email: "raju@gmail.com",
  });
  return res.status(201).send(uesr_exercise);
});

// delete:-

exerciseRoutes.delete("/deleteuserexercise/:id", async (req, res) => {
  const { id } = req.params;

  await UserExerciseModel.findOneAndDelete({ _id: id });
  return res.status(201).send("deleted");
});

module.exports = exerciseRoutes;
