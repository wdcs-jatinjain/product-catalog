import { NextResponse } from "next/server";
import { API_URL } from "../../../../config";

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const DeletededUserResponse = await fetch(
      `${API_URL}/user/delete?id=${id}`,
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
