import LoginCustomer from "./LoginCustomer";
import RegisterCustomer from "./RegisterCustomer";
import express from "express";

const CustomerController = express.Router();

CustomerController.post("/register", RegisterCustomer);
CustomerController.post("/login", LoginCustomer);

export default CustomerController;
