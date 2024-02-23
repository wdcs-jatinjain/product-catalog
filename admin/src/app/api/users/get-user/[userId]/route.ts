import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";
import { GetSingleUserReturnData } from "@/types";

export async function GET(req: Request,{params}:any ) {
  try {
    const GetSingleUserResponse = await fetch(`${API_URL}/user/get?id=${params.userId}`);
    const GetSingleUsersReturnData:GetSingleUserReturnData = await GetSingleUserResponse.json();
    return NextResponse.json({ GetSingleUsersReturnData });
  } catch (error) {
    console.error("Error while getting single the User:", error);
    throw error;
  }
}
