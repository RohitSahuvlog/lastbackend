const express = require("express");
const userModel = require("../models/User.model");

const userRoutes = express.Router();

userRoutes.get("/home", async (req, res) => {
  res.send("done");
});

userRoutes.get("/userdata", async (req, res) => {
  // use authentication method to get the user email id:-
  // const {email} = req.body;

  const user_data = await userModel.findOne({ email: "raju@gmail.com" });
  res.status(201).send(user_data);
});

// update user data :

userRoutes.patch("/edituserdata", async (req, res) => {
  const user = await userModel.findOneAndUpdate(
    { email: "raju@gmail.com" },
    req.body,
    { new: true }
  );

  return res.status(201).send(user);
});

module.exports = userRoutes;
