const express = require("express");
const { model } = require("mongoose");
const FoodModel = require("../models/Food.model");
const UserFoodsModel = require("../models/UserFood.model");

const userFoodRoutes = express.Router();
// to search the food:-
userFoodRoutes.get("/getFood/:name", async (req, res) => {
  var regx = RegExp(req.params.name, "i");
  const searchFood = await FoodModel.find({ name: regx });
  res.status(200).send(searchFood);
});

// to post user food or add to the user food section :-

userFoodRoutes.post("/userfood", async (req, res) => {
  const {
    date,
    name,
    energy,
    protein,
    fat,
    saturated_fat,
    carbohydrate,
    sodium,
    count,
    // email,
  } = req.body;

  const email = "raju@gmail.com";

  var today = new Date();
  var todays_date =
    today.getDate() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    today.getFullYear();

  const user_food = new UserFoodsModel({
    date: todays_date,
    name,
    energy,
    protein,
    fat,
    saturated_fat,
    carbohydrate,
    sodium,
    count,
    email: email,
  });
  await user_food.save();
  res.status(201).send(user_food);
});

// to get user Food:-
userFoodRoutes.get("/getuserfood", async (req, res) => {
  const foods = await UserFoodsModel.find({ email: "raju@gmail.com" });
  res.send(foods);
});

userFoodRoutes.delete("/deleteuserfood/:id", async (req, res) => {
  const { id } = req.params;

  await UserFoodsModel.findOneAndDelete({ _id: id });
  return res.status(201).send("deleted");
});

module.exports = userFoodRoutes;
