import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";
import { GetSingleUsersReturnData } from "@/types";

export async function GET(req: Request,{params}:{params:{userId:string}} ) {
  try {
    const GetSingleUserResponse = await fetch(`${API_URL}/user/get?id=${params.userId}`);
    const GetSingleUsersReturnData:GetSingleUsersReturnData = await GetSingleUserResponse.json();
    return NextResponse.json({ GetSingleUsersReturnData });
  } catch (error) {
    console.error("Error while getting single the User:", error);
    throw error;
  }
}
