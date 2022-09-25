const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const userModel = require("../models/User.model");
const validator = require("../middlewares/validator");

const SignUpControl = Router();

SignUpControl.post("/signup", validator, async (req, res) => {
  try {
    const FrontendUserData = req.body;
    // console.log(FrontendUserData)
    const { password } = FrontendUserData;

    bcryptjs.genSalt(10, (err, salt) => {
      if (err) {
        return res
          .status(500)
          .json({ status: "error", message: "Invalid Credendtials" });
      }
      bcryptjs.hash(password, salt, async function (err, hash) {
        if (err) {
          return res
            .status(500)
            .json({ status: "error", message: "invalid credentials" });
        } else {
          try {
            await new userModel({
              ...FrontendUserData,
              password: hash,
            }).save();
            return res
              .status(201)
              .json({ status: "success", message: "signup sucessfull" });
          } catch (err) {
            return res
              .status(500)
              .json({ status: "error", message: "bad request" });
          }
        }
      });
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = SignUpControl;
