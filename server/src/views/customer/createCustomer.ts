import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import Customer from "../../models/customer";
import {SECRET_KEY} from '../../config'

export default async function createCustomer(req: any, res:any) {
  try {
    const { name, email, password, phone, zipCode } = req.body;

    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return {
        status: "failure",
        message: "User already exists. Please login.",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newCustomer = await Customer.create({
      name,
      email,
      password: hashedPassword,
      phone,
      zipCode,
    });

    await newCustomer.save();
    const saved_customer = await Customer.findOne({ email: email });
    const token = jwt.sign({ customerID: saved_customer._id }, SECRET_KEY as string, {
      expiresIn: "2d",
    });
    return({
      status: "success",
      message: "Registration Success",
      token: token,
      data: {
        id: newCustomer._id,
      },
    });
  } catch (error: any) {
    console.error("An error occurred while registering the user:", error);
throw new error;
  }
}
