import Customer from '../../models/customer';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const loginCustomer = async (req:any, res:any, _next:any) => {
    const { email, password } = req.body;

    try {
        console.log('second', email, password)
        const existingUser = await Customer.findOne({ email: email });
        if (!existingUser) {
            return  {status:"failure",message:"User not found. Please sign up."} ;
        }
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        console.log('first', isPasswordCorrect)
        if (!isPasswordCorrect) {
            return {status:"failure", message:"Invalid email or password."} ;
        }
        
        return {status:"success",message:"Successfully logged in"};
    } catch (error:any) {
        console.error("An error occurred while Logging of the Customer:", error);
        throw new error;
    }
};

export default loginCustomer;