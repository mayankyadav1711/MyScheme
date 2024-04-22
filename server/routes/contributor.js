const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Contributor = mongoose.model("Contributor");
const Doubt = mongoose.model("Doubt");
const Contact = mongoose.model("Contact");
const EventForm = mongoose.model("EventForm");
const SchemeModel = mongoose.model("Scheme"); // Import the Mongoose model

const Feedback = mongoose.model("Feedback");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireSignin");
const requireAdmin = require("../middleware/adminlogin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { EMAIL, GPASS } = require("../config/keys");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "govschmehub@gmail.com",
    pass: GPASS,
  },
});





router.post("/new-scheme", async (req, res) => {
  try {
    const {
      schemeFullName,
      schemeImageLink,
      schemeDetails,
      shortDetail,
      benefits,
      city,
      state,
      ministry,
      gender,
      caste,
      age,
      originalSchemeLink,
      documentsRequired,
    } = req.body;

    // Create a new Scheme instance with the form data
    const newScheme = new SchemeModel({
      schemeFullName,
      schemeImageLink,
      schemeDetails,
      shortDetail,
      benefits,
      city,
      state,
      ministry,
      gender,
      caste,
      age,
      originalSchemeLink,
      documentsRequired,
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



router.get("/get-schemes", async (req, res) => {
  try {
    // Fetch all schemes from the database and sort by timestamp in descending order
    const schemes = await SchemeModel.find().sort({ timestamp: -1 });

    console.log("Fetched Schemes:", schemes);
    res.json(schemes);
  } catch (error) {
    console.error("Error in fetching schemes:", error);
    res.status(500).json({ error: "Server error" });
  }
});

  

router.get("/scheme/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    // Fetch the scheme with the given ID from the database
    const scheme = await SchemeModel.findById(_id);

    if (!scheme) {
      return res.status(404).json({ error: 'Scheme not found' });
    }

    console.log("Fetched Scheme:", scheme);
    res.json(scheme);
  } catch (error) {
    console.error("Error in fetching scheme details:", error);
    res.status(500).json({ error: "Server error" });
  }
});




router.post("/doubt", requireLogin, async (req, res) => {
  try {
    const {
      code,
      semester,
      subjectName,
      unitName,
      author,
      doubt,
      // Add other required fields here
    } = req.body;
    if (!doubt) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Assuming you have user authentication and can get the logged-in user's ID

    // Create a new contribution
    const doubts = new Doubt({
      code,
      semester,
      subjectName,
      unitName,
      author,
      doubt,
      postedBy: req.user,
    });

    // Save the contribution
    await doubts.save();

    transporter.sendMail({
      from: "", // Your email address
      to: "mykyadav2003@gmail.com", // Your email address
      subject: "New Doubt Submitted",
      html: `
        <h1>New Doubt Submitted</h1>
        <p>Code: ${code}</p>
        <p>Semester: ${semester}</p>
        <p>Subject: ${subjectName}</p>
        <p>Unit: ${unitName}</p>
        <p>Author: ${author}</p>
        <p>Doubt: ${doubt}</p>
        <p>Posted By Name: ${req.user.name}</p>
        <p>Posted By Email: ${req.user.email}</p>
      `,
    });

    res.status(201).json({ message: "Doubt submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting contribution." });
  }
});
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Perform validation for required fields
    if (!email || !name || !message) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Create a new contact entry
    const contact = new Contact({
      name,
      email,
      message,
      // Add other required fields here if needed
    });

    // Save the contact entry to the database
    await contact.save();

    // Send an email notification about the new contact submission
    transporter.sendMail({
      from: "govschmehub@gmail.com", // Your email address
      to: "govschmehub@gmail.com", // Recipient email address
      subject: "Someone tried to reach you (Contact Us Form)",
      html: `
        <h1>New Contact Submitted</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    // Respond with success message
    res.status(201).json({ message: "Contact Us form submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting Contact Us Form." });
  }
});




module.exports = router;
