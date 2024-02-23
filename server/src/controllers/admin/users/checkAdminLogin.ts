import { checkAdminValidator } from "./user-type";
import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response } from "express";

export default async function checkAdminLogin(
  { body: { email, password } }: { body: { email: string; password: string } },
  res: Response
) {
  try {
    await checkAdminValidator.validateAsync(
      { email, password },
      { abortEarly: false }
    );
    const checkAdminLoginViewsRes = await Views.UserViews.checkAdminLoginViews({
      email,
      password,
    });
    return res.status(200).json(checkAdminLoginViewsRes);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while Logging the Admin.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while Logging the Admin:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while Logging in the Admin.",
        error: error.message || "Unknown error",
      };
    }
  }
}
