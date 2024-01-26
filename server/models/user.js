const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
  },

 
  isVerified: {
    type: Boolean,
    default: false, // Flag to determine if the OTP verification is completed
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  resetToken: String,
  expireToken: Date,
});

mongoose.model("User", userSchema);
