import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";

export async function PATCH(req: Request,  {params}: any) {
  const { name, email, role } = await req.json();
  try {
  
    const EditededUserResponse = await fetch(
      `${API_URL}/user/edit?id=${params.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, role }),
      }
    );

    const UserEditedReturnData = await EditededUserResponse.json();
    return NextResponse.json(UserEditedReturnData);
  } catch (error) {
    console.error("Error while Editing the User:", error);
    throw error;
  }
}
