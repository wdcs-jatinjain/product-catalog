import { ADMIN_SECRET_KEY } from "../../config";
import User from "../../models/user";
import jwt from "jsonwebtoken";

export default async function checkAdminLogin({ email, password }: { email: string; password: string }){
try {
  const admin = await User.findOne({ email })
  if (!admin){
    return {
      status: "failure",
      message: "Admin not found in the database.",
    };
  }
  if (password !== admin.password) {
         return{ status: "Failure", message: "Invalid Password" }
  }
         const newToken = jwt.sign(
      { adminID: admin._id },
      ADMIN_SECRET_KEY as string,
      { expiresIn: "2d" }
    );
    return {
      status: "success",
      message: "Customer found in the database. New token generated.",
      token: newToken,
    };

}catch (error: any) {
  console.error("An error occurred while logging in the Admin:", error);
  throw new Error("An error occurred while logging in the Admin");
}
}