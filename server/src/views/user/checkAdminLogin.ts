import User from "../../models/user";

export default async function checkAdminLogin(email: string, password: string, res: any){
    const admin = await User.findOne({ email })

    if (admin) {
      if (password !== admin.password) {
        return res.status(401).json({ status: "Failure", message: "Invalid Password" });
      } else {
        return res.status(200).json({ status: "Success", message: "Login Successful" });
      }
    } else {
      return res.status(404).json({ status: "Failure", message: "User not found" });
    }
    
}