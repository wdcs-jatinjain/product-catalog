import { Request, Response } from 'express';
import Customer from '../../models/customer/customer.model';

const registerUser = async (req: Request, res: Response) => {
  const { name, email,password  }= req.body;

  try {
    const newCustomer = await Customer.create({ name, email, password });
    console.log("New user:", newCustomer);
    res.status(201).json({ message: "Customer created successfully", customer: newCustomer });
  } catch (error) {
    console.error("Error creating Customer:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default registerUser ;
