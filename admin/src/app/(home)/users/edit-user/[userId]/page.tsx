import React from 'react'
import EditUserComponent from '@/app/components/Users/Edit-User'

const EditSingleUserPage = ({params}:{params:{userId:string}}) => {
  return (
    
    <div><EditUserComponent   userId={params.userId} /></div>
  )
}

export default EditSingleUserPage