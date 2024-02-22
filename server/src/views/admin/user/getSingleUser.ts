import mongoose from "mongoose";
import { RESULT_STATUS } from "../../../constant";
import User from "../../../models/user";

export default async function getSingleUser({
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
  console.log("🚀 ~ id:", id)
  const userId = new mongoose.Types.ObjectId(id);

  try {
    const singleUser = await User.findById({_id:userId} );
    console.log("🚀 ~ singleUser:", singleUser)
    if (singleUser) {
      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User Created Successfully",
        data: singleUser
      };
    }
     else {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "No user found",
      };
     }

     
  } catch (error: any) {
    console.error("An error occurred while fetching Single User 1111:", error);
    throw new error();
  }
}
