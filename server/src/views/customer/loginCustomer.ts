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
            return res.status(400).json( {status:"failure",message:"User not found. Please sign up."} );
        }
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        console.log('first', isPasswordCorrect)
        if (!isPasswordCorrect) {
            return res.status(400).json( {status:"failure", message:"Invalid email or password."} );
        }
        
        return res.status(200).json({status:"success",message:"Successfully logged in"});
    } catch (error:any) {
        console.error("Error logging in:", error);
        return res.status(500).json({status:"failure", message:"Internal server error"} );
    }
};

export default loginCustomer;