import React from 'react'

const EditRolePage = ({params}:{params:{userId:string}}) => {
  return (
    
    <div className="border-[10px] h-full"><EditRoleComponent   userId={params.userId} /></div>
  )
}

export default EditRolePage