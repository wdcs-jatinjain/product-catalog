import Customer from "../../models/customer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

const loginCustomer = async (
  { email, password }: { email: string; password: string },
  _next: any
) => {
  try {
    const existingCustomer = await Customer.findOne({ email });
    if (!existingCustomer) {
      return {
        status: "failure",
        message: "User not found in the database.",
      };
    }
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      existingCustomer.password
    );
    if (!isPasswordCorrect) {
      return {
        status: "failure",
        message: "Invalid email or password.",
      };
    }
    const newToken = jwt.sign(
      { customerID: existingCustomer._id },
      SECRET_KEY as string,
      { expiresIn: "2d" }
    );
    return {
      status: "success",
      message: "Customer found in the database. New token generated.",
      token: newToken,
    };
  } catch (error: any) {
    console.error("An error occurred while logging in the customer:", error);
    throw new Error("An error occurred while logging in the customer");
  }
};

export default loginCustomer;
