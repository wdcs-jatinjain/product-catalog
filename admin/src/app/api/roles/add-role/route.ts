import { NextResponse } from "next/server";
import { API_URL } from "../../../../../config";
import { RoleAddReturnData } from "@/types";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const AddedRoleResponse = await fetch(`${API_URL}/role/createRole`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name}),
    });
    const RoleAddedReturnData: RoleAddReturnData =
      await AddedRoleResponse.json();

    return NextResponse.json(RoleAddedReturnData);
  } catch (error) {
    console.error("Error while adding new user:", error);
    throw error;
  }
}
