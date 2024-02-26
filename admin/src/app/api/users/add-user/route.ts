import { NextResponse } from "next/server";
import { API_URL } from "../../../../../config";
import { UserAddReturnData } from "@/types";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      role,
      phone,
      postalCode,
      streetAddress,
      city,
      country,
      password,
    } = await req.json();
    const AddedUserResponse = await fetch(`${API_URL}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        role,
        phone,
        postalCode,
        streetAddress,
        city,
        country,
        password,
      }),
    });
    const UserAddedReturnData :UserAddReturnData= await AddedUserResponse.json();

    return NextResponse.json(UserAddedReturnData);
  } catch (error) {
    console.error("Error while Adding New User:", error);
    throw error;
  }
}
