const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

//User Schema
const userSchema = new mongoose.schema({
  firstname: {
    type: String,
    required: true,
    unique: true,
  },

  lastname: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
    match: [/^\d{10,15}$/, "phone number must be 10 to 15 digits"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/,
      "email must contain  an @, a domain and .com",
    ],
  },
});

// Encrypt the password
userSchema.pre("save", async function (next) {
  // only encrypt if pass word is modified
  if (!this.isModified("password")) return next();

  //encrypt the password
  this.password = await bcrypt.hash(this.password, 15);
  next();
});

// create model
const User = mongoose.model("User", userSchema);
module.exports = User;
