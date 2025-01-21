// bring in Packages installed
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// initalize express app
const app = express();

// configure middlewares/cors
app.use(cors());

// ensure that express can read json files
app.use(express.json());

// Mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("Mongodb error:", error);
  });

//start node js server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
