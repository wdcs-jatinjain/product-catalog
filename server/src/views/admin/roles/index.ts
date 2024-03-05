import createRole from "./create-role";
import deleteRole from "./delete-role";
import editRole from "./edit-role";
import getAllRoles from "./getAllRoles";
import getRole from "./getRole";


const RoleViews = Object.freeze({

    getAllRoleViews: getAllRoles,
    getRoleViews: getRole,
    createRoleViews: createRole,
    editRoleViews:editRole,
    deleteRoleViews:deleteRole


    
  });
  export default RoleViews;