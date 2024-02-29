import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";
import { RoleDeleteReturnData } from "@/types";

export async function DELETE(
  req: Request,
  { params }: { params: { roleId: string } }
) {
  try {
    const DeletedRoleResponse = await fetch(
      `${API_URL}/roles/deleteRole?id=${params.roleId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const RoleDeletedReturnData: RoleDeleteReturnData =
      await DeletedRoleResponse.json();

    return NextResponse.json(RoleDeletedReturnData);
  } catch (error) {
    console.error("Error while Deleting Role:", error);
    throw error;
  }
}
