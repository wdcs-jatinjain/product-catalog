import { NextResponse } from "next/server";
import { API_URL } from "../../../../../../config";
import { UserEditResponseData } from "@/types";

export async function PATCH(req: Request, {params}:{params:{userId:string}}) {
  const { name, email, role,country,phone,postalCode ,streetAddress,city,password} = await req.json();
  try {
  
    const EditededUserResponse = await fetch(
      `${API_URL}/user/edit?id=${params.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, role,country,phone,postalCode ,streetAddress,city,password }),
      }
    );

   
    const UserEditedReturnData:UserEditResponseData = await EditededUserResponse.json();   
    return NextResponse.json(UserEditedReturnData);
  } catch (error) {
    console.error("Error while Editing the User:", error);
    throw error;
  }
}
