import Views from "../../../views";
import { validateAddedUser } from "./addUserValidations";
import { addUserBody, addUserRes } from "../../../types";
import { RESULT_STATUS } from "../../../constant";
import  {Response}  from "express";

export default async function addUser(
  { body: { email, name, role, streetAddress,postalCode,city, country, phone,password } }: { body: addUserBody },
  res: Response)
{
  
  try {
    await validateAddedUser.validateAsync(
      { email, name, role, streetAddress,postalCode,city, country, phone,password},
      { abortEarly: false }
    );
    
    const createUserViewsRes:addUserRes = await Views.UserViews.createUserViews( { email, name, role, streetAddress,postalCode,city, country, phone,password})
    return res.status(200).json(createUserViewsRes);

  } catch (error: any) {
    if (error.name === "ValidationError") {
      res.status(400).json( {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while creating the user.",
        error: error.details.map((err: any) => err.message),
      });
    } else {
      console.error("An error occurred while creating the user:", error);
      res.status(400).json( {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while creating the user.",
        error: error.message || "Unknown error",
      });
    }
  }
}
