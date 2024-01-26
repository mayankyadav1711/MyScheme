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
    user: "mykyadav17112003@gmail.com",
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

router.post("/signup", (req, res) => {
  const {
    name,
    email,
    password,
    isVerified,
  } = req.body;

  // Perform validation (similar to the frontend validation)
  if (!name || !email || !password ) {
    return res
      .status(422)
      .json({ error: "Please fill in all the required fields." });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser && isVerified) {
        return res.status(422).json({ error: "User already exists." });
      }

      bcrypt
        .hash(password, 12)
        .then((hashedpassword) => {
          // Generate new OTP and set the OTP expiry time
          const otp = generateOTP();
          const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP will be valid for 10 minutes

          if (savedUser) {
            // User already exists but is not verified, update OTP and OTP expiry
            savedUser.name = name;
            savedUser.password = hashedpassword;
      
        
            savedUser.otp = otp;
            savedUser.otpExpiry = otpExpiry;

            savedUser
              .save()
              .then(() => {
                transporter.sendMail({
                  from: "mykyadav17112003@gmail.com", // Your email address
                  to: savedUser.email, // Your email address
                  subject: "🎁 OTP Verification for MyScheme",
                  html: `
                  <html>
                 
                  <body>
                   
                    <h1 style="color: purple; text-align: center;" >OTP Verification Code </h3>
                   
                    
                    <h2 >${otp}</h2>
            
                   
                    
                  </body>
                </html>
              `,
                });
            
                res.json({
                  message:
                    "OTP sent successfully. Please check your email to verify your account.",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error:
                    "An error occurred during user registration. Please try again later.",
                });
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

            user
              .save()
              .then((user) => {
                transporter.sendMail({
                  from: "mykyadav17112003@gmail.com", // Your email address
                  to: user.email, // Your email address
                  subject: "🎁 OTP Verification for MyScheme",
                  html: `
                  <html>
                 
                  <body>
                   
                    <h1 style="color: purple; text-align: center;" >OTP Verification Code </h3>
                   
                    
                    <h2 class="image-text">${otp}</h2>
            
                   
                    
                  </body>
                </html>
              `,
                });

                res.json({
                  message:
                    "OTP sent successfully. Please check your email to verify your account.",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error:
                    "An error occurred during user registration. Please try again later.",
                });
              });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error:
              "An error occurred during password hashing. Please try again later.",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "An error occurred during user lookup. Please try again later.",
      });
    });
});

// Add a new route to verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(422).json({ error: "Please provide both email and OTP" });
  }

  // Find the user based on the email provided
  User.findOne({ email: email }).then((user) => {
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
      user.save().then(() => {
        // Generate and send a JWT token for successful verification
        const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        const { _id, name, email } = user;

        // Send a confirmation email for successful registration
        transporter.sendMail({
          from: "mykyadav17112003@gmail.com", // Your email address
          to: user.email, // Array of email addresses // Your email address
          subject: "Registration Successfully",
         
            html: `
            <html>
            <head>
              
            </head>
            <body>
              <h1 class="image-text heading" style="color: darkblue;" >Hey, ${user.name} 🙏</h1>
              <h1 style="color: purple; text-align: center;" >MyScheme 🚀 में आपका स्वागत है !!</h1>
              <h1 style="color: black; text-align: center;" >Successfully Registered</h1>
            </body>
          </html>
        `,
       
        });

        res.json({
          token,
          user: { _id, name, email },
          message: "OTP verification successful!",
        });
      });
    } else {
      return res.status(422).json({ error: "Invalid OTP" });
    }
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide both email and password" });
  }

  // Find the user based on the email provided
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid email or password" });
      }
      if (!savedUser.isVerified) {
        return res
          .status(401)
          .json({ error: "Please verify your email before signing in" });
      }

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, savedUser.password).then((doMatch) => {
        if (doMatch) {
          // Password is correct, generate a JWT token for successful signin
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email } = savedUser;

          res.json({
            token,
            user: { _id, name, email },
            message: "Successful SignIn!",
          });
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exists with that email" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          from: "mykyadav17112003@gmail.com",
          to: user.email,
          subject: "Reset Password (no reply) ",
          html: `<html>
          
          <body>
          <h1 style=" text-align: center;">Reset Your Password</h1>
                        <h2 style=" text-align: center;">Click on this 👉 <a href="${EMAIL}/resetpassword/${token}">link</a> to reset password</h2>
                        </body>
        </html>`,
      });
        res.json({ message: "Check your email!!" });
      });
    });
  });
});

router.post("/new-password", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        // If user not found, handle the case appropriately
        return res
          .status(422)
          .json({ error: "User not found or session expired." });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((savedUser) => {
          res.json({ message: "Password updated successfully!!" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
