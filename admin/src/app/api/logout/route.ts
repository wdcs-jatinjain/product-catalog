import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  try {
    cookies().delete("token")
    return NextResponse.json({
      status: 'Success',
      message:'Logout Successful'
    } )
     
    
  } catch (error: any) {
    throw error
  }
}
