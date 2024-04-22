const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireSignin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const {EMAIL,GPASS} = require('../config/keys')

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "govschmehub@gmail.com",
    pass: GPASS,
  },
});

// Helper function to generate random OTP
function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

router.post("/signup", async (req, res) => {
  const { name, email, password, isVerified } = req.body;

  // Perform validation (similar to the frontend validation)
  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ error: "Please fill in all the required fields." });
  }

  try {
    const savedUser = await User.findOne({ email: email });

    if (savedUser && isVerified) {
      return res.status(422).json({ error: "User already exists." });
    }

    const hashedpassword = await bcrypt.hash(password, 12);

    // Generate new OTP and set the OTP expiry time
    const otp = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP will be valid for 10 minutes

    if (savedUser) {
      // User already exists but is not verified, update OTP and OTP expiry
      savedUser.name = name;
      savedUser.password = hashedpassword;
      savedUser.otp = otp;
      savedUser.otpExpiry = otpExpiry;

      await savedUser.save();

      await transporter.sendMail({
        from: "govschmehub@gmail.com", // Your email address
        to: savedUser.email, // Your email address
        subject: "🎁 OTP Verification for MyScheme",
        html: `
          <html>
            <body>
              <h1 style="color: purple; text-align: center;">OTP Verification Code</h3>
              <h2>${otp}</h2>
            </body>
          </html>
        `,
      });

      return res.json({
        message:
          "OTP sent successfully. Please check your email to verify your account.",
      });
    } else {
      // New user, save the user with OTP and OTP expiry
      const user = new User({
        email,
        password: hashedpassword,
        name,
        otp,
        otpExpiry,
      });

      await user.save();

      await transporter.sendMail({
        from: "govschmehub@gmail.com", // Your email address
        to: user.email, // Your email address
        subject: "🎁 OTP Verification for MyScheme",
        html: `
          <html>
            <body>
              <h1 style="color: purple; text-align: center;">OTP Verification Code</h3>
              <h2>${otp}</h2>
            </body>
          </html>
        `,
      });

      return res.json({
        message:
          "OTP sent successfully. Please check your email to verify your account.",
      });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({
      error:
        "An error occurred during user registration. Please try again later.",
    });
  }
});


// Add a new route to verify OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(422).json({ error: "Please provide both email and OTP" });
  }

  try {
    // Find the user based on the email provided
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ error: "User not found" });
    }

    // Check if the OTP has expired
    if (user.otpExpiry < Date.now()) {
      return res
        .status(422)
        .json({ error: "OTP has expired. Please request a new OTP" });
    }

    // Check if the provided OTP matches the user's stored OTP
    if (user.otp === otp) {
      // OTP is valid, update the isVerified field to true
      user.isVerified = true;
      await user.save();

      // Generate and send a JWT token for successful verification
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      const { _id, name, email } = user;

      // Send a confirmation email for successful registration
      await transporter.sendMail({
        from: "govschmehub@gmail.com",
        to: user.email,
        subject: "Registration Successfully",
        html: `
          <html>
            <head>
              
            </head>
            <body>
              <h1 class="image-text heading" style="color: darkblue;">Hey, ${user.name} 🙏</h1>
              <h1 style="color: purple; text-align: center;">MyScheme 🚀 में आपका स्वागत है !!</h1>
              <h1 style="color: black; text-align: center;">Successfully Registered</h1>
            </body>
          </html>
        `,
      });

      return res.json({
        token,
        user: { _id, name, email },
        message: "OTP verification successful!",
      });
    } else {
      return res.status(422).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    return res.status(500).json({
      error: "An error occurred during OTP verification. Please try again later.",
    });
  }
});


router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide both email and password" });
  }

  try {
    // Find the user based on the email provided
    const savedUser = await User.findOne({ email: email });

    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }

    if (!savedUser.isVerified) {
      return res
        .status(401)
        .json({ error: "Please verify your email before signing in" });
    }

    // Compare the provided password with the stored hashed password
    const doMatch = await bcrypt.compare(password, savedUser.password);

    if (doMatch) {
      // Password is correct, generate a JWT token for successful signin
      const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
      const { _id, name, email } = savedUser;

      return res.json({
        token,
        user: { _id, name, email },
        message: "Successful SignIn!",
      });
    } else {
      return res.status(422).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({
      error: "An error occurred during signin. Please try again later.",
    });
  }
});


router.post("/reset-password", async (req, res) => {
  try {
    const buffer = await crypto.randomBytes(32);
    const token = buffer.toString("hex");
    
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(422)
        .json({ error: "User does not exist with that email" });
    }

    user.resetToken = token;
    user.expireToken = Date.now() + 3600000; // Token will expire after 1 hour

    await user.save();

    await transporter.sendMail({
      from: "govschmehub@gmail.com",
      to: user.email,
      subject: "Reset Password (no reply)",
      html: `
        <html>
          <body>
            <h1 style="text-align: center;">Reset Your Password</h1>
            <h2 style="text-align: center;">Click on this 👉 <a href="${EMAIL}/resetpassword/${token}">link</a> to reset password</h2>
          </body>
        </html>
      `,
    });

    res.json({ message: "Check your email for password reset instructions." });
  } catch (error) {
    console.error("Error during password reset:", error);
    res.status(500).json({
      error: "An error occurred during password reset. Please try again later.",
    });
  }
});

router.post("/new-password", async (req, res) => {
  try {
    const newPassword = req.body.password;
    const sentToken = req.body.token;

    const user = await User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } });

    if (!user) {
      return res
        .status(422)
        .json({ error: "User not found or session expired." });
    }

    const hashedpassword = await bcrypt.hash(newPassword, 12);

    user.password = hashedpassword;
    user.resetToken = undefined;
    user.expireToken = undefined;

    await user.save();

    res.json({ message: "Password updated successfully!" });
  } catch (error) {
    console.error("Error during password update:", error);
    res.status(500).json({
      error: "An error occurred during password update. Please try again later.",
    });
  }
});


module.exports = router;
