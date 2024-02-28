import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";
import RoleViews from "../../../views/admin/roles";

export default async function deleteRole({query:{id}}:{query:{id:string}}, res: Response) {
  try {
    const removeRoleViewsRes = await RoleViews.deleteRoleViews(id)
    console.log("🚀 ~ deleteRole ~ id:", id)
    return res.status(200).json(removeRoleViewsRes);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while deleting the users.",
        error: error.details.map((err: any) => err.message)
      };
    } else {
      console.error("An error occurred while deleting the user:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while deleting the user.",
        error: error.message || "Unknown error",
      };
    }
  }
}
