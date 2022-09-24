const mongoose = require("mongoose");

const userFoodSchema = mongoose.Schema({
  date: String,
  name: String,
  energy: Number,
  protein: Number,
  fat: Number,
  saturated_fat: Number,
  carbohydrate: Number,
  sodium: Number,
  count: Number,
  email: String,
});

const UserFoodsModel = mongoose.model("userFood", userFoodSchema);

module.exports = UserFoodsModel;
