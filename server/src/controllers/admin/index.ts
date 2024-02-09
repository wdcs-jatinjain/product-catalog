import express from 'express';
import UserController from './users';

const AdminController = express.Router();


AdminController.use('/user', UserController)
export default AdminController;
