import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "../../../../config";
import { LoginReturnType } from "@/types";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const CustomerLoginResponse = await fetch(`${API_URL}/customer/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const ClientLoginReturnData: LoginReturnType = await CustomerLoginResponse.json();
    cookies().set('token', ClientLoginReturnData.token)
    return NextResponse.json(ClientLoginReturnData);
  } catch (error) {
    console.error("Error registering new customer:", error);
    throw error;
  }
}