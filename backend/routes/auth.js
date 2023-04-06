const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "atah:YeSiddhHotaHaiKi_YeUpabhokta.PramadikHai";

// Create a User using: POST "/api/auth/createUser". No login required

router.post(
  "/createUser",
  [
    body("name", "Name should be at least 3 characters long!").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email!").isEmail(),
    body("password", "Password must be at least 8 characters long!").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const securedPassword = await bcrypt.hash(req.body.password, salt);
      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securedPassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong!!");
    }
  }
);

module.exports = router;
