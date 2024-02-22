import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";

export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const EditededUserResponse = await fetch(
      `${API_URL}/user/edit?id=${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const UserEditedReturnData = await EditededUserResponse.json();
    return NextResponse.json(UserEditedReturnData);
  } catch (error) {
    console.error("Error while Editing the User:", error);
    throw error;
  }
}
