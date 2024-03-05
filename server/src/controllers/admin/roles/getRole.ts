import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";
import RoleViews from "../../../views/admin/roles";
import { getRoleType } from "../../../types";

export default async function getRole(req:Request,res: Response) {
console.log(req.query)
  const id = req.query.id as string

  try {
    const roleDetails = await RoleViews.getRoleViews({id})
    return res.status(200).json(roleDetails);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while fetching single role.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while fetching Single role:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while fetching single role.",
        error: error.message || "Unknown error",
      };
    }
  }
}
