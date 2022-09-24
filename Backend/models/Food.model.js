const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: String,
  energy: Number,
  protein: Number,
  fat: Number,
  saturated_fat: Number,
  carbohydrate: Number,
  sodium: Number,
});

const FoodModel = mongoose.model("food", foodSchema);

module.exports = FoodModel;
