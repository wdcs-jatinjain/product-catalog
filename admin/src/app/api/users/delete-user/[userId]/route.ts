import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";

export async function DELETE(req: Request, {params}: any) {
  try {
    const DeletededUserResponse = await fetch(
      `${API_URL}/user/delete?id=${params.userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const UserDeletedReturnData = await DeletededUserResponse.json();
    return NextResponse.json(UserDeletedReturnData);
  } catch (error) {
    console.error("Error while Deleting User:", error);
    throw error;
  }
}
