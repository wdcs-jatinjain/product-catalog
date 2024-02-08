import Views from "../../views"; 
import { validateCustomerRegistration } from "./CustomerValidations";
import { registerBody } from "../../types";

export default async function RegisterCustomer({ body: { email, name, password ,phone,zipCode} }: {body:registerBody}, res: any) {
  try {
    await validateCustomerRegistration.validateAsync({ name, email, password,phone,zipCode }, {abortEarly: false});
    const createdUser = await Views.CustomerViews.createCustomerViews({name, email, password,phone,zipCode});
    return res.status(200).json(createdUser);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: "Failure",
        message: "Validation error occurred while registering the user.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while registering the user:", error);
      return {
        status: "Failure",
        message: "An error occurred while registering the user.",
        error: error.message || "Unknown error",
      };
    }
  }
}
