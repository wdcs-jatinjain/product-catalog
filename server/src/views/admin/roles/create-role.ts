import { addRoleBody } from "../../../types";
import { RESULT_STATUS } from "../../../constant";
import Role from "../../../models/role";

export default async function createRole({ name}: addRoleBody) {
  try {
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Role already exists.",
      };
    }
    const newRole = await Role.create({name });
    return  {
      status: RESULT_STATUS.SUCCESS,
      message: "Role created Successfully.",
      id: newRole._id.toString(),
    };
  } catch (error: any) {
    console.error("An error occurred while creating the role:", error);
    throw new error();
  }
}
