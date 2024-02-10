const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { EMAIL, GPASS } = require("../config/keys");
const requireLogin = require("../middleware/requireSignin");

const SchemeModel = mongoose.model("Scheme"); // Import the Mongoose model


router.post("/new-scheme", requireLogin, async (req, res) => {
    try {
      const {
        schemeFullName,
        schemeImageLink,
        schemeDetails,
        shortDetail,
        city,
        state,
        ministry,
        gender,
        caste,
        age,
        detailsVerified,
      } = req.body;
  
      // Create a new Scheme instance with the form data
      const newScheme = new SchemeModel({
        schemeFullName,
        schemeImageLink,
        schemeDetails,
        shortDetail,
        city,
        state,
        ministry,
        gender,
        caste,
        age,
        detailsVerified,
        timestamp: new Date(),
      });
  
      // Save the newScheme to the database
      await newScheme.save();
  
      // Respond with a success message
      res.status(201).json({ message: "Scheme submitted successfully!" });
    } catch (error) {
      // Handle errors
      console.error("Error submitting scheme:", error);
      res.status(500).json({ error: "Server error" });
    }
  });

