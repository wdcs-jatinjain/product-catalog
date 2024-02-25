import mongoose from 'mongoose'
import { RESULT_STATUS } from "../../../constant";
import User from "../../../models/user";

export default async function getSingleUser({

  id,
  email, name, role, password, phone, city, country, streetAddress, postalCode
}: {
  name: string;
  email: string;
  role: string;
  id: string;
  password: string, phone: string, city: string, country: string, streetAddress: string, postalCode: string
}) {
  const userId = new mongoose.Types.ObjectId(id)
  try {
    const singleUser = await User.findById({ _id: userId });
    if (singleUser) {
      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User fetched Successfully",
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
