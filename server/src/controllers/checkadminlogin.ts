// import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User from '../models/user/user.model';

const checkAdminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email }).exec();

    if (admin) {
      if (password === admin.password) {
        res.json({ message: 'Login Successful' });
      } else {
        res.status(401).json({ message: 'Invalid Password' });
      }
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default checkAdminLogin;
