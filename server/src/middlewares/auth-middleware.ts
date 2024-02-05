import jwt from 'jsonwebtoken';
import Customer from '../models/customer';

const checkCustomerAuth = async (req: any, res: any, next:any) => {
    let token;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
        try {
           token = authorization.split(' ')[1];
            const SECRET : any= process.env.JWT_SECRET_KEY;
            const decodedToken: any = jwt.verify(token, SECRET);
            const { customerID } = decodedToken;
            req.customer = await Customer.findById(customerID).select('-password');

            console.log('first')
            next()
        } catch (error) {
            console.log(error);
            return res.status(401).send({ status: "failed", message: "Unauthorized User" });
        }
    }
    if (!token) {
        console.log('second')
        return res.status(401).send({ status: "failed", message: "Unauthorized User, No Token" });

    }
}
export default checkCustomerAuth;