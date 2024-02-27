import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";
import { GetUserReturnData } from "@/types";

export async function GET(req: Request,{params}:{params:{userId:string}} ) {
  try {
    const GetUserResponse = await fetch(`${API_URL}/user/get?id=${params.userId}`,{
      cache:'no-cache'
    });
    const GetUserReturnData:GetUserReturnData = await GetUserResponse.json();
    return NextResponse.json({ GetUserReturnData });
  } catch (error) {
    console.error("Error while getting single the user:", error);
    throw error;
  }
}
