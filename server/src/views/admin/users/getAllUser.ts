import User from "../../../models/user";

export default async function getAllUser() {
  try {
    const allUsers = await User.find();
    return allUsers;
  } catch (error: any) {
    console.error("An error occurred while fetching the User:", error);
    throw new error();
  }
}
