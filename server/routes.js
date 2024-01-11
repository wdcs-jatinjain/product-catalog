// routes.js (not .tsx)
const express = require("express");
const connectDB = require("./mongoConnection");
const app = express();

connectDB(); 
app.get("/", (req, res) => {
  res.json({
    message: "Hello World from Server Side. Please find the Product List Below:-",
    name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
  });
});

module.exports = app;
