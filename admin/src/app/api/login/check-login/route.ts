import { API_URL } from "../../../../../config";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    const checkLoginResponse = await fetch(`${API_URL}/user/check-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cache: "no-store",
      },
      body: JSON.stringify({token }),
    });
    const checkLoginData:any = await checkLoginResponse.json();
    if (checkLoginData.status === 'Success'){
      cookies().set("session", checkLoginData.session);
    return NextResponse.json(checkLoginData);
    }
    if(checkLoginData.status === 'Failure'){
      return NextResponse.json({status:"Failure", message:"Login Failed"})
    }
  } catch (error) {
    console.info("Something went wrong", error);
  }
}
