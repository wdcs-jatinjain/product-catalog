import RegisterCustomer from "./RegisterCustomer";
import express from 'express';



const CustomerController = express.Router()

CustomerController.post ('/register',RegisterCustomer )

export default CustomerController;