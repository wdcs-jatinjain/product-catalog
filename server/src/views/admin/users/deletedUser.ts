import User from "../../../models/user";
import { RESULT_STATUS } from "../../../constant";
import mongoose from 'mongoose'

export default async function deletedUser( 
  id: string) {
  const userId = new mongoose.Types.ObjectId(id);
  try {
    const user = await User.findById({ _id: userId, isDeleted: false });
    if (user && user.role[0]=='superAdmin'){
return {
        status: RESULT_STATUS.FAILURE,
        message: "User not allowed to delete",
        data: {
          id: user._id,
        },
    }
  }else{
    const removedaUser = await User.findByIdAndUpdate({ _id: userId }, {isDeleted: true})
    if (!removedaUser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User does not exists in database",
      };
    }
    else {
      return {
        status: RESULT_STATUS.SUCCESS,
        message: "User deleted successfully from database",
      };
    }


  }
  } catch (error: any) {
    console.error("An error occurred while deleting the user :", error);
    throw new error();
  }
}
