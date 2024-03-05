import { RESULT_STATUS } from "../../../constant";
import Role from "../../../models/role";

export default async function deleteRole( id: string) {
  // const userId = new mongoose.Types.ObjectId(id);

  try {

    const removedaRole= await Role.findByIdAndUpdate(id
     , {isDeleted: true});
     if(!removedaRole){
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Role does not exists in database",
      };
     }
    return {
      status: RESULT_STATUS.SUCCESS,
      message: "Role Deleted.",
      // roleDetails
    }
    
  } catch (error: any) {
    console.error("An error occurred while fetching the role", error);
    throw new error();
  }
}
// import Role from "../../../models/role";
// import { RESULT_STATUS } from "../../../constant";
// import mongoose from 'mongoose'

// export default async function deleteRole( 
//   id: string) {
//   const roleId = new mongoose.Types.ObjectId(id);
//   try {
//     const role = await Role.findById({ _id: roleId, isDeleted: false });
//     if (role && role.role[0]=='superAdmin'){
// return {
//         status: RESULT_STATUS.FAILURE,
//         message: "User not allowed to delete",
//         data: {
//           id: role._id,
//         },
//     }
//   }else{
//     const removedaRole = await Role.findByIdAndUpdate({ _id: roleId }, {isDeleted: true})
//     if (!removedaRole) {
//       return {
//         status: RESULT_STATUS.FAILURE,
//         message: "Role does not exists in database",
//       };
//     }
//     else {
//       return {
//         status: RESULT_STATUS.SUCCESS,
//         message: "Role deleted successfully from database",
//       };
//     }


//   }
//   } catch (error: any) {
//     console.error("An error occurred while deleting the role :", error);
//     throw new error();
//   }
// }
