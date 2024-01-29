import CustomerModel from "../../models/customer";
import bcrypt from "bcryptjs";

export default async function createUser(req: any, res: any){
    try {
        const { name, email, password, phone, zipcode } = req.body;
    
        async function findOneCustomerByEmail(email: string) {
    
          try {
            const customer = await CustomerModel.findOne({ email });
            return customer;
          } catch (error) {
            console.error("Error occurred while finding customer by email:", error);
            throw error;
          }
        }
        const existingCustomer = await findOneCustomerByEmail(email);
        if (existingCustomer) {
          return res.status(400).json({
            status: "Failure",
            message: "User already exists. Please login.",
          });
        }
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const newCustomer = await CustomerModel.create({
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
        });
      }
}