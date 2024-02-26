import { NextResponse } from "next/server";
import { API_URL } from "../../../../../config";
import { GetAllUsersReturnData } from "@/types";

export async function GET(req: Request) {
  try {
    const GetAllUserResponse  = await fetch(`${API_URL}/user/getAll`,{
      cache:"no-cache"
    });
    const GetAllUsersReturnData:GetAllUsersReturnData = await GetAllUserResponse.json();
    return NextResponse.json({GetAllUsersReturnData} );
  } catch (error) {
    console.error("Error while getting all the user:", error);
    throw error;
  }
}
