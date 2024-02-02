import { NextResponse } from "next/server";
import { API_URL } from "../../../../config";


export async function POST(req: Request) {
  try {
    const { name, email, password, phone, zipCode} = await req.json();
    console.log("🚀 ~ POST ~ name, email, password, phone, zipCode :", name, email, password, phone, zipCode )
    const response = await fetch(`${API_URL}/customer/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, phone, zipCode }),
    });
    const data: any = await response.json();
    console.log("🚀 ~ POST ~ data:", data)
    return NextResponse.json(data)

  } catch (error) {
    console.error("Error registering new customer:", error);
  throw error;
  }
}
