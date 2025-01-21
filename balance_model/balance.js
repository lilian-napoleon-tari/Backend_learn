const mongoose = require("mongoose");

// Balance Schema
const balanceSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
    default: 0,
  },

  currency: {
    type: String,
    required: true,
    default: "crypto",
  },

  status: {
    type: String,
    required: true,
    status: "recieved",
  },

  status: {
    type: String,
    required: true,
    status: "sent",
  },

  status: {
    type: String,
    required: true,
    status: "failed",
  },

  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

// Create model
const Balance = mongoose.model("Balance", balanceSchema);
module.exports = Balance;
