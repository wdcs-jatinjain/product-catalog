import CustomerModel from "../../models/customer";
import bcrypt from "bcryptjs";

export default async function loginCustomer(req: any, res: any) {
  try {
    const { email, password } = req.body;

    const existingCustomer = await CustomerModel.findOne({ email });
    if (!existingCustomer) {
      return {
        status: "Failure",
        message: "User not found. Please register First.",
      };
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingCustomer.password
    );
    if (!isPasswordValid) {
      return {
        status: "Failure",
        message: "Invalid password.",
      };
    }

    return {
      status: "Success",
      message: "Login successful.",
      data: {
        id: existingCustomer._id,
    //    name: existingCustomer.name,
        email: existingCustomer.email,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while logging in the user:", error);
    throw new Error(error.message || "Unknown error");
  }
}
