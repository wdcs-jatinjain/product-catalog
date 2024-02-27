import { RESULT_STATUS } from "../../../constant";
import Role from "../../../models/role";

export default async function getAllRoles() {
  try {
    const allRoles= await Role.find().select({_id:1, name:1});
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Roles Fetched.",
      data: allRoles
    }
    
  } catch (error: any) {
    console.error("An error occurred while fetching the role", error);
    throw new error();
  }
}
