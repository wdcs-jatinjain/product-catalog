import Views from "../../views";
import { validateCustomerLogin } from "./CustomerValidations";

export default async function LoginCustomer(req: any, res: any)  {
    try {
        await validateCustomerLogin.validateAsync(req.body, { abortEarly: false });
        const logedinCustomer = await Views.CustomerViews.loginCustomerViews(req,res, null)
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
            }
        }
    }
}
