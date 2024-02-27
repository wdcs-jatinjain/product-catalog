import Customer from "../../../models/customer";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { SECRET_KEY } from "../../../config";
import { RESULT_STATUS } from "../../../constant";

const loginCustomer = async ({ email, password, token }: any) => {
  try {
    if (token) {
      if (!token.startsWith("Bearer ")) {
        return {
          status: RESULT_STATUS.FAILURE,
          message: "Invalid token format.",
        };
      }

      const checkToken = token.slice(7);
      let decodedToken: JwtPayload;
      try {
        decodedToken = jwt.verify(checkToken, SECRET_KEY as string) as JwtPayload;
      } catch (error) {
        return {
          status: RESULT_STATUS.FAILURE,
          message: "Invalid token or token has expired.",
        };
      }

      const existingCustomer = await Customer.findOne({ email: email });
      if (!existingCustomer || decodedToken.customerID !== existingCustomer._id.toString()) {
        return {
          status: RESULT_STATUS.FAILURE,
          message: "User not found or invalid token.",
        };
      }

      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User found in the database.",
        token: token,
      };
    } else {
      const existingCustomer = await Customer.findOne({ email: email });
      if (!existingCustomer) {
        return {
          status: RESULT_STATUS.FAILURE,
          message: "Customer not found in the database.",
        };
      }

      const isPasswordCorrect = await bcrypt.compare(password, existingCustomer.password);
      if (!isPasswordCorrect) {
        return {
          status: RESULT_STATUS.FAILURE,
          message: "Invalid email or password.",
        };
      }

      const newToken = jwt.sign(
        { customerID: existingCustomer._id },
        SECRET_KEY as string,
        { expiresIn: "2d" }
      );

      return {
        status: RESULT_STATUS.SUCCESS,
        message: "Customer authenticated successfully and new token generated.",
        token: newToken,
      };
    }
  } catch (error: any) {
    console.error("An error occurred while logging in the customer:", error);
    throw new Error("An error occurred while logging in the customer");
  }
};

export default loginCustomer;
