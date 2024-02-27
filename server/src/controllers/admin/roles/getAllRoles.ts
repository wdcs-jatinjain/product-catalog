import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";
import RoleViews from "../../../views/admin/roles";

export default async function getAllRoles(req: Request, res: Response) {
  try {
    const fetchAllRoles = await RoleViews.getAllRoleViews()
    return res.status(200).json(fetchAllRoles);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while fetching the roles.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while fetching the roles:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while fetching the roles.",
        error: error.message || "Unknown error",
      };
    }
  }
}
