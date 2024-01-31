//import jwt from 'jsonwebtoken';
import Customer from '../../models/customer';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const LogInCustomer = async (req:any, res:any, _next:any) => {
    const { email, password } = req.body;

    try {
        const existingUser = await Customer.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json( "User not found. Please sign up." );
        }

        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json( "Invalid email or password." );
        }
        // const jwtSecretKey = process.env.JWT_SECRET_KEY;

        // if (!jwtSecretKey) {
        //     console.error('JWT_SECRET_KEY is not defined in the environment.');
        // }
        // const token = jwt.sign({ id: existingUser._id }, jwtSecretKey, {
        //     expiresIn: "1h", 
        // });

     
        // console.log("Generated Token:", token);

        // if (req.cookies[existingUser._id]) {
        //     res.clearCookie(String(existingUser._id));
        // }

        // res.cookie(String(existingUser._id), token, {
        //     path: "/",
        //     expires: new Date(Date.now() + 3600000), 
        //     httpOnly: true,
        //     sameSite: "lax",
        // });

        return res.status(200).json("Successfully logged in");
    } catch (error:any) {
        console.error("Error logging in:", error);
        return res.status(500).json("Internal server error" );
    }
};

export default LogInCustomer;
