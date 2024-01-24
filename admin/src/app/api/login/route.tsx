import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const SERVER_URL = 'https://localhost:8000/api/admin/login';

export  async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secret: any = process.env.JWT_SECRETKEY;

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ error: 'Username and Password is required' });
        }


        const Response = await fetch(`${SERVER_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!Response.ok) {
            const errorMessage = await Response.text();
            return res.status(400).json({ error: errorMessage });
        }

        const user = await Response.json();

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Incorrect Password' });
        }

        const tokenData = {
            email: user.email,
            id: user._id,
        };
        const token = jwt.sign(tokenData, secret, { expiresIn: '1d' });

        res.json({ message: 'Login Successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went Wrong' });
    }
}
export default handler;
