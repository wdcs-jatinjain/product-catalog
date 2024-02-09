import { NextResponse } from "next/server";
import { API_URL } from "../../../../config";
import { RegisterReturnType } from "@/types";


export async function POST(req: Request) {
  try {
    const { name, email, password, phone, zipCode} = await req.json();
    const response = await fetch(`${API_URL}/customer/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, phone, zipCode }),
    });
    const data: RegisterReturnType = await response.json();
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error registering new customer:", error);
  throw error;
  }
}