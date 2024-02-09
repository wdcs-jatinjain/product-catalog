import express from 'express';
import CustomerController from './customer';

const WebController = express.Router();


WebController.use('/customer', CustomerController)
export default WebController;
