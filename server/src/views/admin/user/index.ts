import checkAdminLogin from "./checkAdminLogin";
import createUser from "./createUser";
import getAllUser from "./getAllUser";
import removeUser from "./removeUser";
import editUser from "./editUser";
import getSingleUser from "./getSingleUser";

const UserViews = Object.freeze({
  checkAdminLoginViews: checkAdminLogin,
  createUserViews: createUser,
  getAllUserViews: getAllUser,
  removeUserViews: removeUser,
  editUserViews: editUser,
  getSingleUserViews:getSingleUser
});
export default UserViews;
