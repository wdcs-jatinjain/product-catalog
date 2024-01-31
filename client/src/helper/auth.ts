// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export const getDataFromToken = (request: NextRequest) => {
//     try {
//         const token = request.cookies.get("token")?.value || '';
//         const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
//         return decodedToken.id;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }

// } 
import bcryptjs from 'bcryptjs'

export const hashPassword = (password: any) => {
    return new Promise((resolve,reject) =>{ 
        bcryptjs.genSalt(12, (err: any, salt: any) =>{
            if(err){
                reject(err);
            }
            bcryptjs.hash(password, salt, (err: any,hash: unknown) =>{
                if(err){
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

export const comparePassword = async (password: any, hashed: any) =>{
    return await bcryptjs.compare(password,hashed);     
};
