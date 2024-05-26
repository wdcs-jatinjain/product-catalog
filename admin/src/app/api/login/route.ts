import { API_URL } from "../../../../config";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { UserFormData } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log(`${API_URL}/user/login`);
    
    const UserLoginResponse = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cache: "no-store",
      },
      body: JSON.stringify({ email, password }),
    });
    const UserLoginReturnData:UserFormData = await UserLoginResponse.json();
    console.log("🚀 ~ POST ~ UserLoginReturnData:", UserLoginReturnData)
    if (UserLoginReturnData.status === 'Success'){
      cookies().set("token", UserLoginReturnData.token);
    return NextResponse.json(UserLoginReturnData);
    }
    if(UserLoginReturnData.status === 'Failure'){
      return NextResponse.json({status:"Failure", message:"Login Failed"})
    }
  } catch (error) {
    throw error;
  }
}
