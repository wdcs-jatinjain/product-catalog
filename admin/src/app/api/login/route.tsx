
import { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '../../../../config';


export async function POST(req: NextApiRequest, res: NextApiResponse) {

  try {
    const { email, password } = req.body;
    const res = await fetch(`${API_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const user = await res.json();
    console.log("🚀 ~ POST ~ user:", user)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

