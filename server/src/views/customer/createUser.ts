import CustomerModel from "../../models/customer";
import bcrypt from "bcryptjs";

export default async function createUser(req: any, res: any) {
  try {
    const { name, email, password, phone, zipCode } = req.body;

    const existingCustomer = await CustomerModel.findOne({ email });
    if (existingCustomer) {
      return {
        status: "Failure",
        message: "User already exists. Please login.",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newCustomer = await CustomerModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      zipCode,
    });

    return {
      status: "Success",
      message: "User registered.",
      data: {
        id: newCustomer._id,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while registering the user:", error);

    throw new Error(error.message || "Unknown error");
  }
}
