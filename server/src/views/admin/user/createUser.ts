import User from "../../../models/user";
import { addUserBody } from "../../../types";
import { RESULT_STATUS } from "../../../constant";

export default async function createUser({ name, email, role }: addUserBody) {
  console.log("🚀 ~ createUser ~ createUser:", createUser)
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User already exists.",
      };
    }
    const newUser = await User.create({
      name,
      email,
      role,
    });
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "User Created Successfully",
      data: {
        id: newUser._id,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while creating the User:", error);
    throw new error();
  }
}
