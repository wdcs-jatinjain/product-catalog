
import createUser from "./createUser";
import getAllUser from "./getAllUser";
import editUser from "./editUser";
import getSingleUser from "./getSingleUser";
import deletedUser from "./deletedUser";
import doLogin from "./doLogin";

const UserViews = Object.freeze({
  doLoginViews: doLogin,
  createUserViews: createUser,
  getAllUserViews: getAllUser,
  deletedUserViews: deletedUser,
  editUserViews: editUser,
  getSingleUserViews:getSingleUser
});
export default UserViews;
