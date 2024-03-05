import { addRoleBody, addRoleRes } from "../../../types";
import { RESULT_STATUS } from "../../../constant";
import  {Response}  from "express";
import { validateAddedRole } from "./addRoleValidations";
import RoleViews from "../../../views/admin/roles";

export default async function addRole(
  { body: { name } }: { body: addRoleBody },
  res: Response)
{
  try {
    await validateAddedRole.validateAsync({ name},{ abortEarly: false });
    const createRoleViewsRes:addRoleRes = await RoleViews.createRoleViews({name})
    return res.status(200).json(createRoleViewsRes);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      res.status(400).json( {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while creating the role.",
        error: error.details.map((err: any) => err.message),
      });
    } else {
      console.error("An error occurred while creating the role:", error);
      res.status(400).json( {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while creating the role.",
        error: error.message || "Unknown error",
      });
    }
  }
}
