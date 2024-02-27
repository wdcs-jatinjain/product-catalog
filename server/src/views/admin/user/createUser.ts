import User from "../../../models/user";
import { addUserBody } from "../../../types";
import { RESULT_STATUS } from "../../../constant";

export default async function createUser({  email, name, role, streetAddress,postalCode,city, country, phone,password }: addUserBody) {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "User already exists.",
      };
    }
    const newUser = await User.create({
      email, name, role, streetAddress,postalCode,city, country, phone,password
    });
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "User created successfully",
      data: {
        id: newUser._id.toString(),
      },
    };
  } catch (error: any) {
    console.error("An error occurred while creating the user:", error);
    throw new error();
  }
}
