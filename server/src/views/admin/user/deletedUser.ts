import User from "../../../models/user";
import { RESULT_STATUS } from "../../../constant";
import mongoose from 'mongoose'

export default async function deletedUser( 
  id: string) {
  const userId = new mongoose.Types.ObjectId(id);
  try {
    const user = await User.findById({ _id: userId });
    if (user && user.role[0]=='superAdmin'){
return {
        status: RESULT_STATUS.FAILURE,
        message: "User Not Allowed to Delete",
        data: {
          id: user._id,
        },
    }
  }else{
    const removedaUser = await User.findByIdAndDelete({ _id: userId })
    if (!removedaUser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User does not Exists in Database",
      };
    }
    else {
      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User deleted Successfully from Database",
      };
    }


  }
  } catch (error: any) {
    console.error("An error occurred while Deleting the User :", error);
    throw new error();
  }
}
