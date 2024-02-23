import Views from "../../../views";
import { RESULT_STATUS } from "../../../constant";
import { Response, Request } from "express";

export default async function deleteUser(req: Request, res: Response) {
  const id: string = req.query.id as string;
  try {
    const deletedUser = await Views.UserViews.deletedUserViews(id); //Array is only return over here
    return res.status(200).json(deletedUser);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while deleting the users.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while deleting the user33:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while deleting the user222.",
        error: error.message || "Unknown error",
      };
    }
  }
}
