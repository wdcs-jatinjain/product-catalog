import User from "../../../models/user";
import { RESULT_STATUS } from "../../../constant";
import mongoose from "mongoose";

export default async function editUser({
  email,
  name,
  role,
  id,
}: {
  name: string;
  email: string;
  role: string;
  id: string;
}) {
  const userId = new mongoose.Types.ObjectId(id);
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return {
        status: RESULT_STATUS.FAILURE,
      };
    }

    const updateduser = await User.findByIdAndUpdate(
      { _id: userId },
      { name, email, role },
      { new: true }
    );

    const validRoles = await User.findOne({ role });
    if (validRoles) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Not a valid User role.",
      };
    }
    if (!updateduser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Something Went Wrong",
      };
    }

    return {
      status: RESULT_STATUS.SUCCESS,
      message: "User updated successfully",
      data: {
        updateduser: id,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while editing the user:", error);
    throw error;
  }
}
