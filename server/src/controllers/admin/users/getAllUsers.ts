import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";

export default async function getAllUsers(req:Request,res:Response) {
  try {
    const fetchAllUsers = await Views.UserViews.getAllUserViews()
    return res.status(200).json(fetchAllUsers);
    
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while fetching the users.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while fetching the user33:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while fetching the user222.",
        error: error.message || "Unknown error",
      };
    }
  }
}
