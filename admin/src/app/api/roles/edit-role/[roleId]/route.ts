import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";
import { RoleEditResponseData } from "@/types";

export async function PATCH(
  req: Request,
  { params }: { params: { roleId: string } }
) {
  const { _id, name } = await req.json();
  try {
    const EditedRoleResponse = await fetch(
      `${API_URL}/roles/editRole?id=${params.roleId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          name,
        }),
      }
    );
    const RoleEditedReturnData:RoleEditResponseData = await EditedRoleResponse.json();
    console.log(RoleEditedReturnData);
    return NextResponse.json(RoleEditedReturnData);
  } catch (error) {
    console.error("Error while editing the role:", error);
    throw error;
  }
}
