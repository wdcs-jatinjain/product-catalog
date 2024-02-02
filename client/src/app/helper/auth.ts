

import bcryptjs from 'bcryptjs';

export const hashPassword = async (password: any) => {
    try {
        const salt = await bcryptjs.genSalt(12);
        const hash = await bcryptjs.hash(password, salt);
        return hash;
    } catch (err) {
        throw err;
    }
};

export const comparePassword = async (password: any, hashed: any) => {
    try {
        const match = await bcryptjs.compare(password, hashed);
        return match;
    } catch (err) {
        throw err;
    }
};