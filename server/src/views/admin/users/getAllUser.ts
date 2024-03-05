import User from "../../../models/user";

export default async function getAllUser() {
  try {
    const allUsers = await User.aggregate([
      {
        $match: { isDeleted: false }
      },
      {
        $lookup: {
          from: 'roles',
          localField: 'role',
          foreignField: '_id',
          as: 'role'
        }
      },
      {
        $unwind: '$role'
      },
      {
        $project: {
          _id: 1,
          name: 1,
          email: 1,
          password: 1,
          streetAddress: 1,
          postalCode: 1,
          city: 1,
          country: 1,
          phone: 1,
          isAdmin: 1,
          isDeleted: 1,
          isActive: 1,
          createdAt: 1,
          updatedAt: 1,
          roleId: '$role._id', 
          roleName: '$role.name' 
        }
      }
    ]);

    return allUsers;
  } catch (error: any) {
    console.error("An error occurred while fetching the User:", error);
    throw new Error(error);
  }
}
