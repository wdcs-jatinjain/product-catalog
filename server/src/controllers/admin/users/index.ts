import express from 'express';
import checkAdminLogin from './checkAdminLogin';

const UserController = express.Router();


UserController.post('/login', checkAdminLogin)

export default UserController;