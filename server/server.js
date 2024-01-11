const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv");

require("dotenv").config();


mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({
    message:
      "Hello World from Server Side. Please find the Product List Below:-",
    name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



