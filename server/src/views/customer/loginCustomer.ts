import Customer from "../../models/customer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

const loginCustomer = async (req: any, res: any, _next: any) => {
  const { email, password } = req.body;
  const { token } = req.headers;
console.log(req.headers)
  try {
    let existingCustomer;
console.log(token)
    if (token) {
      
      if (token.startsWith("Bearer")) {
        existingCustomer = await Customer.findOne({ email: email });
console.log(existingCustomer)
        if (existingCustomer) {
          const checkToken = token.split(" ")[1];
          const decodedToken: any = jwt.decode(checkToken);

          if (decodedToken && decodedToken.exp && Date.now() / 1000 < decodedToken.exp) {

          const { customerID } :any= jwt.verify(
            checkToken,
            SECRET_KEY as string
          );
console.log(customerID)

console.log(customerID === existingCustomer._id.toString())
          if (customerID === existingCustomer._id.toString()) {
            return {
              status: "success",
              message: "User found in the database.",
              token: token,
            };
          }

        } else {
          return {
            status: "failure",
            message: "Token has expired.",
          };
        }
        } else {
          return {
            status: "failure",
            message: "User not found in the database.",
          };
        }
      } else {
        return {
          status: "failure",
          message: "Invalid token format.",
        };
      }
    } else {
      existingCustomer = await Customer.findOne({ email: email });
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
      if (!existingCustomer.token) {
        const newToken = jwt.sign(
          { customerID: existingCustomer._id },
          SECRET_KEY as string,
          { expiresIn: "2d" }
        );
        return {
          status: "success",
          message: "Customer found in the database but New Token Generated.",
          token: newToken,
        };
      } else {
        return {
          status: "success",
          message: "User found in the database.",
          token: existingCustomer.token,
        };
      }
    }
  } catch (error: any) {
    console.error("An error occurred while logging in the customer:", error);
    throw new Error("An error occurred while logging in the customer");
  }
};

export default loginCustomer;

