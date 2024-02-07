import jwt from "jsonwebtoken";
import Customer from "../../models/customer";
import { SECRET_KEY } from "../../config";

const checkCustomerAuth = async (req: any, res: any, next: any) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const tokenPayload: any = jwt.verify(token, SECRET_KEY as string);
      const { customerID } = tokenPayload;
      req.customer = await Customer.findById(customerID).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  }
  if (!token) {
    res
      .status(401)
      .send({ status: "failed", message: "Unauthorized User, No Token" });
  }
};
export default checkCustomerAuth;
