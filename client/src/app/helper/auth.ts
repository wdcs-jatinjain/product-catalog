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