import React from 'react'
import EditUserComponent from '@/app/components/Users/Edit-User'

const EditUserPage = ({params}:{params:{userId:string}}) => {
  return (
    
    <div className="border-[10px] h-full"><EditUserComponent   userId={params.userId} /></div>
  )
}

export default EditUserPage