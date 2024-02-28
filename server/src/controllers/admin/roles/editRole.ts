import { RESULT_STATUS } from "../../../constant";
import { Response } from "express";
import { validateEditRole } from "./editRoleValidation";
import RoleViews from "../../../views/admin/roles";

export default async function editRole(
  { body: { name }, query }: { body: { name: string }; query: { id: string } },
  res: Response
) {
  const id: string = query.id;
  try {
    await validateEditRole.validateAsync({ name }, { abortEarly: false });
    const editRole = await RoleViews.editRoleViews({
      name,
      id,
    });
    return res.status(200).json(editRole);
  } catch (error: any) {
    if (error === "ValidationError") {
      return res.status(400).json({
        status: RESULT_STATUS.FAILURE,
        message: error.details.map((err: any) => err.message),
      });
    } else {
      console.error("An error occurred while editing the role:", error);
      return res.status(500).json({
        status: RESULT_STATUS.FAILURE,
        message:
          error.details.map((err: any) => err.message) || "Unknown error",
      });
    }
  }
}
