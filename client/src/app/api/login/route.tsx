import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "../../../../config";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const response = await fetch(`${API_URL}/customer/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data: any = await response.json();
    console.log("🚀 ~ POST ~ data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error registering new customer:", error);
    throw error;
  }
}
