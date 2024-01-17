import { Request, Response } from 'express';
import User from '../../models/user/user.model';

const registerUser = async (req: Request, res: Response) => {
  const { name, email,password , streetAddress,postalCode ,city,country ,  phone} = req.body;

  try {
    const newUser = await User.create({ name, email, password,streetAddress, postalCode,city
      ,country , phone });
    console.log("New user:", newUser);
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default registerUser ;
