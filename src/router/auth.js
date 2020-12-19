const express = require("express");
const User = require("../models/User");
const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

var passport = require("passport");
const router = new express.Router();

router.post("/api/register", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    console.log(req.user);
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post("/api/login", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user != null) {
        console.log(req.body.password);
        console.log(user.password);
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
          if (isMatch) {
            const payload = { id: user.id, name: user.name, email: user.email }; // Create JWT Payload
            // Sign Token
            jwt.sign(
              payload,
              keys.passport_key,
              { expiresIn: 3600 },
              (err, token) => {
                return res.json({
                  success: true,
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            return res.status(400).json({ err: "ERROR" });
          }
        });
      } else {
        return res.json({ err: "No user found" });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
