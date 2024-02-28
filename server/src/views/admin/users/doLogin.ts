import { ADMIN_SECRET_KEY } from "../../../config";
import User from "../../../models/user";
import jwt from "jsonwebtoken";
import { RESULT_STATUS } from "../../../constant";
import Roles from "../../../models/role";

export default async function doLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const userDetails = await User.findOne({ email, isActive: true, isDeleted: false });
    if (!userDetails) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User not found in the database.",
      };
    }
    if (password !== userDetails.password) {
      return { status: RESULT_STATUS.FAILURE, message: "Invalid Password" };
    }
    const assignedRolePermission = await Roles.findOne({_id:userDetails.role})
    console.log("🚀 ~ assignedRolePermission:", assignedRolePermission)
    const newToken = jwt.sign(
      { adminID: userDetails._id },
      ADMIN_SECRET_KEY as string,
      { expiresIn: "2d" }
    );
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Login Successful. Welcome to Admin Panel",
      token: newToken,
      permissions: assignedRolePermission.rolePermissions
    };
  } catch (error: any) {
    console.error("An error occurred while logging in the Admin:", error);
    throw new Error("An error occurred while logging in the Admin");
  }
}









