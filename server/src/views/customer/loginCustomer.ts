import Customer from "../../models/customer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

const loginCustomer = async (req: any, res: any, _next: any) => {
  const { email, password } = req.body;
  const { token } = req.headers;

  try {
    if (token) {
      const decodedToken: any = jwt.verify(token, SECRET_KEY as string);
      const { customerID } = decodedToken;

      const existingUser = await Customer.findById(customerID);
      if (!existingUser) {
        return {
          status: "failure",
          message: "User not found. Please sign up.",
        };
      }
      const isPasswordCorrect = bcrypt.compareSync(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return { status: "failure", message: "Invalid email or password." };
      }

      return { status: "success", message: "Successfully logged in" };
    } else {
      const existingUser = await Customer.findOne({ email: email });
      if (!existingUser) {
        return {
          status: "failure",
          message: "User not found. Please sign up.",
        };
      }

      const isPasswordCorrect = bcrypt.compareSync(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return { status: "failure", message: "Invalid email or password." };
      }
      const expiresIn = 7200;
      const newToken = jwt.sign(
        { customerID: existingUser._id },
        SECRET_KEY as string,
        { expiresIn }
      );
      return {
        status: "success",
        message: "Successfully logged in",
        token: newToken,
      };
    }
  } catch (error: any) {
    console.error("An error occurred while Logging of the Customer:", error);
    throw new Error("An error occurred while Logging in the Customer");
  }
};

export default loginCustomer;
