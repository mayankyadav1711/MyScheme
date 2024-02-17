const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  schemeFullName: {
    type: String,
    required: true,
  },
  schemeImageLink: {
    type: String,
    required: true,
  },
  schemeDetails: {
    type: String,
    required: true,
  },
  shortDetail: {
    type: String,
    required: true,
  },

  state: {
    type: String,
  },
  ministry: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
  },
  age: {
    type: Number,
    default: 0,
  },
  benefits: {
    type: String,  
  },
  originalSchemeLink: {
    type: String, 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SchemeModel = mongoose.model("Scheme", schemeSchema);

module.exports = SchemeModel;
