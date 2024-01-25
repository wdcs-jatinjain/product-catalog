import Customer from "../../../models/customer/index";
import bcrypt from "bcryptjs";

import { ValidationError } from "joi";
import { checkCustomerValidator } from "../../../views/user/validations";

export async function checkCustomerRegister(req: any, res: any) {
  try {
    console.log(req.body);

    await checkCustomerValidator.validateAsync(req.body, { abortEarly: false });

    const { name, email, password, phone, zipcode } = req.body;

    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.json(
        { status: "Failure", message: "User already exists. Please login." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const a = await Customer.create({
      name,
      email,
      password: hashedPassword,
      phone,
      zipcode,
    });
    console.log("🚀 ~ checkCustomerRegister ~ a:", a);

    return res
      .status(200)
      .json({ status: "Success", message: "User registered." });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.json(
        { status: "Failure", message: error.message },
        { status: 400 }
      );
    }

    console.error("An error occurred while registering the user:", error);
    return res.json(
      {
        status: "Failure",
        message: "An error occurred while registering the user.",
        error,
      },
      { status: 500 }
    );
  }
}

export default checkCustomerRegister;
