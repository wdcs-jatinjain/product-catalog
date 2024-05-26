import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";
import RoleViews from "../../../views/admin/roles";
import { validateRole } from "./createRoleValidation";

export default async function createRole(req: Request, res: Response) {
  try {
    const {body: {name, rolePermissions}} = req;
    console.log(name, rolePermissions);
    await validateRole.validateAsync(
        {  name, rolePermissions},
        { abortEarly: false }
      );
    const createdRole = await RoleViews.createRoleViews({name, rolePermissions})
    return res.status(200).json(createdRole);
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
