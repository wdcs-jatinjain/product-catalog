import checkAdminLogin from "./checkAdminLogin";
import createUser from "./createUser";
import getAllUser from './getAllUser'
import removeUser from "./removeUser";
 import editUser from "./editUser";

const UserViews = Object.freeze({
    checkAdminLoginViews: checkAdminLogin,
    createUserViews:createUser,
    getAllUserViews:getAllUser,
    removeUserViews:removeUser,
    editUserViews:editUser

})
export default UserViews;