const express = require("express");

const connectDB = require("./mongoConnection");
const app = express();
app.use(express.json());
const User = require("./src/models/user/user.model.ts");
const createDefaultAdminUser = require('./defaultAdmin.js')

connectDB();

createDefaultAdminUser()
app.get("/", (req, res) => {
  console.log("connectDB");
  res.json({
    message:
      "Hello World from Server Side. Please find the Product List Below:-",
    name: ["Mobile", "TV", "AC", "Tab", "Laptop"],
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const data = { name: "fddd", email: "saewewr", password: "rftgrytft" };

  try {
    const newUser = await User.create(data);
    console.log("New user:", newUser);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = app;
