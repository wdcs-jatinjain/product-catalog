import User from "../../../models/user";
import { addRoles } from "../../../types";
import { RESULT_STATUS } from "../../../constant";
import Roles from "../../../models/role";

export default async function createRole({ name, rolePermissions }: addRoles) {
  try {
    const existingRole = await Roles.findOne({ name });
    if (existingRole) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Role already exists.",
      };
    }
    const newRole = await Roles.create({name, rolePermissions});
    console.log("🚀 ~ createRole ~ newRole:", newRole)
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Role created successfully",
      data: {
        id: newRole._id.toString(),
      },
    };
  } catch (error: any) {
    console.error("An error occurred while creating the user:", error);
    throw new error();
  }
}
