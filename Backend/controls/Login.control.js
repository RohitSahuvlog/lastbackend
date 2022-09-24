const jwt = require("jsonwebtoken");
const becryptjs = require("bcryptjs");
const { Router } = require("express");
const userModel = require("../models/User.model");
require("dotenv").config();

const loginControl = Router();

loginControl.post("/login", async (req, res) => {
  console.log(req.body)
  try {
    const { email, password: frontend_password } = req.body;
    const User = await userModel.find({ email});
   
    const { password: hash } = User[User.length-1];

    becryptjs.compare(frontend_password, hash, async function (err, result) {
      if (err) {
        return res
          .status(500)
          .send({ status: "error", message: "invalid credentials hello" });
      }
      try {
        if (result) {
          const token = await jwt.sign({ email }, process.env.SECRETKEY);
console.log(token)
          return res.status(201).send({
            status: "success",
            email,
            message: "login sucessful",
            token,
          });
        }
      } catch (e) {
        return res
          .status(500)
          .send({ status: "error", message: "invalid credentials" });
      }
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: "error", message: "invalid credentials" });
  }
});

module.exports = loginControl;
