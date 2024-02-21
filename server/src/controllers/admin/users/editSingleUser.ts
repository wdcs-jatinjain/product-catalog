import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response } from "express";
import { validateEditUser } from "./editUserValidation";

export default async function editSingleUser(
  {
    body: { name, email, role },
    query,
  }: { body: { name: string; email: string; role: string }; query: any },
  res: Response
) {
  const id: any = query.id;

  try {
    await validateEditUser.validateAsync(
      { email, name, role },
      { abortEarly: false }
    );
    const editUser = await Views.UserViews.editUserViews({
      email,
      name,role,
      id,
    });
    return res.status(200).json(editUser);
  } catch (error: any) {
    if (error === "ValidationError") {
      return res.status(400).json({
        status: RESULT_STATUS.FAILURE,
        message:  error.details.map((err: any) => err.message),
      });
    } else {
      console.error("An error occurred while editing the Admin:", error);
      return res.status(500).json({
        status: RESULT_STATUS.FAILURE,
        message:  error.details.map((err: any) => err.message)|| "Unknown error",
      });
    }
  }
}
