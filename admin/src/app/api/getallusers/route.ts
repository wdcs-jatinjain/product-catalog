import { NextResponse } from "next/server";
import { API_URL } from "../../../../config";

export async function GET(req: Request) {
  try {
    const GetAllUserResponse = await fetch(`${API_URL}/user/getAll`);
    const GetAllUsersReturnData = await GetAllUserResponse.json();
    return NextResponse.json({ GetAllUsersReturnData });
  } catch (error) {
    console.error("Error while getting all the User:", error);
    throw error;
  }
}
