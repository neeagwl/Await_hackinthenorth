const express = require("express");
const router = new express.Router();
var passport = require("passport");

const User = require("../models/User");

router.get(
  "/api/p/index",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.find({ pin: req.body.pin })
      .then((list) => {
        list = list.filter((item) => item.isDoctor == true);
        if (list) {
          return res.json(list);
        } else {
          return res.json({ err: "Error in fetching Doctors list" });
        }
      })
      .catch((err) => res.json({ err: "Error in fetching Doctors list" }));
  }
);

module.exports = router;
