import {checkCustomerRegister} from "./checkcustomerregister";
import express from 'express';


const CustomerController = express.Router()
console.log('thi')
CustomerController.post ('/register',checkCustomerRegister )

export default CustomerController;