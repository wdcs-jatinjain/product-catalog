import Views from "../../views";
import { validateCustomerLogin } from "./CustomerValidations";
import { loginBody } from "../../types";

export default async function LoginCustomer({ body: { email, password } }: { body:  loginBody  },res:any) 
{
  try {
    await validateCustomerLogin.validateAsync({email,password}, { abortEarly: false });
    const logedinCustomer = await Views.CustomerViews.loginCustomerViews(
      {email,password},res);
    return res.status(200).json(logedinCustomer);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: "Failure",
        message: "Validation error occurred while Logging the user.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while Logging the Customer:", error);
      return {
        status: "Failure",
        message: "An error occurred while Logging in the Customer.",
        error: error.message || "Unknown error",
      };
    }
  }
}
