import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";
import User from "../../models/user/index"
import { checkAdminValidator } from "../../views/user/validations";

const checkAdminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await checkAdminValidator.validateAsync(req.body, { abortEarly: false });

    const { email, password } = req.body;
    const admin = await User.findOne({ email })

    if (admin) {
      if (password !== admin.password) {
        return res.status(401).json({ status: "Failure", message: "Invalid Password" });
      } else {
        return res.status(200).json({ status: "Success", message: "Login Successful" });
      }
    } else {
      return res.status(404).json({ status: "Failure", message: "User not found" });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ status: "Failure", message: error.message });
    }

    console.error("Error in checkAdminLogin:", error);
    return res.status(500).json({status: "Failure", message: "Internal Server Error" });
  }
};

export default checkAdminLogin;
