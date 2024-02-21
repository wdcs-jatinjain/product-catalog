import User from "../../../models/user";
import { RESULT_STATUS } from "../../../constant";
import mongoose from "mongoose";

export default async function removeUser(id: any) {
  const userId = new mongoose.Types.ObjectId(id);
  try {
    const removedaUser = await User.findByIdAndDelete({ _id: userId });
    if (!removedaUser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User does not Exists in Database",
      };
    }
    if (removedaUser) {
      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User Deleted Successfully",
        data: {
          id: removedaUser._id,
        },
      };
    }
  } catch (error: any) {
    console.error("An error occurred while Deleting the User :", error);
    throw new error();
  }
}
