import Views from "../../../views";
import { validateAddedUser } from "./addUserValidations";
import { addUserBody } from "../../../types";
import { RESULT_STATUS } from "../../../constant";
import { Response } from "express";

export default async function addUser(
  { body: { email, name, role } }: { body: addUserBody },
  res: Response
) {
  try {
    await validateAddedUser.validateAsync(
      { email, name, role },
      { abortEarly: false }
    );

    const AddedUser = await Views.UserViews.createUserViews({
      email,
      name,
      role,
    });
    return res.status(200).json(AddedUser);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while creating the user.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while creating the user:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while creating the user.",
        error: error.message || "Unknown error",
      };
    }
  }
}
