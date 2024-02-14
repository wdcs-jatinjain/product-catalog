import LoginCustomer from "./LoginCustomer";
import RegisterCustomer from "./RegisterCustomer";
import express from "express";
//import DeleteCustomer from "./DeleteCustomer";

const CustomerController = express.Router();

CustomerController.post("/register", RegisterCustomer);
CustomerController.post("/login", LoginCustomer);
//CustomerController.delete("/delete", DeleteCustomer);

export default CustomerController;
