import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";
import { checkAdminValidator } from "./user-type";
import Views from "../../views";

const checkAdminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await checkAdminValidator.validateAsync(req.body, { abortEarly: false });

    const { email, password } = req.body;

    const isLoggedUser = Views.UserViews.checkAdminLoginViews(email, password, res)
   return isLoggedUser;
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ status: "Failure", message: error.message });
    }
    console.error("Error in checkAdminLogin:", error);
    return res.status(500).json({status: "Failure", message: "Internal Server Error" });
  }
};
export default checkAdminLogin;