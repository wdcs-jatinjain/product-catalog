import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response } from "express";
import { validateAdminUser } from "./doAdminLoginValidation";

export default async function doLogin(
  { body: { email, password } }: { body: { email: string; password: string } },
  res: Response
) {
  try {
    await validateAdminUser.validateAsync(
      { email, password },
      { abortEarly: false }
    );
    const doLoginViewsRes = await Views.UserViews.doLoginViews({
      email,
      password,
    });
    return res.status(200).json(doLoginViewsRes);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while logging the admin.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while logging the admin:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while logging in the admin.",
        error: error.message || "Unknown error",
      };
    }
  }
}
