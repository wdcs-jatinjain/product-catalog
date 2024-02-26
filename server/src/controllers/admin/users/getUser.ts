import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";

export default async function getUser(req:Request,res: Response) {

  const id = req.query.id as string

  try {
    const userDetails = await Views.UserViews.getSingleUserViews({id});
    return res.status(200).json(userDetails);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while fetching single user.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while fetching Single user33:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while fetching Single user222.",
        error: error.message || "Unknown error",
      };
    }
  }
}
