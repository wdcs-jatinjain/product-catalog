import { UserFormData } from "../../../types";
import {API_URL}  from '../../../../config'

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache":"no-cache"
      },
      body: JSON.stringify({ email, password }),
    });
    const data:UserFormData = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.info("Something Went Wrong", error);
  }
}
