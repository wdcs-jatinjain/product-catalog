import { API_URL } from "../../../../config";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { UserFormData } from "@/types";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const UserLoginResponse = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cache: "no-store",
      },
      body: JSON.stringify({ email, password }),
    });
    const UserLoginReturnData:UserFormData = await UserLoginResponse.json();
    if (UserLoginReturnData.status === 'Success'){
      cookies().set("token", UserLoginReturnData.token);
    return NextResponse.json(UserLoginReturnData);
    }
    if(UserLoginReturnData.status === 'Failure'){
      return NextResponse.json({status:"Failure", message:"Login Failed"})
    }
  } catch (error) {
    console.info("Something went wrong", error);
  }
}
