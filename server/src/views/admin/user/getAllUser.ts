import User from "../../../models/user";
import { RESULT_STATUS } from "../../../constant";

export default async function getAllUser() {
  try {
    const allUsers = await User.find();
    return allUsers;
    // return {
    //  data:allUsers,
    // status:RESULT_STATUS.SUCCESS,
    // message:'Fetched all the Users Successfully'
    // }
  } catch (error: any) {
    console.error("An error occurred while fetching the User 1111:", error);
    throw new error();
  }
}
