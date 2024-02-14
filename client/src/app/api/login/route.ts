import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "../../../../config";
import { LoginReturnType } from "@/types";

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
    const data: LoginReturnType = await CustomerLoginResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error registering new customer:", error);
    throw error;
  }
}
