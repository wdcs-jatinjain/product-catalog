// import bcrypt from "bcryptjs";
// import { ValidationError } from "joi";
// import { checkCustomerValidator } from "../../views/user/validations";
// import  {checkCustomerRegister,findOneCustomerByEmail}  from "../../controllers/customer/checkcustomerregister";
// import Customer from "../../models/customer";
// import bcrypt from "bcryptjs";


// export async function registerCustomer(req: any, res: any) {
//   try {
//     await checkCustomerValidator.validateAsync(req.body, { abortEarly: false });

//     const { name, email, password, phone, zipcode } = req.body;

//     const existingCustomer =await findCustomerByEmail(email);
//     if (existingCustomer) {
//       return res.status(400).json({
//         status: "Failure",
//         message: "User already exists. Please login.",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     await checkCustomerRegister({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       zipcode,
//     });

//     return res.status(200).json({
//       status: "Success",
//       message: "User registered.",
//     });
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       return res.status(400).json({
//         status: "Failure",
//         message: error.message,
//       });
//     }

//     console.error("An error occurred while registering the user:", error);
//     return res.status(500).json({
//       status: "Failure",
//       message: "An error occurred while registering the user.",
//       error: error,
//     });
//   }
// }
// async function findCustomerByEmail(email: any) {

//  const customer = await Customer.findOne({ email });
//   return customer;
// }


import { checkCustomerRegister, findOneCustomerByEmail } from "../../controllers/customer/checkcustomerregister";
import Customer from "../../models/customer";
import bcrypt from "bcryptjs";

export async function RegisterUser(req: any, res: any) {
  try {
    

    const { name, email, password, phone, zipcode } = req.body;

    const existingCustomer = await findOneCustomerByEmail(email);
    if (existingCustomer) {
      return res.status(400).json({
        status: "Failure",
        message: "User already exists. Please login.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newCustomer = await Customer.create({
      name,
      email,
      password: hashedPassword,
      phone,
      zipcode,
    });

    return res.status(200).json({
      status: "Success",
      message: "User registered.",
      data: newCustomer,
    });
  } catch (error) {
    console.error("An error occurred while registering the user:", error);
    return res.status(500).json({
      status: "Failure",
      message: "An error occurred while registering the user.",
      // error: error.detail,
    });
  }
}


