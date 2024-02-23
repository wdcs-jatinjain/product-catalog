import checkAdminLogin from "./checkAdminLogin";
import createUser from "./createUser";
import getAllUser from "./getAllUser";
import editUser from "./editUser";
import getSingleUser from "./getSingleUser";
import deletedUser from "./deletedUser";

const UserViews = Object.freeze({
  checkAdminLoginViews: checkAdminLogin,
  createUserViews: createUser,
  getAllUserViews: getAllUser,
  deletedUserViews: deletedUser,
  editUserViews: editUser,
  getSingleUserViews:getSingleUser
});
export default UserViews;
