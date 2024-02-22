import { NextResponse } from "next/server";
import { API_URL } from "../../../../../config";

export async function POST(req: Request) {
  try {
    const { name, email, role } = await req.json();
    console.log(name, email, role, API_URL);
    const AddedUserResponse = await fetch(`${API_URL}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, role }),
    });
    const UserAddedReturnData = await AddedUserResponse.json();
    return NextResponse.json(UserAddedReturnData);
  } catch (error) {
    console.error("Error while Adding New User:", error);
    throw error;
  }
}
