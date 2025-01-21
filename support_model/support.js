const mongoose = require("mongoose");

//Support Schema
const supportSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Support model
supportSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Support = mongoose.model("Support", supportSchema);
module.exports = Support;
