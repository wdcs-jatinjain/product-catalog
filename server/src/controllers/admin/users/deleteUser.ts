import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";
import { deleteUserRes } from "../../../types";

export default async function deleteUser({query:{id}}:{query:{id:string}}, res: Response) {
  try {
    const removeUserViewsRes:deleteUserRes = await Views.UserViews.deletedUserViews(id); 
    return res.status(200).json(removeUserViewsRes);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while deleting the users.",
        error: error.details.map((err: any) => err.message)
      };
    } else {
      console.error("An error occurred while deleting the user:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while deleting the user.",
        error: error.message || "Unknown error",
      };
    }
  }
}
