
import { API_URL } from '../../../../config';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {

  try {
    const { email, password } = await req.json();
<<<<<<< Updated upstream
    const res = await fetch(`${API_URL}admin/login`, {
=======
    const res = await fetch(`${API_URL}/admin/login`, {
>>>>>>> Stashed changes
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
      const data = await res.json();
      return NextResponse.json(data);
  } catch (error) {
    console.info('Something Went Wrong', error);
  }
}
