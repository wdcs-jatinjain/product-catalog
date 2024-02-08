import bcrypt from "bcryptjs";
import Customer from "../../models/customer";

export default async function createCustomer({name, email, password}:{name:string, email:string, password:string}) {
  try {
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
      
    });
    await newCustomer.save();
       return {
      status: "success",
      message: "Registration Success",
      data: {
        id: newCustomer._id,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while registering the user:", error);
    throw new error();
  }
}
