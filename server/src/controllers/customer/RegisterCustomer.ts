import Views from "../../views";
import { validateCustomerRegistration } from "./CustomerValidations"; 

export default async function RegisterCustomer(req: any, res: any) {
  try {
    await validateCustomerRegistration.validateAsync(req.body, { abortEarly: false });
    const createdUser = await Views.CustomerViews.createCustomerViews(req, res);
    return res.status(200).json(createdUser);
    
  } catch (error:any) {
    if (error.name === "ValidationError") {
      return {
        status: "failure",
        message: "Validation error occurred while registering the user.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while registering the user:", error);
      return {
        status: "failure",
        message: "An error occurred while registering the user.",
        error: error.message || "Unknown error",
      }
    }
  }
}