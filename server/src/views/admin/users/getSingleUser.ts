import mongoose from "mongoose";
import { RESULT_STATUS } from "../../../constant";
import User from "../../../models/user";

export default async function getSingleUser({ id }: { id: string }) {
  try {
    const singleUser = await User.findById({ _id: new mongoose.Types.ObjectId(id), isDeleted: false });
    if (singleUser) {
      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User fetched successfully",
        data: singleUser,
      };
    } else {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "No user found",
      };
    }
  } catch (error: any) {
    console.error("An error occurred while fetching single user :", error);
    throw new error();
  }
}
