import { RESULT_STATUS } from "../../../constant";
import mongoose from "mongoose";
import Role from "../../../models/role";

export default async function editRole({
  name,
  id,
}: {
  id: string;
  name: string;
}) {
  const roleId = new mongoose.Types.ObjectId(id);
  try {
    const existingRole = await Role.findOne({
      _id: new mongoose.Types.ObjectId(id),
      isDeleted: false,
    });
    if (!existingRole) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "role Not Found",
      };
    }

    const updatedRole = await Role.findByIdAndUpdate(
      { _id: roleId },
      { name },
      { new: true }
    );

    if (!updatedRole) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Something went wrong",
      };
    }

    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Role updated successfully",
      data: {
        updatedRole: id,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while editing the user:", error);
    throw error;
  }
}
