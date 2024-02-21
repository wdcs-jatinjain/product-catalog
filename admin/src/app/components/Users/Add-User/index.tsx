'use client'
import React from 'react'
import AddUserForm from '../../Forms/AddUserForm'
import PageHeader from '../../PageHeader'
import PageLayout from '../../pageLayout'
import Link from 'next/link'

const AddUserComponent = () => {
  const onAddingUser = async()=>{

  }
  return (
    <PageLayout>
    <div className='flex-col '>
      <div className='flex gap-5 m-5'>
      <Link href={'/users'}>{'<'}</Link>
      <PageHeader pageTitle='Add User' showAddButton={false}  />
      </div>
    
      <div className='m-5 justify-between'>
        <AddUserForm onAddingUser={onAddingUser}/>
      </div>
    </div>
  </PageLayout>
  )
}

export default AddUserComponent