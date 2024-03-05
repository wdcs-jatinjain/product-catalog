import EditRoleComponent from '@/app/components/Roles/Edit-Role'
import React from 'react'

const EditRolePage = ({params}:{params:{roleId:string}}) => {

  return (
    <div className="border-[10px] h-full"><EditRoleComponent  roleId={params.roleId} />
    
    
    </div>
    
  )
}

export default EditRolePage