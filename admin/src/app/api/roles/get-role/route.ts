import { NextResponse } from "next/server";
import { API_URL } from "../../../../../config";
import { GetRoleReturnData } from "@/types";

export async function GET(req: Request,{params}:{params:{roleId:string}} ) {
  try {
    const GetRoleResponse = await fetch(`${API_URL}/roles/getRole?id=${params.roleId}`,{
      cache:'no-cache'
    });
    const GetRoleReturnData:GetRoleReturnData = await GetRoleResponse.json();
    return NextResponse.json({ GetRoleReturnData });
  } catch (error) {
    console.error("Error while getting single the role:", error);
    throw error;
  }
}
