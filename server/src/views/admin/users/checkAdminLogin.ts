import { ADMIN_SECRET_KEY } from "../../../config";
import User from "../../../models/user";
import jwt from "jsonwebtoken";
import { RESULT_STATUS } from "../../../constant";

export default async function checkAdminLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const admin = await User.findOne({ email });
    if (!admin) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User not found in the database.",
      };
    }
    if (password !== admin.password) {
      return { status: RESULT_STATUS.FAILURE, message: "Invalid Password" };
    }
    const newToken = jwt.sign(
      { adminID: admin._id },
      ADMIN_SECRET_KEY as string,
      { expiresIn: "2d" }
    );
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Login Successfull. Welcome to Admin Panel",
      token: newToken,
    };
  } catch (error: any) {
    console.error("An error occurred while logging in the Admin:", error);
    throw new Error("An error occurred while logging in the Admin");
  }
}
