import { AdminLoginDataType } from "@/types";
import { API_URL } from "../../../../config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data:AdminLoginDataType = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.info("Something Went Wrong", error);
  }
}
