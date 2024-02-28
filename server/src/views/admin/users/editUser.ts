import User from "../../../models/user";
import { RESULT_STATUS } from "../../../constant";
import mongoose from "mongoose";

export default async function editUser({
  email, name, role, streetAddress, postalCode, city, country, phone, password,
  id,
}: {

  id: string;
  email: string, name: string, role: string, streetAddress: string, postalCode: string, city: string, country: string, phone: string, password: string
}) {
  const userId = new mongoose.Types.ObjectId(id);
  try {
    const existingUser = await User.findOne({ _id: new mongoose.Types.ObjectId(id), isDeleted: false });
    if (!existingUser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User Not Found"
      };
    }

    const updateduser = await User.findByIdAndUpdate(
      { _id: userId },
      { email, name, role, streetAddress, postalCode, city, country, phone, password },
      { new: true }
    );

    const validRoles = await User.findOne({ role });
    if (!validRoles) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Not a valid user role.",
      };
    }
    if (!updateduser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Something went wrong",
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
