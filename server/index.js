const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGOURI } = require('./config/keys')

const app = express();
const PORT = process.env.PORT || 5000;

// CORS policy 
app.use(cors({
  origin: [
    "https://myschemeproject.vercel.app",
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Database connection
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
  process.exit(1); // Exit the application on database connection error
});

// Models
require("./models/user");
require("./models/pdf");
require("./models/contributor");
require("./models/doubts");
require("./models/contact");
require("./models/event_form");
require("./models/feedback");
require("./models/scheme");

// Middleware
app.use(express.json());

// Routes
app.use(require("./routes/auth"));
app.use(require("./routes/contributor"));

// Home route
app.get("/", (req, res) => {
  res.json("Welcome to MyScheme");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
