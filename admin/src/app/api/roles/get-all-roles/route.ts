import { NextResponse } from "next/server";
import { API_URL } from "../../../../../config";
import { GetAllRolesReturnData } from "@/types";

export async function GET(req: Request) {
  try {
    const GetAllRoleResponse  = await fetch(`${API_URL}/roles/getAllRoles`,{
      cache:"no-cache"
    });
    const GetAllRolesReturnData:GetAllRolesReturnData = await GetAllRoleResponse.json();
    console.log("🚀 ~ GET ~ GetAllRolesReturnData:", GetAllRolesReturnData)
    
    return NextResponse.json({GetAllRolesReturnData} );
  } catch (error) {
    console.error("Error fetching roles", error);
    throw error;
  }
}
