import mongoose from "mongoose";
import { RESULT_STATUS } from "../../../constant";
import Role from "../../../models/role";

export default async function getRole({id}: {id: string}) {
  try {
    const roleDetails= await Role.findOne({_id: new mongoose.Types.ObjectId(id), isDeleted: false, isActive: true});
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Role Details Fetched.",
      data: roleDetails
    }
    
  } catch (error: any) {
    console.error("An error occurred while fetching the role", error);
    throw new error();
  }
}
