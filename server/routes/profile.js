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
const { EMAIL, GPASS } = require("../config/keys");

const app = express();

app.use(express.json());


module.exports = router;